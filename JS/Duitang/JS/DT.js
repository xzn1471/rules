/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-09-17
 *
 * 


\堆\糖\s\v\i\p\、\去\除\部\分\广\告\、\去\除\部\分\推\广\去\开\屏\广\告\

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript
# https://apps.apple.com/cn/app/%E5%A0%86%E7%B3%96-%E5%A4%B4%E5%83%8F%E5%A3%81%E7%BA%B8%E7%BE%8E%E5%9B%BE%E7%A4%BE%E5%8C%BA/id533415763?uo=4

使用方法：
1、使用BoxJS增加以下脚本订阅。https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMao.json

2、通过boxjs设置svip到期时间及等级【不设置默认永久10天后】

3、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoDuiTang.js

4、去除开屏广告，下载安装App后，先开启脚本，打开QX抓包模式，成功登录账号后再关闭抓包模式，此后脚本需先运行再进入软件，当前测试暂未出现开屏

********************************

[mitm]
hostname = api.duitang.com,www.duitang.com,qzs.gdtimg.com

[rewrite_local]
# \去\除\发\现\模\块\横\幅\
http:\/\/api\.duitang\.com\/napi\/ads url reject-dict
https:\/\/api\.duitang\.com\/napi\/infra\/settings url reject-dict
# \去\除\分\享\标\签\
https:\/\/www\.duitang\.com\/napi\/hot\/(tag|search)\/(top|list) url reject-dict
# \模\板\广\告\
https:\/\/qzs\.gdtimg\.com\/union\/res\/union_temp_v2\/page\/ANTempMob\/tempMob.package.json url reject
http:\/\/api\.duitang\.com\/napi\/index\/discovery url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/dt.js
# \数\据\流\广\告\
http:\/\/api\.duitang\.com\/napi\/settings url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/dt.js
# \s\v\i\p\
https?:\/\/(www|api)\.duitang\.com\/napi\/people\/me url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/dt.js
https:\/\/www\.duitang\.com\/napi\/vienna\/graphic url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/dt.js

 ***************/
