/*
# 个人备用
# 脚本功能：爱企查vip
# 原脚本作者：litieyin
# 脚本作者：BOBOLAOSHIV587

[rewrite_local]
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/aiqicha/JS/aiqicha.js

[mitm] 
hostname = aiqicha.baidu.com

*/

var body = $response.body
    .replace(/\"svip\":\{\"status\":0,\"startTime\":\"\",\"endTime\":\"\"/, "\"svip\":\{\"status\":1,\"startTime\":\"\",\"endTime\":\"2099-12-31\"");
$done({ body });
