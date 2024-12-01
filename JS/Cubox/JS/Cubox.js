/*
# Cubox - 文章阅读与标注笔记 解锁高级会员
# https://apps.apple.com/cn/app/cubox-%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E4%B8%8E%E6%A0%87%E6%B3%A8%E7%AC%94%E8%AE%B0/id1113361350?uo=4

[rewrite_local]
^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/cubox.js

[mitm]
hostname = cubox.pro

*/
let obj = JSON.parse($response.body);

obj.data.level = 1;
obj.data.expireTime = "2099-09-12T23:50:23+08:00";
obj.data.isExpire = false;
obj.data.active = true;
obj.data.payTime = 1660006006;

$done({
  body: JSON.stringify(obj)
});
