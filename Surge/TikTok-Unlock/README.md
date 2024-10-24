# iPhone （免拔卡）解锁 TikTok + 换区 + 发布视频 + 直播 + 点赞评论

> 目录

* [TikTok](#TikTok)
* [準備工作](#準備工作)
* [Surge](#Surge)

---

### <a id="TikTok"> TikTok </a>

* iOS系统版本：18.1 Beta （支持向下兼容）
* TikTok Version : 36.9.0（前置操作：从 [iTunes for Windows V 12.6.5.3](https://secure-appldnld.apple.com/itunes12/091-87820-20180912-69177170-B085-11E8-B6AB-C1D03409AD2A5/iTunesSetup.exe) 抓包 TikTok Version 21.1.0 安装，登陆后观看视频、直播、评论、点赞、发布视频等模块都正常使用后，再从 App Store 升级至最新版方可使用！）
* iTunes 歷史版本: [下載鏈接直達蘋果官網](https://www.theiphonewiki.com/wiki/ITunes)
* TikTok TestFlight
* 下载方式：在 美区/日区/台区 App Store 搜索 TikTok 并下载 （港区已停止运营）
  
  * 支持功能：
  
  - [x] 换区
  - [x] 看视频
  - [x] 发布视频
  - [x] 点赞
  - [x] 评论
  - [x] TikTok直播

### <a id="準備工作"> 準備工作 </a>

- App Store 下载 TikTok
  
  * 美区/日区/台区/韩区等 Apple ID、密码 自备
- 自备 Quantumult X｜Loon｜Surge｜Shadowrocket
  
  * 可在美区/日区等 App Store 获取
- 自备代理，ss/ssr/vmess等

---

**特别说明**

1、为什么要先卸载 TikTok，TikTok 会在第一次使用时触发限制，并导致之后无法通过 MiMt 解密。
2、所以先配置好规则之后，然后在下载 TikTok，减少重定向的请求次数，降低风险，延长规则的寿命。
3、为什么配置好之后还是无法使用，请检查软件的证书有没有安装，信任。
4、或者是 Https 解密（MiMt）与重写（Rewrite）有没有开启。
5、或者是软件是不是盗版，比如用共享 ID 下载的，有设备限制，是无法使用重写脚本功能的。

---

### <a id="Surge"> Surge </a>

**操作步骤**

1、打开`Surge`

2、点击`模块`进去添加想看国家的对应模块。

**日本**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/Surge/TikTok-Unlock/TiKTok-JP.sgmodule
```

**台湾**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/Surge/TikTok-Unlock/TiKTok-TW.sgmodule
```

**韩国**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/Surge/TikTok-Unlock/TiKTok-KR.sgmodule
```

**美国**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/Surge/TikTok-Unlock/TiKTok-US.sgmodule
```

3、添加以下`分流`

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/Surge/TikTok.list
```

---
