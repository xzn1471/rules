/*
# 时尚芭莎(BAZAAR)－时尚杂志新纪元解锁Vip
# https://apps.apple.com/us/app/%E6%97%B6%E5%B0%9A%E8%8A%AD%E8%8E%8E-%E6%97%B6%E5%B0%9A%E6%9D%82%E5%BF%97%E6%96%B0%E7%BA%AA%E5%85%83/id532074097?uo=4


[rewrite_local]

http://bz.metshow.cn/api/userminivip/myminivipinfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ssbs.js

[mitm]
hostname = bz.metshow.cn
*/

var body = JSON.parse($response.body);
body.result.IsMiniVip = 1;
body.result.MiniItemEndDate = "\/Date(4714972789403+0800)\/";
$done({ body: JSON.stringify(body) });
