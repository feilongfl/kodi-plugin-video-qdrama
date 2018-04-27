function is_numeric(d) {
    return isNaN(d) ? !1 : !0
}


function ttdecode(d) {
  strr = "";
  key = "ttrandomkeyqdramanet"
  i = 0;
  for (; i < d.length; i++) {
    if (0 == i || 0 == i % (key.length + 1)) {
      strr = strr + d.substr(i, 1);
    }
  }
  return decodeURIComponent(strr.split("").reverse().join(""));
}
;


function getp(d, e, c, a) {
	var ofont = 'jt';
	
    var b = "";
    c = ttdecode(c);
    a = ttdecode(a);
    console.log(d,e,c,a)
    if (0 == e)
        if (b += "<h3>【片源" + d +
            "】</h3>", "dailymotion" ==
            c) "ft" == ofont ? b +=
            '<p class="aleft mbottom10"><font color="red">影片內的廣告是Dailymotion放送的</font></p>' :
            "jt" == ofont && (b +=
                '<p class="aleft mbottom10"><font color="red">视频中的广告是Dailymotion播放的</font></p>'
            );
        else if ("rapidvideo" == c ||
        "openload" == c || "streamango" ==
        c) "ft" == ofont ? b +=
        '<p class="aleft mbottom10"><font color="red">此片源點擊播放時會彈出廣告或病毒警告，讓使用者誤以為已中毒，應只是防毒軟體廣告手法，關閉彈出視窗即可。(彈出廣告與本站無關)</font></p>' :
        "jt" == ofont && (b +=
            '<p class="aleft mbottom10"><font color="red">此片源点击播放时会弹出广告或病毒警告，让使用者误以为已中毒，应只是防毒软件广告手法，关闭弹出窗口即可。(弹出广告与本站无关)</font></p>'
        );
    else if ("youku" == c || "letv" ==
        c || "qiyi" == c || "qq" == c ||
        "tudou" == c || "hunantv" == c ||
        "sohu" == c) "ft" == ofont ? b +=
        '<p class="aleft mbottom10">若因地區限制無法觀看視頻，請使用「<a href="http://www.google.com/intl/zh-TW/chrome/browser/" target="_blank">Chrome瀏覽器</a>」，並參考「<a href="/unblock-youku.html" target="_blank">安裝說明</a>」，安裝外掛後即可正常收看。(<font color="red">此版本不支援行動裝置</font>)</p>' :
        "jt" == ofont && (b +=
            '<p class="aleft mbottom10">若因地区限制无法观看视频，请使用「<a href="http://www.google.com/intl/zh-TW/chrome/browser/" target="_blank">Chrome浏览器</a>」，并参考「<a href="/unblock-youku.html" target="_blank">安装说明</a>」，安装外挂后即可正常收看。(<font color="red">此版本不支持移动设备</font>)</p>'
        );
    "youtube" == c ? ("undefined" ==
            typeof limvyt && (limvyt =
                0), b = 1 == limvyt ? b +
            (
                '<iframe src="http://drama6.com/vv/?ref=' +
                a +
                '&f=yt" frameborder=0 allowfullscreen></iframe>'
            ) : b + (
                '<iframe src="http://www.youtube.com/embed/' +
                a +
                '?showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>'
            )) : "dailymotion" == c ? (
            "undefined" == typeof limvdm &&
            (limvdm = 0), b +=
            '<a href="http://www.dailymotion.com/video/' +
            a +
            '" target="_blank" rel="nofollow">watch video on DM</a>'
            , b = 1 == limvdm ? b + (
                '<iframe src="http://drama6.com/vv/?ref=' +
                a +
                '&f=dm" frameborder=0 allowfullscreen></iframe>'
            ) : b + (
                '<iframe src="//www.dailymotion.com/embed/video/' +
                a +
                '?autoplay=0&info=0" frameborder="0" allowfullscreen></iframe>'
            )) : "google" == c ? b = -1 !=
        a.indexOf(
            ".googleusercontent.com") ?
        b + ('<video src="' + a +
            '" controls preload="auto"></video>'
        ) : b + ('<iframe src="' + a +
            '" frameborder="no" allowfullscreen></iframe>'
        ) : "adrama" == c ? b +=
        '<iframe src="http://drama6.com/v0/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "bdrama" == c ? b +=
        '<iframe src="http://drama6.com/v1/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "cdrama" == c ? b +=
        '<iframe src="http://drama6.com/v2/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "ddrama" == c ? b +=
        '<iframe src="http://drama6.com/v3/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "edrama" == c ? b +=
        '<iframe src="http://drama6.com/v4/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "fdrama" == c ? b +=
        '<iframe src="http://drama6.com/v5/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "gdrama" == c ? b +=
        '<iframe src="http://drama6.com/v6/?ref=' +
        a +
        '" frameborder=0 allowfullscreen></iframe>' :
        "yktd" == c ? b +=
        '<iframe src="http://video.tudou.com/v/' +
        a +
        '.html" height="450" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>' :
        "m3u8" == c ? b +=
        '<iframe src="http://drama6.com/m3u8/?ref=' +
        encodeURIComponent(a) +
        '" frameborder="0" allowfullscreen></iframe>' :
        "kuyunbo" == c ? ("http" != a.substr(
                0, 4) && (a =
                "https://cdn.kuyunbo.club/share/" +
                a), b +=
            '<iframe src="' + a +
            '" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" scrolling="no" vspale="0" allowFullScreen="true"></iframe>'
        ) : "rapidvideo" == c ? b +=
        '<iframe src="https://www.rapidvideo.com/e/' +
        a +
        '" frameborder="0" allowfullscreen></iframe>' :
        "openload" == c ? ("undefined" ==
            typeof limvop && (limvop =
                0), b = 1 == limvop ? b +
            (
                '<iframe src="http://drama6.com/vv/?ref=' +
                a +
                '&f=op" frameborder=0 allowfullscreen></iframe>'
            ) : b + (
                '<iframe mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" scrolling="no" src="https://openload.co/embed/' +
                a +
                '/" frameborder="0"></iframe>'
            )) : "streamango" == c ? b +=
        '<iframe mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" scrolling="no" src="https://streamango.com/embed/' +
        a +
        '" frameborder="0"></iframe>' :
        "vidme" == c ? b +=
        '<iframe src="https://vid.me/e/' +
        a +
        '?autoplay=0" frameborder="0" allowfullscreen></iframe>' :
        "video66" == c ? b +=
        '<iframe src="http://video66.org/embed.php?vid=' +
        a +
        '" frameborder="0" allowfullscreen></iframe>' :
        "uploadly" == c ? b +=
        '<iframe src="https://uploadly.com/embed/' +
        a +
        '" frameborder="0" allowfullscreen></iframe>' :
        "vimeo" == c ? b +=
        '<iframe src="//player.vimeo.com/video/' +
        a +
        '?title=0&byline=0&portrait=0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>' :
        "linetv" == c ? b +=
        '<iframe src="https://tv.line.me/embed/' +
        a +
        '?isAutoPlay=false" frameborder="0" allowfullscreen></iframe>' :
        "youku" == c ? b +=
        '<iframe src="http://player.youku.com/embed/' +
        a +
        '" frameborder="0" allowfullscreen></iframe>' :
        "qq" == c ? -1 != a.indexOf("-") ?
        (d = a.split("-"), qq_vid = d[0]
            , qq_coverId = d[1], b +=
            '<iframe src="http://v.qq.com/iframe/player.html?vid=' +
            qq_vid +
            '&amp;tiny=0&amp;auto=0" frameborder="0" allowfullscreen></iframe>'
        ) : b +=
        '<iframe src="http://v.qq.com/iframe/player.html?vid=' +
        a +
        '&amp;tiny=0&amp;auto=0" frameborder="0" allowfullscreen></iframe>' :
        "letv" == c ? b +=
        '<embed allownetworking="internal" allowscriptaccess="never" allowfullscreen="true" wmode="transparent" menu="false" type="application/x-shockwave-flash" src="http://img1.c0.letv.com/ptv/player/swfPlayer.swf?&id=' +
        a +
        '&from=column&startPic=1&cid=&action=preview&autoplay=0&isSearch=false&isPlayerAd=0" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>' :
        "qiyi" == c ? 32 == a.length ?
        b +=
        '<embed allownetworking="internal" allowscriptaccess="never" allowfullscreen="true" wmode="transparent" menu="false" type="application/x-shockwave-flash" src="http://www.iqiyi.com/player/20131011135344/Player.swf?vid=' +
        a +
        '&share_sTime=0&hideRightpanel=1&hideLightpanel=1&hideSharepanel=1&hideNewWindowpanel=1&isAfp=0" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>' :
        32 < a.length && -1 != a.indexOf(
            "-") && (d = a.split("-")
            , b +=
            '<iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=' +
            d[0] + "&tvId=" + d[3] +
            '" frameborder="0" allowfullscreen="true"></iframe>'
        ) : "tudou" == c ? (is_numeric(
                a) || 11 != a.length ||
            (a = a + "&icode=" + a), b +=
            '<embed type="application/x-shockwave-flash" src="http://js.tudouui.com/bin/lingtong/PortalPlayer.swf" id="movie_player" name="movie_player" bgcolor="#000000" quality="high" allowfullscreen="true" allownetworking="internal" allowscriptaccess="never" wmode="transparent" flashvars="flashvars=&iid=' +
            a +
            '&tvcCode=-1&mediaType=vi&hd=-1&menu=false&scale=0&showAd=0&pepper=http://css.tudouui.com/bin/binder/pepper_17.png&panelEnd=http://css.tudouui.com/bin/lingtong/PanelEnd_13.swz&panelRecm=http://css.tudouui.com/bin/lingtong/PanelRecm_9.swz&panelShare=http://css.tudouui.com/bin/lingtong/PanelShare_7.swz&panelCloud=http://css.tudouui.com/bin/lingtong/PanelCloud_12.swz&panelDanmu=http://css.tudouui.com/bin/lingtong/PanelDanmu_18.swz&aca=" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'
        ) : "sohu" == c ? -1 != a.indexOf(
            "-") ? (d = a.split("-")
            , sohu_playlistId = d[0]
            , sohu_vid = d[1], b +=
            '<embed type="application/x-shockwave-flash" src="http://share.vrs.sohu.com/' +
            sohu_vid +
            "/v.swf&topBar=1&autoplay=false&plid=" +
            sohu_playlistId +
            '&pub_catecode=&from=page" quality="high" allowscriptaccess="always" allowfullscreen="true" wmode="Transparent"></embed>'
        ) : is_numeric(a) && (b +=
            '<object><param value="http://share.vrs.sohu.com/' +
            a +
            '/v.swf&skinNum=1&topBar=0&showRecommend=0&autoplay=false&api_key=0292c23ebb65e900a06c27d17465b338&fbarad=&shareBtn=0" name="movie"><param value="true" name="allowFullScreen"><param value="always" name="allowscriptaccess"><param value="Transparent" name="wmode"><embed type="application/x-shockwave-flash" src="http://share.vrs.sohu.com/' +
            a +
            '/v.swf&skinNum=1&topBar=0&showRecommend=0&autoplay=false&api_key=0292c23ebb65e900a06c27d17465b338&fbarad=&shareBtn=0" quality="high" allowscriptaccess="always" allowfullscreen="true" wmode="Transparent"></embed></object>'
        ) : "hunantv" == c ? -1 != a.indexOf(
            "-") ? (d = a.split("-")
            , hunantv_vid = d[0]
            , hunantv_cid = d[1], b +=
            '<embed src="http://player.hunantv.com/mango-tv3-main/MangoTV_3.swf?play_type=1&video_id=' +
            hunantv_vid +
            '" quality="high" align="middle" allowScriptAccess="always" allowfullscreen="true" type="application/x-shockwave-flash"></embed>'
        ) : is_numeric(a) && (b +=
            '<embed src="http://player.hunantv.com/mango-tv3-main/MangoTV_3.swf?play_type=1&video_id=' +
            a +
            '" quality="high" align="middle" allowScriptAccess="always" allowfullscreen="true" type="application/x-shockwave-flash"></embed>'
        ) : "acfun" == c ? b +=
        '<iframe src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?type=page&url=http://www.acfun.tv/v/ac' +
        a +
        '" id="ACFlashPlayer-re" frameborder="0" allowfullscreen></iframe>' :
        "bilibili" == c ? b +=
        '<embed quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid=' +
        a +
        '" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>' :
        console.log(
            '<iframe src="http://drama6.com/ot/?id=' +
            encodeURIComponent(a) +
            "&s=" + c +
            '" frameborder="0" allowfullscreen></iframe>'
        );
    console.log(b)
};
