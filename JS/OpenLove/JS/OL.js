/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-03-17
 *
 * 


Open Love - AI Girlfriend ziwei解锁


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoOpenLove.js


[mitm]
hostname = api.openlove.life

[rewrite_local]
https:\/\/api\.openlove\.life url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/ol.js

********************************/

let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"status\":\w+/g, '"status":1')
        .replace(/\"unlocked\":\w+/g, '"unlocked":1')
        .replace(/\"price\":\w+/g, '"price":0')
        .replace(/\"diamonds\":\w+/g, '"diamonds":99999')
        .replace(/\"expiry_time\":\w+/g, '"expiry_time":7955085722000')
    )
  : $response.body;
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
}
