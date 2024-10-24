# iPhone （免拔卡）解锁 TikTok + 换区 + 发布视频 + 直播 + 点赞评论

> 目录

* [TikTok](#TikTok)
* [準備工作](#準備工作)
* [Quantumult X](#Quantumult-X)
* [抓包降级](#抓包降级)

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

### <a id="Quantumult-X"> Quantumult X </a>

**关于换区**

* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，
  
  * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区

**操作步骤**

1、打开`Quantumult X`

2、开启**MitM**并**信任**Quantumult X证书：
* `设置` → `MitM` → 开启`MitM` → `生成密钥及证书` → 右上角点`保存` → `允许`安装描述文件 → `关闭` → 前往手机的`设置`，不在Quantumult X了 → 看到`已下载描述文件` → `安装` → 输入手机的解锁密码 → `安装` → `安装` → 前往手机的`设置` → `通用` → `关于本机` → `证书信任设置` → 找到`Quantumult X Custom Root Certificate…`点绿它以信任该根证书 → `继续`

**方法一：**

3、配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写

**日本**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/QuantumultX/TikTok-Unlock/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**台湾**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/QuantumultX/TikTok-Unlock/TikTok-TW.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**韩国**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/QuantumultX/TikTok-Unlock/TikTok-KR.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**美国**

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/QuantumultX/TikTok-Unlock/TikTok-US.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**方法二：**

3、在`[rewrite_local]`中添加以下重写

```
(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
```

3.1、在`[mitm]`中添加

```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com
```

4、找到`[filter_remote]`添加下句分流(无论使用方法一或是方法二，此分流都需要添加！)

```
https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/refs/heads/main/QuantumultX/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5、换区：在[rewrite_local]中添加下句重写，并将`CN`改为想看的国家/地区的2位`大写`英文简写 JP（日本）｜KR（韩国）｜UK（英国）｜US（美国）｜TW（台湾）

```
(?<=_region=)CN(?=&) url 307 CN
```

6、开启Quantumult X：前往Quantumult X的主页 → 找到`TikTok`策略 → 长按添加`节点` → TikTok愉快

---

### <a id="抓包降级"> 抓包降级 TikTok 21.1.0 </a>

* [教程](https://semporia.github.io/iTunes.html)
* [备用地址](https://semporia.blogspot.com/2022/06/tiktok-2110.html)

---
