/**************************

WorkingCopy 解锁Pro


使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器

[mitm]
hostname = education.github.com

[rewrite_local]

^https:\/\/education\.github\.com\/api\/user$ url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/WorkingCopy/JS/WorkingCopy.js

********************************/

$done({body: '{"student": true}'})
