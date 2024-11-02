/******************************
# 个人自用
# 脚本功能：Bazaart百色特——解锁订阅
# 下载地址：https://is.gd/X3M25D
# 软件版本：10.0.4
# 脚本作者：彭于晏💞
# 更新时间：2023-10-5

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/Bazaart/JS/Bazaart.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "product_id" : "Bazaart_Premium_Monthly_v9",
      "quantity" : "1",
      "purchase_date_ms" : "1688386973000",
      "expires_date_pst" : "9999-06-06 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "expires_date" : "9999-06-06 06:06:06 Etc/GMT",
      "transaction_id" : "540001260447637",
      "original_purchase_date_ms" : "1688386974000",
      "is_trial_period" : "false",
      "expires_date_ms" : "148204937166000",
      "original_transaction_id" : "540001260447637"
    }
  ],
  "pending_renewal_info" : [
    {
      "auto_renew_status" : "1",
      "product_id" : "Bazaart_Premium_Monthly_v9"
    }
  ]
}
$done({body : JSON.stringify(objc)});
