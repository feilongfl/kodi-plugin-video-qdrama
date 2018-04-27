

t="e-ugK_17WeZOi1gwvnAdsbCXlt_9EPdsiMoCocq28LuSVaRAVMpCeG-ozioHE-Ft0TMUCBfrDvBkVsGwa7gJuL3go6DIHHuiUnxPXvBNnoT8gWhbuH4ZyFpI-yyiv1ykHIv8YxkVlYJys_TZpkX"



"""
function ttdecode(d) {
  strr = "";
  key = "ttrandomkeyqdramanet"
  i = 0;
  for (; i < d.length; i++) {
    if (0 == i || 0 == i % (key.length + 1)) {
        console.log(i)
      strr = strr + d.substr(i, 1);
    }
  }
  return decodeURIComponent(strr.split("").reverse().join(""));
}
;

"""

def decode(code):
    print code
    str = ""
    key = "ttrandomkeyqdramanet"
    for i in range(0,len(code)):
        if (0 == i or 0 == i % (len(key) + 1)):
            print i
            str += code[i]

    return str[::-1]

print decode(t)
