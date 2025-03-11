/* 

#!name=淫荡猫av合集
#!desc=av合集
 * 2025-03-11 适配小火箭
 
[URL Rewrite]
# 广告 开屏广告没处理（会报错）
^https:\/\/(?:dd38dkt7dfvyr|d2x03a61ogs2x5|d3lijns9322mkl)\.cloudfront\.net\/api\/(?:sys\/partner\/list|activity\/indexActs|sys\/advertisement\/list|sys\/getImgAndVideoCdnList|aibox\/entranceConfig) - reject

[Script]
# 会员
av222 = type=http-request,pattern=https:\/\/[^\/]+\.cloudfront\.net\/api\/m3u8\/decode\/authPath,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/refs/heads/main/ydm2.js
[MITM]
hostname = %APPEND% *.cloudfront.net

 
*/
const url = $request.url;
const isQX = typeof $task !== "undefined";
const apiUrls = {
    'd2x03a61ogs2x5.cloudfront.net': 'https://vpn3.lovebabyforever.workers.dev/?videoId=300000',
    'd3lijns9322mkl.cloudfront.net': 'https://vpn2.lovebabyforever.workers.dev',
    'dd38dkt7dfvyr.cloudfront.net': null 
};
const Gu = '1741105775-19918480-32-d52445865e1cb896e73d6d001044f961';
if (url.includes('auth_key=')) {
    let newAuthKey = null;
    let apiUrl = null;

    if (url.includes('d2x03a61ogs2x5.cloudfront.net')) {
        apiUrl = apiUrls['d2x03a61ogs2x5.cloudfront.net'];
    } else if (url.includes('d3lijns9322mkl.cloudfront.net')) {
        apiUrl = apiUrls['d3lijns9322mkl.cloudfront.net'];
    } else if (url.includes('dd38dkt7dfvyr.cloudfront.net')) {
        newAuthKey = Gu;
    }

    if (apiUrl) {
        if (isQX) {
            $task.fetch({ url: apiUrl }).then(
                response => {
                    newAuthKey = response.body.replace(/"/g, '');
                    let modifiedUrl = url.replace(/auth_key=[^&]+/, 'auth_key=' + newAuthKey);
                    $done({ url: modifiedUrl });
                },
                error => {
                    $done({}); 
                }
            );
        } else {
            $httpClient.get(apiUrl, (error, response, data) => {
                if (error) {
                    $done({}); 
                } else {
                    newAuthKey = data.replace(/"/g, '');
                    let modifiedUrl = url.replace(/auth_key=[^&]+/, 'auth_key=' + newAuthKey);
                    $done({ url: modifiedUrl });
                }
            });
        }
    } else if (newAuthKey) {
        let modifiedUrl = url.replace(/auth_key=[^&]+/, 'auth_key=' + newAuthKey);
        $done({ url: modifiedUrl });
    } else {
        $done({});
    }
} else {
    $done({});
}
