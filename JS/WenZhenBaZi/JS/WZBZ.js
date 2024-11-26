/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-09-26
 *
 * 
问真八字钻石vip

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript
#https://apps.apple.com/cn/app/id1665624645?uo=4

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoWenZhenBaZi.js

********************************

[mitm]
hostname = bzpp2.iwzbz.com

[rewrite_local]
https:\/\/bzpp2\.iwzbz\.com\/api\/v1.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/wzbz.js

 ***************/

// 获取相应数据
let obj = ($response && $response.body && JSON.parse($response.body)) || null;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (
  /^https:\/\/bzpp2\.iwzbz\.com\/api\/v1.1\/user\/getvipinfo?/.test(requestUrl)
) {
  obj.data.vipLevel = 3;
  obj.data.expires = "2222-02-02 22:22:22";
}
// 重写数据
$done({ body: JSON.stringify(obj) });
