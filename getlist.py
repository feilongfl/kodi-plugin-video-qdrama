# -*-coding:utf-8 -*-

# from __future__ import unicode_literals

# from lxml import html
import re
import urllib2
import json

def Get(url):
    req = urllib2.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:5.0)')
    return urllib2.urlopen(req).read()

def ttdecode(code):
    print code
    str = ""
    key = "ttrandomkeyqdramanet"
    for i in range(0,len(code)):
        if (0 == i or 0 == i % (len(key) + 1)):
            str += code[i]

    return str[::-1]

# download pages
page = Get('http://www.dailymotion.com/video/k4URzrPVqBvVTEqy3HD')
# init regex search
matchObj = re.search("__PLAYER_CONFIG__ = (.*)", page, flags=0)

# add to list
j = json.loads(matchObj.group(1)[:-1])
print j['metadata']['qualities']['720'][1]['url']
