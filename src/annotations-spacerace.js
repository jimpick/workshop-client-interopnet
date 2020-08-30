const annotations = {

  // Active - sun
 
  // Active/sealing - sun

  t02301: 'active, USA, <19h, <16h, sun',
  t02419: 'active, China, Shanghai, yuantai, 10h, sun',
  t02421: 'active, China, Deyang + Singapore, 腾盛科技, <19h, sun',
  t02540: 'active, USA, Rochester, 12h, sun',
  t02620: 'active, Poland, Krakow, @magik6k, 20h, <16h, sun',
  t03345: 'active, China, Fuzhou, chh, <19h, <16h, sun',
  t07775: 'active, China, Shenzhen, 16h, sun',
  t08019: 'active, China, Yantai, 三合, <19h, sun',
  t08301: 'active, Japan, Setagaya-ku, MEIK, <19h, sun',
  t08854: 'active, China, Dongguan, <16h, sun',
  t09833: 'active, USA, San Jose, <13h, sun',

  // Active - sat
  
  t09589: 'active, China, Changsha, <13h, sun-xfr',

  // Active/sealing - sat

  t08220: 'active, China, Shenzhen, <19h, sun-xfr',

  // Sealing - sun
 
  t02404: 'sealing, Korea, Seoul, 10h, TVCC& BLOCK DATA BANK, sun',
  t02613: 'sealing, China, Chongqing, 10h, <19h, sun',
  t02627: 'sealing, China, Guilin, <19h, sun',
  t02658: 'sealing, China, Ningbo, bluematrix, sun',
  t02775: 'sealing, China, Hong Kong, sun',
  t03002: 'sealing, China, Chongqing, 11h, sun',
  t03194: 'sealing, China, Shenzhen, 成都云存&Npool, <19h, sun',
  t03225: 'sealing, China, Guyuan, sun',
  t03328: 'sealing, China, Xinxiang, sun',
  t03339: 'sealing, China, Luzhou, benxun, sun',
  t03340: "sealing, China, Xi'an, <19h, sun", 
  t03344: 'sealing, China, Guangzhou, 13h, sun',
  t03512: 'sealing, New Zealand, Auckland, NZFILECOIN01, sun',
  t03523: 'sealing, China, Wuxi, YC--wuxi, sun',
  t06775: 'sealing, China, Shenzhen, IPSB&CAAP, sun',
  t07806: 'sealing, China, Wuhan, HelloXP, sun',
  t07827: 'sealing, China, Wuhan, 天际合, sun',
  t07944: 'sealing, China, Hangzhou, SupremeTreasure, sun',
  t08094: 'sealing, China, Guangzhou, dongshao, sun',
  t08109: 'sealing, USA, qianyuanyunshuo, sun',
  t08178: 'sealing, China, Jiaxing, CAAP-金华, sun',
  t08371: 'sealing, China, Chengdu, sun',
  t08399: 'sealing, USA, Sammamish, sun',
  t08448: 'sealing, China, Guangdong, sun',
  t08482: 'sealing, USA, Athol, @why, sun',
  t08937: 'sealing, China, Wuxi, YC--wuxi, sun',
  t08988: 'sealing, Korea, Hwaseong-si, sun',
  t09573: 'sealing, China, Xiamen, sun',
  t09597: 'sealing, China, Shanghai, sun',
  t09707: 'sealing, China, Guangdong, sun',
  t09712: 'sealing, China, Chengdu, sun',
  t09731: 'sealing, China, Guiyang, sun',
  t09736: 'sealing, China, Guangdong, sun',
  t09771: 'sealing, China, Hangzhou, sun',
  t09792: 'sealing, USA, Council Bluffs, sun',
  t09811: 'sealing, China, Dongguan, sun',
  t09997: 'sealing, USA, sun',
  t010152: 'sealing, Germany, sun',
  t010173: 'sealing, Korea, Pyeongtaek-si, sun',
  t010223: 'sealing, China, Ordos, <19h, sun',
  t010225: 'sealing, China, Ordos, sun',
  t010297: 'sealing, USA, Howell, sun',
  t010303: 'sealing, China, Guangdong, sun',
  t010311: 'sealing, Korea, Hwaseong-si, sun',
  t010346: 'sealing, China, Karamay, sun',
  t010399: 'sealing, China, Guangzhou, sun',
  t010433: 'sealing, Korea, Seoul, sun',
  t010438: 'sealing, USA, sun',
  t010446: 'sealing, Netherlands, sun',
  t010449: 'sealing, China, Jiangmen, sun',
  t010453: 'sealing, China, Shaanxi, sun',
  t010468: 'sealing, China, Guangzhou, sun',
  t010491: 'sealing, China, Shenzhen, sun',
  t010533: 'sealing, China, Ordos, sun',
  t010538: 'sealing, China, Ordos, sun',
  t010542: 'sealing, China, Ordos, sun',
  t010549: 'sealing, China, Ordos, sun',
  t010551: 'sealing, China, Shenyang, sun',
  t010553: 'sealing, China, Ordos, sun',
  t010603: 'sealing, China, Baoding, sun',
  t014207: 'sealing, USA, sun',
  t014233: 'sealing, China, Shanghai, sun',
  t014328: 'sealing, Canada, Waterloo, sun',

  // Stuck - sat
 
  t02382: 'stuck, China, Zhongshan, sun-cfa',
 

  // New



  // Asks

  t03136: "min-ask, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat",
  t09056: 'min-ask, China, Shenzhen, SZSQ1',

  // Error

  t03305: 'error, Kenya, Nairobi, <19h', // market balance
  t03306: 'error, Australia, <19h', // market balance
  t03307: 'error, Australia, wed', // market balance
  t03365: 'error, China, Wuhan + Wuxi', // market balance
  t03366: 'error, China, Wuhan + Wuxi', // getting client market balance failed
  t03484: 'error, Netherlands, 14h, wed', // market balance
  t03485: 'error, Netherlands, 13h, 14h', // market balance
  t03517: 'error, China, Wuhan + Wuxi', // getting client market balance failed
  t03519: 'error, USA, wed', // market balance
  t03619: 'error, China, Xiamen', // (State=26) handing off deal to node: AddPiece failed: getting available sector: getting sector number: filemist has not start seal yet
  t03620: 'error, Germany, Frankfurt, wed', // market balance
  t07987: 'error, China, Beijing, wed', // reset
  t08205: 'error, Brazil, Sao Paulo', // market balance
  t08390: 'error, China, Shenzhen, <19h', // EOF
  t08402: 'error, China, Sichuan, wed', // EOF
  t08406: 'error, China, Shenzhen', // reset
  t08432: 'error, China, Taizhou, wed', //  No space left on device
  t08572: 'error, Brazil, Sao Paulo', // market balance
  t09053: 'error, China, Shenzhen, wed', // reset
  t09261: 'error, Brazil, Sao Paulo', // market balance
  t09763: 'error, China, Mianyang,  <13h', // market balance
  t010257: 'error, China, Hong Kong, sat', // reset

  // Dial backoff

  t07826: 'backoff, China, Shenzhen, 星际医生, <19h',
  t07848: 'backoff, China, Wuhan, wed',
  t08073: 'backoff, China, Qiqihar, QY7TT, sat-cfa',
  t010005: 'backoff, China, Zhongshan, sat',
  t010507: 'backoff, China, Hangzhou, <19h',

  // Rejected

  t01012: 'rejected, China, Hong Kong + Guangzhou',
  t01100: 'rejected, Serbia, Belgrade, filmine.io',
  t01151: 'rejected, USA, Waxhaw',
  t01152: 'rejected, China, Beijing, wed',
  t01154: 'rejected, Sweden, Alvsjo',
  t01155: 'rejected, China, Shanghai, DianCun Tech',
  t01231: 'rejected, Singapore',
  t01234: 'rejected, Belgium, De Klinge, Eliovp',
  t01235: 'rejected, Singapore, IPFSMain',
  t01236: 'rejected, Singapore',
  t01238: 'rejected, Vietnam, Hanoi, FILECOIN-VIETNAM',
  t01240: 'rejected, Netherlands, HidNand',
  t01241: 'rejected, USA, Portland',
  t01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t01247: 'rejected, Canada, Montreal, BigChungus™, mon',
  t01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  t01272: 'rejected, Singapore, 12h',
  t01275: 'rejected, Korea, Seongnam-si',
  t01276: 'rejected, Canada, Brampton, NBFS Canada',
  t01277: 'rejected, Sweden, Stockholm, tvsthlm',
  t01278: 'rejected, USA, Grand Rapids, MiMiner',
  t01279: 'rejected, China, Sichuan',
  t01280: 'rejected, China, Wuxi, 了凡超算',
  t01287: 'rejected, China, Jiaxing, MaiTian',
  t01288: 'rejected, China, Yibin, BlackStone, mon',
  t01289: 'rejected, China, Hangzhou + USA, <19h',
  t01291: 'rejected, Sweden, Stockholm, tvsthlm',
  t01782: 'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  t01799: 'rejected, China, Jinan, TokenHome, <19h',
  t01800: 'rejected, China, Shenzhen + Chengdu, 8h',
  t01801: 'rejected, Switzerland, Baar, Gogoșel',
  t02299: 'rejected, China, Dongguan, Yolo',
  t02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  t02305: 'rejected, China, Dongguan, SZSQ',
  t02307: 'rejected, China, Taiyuan, filecoin.monster, wed',
  t02381: 'rejected, China, Dongguan, 西野七濑迷叔, 12h, tue-xfr',
  t02383: 'rejected, China, Shenzhen',
  t02387: 'rejected, Canada, Brampton, NBFS Canada',
  t02388: 'rejected, Netherlands, Amersfoort, Kroketje',
  t02398: 'rejected, China, Hong Kong',
  t02399: 'rejected, China, Zhejiang',
  t02401: 'rejected, Canada, Chambly, NBFS Canada',
  t02403: 'rejected, UK, London, AIM',
  t02405: 'rejected, China, Shenzhen',
  t02415: 'rejected, China, Hong Kong',
  t02416: 'rejected, China, Guangdong, 星际无限',
  t02417: 'rejected, China, Liaoning',
  t02420: 'rejected, China, Wuhan, 7h',
  t02422: "rejected, China, Xi'an",
  t02423: 'rejected, Ukraine, Kyiv, igowreck',
  t02425: 'rejected, USA',
  t02492: 'rejected, China, Shenzhen',
  t02501: 'rejected, USA, Portland',
  t02503: 'rejected, China, Wuhan',
  t02505: 'rejected, China, Wuhan, tue',
  t02514: 'rejected, USA, Portland',
  t02515: 'rejected, China, Hangzhou',
  t02516: 'rejected, China, Hong Kong',
  t02520: 'rejected, China, Hong Kong + Dongguan',
  t02528: 'rejected, China, Hong Kong + Inner Mongolia',
  t02532: 'rejected, Singapore',
  t02534: 'rejected, China, Beijing',
  t02574: 'rejected, Japan, Minamata, mon',
  t02576: 'rejected, Denmark, Gjerlev, BenjaminH',
  t02606: 'rejected, China, Shanghai',
  t02607: 'rejected, China, Beijing',
  t02614: 'rejected, Singapore, mon',
  t02619: 'rejected, China, Beijing, Blockcasting',
  t02621: "rejected, China, Xi'an",
  t02622: 'rejected, USA, Portland',
  t02623: 'rejected, USA, Portland',
  t02624: 'rejected, China, Shanghai, filecoin.cn',
  t02625: 'rejected, China, Shanghai, IPFS星际工厂, <19h',
  t02626: 'rejected, China, Guangzhou + Hong Kong',
  t02633: 'rejected, China, Hong Kong',
  t02665: 'rejected, Netherlands, Amsterdam, fm-ops, sat', // no online
  t02726: 'rejected, USA, Brooklyn',
  t02732: 'rejected, USA',
  t02755: 'rejected, China, Shijiazhuang',
  t02768: 'rejected, China, Hong Kong',
  t02770: 'rejected, China, Hong Kong',
  t02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  t03021: 'rejected, China, Hong Kong',
  t03131: 'rejected, China, Changsha',
  t03143: 'rejected, China, Shijiazhuang + Hong Kong, 12h, 任鹏网络',
  t03144: 'rejected, Germany, Frankfurt',
  t03176: 'rejected, USA, San Mateo, Five Star-Helmsman&Heiben',
  t03222: 'rejected, China, Yuncheong, 星云矿池, wed',
  t03223: 'rejected, USA, <19h',
  t03224: 'rejected, Ukraine, Irpin, oboltusov',
  t03266: 'rejected, USA',
  t03273: 'rejected, USA, Portland',
  t03274: 'rejected, USA, Portland',
  t03275: 'rejected, USA, Portland',
  t03286: 'rejected, China, Mianyang',
  t03287: 'rejected, USA',
  t03312: 'rejected, China, Beijing',
  t03314: 'rejected, China, Zhangjiakou, mon, tue-xfr',
  t03317: 'rejected, China, Shenzhen + Hong Kong + Jieyang',
  t03325: 'rejected, Germany, Frankfurt',
  t03337: 'rejected, China, Sichuan, 朝日&网科巨力, wed',
  t03346: 'rejected, China, Huzhou, wckj, <19h',
  t03347: 'rejected, China, Shenzhen',
  t03361: 'rejected, China, Guangzhou, mon',
  t03362: 'rejected, Germany, Berlin',
  t03364: 'rejected, China, Guangzhou',
  t03427: 'rejected, Russia, airalab, mon',
  t03428: 'rejected, China, Beijing + Jiaxing + Germany, Frankfurt, mon',
  t03482: 'rejected, China, Wuxi',
  t03487: 'rejected, China, Yibin',
  t03488: 'rejected, Korea, Geumcheon-gu',
  t03491: 'rejected, China, Hong Kong',
  t03548: 'rejected, Singapore',
  t03515: 'rejected, China, Dongguan',
  t03624: 'rejected, Germany, Chemnitz, ode',
  t03630: 'rejected, China, Wuhan',
  t03638: 'rejected, USA, 13h',
  t03765: 'rejected, Colombia, Medellin',
  t04443: 'rejected, China, Shanghai, 罗良科技',
  t04921: 'rejected, China, Shanghai, mon',
  t05315: 'rejected, USA, Portland',
  t05316: 'rejected, USA, Portland',
  t07709: 'rejected, Korea, Dongjak-gu, 13h, WIGO M.C., wed',
  t07829: 'rejected, Japan, 21h, wed',
  t07830: 'rejected, Singapore',
  t07833: 'rejected, China, Changzhou, 星巢',
  t07850: 'rejected, USA, Portland',
  t07851: 'rejected, Netherlands, Purmerend',
  t07866: 'rejected, China, Foshan',
  t07919: 'rejected, China, Beijing, Shanghai, Hunan',
  t07956: 'rejected, Russia, mon',
  t07961: 'rejected, China, Changzhou, 9h',
  t07969: 'rejected, China, Hangzhou, FME',
  t07990: 'rejected, China, Hong Kong',
  t07998: 'rejected, China, Hangzhou, wed',
  t08022: 'rejected, China, Yibin',
  t08025: 'rejected, China, Hong Kong',
  t08040: 'rejected, Australia, Sydney',
  t08042: 'rejected, Brazil, Sao Paulo',
  t08061: 'rejected, China, Foshan',
  t08088: 'rejected, China, Dongguan',
  t08095: 'rejected, Canada, Surrey',
  t08096: 'rejected, China, Wuhan',
  t08103: 'rejected, China, Foshan, 花生酱肠粉',
  t08136: "rejected, China, Xi'an",
  t08148: 'rejected, China, Shanghai',
  t08157: 'rejected, China, Beijing + Germany, Frankfurt, 超星际',
  t08183: 'rejected, USA, Irvine',
  t08197: 'rejected, China, Foshan',
  t08199: 'rejected, USA, Sudbury',
  t08229: 'rejected, China, Nanchang, wed',
  t08235: 'rejected, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际',
  t08240: 'rejected, Russia, Novosibirsk, Rabinovitch',
  t08242: 'rejected, China, Weifang',
  t08257: 'rejected, China, Ningbo + USA, Boardman',
  t08285: 'rejected, Latvia, Riga, stander',
  t08289: 'rejected, Canada, Embrun',
  t08322: 'rejected, China, Chongqing',
  t08338: 'rejected, China, Weifang',
  t08347: 'rejected, China, Chengdu',
  t08349: 'rejected, China, Guangzhou, hkicloud',
  t08383: 'rejected, USA, Portland',
  t08384: 'rejected, China, Shandong + Hong Kong + Japan, Heiwajima + ' +
    'Russia, Khabarovsk',
  t08403: 'rejected, UK, Lower Slaughter',
  t08446: 'rejected, Norway, Borgen',
  t08481: 'rejected, USA, Berkeley',
  t08568: 'rejected, USA, Waxhaw, Meatball Part II',
  t08684: 'rejected, China, Fuzhou',
  t08685: 'rejected, China, Fuzhou',
  t08787: 'rejected, China, Yibin, fri',
  t08788: 'rejected, China, Fuzhou',
  t08789: 'rejected, China, Fuzhou',
  t08895: 'rejected, Japan, Ebisunishi',
  t08949: 'rejected, Norway, Oslo',
  t08958: 'rejected, China, Fuzhou',
  t08985: 'rejected, USA',
  t08995: 'rejected, China, Fuzhou',
  t09005: 'rejected, China, Fuzhou',
  t09029: 'rejected, China, Wuhan',
  t09037: 'rejected, Singapore',
  t09048: 'rejected, China, Fuzhou',
  t09087: 'rejected, USA',
  t09523: 'rejected, China, Beijing',
  t09560: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09565: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09592: 'rejected, Japan, Minamata',
  t09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09619: 'rejected, China, Shanghai',
  t09620: 'rejected, China, Weifang',
  t09642: 'rejected, Sweden, Alvsjo',
  t09653: 'rejected, China, Chengdu',
  t09662: 'rejected, Canada, Surrey',
  t09671: 'rejected, China, Chongqing',
  t09672: 'rejected, China, Chengdu',
  t09675: 'rejected, China, Weifang',
  t09680: 'rejected, Japan, Ebisunishi',
  t09689: 'rejected, USA, Portland',
  t09710: 'rejected, China, Jieyang, thu-xfr',
  t09723: 'rejected, China, Xiamen',
  t09737: 'rejected, USA, Sudbury',
  t09748: 'rejected, China, Tianjin, fri',
  t09761: 'rejected, China, Beijing, sat',
  t09797: 'rejected, China, Fuzhou',
  t09801: 'rejected, China, Fuzhou',
  t09805: 'rejected, China, Fuzhou',
  t09808: 'rejected, China, Fuzhou',
  t09809: 'rejected, China, Fuzhou',
  t09810: 'rejected, China, Fuzhou',
  t09813: 'rejected, China, Fuzhou',
  t09817: 'rejected, China, Fuzhou',
  t09825: 'rejected, China, Jinhua, sat',
  t09848: 'rejected, USA, fri',
  t09964: 'rejected, China, Beijing + Jiaxing, fri',
  t09983: 'rejected, China, Guangzhou, sat',
  t09985: 'rejected, China, Qingdao, sat',
  t010010: 'rejected, China, Changzhou + Hong Kong, sat',
  t010015: 'rejected, China, Taizhou, sat',
  t010032: 'rejected, China, Fuzhou, sat',
  t010035: 'rejected, Netherlands, sat',
  t010038: 'rejected, China, Hangzhou + Singapore, sat',
  t010048: 'rejected, China, Shanghai, sat',
  t010056: 'rejected, Singapore, sat',
  t010063: 'rejected, China, Mianyang, sat',
  t010078: 'rejected, China, Zhangjiakou + Hong Kong, sat',
  t010202: 'rejected, Singapore, sat',
  t010238: 'rejected, China, Xiamen, sat',
  t010247: 'rejected, China, Yantai, fri',
  t010254: 'rejected, Japan, Minamata, fri',
  t010265: 'rejected, China, Zhengzhou, fri',
  t010274: 'rejected, China, Fuzhou, sat',
  t010276: 'rejected, USA, fri',
  t010277: 'rejected, France, Fontenay-sous-Bois, fri',
  t010287: 'rejected, China, Fuzhou, sat',
  t010291: 'rejected, China, Fuzhou, sat',
  t010293: 'rejected, China, Xiamen, sat',
  t010299: 'rejected, China, Yibin, sat',
  t010308: 'rejected, Germany, Frankfurt, sun',
  t010362: 'rejected, Brazil, Sao Paulo, sat',
  t010372: 'rejected, Brazil, Sao Paulo, sat',
  t010419: 'rejected, China, Sichuan, sat',
  t010424: 'rejected, Australia, Sydney, sat',
  t010479: 'rejected, France, Fontenay-sous-Bois, sat',
  t010495: 'rejected, China, Tainjin, sat',
  t010496: 'rejected, China, Guangzhou, sun',
  t010512: 'rejected, China, Zhengzhou, sat',
  t010591: 'rejected, China, Wuhan, sat',
  t010600: 'rejected, USA, sat',
  t010602: 'rejected, China, Guangdong, sat',
  t010606: 'rejected, China, Fuzhou, sat',
  t010608: 'rejected, China, Fuzhou, sat',
  t010609: 'rejected, China, Fuzhou, sat',
  t010617: 'rejected, Canada, Surrey, sat',
  t014230: 'rejected, China, Fuzhou, sat',
  t014241: 'rejected, Norway, Borgen, sun',
  t014251: 'rejected, Singapore, sun',
  t014261: 'rejected, China, Fuzhou, sun',
  t014365: 'rejected, Australia, Marrickville + Japan, Heiwajima, sun',
  t014392: 'rejected, Russia, Khabarovsk + USA + Japan, Heiwajima, sun',



  // Dial errors

  t01229: 'dial, China, Hong Kong',
  t01475: 'dial, China, Wuhan + Germany',
  t02386: 'dial, Latvia, Riga',
  t02400: 'dial, China, Beijing',
  t02414: "dial, China, Xi'an, zhejiangyunchu",
  t02418: 'dial, China, Fujian + Netherlands, wed',
  t02438: 'dial, Singapore',
  t02490: 'dial, China, Fujian',
  t02529: 'dial, China, Chongqing',
  t02533: 'dial, Spain, Terrassa, LowFeeValidation.com, mon',
  t02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima',
  t02610: 'dial, Netherlands',
  t02632: 'dial, China, Tianjin',
  t02645: 'dial, China, Hong Kong',
  t02657: 'dial, China, Ordos, tue-xfr',
  t02664: 'dial, China, Hangzhou, ciger',
  t02721: 'dial, USA',
  t02723: 'dial, China, Hong Kong',
  t02725: 'dial, China, Hong Kong',
  t02731: 'dial, Singapore',
  t02774: 'dial, Australia, Sydney, tue',
  t03120: 'dial, China, Guangzhou, wed',
  t03134: 'dial, China, Cangzhou, 乔木信息',
  t03140: 'dial, China, QingDao, wed',
  t03220: 'dial, China, Ordos, wed-xfr',
  t03269: 'dial, Australia',
  t03276: 'dial, China, Dongguan, tue',
  t03302: 'dial, China, Chengdu',
  t03326: 'dial, USA, Seattle, tue',
  t03327: 'dial, Kenya, Nairobi',
  t03350: 'dial, China, Wuhan',
  t03351: 'dial, China, Chengdu, 10h',
  t03359: 'dial, China, Shanghai',
  t03360: 'dial, China, Shaanxi, fri',
  t03367: 'dial, Singapore',
  t03490: 'dial, China, Dongguan, wed-xfr',
  t03646: 'dial, China, Beijing, JingTang, fri-cfa',
  t03764: 'dial, China, Beijing, foobar',
  t03766: 'dial, China, Weifang, mon',
  t05317: 'dial, USA, Portland',
  t07451: 'dial, China, Hangzhou, mon',
  t07710: 'dial, Hong Kong, <19h',
  t07752: 'dial, China, Dongguan, wed-cfa',
  t07774: 'dial, China, Shenzhen',
  t07819: 'dial, China, Wuxi, YC--wuxi',
  t07857: 'dial, China, Zhengzhou, mon',
  t07947: 'dial, China, Zhengzhou, mon',
  t07982: 'dial, China, Shenzhen',
  t07991: 'dial, China, Changsha',
  t08006: 'dial, China, Shaanxi, wed',
  t08032: 'dial, China, Weifang',
  t08047: 'dial, China, Hangzhou',
  t08063: 'dial, China, Huizhou, wed',
  t08076: 'dial, Netherlands, Alphen aan den Rijn, Ang, tue',
  t08101: 'dial, China, Wuxi',
  t08149: 'dial, China, Jiangmen',
  t08150: 'dial, China, Hangzhou',
  t08161: 'dial, China, Weifang, wed',
  t08203: 'dial, Germany, Frankfurt',
  t08295: 'dial, China, Suzhou, IPFS Cloud, sat',
  t08330: 'dial, China, Chengdu, oursoft',
  t08344: 'dial, UK, Hartlepool',
  t08346: 'dial, Korea, wed',
  t08358: 'dial, China, Shenzhen',
  t08396: 'dial, France, Fontenay-sous-Bois',
  t08405: 'dial, China, Guangdong, wed',
  t08418: 'dial, China, Chansha + USA, sat',
  t08243: 'dial, USA, Queens, sat',
  t08497: 'dial, Brazil, Sao Paulo',
  t08793: 'dial, China, Fuzhou',
  t08904: 'dial, China, Deyang, <19h',
  t08928: 'dial, USA, Arlington, theartist',
  t08953: 'dial, China, Fuzhou',
  t08991: 'dial, China, Ili, wed',
  t09036: 'dial, China, Chengdu, CD-oursoft, sat',
  t09077: 'dial, China, Xiamen',
  t09082: 'dial, Australia, Canberra, sat',
  t09088: 'dial, China, Changsha, wed',
  t09091: 'dial, Netherlands',
  t09559: 'dial, Canada, Waterloo, thu',
  t09631: 'dial, China, Changzhou',
  t09643: 'dial, China, Beijing, sat',
  t09664: 'dial, Australia, Sydney, sat',
  t09729: 'dial, China, Dongguan, sat',
  t09734: 'dial, China, Dongguan',
  t09789: 'dial, USA, thu',
  t09814: 'dial, China, Fuzhou',
  t09830: 'dial, Korea, Geumcheon-gu, sat',
  t09859: 'dial, USA, fri',
  t09972: 'dial, Finland, Helsinki, sat',
  t010020: 'dial, China, Chongqing, sat',
  t010170: 'dial, China, Fuzhou, sat',
  t010224: 'dial, China, Fuzhou, fri',
  t010268: 'dial, China, Hangzhou, sat',
  t010289: 'dial, China, Fuzhou, sat',
  t010298: 'dial, China, Fuzhou, sat',
  t010374: 'dial, Norway, Borgen, sat',
  t010411: 'dial, USA, sat',
  t010598: 'dial, Canada, Waterloo, sat',
  t010612: 'dial, USA, Mountain View, sat',
  t010613: 'dial, Canada, Waterloo, sat',

  // XNR

  t01101: 'xnr, China, Shanghai, 5h, 5h',
  t01102: 'xnr, China, Shandong, 5h, 7h, sat',
  t01156: 'xnr, China, Hangzhou, wed-cfa',
  t01232: 'xnr, China, Hangzhou, wed',
  t01274: 'xnr, China, Guangdong, 11h, wed-funds',
  t02304: 'xnr, USA, Mountain View, 6h, tue',
  t02385: 'xnr, USA, East Islip, 20h, wed',
  t02424: 'xnr, Korea, Wanju, mon, tue',
  t02436: 'xnr, Netherlands',
  t02506: 'xnr, USA, Clarksville, wed',
  t02518: 'xnr, China, Shaanxi, mon',
  t02575: 'xnr, USA, Davis, wed',
  t02608: 'xnr, USA, San Jose, mon',
  t03149: 'xnr, USA, Newton, mon',
  t03264: 'xnr, Korea, Bucheon-si, wed',
  t03544: 'xnr, China, Guiyang, wed',
  t06262: 'xnr, China, Guangzhou, wed',
  t07717: 'xnr, China, Shenyang, tue',
  t07772: 'xnr, China, Dongguan, <19h',
  t07796: 'xnr, China, Hunan, mon',
  t07924: 'xnr, USA, wed-funds',
  t07945: 'xnr, China, Dongguan, wed',
  t07964: 'xnr, USA, Ashburn, wed',
  t08097: 'xnr, Korea, Pyeongtaek-si, mon',
  t08225: 'xnr, Australia, Sydney, wed',
  t08246: 'xnr, USA, wed',
  t08284: 'xnr, China, Liaoning, <19h',
  t08311: 'xnr, China, Shenzhen, <19h',
  t08315: 'xnr, China, Chongqing, wed',
  t08361: 'xnr, Malaysia, Kulai, wed',
  t08388: 'xnr, China, Taizhou, <19h',
  t08424: 'xnr, China, Chengdu, wed',
  t08440: 'xnr, France, Fontenay-sous-Bois, wed',
  t08574: 'xnr, USA, wed',
  t08911: 'xnr, Korea, Wanju, <19h, sat',
  t08980: 'xnr, USA, San Jose, wed',
  t09007: 'xnr, Korea, Hwaseong-si, wed',
  t09055: 'xnr, China, Jieyang, wed',
  t09610: 'xnr, China, Beijing, thu',
  t09719: 'xnr, Korea, Geumcheon-gu',
  t09721: 'xnr, ???, CD-oursoft-1',
  t09733: 'xnr, China, Chongqing, thu',
  t09753: 'xnr, Korea, Pyeongtaek-si, thu-cfa',
  t09762: 'xnr, China, Guangdong, thu',
  t09840: 'xnr, China, Baoding, sat',
  t09912: 'xnr, USA, Concord, sat',
  t09974: 'xnr, Canada, Calgary, sat',
  t010009: 'xnr, USA, East Islip, sat',
  t010028: 'xnr, USA, Berkeley, sat',
  t010227: 'xnr, China, Xiamen, fri',
  t010244: 'xnr, USA, Newton, fri',
  t010248: 'xnr, China, Yibin, fri',
  t010275: 'xnr, Korea, Cheongju-si + USA, fri',
  t010281: 'xnr, China, Shanghai, fri-cfa',
  t010282: 'xnr, USA, San Francisco, fri',
  t010283: 'xnr, Brazil, Sao Paulo, fri',
  t010310: 'xnr, Canada, Surrey, sat',
  t010315: 'xnr, Canada, Surrey, sat',
  t010593: 'xnr, USA, East Islip, <19h',


  // NR
  t01013: 'NR',
  t02654: 'NR',
  t03319: 'NR',
  t03320: 'NR, bcm',
  t03341: 'NR',
  t03358: 'NR',
  t03363: 'NR',
  t03622: 'NR, 黑犇科技',
  t03702: 'NR, LianDongJingLing',
  t05664: 'NR, 艾比特网络科技',
  t07731: 'NR',
  t07756: 'NR',
  t07810: 'NR',
  t07824: 'NR',
  t07843: 'NR',
  t07959: 'NR',
  t08053: 'NR',
  t08091: 'NR',
  t08135: 'NR',
  t08139: 'NR',
  t08170: 'NR',
  t08171: 'NR',
  t08204: 'NR',
  t08207: 'NR',
  t08223: 'NR',
  t08238: 'NR',
  t08290: 'NR',
  t08293: 'NR',
  t08327: 'NR',
  t08385: 'NR',
  t08393: 'NR',
  t08425: 'NR',
  t08429: 'NR, yfeing',
  t08460: 'NR',
  t08474: 'NR, lone',
  t08503: 'NR',
  t08791: 'NR',
  t08893: 'NR',
  t08902: 'NR',
  t08964: 'NR',
  t08986: 'NR',
  t08994: 'NR',
  t09006: 'NR',
  t09035: 'NR',
  t09076: 'NR',
  t09529: 'NR',
  t09561: 'NR',
  t09569: 'NR',
  t09594: 'NR',
  t09629: 'NR',
  t09639: 'NR',
  t09656: 'NR',
  t09704: 'NR',
  t09828: 'NR',
  t09966: 'NR',
  t09969: 'NR',
  t010033: 'NR',
  t010088: 'NR',
  t010222: 'NR',
  t010241: 'NR',
  t010253: 'NR',
  t010292: 'NR',
  t010313: 'NR',
  t010382: 'NR',
  t010398: 'NR',
  t010425: 'NR',
  t010490: 'NR',
  t010527: 'NR',
  t010566: 'NR',
  t010601: 'NR',
  t010616: 'NR',
  
  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