function Env(name) {
  // 判断当前环境是否为 Loon
  const isLoon = typeof $loon !== "undefined";
  // 判断当前环境是否为 Surge
  const isSurge = typeof $httpClient !== "undefined" && !isLoon;
  // 判断当前环境是否为 QuantumultX
  const isQX = typeof $task !== "undefined";

  // 定义 read 方法，用于读取数据
  const read = (key) => {
    if (isLoon || isSurge) return $persistentStore.read(key);
    if (isQX) return $prefs.valueForKey(key);
  };

  // 定义 write 方法，用于写入数据
  const write = (key, value) => {
    if (isLoon || isSurge) return $persistentStore.write(key, value);
    if (isQX) return $prefs.setValueForKey(key, value);
  };

  // 定义 notify 方法，用于发送通知
  const notify = (title = "XiaoMao", subtitle = "", message = "", url = "",url2 = url) => {
    if (isLoon) $notification.post(title, subtitle, message, url);
    if (isSurge) $notification.post(title, subtitle, message, { url });
    if (isQX) $notify(title, subtitle, message, { "open-url": url, "media-url": url2 });
  };

  // 定义 get 方法，用于发送 GET 请求
  const get = (url, callback) => {
    if (isLoon || isSurge) $httpClient.get(url, callback);
    if (isQX) {
      url.method = `GET`;
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 post 方法，用于发送 POST 请求
  const post = (url, callback) => {
    if (isLoon || isSurge) $httpClient.post(url, callback);
    if (isQX) {
      url.method = `POST`;
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 put 方法，用于发送 PUT 请求
  const put = (url, callback) => {
    if (isLoon || isSurge) $httpClient.put(url, callback);
    if (isQX) {
      url.method = "PUT";
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 toObj 方法，用于将字符串转为对象
  const toObj = (str) => JSON.parse(str);

  // 定义 toStr 方法，用于将对象转为字符串
  const toStr = (obj) => JSON.stringify(obj);

  // 定义 queryStr 方法，用于将对象转为可以请求的字符串
  const queryStr = (obj) => {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  };

  // 定义 log 方法，用于输出日志
  const log = (message) => console.log(message);

  // 定义 done 方法，用于结束任务
  const done = (value = {}) => $done(value);

  // 返回包含所有方法的对象
  return {
    name,
    read,
    write,
    notify,
    get,
    post,
    put,
    toObj,
    toStr,
    queryStr,
    log,
    done,
  };
}
function getGoneDay(n = 0, yearFlag = true) {
  let myDate = new Date();
  myDate.setDate(myDate.getDate() - n);
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let result =
    "" +
    (yearFlag ? myDate.getFullYear() : "") +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    (day < 10 ? "0" + day : day);
  return result;
}
let obj = JSON.parse($response.body);
let $XiaoMaoSvip = new Env("DuiTang");
let appName = `XiaoMao_DuiTangSvipApp`;
let XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let SvipDate = null;
!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoSvip.log(err);
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 3000);
  })
  .finally(() => {
    console.log(appName + "设置成功");
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 5000);
  });

function XiaoMaoFunction() {
  if (
    $XiaoMaoSvip.read("DuiTangSvipYear") &&
    $XiaoMaoSvip.read("DuiTangSvipMonth") &&
    $XiaoMaoSvip.read("DuiTangSvipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("DuiTangSvipYear") +
        "/" +
        $XiaoMaoSvip.read("DuiTangSvipMonth") +
        "/" +
        $XiaoMaoSvip.read("DuiTangSvipDay")
    ).getTime();
    if (!SvipDate) {
      $XiaoMaoSvip.notify(
        appName,
        "",
        "会员日期设置错误，请输入正确的日期范围!"
      );
      XiaoMaoSvip = getGoneDay(-7);
    } else {
      XiaoMaoSvip =
        $XiaoMaoSvip.read("DuiTangSvipYear") +
        "/" +
        $XiaoMaoSvip.read("DuiTangSvipMonth") +
        "/" +
        $XiaoMaoSvip.read("DuiTangSvipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-10);
  }
  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime() / 1000;
}

if ($response.body) {
  let requestUrl = $request.url;
  if (
    /^https?:\/\/(www|api)\.duitang\.com\/napi\/people\/me?/.test(requestUrl)
  ) {
    obj.data.vip_remain = 1;
    obj.data.score = 999999999;
    obj.data.latest_vip_level = 11;
    obj.data.vip_level = 11;
    obj.data.is_certify_user = true;
    obj.data.vip_end_at_mills = XiaoMaoEndTime * 1000;
    obj.data.vip_end_at = XiaoMaoEndTime;
    obj.data.svip_mechanism = 1;
    obj.data.vip_mechanism = 1;
    obj.data.vip = true;
    obj.data.is_life_artist = true;
    obj.data.be_follow_count = 999999999;
  } else if (/^http:\/\/api\.duitang\.com\/napi\/settings?/.test(requestUrl)) {
    delete obj.data.STORE_SEARCH_HOT_KEYWORDS;
    delete obj.data.AD_THIRD_PRECISE;
    delete obj.data.SHOP_NAVIGATIONBAR_LEFT_BUTTON;
    delete obj.data.NEW_EVENTS;
    delete obj.data.HOME_MAIN_TOP_TAB;
    delete obj.data.FORCE_UPDATE;
    delete obj.data.AD_REWARD;
    delete obj.data.EVENTS;
    delete obj.data.PGC_SEARCH_KEYWORD_USERS;
    delete obj.data.AD_MENU_SELECTIONS;
    delete obj.data.SOCIAL_SEARCH_HOT_KEYWORDS;
    delete obj.data.INVITE_FRIENDS_EMAIL;
    delete obj.data.AD_PRICE_SHOW;
    delete obj.data.AD_SCREEN_WAKEUP_TIME;
    obj.data.AD_HOME_ENTER_POP_COUNT = 0;
  } else if (
    /^https:\/\/www\.duitang\.com\/napi\/vienna\/graphic?/.test(requestUrl)
  ) {
    let str = JSON.stringify(obj);
    str.replace(/"vipType":"SVIP"/g, '"vipType":"NONE"');
    obj = JSON.parse(str);
  } else if (
    /^http:\/\/api\.duitang\.com\/napi\/index\/discovery?/.test(requestUrl)
  ) {
    if (obj.data.length) {
      obj.data.forEach((el) => {
        if (
          el.category_type == "hot" &&
          el.category_items.length &&
          el.category_items[0].group_items.length
        ) {
          let list = [];
          el.category_items[0].group_items.forEach((el2) => {
            if (el2.tag && el2.tag == "活动") {
            } else {
              list.push(el2);
            }
          });
          el.category_items[0].group_items = list;
        }
      });
    }
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
