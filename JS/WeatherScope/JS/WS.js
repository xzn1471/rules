/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-03-21
 *
 * 


\W\e\a\t\h\e\r\S\c\o\p\e\ \p\r\e\m\i\u\m\

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript
#https://apps.apple.com/us/app/weather-scope-noaa-radar-live/id1644911162?uo=4

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoWeatherScope.js



[mitm]
hostname = weather.aviatorassistant.com

[rewrite_local]
https:\/\/weather\.aviatorassistant\.com url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/ws.js

********************************/

let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status ? JSON.parse($response.body) : $response.body;
if (/^https:\/\/weather\.aviatorassistant\.com?/.test(requestUrl)) {
  if (
    obj.hasOwnProperty("status") &&
    obj.hasOwnProperty("data") &&
    obj.data.hasOwnProperty("user")
  ) {
    obj.data.user.is_internal_subscription_free_user = 1;
    obj.data.user.subscription_expiration = "2222-02-22T07:56:01.669Z";
    obj.data.hasOwnProperty("active_free_promos")
      ? (obj.data.active_free_promos = [])
      : "";
  }
}
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
