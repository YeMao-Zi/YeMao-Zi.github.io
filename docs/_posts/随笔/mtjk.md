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

![image-20230913141255147](https://s2.loli.net/2023/09/13/Lr8wy3jbcH2fhdJ.png)
