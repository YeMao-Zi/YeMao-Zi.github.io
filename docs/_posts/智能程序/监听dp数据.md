---
title: 监听dp数据
date: 2022-11-29 17:22:42
permalink: /pages/835d8d/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: 夜猫子
  link: https://github.com/zhushengjie123
titleTag: 
---
## 一个 useDpState 源码

依赖于 publishDps 和 onDpDataChange

**步骤：**

1.使用 `useState()` 初始化 `dpState` 数据

2.内部监听获取设备信息 `useDevInfo()`，返回设备状态`devInfo`，用作监听 dp 数据的依赖

3.在生命周期中监听设备的 dp 变更，并将变更后的数据传入监听的回调，用于重新初始化 `dpState`

4.封装一个 `setDpState` 方法，外部调用时触发 `publishDps` ，下发 dp 数据

5.返回更新后的 `dpState` 数据和 `setDpState` 方法

**代码：**

```js
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDpState = void 0; // void 0 代替 underfine
const api_1 = require("@ray-js/api");
const react_1 = require("react");
const useDevInfo_1 = require("../useDevInfo");
/**
 * 获取当前所有的 dp 点状态
 * @param dpCode 可选 dpCode，如果不传，则返回所有的dpState
 * @returns DpState
 */
function useDpState(dpCode) {
    // "剪切绑定"的形式: (0, foo.fn)(param)
    // 为了调用该函数时 this 不绑定到 react_1 上而是绑定到全局上
    
    // 1.使用 useState 初始化 dp 数据
    const [dpState, setDpState] = (0, react_1.useState)(() => {
        return {};
    });
    
    // 2.内部监听设备信息变化，返回状态用作监听dp依赖
    const devInfo = (0, useDevInfo_1.useDevInfo)();
    
    // 3.定义监听的回调函数，用于重新初始化 dp 数据。
    const _onDpDataChange = (0, react_1.useCallback)(params => {
        if (!params || !params.dps)
            return;
        const { dps } = params;
        const idCodes = (devInfo === null || devInfo === void 0 ? void 0 : devInfo.idCodes) || {};
        const dpCodes = {};
        Object.keys(dps).map(id => {
            dpCodes[idCodes[id]] = dps[id];
            return id;
        });
        setDpState(prevState => {
            return Object.assign(Object.assign({}, prevState), dpCodes);
        });
    }, [devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId]);
    
    // 4.封装 setDpState 方法,传入的值用于触发 publishDps
    const _setDpState = (0, react_1.useCallback)((value, options = {
        mode: 2,
        options: {},
        pipelines: [],
    }) => {
        let data = value;
        if (dpCode) {
            data = { [dpCode]: value };
        }
        const dps = {};
        const codeIds = (devInfo === null || devInfo === void 0 ? void 0 : devInfo.codeIds) || {};
        Object.keys(data).forEach(code => {
            if (codeIds[code] !== undefined) {
                dps[`${codeIds[code]}`] = data[code];
            }
            else {
                dps[code] = data[code];
            }
        });
        (0, api_1.publishDps)(Object.assign({ deviceId: devInfo.devId, dps, success: () => {
                console.log('--------下发 dp 成功', dps);
            }, fail: err => {
                console.log('--------下发 dp 失败', err);
            } }, options));
    }, [devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId]);
    
    // 5.在生命周期中初始化一次 dp 数据
    (0, react_1.useEffect)(() => {
        if (devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId) {
            _onDpDataChange(devInfo);
        }
    }, [dpCode, devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId]);
    
    // 6.在生命周期中绑定设备监听，并销毁监听
    (0, react_1.useEffect)(() => {
        if (!(devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId))
            return;
       // 传入监听回调并监听
        (0, api_1.onDpDataChange)(_onDpDataChange);
        // eslint-disable-next-line consistent-return
        // 传入监听回调并卸载
        return () => {
            (0, api_1.offDpDataChange)(_onDpDataChange);
        };
    }, [devInfo === null || devInfo === void 0 ? void 0 : devInfo.devId]);
    return [(dpCode ? dpState[dpCode] : dpState), _setDpState];
}
exports.useDpState = useDpState;
```

