
# import ptvsd
# ptvsd.enable_attach(secret = '1')
# ptvsd.wait_for_attach


# -*- coding: utf-8 -*-
import json
import re
import sys
import urllib

import urllib2
import urlparse
import xbmc
import xbmcgui
import xbmcplugin

from pprint import pprint

# import 
# import resources.lib.lxml.html

#init plugin
base_url = sys.argv[0]
addon_handle = int(sys.argv[1])
args = urlparse.parse_qs(sys.argv[2][1:])

xbmcplugin.setContent(addon_handle, 'movies')

def build_url(query):
    return base_url + '?' + urllib.urlencode(query)

def Get(url):
    req = urllib2.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:5.0)')
    return urllib2.urlopen(req).read()

def genList(url):
    # download pages
    page = Get(url)
    # init regex search
    it = re.finditer("<a href=\"(.*?)\" title=\"([^\"]+?)\">\n", page, flags=0)
    itpic = re.finditer("background-image: url\((.*?)\)", page, flags=0)
    # add to list
    for matchObj in it:
        try:
            li = xbmcgui.ListItem(matchObj.group(2),thumbnailImage=itpic.next().group(1))
            url = build_url({'mode': 'video-info', 'path': matchObj.group(1)})
            xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)
        except BaseException:
            print("err")

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
        li = xbmcgui.ListItem(ttdecode(matchObj.group(3)))
        url = build_url({'mode': ttdecode(matchObj.group(3)), 'path': ttdecode(matchObj.group(4))})
        xbmcplugin.addDirectoryItem(handle=addon_handle, url=url, listitem=li, isFolder=True)
        # xbmcgui.Dialog().ok(u'is developing'.encode('utf-8'),ttdecode(matchObj.group(4).encode('utf-8')))

    xbmcplugin.endOfDirectory(addon_handle)

elif mode[0] == 'dailymotion':
    # download pages
    page = Get('http://www.dailymotion.com/video/' + args['path'][0])
    # init regex search
    matchObj = re.search("__PLAYER_CONFIG__ = (.*)", page, flags=0)

    # get video url
    video_url = json.loads(matchObj.group(1)[:-1])['metadata']['qualities']['720'][1]['url']

    # add to list
    li = xbmcgui.ListItem(u'720p'.encode('utf-8'))
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=video_url, listitem=li)

    xbmcplugin.endOfDirectory(addon_handle)

elif mode[0] == 'rapidvideo':
    # download pages
    page = Get('https://www.rapidvideo.com/e/' + args['path'][0] + '&q=720p')
    # init regex search
    matchObj = re.search("src=\"(https:\/\/.*?mp4)\"", page, flags=0)

    # get video url
    video_url = matchObj.group(1)

    # add to list
    li = xbmcgui.ListItem(u'720p'.encode('utf-8'))
    xbmcplugin.addDirectoryItem(handle=addon_handle, url=video_url, listitem=li)

    xbmcplugin.endOfDirectory(addon_handle)

else:
    xbmcgui.Dialog().ok(u'is developing'.encode('utf-8'),args['path'][0].encode('utf-8'))
