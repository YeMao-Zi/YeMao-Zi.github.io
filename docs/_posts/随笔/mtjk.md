---
title: mtjk
date: 2023-09-11 09:25:40
permalink: /pages/8847a3/
sidebar: auto
lock: mtjk
article: false
categories:
  - 随笔
tags:
  - 
author: 
  name: 夜猫子
  link: https://github.com/yemao-zi
titleTag: 
---
# 智能标签

## h5添加智能推荐标签

### 套餐推荐

> http://localhost:8183/m/qatest/mealdetailforrecommend?evaluateReportId=20440&classificationId=94&mealId=&chooseCardId=&activityId=&openId=unJoin

1.MealdetailforrecommendView.jsx

推荐套餐页面。

- toSubmitOrder()

跳转setmeal页面并添加params：aiMealId，aiRecommendItems，aiClassificationId，aiClassificationName，aiRecommendType

2.setmeal页面

setmeal/util/index.js 文件

- buildItemsMap（）

为所有数据添加 ui_isAiRecommend 属性标识为智能推荐

SetmealExamItem.jsx

根据 *ui_isAiRecommend* 属性添加 UI

- changeEv()

带有 ui_isAiRecommend 标识数据取消时添加二次弹窗确认

## 加项包推荐

> http://localhost:8183/m/qatest/intelligent/recommend?surveyId=10&hospitalId=147&evaluateReportId=20470&evaluateGender=0&evaluateMarriage=&hospitalSurveyRelationId=85&mealId=&chooseCardId=&activityId=&openId=unJoin

1.IntelligentRecommendView.jsx 页面

获取加项包列表页面。

getRecommendDetailUrl() && getDetailUrl() 跳转入参 

```
      aiMealId: data.mealId || '',
      aiRiskPackageIds: data.packageIds || [23232],
      aiRecommendItems: data.recommendItemIds || [4301787, 4301795],
      aiRecommendType: 2,
```



## 下单

setMealCart.jsx

- submitEv()=>submitOrder()&&submitOrder() 创建订单以及确认订单

跳转页面 submitorderView.jsx

submitorderView.jsx

toSubmitOrder() params新增入参字段

```js
    "recommendPlanDetail": {
      // 推荐套餐的id（从套餐里面进入的推荐项套餐该值为空）
      "mealId": aiMealId,
      // 推荐数据的id（指定套餐和单项的时候才有值）
      "classificationId": aiClassificationId,
      // 推荐数据的名字（指定套餐和单项的时候才有值）
      "ClassificationName": aiClassificationName,
      // 推荐的单项id（不包括套内项目）
      "itemIds": aiRecommendItems,
      // 推荐的风险加项包id（推荐类型为风险加项包的时候才有值）
      "RiskPackageIds": aiRiskPackageIds,
      // 1-按风险值 2-按照套餐和项目
      "recommendType": aiRecommendType
  }1
```

# 查看体检报告详情问卷控制

页面：report/ReportView.jsx

#### ![image-20230913141255147](https://s2.loli.net/2023/09/13/Lr8wy3jbcH2fhdJ.png)

# 开票规则

## 接口

### C端查询开票规则接口

/main/action/getConformInvoiceRule

请求方式：GET

返回参数新增：

```SQL
{
    "id":15,
    "hospitalId":7313,
    "ruleType":3,
    "ruleValue":1,
    "placeOrderPage":true,
    "examOrderPage":true,
    "invoiceIssuingEntity":1,
    "invoiceAmountType":2,
    "makeOutScene":1,
    "makeOutInvoiceEntrance":1,
    "invoiceMethods":[] #开票方式列表:1 纸质邮寄,2 纸质自取,3 电子发票
}
```

### C端查询开票申请接口的抬头类型

/main/action/getInvoiceApply

请求方式：GET

返回参数新增：invoiceTitleType(发票抬头类型:1 企业单位，2 个人/非企业)



### c端查看报告答满意度问卷支持非平台报告

#### C端答题接口

/main/action/diagnosis/createAccountSurvey

请求方式：POST

请求参数新增：reportId(报告id)



#### C端校验查看报告前答题接口

/main/action/examreport/validateBeforeViewReportSurvey

请求方式：POST

请求参数新增：reportId(报告id)



### 订单选择日期时校验是否需要答题

新：/main/action/surveyScene/validateOrderSelectDateSurvey

请求方式：GET

请求参数：hospitalId(医院id)、scene(场景)、orderNum(订单号)

返回参数：surveyId(问卷id)、needQuestionnaire(是否需要答题：false 否，true是)



### C端自动领取优惠券

新：/main/action/coupon/automaticCouponAndRedPackage 

请求方式：GET

请求参数新增：receiveType:0:手动领取 1自动领取 （领取位置）、mealId



## 需求

### 开票规则：

订单来源的优先级判断：1、套餐，2、单位，3、订单来源。只要匹配到的第一个来源不可开票就不可开票。（原逻辑为一直匹配到可开票的来源）

### 开票方式：

当不勾选开票方式/无任何开票方式时，c端用户选择‘需要’时不展示开票信息（扫码付款订单同理）![1280X1280](https://s2.loli.net/2023/09/20/BTrzyNcdXYk6Miv.png)

### 抬头类型：

开票后能使用的抬头类型由后台字段控制。

### 查看满意度问卷：

用户点击平台报告时，需要判断是否有新订单或是否有新的平台报告生成，两种情况出现任意一种时，用户需要填写满意度问卷；（原逻辑为只根据订单判断）

此时如果查看报告前回答满意问卷配置了回答时间间隔，此时无需用户再次回答问卷。

::: tip

前端：提交问卷时携带报告id

:::

### 分配需要问卷的场景：

订单选中日期时需要判断是否需要填写问卷

- 弹窗：‘您有一份问卷#问卷名称#需要填写’，具有 跳过 和 填写 按钮，是否跳过由后台控制。
- 未选日期订单上方默认展示引导问卷优先取套餐配置问卷，如套餐未配置取内网备单订单选择日期前问卷；
- 点击选择体检日期优先取套餐配置问卷，如套餐未配置取内网备单订单选择日期前问卷；

### 优惠券领取：

判断优惠券是否是自动领取方式，提交预约信息时自动领取可领优惠券，并提示‘已为您自动领取#张数#张#金额#优惠券’。

自动领取的优惠券自动选择使用。

订单改项时不自动领取优惠券。

全营销代预约下单不支持自动领取优惠券。
