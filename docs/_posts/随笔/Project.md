---
title: Project
date: 2023-01-25 09:41:07
permalink: /pages/5ed418/
sidebar: auto
article: false
lock: project
categories:
  - 随笔
tags:
  - 
author: 
  name: 夜猫子
  link: https://github.com/yemao-zi
titleTag: 
---





### 记录依赖项

- 更新逻辑：当项目被移除后，因为依赖关系被带入的所有单项同步进行移除；
  - 套餐、加项包新建/编辑：
    - 单项A依赖B，选择A前B未被添加，选择A单项后B单项自动带入，取消A单项后同步将B单项移除，如果此时其他项目仍依赖B，此时B不去选；
  - c端加项、crm改项预约、医生端代预约加项：
    - A、B均为套内项，单项A依赖B，取消A单项后同步将B单项移除，如果此时其他项目仍依赖B或B为必选项，此时B不去选；
    - A、B均为套外加项部分，单项A依赖B，选择A前B已被添加，选择A单项后再取消A单项后，此时仍保留B单项；
    - A、B均为套外加项部分，单项A依赖B，选择A前B未被添加，选择A单项后B单项自动带入，取消A单项后去选B单项，如果此时其他项目仍依赖B，此时B不去选；
  - 订单改项：
    - 单项A依赖B，A和B同时为订单内项目，改项时去选A时，无轮B是因为被A依赖带入订单内还是先选择的B在添加的A，都不会将B去选；
    - A、B均为订单外加项部分，单项A依赖B，选择A前B已被添加，选择A单项后再取消A单项后，此时仍保留B单项；
    - A、B均为订单外加项部分，单项A依赖B，选择A前B未被添加，选择A单项后B单项自动带入，取消A单项后去选B单项，如果此时其他项目仍依赖B，此时B不去选；



**资源：**

后端 /seleteItem 接口返回选中的数据中的依赖关系数组 （dependRelations：`Array<{itemId:number,relationItemId:number}>`）

**方法集合：**

```JavaScript
// checkedByDependMapTools.ts
const getCheckedByDependMap = () => {
  return JSON.parse(sessionStorage.getItem('checkedByDependMap') || '{}') as Record<string, string[]>;
};

const sessionStorageByJson = (obj: Record<string, string[]>) => {
  sessionStorage.setItem('checkedByDependMap', JSON.stringify(obj));
};

type Key = number | string;
export function setCheckedByDependMapFn(key: Key, value: Key[]) {
  const fomitKey = String(key);
  let newValue = JSON.parse(JSON.stringify(value));
  const checkedByDependMap = getCheckedByDependMap();
  const oldValue = Reflect.get(checkedByDependMap, fomitKey) || [];
  newValue = [...new Set(oldValue.concat(newValue))];
  newValue.length && Reflect.set(checkedByDependMap, fomitKey, newValue);
  sessionStorageByJson(checkedByDependMap);
}

// 记录 {A:[B,C]} （记A为绑定项，B、C为依赖项）
export function deleteCheckedByDependMapFn(key: number) {
  const fomitKey = String(key);
  const checkedByDependMap = getCheckedByDependMap();
  Reflect.deleteProperty(checkedByDependMap, fomitKey);
  sessionStorageByJson(checkedByDependMap);
}

export function clearCheckedByDependMapFn() {
  sessionStorageByJson({});
}

// 获取 ids 中以及 依赖集合 中共有的部分（主要是用于判断取消的id中是否含有记录的绑定项）
export function formitIdsWitheCheckedByDependMap(ids: number[]) {
  const checkedByDependMap = getCheckedByDependMap();
  return ids.filter((id) => Reflect.get(checkedByDependMap, String(id)));
}

type DependRelations = {
  itemId: number;
  relationItemId: number;
  [k: string]: any;
}[]; // 可能多条数据 itemId 相同（该 itemID 依赖了多个项目，即多个 relationItemId）

// 当取消的是依赖项时进行处理,满足条件为 ids 添加依赖项
export function deleteWithDependMapIds(ids: number[], targetId: number, CONFIG: any) {
  let newIds = ids;
  const checkedByDependMap = getCheckedByDependMap();
  const dependRelations = CONFIG.dependRelations as DependRelations;
  // 已选中的数据中的依赖关系数组
  const mealItemIds = CONFIG.mealItemIds; // 套内项
  // 判断点击项中是否含有依赖关系
  const relationItems = dependRelations.filter((item) => item.itemId === targetId);

  // 判断是否有其他项依赖指定项
  const hasOtherRelationItem = (id: number) => {
    return dependRelations.filter((item) => item.relationItemId === id && item.itemId !== targetId);
  };

  function deleteWithMap(targetId: number) {
    const fomitTargetId = String(targetId);
    const checkedByDependMap = getCheckedByDependMap();
    let relationItemIds = Reflect.get(checkedByDependMap, fomitTargetId);
    for (let relationItemId of relationItemIds) {
      if (!hasOtherRelationItem(Number(relationItemId))) {
        newIds.push(Number(relationItemId));
        relationItemIds = relationItemIds.filter((id) => id !== relationItemId);
        if (relationItemIds.length) {
          setCheckedByDependMapFn(targetId, relationItemIds);
        } else {
          deleteCheckedByDependMapFn(targetId);
        }
      }
    }
  }

  // 判断是否是套内项
  if (mealItemIds.includes(targetId)) {
    for (let item of relationItems) {
      const relationItemId = item.relationItemId;
      // 判断其依赖项是不是套内项
      if (mealItemIds.includes(relationItemId)) {
        const relationItem = CONFIG.itemsMap.get(relationItemId);
        const isRequest = CONFIG.isRequired(relationItem);
        // 依赖项非必选，无其他项依赖他则将其去选
        if (!isRequest && !hasOtherRelationItem(relationItemId).length) {
          newIds.push(relationItemId);
        }
      }
    }
  }
  // 判断是否是订单内项
  else if (CONFIG.orderId && CONFIG.itemIds.includes(targetId)) {
    for (let item of relationItems) {
      const relationItemId = item.relationItemId;
      // 判断其依赖项是不是订单内项,不是则走依赖集合判断
      if (!CONFIG.itemIds.includes(relationItemId)) {
        deleteWithMap(targetId);
      }
    }
  } else {
    deleteWithMap(targetId);
  }
  return newIds;
}

```

