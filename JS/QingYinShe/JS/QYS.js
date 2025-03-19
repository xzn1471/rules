/******************************

脚本功能：轻音社
支持软件版本：1.1.8
下载地址：https://apps.apple.com/us/app/%E8%BD%BB%E9%9F%B3%E7%A4%BE/id1584504085
更新时间：2024年3月10日 
电报频道：https://t.me/GieGie777
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
应用介绍：专为二次元爱好者打造的音乐与短视频社区，汇集燃系、古风、日系、广播剧等多种风格的二次元音乐内容，支持个性化推荐与 BGM 识别，让用户随时发现心仪的歌曲。同时，轻音社还提供音乐社交功能，让志同道合的朋友因共同的音乐品味相识，享受听歌、看视频、互动交流的沉浸式体验。
*******************************

[rewrite_local]
# > 轻音社vip
^https?:\/\/fuciyuanbang.ciyuans.com\/fuciyuanphp\/community\/social url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/qys.js

[mitm]
hostname = fuciyuanbang.ciyuans.com

*******************************/


var body = $response.body; 
let obj = JSON.parse($response.body);
obj.result.vip = "1" ;
obj.result.name = "https://t.me/GieGie777" ;
$done({body: JSON.stringify(obj)});
