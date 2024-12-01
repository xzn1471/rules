/*
# Sleep Cycle: 睡眠监测, 鼾声记录及智能闹钟Premium .软件版本：6.23.42
# 登陆 购买取消 退后台 重新打开即可
# https://apps.apple.com/cn/app/sleep-cycle-%E7%9D%A1%E7%9C%A0%E7%9B%91%E6%B5%8B-%E9%BC%BE%E5%A3%B0%E8%AE%B0%E5%BD%95-%E5%8F%8A-%E6%99%BA%E8%83%BD%E9%97%B9%E9%92%9F/id320606217?uo=4

[rewrite_local]
https://ch.sleepcycle.com/(useraccountstats|api/v1/subscription/get$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/sleepcycle.js

[MITM]
hostname = ch.sleepcycle.com

*/

let obj=JSON.parse($response.body);let requestUrl=$request.url;if(/^https:\/\/ch\.sleepcycle\.com\/api\/v1\/subscription\/get?/.test(requestUrl)){let list=["online-backup","smart-alarm","sleep-aid","analysis","snore","sleep-notes","premium-sounds","user-sounds","wake-up-mood","heart-rate","weather","health-kit","google-fit","statistics","philips-hue","home-kit","weekly-report","auto-sleep-tracking","sleep-training","ambient-light","sound-volume","syndicate","sleep-gpt",];obj.subscription.product_id="com.lexwarelabs.goodmorning.premium";obj.subscription.transaction_id="6666666666666666";obj.subscription.package_id="premium";obj.subscription.features_rich=list.map((i)=>{let objs={source:"subscription",name:i,source_value:"premium",expire_date:7956886942,};return objs});obj.subscription.features=list;obj.subscription.expire_date=7956886942}$done({body:JSON.stringify(obj)});
