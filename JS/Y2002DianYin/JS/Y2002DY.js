/*************************************

>「 脚本名称 」         Y2002电音-DJ电音音乐播放器

# https://apps.apple.com/cn/app/y2002%E7%94%B5%E9%9F%B3-dj%E7%94%B5%E9%9F%B3%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8/id1146785690?platform=iphone

*************************************/

[rewrite_local]

^https?:\/\/app-ios\.y2002\.com\/api\/v2\/User\/Info? url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/Y1.js
^https?:\/\/app-ios\.y2002\.com\/API\/V2\/Processer\.ashx? url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/Y2.js

[mitm] 
hostname = app-ios.y2002.com
