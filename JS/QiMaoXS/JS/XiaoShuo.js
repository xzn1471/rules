
[rewrite_local]
# > 七猫小说(2022.01.18)
QiMaoXiaoShuo = type=http-response, pattern=^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/, script-path=https://github.com/ifflagged/Darwin/raw/main/Modules/JS/zwf234/qxrules/QiMaoXiaoShuo.js, requires-body=true, max-size=-1, timeout=60

[mitm]
hostname = *.wtzw.com