### 处理方式

因 A 使 B 选中，记录依赖项集合{A:B}。

```js
// handle-relation-error.jsx
import {
  setCheckedByDependMapFn,
} from './util/checkedByDependMapTools';
export const createConflictModalConfig = ({
  id,
  errorList,
  CONFIG,
  mealAndSingleAddItemIds,
  onUpdatePrice,
  // onUpdateChooseIds,
  pkgItemBasic,
}) => {
  //...
  // 依赖项
  if (type === 'DEPEND') {
    return {
      ...defaultModalOptions,
      content: <DependMessage currentName={currItem.name} targetNames={relatedItemNames} />,
      cancelText: '取消',
      confirmText: '一键全选',
      onConfirm: () => {
        console.log(currItem, relatedItems);
        setCheckedByDependMapFn(currItem.id, relatedItems[0].id); // <== 👀
        updateCheckInfo({
          checkItems: [...relatedItems, currItem],
          CONFIG,
          mealAndSingleAddItemIds,
          onUpdatePrice,
          pkgItemBasic,
        });
      },
    };
  }

  //...
};
```



#### 手动去选

当 A 去选时，

1. 进行套内项判断：

判断 A 是不是套内项，`dependRelations` 中获取其依赖项 B；若有 B 判断是不是套内项且 `dependRelations` 中没有其他项依赖 B 并判断其是不是必选，若都不是则去选 B

2. 进行订单项判断

检索集合中是否有 A，判断 A 是不是订单项，`dependRelations` 中获取其依赖项 B；如果是订单项不处理，如果不是则同步将其绑定的依赖 B 去选(有其他项依赖B不去选)

```JavaScript
// SetmealView.jsx
import {
  deleteWithDependMapIds,
} from './util/checkedByDependMapTools';
// ...
// 更新 选中状态及价格
const updateChecked = (checkInfo) => {
  // ...
  // 更新 选中或取消 状态
  // 删除
  if (!checked) {
    const _ids = deleteWithDependMapIds(ids, ids[0], CONFIG); // <== 👀
    choosedIds = without(choosedIds, ..._ids);
    newpkgNoSelect = addToPkgNoSelect({
      cancelIds: _ids,
      packageItemList: CONFIG.packageItemList,
      pkgNoSelect: newpkgNoSelect,
    });
    // 新增
  } else {
    choosedIds = [...choosedIds, ...ids];
  }
  // ...
};
```

#### 被动去选

1.同组项等非 err 后台处理

updateChecked 函数：加工 `cancelIds` ,获取 `cancelIds` 中是否包含记录的依赖，再通过上面的 `deleteWithDependMapIds` 函数，处理 `cancelIds` 最终合并 `choosedIds

```js
// SetmealView.jsx
import {
  formitIdsWitheCheckedByDependMap,
  deleteWithDependMapIds,
} from './util/checkedByDependMapTools';
 // ...
  // 更新 选中状态及价格
const updateChecked = (checkInfo) => {  
  // ...
   const checkedByDependMapCancelIds = formitIdsWitheCheckedByDependMap(cancelIds); // <== 👀
    checkedByDependMapCancelIds.forEach((id) => {
      cancelIds = deleteWithDependMapIds(cancelIds, id,CONFIG); // <== 👀
    });
  // ...
}
```

2.替换组等 err 后台处理

提取 `errInfo`,提取 `cancelItemIds`,处理同上

```JavaScript
// handle-relation-error.jsx
export const createCheckState = ({
  cancelItems = [],
  checkItems = [],
  mealAndSingleAddItemIds,
  pkgNosSelect,
  packageItemIds,
  pkgItemBasic,
}) => {
// ...
  const cancelItemIds = cancelItems.map((v) => v.id);
  const checkedByDependMapCancelIds = formitIdsWitheCheckedByDependMap(cancelIds); // <== 👀
  checkedByDependMapCancelIds.forEach((id) => {
    cancelItemIds = deleteWithDependMapIds(cancelIds, id); // <== 👀
  });
  if (cancelItems.length) {
    chooseIds = without(chooseIds, ...cancelItemIds);
  }
  if (checkItems.length) {
    chooseIds = [...chooseIds, ...checkItemIds];
  }
  chooseIds = uniq(chooseIds);
// ...
}
```

### 测试提出的场景：

项目关系：A依赖B 场景一：A+C替换成D，添加A后自动添加了B，再添加C时，触发替换把A替换掉了，此时B需要被去除吗？ 场景二：A和C冲突（互斥、合并、同组、父子，比如A是子项，C是父项），添加A后自动添加了B，再添加C时，因为冲突关系去除了A，此时B需要被去除吗？

### 复杂点

1.需要处理非手动取消导致依赖去选（情况太多了）

2.前端手动记录依赖关系手动并要在适当时候去除依赖关系/清空依赖关系(目前，`deleteWithDependMapId` 函数调用时去除相关集合，在套餐详情页清空所有依赖)

3.一个项目可能多个依赖，每一个依赖都要单独处理

```
让华 43302419741122200X 18033139300
孟紫阳 320323199809123053 13917141743
汪进 420123197005245630 13702509377
```

