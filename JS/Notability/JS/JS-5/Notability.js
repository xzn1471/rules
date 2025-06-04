/******************************

脚本功能：Notability—解锁订阅
下载地址：https://t.cn/A6Cgjtei
特别说明：老版本解锁，然后同步新版本，
软件版本：14.0.2
脚本作者：彭于晏💞
更新时间：2023-7-31
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# > Notability—解锁订阅
^https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/notability1.js

[mitm]
hostname = notability.com

*******************************/

var ojbk = JSON.parse($response.body);

ojbk = {   "data" : {     "processAppleReceipt" : {       "error" : 0,       "subscription" : {         "productId" : "com.gingerlabs.Notability.premium_subscription",         "originalTransactionId" : "570001184068302",         "tier" : "premium",         "refundedDate" : null,         "refundedReason" : null,         "isInBillingRetryPeriod" : false,         "expirationDate" : "2099-09-09T09:09:09.000Z",         "gracePeriodExpiresAt" : null,         "overDeviceLimit" : false,         "expirationIntent" : "CUSTOMER_CANCELLED",         "__typename" : "AppStoreSubscription",         "user" : null,         "status" : "canceled",         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"       },       "__typename" : "SubscriptionResult"     }   } };

$done({body : JSON.stringify(ojbk)});
