---
title: mengto使用RestfulApi
date: 2023-04-18 11:31:09
permalink: /pages/5826ae/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: 夜猫子
  link: https://github.com/yemao-zi
titleTag: 
---
## restFulApi 的三种环境

1.**Guest User:**可匿名访问的Api

2.**Admin User**:必须管理员权限可访问的Api

3.**Customer**:需要用户权限可访问的Api



## 用户端流程：

### 1.创建用户

post *V1/customers*

输入：用户名、密码、邮箱等基础信息

### 2.获取用户token

POST *V1/integration/customer/token*

输入：邮箱、密码

返回：用户 token（该 token 在后续接口调用中，使用 `beare <token>` 形式拼接在请求头中）

### 3.获取产品列表

get *V1/products*

输入：筛选条件（分类id、颜色、尺码等；按价格、时间等升序降序排序）

### 4.获取产品详情

一般通过 skuId 获取产品详情

get V1/products/{*sku*}

### 5.愿望清单（没搞）

- 获取愿望单
get V1/wishlist/customer/items?customerId={customer id}

- 添加愿望单
  post V1/wishlist/customer/product/{customer id}/{product id}

- 移除愿望单

  delete V1/wishlist/customer/item/{customer id}/{product id}

### 6.购物车（没搞）

- 创建购物车
  post V1/carts/mine
  返回：quote id

- 获取购物车列表
  get V1/carts/mine/items

- 添加/修改购物车

  post V1/carts/mine/items（需要用到上面的 quote id）
  
  ```js
  {
   "cart_item": {
       "quote_id": cartId,
       "sku": skuName,
       "qty": 1
       }
  }
  ```
  
  

### 7.地址管理（没搞）

- 获取所有地址
  get /V1/customers/me(其中 addresses 字段就是我们需要的数据,该接口获取了用户的绝大部分消息)

- 添加/修改/删除地址
  put /V1/customers/me(对其中的 addresses 原数据进行修改并上传修改后的数据，替换原数据)

### 8.支付信息

- 获取可用运货方法

  post V1/carts/mine/shipping-methods
  输入：收货地址
  
  ```js
  body:{
      "address": {
          "region": "Trivandrum",
          "region_id": 12,
          "region_code": "CA",
          "country_id": "IN",
          "street": [
              "Amstor house",
              "Eramam"
          ],
          "telephone": "5656565454",
          "postcode": "670390",
          "city": "Kazhakuttam",
          "firstname": "Peter",
          "lastname": "K",
          "same_as_billing": 0,
          "save_in_address_book": 0
      }
  }
  ```

- 根据运输方法返回可用支付方式及支付信息

  post V1/carts/mine/shipping-information

  ```js
  body:{
      "addressInformation": {
          "shipping_address": {
  
              "region": "Trivandrum",
              "region_id": 12,
              "region_code": "CA",
              "country_id": "IN",
              "street": [
                  "Amstor house",
                  "Eramam"
              ],
              "telephone": "5656565454",
              "postcode": "670390",
              "city": "Kazhakuttam",
              "firstname": "Peter",
              "lastname": "K",
  
          },
          "billing_address": {
              "region": "Trivandrum",
              "region_id": 12,
              "region_code": "CA",
              "country_id": "IN",
              "street": [
                  "Amstor house",
                  "Eramam"
              ],
              "telephone": "5656565454",
              "postcode": "670390",
              "city": "Kazhakuttam",
              "firstname": "Peter",
              "lastname": "K",
          },
          "shipping_method_code": "freeshipping",
          "shipping_carrier_code": "freeshipping"
      }
  }
  ```

- 保存付款信息并生成订单
  post V1/carts/mine/payment-information

  ```js
  body:{
      "billingAddres": {
          "region": "Trivandrum",
          "region_id": 12,
          "region_code": "CA",
          "country_id": "IN",
          "street": [
              "Amstor house",
              "Eramam"
          ],
          "telephone": "5656565454",
          "postcode": "670390",
          "city": "Kazhakuttam",
          "firstname": "Peter",
          "lastname": "K"
      },
      "paymentMethod": {
          "method": "paypal_express"
   		"additional_data": {
              "paypal_express_checkout_token" : "EC-xxxxxxxxxxxx",
              "paypal_express_checkout_redirect_required" : false,
              "paypal_express_checkout_payer_id" : "XXXXXXXXXX"
          }
      }
  }
  ```

  





