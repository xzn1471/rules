/*************************************

# Mojo: Subtitles & Reels 解锁 Pro
# 测试版本v1.90.0
# @Marol62926
下载地址：https://apps.apple.com/us/app/mojo-subtitles-reels/id1434861974?uo=4
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]
# > Mojo 解锁 Pro
https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/mojo.js

[mitm]
hostname = api.revenuecat.com

*************************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "pro":{
              "expires_date":"2099-05-26T05:05:04Z",
              "product_identifier":"video.mojo.pro.yearly",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "video.mojo.pro.yearly":{
              "billing_issues_detected_at":null,
              "expires_date":"2099-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"normal",
              "purchase_date":"2022-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});
