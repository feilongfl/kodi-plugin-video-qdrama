
# import ptvsd
# ptvsd.enable_attach(secret = '1')
# ptvsd.wait_for_attach


# -*- coding: utf-8 -*-
import json
import re
import sys
import urllib.request

from urllib.parse import quote,unquote,urlencode,parse_qs
import xbmc
import xbmcgui
import xbmcplugin

from pprint import pprint

#init plugin
base_url = sys.argv[0]
addon_handle = int(sys.argv[1])
args = parse_qs(sys.argv[2][1:])

xbmcplugin.setContent(addon_handle, 'movies')

def build_url(query):
    return base_url + '?' + urlencode(query)

def Get(url):
    req = urllib.request.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:5.0)')
    return urllib.request.urlopen(req).read().decode('utf-8')

def genList(url):
    # download pages
    page = Get(url)
    # init regex search
    it = re.finditer(r"<a href=\"(.*?)\" title=\"([^\"]+?)\">\n", page, flags=0)
    itpic = re.finditer(r"background-image: url\((.*?)\)", page, flags=0)
    # add to list
    for matchObj in it:
        # try:
            print(matchObj.group(2))
            li = xbmcgui.ListItem(matchObj.group(2),thumbnailImage=next(itpic).group(1))
            url = build_url({'mode': 'video-info', 'path': matchObj.group(1)})
            xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)
        # except BaseException:
            # print("err")

    xbmcplugin.endOfDirectory(addon_handle)

# decode
def ttdecode(code):
    # print code
    str = ""
    key = "ttrandomkeyqdramanet"
    for i in range(0,len(code)):
        if (0 == i or 0 == i % (len(key) + 1)):
            str += code[i]

    return str[::-1]

def playUrl(video_url):
    playlist = xbmc.PlayList(xbmc.PLAYLIST_VIDEO)
    playlist.clear()
    li = xbmcgui.ListItem(path=video_url)
    li.setInfo( type="video", infoLabels={ "Path" : video_url } )
    playlist.add(url=video_url, listitem=li)
    xbmc.Player().play(playlist)

# home page
mode = args.get('mode', None)
if mode is None:
    li = xbmcgui.ListItem(u'List'.encode('utf-8'))
    url = build_url({'mode': 'List'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    li = xbmcgui.ListItem(u'Jp'.encode('utf-8'))
    url = build_url({'mode': 'J-List'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    li = xbmcgui.ListItem(u'Kr'.encode('utf-8'))
    url = build_url({'mode': 'K-List'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    li = xbmcgui.ListItem(u'CN'.encode('utf-8'))
    url = build_url({'mode': 'C-List'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    li = xbmcgui.ListItem(u'TW'.encode('utf-8'))
    url = build_url({'mode': 'T-List'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    li = xbmcgui.ListItem(u'Search'.encode('utf-8'))
    url = build_url({'mode': 'Search'})
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    xbmcplugin.endOfDirectory(addon_handle)

elif mode[0] == 'List':
    genList("http://www.qdrama.net/")

elif mode[0] == 'K-List':
    genList("http://www.qdrama.net/kr/")

elif mode[0] == 'J-List':
    genList("http://www.qdrama.net/jp/")

elif mode[0] == 'C-List':
    genList("http://www.qdrama.net/cn/")

elif mode[0] == 'T-List':
    genList("http://www.qdrama.net/tw/")

elif mode[0] == 'video-info':
    # download pages
    page = Get(args['path'][0])
    # init regex search
    it = re.finditer("<li><a href=\"(.*?)\"(?: target=\"_blank\")?>(.*?)<\/a><\/li>", page, flags=0)
    image = re.search("<meta property=\"og:image\" itemprop=\"image\" content=\"(.*?)\"/>", page, flags=0).group(1)
    # intro = re.search("<meta name=\"description\" content=\"(.*?)\" />", page, flags=0).group(1)

    # add to list
    for matchObj in it:
        li = xbmcgui.ListItem(matchObj.group(2),thumbnailImage=image)
        # li.setInfo("video",{"plotoutline",intro})
        url = build_url({'mode': 'video-list', 'path': matchObj.group(1)})
        xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)

    xbmcplugin.endOfDirectory(addon_handle)

elif mode[0] == 'video-list':
    # download pages
    page = Get(args['path'][0])
    # init regex search
    it = re.finditer("getp\\((\\d+),(\\d+),\"(.*?)\",\"(.*?)\"\\)", page, flags=0)

    # add to list
    for matchObj in it:
        provider = ttdecode(matchObj.group(3))
        path= ttdecode(matchObj.group(4))
        li = xbmcgui.ListItem(provider)
        url = build_url({'mode': provider, 'path': path})
        xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=False)

    xbmcplugin.endOfDirectory(addon_handle)

elif mode[0] == 'dailymotion':
    playUrl("plugin://plugin.video.dailymotion_com/?mode=playVideo&url=" + args['path'][0])

elif mode[0] == 'youtube':
    playUrl("plugin://plugin.video.youtube/play/?video_id=" + args['path'][0])

elif mode[0] == 'm3u8':
    playUrl(unquote(unquote(args['path'][0])))

elif mode[0] == 'rapidvideo':
    # download pages
    page = Get('https://www.rapidvideo.com/e/' + args['path'][0] + '&q=720p')
    # init regex search
    matchObj = re.search("src=\"(https:\/\/.*?mp4)\"", page, flags=0)
    # get video url
    playUrl(matchObj.group(1))

elif mode[0] == 'qq':
    p = args['path'][0].split('-')
    playUrl("plugin://plugin.common.youget/play/" + quote("https://v.qq.com/x/cover/%s/%s.html" % (p[1],p[0]),safe=''))

else:
    print ('unsupport link => %s' % args['path'][0])
    xbmcgui.Dialog().ok('is developing'.encode('utf-8'),args['path'][0].encode('utf-8'))
