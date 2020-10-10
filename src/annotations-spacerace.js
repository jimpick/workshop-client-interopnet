// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {
  // Active

  // Active-sealing (active, with in-flight sealing)

  f01234: 'active-sealing, Belgium, De Klinge, Eliovp',
  f01241: 'active-sealing, USA, Portland, 6block',
  f01280: 'active-sealing, China, Wuxi, 了凡超算',
  f02299: 'active-sealing, China, Dongguan, Yolo',
  f02415: 'active-sealing, China, Hong Kong',
  f02501: 'active-sealing, USA, Portland, 6block',
  f02514: 'active-sealing, USA, Portland, 6block',
  f02622: 'active-sealing, USA, Portland, 6block',
  f02623: 'active-sealing, USA, Portland, 6block',
  f02633: 'active-sealing, China, Hong Kong',
  f02645: 'active-sealing, China, Hong Kong',
  f02668: 'active-sealing, China, Chengdu',
  f03273: 'active-sealing, USA, Portland, 6block',
  f03274: 'active-sealing, USA, Portland, 6block',
  f03275: 'active-sealing, USA, Portland, 6block',
  f03339: 'active-sealing, China, Luzhou, benxun',
  f05317: 'active-sealing, USA, Portland',
  f07819: 'active-sealing, China, Wuxi, YC--wuxi',
  f08019: 'active-sealing, China, Yantai, 三合',
  f08025: 'active-sealing, China, Hong Kong',
  f08383: 'active-sealing, USA, Portland, 6block',
  f08474: 'active-sealing, China, Hong Kong',
  f09693: 'active-sealing, USA, Portland + Singapore',
  f010048: 'active-sealing, China, Shanghai',
  f010088: 'active-sealing, DNS:purumine.com',
  f010253: 'active-sealing, China, Beijing + USA, Portland',
  f010479: 'active-sealing, France, Fontenay-sous-Bois',
  f018780: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018781: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018783: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f019100: 'active-sealing, Romania, Cluj-Napoca',
  f021710: 'active-sealing, China, Shijiazhuang',
  f023200: 'active-sealing, China, Shanghai',
  f024015: 'active-sealing, USA, Portland',

  // Sealing

  f02405: 'sealing, China, Shenzhen',
  f03491: 'sealing, China, Hong Kong',
  f07919: 'sealing, China, Beijing, Shanghai, Hunan',
  f08264: 'sealing, China, Xianning',
  f08482: 'sealing, USA, Athol, @why',
  f010257: 'sealing, China, Hong Kong, DNS:feiyuipfs.com',
  f022125: 'sealing, China, Shenzhen',
  f029552: 'sealing, China, Changsha',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',

  // Stuck

  f01247: 'stuck, Canada, Montreal, BigChungus™', // CheckForAcceptance: about 4 hours
  f01272: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f01799: 'stuck, China, Jinan, TokenHome', // CheckForAcceptance: about 4 hours
  f01800: 'stuck, China, Shenzhen + Chengdu', // CheckForAcceptance: about 3 hours
  f02301: 'stuck, USA', // CheckForAcceptance: about 3 hours
  f02388: 'stuck, Netherlands, Amersfoort, Kroketje', // CheckForAcceptance: about 3 hours
  f02399: 'stuck, China, Zhejiang', // CheckForAcceptance: about 3 hours
  f02419: 'stuck, China, Shanghai, yuantai', // CheckForAcceptance: about 3 hours
  f02625: 'stuck, China, Shanghai, IPFS星际工厂', // CheckForAcceptance: about 3 hours
  f02654: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f03143: 'stuck, China, Shijiazhuang + Hong Kong', // CheckForAcceptance: about 4 hours
  f03224: 'stuck, Ukraine, Irpin, oboltusov', // CheckForAcceptance: about 4 hours
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 3 hours
  f03363: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f03364: 'stuck, China, Guangzhou', // CheckForAcceptance: about 3 hours
  f03482: 'stuck, China, Wuxi', // CheckForAcceptance: about 3 hours
  f03544: 'stuck, China, Guiyang', // CheckForAcceptance: about 3 hours
  f04443: 'stuck, China, Shanghai, 罗良科技', // CheckForAcceptance: about 3 hours
  f07709: 'stuck, Korea, Dongjak-gu', // CheckForAcceptance: about 3 hours
  f08073: 'stuck, China, Qiqihar, QY7TT', // CheckForAcceptance: about 3 hours
  f08157: 'stuck, China, Beijing + Germany, Frankfurt, 超星际', // CheckForAcceptance: about 3 hours
  f08204: 'stuck, USA, St. Louis', // CheckForAcceptance: about 3 hours
  f08371: 'stuck, China, Chengdu', // Transferring: about 3 hours
  f09569: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f09731: 'stuck, China, Guiyang', // CheckForAcceptance: about 3 hours
  f09833: 'stuck, USA, San Jose', // CheckForAcceptance: 20 minutes
  f010063: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f010084: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f010247: 'stuck, China, Yantai', // CheckForAcceptance: about 3 hours
  f010399: 'stuck, China, Guangzhou', // CheckForAcceptance: about 3 hours
  f010400: 'stuck, China, Shenyang', // CheckForAcceptance: about 3 hours
  f010438: 'stuck, USA', // CheckForAcceptance: about 3 hours
  f010493: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f010498: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f010501: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f010505: 'stuck, China, Wuhan', // CheckForAcceptance: about 3 hours
  f010507: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 3 hours
  f010528: 'stuck, China, Chongqing', // CheckForAcceptance: about 3 hours
  f014394: 'stuck, China, Suzhou', // CheckForAcceptance: about 3 hours
  f014768: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f015233: 'stuck, China, Nanjing', // CheckForAcceptance: about 3 hours
  f017665: 'stuck, China, Shenyang', // CheckForAcceptance: about 3 hours
  f018772: 'stuck, Australia', // CheckForAcceptance: 20 minutes
  f018784: 'stuck, Singapore + Germany, Frankfurt + USA', // Transferring: about 3 hours
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: 20 minutes
  f019616: 'stuck, USA, Marlborough', // CheckForAcceptance: 20 minutes
  f019638: 'stuck, Germany, Frankfurt', // CheckForAcceptance: about 3 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: 20 minutes
  f021265: 'stuck, China, Wuhan', // CheckForAcceptance: about 3 hours
  f021339: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f021540: 'stuck, Germany, Frankfurt, @hsanjuan', // CheckForAcceptance: about 3 hours
  f021583: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f021616: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f022089: 'stuck, China, Beijing', // CheckForAcceptance: 20 minutes
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: 20 minutes
  f022227: 'stuck, China, Jiangsu', // CheckForAcceptance: about 3 hours
  f022753: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f022922: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f023179: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f023571: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f023573: 'stuck, Japan, Kumamoto', // CheckForAcceptance: about 3 hours
  f023647: 'stuck, Korea, Gangseo-gu', // CheckForAcceptance: about 3 hours
  f023678: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f024066: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f024184: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: about 3 hours
  f024468: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f024521: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f024550: 'stuck, China, Wenzhou', // CheckForAcceptance: about 3 hours
  f024800: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: 20 minutes
  f024903: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f024969: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f025017: 'stuck, China, Hefei', // CheckForAcceptance: about 3 hours
  f025019: 'stuck, China, Taiwan, Hsinchu', // CheckForAcceptance: about 3 hours
  f029421: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f029490: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f029556: 'stuck, China, Wuxi', // CheckForAcceptance: 20 minutes
  f029587: 'stuck, Hungary', // CheckForAcceptance: about 3 hours
  f029619: 'stuck, China, Hefei', // CheckForAcceptance: about 3 hours
  f029628: 'stuck, Australia, Brisbane', // CheckForAcceptance: about 3 hours
  f030144: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f030158: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f030184: 'stuck, USA, Aliquippa', // CheckForAcceptance: about 3 hours
  f030188: 'stuck, China, Yangjiang', // CheckForAcceptance: about 3 hours
  f030226: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f030230: 'stuck, China, Sichuan', // CheckForAcceptance: about 3 hours
  f030278: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours

  // Busy

  // New

  // Min Size

  f02500: 'min-size, Korea, Seongnam-si', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f02606: 'min-size, China, Shanghai', // 131072 < 134217728
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 134217728
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 134217728
  f08403: 'min-size, UK, Lower Slaughter', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 524288000
  f022352: 'min-size, Norway, Borgen', // 131072 < 268435456
  f023853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023855: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024127: 'min-size, China, Fuzhou', // 131072 < 134217728
  f025025: 'min-size, China, Qingdao', // 131072 < 134217728
  f029404: 'min-size, USA, Portland + New Castle', // 131072 < 134217728

  // Min Ask

  f07998: 'min-ask, China, Hangzhou', // 20000000 < 61035156
  f010617: 'min-ask, Canada, Surrey, @feiya200', // 20000000 < 12207031250000000000000000
  f022163: 'min-ask, NR', // 20000000 < 12207031250000000000000000

  // Error

  f01000: 'error, NR - bootstrap', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00870420106398585 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f01012: 'error, China, Hong Kong + Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033632251056669462 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01013: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008659887054331401 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f01100: 'error, Serbia, Belgrade, filmine.io', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034265543636059995 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01101: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008448050731813786 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f01156: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008160593218646472 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f01229: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034258441073388003 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01231: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039773827331651961 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01238: 'error, Vietnam, Hanoi, FILECOIN-VIETNAM', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034258432694352633 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01240: 'error, Netherlands, HidNand', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038030537260362869 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01248: 'error, Germany, Frankfurt + China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037218160702530415 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01274: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008055526649548644 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f01276: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f01277: 'error, Sweden, Stockholm, tvsthlm', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037210440783613545 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01278: 'error, USA, Grand Rapids, MiMiner', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038046316931626653 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01279: 'error, China, Sichuan', // stream reset
  f01287: 'error, China, Jiaxing, MaiTian', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f01288: 'error, China, Yibin, BlackStone', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034258443882474681 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01782: 'error, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036270760974003441 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f01801: 'error, Switzerland, Baar, Gogoșel, DNS:akasha.network', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033469414939299492 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02303: 'error, China, Hong Kong + Jiangsu + Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036270761209098678 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02304: 'error, USA, Mountain View', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00805385202648421 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02305: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02307: 'error, China, Taiyuan, filecoin.monster', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032911258470561558 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02381: 'error, China, Dongguan, 西野七濑迷叔', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038649880044067581 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02382: 'error, China, Zhongshan-cfa', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008053851068217763 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02383: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032918095394447375 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02398: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008055523303962579 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02400: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032904445460244752 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02401: 'error, Canada, Chambly, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02414: "error, China, Xi'an, zhejiangyunchu", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032563514065447773 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02417: 'error, China, Liaoning', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.0345290657942511 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02418: 'error, China, Fujian + Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032556745826660229 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02420: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03451474331361973 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02422: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034507589040546743 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02423: 'error, Ukraine, Kyiv, igowreck', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02424: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007455361106152047 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02436: 'error, Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007458453618416919 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02505: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031719075983998362 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02506: 'error, USA, Clarksville', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007460006886446134 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02514: 'error, USA, Portland, 6block', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.55578858815390983 FIL, balance: 0.504310119963851434 FIL): validation failure
  f02518: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007235952168027357 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02519: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031407900401876607 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02529: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040720456972405512 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02532: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031407905845235556 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02534: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031401392092715107 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02574: 'error, Japan, Minamata', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031407903458114688 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02575: 'error, USA, Davis', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007234453285985686 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02606: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.555788595001812118 FIL, balance: 0.504310119963851434 FIL): validation failure
  f02607: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035332267250004417 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02609: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032288577871582098 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02614: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032281877974771844 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02619: 'error, China, Beijing, Blockcasting', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f02621: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032275184183722169 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02624: 'error, China, Shanghai, filecoin.cn', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035332251191191305 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02626: 'error, China, Guangzhou + Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031629126548685189 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02657: 'error, China, Ordos-xfr', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033935739061144122 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02658: 'error, China, Ningbo, bluematrix', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033928703498666542 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02664: 'error, China, Hangzhou, ciger', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033928706861639356 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02723: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035585889571037763 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02725: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033935736969399321 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02726: 'error, USA, Brooklyn', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033928707024363847 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02731: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034683667234063184 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02767: 'error, Germany, Frankfurt', // stream reset
  f02768: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00723595157124714 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f02770: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035585882626686147 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02772: 'error, China, Chengdu', // stream reset
  f02773: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032298472523748456 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02774: 'error, Australia, Sydney', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007234448283714296 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03021: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297304799765984 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03120: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297301369786757 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03136: "error, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297308103155468 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03140: 'error, China, QingDao', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297296209747709 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03176: 'error, USA, San Mateo, Five Star-Helmsman&Heiben', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f03194: 'error, China, Shenzhen, 成都云存&Npool', // stream reset
  f03220: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.0282855604596018 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03222: 'error, China, Yuncheong, 星云矿池', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.761231271774621089 FIL, balance: 0.742223252290368174 FIL): validation failure
  f03223: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.761231264503245491 FIL, balance: 0.742223252290368174 FIL): validation failure
  f03225: 'error, China, Guyuan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297312672442382 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03245: 'error, USA, Los Angeles', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297296215775792 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03264: 'error, Korea, Bucheon-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007235944018059141 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03266: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297303443447309 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03319: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007509161306262911 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03320: 'error, bcm', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030406895935792074 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03327: 'error, Kenya, Nairobi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030413201278063725 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03340: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.761231267041594684 FIL, balance: 0.742223252290368174 FIL): validation failure
  f03346: 'error, China, Huzhou, wckj', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007510719581597115 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03347: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.761231274367234279 FIL, balance: 0.742223252290368174 FIL): validation failure
  f03350: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030413196329007582 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03351: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032460108789715282 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03360: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032473578448842336 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03366: 'error, China, Wuhan + Wuxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032473581758259903 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03428: 'error, China, Beijing + Jiaxing + Germany, Frankfurt', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007510717990183203 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03484: 'error, Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032473581746203737 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03490: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032466854238347305 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03517: 'error, China, Wuhan + Wuxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033213475549750689 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03548: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033213473464033971 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03619: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007510720027675257 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03620: 'error, Germany, Frankfurt', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033206584683243473 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03622: 'error, 黑犇科技', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007507598692853947 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f03638: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033213460973845995 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03646: 'error, China, Beijing, JingTang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032320045890080345 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03764: 'error, China, Beijing, foobar', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032326749869276061 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03765: 'error, Colombia, Medellin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007474634273091706 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f04921: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032326746770841399 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f05315: 'error, USA, Portland, 6block', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036797850161755461 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f05316: 'error, USA, Portland, 6block', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038269968335297793 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f06262: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007476188148181674 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f06775: 'error, China, Shenzhen, IPSB&CAAP', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032320045763516852 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07451: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032146856053096407 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07710: 'error, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032160184025817609 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07731: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007476184266096222 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07752: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030537385713469314 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07756: 'error, DNS:purumine.com', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028800189222506534 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07772: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007474633586032744 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07774: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028842078113131177 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07775: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028848061959379659 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07824: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f07827: 'error, China, Wuhan, 天际合', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007960458518122185 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07830: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028842078643492481 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07843: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007960462460488467 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07848: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028848053092069566 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07850: 'error, USA, Portland, 6block', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038262036594508487 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07857: 'error, China, Zhengzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028848054683483478 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07924: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007958813540869785 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07944: 'error, China, Hangzhou, SupremeTreasure', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032434997580368573 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07945: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007812381817942677 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07947: 'error, China, Zhengzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032448457858862082 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07964: 'error, USA, Ashburn', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007710973660414198 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f07969: 'error, China, Hangzhou, FME', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031332475152646794 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07982: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031332480583949577 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f07987: 'error, China, Beijing', // stream reset
  f07990: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038425826322214404 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08006: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03094848210777158 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08022: 'error, China, Yibin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007710971593210479 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08032: 'error, China, Weifang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030942057037474005 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08042: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03095489539572939 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08047: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.0317578613107296 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08061: 'error, China, Foshan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007350509845303191 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08063: 'error, China, Huizhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038610496956274254 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08088: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031764448297768671 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08095: 'error, Canada, Surrey', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007348994012558477 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08101: 'error, China, Wuxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031764440328642945 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08135: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030219393954860388 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08136: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007194904021232019 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08139: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030213131537194669 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08149: 'error, China, Jiangmen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030219398548259634 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08161: 'error, China, Weifang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03021939789722667 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08178: 'error, China, Jiaxing, CAAP-金华', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033992697386608929 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08197: 'error, China, Foshan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036439933523309334 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08199: 'error, USA, Sudbury', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038602482120955055 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08205: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033992699785785963 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08223: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007194900241623978 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08229: 'error, China, Nanchang', // stream reset
  f08235:
    'error, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033985644576891733 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08238: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007194905968302828 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08242: 'error, China, Weifang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036424823139350963 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08257: 'error, China, Ningbo + USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033992694197753022 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08280: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007194527591561001 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08284: 'error, China, Liaoning', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007152707872524045 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08293: 'error, China, Xinxiang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034009400957450526 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08295: 'error, China, Suzhou, IPFS Cloud', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034002340127748832 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08311: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007153888480337628 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08327: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007153896485631852 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08330: 'error, China, Chengdu, oursoft', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03400939775051037 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08344: 'error, UK, Hartlepool', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034009383596571486 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08358: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036755615911264794 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08384:
    'error, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036747999751741485 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08385: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00711833884945074 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08388: 'error, China, Taizhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007118337963322539 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08399: 'error, USA, Sammamish', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03643237911805873 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08405: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036755618207964417 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08406: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006870459549400407 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08424: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006869040627489672 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08432: 'error, China, Taizhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036432377641484645 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08440: 'error, France, Fontenay-sous-Bois', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.012954903274828926 FIL, balance: 0.006637083864391413 FIL): validation failure
  f08446: 'error, Norway, Borgen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036742195216340748 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08448: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036742191026823063 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08460: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.012954908856833784 FIL, balance: 0.006637083864391413 FIL): validation failure
  f08497: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036726954559861649 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08503: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.012954905487135387 FIL, balance: 0.006637083864391413 FIL): validation failure
  f08532: 'error, USA', // stream reset
  f08684: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036742186216412829 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08788: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036742197669770529 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08791: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006339893952225219 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f08793: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035447492047241569 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08854: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041940244956561714 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08893: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006335960262129862 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f08895: 'error, Japan, Ebisunishi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035454843097489539 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08904: 'error, China, Deyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035454842187249006 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08908: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035454848812112223 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08911: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006338586426754923 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f08949: 'error, Norway, Oslo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.0337844767202078 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08958: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033205361255729883 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08964: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006337270876724904 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f08986: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033198487548732311 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08988: 'error, Korea, Hwaseong-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006321274887574278 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f08991: 'error, China, Ili', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033198495371561545 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f08994: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006319966248097992 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09005: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033205369900000905 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09007: 'error, Korea, Hwaseong-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006321271282780644 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09035: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006319959528179197 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09036: 'error, China, Chengdu, CD-oursoft', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033173433520148466 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09053: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006264153341314198 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09055: 'error, China, Jieyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041931554282591206 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09056: 'error, China, Shenzhen, SZSQ1', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033173442863677116 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09076: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006265453374861668 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09077: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031896257959963796 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09084: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043261671459575304 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09088: 'error, China, Changsha', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031902879233272725 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09091: 'error, Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030613118129603384 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09523: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030625822923455358 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09538: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006266749731503508 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09555: 'error, Australia, Sydney', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030052695813064335 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09560: 'error, Ukraine, Odessa, Wondertan (combined)', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030052694685812814 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09565: 'error, Ukraine, Odessa, Wondertan (combined)', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030052687030147404 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09573: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.030046463195162463 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09578: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006264161102265102 FIL, balance: 0.006125576770364556 FIL): not enough funds to execute transaction
  f09592: 'error, Japan, Minamata', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.027275175414732906 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09597: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.027269521408993137 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09610: 'error, China, Beijing', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f09629: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.012101410358351591 FIL, balance: 0.006125576770364556 FIL): validation failure
  f09631: 'error, China, Changzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.027275175734221305 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09639: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999666495 FIL, balance: 0.000025259918397467 FIL): not enough funds to execute transaction
  f09653: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.025929251692647849 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09656: 'error, Ukraine, Odessa', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.025923880469803626 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09662: 'error, Canada, Surrey', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006056117694942316 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09671: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.025568899123945671 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09672: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.025568988966494703 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f09696: 'error, USA, Portland + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.04158730770154416 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09707: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.006057376475366583 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09721: 'error, ???, CD-oursoft-1', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023169480568772193 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09723: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.02316948086414826 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09729: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023169479230537767 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09733: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005957893333754343 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09734: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023169477036315555 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09736: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00582511013829193 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09753: 'error, Korea, Pyeongtaek-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005823903910991573 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09761: 'error, China, Beijing', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f09763: 'error, China, Mianyang,  <13h', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044406444595523899 FIL, balance: 0.022451386229255808 FIL): validation failure
  f09770: "error, China, Xi'an", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f09771: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044401841975331759 FIL, balance: 0.022451386229255808 FIL): validation failure
  f09792: 'error, USA, Council Bluffs', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044406443275373722 FIL, balance: 0.022451386229255808 FIL): validation failure
  f09797: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044397242729041099 FIL, balance: 0.022451386229255808 FIL): validation failure
  f09801: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022931125784344505 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09805: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005552865460434897 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09808: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022260993888436794 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09809: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022261001290922718 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09810: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022260993140954502 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09811: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022256387206979273 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09825: 'error, China, Jinhua', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.042992562607517646 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09830: 'error, Korea, Geumcheon-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023491428847602003 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09840: 'error, China, Baoding', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005551709193448413 FIL, balance: 0.005550360452840215 FIL): not enough funds to execute transaction
  f09848: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03804632096441418 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f09859: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023491432482536052 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09969: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022866320304931633 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09974: 'error, Canada, Calgary', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.010541902038085026 FIL, balance: 0.005550360452840215 FIL): validation failure
  f09983: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022871060988974406 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f09997: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.010540814710602379 FIL, balance: 0.005550360452840215 FIL): validation failure
  f010009: 'error, USA, East Islip', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.010540809798733484 FIL, balance: 0.005550360452840215 FIL): validation failure
  f010010: 'error, China, Changzhou + Hong Kong', // stream reset
  f010015: 'error, China, Taizhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022871066595091596 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010032: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023220813390732072 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010033: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.010541909253700377 FIL, balance: 0.005550360452840215 FIL): validation failure
  f010035: 'error, Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038610501043314528 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010040: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005278343119035489 FIL, balance: 0.005122267800031428 FIL): not enough funds to execute transaction
  f010041: 'error, USA, Jackson', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f010170: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022355072642656629 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010173: 'error, Korea, Pyeongtaek-si', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.009633965404988906 FIL, balance: 0.005122267800031428 FIL): validation failure
  f010200: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.00963296884714304 FIL, balance: 0.005122267800031428 FIL): validation failure
  f010202: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038602482398189373 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010213: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.009632970179349383 FIL, balance: 0.005122267800031428 FIL): validation failure
  f010224: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022355086199815296 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010227: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.009632973832367681 FIL, balance: 0.005122267800031428 FIL): validation failure
  f010238: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022663295886735972 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010241: 'error, China, Beijing + USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041587310402125344 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010244: 'error, USA, Newton', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.009631968063617241 FIL, balance: 0.005122267800031428 FIL): validation failure
  f010248: 'error, China, Yibin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004768921964808666 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010268: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022658604083254045 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010270: 'error, China, Shijiazhuang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.02265390482894903 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010276: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.022663298285913006 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010283: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004802925282207476 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010287: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.02104593176761654 FIL, balance: 0.020274286253369379 FIL): not enough funds to execute transaction
  f010289: 'error, China, Fuzhou', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f010291: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.038976432593617728 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010292: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004917247132286206 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010293: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004918274412305796 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010298: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.038972388398169504 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010299: 'error, China, Yibin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036650476535285657 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010313: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00478045138485996 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010315: 'error, Canada, Surrey', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004779462116199015 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010346: 'error, China, Karamay', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004779465328501004 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010372: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.037465924169608335 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010374: 'error, Norway, Borgen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.037462196036012204 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010402: 'error, China, Shenyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004780455502040649 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010405: 'error, China, Foshan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036642875815547037 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010411: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.037465925501814678 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010424: 'error, Australia, Sydney', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.037462194487116123 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010433: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004780452813515631 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010446: 'error, Netherlands', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010449: 'error, China, Jiangmen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.037465913270834271 FIL, balance: 0.020274286253369379 FIL): validation failure
  f010468: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005370705689625405 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010490: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005369594771523002 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010496: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.033825597193329491 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010512: 'error, China, Zhengzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.372770716970385006 FIL, balance: 1.346274281252783987 FIL): validation failure
  f010516: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.033822083386693176 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010520: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005370708468571668 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010523: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.718044574809190843 FIL, balance: 0.684830298012843428 FIL): validation failure
  f010533: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.033334053814659737 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010541: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.033337458551376447 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010549: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005370708209364099 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010558: 'error, China, Shenzhen + Hong Kong', // stream reset
  f010579: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.033334054176344717 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010586: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.03333065758147939 FIL, balance: 0.018668795655068035 FIL): validation failure
  f010598: 'error, Canada, Waterloo', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f010600: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031823592456821792 FIL, balance: 0.017415512079187069 FIL): validation failure
  f010602: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005363499218876316 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f010603: 'error, China, Baoding', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.042308743378796053 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f010606: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031816994082846377 FIL, balance: 0.017415512079187069 FIL): validation failure
  f010608: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.0318236031626972 FIL, balance: 0.017415512079187069 FIL): validation failure
  f010609: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031618943865046202 FIL, balance: 0.017415512079187069 FIL): validation failure
  f010612: 'error, USA, Mountain View', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.042308741823873139 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014207: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005362394387574409 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014230: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031625459905700876 FIL, balance: 0.017415512079187069 FIL): validation failure
  f014241: 'error, Norway, Borgen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031622201270650323 FIL, balance: 0.017415512079187069 FIL): validation failure
  f014246: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031618941388531589 FIL, balance: 0.017415512079187069 FIL): validation failure
  f014248: 'error, Turkey', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.031622204808401294 FIL, balance: 0.017415512079187069 FIL): validation failure
  f014261: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.042299973964917823 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014271: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005361282183931993 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014281: 'error, Netherlands, Permerend', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.03074795606852496 FIL, balance: 0.015956172597216387 FIL): validation failure
  f014302: 'error, China, Ningbo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036642878196639822 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014307: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.030744775261522396 FIL, balance: 0.015956172597216387 FIL): validation failure
  f014324: 'error, Canada, Vancouver', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.03074796239801211 FIL, balance: 0.015956172597216387 FIL): validation failure
  f014329: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.718044571179532377 FIL, balance: 0.684830298012843428 FIL): validation failure
  f014335: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005363500002527106 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014348: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.030747955664643399 FIL, balance: 0.015956172597216387 FIL): validation failure
  f014366: 'error, USA, Mountain View', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005372921113246028 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014377: 'error, China, Liaoning', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015249235583104483 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014380: 'error, China, Hangzhou + Wuhan + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015246078635977983 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014386: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015246073078085457 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014388: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005371803502612957 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014407: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005374037857177647 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014419: 'error, USA, San Diego', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041909426141100894 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014420: 'error, Russia, Samara', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005372926465073732 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014425: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005467273725425658 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014431: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015408993360488023 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014432: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015408991932128602 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014436: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.015412186604336004 FIL, balance: 0.014743434899500308 FIL): not enough funds to execute transaction
  f014440: 'error, Hong Kong', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacecjn6ynbmgn2mdbbx45ccdjpxy4ldeyr5zn62uhf4pdhwus66ekpe n 803, TS: bafy2bzaceddlwreuxuwupryudf5ofpdun2xlhqoyuua73yz3mfm6dl6gqr7go n803)
  f014478: 'error, Finland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00546954259059963 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014483: 'error, USA, Clarksville', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.028464034221284724 FIL, balance: 0.014743434899500308 FIL): validation failure
  f014495: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005408607677425632 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014514: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005153730936432318 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014533: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005153739888135573 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014547: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.028464039429548436 FIL, balance: 0.014743434899500308 FIL): validation failure
  f014569: 'error, NR', // stream reset
  f014572: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.028458127581395043 FIL, balance: 0.014743434899500308 FIL): validation failure
  f014606: 'error, Australia, Sydney', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.028464034944654684 FIL, balance: 0.014743434899500308 FIL): validation failure
  f014609: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.014511450721661122 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f014632: 'error, Canada', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.014505437364390586 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f014640: 'error, Hungary', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.014508445435893027 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f014660: 'error, Korea, Busan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005153740569308952 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014686: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035178253225642557 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014699: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032616371112306534 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014701: 'error, China, Changzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032616371805536079 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014706: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032623137101924892 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f014744: 'error, China, Taiyuan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.014268787994976552 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f014745: 'error, China, Shenyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005359831926077772 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014764: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005359839593799348 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f014778: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.014268788001004635 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f014799: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005358721665678374 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015061: 'error, Australia, Sydney', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005207016031436826 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015231: 'error, China, Wuxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.01360563126605379 FIL, balance: 0.013588810471522077 FIL): not enough funds to execute transaction
  f015647: 'error, China, Shenzhen', // EOF
  f015655: 'error, Korea, Geumcheon-gu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.025692042539557575 FIL, balance: 0.013588810471522077 FIL): validation failure
  f015685: 'error, China, Shanghai', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f015709: 'error, China, Hefei', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041886345676328113 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015714: 'error, China, Ordos', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.024585993260688353 FIL, balance: 0.012608713744354636 FIL): validation failure
  f015720: 'error, China, Ningbo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.024583445885705605 FIL, balance: 0.012608713744354636 FIL): validation failure
  f015732: 'error, USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.024586005949803068 FIL, balance: 0.012608713744354636 FIL): validation failure
  f015734: 'error, China, Qingdao', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012034020197460924 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015751: 'error, Canada, Huron East', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039183847660319913 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015753: 'error, China, Guyuan', // EOF
  f015756: 'error, Finland, Helsinki', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012034017207531756 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015760: 'error, Kenya, Nairobi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012034017123138594 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015763: 'error, South Africa, Cape Town', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040554194504280201 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015767: 'error, Russia, Khabarovsk + Japan, Khabarovsk + USA', // stream reset
  f015771: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040545783832568853 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015795: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.011931060443371596 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015797: 'error, Germany, Rostock', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.01192859752319398 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015798: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.011928593081418059 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015800: 'error, Germany, Sankt Andreasberg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.011931071794251885 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015802: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.011931069503580345 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015803: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012867945186938344 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015804: 'error, Germany, Ismaning', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012284739026008407 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015805: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.012284733468115881 FIL, balance: 0.011466208964710327 FIL): not enough funds to execute transaction
  f015807: 'error, Germany', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f015808: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.021858978103575952 FIL, balance: 0.011466208964710327 FIL): validation failure
  f015809: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.02186115380426255 FIL, balance: 0.011466208964710327 FIL): validation failure
  f015810: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.021858978543534761 FIL, balance: 0.011466208964710327 FIL): validation failure
  f015818: 'error, Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.021858966218661276 FIL, balance: 0.011466208964710327 FIL): validation failure
  f015819: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.021856795502236819 FIL, balance: 0.011466208964710327 FIL): validation failure
  f015827: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040554197662995693 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015839: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.020317394983529979 FIL, balance: 0.010501809638811409 FIL): validation failure
  f015846: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.020317408389986571 FIL, balance: 0.010501809638811409 FIL): validation failure
  f015855: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.010370981194861452 FIL, balance: 0.009684720216962191 FIL): not enough funds to execute transaction
  f015860: 'error, Ukraine, Odessa', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009874054977881922 FIL, balance: 0.009684720216962191 FIL): not enough funds to execute transaction
  f015872: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009899663118857244 FIL, balance: 0.009684720216962191 FIL): not enough funds to execute transaction
  f015875: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005207012324165781 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015877: 'error, China, Jiaxing + USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.718044573139065602 FIL, balance: 0.684830298012843428 FIL): validation failure
  f015884: 'error, China, Fuzhou', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f015887: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.019364348153497941 FIL, balance: 0.009684720216962191 FIL): validation failure
  f015888: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.019362346247934286 FIL, balance: 0.009684720216962191 FIL): validation failure
  f015891: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005205936513152147 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015894: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.019362337719965591 FIL, balance: 0.009684720216962191 FIL): validation failure
  f015898: 'error, Lithuania', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009338337958149945 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015900: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009336394175743102 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015902: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009338332104881352 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015903: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009336395784907513 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015905: 'error, Lithuania', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009336391409426755 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015910: 'error, Turkey', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009893611534108965 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015918: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009891560772496944 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015920: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005205938526114369 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015926: 'error, China', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009891563997521349 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015933: 'error, Finland, Helskinki', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009804578120854551 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f015935: 'error, China, Sichuan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005315576380992126 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015938: 'error, Canada, Waterloo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043454743386793056 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f015940: 'error, Netherlands, Amsterdam', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005315573541765033 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f015941: 'error, Ukraine, Kyiv', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.718044572982302944 FIL, balance: 0.684830298012843428 FIL): validation failure
  f016056: 'error, USA, Arlington', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00946787920128882 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f016172: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043454732192642925 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016202: 'error, Korea, Songpa-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009465908345911572 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f016228: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005101056468151461 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016234: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043454740517425548 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016238: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009467876771971371 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f016262: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041609724534344366 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016271: 'error, Korea, Seodaemun-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005099990550664495 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016279: 'error, Finland, Helsinki', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.009267542439422373 FIL, balance: 0.008798400256613878 FIL): not enough funds to execute transaction
  f016299: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005101048535194233 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016302: 'error, China, Fuzhou', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f016303: 'error, USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005058010084907526 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016305: 'error, USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041626983493086101 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016306: 'error, USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00505905045293934 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016309: 'error, USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016905214081318448 FIL, balance: 0.008798400256613878 FIL): validation failure
  f016364: 'error, China, Hefei', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016414203848698329 FIL, balance: 0.008798400256613878 FIL): validation failure
  f016419: 'error, USA, Mountain View', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016414201202918642 FIL, balance: 0.008798400256613878 FIL): validation failure
  f016436: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005059052008184754 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016462: 'error, USA, Clarksville', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00505905376838499 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016509: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016415854381743527 FIL, balance: 0.008798400256613878 FIL): validation failure
  f016511: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041609720942351898 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016525: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.01641420720564431 FIL, balance: 0.008798400256613878 FIL): validation failure
  f016603: 'error, China, Dongguan', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f016628: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005050109467339995 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016659: 'error, USA, Alpharetta', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016066476023165766 FIL, balance: 0.00803572673662916 FIL): validation failure
  f016706: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005051155689645228 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f016866: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039175724540635544 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f016917: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.016066472406315966 FIL, balance: 0.00803572673662916 FIL): validation failure
  f017067: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.01606647787981533 FIL, balance: 0.00803572673662916 FIL): validation failure
  f017082: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008342721279149026 FIL, balance: 0.00803572673662916 FIL): not enough funds to execute transaction
  f017117: 'error, Russia, Samara', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004783397724959787 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017181: 'error, China, Nanchong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004735412188984314 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017186: 'error, China, Jiaxing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004735419332262669 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017193: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008337524166540484 FIL, balance: 0.00803572673662916 FIL): not enough funds to execute transaction
  f017200: 'error, Lithuania', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008340981245441019 FIL, balance: 0.00803572673662916 FIL): not enough funds to execute transaction
  f017236: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004734432066917213 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017242: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008339256867740813 FIL, balance: 0.00803572673662916 FIL): not enough funds to execute transaction
  f017244: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008214653786049551 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017266: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008218059072531381 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017285: 'error, China, Maoming', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008218066794505704 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017294: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041618356138742616 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f017323: 'error, Poland, Warsaw', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041609728608483474 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f017334: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004735423154067291 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017488: 'error, USA, Council Bluffs', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008216361865800082 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017618: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004734429758640174 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017672: 'error, China, Cangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008650187760278907 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017722: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004735416746215062 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017734: 'error, Australia, Sydney', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f017738: 'error, China', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008318848529870136 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f017747: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004734436689498124 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f017793: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040397386577981418 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f017794: 'error, USA, Columbus', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037973341380794463 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f017795: 'error, USA, Columbus', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037973336926041126 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f017796: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008539733290595679 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018203: 'error, Finland, Helsinki', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008537959237446941 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018311: "error, China, Xi'an, <23h", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757168101143033 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018393: 'error, Colombia, Medellin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037530002562467904 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018397: 'error, USA, Howell', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757176407841407 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018440: 'error, Russia, St. Petersburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00815078521532699 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018445: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757167992637539 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018446: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004756184932230101 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018456: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037530002809619307 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018464: 'error, Sweden, Stockholm', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008150783540214916 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018476: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007965189586654304 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018490: 'error, Korea, Hwaseong-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757176462094154 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018498: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00796683421052838 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018501: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041123457215614746 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018509: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00801534044628531 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018513: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037529999916139467 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018518: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757170560600897 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018525: 'error, USA, Queens', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008013673915270056 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018530: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037530003165276204 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018531: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037522223889368702 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018538: 'error, China, Huzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757171368364019 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018542: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004756184486244459 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018562: 'error, New Zealand, Masterton', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008013673752545565 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018754: 'error, China, Dali', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004756183347173022 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018785: 'error, Singapore + Germany, Frankfurt + USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038754878970657925 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018802: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037530000892688913 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018803: 'error, Korea, Seodaemun-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008013675976446942 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018809: 'error, USA, New York', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007522127565916374 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018836: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004969712478566772 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018844: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038189431169206569 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018851: 'error, China, Deyang + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007520565791946316 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f018864: 'error, Korea, Busan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004969716836870781 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018869: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004968686712436675 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018884: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038189433206698623 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018899: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038181516960530217 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f018911: 'error, USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007681958087564934 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019002: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007678778546335582 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019007: 'error, China, Shenzhen + Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00768196322349165 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019015: 'error, China, Hangzhou + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007680374163638268 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019017: 'error, China, Wenzhou-cfa', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03817360012871026 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019031: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004969712255527701 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019041: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465253346253223 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019048: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038189437317851229 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019053: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038181510427443245 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019062: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03818151069865073 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019069: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004968684247461978 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019073: 'error, Germany, Frankfurt', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041199809740740117 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019074: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465250976725354 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019087: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041182726953487822 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019090: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041182728773213888 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019091: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00794622606345711 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019094: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00776959849716243 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019104: 'error, Canada, Chambly', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.71346525002409074 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019109: 'error, USA, Howell', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041182727489764709 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019118: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019123: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004968688888123388 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019133: 'error, UK, Mansfield', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039183837388466481 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019150: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007661345322982086 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019155: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007659757995190178 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019173: 'error, China, Nanchong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004969714883771889 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019182: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007661345949902718 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019185: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007659755602537477 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019218: 'error, China, Dali', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041199818867257779 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019233: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007618043083748855 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019239: 'error, China, Jiaxing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00496971504653013 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019243: 'error, USA, Jackson', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f019248: 'error, USA, Council Bluffs', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007618052467527836 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019280: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007619626545924915 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019317: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007619630705302185 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019326: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007619623851371814 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019327: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00812642678786023 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019352: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007873703432641125 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019354: 'error, Germany, Frankfurt', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465249035280128 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019362: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465246478842936 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019376: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041199812694500787 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019378: 'error, China, Changzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004969714250823174 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019399: 'error, Korea, Busan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceaszdvqrjbnajurbnhe4pmfjn4fef3eg5cpfy2tugdgnbsoda65ss n 2933, TS: bafy2bzacebtnrh63plwukzzza43vrvmusfrfadu6yvrkpdmbe3pkghu5tykqc n2933)
  f019401: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005174842734321514 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019423: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005175917135213465 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019434: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041191263016777056 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019437: 'error, Korea, Guro-gu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465253171402566 FIL, balance: 0.669609513111616109 FIL): validation failure
  f019459: 'error, USA, Alpharetta', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007873695137998917 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019462: 'error, Netherlands, Groningen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00787370087070585 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019515: 'error, Netherlands, Groningen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007873698224377413 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019523: 'error, USA, Los Angeles', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007873698019422591 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f019528: 'error, Peru', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005176991831848983 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019547: 'error, Peru', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00517484256560519 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019645: 'error, Russia, St. Petersburg', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041944187684528694 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019723: 'error, China, Zhongshan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041944187449433457 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019804: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041935493378452175 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019806: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005176985158761102 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f019812: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041944184043566562 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019820: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043517694282904506 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f019824: 'error, USA', // error in deal activation: handling applied event: deal wasn't active: deal=535554, parentState=bafy2bzacebia36nuaxktpjaznt25mioc7eqftnjprkdogb5fnss3oj6nvzaco, h=133366
  f019825: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041843536370362819 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020223: 'error, China, Guiyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041851921713512868 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020260: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005176992211618212 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020276: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005175918949290198 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020281: 'error, Korea, Uijeongbu-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041851925698075731 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020358: 'error, China, Xinxiang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007428986733186675 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f020366: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005175915200600072 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020379: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005250656910983211 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020385: 'error, Korea, Incheon', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465247509858879 FIL, balance: 0.669609513111616109 FIL): validation failure
  f020386: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038084351394610937 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020390: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038092248319954797 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020393: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038084348441462767 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020398: 'error, China, Zhangjiakou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465253647719873 FIL, balance: 0.669609513111616109 FIL): validation failure
  f020408: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038076448021068267 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020432: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03859112512080162 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020433: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005249563690489706 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020436: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465255136965124 FIL, balance: 0.669609513111616109 FIL): validation failure
  f020450: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005250651714775665 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020452: 'error, China, Hangzhou + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007428983622695847 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f020453: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038591130431542743 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020489: 'error, China, Lioaning', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465252574498599 FIL, balance: 0.669609513111616109 FIL): validation failure
  f020516: 'error, China, Dalian', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038583122366382475 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020522: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032803484243310288 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020525: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005250657357061353 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020541: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.90641728004937802 FIL, balance: 0.850946407735853971 FIL): validation failure
  f020563: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005248482040953061 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020572: 'error, China, Nanchang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007427444405748193 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f020578: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037611821726998821 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020605: 'error, China, Yibin', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037650517794172638 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020608: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465250681288037 FIL, balance: 0.669609513111616109 FIL): validation failure
  f020618: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037642708266592427 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020626: 'error, USA, Berkeley', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007428987854410113 FIL, balance: 0.007255679004175256 FIL): not enough funds to execute transaction
  f020631: 'error, China, Zhejiang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039773824691351607 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020641: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005249564938044137 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020678: 'error, China, Wenzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037642711075096605 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020683: 'error, China, Changsha', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.005250653523200565 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020739: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037650514689709893 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020763: 'error, China, Luzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004830248472027946 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020771: 'error, Japan, Setagaya-ku', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007705384116675053 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f020775: 'error, Japan, Osaka', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.037634902867454071 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020786: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004831246899669717 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020788: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036656916200572305 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020789: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00483124425334128 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020816: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007702189924980344 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f020819: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034595906696510449 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020822: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00483124539867705 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020896: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034037092373310531 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020899: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034044153106302298 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.13930303019742592 FIL, balance: 0.12144284819453019 FIL): validation failure
  f020914: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004831247424112938 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020923: 'error, China, Cangzhou', // stream reset
  f020928: 'error, China, Deyang + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038762913442191786 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020939: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004831244838065331 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020957: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034859588892222439 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f020961: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004831244476380351 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f020967: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007703789736558465 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f020993: 'error, China, Hong Kong', // EOF
  f021069: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034866823589962767 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021075: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007702189906899845 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f021083: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035155165080915983 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021092: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033925803562687356 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021095: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00483124431362211 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f021254: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033925810211662905 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021255: 'error, China, Suzhou + Netherlands', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038754878343867293 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021262: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465249825122751 FIL, balance: 0.669609513111616109 FIL): validation failure
  f021274: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.713465254105949181 FIL, balance: 0.669609513111616109 FIL): validation failure
  f021292: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007266307200866406 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f021346: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035811041515269678 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021357: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035803616030181323 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021444: 'error, China, Guangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035811042618408867 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021461: 'error, China, Yangzhou + Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007266310347525732 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f021475: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007266302818450065 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f021479: 'error, China, Qingdao', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035803613697796952 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021494: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035803611148446593 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021525: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035811042521959539 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021527: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040263259799405751 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021532: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032803478944625331 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021535: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040263266465083049 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021547: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007330351923695025 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f021574: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.04027161052973709 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021580: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040263261583348319 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021704: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040271610523709007 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021716: 'error, New Zealand, Wellington', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032796672258420828 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f021725: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004727800537654991 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f021870: 'error, USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735802436292357 FIL, balance: 0.838490847585179483 FIL): validation failure
  f021961: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007330356312139449 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022015: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.045173301950945538 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022016: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.045163942072708463 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022030: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041938002330949576 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022031: 'error, China, Maoming', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007328835594130403 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022069: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007328832900136052 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022070: 'error, China, Jieyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031916864307467646 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022072: 'error, China, Jieyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031524055816523508 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022084: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.0047287797424389 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022091: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004727807583022768 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022108: 'error, China, Luzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004728778217333901 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022119: 'error, USA, Lovettsville', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041946690996696519 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022130: 'error, Korea, Seodaemun-gu', // stream reset
  f022132: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.04343266099968714 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022142: 'error, USA, Queens', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735801592185737 FIL, balance: 0.838490847585179483 FIL): validation failure
  f022144: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008026416168697692 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022146: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008024751427182712 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022166: 'error, Norway, Borgen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008026419224935773 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022171: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004727799024919908 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022261: 'error, China, Luzhou', // EOF
  f022262: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004727797909955803 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022276: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043432662452455143 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022284: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004726816999909405 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022287: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.060606060549986476 FIL, balance: 0.055761302709139222 FIL): validation failure
  f022289: 'error, China, Mianyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032796686885544519 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022303: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.04343265864873477 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022304: 'error, China, Taiyuan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008026416741365577 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022308: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043414647202799621 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022309: 'error, Korea, Chuncheon', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03598013252488181 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022313: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043423651241390497 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022320: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008159093884892917 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022326: 'error, China, Zhongshan', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041053819462967146 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022361: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004728779875056726 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022364: 'error, Korea, Jungang-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.00815740650873702 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022373: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035965206632820703 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022376: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999997465853 FIL, balance: 0.003419950457033383 FIL): not enough funds to execute transaction
  f022395: 'error, USA, Los Angeles', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 9.263662313821484884 FIL, balance: 9.247324167408334375 FIL): validation failure
  f022405: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008155719775724754 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022501: 'error, Japan, Osaka', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004727793944299689 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022505: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004896411513729993 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022512: 'error, Canada, Embrun', // EOF
  f022518: 'error, DNS:poseidon.technology', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008154025677455062 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022737: 'error, Korea, Gangnum-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008344970528293008 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022748: 'error, China, Xinyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004896411278634756 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022780: 'error, Korea, Guri-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008344969569827811 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022790: 'error, China, Luzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004896415208944872 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022791: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004894385552782816 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022832: 'error, China', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039575333023214049 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022834: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004823944383474189 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022841: 'error, China, Zhongshan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 11.419984826608791163 FIL, balance: 11.338357011046283292 FIL): validation failure
  f022853: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735793494791518 FIL, balance: 0.838490847585179483 FIL): validation failure
  f022855: 'error, Finland, Helsinki', // AddPiece failed: getting available sector: getting sector number: ERROR: duplicate key value violates unique constraint "sector_actor_id_id_idx" (SQLSTATE 23505)
  f022911: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038493094071741373 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022912: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036545087861295642 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022913: 'error, Korea, Uiwang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008343247607533759 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022926: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004823944895861244 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f022930: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036545088711255345 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022967: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008343246408193992 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f022976: 'error, Korea, Cheongju-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.039773837814488298 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f022996: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036545080193574066 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023013: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038046317142609558 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023108: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008949608562466413 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023181: 'error, DNS:poseidon.technology', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008541052102538253 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023190: 'error, China, Hefei', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008539282766134739 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023205: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008541053067031533 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023207: 'error, undefined', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999968769945 FIL, balance: 0.096176172372952721 FIL): not enough funds to execute transaction
  f023210: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008949617484029253 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023229: 'error, China, Shandong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008541052024173174 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023463: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041841537978860388 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023467: 'error, Norway, Oslo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735800259703144 FIL, balance: 0.838490847585179483 FIL): validation failure
  f023482: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008947762431213294 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023490: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.10030303025890176 FIL, balance: 0.080326434593729173 FIL): not enough funds to execute transaction
  f023495: 'error, China, Beijing + USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038038430742136226 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023530: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041841540335840841 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023535: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008949614855785065 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023549: 'error, China, Zhejiang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008779140849387555 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023560: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043168877940875733 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023565: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023581: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008948681619577193 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023583: 'error, Korea, Guri-si', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008775498535566548 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023626: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043168877187365358 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023627: 'error, China, Zhongwei', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03320462217123333 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023643: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.00866273568925385 FIL, balance: 0.004668963389900487 FIL): validation failure
  f023649: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043364802917580804 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023651: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043364806600739517 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023655: 'error, Australia, Brisbane', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008777319538649685 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023660: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.03195757597141374 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023661: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.035424497713604415 FIL, balance: 0.016454260054526771 FIL): not enough funds to execute transaction
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031964199901562142 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023798: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043795366050671617 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023825: 'error, USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038046316172088195 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023843: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735796165786037 FIL, balance: 0.838490847585179483 FIL): validation failure
  f023854: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.043795362151310666 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023859: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.04378627951133279 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023861: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031964206598762355 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023868: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008387268899502546 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023869: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031950933733779184 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023870: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008385536954508811 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f023871: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.031964199250529178 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023939: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735801164103094 FIL, balance: 0.838490847585179483 FIL): validation failure
  f023965: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.042396997199944221 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023971: 'error, USA, @Brian Y', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.882735800259703144 FIL, balance: 0.838490847585179483 FIL): validation failure
  f023982: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.040698824458026154 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f023985: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.041194201212316917 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024016: 'error, USA, Portland', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038046314508337287 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024025: 'error, China, Chengdu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999998184258 FIL, balance: 0.044037604834337088 FIL): not enough funds to execute transaction
  f024031: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036461112879469518 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024070: 'error, Japan, Setagaya-ku', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008387268809081301 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f024074: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008663605959576591 FIL, balance: 0.004668963389900487 FIL): validation failure
  f024101: 'error, China, Guiyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035555595783521994 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024129: 'error, China, Zhejiang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035753948440245126 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024130: 'error, Korea', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f024136: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033646208500326775 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024137: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008161154192050452 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f024146: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033639226043437575 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024147: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.033639230914128639 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024150: 'error, UK, Mansfield', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008159464464033642 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f024156: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.035746538218083 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024190: 'error, China, Wenzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008161156332019917 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f024483: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008663598918775647 FIL, balance: 0.004668963389900487 FIL): validation failure
  f024526: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.627883260614740504 FIL, balance: 0.09533579735187667 FIL): validation failure
  f024556: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036570238806606791 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024557: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036570241494574309 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024558: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008662741866757675 FIL, balance: 0.004668963389900487 FIL): validation failure
  f024559: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.036570251161614441 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024563: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.008662738835260676 FIL, balance: 0.004668963389900487 FIL): validation failure
  f024565: 'error, Korea, Incheon', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008161147470737907 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f024617: 'error, Korea, Bucheon-si', // EOF
  f024893: 'error, Korea, Gyeonggi-do', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038918656441319706 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024944: 'error, Korea, Yeongdeungpo-dong', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f024985: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008159463186345046 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f025002: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038918661305982687 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f025008: 'error, Korea, Gyeonggi-do', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.008159460896148506 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f029368: 'error, Korea, Gangseo-gu', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.038918669383613907 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f029529: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030285911442 FIL, balance: 0.010888855251567979 FIL): not enough funds to execute transaction
  f029649: 'error, China, Beijing', // AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: local acquire error: couldn't find a suitable path for a sector

  // Dial backoff

  f02540: 'backoff, USA, Rochester',
  f08109: 'backoff, USA, qianyuanyunshuo',
  f010308: 'backoff, Germany, Frankfurt',
  f014464: 'backoff, China, Hangzhou + Singapore',
  f023518: 'backoff, China, Taiyuan',

  // Rejected

  f01152: 'rejected, China, Beijing', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01235: 'rejected, Singapore, IPFSMain',
  f01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01475: 'rejected, China, Wuhan + Germany', // getting client market balance failed
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02438: 'rejected, Singapore',
  f02490: 'rejected, China, Fujian', // syntax error at /root/.lotusstorage/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /root/.lotusstorage/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /root/.lotusstorage/dealfilter.pl line 23.
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02613: 'rejected, China, Chongqing',
  f02627: 'rejected, China, Guilin',
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03002: 'rejected, China, Chongqing',
  f03131: 'rejected, China, Changsha',
  f03144: 'rejected, Germany, Frankfurt',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03328: 'rejected, China, Xinxiang',
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03488: 'rejected, Korea, Geumcheon-gu', // no online
  f03519: 'rejected, USA', // getting client market balance failed
  f08091: 'rejected, USA', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08203: 'rejected, Germany, Frankfurt',
  f08207: 'rejected, Australia, Brisbane',
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09652: 'rejected, Singapore',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010005: 'rejected, China, Zhongshan', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010056: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010419: 'rejected, China, Sichuan',
  f010491: 'rejected, China, Shenzhen', // no online
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014395: 'rejected, China, Dongguan',
  f014472: 'rejected, China, Ningbo',
  f014487: 'rejected, China, Shanghai', // no online
  f014683: 'rejected, China, Shenzhen',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f014813: 'rejected, China, Hangzhou + USA',
  f015726: 'rejected, China, Qingdao',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015747: 'rejected, Japan, Setagaya-ku',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015861: 'rejected, Ukraine, Odessa',
  f015862: 'rejected, Ukraine, Odessa',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei', // sh: ../dealfilter.pl: No such file or directory
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f019661: 'rejected, Russia, Pyatigorsk', // 2020-10-09T20:40:55+03:00stdin: {  "Proposal": {    "PieceCID": {      "/": "baga6ea4seaqiznfzxtzzy7mkntdwcguu4g6lmnbs6nmwo5olc7fcgssobsqomoa"    },    "PieceSize": 131072,    "VerifiedDeal": false,    "Client": "f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a",    "Provider": "f019661",    "Label": "mAVWg5AIgOxKh6HXpJjbQzg7rG9AkZLKMimM5GGkzYzSLb/EQnX8",    "StartEpoch": 137841,    "EndEpoch": 715483,    "StoragePricePerEpoch": "20000000",    "ProviderCollateral": "0",    "ClientCollateral": "0"  },  "ClientSignature": {    "Type": 2,    "Data": "p0W0EbwMDLHym7e1lSwYQPuiuq8rTIkCB5nDgejvdGk4dSvZTVwVPo5lK+7JUSStAdnBJb9TKJ2DnwNezFPTU+Dz9rG4htKSULBwG3AmeOVlNthbbscPOlOi1E1bHlrj"  },  "ProposalCid": {    "/": "bafyreie3izq6oryqrofs2crc5tbhr7hdlb2ttd7op75hfmr4ygnzk4ntyu"  },  "AddFundsCid": null,  "PublishCid": null,  "Miner": "12D3KooWGapQWB726LTfoWraBZFtt5f35cg9xtzozbUbsAMT69rm",  "Client": "12D3KooWAMNWKJ2R3XvgFmiDY8Xd59C7VNyUCUWe1rVeT5H4zfLF",  "State": 15,  "PiecePath": "",  "MetadataPath": "",  "SlashEpoch": 0,  "FastRetrieval": true,  "Message": "",  "StoreID": 64,  "FundsReserved": "0",  "Ref": {    "TransferType": "graphsync",    "Root": {      "/": "bafk2bzacea5rfipioxusmnwqzyhowg6qerslfdekmm4rq2jtmm2iw37rccox6"    },    "PieceCid": null,    "PieceSize": 0  },  "AvailableForRetrieval": false,  "DealID": 0,  "CreationTime": "2020-10-09T20:40:55.496054914+03:00"}Deal rejected unconditionally in lotus-miner-dealmaking-filter
  f020315: 'rejected, China, Guangzhou', // sh: jq: command not found
  f020378: 'rejected, Bulgaria, Asenovgrad', // sh: 1: /mnt/SSD-Scratch/.lotusminer/dealfilter.pl: not found
  f020648: 'rejected, China, Shenzhen',
  f020742: 'rejected, China, Shanghai + Hangzhou + Shaoxing', // no online
  f020747: 'rejected, China, Xiamen', // sh: 1: dealfilter.pl: not found
  f021316: 'rejected, China, Yangzhou', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021976: 'rejected, NR', // getting client market balance failed
  f022374: 'rejected, NR',
  f022399: 'rejected, China, Beijing', // no online
  f022566: 'rejected, China, Nanchong',
  f023462: 'rejected, China, Chengdu',
  f023534: 'rejected, China, Chongqing',
  f023858: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023876: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023928: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023977: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023978: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023980: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023981: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f024006: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024007: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024008: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024012: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024013: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024014: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024081: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024084: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024085: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024148: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024611: 'rejected, China, Dongguan', // no online

  // Dial errors

  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:39581->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:41211->203.107.44.156:39770: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:39581->221.163.91.162:32230: i/o timeout
  f01289: 'dial, China, Hangzhou + USA', // * [/ip4/161.117.249.226/tcp/44163] dial tcp4 0.0.0.0:39581->161.117.249.226:44163: i/o timeout  * [/ip4/161.117.88.227/tcp/44163] dial tcp4 0.0.0.0:39581->161.117.88.227:44163: i/o timeout
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:39581->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:39581->2.58.45.33:18888: i/o timeout
  f02416: 'dial, China, Guangdong, 星际无限', // * [/ip4/103.142.248.7/tcp/2347] dial tcp4 0.0.0.0:41211->103.142.248.7:2347: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 103.78.229.73:14567: connect: connection refused
  f02492: 'dial, China, Shenzhen', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:41211->103.142.248.7:3347: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:39581->119.28.87.115:2301: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:39581->8.209.70.199:58692: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com', // * [/ip4/2.139.172.201/tcp/8011] dial tcp4 2.139.172.201:8011: connect: connection refused
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:39581->66.42.38.110:9997: i/o timeout  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:39581->43.243.100.31:6777: i/o timeout
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: connect: connection refused
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:39581->150.129.138.199:8518: i/o timeout
  f02665: 'dial, Netherlands, Amsterdam, fm-ops', // * [/ip4/139.178.82.157/tcp/15432] dial tcp4 139.178.82.157:15432: connect: connection refused
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:39581->135.90.74.200:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:39581->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:39581->110.249.208.222:1479: i/o timeout
  f03134: 'dial, China, Cangzhou, 乔木信息', // * [/ip4/221.195.3.146/tcp/10240] dial tcp4 221.195.3.146:10240: connect: connection refused
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCErnjDuHG4fe7pGpe8xWGSQPr9Zq9AteTg9kf4QERBFm, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:39581->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:39581->149.81.122.165:14567: i/o timeout
  f03302: 'dial, China, Chengdu', // * [/ip4/182.150.0.20/tcp/5428] dial tcp4 0.0.0.0:41211->182.150.0.20:5428: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:39581->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWS33M7NQzLm8d8a5cz7Vo87bRWo1Sad8dCpxNgN8h3HDA, but remote key matches 12D3KooWRAbtemsWN7MjrrJ6KSmfrnGDnWsCtDu4oHH1eLUzD6a6
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:39581->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:39581->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:39581->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 45.9.10.134:42243: connect: connection refused
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:39581->47.245.138.110:2347: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01', // * [/ip4/122.57.157.167/tcp/4567] dial tcp4 122.57.157.167:4567: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 192.168.1.12:1001: connect: no route to host
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:39581->170.33.12.78:17000: i/o timeout  * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:39581->170.33.12.186:17000: i/o timeout
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:39581->218.17.190.89:10240: i/o timeout  * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:39581->8.209.113.21:7002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f07806: 'dial, China, Wuhan, HelloXP', // * [/ip4/58.211.11.131/tcp/1024] dial tcp4 58.211.11.131:1024: connect: connection refused
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:39581->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:39581->163.44.165.168:30222: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:39581->107.155.3.37:20480: i/o timeout
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 212.32.243.209:2347: connect: connection refused
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:39581->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:39581->113.218.133.192:13470: i/o timeout
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:39581->43.241.189.214:39438: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhbSYbTBYSym7mrxXPfFHupE2oG8LZRjwM3smZKwBYWj, but remote key matches 12D3KooWE3jXWnuX7eXFs2FxY3MZRbsftox1NRGf47iPr5CfFi6B
  f08094: 'dial, China, Guangzhou, dongshao', // * [/ip4/183.2.154.179/tcp/23450] dial tcp4 183.2.154.179:23450: connect: connection refused
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:39581->103.108.182.27:30031: i/o timeout
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 115.199.55.127:23333: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 183.240.204.199:40573: connect: connection refused
  f08220: 'dial, China, Shenzhen', // * [/ip4/183.47.51.62/tcp/10240] dial tcp4 183.47.51.62:10240: connect: connection refused  * [/ip4/192.168.16.48/tcp/5472] dial tcp4 0.0.0.0:39581->192.168.16.48:5472: i/o timeout
  f08240: 'dial, Russia, Novosibirsk, Rabinovitch', // * [/ip4/80.89.156.216/tcp/12128] dial tcp4 80.89.156.216:12128: connect: connection refused
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:39581->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:39581->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:39581->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:39581->108.41.171.148:55243: i/o timeout
  f08285: 'dial, Latvia, Riga, stander', // * [/ip4/109.73.97.103/tcp/10240] dial tcp4 0.0.0.0:41211->109.73.97.103:10240: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR8hBuB593YUujHBYAT9Zp48FgfzYeLbPdqow59ZF3dFg, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:39581->126.159.22.156:50320: i/o timeout
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 0.0.0.0:39581->111.17.220.231:5566: i/o timeout
  f08346: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23233] dial tcp4 59.23.202.120:23233: connect: connection refused
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 222.209.95.29:6666: connect: connection refused
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 27.124.10.49:7003: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:39581->71.75.239.182:41372: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.96:23450: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:39581->69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:39581->192.168.1.18:1020: i/o timeout
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.100:23450: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.97:23450: i/o timeout
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:41211->113.200.194.196:32634: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.102:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:39581->101.178.36.30:24004: i/o timeout
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:39581->47.145.150.94:1024: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:39581->99.250.201.0:31001: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 0.0.0.0:39581->113.218.134.132:5472: i/o timeout
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:39581->220.238.233.196:26201: i/o timeout
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 0.0.0.0:39581->150.129.138.199:7518: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:39581->47.242.77.149:19914: i/o timeout
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 192.168.0.9:24002: i/o timeout
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:39581->90.188.226.112:9555: i/o timeout
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:39581->95.216.99.39:46717: i/o timeout
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:39581->47.57.188.137:12311: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 106.55.236.214:10022: connect: connection refused
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:39581->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:39581->15.228.35.11:46717: i/o timeout
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: context deadline exceeded
  f010495: 'dial, China, Tainjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:39581->150.129.138.199:8518: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:39581->47.57.188.137:12316: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:39581->74.88.128.118:41126: i/o timeout  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:39581->74.88.128.118:55519: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:39581->8.210.76.199:18899: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:39581->99.250.201.0:20002: i/o timeout
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:39581->95.217.113.188:12345: i/o timeout
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:39581->162.62.55.44:12309: i/o timeout
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: read tcp4 10.0.1.52:39581->66.42.38.110:9990: read: connection reset by peer  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: connection refused  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 10.0.1.9:39581->43.227.216.41:25677: read: connection reset by peer
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:39581->170.33.12.186:7193: i/o timeout  * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:39581->170.33.12.78:7193: i/o timeout
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 10.0.1.9:39581->103.242.134.36:12288: read: connection reset by peer  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:39581->170.33.12.118:12345: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:39581->81.68.170.164:5474: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.101:23450: i/o timeout
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:39581->54.148.63.7:10240: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:39581->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:39581->18.228.119.165:5101: i/o timeout
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:39581->47.57.188.137:12317: i/o timeout
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: connection refused
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:39581->8.209.107.150:12329: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:39581->47.57.188.137:12500: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7002] dial tcp4 149.28.89.24:7002: connect: connection refused  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 45.77.72.195:7003: connect: no route to host  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 141.164.50.170:7001: connect: connection refused  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:39581->45.32.19.57:7006: i/o timeout  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:39581->155.138.144.135:7007: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:39581->104.156.230.123:7004: i/o timeout  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:39581->45.77.89.14:7005: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:39581->52.63.43.218:8888: i/o timeout
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.2:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.20:23450: i/o timeout
  f015848: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:39581->8.209.107.150:12321: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.195:23450: i/o timeout
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.10:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.98:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:39581->43.252.149.169:4001: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:39581->162.62.55.44:12317: i/o timeout
  f015927: 'dial, USA, East Islip', // * [/ip4/74.90.130.24/tcp/42047] dial tcp4 74.90.130.24:42047: connect: connection refused
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.3:23450: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.10:23450: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:39581->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:39581->47.254.25.128:7000: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 0.0.0.0:39581->96.64.7.172:5472: i/o timeout
  f016594: 'dial, Germany', // * [/ip4/135.181.62.186/tcp/12345] dial tcp4 0.0.0.0:41211->135.181.62.186:12345: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:39581->163.44.165.168:30333: i/o timeout
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.2:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:39581->36.33.216.70:10240: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:39581->161.117.88.227:35252: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:39581->124.161.87.252:32005: i/o timeout
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQAvQySCpQrXHEkh1jcibHA22Cy9nhRkpUjaWbzfgPgfP, but remote key matches 12D3KooWELAAU6d479HNnEPR7npHYZKokeRMeECntLAsh929bgMZ
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:39581->73.158.190.21:52286: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:39581->73.158.190.21:39083: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:39581->192.168.86.244:41941: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:39581->113.105.174.9:10000: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:39581->185.50.195.183:10243: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:39581->95.217.114.57:45381: i/o timeout
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:39581->18.228.17.31:2347: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 119.28.141.16:2312: connect: connection refused
  f019022: "dial, China, Xi'an", // * [/ip4/113.200.105.8/tcp/1347] dial tcp4 113.200.105.8:1347: connect: connection refused
  f019029: 'dial, Serbia, Boljevac', // * [/ip4/178.220.25.96/tcp/46717] dial tcp4 0.0.0.0:41211->178.220.25.96:46717: i/o timeout  * [/ip4/109.92.96.31/tcp/46717] dial tcp4 0.0.0.0:41211->109.92.96.31:46717: i/o timeout
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:39581->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:39581->45.61.255.21:12345: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:39581->54.232.153.175:16088: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:39581->15.228.40.58:14567: i/o timeout
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:39581->115.91.38.15:51101: i/o timeout
  f019240: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] dial tcp4 36.112.26.4:3458: connect: connection refused
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.195:23450: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:39581->101.206.156.204:15090: i/o timeout
  f019551: 'dial, UK', // * [/ip6/2a04:7340:0:1002::205/tcp/1347] dial tcp6 [2a04:7340:0:1002::205]:1347: connect: network is unreachable  * [/ip4/185.37.216.70/tcp/1347] dial tcp4 185.37.216.70:1347: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:39581->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f020330: 'dial, USA', // * [/ip4/10.10.33.155/tcp/14567] dial tcp4 0.0.0.0:39581->10.10.33.155:14567: i/o timeout
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 0.0.0.0:39581->10.10.11.81:14567: i/o timeout
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: connect: no route to host
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:39581->8.209.106.203:14567: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.110:23450: i/o timeout
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 117.175.0.194:18181: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021536: 'dial, NR', // * [/ip4/183.2.157.247/tcp/7000] dial tcp4 0.0.0.0:39581->183.2.157.247:7000: i/o timeout  * [/ip4/172.20.4.158/tcp/7000] dial tcp4 0.0.0.0:39581->172.20.4.158:7000: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022122: 'dial, NR', // * [/ip6/::1/tcp/36657] dial tcp6 [::1]:36657: connect: connection refused  * [/ip4/127.0.0.1/tcp/44189] dial tcp4 127.0.0.1:44189: connect: connection refused  * [/ip4/110.185.107.22/tcp/44189] dial tcp4 0.0.0.0:39581->110.185.107.22:44189: i/o timeout  * [/ip4/172.16.8.107/tcp/44189] dial tcp4 0.0.0.0:39581->172.16.8.107:44189: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.5:23450: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022517: 'dial, China, Taiwan, Taipei', // * [/ip4/1.171.68.64/tcp/41447] dial tcp4 0.0.0.0:39581->1.171.68.64:41447: i/o timeout
  f022522: 'dial, China, Dongguan', // * [/ip4/113.105.174.12/tcp/10000] dial tcp4 113.105.174.12:10000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 0.0.0.0:39581->211.114.218.99:24001: i/o timeout
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f023009: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/24001] dial tcp4 0.0.0.0:39581->73.158.16.48:24001: i/o timeout
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 10.6.1.121:61121: i/o timeout
  f023152: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/32759] dial tcp4 0.0.0.0:39581->112.47.13.98:32759: i/o timeout
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:39581->192.168.1.18:1020: i/o timeout
  f023561: 'dial, China, Shenzhen', // * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:39581->96.255.216.221:23432: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 103.100.152.118:24001: i/o timeout
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023826: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:39581->96.255.216.221:23432: i/o timeout
  f023882: 'dial, NR', // * [/ip4/192.168.223.128/tcp/7000] dial tcp4 192.168.223.128:7000: connect: no route to host  * [/ip4/119.6.226.2/tcp/2048] dial tcp4 0.0.0.0:39581->119.6.226.2:2048: i/o timeout  * [/ip4/10.21.0.2/tcp/7000] dial tcp4 0.0.0.0:39581->10.21.0.2:7000: i/o timeout  * [/ip4/119.6.226.2/tcp/2052] dial tcp4 0.0.0.0:39581->119.6.226.2:2052: i/o timeout
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 121.148.37.39:42055: connect: connection refused
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:39581->14.136.246.135:46717: i/o timeout
  f024511: 'dial, NR', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:39581->103.44.247.137:51105: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:39581->192.168.2.64:3000: i/o timeout
  f029344: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:39581->221.163.91.162:33230: i/o timeout
  f029412: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10240] dial tcp4 36.33.216.78:10240: connect: no route to host
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused

  // XNR (Not routable)

  f01001: 'xnr, NR - bootstrap',
  f01002: 'xnr, NR - bootstrap',
  f01102: 'xnr, China, Shandong',
  f01232: 'xnr, China, Hangzhou',
  f02385: 'xnr, USA, East Islip',
  f02404: 'xnr, Korea, Seoul',
  f02515: 'xnr, China, Hangzhou',
  f02608: 'xnr, USA, San Jose',
  f02775: 'xnr, China, Hong Kong',
  f03249: 'xnr, NR',
  f03341: 'xnr, NR',
  f03361: 'xnr, China, Guangzhou',
  f03487: 'xnr, China, Yibin',
  f04444: 'xnr, NR',
  f07717: 'xnr, China, Shenyang',
  f07796: 'xnr, China, Hunan',
  f07866: 'xnr, China, Foshan',
  f07931: 'xnr, NR',
  f07959: 'xnr, NR',
  f08053: 'xnr, NR',
  f08097: 'xnr, Korea, Pyeongtaek-si',
  f08171: 'xnr, NR',
  f08183: 'xnr, USA, Irvine',
  f08225: 'xnr, Australia, Sydney',
  f08246: 'xnr, USA',
  f08290: 'xnr, NR',
  f08315: 'xnr, China, Chongqing',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08390: 'xnr, China, Shenzhen',
  f08393: 'xnr, NR',
  f08402: 'xnr, China, Sichuan',
  f08425: 'xnr, NR',
  f08429: 'xnr, yfeing',
  f08574: 'xnr, USA',
  f08787: 'xnr, China, Yibin',
  f08789: 'xnr, China, Fuzhou',
  f08902: 'xnr, NR',
  f08980: 'xnr, USA, San Jose',
  f09006: 'xnr, NR',
  f09529: 'xnr, NR',
  f09594: 'xnr, NR',
  f09712: 'xnr, China, Chengdu',
  f09719: 'xnr, Korea, Geumcheon-gu',
  f09762: 'xnr, China, Guangdong',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f010028: 'xnr, USA, Berkeley',
  f010078: 'xnr, China, Zhangjiakou + Hong Kong',
  f010222: 'xnr, NR',
  f010265: 'xnr, China, Zhengzhou',
  f010275: 'xnr, Korea, Cheongju-si + USA',
  f010277: 'xnr, France, Fontenay-sous-Bois',
  f010281: 'xnr, China, Shanghai',
  f010282: 'xnr, USA, San Francisco',
  f010297: 'xnr, USA, Howell',
  f010303: 'xnr, China, Guangdong',
  f010305: 'xnr, NR',
  f010310: 'xnr, Canada, Surrey',
  f010382: 'xnr, NR',
  f010425: 'xnr, NR',
  f010453: 'xnr, China, Shaanxi',
  f010517: 'xnr, China, Chongqing',
  f010542: 'xnr, China, Ordos',
  f010551: 'xnr, China, Shenyang',
  f010566: 'xnr, NR',
  f010591: 'xnr, China, Wuhan',
  f010601: 'xnr, NR',
  f014314: 'xnr, Korea, Bucheon-si',
  f014331: 'xnr, China, Chongqing',
  f014354: 'xnr, USA, Concord',
  f014389: 'xnr, China, Chongqing',
  f014477: 'xnr, China, Hangzhou',
  f014486: 'xnr, NR',
  f014540: 'xnr, USA, Newton',
  f014556: 'xnr, Korea, Bucheon-si',
  f014629: 'xnr, NR',
  f014685: 'xnr, Hong Kong',
  f014708: 'xnr, China, Beijing',
  f014741: 'xnr, China, Wuhan',
  f014749: 'xnr, China, Chongqing',
  f014803: 'xnr, China, Beijing',
  f015232: 'xnr, Poland, Warsaw',
  f015724: 'xnr, China, Guangdong',
  f015799: 'xnr, Germany, Rostock',
  f015811: 'xnr, Germany, Lanshut',
  f015812: 'xnr, Germany',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015901: 'xnr, Germany',
  f015932: 'xnr, NR',
  f016140: 'xnr, China, Beijing',
  f016162: 'xnr, France, Borgo',
  f016203: 'xnr, China, Chengdu',
  f016217: 'xnr, China, Nanchong',
  f016276: 'xnr, China, Beijing',
  f016304: 'xnr, USA, Boardman',
  f016408: 'xnr, NR',
  f016426: 'xnr, NR',
  f016456: 'xnr, China, Zhejiang',
  f016482: 'xnr, USA, Aliquippa',
  f016688: 'xnr, Germany, Frankfurt',
  f016859: 'xnr, NR',
  f017171: 'xnr, NR',
  f017209: 'xnr, NR',
  f017215: 'xnr, Finland',
  f017216: 'xnr, NR',
  f017251: 'xnr, USA',
  f017430: 'xnr, Australia, Alexandria-cfa',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f018081: 'xnr, Germany',
  f018095: 'xnr, Colombia, Medellin',
  f018128: 'xnr, China, Dongguan',
  f018164: 'xnr, USA, Howell',
  f018369: 'xnr, NR',
  f018425: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018441: 'xnr, USA',
  f018474: 'xnr, China, Xiamen',
  f018484: 'xnr, China, Shanghai',
  f018517: 'xnr, USA, Columbus',
  f018520: 'xnr, China',
  f018537: 'xnr, China, Shaanxi',
  f018761: 'xnr, Russia, St. Petersburg',
  f018790: 'xnr, China, Chengdu',
  f018812: 'xnr, South Africa, Cape Town',
  f018837: 'xnr, China, Shaanxi',
  f018865: 'xnr, China, Chengdu',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f019024: 'xnr, China, Sichuan',
  f019042: 'xnr, China, Shanghai',
  f019160: 'xnr, USA, Fremont',
  f019184: 'xnr, China, Yibin',
  f019264: 'xnr, NR',
  f019284: 'xnr, China, Foshan',
  f019525: 'xnr, USA, Berkeley',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019809: 'xnr, NR',
  f020241: 'xnr, NR',
  f020352: 'xnr, NR',
  f020361: 'xnr, Colombia, Medellin',
  f020369: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020451: 'xnr, NR',
  f020457: 'xnr, NR',
  f020559: 'xnr, China, Liaoning',
  f020682: 'xnr, NR',
  f020691: 'xnr, NR',
  f020791: 'xnr, China, Hangzhou',
  f020934: 'xnr, NR',
  f020940: 'xnr, @fu',
  f020975: 'xnr, China, Shandong',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021418: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021555: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022093: 'xnr, NR',
  f022250: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022372: 'xnr, China, Chengdu',
  f022494: 'xnr, China, Dongguan',
  f022503: 'xnr, NR',
  f022562: 'xnr, NR',
  f022564: 'xnr, NR',
  f022683: 'xnr, NR',
  f022755: 'xnr, China, Shenzhen',
  f022776: 'xnr, Korea, Guri-si',
  f022786: 'xnr, NR',
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022857: 'xnr, NR',
  f022906: 'xnr, NR',
  f022954: 'xnr, NR',
  f022969: 'xnr, China, Chengdu',
  f022970: 'xnr, NR',
  f023001: 'xnr, China, Changsha',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023159: 'xnr, NR',
  f023198: 'xnr, NR',
  f023219: 'xnr, NR',
  f023254: 'xnr, NR',
  f023499: 'xnr, NR',
  f023501: 'xnr, China, Mianyang',
  f023505: 'xnr, NR',
  f023526: 'xnr, China, Chongqing',
  f023568: 'xnr, NR',
  f023801: 'xnr, China, Dongguan',
  f023881: 'xnr, China, Fuzhou',
  f023943: 'xnr, USA, Ashburn',
  f023986: 'xnr, Korea, Seoul',
  f024089: 'xnr, NR',
  f024165: 'xnr, NR',
  f024496: 'xnr, China, Dongguan',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, NR',
  f024983: 'xnr, China, Hong Kong',
  f025028: 'xnr, NR',
  f025044: 'xnr, NR',
  f029416: 'xnr, NR',
  f029477: 'xnr, NR',
  f029566: 'xnr, NR',
  f029595: 'xnr, China, Guangdong',
  f030203: 'xnr, NR'
}

export default annotations
