/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-09-26
 *
 * 

Instapaper 解锁高级用户199年会员

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript
https://apps.apple.com/us/app/instapaper/id288545208?platform=iphone

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoInstapaper.js

2、解锁失败，请重试手动访问一次 > 左滑「设置」> Premium > 等待片刻

********************************

[mitm]
hostname = www.instapaper.com

[rewrite_local]
https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/in.js

 ***************/

// 获取相应数据并改写
var obj = $response.body
obj = 'ipsubnow=1695732913&ipsubexp=7956886942000&ipsub=1'
// 重写数据
$done({ body: obj });