消息订阅

put /V1/customers/{customer_id}

```json
body:{
  "customer": {
    "id": {customer_id},
    "email": "{customer_email}",
    "firstname": "{customer_firstname}",
    "lastname": "{customer_lastname}",
    "extension_attributes": {
     "is_subscribed": true
    }
  }
}
```



```
products/links/types
[
  {
    "code": 1,
    "name": "related"
  },
  {
    "code": 5,
    "name": "crosssell"
  },
  {
    "code": 4,
    "name": "upsell"
  },
  {
    "code": 3,
    "name": "associated"
  }
]

wishlist/index/add/
```





## 订单流程参考

#### **匿名**用户

**1. Create Empty Cart**

```
 End Point = /rest/V1/guest-carts

 Method    = POST
 Output    = token(YOhfu7k6RTJcHYf1yAHImxx5bI7EyA4k)
```

**2. Get Cart ID By Token**

```
 End Point = /rest/V1/guest-carts/(token)

 Method    = GET
 Output    = Cart Details
```

**3.Add Item to Cart**

```
 End Point = /rest/V1/guest-carts/(token)/items

 Method    = POST
 Body      = `{ "cartItem": {
                  "sku": "ABC1088",
                  "qty": 1,
                  "quote_id": "6261"
                 }
              }`
 Output    = Added Product Details
```

**4.Fetch Shipping Method Details**

```
End Point = /rest/V1/guest-carts/(token)/estimate-shipping-methods
Method    = POST
Body      = `{
             "address": {
             "region": "Dubai",
             "country_id": "AE",
             "street": [
                        "L-142, 5th Main Rd"
                       ],
              "postcode": "560102",
              "city": "Hsr Layout",
              "firstname": "Sanjay Kumar",
              "lastname": "Das",
              "customer_id": null,
              "email": "sanjay@codilar.com",
              "telephone": "8658177810",
              "same_as_billing": 1
             }
           }`
  OutPut  =  Added Shipping Methods
```

**5. Fetch Available Payment Methods**

```
End Point = /rest/V1/guest-carts/(token)/shipping-information
Method    = POST
Body      = `{
"addressInformation": {
    "shipping_address": {
        "region": "Dubai",
        "country_id": "AE",
        "street": [
            "L-142, 5th Main Rd"
        ],
        "postcode": "560102",
        "city": "Hsr Layout",
        "firstname": "Sanjay Kumar",
        "lastname": "Das",
        "customer_id": null,
        "email": "sanjay@codilar.com",
        "telephone": "8658177810"
    },
    "billing_address": {
        "region": "Dubai",
        "country_id": "AE",
        "street": [
            "L-142, 5th Main Rd"
        ],
        "postcode": "560102",
        "city": "Hsr Layout",
        "firstname": "Sanjay Kumar",
        "lastname": "Das",
        "customer_id": null,
        "email": "sanjay@codilar.com",
        "telephone": "8658177810"
    },
    "shipping_carrier_code": "instore",
    "shipping_method_code": "pickup"
}}`
Output = Available Payment Methods
```

**6. Place Order**

```
  End Point = /rest/V1/guest-carts/(token)/payment-information
  Method    = GET
  Body      = `{
            "email": "sanjay@codilar.com",
           "paymentMethod": {
           "method": "cashondelivery"
            },
            "billing_address": {
            "email": "sanjay@codilar.com",
            "region": "Dubai",
            "region_id": 612,
            "region_code": "",
            "country_id": "AE",
            "street": [
            "123 Dublin street"
            ],
           "postcode": "560102",
           "city": "Hsr Layout",
           "telephone": "8658177810",
           "firstname": "Sanjay Kumar",
           "lastname": "Das"
           }
         }`
```

#### **登录用户**

**1. Get Customer Token**

```
    End Point = /rest/V1/integration/customer/token
    Method    = POST
    Body      = `{
                  "username":"test@gmail.com", 
                  "password":"Test123@@"
                  }`
    Output    = Bearer Token
```

**2. Get Cart Details**

```
   End Point  = /rest/V1/carts/mine
   Method     = GET
   Output     = cart details
```

**3. Add Product to Cart**

