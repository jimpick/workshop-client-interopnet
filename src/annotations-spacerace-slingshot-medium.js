// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01247: "candidate, Canada, Montreal, BigChungus™",
  f02606: "candidate, China, Shanghai",
  f02619: "candidate, China, Beijing, Blockcasting",
  f02665: "candidate, Netherlands, Amsterdam, fm-ops",
  f03345: "candidate, China, Fuzhou, chh",
  f07982: "candidate, China, Shenzhen",
  f08091: "candidate, USA",
  f08094: "candidate, China, Guangzhou, dongshao",
  f08157: "candidate, China, Beijing + Germany, Frankfurt, 超星际",
  f08264: "candidate, China, Xianning",
  f08474: "candidate, China, Hong Kong",
  f010048: "candidate, China, Shanghai",
  f010498: "candidate, China, Shenzhen",
  f010617: "candidate, Canada, Surrey, @feiya200",
  f015927: "candidate, USA, East Islip",
  f017665: "candidate, China, Shenyang",
  f019024: "candidate, China, Sichuan",
  f020398: "candidate, China, Zhangjiakou",
  f020742: "candidate, China, Shanghai + Hangzhou + Shaoxing",
  f020923: "candidate, China, Cangzhou",
  f020975: "candidate, China, Shandong",
  f021265: "candidate, China, Wuhan",
  f021444: "candidate, China, Guangzhou",
  f022070: "candidate, China, Jieyang",
  f022309: "candidate, Korea, Chuncheon",
  f022399: "candidate, China, Beijing",
  f022522: "candidate, China, Dongguan",
  f022913: "candidate, Korea, Uiwang",
  f022922: "candidate, China, Shenzhen",
  f023198: "candidate, NR",
  f023643: "candidate, NR",
  f023943: "candidate, USA, Ashburn",
  f024565: "candidate, Korea, Incheon",
  f024617: "candidate, Korea, Bucheon-si",
  f024902: "candidate, Korea, Incheon",
  f024903: "candidate, China, Mianyang",
  f024983: "candidate, China, Hong Kong",
  f025007: "candidate, Korea, Gyeonggi-do",
  f025008: "candidate, Korea, Gyeonggi-do",
  f025017: "candidate, China, Hefei",
  f025019: "candidate, China, Taiwan, Hsinchu",

  // Live

  // Testing

  f01234: "testing, Belgium, De Klinge, Eliovp",
  f01240: "testing, Netherlands, HidNand",
  f01279: "testing, China, Sichuan",
  f01287: "testing, China, Jiaxing, MaiTian",
  f01799: "testing, China, Jinan, TokenHome",
  f01800: "testing, China, Shenzhen + Chengdu",
  f02301: "testing, USA",
  f02305: "testing, China, Dongguan",
  f02399: "testing, China, Zhejiang",
  f02401: "testing, Canada, Chambly, NBFS Canada",
  f02405: "testing, China, Shenzhen",
  f02415: "testing, China, Hong Kong",
  f02417: "testing, China, Liaoning",
  f02423: "testing, Ukraine, Kyiv, igowreck",
  f02490: "testing, China, Fujian",
  f02492: "testing, China, Shenzhen",
  f02500: "testing, Korea, Seongnam-si",
  f02501: "testing, USA, Portland, 6block",
  f02620: "testing, Poland, Krakow, @magik6k",
  f02622: "testing, USA, Portland, 6block",
  f02623: "testing, USA, Portland, 6block",
  f02625: "testing, China, Shanghai, IPFS星际工厂",
  f02633: "testing, China, Hong Kong",
  f02645: "testing, China, Hong Kong",
  f02668: "testing, China, Chengdu",
  f02772: "testing, China, Chengdu",
  f03134: "testing, China, Cangzhou, 乔木信息",
  f03143: "testing, China, Shijiazhuang + Hong Kong",
  f03223: "testing, USA",
  f03224: "testing, Ukraine, Irpin, oboltusov",
  f03274: "testing, USA, Portland, 6block",
  f03339: "testing, China, Luzhou, benxun",
  f03363: "testing, Singapore",
  f03482: "testing, China, Wuxi",
  f03488: "testing, Korea, Geumcheon-gu",
  f03512: "testing, New Zealand, Auckland, NZFILECOIN01",
  f03624: "testing, Germany, Chemnitz, ode",
  f04443: "testing, China, Shanghai, 罗良科技",
  f05317: "testing, USA, Portland",
  f07824: "testing, China, Shanghai",
  f07850: "testing, USA, Portland, 6block",
  f07990: "testing, China, Hong Kong",
  f07998: "testing, China, Hangzhou",
  f08220: "testing, China, Shenzhen",
  f08240: "testing, Russia, Novosibirsk, Rabinovitch",
  f08371: "testing, China, Chengdu",
  f08403: "testing, UK, Lower Slaughter",
  f09592: "testing, Japan, Minamata",
  f09675: "testing, China, Weifang",
  f09693: "testing, USA, Portland + Singapore",
  f09696: "testing, USA, Portland + Singapore",
  f09731: "testing, China, Guiyang",
  f09770: "testing, China, Xi'an",
  f09833: "testing, USA, San Jose",
  f09848: "testing, USA",
  f010084: "testing, China, Beijing",
  f010253: "testing, China, Beijing + USA, Portland",
  f010257: "testing, China, Hong Kong, DNS:feiyuipfs.com",
  f010400: "testing, China, Shenyang",
  f010438: "testing, USA",
  f010446: "testing, Netherlands",
  f010479: "testing, France, Fontenay-sous-Bois",
  f010491: "testing, China, Shenzhen",
  f010493: "testing, China, Shanghai",
  f010501: "testing, China, Hangzhou",
  f010505: "testing, China, Wuhan",
  f010507: "testing, China, Hangzhou",
  f010513: "testing, China, Chongqing",
  f010558: "testing, China, Shenzhen + Hong Kong",
  f014281: "testing, Netherlands, Permerend",
  f014394: "testing, China, Suzhou",
  f014569: "testing, NR",
  f014768: "testing, Singapore",
  f015233: "testing, China, Nanjing",
  f015747: "testing, Japan, Setagaya-ku",
  f016482: "testing, USA, Aliquippa",
  f016594: "testing, Germany",
  f017734: "testing, Australia, Sydney",
  f017970: "testing, China, Baoding",
  f018501: "testing, China, Beijing",
  f018780: "testing, Singapore + Germany, Frankfurt + USA",
  f018781: "testing, Singapore + Germany, Frankfurt + USA",
  f018782: "testing, Singapore + Germany, Frankfurt + USA",
  f018783: "testing, Singapore + Germany, Frankfurt + USA",
  f018784: "testing, Singapore + Germany, Frankfurt + USA",
  f019074: "testing, China, Guangdong",
  f019100: "testing, Romania, Cluj-Napoca",
  f019104: "testing, Canada, Chambly",
  f019118: "testing, China, Jiaxing",
  f019174: "testing, UK, Halifax",
  f019240: "testing, China, Beijing",
  f019243: "testing, USA, Jackson",
  f019354: "testing, Germany, Frankfurt",
  f019638: "testing, Germany, Frankfurt",
  f019824: "testing, USA",
  f020489: "testing, China, Lioaning",
  f020904: "testing, Korea, Uijeongbu-si",
  f020928: "testing, China, Deyang + Singapore",
  f021075: "testing, China, Chengdu",
  f021255: "testing, China, Suzhou + Netherlands",
  f021316: "testing, China, Yangzhou",
  f021328: "testing, China, Dongguan",
  f021479: "testing, China, Qingdao",
  f021583: "testing, China, Jiaxing",
  f021870: "testing, USA, Portland",
  f022142: "testing, USA, Queens",
  f022163: "testing, NR",
  f022261: "testing, China, Luzhou",
  f022289: "testing, China, Mianyang",
  f022352: "testing, Norway, Borgen",
  f022376: "testing, China, Dongguan",
  f022566: "testing, China, Nanchong",
  f022753: "testing, China, Hong Kong",
  f022832: "testing, China",
  f022841: "testing, China, Zhongshan",
  f022853: "testing, China, Fuzhou",
  f022855: "testing, Finland, Helsinki",
  f023013: "testing, China, Hong Kong",
  f023108: "testing, China, Dongguan",
  f023179: "testing, China, Fuzhou",
  f023200: "testing, China, Shanghai",
  f023229: "testing, China, Shandong",
  f023467: "testing, Norway, Oslo",
  f023490: "testing, Ukraine, Kyiv",
  f023495: "testing, China, Beijing + USA, Portland",
  f023501: "testing, China, Mianyang",
  f023526: "testing, China, Chongqing",
  f023581: "testing, China, Hong Kong",
  f023647: "testing, Korea, Gangseo-gu",
  f023678: "testing, China, Jiaxing",
  f023825: "testing, USA, Portland",
  f023843: "testing, NR",
  f023939: "testing, NR",
  f023971: "testing, USA, @Brian Y",
  f024015: "testing, USA, Portland",
  f024184: "testing, Korea, Gangnam-gu",
  f024468: "testing, China, Shenzhen",
  f024496: "testing, China, Dongguan",
  f024550: "testing, China, Wenzhou",


  // Transferring

  // Stuck - CheckForAcceptance


  // Price tier A - 5+ leading zero

  f021540: 'active-a, Germany, Frankfurt, @hsanjuan', // 10.04, 421264: 254 MiB, 0.00000006487625 FIL

  f02387: 'sealing-a, Canada, Brampton, NBFS Canada', // 10.04, 422140: 254 MiB, 0.0000001299395 FIL
  f024101: 'sealing-a, China, Guiyang', // 10.06, 452703: 254 MiB, 0.00000000001299985 FIL

  // Price tier B - 3-4 leading zero
	
  f01152: 'active-b, China, Beijing', // 10.04, 421060: 254 MiB, 0.000013028375 FIL
  f01241: 'active-b, USA, Portland, 6block', // 10.04, 421193: 254 MiB, 0.0000130052 FIL
  f01272: 'active-b, Singapore', // 10.04: 254 MiB, 421238: 0.000065066125 FIL
  f02514: 'active-b, USA, Portland, 6block', // top miner - 10.04, 421660: 254 MiB, 0.000013100375 FIL
  f03273: 'active-b, USA, Portland, 6block', // 10.05, 435212: 254 MiB, 0.000013015 FIL
  f07919: 'active-b, China, Beijing, Shanghai, Hunan', // top miner - 10.04, 421690: 254 MiB, 0.00001307075 FIL
  f010241: 'active-b, China, Beijing + USA, Portland', // 10.05, 435316: 254 MiB, 0.0000130651 FIL
  f023649: 'active-b, Korea, Seoul', // 10.05, 435377: 508 MiB, 0.00013032625 FIL
  f024016: 'active-b, USA, Portland', // 10.05, 435225: 254 MiB, 0.00006534 FIL


  f02381: 'sealing-b, China, Dongguan, 西野七濑迷叔', // 10.06, 452668: 254 MiB, 0.00006490125 FIL
  f03176: 'sealing-b, USA, San Mateo, Five Star-Helmsman&Heiben', // 10.06, 452689: 254 MiB, 0.000013007 FIL
  f03275: 'sealing-b, USA, Portland, 6block', // top miner - 10.04, 421645: 254 MiB, 0.0000130888 FIL
  f03491: 'sealing-b, China, Hong Kong', // 10.06, 452684: // 254 MiB, 0.00001299995 FIL
  f05315: 'sealing-b, USA, Portland, 6block', // 10.06, 452378: 254 MiB, 0.000013006275 FIL
  f05316: 'sealing-b, USA, Portland, 6block', // 10.06, 452724: 254 MiB, 0.00001297695 FIL
  f08025: 'sealing-b, China, Hong Kong', // 10.06, 452628: 254 MiB, 0.000013004475 FIL
  f08311: 'sealing-b, China, Shenzhen', // 10.06, 452766: 508 MiB, 0.0001309705 FIL
  f08383: 'sealing-b, USA, Portland, 6block', // 10.06, 452344: 254 MiB, 0.000013006925 FIL
  f08482: 'sealing-b, USA, Athol, @why', // 10.04, 421320: 254 MiB, 0.000065117 FIL
  f010088: 'sealing-b, DNS:purumine.com', // 10.06, 452624: 254 MiB, 0.00001300305 FIL
  f018772: 'sealing-b, Australia', // 10.06, 452748: 254 MiB, 0.00006502625 FIL
  f019041: 'sealing-b, Singapore', // 10.06, 452753: 254 MiB, 0.0000650085 FIL
  f020605: 'sealing-b, China, Yibin', // 10.06, 451710: 254 MiB, 0.000012995775 FIL
  f024025: 'sealing-b, China, Chengdu', // 10.06, 452452: 254 MiB, 0.000064868125 FIL
  f024521: 'sealing-b, Korea, Gyeonggi-do', // 10.06, 452657: 254 MiB, 0.000065130375 FIL


  // Price tier C - <= 2 leading zero

  f01238: 'active-c, Vietnam, Hanoi, FILECOIN-VIETNAM', // 10.04, 431954: 254 MiB, 0.012995375 FIL
  f01278: 'active-c, USA, Grand Rapids, MiMiner', // 10.04, 421214: 254 MiB, 0.013011475 FIL
  f02388: 'active-c, Netherlands, Amersfoort, Kroketje', // 10.04, 421256: 254 MiB, 0.012982425 FIL

  f014409: 'sealing-c, USA, Waxhaw', // 10.06, 451782: 254 MiB, 0.01297545 FIL
  f015877: 'sealing-c, China, Jiaxing + USA', // 10.06, 451761: 254 MiB, 0.013009225 FIL

  // Min-size

  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 10.04: 268435456 < 943718400 (~1GiB)

  // Transfer failed - failed to initiate data transfer: deal data transfer failed: response rejected

  f03302: 'xfr-failed, China, Chengdu', // 10.06: 254 MiB, 0.000065022375 FIL
  f019437: 'xfr-failed, Korea, Guro-gu', // 10.06: 254 MiB, 0.00006497525 FIL
  f022227: 'xfr-failed, China, Jiangsu', // 10.06: 254 MiB, 0.000064958625 FIL
  f022836: 'xfr-failed, China, Chongqing', // 10.06: 254 MiB, 0 FIL
  f022969: 'xfr-failed, China, Chengdu', // 10.06: 254 MiB, 0.0000648725 FIL 

  // Error

  f08019: 'error, China, Yantai, 三合', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f010247: 'error, China, Yantai', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f019022: "error, China, Xi'an", // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f021339: 'error, China, Jiaxing', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected

  // Timeout during ask

  f02299: 'timeout-ask, China, Dongguan, Yolo', // 10.06
  f02654: "timeout-ask, China, Shanghai", // 10.07
  f03328: "timeout-ask, China, Xinxiang", // 10.07
  f03340: "timeout-ask, China, Xi'an", // 10.07
  f05664: "timeout-ask, China, Shenzhen, 艾比特网络科技", // 10.07
  f08285: "timeout-ask, Latvia, Riga, stander", // 10.07
  f015897: 'timeout-ask, China, Guangdong', // 10.06
  f015941: "timeout-ask, Ukraine, Kyiv", // 10.07
  f018785: "timeout-ask, Singapore + Germany, Frankfurt + USA", // 10.07
  f019029: "timeout-ask, Serbia, Boljevac", // 10.07
  f019099: "timeout-ask, China, Hong Kong", // 10.07
  f019362: "timeout-ask, China, Hangzhou", // 10.07
  f020436: "timeout-ask, China, Beijing", // 10.07
  f021262: "timeout-ask, China, Shanghai", // 10.07
  f021616: "timeout-ask, China, Shanghai", // 10.07
  f024030: "timeout-ask, Korea, Gwangju", // 10.07
  f024070: "timeout-ask, Japan, Setagaya-ku", // 10.07

  // Error during ask
  f03131: "error-ask, China, Changsha", // failed to open stream to miner: exhausted 5 attempts but failed to open stream, err: context canceled

}

export default annotations
