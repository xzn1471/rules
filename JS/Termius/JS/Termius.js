/**************************

# Termius 解锁Pro
# https://apps.apple.com/us/app/termius-terminal-ssh-client/id549039908?uo=4

# 使用方法：
# 1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器

[mitm]
hostname = api.termius.com

[rewrite_local]

https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/Termius/JS/Termius.js

********************************/

let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2099-10-10T03:27:34";
$done({body:JSON.stringify(obj)})