```
   End Point  = /rest/V1/carts/mine/items
   Method     = POST
   Header     = Bearer Token = ( Pass token from step -1(logged-in))
   Body       = `{
                 "cartItem": {
                 "sku": "ABC1088",
                 "qty": 1,
                 "quote_id": "6255"
                 }
                }`
   Output     = Added Product Details
```

**4. Add Billing Address**

```
  End Point = /rest/V1/carts/mine/billing-address
  Method    = POST
  Header    = Bearer Token = ( Pass token from step -1(logged-in)
  Body      = `{
                "address": {
                "city": "Hsr Layout",
                "company": "Codilar",
                "countryId": "AE",
                "email": "sanjay.d@codilar.com",
                "firstname": "Sanjay",
                "lastname": "Kumar",
                "postcode": "560102",
                "region": "Dubai",
                "saveInAddressBook": 1,
                "street": ["L-142, 5th Main Rd"],
                "telephone": "8658177810"
               },
                "useForShipping": true
               }`
   Output  = You will get added details
```

**5. Get Shipping methods**

```
    End point = /rest/V1/carts/mine/shipping-methods
    Method    = GET
    Header    = Bearer Token = ( Pass token from step -1(logged-in)
    
```

**6. Get Shipping Information**

```
    End point = /rest/V1/carts/mine/shipping-information
    Method    = POST
    Header    = Bearer Token = ( Pass token from step -1(logged-in))
    Body      = `{
"addressInformation": {
    "shipping_address": {
        "region": "Dubai",
        "country_id": "AE",
        "street": [
            "L-142, 5th Main Rd"
        ],
        "postcode": "560102",
        "city": "Hsr Layout",
        "firstname": "Sanjay Kumar",
        "lastname": "Das",
        "customer_id": null,
        "email": "sanjay@codilar.com",
        "telephone": "8658177810"
    },
    "billing_address": {
        "region": "Dubai",
        "country_id": "AE",
        "street": [
            "L-142, 5th Main Rd"
        ],
        "postcode": "560102",
        "city": "Hsr Layout",
        "firstname": "Sanjay Kumar",
        "lastname": "Das",
        "customer_id": null,
        "email": "sanjay@codilar.com",
        "telephone": "8658177810"
    },
    "shipping_carrier_code": "instore",
    "shipping_method_code": "pickup"
}}`
```

**7. Plae Order**

```
   End Point  = /rest/V1/carts/mine/order
   Method     = PUT
   Header     = Bearer Token = ( Pass token from step -1(logged-in)
   Body       = `{
                  "paymentMethod":{"method":"checkmo"},
                  "shippingMethod":
                 {
                   "method_code":"freeshipping",
                   "carrier_code":"freeshipping",
                   "additionalProperties":{},
                   "region_id":""
                  }}`
```

## 评价模块参考

### 添加评论

POST /V1/reviews/

输入：

```js
{
  "review": {
    "title": "Review title",
    "detail": "Empty review datails!",
    "nickname": "Nickname",
    "ratings": [ // 添加评分
      {
        "rating_name": "Rating",
        "value": 1
      },
      {
        "rating_name": "Quality",
        "value": 1
      },
      {
        "rating_name": "Price",
        "value": 1
      }
    ],
    "review_entity": "product",
    "review_status": 2,
    "entity_pk_value": 14
  }
}
```

### 获取商品评论

GET /V1/products/:sku/reviews



## 更新邮箱地址

put rest/V1/customers/me



## 获取用户订单

get `/rest/V1/orders/custom?searchCriteria[filter_groups][0][filters][0][field]=customer_id&searchCriteria[filter_groups][0][filters][0][value]=5&searchCriteria[filter_groups][0][filters][0][condition_type]=like`

get `/rest/V1/orders? searchCriteria[filter_g‌roups][0][filters][0‌][field]=stat‌us& searchCriteria[filter_groups][0][filters][0][value]=pending& searchCriteria[filter_groups][0][filters][0][condition_type]‌‌=eq& searchCriteria[filter_groups][0][filters][1][field]=customer‌_email& searchCriteria[filter_groups][0][filters][1][value]=aaa@gmai‌l.com& searchCriteria[filter_groups][0][filters][1][condition_type]‌‌=eq`

用户信息相关接口：无法修改默认地址，无法修改订阅状态

更新购物车

删除购物车

添加优惠劵

删除优惠劵

添加购物车地址

无法获取添加评论时options选项的下拉选择字典

