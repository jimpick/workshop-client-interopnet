const annotations = {
  t01010: 'sealing, China, Chengdu, power, top miner',
  t01017: 'error, China, Shangrao, former top miner',
  t01024: 'sealing, China, Hong Kong, power, top miner',
  t01100: 'sealing, China, Chengdu, power, top miner',
  t01108: 'error, China, Jiangsu, power, top miner',
  t01118: 'error, China, Jiangsu, power, top miner',
  t01123: 'Canada, Mitchell',
  t02600: 'error, China, Wuxi, power, top miner',
  t02926: 'active, China, Chongqing, power, top miner',
  t03066: 'China, Sichuan, power, top miner',
  t03150: 'error, USA, Irvine, power, verified',
  t03607: 'error, China, Hangzhou',
  t03685: 'error, Poland, Krakow, power',
  t03714: 'China, Changsha, power',
  t05151: 'China, Wuxi',
  t09053: 'China, Beijing',
  t014169: '64G, China, Luzhou',
  t014178: 'error, China, Hangzhou',
  t014364: 'China, Luzhou',
  t017328: 'error, China, Wuxi, power, top miner',
  t027542: 'China, Shanghai',
  t028168: 'China, Hefei',
  t046397: 'China, Shanghai',
  t047746: 'China, Guangzhou',
  t056183: 'error, China, Shenzhen',
  t056797: 'error, China, Jiaxing',
  t057062: 'error, China, Shenzhen',
  t057565: 'China, Changsha',
  t067632: 'China, Shenzen, former top miner',
  t070863: 'error, China, Shanghai',
  t074792: 'Latvia, Riga',
  t084935: 'China, Guangdong',
  t093645: 'active, China, Guilin, power, top miner',
  t097661: 'error, China, Shenzhen',
  t099349: 'China, Shaanxi',
  t0122539: 'China, Beijing',
  t0123114: 'China, Huaihua',
  t0123115: 'China, Zhongshan, power',
  t0123117: 'error, Korea, Seongnam-si, power',
  t0123124: 'China, Guangdong',
  t0123160: 'China, Ningbo',
  t0123173: 'China, Guiyang',
  t0123185: 'error, China, Changsha',
  t0210187: 'Bulgaria',
  t0210504: 'China, Guangdong',
  t0210512: 'China, Guangdong',
  t0211510: 'error, China, Luzhou',
  t0211530: 'China, Suzhou',
  t0211549: 'China, Hangzhou',
  t0211575: 'error, China, Shanghai',
  t0211596: 'China, Shanghai',
  t0211611: 'China, Taiyuan',
  t0211709: 'sealing, Singapore/China?',
  t0211930: 'USA, Irvine',
  t0211939: 'China, Huzhou',
  t0211950: 'USA, Palo Alto',
  t0211968: 'error, China, Hebei',
  t0211977: 'China, Guangdong',
  t0211992: 'China, Hangzhou',
  t0212516: 'China, Guangzhou',
  t0212527: 'China, Guilin',
  t0212629: 'China, Guangdong, power',
  t0212631: 'China, Foshan',
  t0212635: 'Korea, Goyang-si',
  t0212641: 'China, Xi\'an',
  t0212650: 'China, Zhongwei',
  t0212667: 'China, Ningxia',
  t0212670: 'Korea, Yongin-si',
  t0212778: 'error, China, Suzhou, power',
  t0212909: 'min ask, China, Guilin, power',
  t0212937: 'error, China, Yunnan',
  t0212943: 'error, China, Cangzhou',
  t0220259: 'error, Latvia, Riga, power',
  t0220265: 'validating, China, Yunnan',
  t0221949: 'China, Changsha',
  t0221959: 'China, Guangdong',
  t0222040: 'error, China, Guangdong, power',
  t0222553: 'China, Huaihua',
  t0222565: 'Romania, Bucharest',
  t0222585: 'error, China, Dongguan',
  t0222569: 'China, Xiamen',
  t0222624: '64G, China, Guangdong',
  t0222628: 'China, Guangdong',
  t0222648: 'China, Guangdong',
  t0222659: 'USA, Irvine, power',
  t0222660: 'error, China, Shenzen',
  t0222688: 'error, China, Beijing',
  t0224841: 'error, Australia, Melbourne',
  t0225866: 'Korea, Dongjak-gu',
  t0225898: 'China, Guangdong',
  t0225900: 'sealing, China, Chengdu, power, top miner',
  t0225914: 'China, Ningxia',
  t0229193: 'China, Beijing',
  t0230737: 'sealing, China, Shanghai',
  t0230933: 'error, China, Shenyang',
  t0231070: 'error, China, Guilin',
  t0232051: 'China, Shanghai',
  t0232056: 'China, Shanghai',
  t0232239: 'USA, San Jose',
  t0232256: 'China, Foshan',
  t0232845: 'sealing, Bulgaria',
  t0232856: 'China, Wuhan, power',
  t0233141: 'error, China, Guangdong, power',
  t0232982: 'China, Maoming',
  t0232997: 'China, Guangdong',
  t0233015: 'China, Beijing',
  t0233143: 'China, Hangzhou',
  t0233297: 'China, Shanghai',
  t0233383: 'error, Korea, Goyang-si',
  t0233424: 'error, China, Shanghai',
  t0233530: 'China, Shanghai',
  t0233593: 'sealing, China, Shenzen',
  t0233686: 'active, China, Xi\'an, power, top miner',
  t0233717: 'China, Shenzen, power, top miner',
  t0233895: 'error, China, Changsha',
  t0233930: 'sealing, China, Guangzhou',
  t0233937: 'sealing, China, Shenzen + USA',
  t0233953: 'China, Shenzen',
  t0233951: 'sealing, China, Beijing, power, top miner',
  t0233960: 'China, Hangzhou',
  t0233973: 'error, Latvia, Riga',
  t0233996: 'error, China, Shenzen + USA',
  t0234034: 'sealing, China, Huaihua',
  t0234091: 'error, China, Hangzhou',
  t0234099: 'sealing, Japan, Nagoya',
  t0234125: 'error, China, Beijing',
  t0234147: 'error, China, Zhejiang',
  t0234177: 'error, China, Zhejiang',
  t0234198: 'China, Ningxia',
  t0234691: 'error, USA, Washington',
  t0234726: 'China, Taiyuan',
  t0234765: 'error, China, Shenzhen',
  t0234891: 'China, Guangdong',
  t0234987: 'active, China, Zhongshan, power, top miner',
  t0235206: 'error, China, Shenzhen',
  t0235511: 'sealing, China, Sichuan, power, top miner',
  t0235646: 'sealing, China, Wuxi',
  t0235703: 'validating, China, Shenzhen',
  t0235771: 'error, China, Yibin',
  t0235835: 'error, China, Hangzhou',
  t0235882: 'error, China, Guangdong',
  t0235924: 'error, China, Beijing',
  t0235934: 'error, China, Ningxia',
  t0235943: 'error, China, Guangdong',
  t0235961: 'error, China, Shaanxi',
  t0236009: 'sealing, China, Beijing',
  t0236053: 'error, China, Chongqing',
  t0236085: 'validating, China, Shenzhen',
  t0236105: 'error, Canada, Mitchell',
  t0236108: 'error, USA, Irvine',
  t0236119: 'sealing, China, Shenzhen',
  t0236726: 'sealing, China, Huzhou, power, top miner',
  t0236976: 'error, China, Suzhou',
  t0237243: 'sealing, China, Huaihua',
  t0237370: 'validating, China, Chengdu',
  t0237374: 'sealing, China, Shenzhen + USA',
  t0237376: 'error, China, Shenzhen + USA',
  t0237416: 'sealing, China, Hefei',
  t0237711: 'sealing, China, Foshan',
  t0237858: 'new, China, Shanghai',
  t0237970: 'new, USA, power',
  t0237980: 'new, China, Chengdu, power, top miner',
  t0238227: 'new, Russia',
  t0238367: 'new, USA, power',
  t0238435: 'new, USA, Rochester, power',
  t0238684: 'new, USA, Irvina, power',
  t0238789: 'new, China, Hefei',
  t0238958: 'new, China, Chengdu, power, top miner',
  t0239028: 'new, China, Beijing',
  t0239032: 'new, USA',
  t0239176: 'new, USA',
  t0239202: 'new, China, Fuzhou',
  t0239267: 'new, China, Guangdong, power',
  t0239303: 'new, China, Fuzhou',
  t0239340: 'new, China, Shenzhen, power',
  t0239463: 'new, China, Mitchell',
  t0239470: 'new, China, Fuzhou',
  t0239538: 'new, China, Xi\'an',
  t0239579: 'new, China, Foshan',
  t0239584: 'new, China, Guangdong',

  // Non-routables (with power)
  t01020: 'NR, power, top miner',
  t01030: 'NR, power, top miner',
  t01038: 'NR',
  t01043: 'NR',
  t01056: 'NR - China, Ningbo',
  t01068: 'NR - China',
  t01075: 'NR, power, top miner',
  t01081: 'NR - China',
  t01102: 'NR, power, top miner',
  t01218: 'NR, power, top miner',
  t01228: 'NR, power, top miner',
  t01267: 'NR',
  t01321: 'NR - China',
  t03739: 'NR - IPv6 only',
  t03929: 'NR',
  t04168: 'NR - 64G, USA Palo Alto',
  t04242: 'NR',
  t06254: 'NR - China, Hangzhou',
  t09335: 'NR, power',
  t010966: 'NR, power',
  t013121: 'NR, power',
  t013854: 'NR, power, top miner',
  t014268: 'NR',
  t015362: 'NR, power, top miner - China, Beijing',
  t018495: 'NR',
  t021396: 'NR, power',
  t021670: 'NR, power, top miner',
  t026228: 'NR - China, Zhejiang',
  t026268: 'NR, power',
  t026230: 'NR - China, Zhejiang',
  t026352: 'NR',
  t026366: 'NR',
  t027003: 'NR, power',
  t027043: 'NR - China, Guangzhou',
  t028023: 'NR - China, Yunnan',
  t028066: 'NR - China',
  t028092: 'NR - China, Beijing',
  t028149: 'NR - China',
  t028283: 'NR - China',
  t028316: 'NR',
  t038586: 'NR - China, Wuhan',
  t038713: 'NR, power',
  t093312: 'NR',
  t0100899: 'NR - China, Guilin',
  t0121490: 'NR - China, Guangdong',
  t0121497: 'NR',
  t0123112: 'NR - China, Guangzhou',
  t0123122: 'NR',
  t0123126: 'NR - China, Guangdong',
  t0123151: 'NR, power',
  t0136100: 'NR - China, Hangzhou',
  t0210515: 'NR',
  t0210520: 'NR - China, Yibin',
  t0210747: 'NR',
  t0210974: 'NR - China, Beijing',
  t0212511: 'NR - China, Ningbo',
  t0211517: 'NR - Korea, Goyang-si',
  t0211524: 'NR - USA, Irvine',
  t0211526: 'NR',
  t0212564: 'NR - China, Guangdong',
  t0211566: 'NR - China, Chongqing',
  t0211603: 'NR, power, top miner',
  t0211648: 'NR',
  t0211656: 'NR',
  t0211660: 'NR, power, top miner',
  t0211669: 'NR',
  t0211674: 'NR, power',
  t0211707: 'NR - Korea, Seongnam-si',
  t0211973: 'NR - China, Shanghai',
  t0211982: 'NR - Korea, Goyang-si',
  t0211988: 'NR, power, top miner',
  t0212637: 'NR - China, Cangzhou',
  t0212689: 'NR - China, Foshan',
  t0212714: 'NR',
  t0222581: 'NR - China, Shenzhen',
  t0222681: 'NR - China, Hangzhou',
  t0223575: 'NR, power',
  t0230757: 'NR, power',
  t0232926: 'NR, power',
  t0232947: 'NR, power, top miner',
  t0233291: 'NR, power',
  t0233071: 'NR, power, top miner',
  t0233075: 'NR, power, top miner',
  t0233161: 'NR, power',
  t0232205: 'NR, power',
  t0233150: 'NR, power',
  t0233341: 'NR, power, top miner',
  t0235596: 'NR, power, top miner',
  t0233599: 'NR, power, top miner',
  t0233923: 'NR, power, top miner',
  t0234143: 'NR, power',
  t0234695: 'NR, power',
  t0234698: 'NR, power',
  t0234725: 'NR, power',
  t0234783: 'NR, power, top miner',
  t0235090: 'NR, power',
  t0235096: 'NR, power, top miner',
  t0235126: 'NR, power',
  t0235133: 'NR, power',
  t0235139: 'NR, power',
  t0235224: 'NR, power',
  t0235249: 'NR, power',
  t0235282: 'NR, power, top miner',
  t0235291: 'NR, power',
  t0235854: 'NR, power',
  t0235877: 'NR, power',
  t0235972: 'NR, power',
  t0236016: 'NR, power, verified',
  t0236030: 'NR, power',
  t0236078: 'NR, power, verified',
  t0235896: 'NR, power, top miner',
  t0236987: 'NR, power',
  t0237055: 'NR, power',
  t0237123: 'NR, power',

  // Bootstrappers
  t01000: 'bootstrap, NR',
  t01001: 'bootstrap, USA, Ashburn',
  t01002: 'bootstrap, NR',
  t01003: 'bootstrap, NR'
}

export default annotations
