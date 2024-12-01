/*

# 听书助手解锁永久会员
# https://apps.apple.com/us/app/%E5%90%AC%E4%B9%A6%E5%8A%A9%E6%89%8B/id6444621554?platform=iphone

[rewrite_local]
https:\/\/www\.huojiwangluo.cn\/ting\/user\/(get|anonylogin) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/tingshuzhushou.js

[mitm] 
hostname = www.huojiwangluo.cn

*/

var obj = JSON.parse($response.body);
obj.user_info = "永久 vip";
obj.vip_expire = 4070880000;
obj.vip_state = 1;
$done({body: JSON.stringify(obj)});
