// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // Retest

  // New

  f0857779: 'new, Korea, Dongjak-gu',
  f0858038: 'new, China, Shanghai',

  // Inflight

  // Unknown

  // Active

  f0106949: 'active, Korea, Seoul', // 1934098 about 2 hours

  // Active-sealing (active, with in-flight sealing)

  f03339: 'active-sealing, China, Luzhou, benxun', // 1934097
  f022261: 'active-sealing, China, Luzhou', // 1934094
  f024550: 'active-sealing, China, Wenzhou', // 1934093
  f042567: 'active-sealing, China, Jinhua', // 1934096
  f063628: 'active-sealing, NR', // 1934130
  f081644: 'active-sealing, China, Wenzhou', // 1934095
  f082095: 'active-sealing, NR', // 1934104
  f097720: 'active-sealing, Korea, Bucheon-si', // 1934106
  f0113331: 'active-sealing, Korea, Jinju + USA', // 1934131
  f0131901: 'active-sealing, Korea, Daejeon', // 1934105
  f0137168: 'active-sealing, China, Beijing', // 1934103
  f0149455: 'active-sealing, NR', // 1934112
  f0157429: 'active-sealing, Korea, Bucheon-si', // 1934126
  f0157564: 'active-sealing, Korea, Daejeon', // 1934099
  f0165375: 'active-sealing, Korea, Seongnam-si', // 1934125
  f0165539: 'active-sealing, Japan, Yokohama', // 1934102
  f0215370: 'active-sealing, China, Hangzhou', // 1934154
  f0228232: 'active-sealing, NR', // 1934127
  f0399814: "active-sealing, China, Ya'an", // 1934100
  f0400920: 'active-sealing, China, Luzhou', // 1934101
  f0413563: 'active-sealing, Korea, Gangnam-gu', // 1934121
  f0419768: 'active-sealing, Korea, Seongnam-si', // 1934110
  f0437246: 'active-sealing, China, Hangzhou', // 1934115
  f0458627: 'active-sealing, Korea, Seongnam-si', // 1934128
  f0460440: 'active-sealing, Korea, Seongnam-si', // 1934122
  f0478837: 'active-sealing, China, Zhangzhou', // 1934080
  f0482619: 'active-sealing, Korea, Seongnam-si', // 1934108
  f0504054: 'active-sealing, China, Luzhou', // 1934107
  f0675909: 'active-sealing, NR', // 1934124
  f0680538: 'active-sealing, Korea, Bucheon-si', // 1934116
  f0693131: 'active-sealing, China, Zhongshan', // 1934132
  f0694881: 'active-sealing, China, Hangzhou', // 1934118
  f0709739: 'active-sealing, China, Handan', // 1934158
  f0717913: 'active-sealing, Korea, Jung-gu', // 1934117
  f0722515: 'active-sealing, Korea, Geumcheon-gu', // 1934114
  f0729674: 'active-sealing, Canada, Vancouver', // 1934123
  f0746416: 'active-sealing, Korea, Gyeonggi-do', // 1934113
  f0752695: 'active-sealing, Korea, Seongnam-si', // 1934120
  f0758230: 'active-sealing, Korea, Geumcheon-gu', // 1934109
  f0805568: 'active-sealing, Korea, Gangnam-gu', // 1934111
  f0833793: 'active-sealing, China, Henan', // 1934119
  f0842171: 'active-sealing, China, Huizhou', // 1934170

  // Sealing

  f01231: 'sealing, Singapore', // 1934087
  f02540: 'sealing, USA, Mobile, Foundry', // 1934134
  f07709: 'sealing, Korea, Dongjak-gu', // 1934153
  f015233: 'sealing, China, Nanjing', // 1934133
  f016276: 'sealing, China, Beijing', // 1934149
  f016398: 'sealing, China, Shanghai', // 1934081
  f019806: 'sealing, China, Beijing', // 1934151
  f021479: 'sealing, NR', // 1934083
  f022125: 'sealing, China, Shenzhen', // 1934165
  f030125: 'sealing, China, Nantong', // 1934135
  f030408: 'sealing, NR', // 1934166
  f053229: 'sealing, NR', // 1934141
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1934137
  f061158: 'sealing, China, Guangdong, phoenix', // 1934136
  f062318: 'sealing, Korea, Naju', // 1934142
  f066102: 'sealing, NR', // 1934085
  f066259: 'sealing, NR', // 1934082
  f070932: 'sealing, NR', // 1934145
  f089380: 'sealing, NR', // 1934084
  f0110133: 'sealing, China, Ningbo', // 1934146
  f0121533: 'sealing, China, Zhejiang', // 1934144
  f0124554: 'sealing, Korea, Gimhae', // 1934143
  f0133957: 'sealing, NR', // 1934139
  f0134671: 'sealing, Korea, Gimpo-si', // 1934140
  f0146956: 'sealing, NR', // 1934182
  f0149132: 'sealing, NR', // 1934179
  f0152337: 'sealing, NR', // 1934086
  f0165643: 'sealing, China, Guangzhou', // 1934150
  f0166327: 'sealing, NR', // 1934159
  f0168058: 'sealing, China, Suzhou', // 1934148
  f0228855: 'sealing, Korea, Guro-gu', // 1934147
  f0396846: 'sealing, China, Zhongshan', // 1934164
  f0397728: 'sealing, China, Dongguan', // 1934161
  f0401300: 'sealing, France, Deuil-la-Barre', // 1934177
  f0407733: 'sealing, NR', // 1934160
  f0410001: 'sealing, NR', // 1934157
  f0417750: 'sealing, NR', // 1934163
  f0429063: 'sealing, NR', // 1934156
  f0447181: 'sealing, China, Zibo', // 1934155
  f0521569: 'sealing, Korea, Guro-go', // 1934152
  f0693765: 'sealing, NR', // 1934168
  f0706937: 'sealing, Korea, Bucheon-si', // 1934162
  f0849554: 'sealing, China, Beijing', // 1934171
  f0853597: 'sealing, Korea, Gimpo-si', // 1934129

  // Stuck

  f02490: 'stuck, China, Fujian', // CheckForAcceptance: about 7 hours
  f08019: 'stuck, China, Yantai, 三合', // CheckForAcceptance: about 7 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 7 hours
  f014683: 'stuck, China, Dongguan', // CheckForAcceptance: about 7 hours
  f020489: 'stuck, China, Lioaning', // CheckForAcceptance: about 7 hours
  f023219: 'stuck, China, Beijing + Zhangjiakou', // CheckForAcceptance: about 7 hours
  f033036: 'stuck, China, Liaoning', // CheckForAcceptance: about 7 hours
  f039515: 'stuck, China, Chongqing, valarhash', // CheckForAcceptance: about 7 hours
  f044160: 'stuck, China, Guangzhou, muxing', // CheckForAcceptance: about 7 hours
  f048135: 'stuck, China, Chongqing, password interstellar', // CheckForAcceptance: about 7 hours
  f053088: 'stuck, China, Shanghai', // CheckForAcceptance: about 7 hours
  f087965: 'stuck, China, Suzhou', // CheckForAcceptance: about 7 hours
  f0104888: 'stuck, NR', // CheckForAcceptance: about 7 hours
  f0142059: 'stuck, NR', // CheckForAcceptance: about 4 hours
  f0145843: 'stuck, NR', // CheckForAcceptance: about 7 hours
  f0150744: 'stuck, Korea, Ulsan', // CheckForAcceptance: about 4 hours
  f0156207: 'stuck, Korea, Ulsan', // CheckForAcceptance: about 7 hours
  f0157265: 'stuck, China, Zhangjiakou', // CheckForAcceptance: about 7 hours
  f0694172: 'stuck, China, Luzhou', // CheckForAcceptance: about 7 hours
  f0700999: 'stuck, China, Chengdu', // CheckForAcceptance: about 7 hours
  f0723006: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 7 hours
  f0723162: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 7 hours
  f0724219: 'stuck, Spain, Vilanova del Cami', // CheckForAcceptance: about 7 hours
  f0726405: 'stuck, Korea, Seoul', // CheckForAcceptance: about 7 hours
  f0756207: 'stuck, Korea', // CheckForAcceptance: about 7 hours
  f0808705: 'stuck, China, Wenzhou', // CheckForAcceptance: about 7 hours
  f0810358: 'stuck, Japan, Tokyo', // CheckForAcceptance: about 7 hours
  f0822032: 'stuck, Korea, Incheon', // CheckForAcceptance: about 7 hours
  f0822203: 'stuck, Korea, Seoul', // CheckForAcceptance: about 7 hours
  f0835643: 'stuck, Korea, Songpa-gu', // CheckForAcceptance: about 7 hours
  f0839509: 'stuck, China, Beijing', // CheckForAcceptance: about 7 hours
  f0843255: 'stuck, China, Yibin', // CheckForAcceptance: about 7 hours
  f0843728: 'stuck, France', // CheckForAcceptance: about 7 hours
  f0845245: 'stuck, Korea, Busan', // CheckForAcceptance: about 7 hours

  // Busy

  f022820: 'busy, China, Guangdong', // cannot seal a sector before 783001
  f0403177: 'busy, China, Huizhou', // cannot seal a sector before 783001

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden, Eliovp', // 131072 < 5368709120
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 67108864
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 4294967296
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 536870912
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02416: 'min-size, China, Guangdong, 星际无限', // 131072 < 1048576
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 17179869184
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 8589934592
  f07998: 'min-size, China, Hangzhou, 安问', // 131072 < 17179869184
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 104857600
  f08399: 'min-size, USA, Sammamish, MiningMusing', // 131072 < 67108864
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f010088: 'min-size, NR', // 131072 < 8589934592
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010446: 'min-size, Netherlands, Angelo', // 131072 < 17179869184
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 131072 < 1073741824
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 17179869184
  f014569: 'min-size, China, Yangzhou', // 131072 < 104857600
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 4294967296
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019002: 'min-size, China, Xiamen', // 131072 < 1073741824
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 2147483648
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 268435456
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 134217728
  f020385: 'min-size, Korea, Incheon', // 131072 < 8589934592
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 8589934592
  f021716: 'min-size, New Zealand, Wellington, Info.farm', // 131072 < 536870912
  f021961: 'min-size, China, Fuzhou', // 131072 < 17179869184
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 2147483648
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 1073741824
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 8589934592
  f022399: 'min-size, China, Beijing', // 131072 < 10485760
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 133169152
  f023565: 'min-size, China, Fuzhou', // 131072 < 1536000
  f023660: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023662: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023853: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023854: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023855: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023858: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023859: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023861: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023868: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023869: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023870: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023871: 'min-size, China, Fuzhou', // 131072 < 4294967296
  f023876: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023928: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023971: 'min-size, USA, FLMiner', // 131072 < 536870912
  f023977: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023978: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023980: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023981: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024006: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024007: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024008: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024012: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024013: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024014: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024081: 'min-size, undefined', // 131072 < 1572864000
  f024084: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024085: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024136: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024146: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024147: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024148: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 4294967296
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f034701: 'min-size, China, Shenzhen', // 131072 < 134217728
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f048669: 'min-size, NR', // 131072 < 1048576
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 268435456
  f058369: 'min-size, USA, Boston', // 131072 < 536870912
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 17179869184
  f064668: 'min-size, China, Hong Kong', // 131072 < 1048576
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 104857600
  f081222: 'min-size, China, Changzhou', // 131072 < 134217728
  f083920: 'min-size, NR', // 131072 < 1573031772
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f089840: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 1048576
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 131072 < 104857600
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 268435456
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0109713: 'min-size, China, Beijing', // 131072 < 1536163840
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0118360: 'min-size, China, Hangzhou', // 131072 < 4294967296
  f0120983: 'min-size, China, Fujian', // 131072 < 268435456
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 209715200
  f0127896: 'min-size, Bulgaria, Sofia, sofiaminer', // 131072 < 536870912
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0134565: 'min-size, China, Karamay', // 131072 < 1536524550
  f0134682: 'min-size, China, Beijing', // 131072 < 268435456
  f0134991: 'min-size, China, Foshan', // 131072 < 1536163840
  f0135078: 'min-size, USA, Denver', // 131072 < 4294967296
  f0142606: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 131072 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 131072 < 260046848
  f0149444: 'min-size, Korea, Gangseo-gu', // 131072 < 1048576
  f0149765: 'min-size, China, Beijing', // 131072 < 268435456
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0158468: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0165400: 'min-size, Canada, Brampton', // 131072 < 2147483648
  f0187709: 'min-size, Russia, Moscow', // 131072 < 104857600
  f0215497: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0220827: 'min-size, NR', // 131072 < 8589934592
  f0399610: 'min-size, Ukraine', // 131072 < 5368709120
  f0401254: 'min-size, Korea, Uijeongbu-si', // 131072 < 4294967296
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0440182: 'min-size, USA, Des Moines', // 131072 < 2097152
  f0440208: 'min-size, Netherlands, Amsterdam', // 131072 < 2097152
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0455466: 'min-size, USA, Washington', // 131072 < 268435456
  f0492030: 'min-size, USA, Holmdel', // 131072 < 134217728
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 34359738368
  f0524489: 'min-size, Korea, Pocheon-si', // 131072 < 4294967296
  f0533124: 'min-size, Korea, Seoul', // 131072 < 1073741824
  f0678914: 'min-size, USA, San Diego', // 131072 < 34359738368
  f0688935: 'min-size, China, Yangzhou', // 131072 < 104857600
  f0694396: 'min-size, UK, Dudley', // 131072 < 2147483648
  f0707721: 'min-size, Netherlands', // 131072 < 67108864
  f0713585: 'min-size, Russia', // 131072 < 5368709120
  f0734051: 'min-size, Korea, Hwaseong-si', // 131072 < 2147483648
  f0773157: 'min-size, Australia, Sydney', // 131072 < 33554432
  f0838684: 'min-size, Czechia, Prague', // 131072 < 8589934592

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f02501: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f02606: 'min-ask, China, Zhejiang, DataX', // 20000000 < 122070312
  f02620: 'min-ask, Poland, Krakow, @magik6k', // 20000000 < 40283203
  f02623: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 610351562500000
  f03273: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03274: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03275: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 12207031250000000
  f03482: 'min-ask, China, Karamay', // 20000000 < 12207031250000000
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 12207031250000
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f05315: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05316: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 12207031250
  f07850: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08103: 'min-ask, China, Foshan', // 20000000 < 122070312
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // 20000000 < 610351562500000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09696: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 1220703125
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010491: 'min-ask, China, Shenzhen', // 20000000 < 1220703125
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f014394: 'min-ask, China, Suzhou, IPFSCloud', // 20000000 < 1220703125
  f014409: 'min-ask, USA, Monroe, Meatball Part III', // 20000000 < 122070312
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f017665: 'min-ask, China, Shenyang', // 20000000 < 122070312500000
  f018780:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018781:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // 20000000 < 122070312500000
  f018783:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018785:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f019041: 'min-ask, China, Zhejiang + Singapore, Zheng2', // 20000000 < 122070312
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f020378: 'min-ask, Bulgaria, Asenovgrad', // 20000000 < 122070312
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021504: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022093: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 12207031250
  f022922: 'min-ask, China, Shenzhen, CAAP-MEG', // 20000000 < 12207031250000000
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 12207031250000
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f030379: 'min-ask, Korea, Uiwang', // 20000000 < 1220703125
  f030384: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000
  f033123: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 12207031250000
  f034592: 'min-ask, NR', // 20000000 < 12207031250000000
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f040218: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f042540: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f052447: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f055123: 'min-ask, Korea, Busan', // 20000000 < 1220703125
  f056611: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f058000: 'min-ask, China, Suzhou', // 20000000 < 24414062
  f060072: 'min-ask, China, Chongqing', // 20000000 < 610351562500000
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 24414062
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079007: 'min-ask, China, Jinan', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 122070312500000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f086151: 'min-ask, China, Dongguan', // 20000000 < 122070324707031
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097370: 'min-ask, NR', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f097914: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0100116: 'min-ask, Korea, Uljin County', // 20000000 < 122070312500000
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102376: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0104671: 'min-ask, Japan, Ota-ku', // 20000000 < 1412850341
  f0107995: 'min-ask, NR', // 20000000 < 121948242187500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110944: 'min-ask, NR', // 20000000 < 61035156250000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0121450: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0126824: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0147284: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 1220703124999877929687500000
  f0151034: 'min-ask, USA, Syracuse', // 20000000 < 123291015625000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151993: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 122070190429687500000
  f0155384: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0155467: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0165135: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0216138: 'min-ask, China, Shenzhen', // 20000000 < 610351562500
  f0220632: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f0222962: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224144: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224841: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0225058: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f0232650: 'min-ask, NR', // 20000000 < 1208496093750000000000000
  f0241858: 'min-ask, China, Fuzhou', // 20000000 < 1220703124999877929687500000
  f0392734: 'min-ask, Korea, Icheon-si', // 20000000 < 122070190429687500000
  f0392785: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0396607: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0396844: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0397855: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0401677: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0406475: 'min-ask, China, Dongguan', // 20000000 < 122070312500000000
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0410701: 'min-ask, China, Changsha', // 20000000 < 61035156250000
  f0413684: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0413801: 'min-ask, China, Fujian', // 20000000 < 122070312499999999877929687500000
  f0421061: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0426531: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0426933: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0427393: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0428177: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0431665: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0432345: 'min-ask, China, Guangdong', // 20000000 < 122070312499999877929687500000
  f0449662: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456741: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0460078: 'min-ask, China, Shanghai', // 20000000 < 122070312500000000
  f0461752: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0471007: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0498920: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0503420: 'min-ask, China, Beijing', // 20000000 < 122070190429687500000
  f0511732: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0518877: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0673645: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0676048: 'min-ask, China, Hangzhou', // 20000000 < 3662109375000
  f0686111: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0689753: 'min-ask, NR', // 20000000 < 122070312500000
  f0690459: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0693008: 'min-ask, China, Shanghai', // 20000000 < 1220703125000000000
  f0705118: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0705704: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0717254: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0730266: 'min-ask, China, Chongqing', // 20000000 < 12207031250000000
  f0730353: 'min-ask, Korea, Uijeongbu-si', // 20000000 < 122070190429687500000
  f0745116: 'min-ask, China, Beijing', // 20000000 < 1220703002929687500000
  f0746542: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0749380: 'min-ask, China, Dongguan', // 20000000 < 1220703002929687500000
  f0752322: 'min-ask, USA, Watsonville', // 20000000 < 12207031250000
  f0761728: 'min-ask, China, Yichun', // 20000000 < 1220703002929687500000
  f0764041: 'min-ask, China, Dongguan', // 20000000 < 122070312377929687500000
  f0766622: 'min-ask, China, Hangzhou', // 20000000 < 12207031250000
  f0811392: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0844439: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0846681: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000

  // Slashed

  // Error

  f01314: 'error, NR', // error reading Response message from provider: stream reset
  f03345: 'error, China, Fuzhou, chh', // error reading Response message from provider: stream reset
  f07830: 'error, China, Zhongshan', // error reading Response message from provider: EOF
  f020928: 'error, China, Deyang + Singapore', // error reading Response message from provider: EOF
  f025007: 'error, Korea, Gyeonggi-do, PINBYTES-eCUBE', // error reading Response message from provider: stream reset
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.04999999997470157 FIL, balance: 0.024146610335701862 FIL): not enough funds to execute transaction
  f062937: 'error, NR', // error reading Response message from provider: EOF
  f063869: 'error, NR', // error reading Response message from provider: EOF
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.20017571550261341 FIL, balance: 0.799087119734320102 FIL): not enough funds to execute transaction
  f082635: 'error, NR', // failed to complete data transfer: deal data transfer failed: 12D3KooWSrVTGNQP7UaXJYB8r6a2bfEcHzt2gnrHrrqwu5zYK1AD-12D3KooWRFCAN9smEuacnJ4TeKACRDU2SCUuy11G5TBQCpnVskHo-1621582226593541286: after 4 consecutive restarts failed to transfer any data
  f094901: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999990905664 FIL, balance: 0.17204379632953801 FIL): not enough funds to execute transaction
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999954885278 FIL, balance: 0.115573702739662079 FIL): not enough funds to execute transaction
  f0108979: 'error, Korea, Bupyeong-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999999032646 FIL, balance: 0.051582459639460787 FIL): not enough funds to execute transaction
  f0109901: 'error, China, Huludao', // error reading Response message from provider: stream reset
  f0110804: 'error, USA, Santa Clara', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999939298695 FIL, balance: 0.047585116707062544 FIL): not enough funds to execute transaction
  f0111885: 'error, Korea, Bucheon-si, WINNERS', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999980564636 FIL, balance: 0.188092423951643212 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999946013504 FIL, balance: 0.055820267418463221 FIL): not enough funds to execute transaction
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999954045257 FIL, balance: 0.163757087012727163 FIL): not enough funds to execute transaction
  f0129805: 'error, China, Zhejiang + Australia, Adelaide', // deal failed: (State=26) no such proposal
  f0130912: 'error, China, Hong Kong', // failed to complete data transfer: deal data transfer failed: 12D3KooWSrVTGNQP7UaXJYB8r6a2bfEcHzt2gnrHrrqwu5zYK1AD-12D3KooWBtqhxFAqHUJnURKG66qFNYZHER4LkNy5rRN4w2o4qZN1-1621582226593541289: after 4 consecutive restarts failed to transfer any data
  f0137489: 'error, UK, Deeside', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999984168944 FIL, balance: 0.015256167046968852 FIL): not enough funds to execute transaction
  f0146751: 'error, China, Jiangsu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.99999999999989922 FIL, balance: 0.124884421850587082 FIL): not enough funds to execute transaction
  f0151371: 'error, NR', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.069999999993275264 FIL, balance: 0.051290235531253546 FIL): not enough funds to execute transaction
  f0155687: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999971555119 FIL, balance: 0.007750567532626106 FIL): not enough funds to execute transaction
  f0156452: 'error, Korea, Ulsan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.05589896230128149 FIL, balance: 0.948676189990640177 FIL): not enough funds to execute transaction
  f0221135: 'error, USA, Atlanta', // error reading Response message from provider: stream reset
  f0225676: 'error, Korea, Guro-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999999355595 FIL, balance: 0.432865372136503294 FIL): not enough funds to execute transaction
  f0228712: 'error, USA', // error reading Response message from provider: stream reset
  f0241022: 'error, Korea, Geumcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999985282715 FIL, balance: 0.086445698620825264 FIL): not enough funds to execute transaction
  f0402431: 'error, China, Hangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999964143572 FIL, balance: 0.048297688965882951 FIL): not enough funds to execute transaction
  f0405129: 'error, China, Fujian', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.080122701749156632 FIL, balance: 0.505391210063331454 FIL): not enough funds to execute transaction
  f0409069: 'error, NR', // error reading Response message from provider: stream reset
  f0410023: 'error, NR', // error reading Response message from provider: stream reset
  f0461791: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999975772545 FIL, balance: 0.38480168515244323 FIL): not enough funds to execute transaction
  f0488888: 'error, China, Nanchang', // error reading Response message from provider: EOF
  f0508328: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: CallWithGas failed: computing tipset state: failed to build receipts amt: array set failed to set index 8 in root &{0 8 {[255] [] [0xc06af4e400 0xc06af4e420 0xc06af4e440 0xc06af4e460 0xc06af4e580 0xc06af4e5a0 0xc06af4e5c0 0xc06af4e5e0] [] [0xc06af4e400 0xc06af4e420 0xc06af4e440 0xc06af4e460 0xc06af4e580 0xc06af4e5a0 0xc06af4e5c0 0xc06af4e5e0] []} 0xc06af4e1e0}: failed to put block in badger blockstore: Unable to write to value log file: "/home/ipfsunion/.lotus/datastore/chain/000669.vlog": write /home/ipfsunion/.lotus/datastore/chain/000669.vlog: no space left on device
  f0512170: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999955420673 FIL, balance: 0.406441323355872338 FIL): not enough funds to execute transaction
  f0512179: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999998810542 FIL, balance: 0.02337722784905694 FIL): not enough funds to execute transaction
  f0513351: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999988378655 FIL, balance: 0.046060475836710078 FIL): not enough funds to execute transaction
  f0514737: 'error, Korea, Busan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.05432532369325856 FIL, balance: 0.654245777606102677 FIL): not enough funds to execute transaction
  f0673920: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.255946135 FIL, balance: 0.235479499038328329 FIL): not enough funds to execute transaction
  f0674600: 'error, NR', // deal failed: (State=26) error calling node: reserving funds: failed to sign message: Don't allow transfer from f3vmhcs4luq7izg2etu2nhdafo6dbecidyghfj7v3ench2jwozo56g2bkqphrug7ividek7zewiuv62evyf7dq to f05 : Does not exist in the whitelist.
  f0751590: 'error, USA', // error reading Response message from provider: EOF
  f0754373: 'error, Netherlands, Rijssen', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f0758390: 'error, USA, Phoenix', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999971228034 FIL, balance: 0.049913003273117752 FIL): not enough funds to execute transaction
  f0805872: 'error, China, Hangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.089843313044860168 FIL, balance: 0.411729214072574874 FIL): not enough funds to execute transaction
  f0813086: 'error, Korea, Jung-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.084471337374908224 FIL, balance: 0.787765092275075486 FIL): not enough funds to execute transaction
  f0816232: 'error, Korea, Seoul', // failed to complete data transfer: deal data transfer failed: 12D3KooWSrVTGNQP7UaXJYB8r6a2bfEcHzt2gnrHrrqwu5zYK1AD-12D3KooWAzZvcoxPsnw35dYrUqPHbjA1E36HFifsidjqZPdFjkBB-1621582226593541332: after 4 consecutive restarts failed to transfer any data
  f0839767: 'error, Korea, Suwon', // failed to complete data transfer: deal data transfer failed: 12D3KooWSrVTGNQP7UaXJYB8r6a2bfEcHzt2gnrHrrqwu5zYK1AD-12D3KooWDcXp31C52k3GqW98ZmRhH4uNhhokQKGommGuKu2k6pdz-1621582226593541418: after 4 consecutive restarts failed to transfer any data
  f0846716: 'error, USA, Santa Clara', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999992933688 FIL, balance: 0.004341875459991126 FIL): not enough funds to execute transaction

  // Dial backoff

  f03249: 'backoff, China, Yunfu',
  f09675: 'backoff, USA',
  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f050022: 'backoff, China, Changsha',
  f058374: 'backoff, NR',
  f089767: 'backoff, USA, Bowie',
  f0101069: 'backoff, NR',
  f0145385: 'backoff, Malaysia, Petaling Jaya',
  f0159649: 'backoff, NR',
  f0514241: 'backoff, NR',
  f0751831: 'backoff, NR',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01154: 'rejected, NR',
  f01289: 'rejected, China, Ningbo', // no online
  f02301: 'rejected, USA',
  f02303: 'rejected, Singapore',
  f02423: 'rejected, Ukraine, Kyiv', // no online
  f02528: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02609: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08197: 'rejected, China, Foshan',
  f09642: 'rejected, Sweden, Alvsjo',
  f010035: 'rejected, Netherlands + China, Suzhou',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010241: 'rejected, China, Beijing + USA, Portland, 6Block-P', // no online
  f010405: 'rejected, China, Foshan',
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // no online
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // no online
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f014699: 'rejected, NR',
  f016563: 'rejected, China, Deyang + Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f017229: 'rejected, China, Sichuan',
  f019824: 'rejected, USA', // proposed provider collateral below minimum: 34021262850 < 37103417021
  f020315: 'rejected, China, Guangzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q<nil>
  f021255: 'rejected, Netherlands + China, Suzhou',
  f021444: 'rejected, China, Shanghai', // no online
  f021536: 'rejected, NR', // getting client market balance failed
  f021714: 'rejected, China, Hong Kong',
  f022072: 'rejected, China, Jieyang',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f022832: 'rejected, China, Beijing',
  f022853: 'rejected, China, Fuzhou',
  f023013: 'rejected, NR', // no online
  f023179: 'rejected, China, Fuzhou', // sh: 1: f3rthootwyykyrhrxy3u3eihhxch7q5q7tlmzsxtlxuqwxcl2yvyjsjhrz5g37cjdhdufxm2qhyewt2dufasdf: not found
  f023462: 'rejected, China, Chongqing',
  f023534: 'rejected, China, Chongqing',
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, NR',
  f023985: 'rejected, China, Chongqing',
  f024468: 'rejected, China, Shenzhen', // no online
  f029490: 'rejected, NR',
  f029649: 'rejected, China, Beijing',
  f032888: 'rejected, China, Weifang',
  f034258: 'rejected, China, Mianyang',
  f035436: 'rejected, China, Jiangsu', // no online
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f042391: 'rejected, China, Fuzhou', // no online
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f053140: 'rejected, China, Shenzhen',
  f056226: 'rejected, NR',
  f056573: 'rejected, China, Sichuan', // no online
  f065174: 'rejected, NR', // no online
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f066781: 'rejected, China, Beijing',
  f066790: 'rejected, China, Beijing',
  f068528: 'rejected, China, Shanghai', // no online
  f068809: 'rejected, NR',
  f073697: 'rejected, China, Karamay', // no online
  f078899: 'rejected, NR',
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f079815: 'rejected, China, Hangzhou', // getting client market balance failed
  f081323: 'rejected, UK, Cambridge', // no online
  f083065: 'rejected, China, Taizhou', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f090387: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f094374: 'rejected, China, Nanyang', // no online
  f096974: 'rejected, China, Chongqing', // no online
  f0100066: 'rejected, NR', // no online
  f0101387: 'rejected, China, Shenzhen', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0107133: 'rejected, NR', // no online
  f0109043: 'rejected, China, Karamay', // no online
  f0109272: 'rejected, China, Dongguan', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112679: 'rejected, NR', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116436: 'rejected, Singapore',
  f0116445: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0118317: 'rejected, Singapore',
  f0118330: 'rejected, Singapore',
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0124036: 'rejected, China, Nanchang', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0132461: 'rejected, Korea, Daegu', // no online
  f0134516: 'rejected, Singapore',
  f0134518: 'rejected, China, Guangdong',
  f0143928: 'rejected, China, Beijing',
  f0146301: 'rejected, China, Shenzhen', // no online
  f0147565: 'rejected, China, Shenzhen',
  f0149026: 'rejected, China, Shenzhen',
  f0151629: 'rejected, NR', // no online
  f0152712: 'rejected, NR', // no online
  f0152943: 'rejected, NR', // sh: 1: jq: not found
  f0153176: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0154039: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0162385: 'rejected, China, Beijing',
  f0164291: 'rejected, China, Fujian', // no online
  f0169153: 'rejected, China, Chengdu',
  f0214631: 'rejected, Korea, Seoul', // no online
  f0216849: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0218293: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0222674: 'rejected, China, Quinzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0224984: 'rejected, China, Wuhan', // no online
  f0226324: 'rejected, China, Guangxi', // getting client market balance failed
  f0228575: 'rejected, Canada, Calgary', // no online
  f0239688: 'rejected, China, Beijing',
  f0242420: 'rejected, NR', // no online
  f0364957: 'rejected, China, Sichuan', // getting client market balance failed
  f0364982: 'rejected, Korea, Seoul', // no online
  f0364983: 'rejected, Korea, Seoul', // no online
  f0391143: 'rejected, China, Shanghai', // getting client market balance failed
  f0392458: 'rejected, China, Fuzhou', // no online
  f0395462: 'rejected, Korea, Daegu', // no online
  f0397052: 'rejected, NR', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0401135: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0401303: 'rejected, Korea, Ulju-gun', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0401416: 'rejected, Japan, Fukuoka', // no online
  f0402371: 'rejected, China, Shanghai', // miner is not accepting unverified storage deals
  f0423381: 'rejected, Korea, Seoul', // no online
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0435045: 'rejected, Korea, Ulju-gun', // no online
  f0444122: 'rejected, NR',
  f0456374: 'rejected, NR', // no online
  f0463143: 'rejected, NR', // no online
  f0470972: 'rejected, China, Shanghai', // no online
  f0471691: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0475664: 'rejected, China, Zhejiang', // no online
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0485876: 'rejected, China, Changchun', // no online
  f0492474: "rejected, China, Xi'an", // no online
  f0497031: 'rejected, China, Shangrao',
  f0510610: 'rejected, China, Shangrao',
  f0513878: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0516456: 'rejected, Korea, Jung-gu', // no online
  f0517213: 'rejected, NR',
  f0522099: 'rejected, China, Shangrao',
  f0522364: 'rejected, NR',
  f0678845: 'rejected, China, Zhengzhou', // no online
  f0687206: 'rejected, China, Hangzhou', // no online
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0709366: 'rejected, China, Hangzhou', // no online
  f0713736: 'rejected, NR', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0722658: 'rejected, China, Chengdu', // no online
  f0723538: 'rejected, China, Handan', // no online
  f0723827: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0726677: 'rejected, Korea, Jung-gu', // no online
  f0727067: 'rejected, Norway', // miner is not accepting unverified storage deals
  f0753569: 'rejected, China, Beijing',
  f0761358: 'rejected, China, Chengdu', // sh: 1: jq: not found
  f0813083: 'rejected, Korea, Jung-gu', // no online
  f0816782: 'rejected, Korea, Jung-gu', // no online
  f0816783: 'rejected, Korea, Jung-gu', // no online
  f0827006: 'rejected, China, Xuzhou', // no online
  f0836164: 'rejected, USA', // no online
  f0840770: 'rejected, USA, Dallas', // no online
  f0842485: 'rejected, Korea, Seoul', // no online

  // Fail

  f01012: 'fail, China, Guangzhou + Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFLQGbLNFnsPgpNrF4e1gKCACTY7jQoVyRjQVYioR84UB: all dials failed  * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:39773->43.230.90.191:8888: i/o timeout  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:39773->183.60.252.190:8888: i/o timeout
  f01155: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMUvqQ2gKwb8YCM1GKZgcQCVsRAMH97BjzQoN9he91jDo: all dials failed  * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:39773->203.107.44.156:39770: i/o timeout
  f01235: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZtCEjeef1Ud7Knw3wmyutuS9nMQ8EiYNvbB5caM1X1F: all dials failed  * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:39773->170.33.12.95:16668: i/o timeout
  f01248: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXxUMb8H3o52vUKvSkdU8AYgdAXEcZKLUx5gvGsowZz8: all dials failed  * [/ip4/128.1.78.100/tcp/31432] dial tcp4 0.0.0.0:39773->128.1.78.100:31432: i/o timeout
  f01279: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARjz8p5k2FbtUAxTNfmMxam7hGn7X9FeD7Yh1KgfuAhK: all dials failed  * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:39773->118.116.2.66:40000: i/o timeout
  f01287: 'fail, China, Jiaxing, MaiTian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQd43HScS7iBzsggGyoE5yrXAeCcfAqhrB4NrsQX7otw: all dials failed  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:39773->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:39773->122.225.68.92:5472: i/o timeout
  f01475: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD6dMSKHegPtnZvhC8ToQHPQEE4kZRxNK6uZv4Dk8nBG: all dials failed  * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:39773->170.33.12.186:17031: i/o timeout
  f01782: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAECESUksm2HVdjSY7X1DpDD9dhPHXN8JuRdyGHcky5ox: all dials failed  * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:39773->139.196.240.164:11347: i/o timeout
  f01799: 'fail, China, Jinan + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ: all dials failed  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:39773->222.175.139.190:63208: i/o timeout  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:39773->195.123.237.226:62333: i/o timeout
  f01800: 'fail, China, Shenzhen + Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKpE8ej5zhZ8JBnwEsf3fTy73VBUwaHY8QZcz18Rtmrqr: all dials failed  * [/ip4/182.131.4.48/tcp/33333] dial tcp4 0.0.0.0:39773->182.131.4.48:33333: i/o timeout
  f02299: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratp7oKx1VPMGZY5xeukYMmKPuxKo92sjsHsx6KSbTE: all dials failed  * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:39773->182.18.83.2:1024: i/o timeout
  f02388: 'fail, Netherlands, Amersfoort, Kroketje', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02399: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC7yypF934jidmNmdsG6rtTG2NunaqhdHyJ8yPhtCeubX: all dials failed  * [/ip4/10.1.25.155/tcp/23456] dial tcp4 0.0.0.0:39773->10.1.25.155:23456: i/o timeout  * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:39773->175.24.25.61:44449: i/o timeout
  f02403: 'fail, UK, London + Manchester', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMj9PnQDUCVunSoYrkbxhLV2rjK8bKBLQML3sCvpPcN8B: all dials failed  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:39773->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:39773->2.58.47.71:18888: i/o timeout
  f02405: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyXVY9WLfATgPPtJ2wB6T44MachjCV7jNRAmDXs2ZKoP: all dials failed  * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:39773->192.168.231.206:4123: i/o timeout
  f02417: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCqGULDJFYkgTYvmzToQA4gTMGwV3ZpfkDgrnjXY6suRS: all dials failed  * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02420: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLarDsiyUrxyyAESiMZbmU1kTrcXhLfUw7yU42JeWY8Ad: all dials failed  * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:39773->47.252.2.93:34571: i/o timeout
  f02421: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f02422: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLq2Q9mQ8tNynijNfNJj1K7UTUPZKfr5iWXspd617yLo: all dials failed  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:39773->117.38.4.82:22347: i/o timeout
  f02425: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7wNHxKjxN5CGMGdTLh1VRwxru9cuR7353pPHvCBJ6H: all dials failed  * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:39773->103.78.229.73:14567: i/o timeout
  f02438: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMrDPhKaMeJFenXRFd4Rb9Zt111CBY7uY6AoZ93MTbLHw: all dials failed  * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:39773->47.115.10.99:14567: i/o timeout
  f02492: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExafiDYdEKRvWWTRMfZC7t7YzqMmfJDEcp86BXC27TTJ: all dials failed  * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:39773->103.142.248.7:3347: i/o timeout
  f02503: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvy6gDEmVj8P6rE5HvzSyZzXkeezu6EV3nDcNpDG142T: all dials failed  * [/ip4/8.209.71.125/tcp/31432] dial tcp4 0.0.0.0:39773->8.209.71.125:31432: i/o timeout
  f02529: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc: all dials failed  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:39773->8.209.64.163:23004: i/o timeout  * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:39773->101.206.156.202:23004: i/o timeout
  f02610: 'fail, Netherlands', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMnLT8D5yNAdEQbt2fXHFhUVQT2crdGLVktpSo7RCXtnk: all dials failed  * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:39773->213.227.129.197:14567: i/o timeout
  f02613: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHE6LnRd5b8GdWaCAfBz5NQhq4uZafybStUnYeabgwRB: all dials failed  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:39773->8.209.64.163:23027: i/o timeout  * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:39773->101.206.156.202:23027: i/o timeout
  f02614: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE6JfBTMyjirNPSRi4AfZjCseRHGzXZvXUmKMsdHViyif: all dials failed  * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:39773->170.33.9.50:32633: i/o timeout
  f02622: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02625: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f02654: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGPpw5iYy388qzkZL4qmJR6RoUQfbUQS5kDz7sDfEVuwJ: all dials failed  * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:39773->114.88.222.181:43355: i/o timeout
  f02721: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNNUguf8bGe72cudmWpKobV3Pkkc9Lx3GBDG2AEfDZN9L: all dials failed  * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:39773->135.90.74.200:14567: i/o timeout
  f02723: 'fail, China, Tongling', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvwbbdLgBbuQ3MPPN7gos8XEXekTJxW5NX4DMCfXNUoZ: all dials failed  * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:39773->60.173.23.17:23456: i/o timeout
  f02725: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9ygexQt5zAMg1jLPbb3g4fgYfKHZKNcviMxXJk4UJAMX: all dials failed  * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:39773->101.32.38.57:18899: i/o timeout
  f02726: 'fail, USA, Brooklyn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4dsPm97xGtEaCSuH4k6uWtrH3A1kH1tKpBejDTPATrK: all dials failed  * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:39773->169.62.51.212:14567: i/o timeout
  f02731: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND88xcsZCdYNSUkqy35ikLpMaDpPMKse1mmMAZrFQyD6: all dials failed  * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:39773->10.30.8.4:14567: i/o timeout
  f02767: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQotzkhoCXR7hSo5FMrrsHhYh8q7KSXHx85oZkFd3B8Pg: all dials failed  * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:39773->18.192.27.227:37722: i/o timeout
  f02769: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02770: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02775: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02778: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02838: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwvGx979vAyPA9gSyCcZ5xdLyi25WrJMikiYUG3sdton: all dials failed  * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:39773->118.123.228.9:48633: i/o timeout
  f02856: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03000: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03002: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwqepwZRwQPyBew1FWZo7BvQ6tTP3nyjG8skVU9uWEwL: all dials failed  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:39773->8.209.64.163:18880: i/o timeout  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:39773->101.206.156.202:18880: i/o timeout
  f03134: 'fail, China, Cangzhou, QiaoMu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2: all dials failed  * [/ip4/111.161.72.108/tcp/4913] dial tcp4 0.0.0.0:39773->111.161.72.108:4913: i/o timeout
  f03144: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMK8Vg4SH5Wsrvp76JpJvwiuxdXpRyPrWa76Jrj6K4tc: all dials failed  * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:39773->103.214.41.38:23456: i/o timeout
  f03176: 'fail, USA, San Mateo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPDyDeAQWj4kSEkVog1NAHJVu9cWpur3uGzH8H92THWPp: all dials failed  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:39773->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:39773->47.88.57.241:15470: i/o timeout
  f03266: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTVB3ued6YhMdyJ2qoQ6cKkVE7pPbfmETAmz61dz8cDj: all dials failed  * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:39773->169.63.27.151:14567: i/o timeout
  f03287: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLKQae57X1Wh9afjjBZbujq6qS53GdNbLULuyMARgxPC: all dials failed  * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:39773->149.81.122.165:14567: i/o timeout
  f03325: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMY9qD6HqyujzkBMXZFUiVLUjYhL89fF6nexr8T4KS8Mf: all dials failed  * [/ip4/113.107.201.186/tcp/42243] dial tcp4 113.107.201.186:42243: connect: connection refused
  f03328: 'fail, China, Xinxiang, Golden Miner', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ3c9CscaFyBbZcVYreTDCQAttS4g5NxomEDiSV7ZHStV: all dials failed  * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:39773->27.50.142.61:2347: i/o timeout
  f03344: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03358: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAR2DxhxHGbXYBGL5qEawVpYdmRiTE4SxnzcFGVN4Vz3: all dials failed  * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:39773->1.183.72.211:30001: i/o timeout
  f03363: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUoRxEMinMJFfr98yF9UCnakRWRJPPN843BCpVoyiZtw: all dials failed  * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:39773->1.183.72.210:30003: i/o timeout
  f03367: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSxtJbCSV1BFbbGoNKiY7tYue55KfaSS71QTYHhpsGXnm: all dials failed  * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:39773->8.209.99.1:14567: i/o timeout
  f04443: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDact5w85YfxchLRcyhhZ2AA9u98PLByXX76Lu5j5VAjS: all dials failed  * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:39773->116.229.183.166:29847: i/o timeout
  f05317: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07749: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHCmBXqAxXSQbarrmKFLwPPTuaSxt84XjLPNha36viNXL: all dials failed  * [/ip4/10.133.13.111/tcp/32759] dial tcp4 0.0.0.0:39773->10.133.13.111:32759: i/o timeout
  f07919: 'fail, China, Beijing, Shanghai, Hunan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbtaEAHPhVBuGoQtdnPxFfuKZ7axSiCFeNxuYgQGQYFx: all dials failed  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:39773->139.196.136.126:23456: read: connection reset by peer  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:39773->101.32.198.186:23456: i/o timeout  * [/ip4/47.101.4.131/tcp/23456] dial tcp4 0.0.0.0:39773->47.101.4.131:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:39773->101.32.198.187:23456: i/o timeout
  f07969: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUXofzyD12vD1rWnNi9coXTtUqc188pNo2r7sNSgTBYQ: all dials failed  * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:39773->121.52.246.48:5002: i/o timeout
  f08091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF2fkifBQNtVh9LwQC9m1MvgTTdLVHAezSxATrze3aK25: all dials failed  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08094: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRdbaruzV1FLSxZAriWDwHcYPteXyAPdtNaMkx7MMyRwr: all dials failed  * [/ip4/183.2.154.179/tcp/23450] dial tcp4 0.0.0.0:39773->183.2.154.179:23450: i/o timeout
  f08101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGjb3T4GLL7LXjfahBiaxRJDw2tu3ps42jYM4HcMTJ5P6: all dials failed  * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:39773->192.168.3.11:32759: i/o timeout
  f08148: 'fail, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJRifXRHkLaHN8JgPxy6LDmn5JyDaBxqnKLEgZur3S8ZX: all dials failed  * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:39773->103.108.182.27:30031: i/o timeout
  f08242: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPWTxHrJdASejkyzHjU7f3XVECGWSmJFCy9SL65Dcutg: all dials failed  * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:39773->47.242.56.117:6789: i/o timeout
  f08264: 'fail, China, Xianning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC4HGgmJqCZtaQzLRUSvy21GRhayGtaSES536Ug7mxpqf: all dials failed  * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:39773->103.222.191.115:1161: i/o timeout
  f09002: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEFKcY5USt22uCrNLj6McbDAtkJZRF7ns5atGS8M3rio: all dials failed  * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:39773->113.200.194.196:32634: i/o timeout
  f09037: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx: all dials failed  * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:39773->170.33.12.95:16666: i/o timeout
  f09589: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRjq7kAJiXKBvGwXvPbV7ypGZjagQCUcgGztFJFQsWJQi: all dials failed  * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:39773->175.10.162.119:5472: i/o timeout
  f09620: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP: all dials failed  * [/ip4/58.57.65.80/tcp/9620] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP, but remote key matches 12D3KooWCJNkcQyGvpnjtEFt2NRc9e2Q6WoLS9mpapgS2FoxXDkr
  f09652: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAap3GmuBww6k7oYMLvQeoVVstVFmQaLqThfM9ZFtDqT: all dials failed  * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:39773->170.33.9.50:32632: i/o timeout
  f09693: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f09710: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMceygoywUMfKmgMsESpZwsbALV11E3oUjdoC7iqDbQbr: all dials failed  * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:39773->103.44.253.56:40573: i/o timeout
  f010010: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFkqc9zsSd1tU9Xp6BN3Kiax5XAbmPcrSEYANZ394QPvk: all dials failed  * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:39773->61.177.78.101:9981: i/o timeout
  f010048: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWErRVHN36TpgVcDrKt5d1wZm8j649cGk29zcYSmxus86u: all dials failed  * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:39773->124.78.146.207:65500: i/o timeout
  f010056: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b: all dials failed  * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:39773->8.209.82.79:14567: i/o timeout
  f010202: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010225: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwpsvnPsPhoDLLbdkm3tVJaAkxYWzp43H9F5rfESaHun: all dials failed  * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:39773->8.209.107.150:12312: i/o timeout
  f010247: 'fail, China, Yantai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLszEHE9KZT2ZBBhNSW4RheKixHT3Bk1GVdhBxwEYYDbS: all dials failed  * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:39773->122.14.201.169:10240: i/o timeout
  f010399: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT: all dials failed  * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:39773->183.2.154.156:36699: i/o timeout
  f010400: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSPCJCC4kZKxze4Q8u6NWVPQb3wnXrDvbC42bbV1xjzMA: all dials failed  * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:39773->59.44.27.130:8787: i/o timeout
  f010424: 'fail, Australia, Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGVTP3jL5Gg5YPR7Q8j3RexRDgprF9EvrP4giafV956F: all dials failed  * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:39773->43.241.189.214:39438: i/o timeout
  f010501: 'fail, China, Hangzhou, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWETA15epWhb2LReibLRuj6RdhBUvJjpypUNNtmbVFEUs7: all dials failed  * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:39773->183.134.218.26:21735: i/o timeout
  f010538: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTRhvSg4viFHbzoHndBo4riNU5psWY37SxytqhA3cYd5: all dials failed  * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:39773->8.209.107.150:12320: i/o timeout
  f010558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPVTXRdvb1YsvzAEEzTJN46j9kqcFsHNimi74uiTGw3Fy: all dials failed  * [/ip4/103.44.247.132/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPVTXRdvb1YsvzAEEzTJN46j9kqcFsHNimi74uiTGw3Fy, but remote key matches 12D3KooWKYJ1A5GjHbpAncd4589DqDphAk547YdPfv3bmYbwBB91
  f010616: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSWbS5Ba3SkWFdYyHPXKFZDb6kBPvQCzV7CyGNEo2iAXR: all dials failed  * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:39773->8.209.107.150:12313: i/o timeout
  f014233: 'fail, China, Shanghai + USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDokWdGQazetL7NAPQZAxAuy225tvYhxQuckt61S8RnwZ: all dials failed  * [/ip4/114.88.73.108/tcp/45455] dial tcp4 0.0.0.0:39773->114.88.73.108:45455: i/o timeout  * [/ip4/47.241.72.105/tcp/45455] dial tcp4 0.0.0.0:39773->47.241.72.105:45455: i/o timeout
  f014251: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQxfYwV563URu95cLTVf6ogdTMTFdwB5CQKFFHPatPfU4: all dials failed  * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:39773->58.220.66.66:46166: i/o timeout
  f014311: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ: all dials failed  * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:39773->162.62.55.44:12309: i/o timeout
  f014335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014386: 'fail, China, Panzhihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9S1GMd9SqrpLxLJqrp5ekWKCFnx11vsUj1eagFA4p4d: all dials failed  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:39773->180.149.130.16:9845: i/o timeout
  f014392: 'fail, USA + Russia, Khabarovsk + Japan, Heiwajima', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc: all dials failed  * [/ip4/92.223.72.130/tcp/9999] failed to negotiate security protocol: unexpected EOF  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:39773->172.247.228.122:9999: i/o timeout  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:39773->66.42.38.110:9990: i/o timeout
  f014395: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY: all dials failed  * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
  f014415: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNM14sFqpmsSAW752NdjvpCxcEGhpTtFNntEW9zjvboT3: all dials failed  * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014487: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPU3eNG2UMTksa3n5YbJGKTNv6R2YstxeTfKSWQduwwpx: all dials failed  * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:39773->47.241.59.58:45455: i/o timeout  * [/ip4/114.88.73.108/tcp/35353] dial tcp4 0.0.0.0:39773->114.88.73.108:35353: i/o timeout
  f014522: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKnwHakHiXkurxFTFVi4DTDkGftHzP6sh1khwHPPwcPjo: all dials failed  * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:39773->81.68.170.164:5474: i/o timeout
  f014686: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014706: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg: all dials failed  * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:39773->8.209.107.150:12308: i/o timeout
  f014778: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrw43ktH6n1YZ7qqWJw4ijBBD7Zc3iy6AcMktnxM7gVY: all dials failed  * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:39773->162.62.55.44:12310: i/o timeout
  f014804: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaLA26L7fd77idyimauWSobjBkeRA3P554yFcF3Ep24N: all dials failed  * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:39773->8.209.107.150:12314: i/o timeout
  f015685: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHahEVqnoWuoSwL3ZfJnRRTBx9NDc1956W4TBoLbu1zW: all dials failed  * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:39773->222.64.141.185:40321: i/o timeout
  f015731: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvZRpw6L6ErN6WeVYeAPQLvbtAHrXjHQoogiRFVEkEhw: all dials failed  * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:39773->8.209.107.150:12329: i/o timeout
  f015734: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015747: 'fail, Japan, Setagaya-ku', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJzmRyJQAXuMx66dB3MttmocxqpKceNeBBpbdAaMgpUxz: all dials failed  * [/ip4/133.114.117.6/tcp/50319] dial tcp4 133.114.117.6:50319: connect: connection refused
  f015848: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHcMzWrWwRwKTekVWyEYipSgmYzRSzkLuRxdLJPXMY6DT: all dials failed  * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:39773->8.209.107.150:12321: i/o timeout
  f015877: 'fail, China, Jiaxing + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015885: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015919: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAp28a2tL2vCae75zQXQiG5Tnf5ydgwVLNnztZ4sMgfst: all dials failed  * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:39773->8.209.107.150:12316: i/o timeout
  f015922: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaa2ZnPvxDGHPSr6R1oHSfDxJjBLc6mecMCPNcSzhgLz: all dials failed  * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:39773->162.62.55.44:12317: i/o timeout
  f015925: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMPTWy68Cpoy7YzGrWE5oJhDmZQ7wqzfaocv8w5eNsLit: all dials failed  * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:39773->8.209.107.150:12318: i/o timeout
  f015926: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGsaBTVoaXyJLGMtdghwdUt6eRgLzT8Y7MYTpyU2U3V6: all dials failed  * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:39773->162.62.55.44:12319: i/o timeout
  f015932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015941: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGVdc5QckTCXzDNQ7UgjpoBTUfaXoh662YnXQs281EToA: all dials failed  * [/ip4/176.37.167.219/tcp/1347] dial tcp4 0.0.0.0:39773->176.37.167.219:1347: i/o timeout
  f017193: "fail, China, Xi'an + Singapore", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f018538: 'fail, China, Huzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019074: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLM1TeB6wiFXdKgHPRh5W6wve8NXC13mEk3seDqVttKqg: all dials failed  * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:39773->192.168.2.55:3000: i/o timeout
  f019099: 'fail, China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPXNsG3BG7yGEBQVncw6Du279ESDyYHBX3v3kN23zSKsG: all dials failed  * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:39773->45.158.182.10:12345: i/o timeout
  f019100: 'fail, Romania, Cluj-Napoca, noisyfan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJFAe3K8ENQMmtZzSYsRoCNfvf8N3Ky15EVhCSoXjMhnP: all dials failed  * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:39773->79.119.122.118:55555: i/o timeout
  f019279: 'fail, Canada, Calgary', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ: all dials failed  * [/ip4/70.77.238.98/tcp/46717] dial tcp4 0.0.0.0:39773->70.77.238.98:46717: i/o timeout
  f019354: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYorbezhim25zw5oAaPH6hpzKajEg4qiD7QcEFTNa1vJ: all dials failed  * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:39773->128.1.78.98:31437: i/o timeout
  f019422: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019638: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPPZz5WJkMn9GG87FYy6WwNE2LseU7KDo5DEA9H4ReWPP: all dials failed  * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:39773->1.183.72.210:30005: i/o timeout
  f020330: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXPgkgXp2m35w78Bk43xTDVot5y47ewmVimnMhVkdYtx: all dials failed  * [/ip4/8.130.24.60/tcp/14567] dial tcp4 0.0.0.0:39773->8.130.24.60:14567: i/o timeout
  f020331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPsvkyYG11ibvAQ3kGmoPdPBCfxvjXjZpa9NcVVSySCj: all dials failed  * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:39773->39.101.70.154:14567: i/o timeout
  f020398: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020436: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRgBCjVvmsgJuE1VzRZ3EgSQoQtasZKAgiQ7zQN2J49N5: all dials failed  * [/ip4/111.192.80.30/tcp/24002] dial tcp4 0.0.0.0:39773->111.192.80.30:24002: i/o timeout  * [/ip4/123.118.140.242/tcp/24002] dial tcp4 0.0.0.0:39773->123.118.140.242:24002: i/o timeout
  f020452: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAojcwZ3xQ8awhrXP4qhi7hH2Nv981JkzQyTsU83UMLkG: all dials failed  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:39773->170.33.12.186:17012: i/o timeout
  f020522: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRoWj1PymQ5oEYrRqmHozWSjFJzHTsnqVkPRRgvj52Q8n: all dials failed  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:39773->8.211.49.16:14567: i/o timeout
  f020604: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG2gh3aMiShLywLbkwB3E64KoMTuAuJvq463bGvmff51A: all dials failed  * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:39773->8.209.106.203:14567: i/o timeout
  f020618: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGHFUS8oi1qbinPV4gnuNmU8EatZkYSya7HQahTd95XqU: all dials failed  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:39773->170.33.12.186:17011: i/o timeout
  f020742: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3yEpkcFCuGh9mEwtyNY8HUxjDDWS7pkC4iGzpygdbDc: all dials failed  * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:39773->175.24.25.61:53456: i/o timeout
  f020940: 'fail, USA, Bellevue', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f020957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021461: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi6doAcsSUCDhU9EFjSJD6t6up6ko35RD3ZtTdG6rjfC: all dials failed  * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:39773->170.33.12.186:17361: i/o timeout
  f021525: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRPLVYuydRMtVtDSTEi1gpwewniZbpXZeDecSTtstfvAA: all dials failed  * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:39773->121.201.41.87:14567: i/o timeout
  f021532: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFB42PdKvKzH2bLS1tXhBjBEMbL1Arcmr8DeHE7TV2wqN: all dials failed  * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:39773->121.46.237.2:23456: i/o timeout
  f021547: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJhmH6Zj4SuNdNrXAThjLcoM1NzDTRuys5rr85ukfoRd7: all dials failed  * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:39773->170.33.12.186:17329: i/o timeout
  f021695: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021710: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021870: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022111: 'fail, China, Quanzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHjd2Mn9oXSg6Anuw5LtXyEtHoqsMSeK8gH495zukLjiQ: all dials failed  * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:39773->112.47.13.98:8081: i/o timeout
  f022227: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFb6Kyw9uZHyB5cN9LSr7VUajpbrE3XJoL2zDdVi6cA2x: all dials failed  * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:39773->112.30.158.226:10240: i/o timeout
  f022336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022373: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022522: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNJFQKtNKSyEx1qy2hV7N69euGbPVsutBucdP4dbfFrjL: all dials failed  * [/ip4/113.105.174.12/tcp/10000] dial tcp4 0.0.0.0:39773->113.105.174.12:10000: i/o timeout
  f022566: 'fail, China, Nanchong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQqBXoRpNnKmNvGst4qvX8n8Hfo1TUg4LATrrciWV2S3i: all dials failed  * [/ip4/221.10.143.25/tcp/32005] dial tcp4 221.10.143.25:32005: connect: connection refused
  f022687: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDMP23CasGQtJLXWXpNcqBy6ENTuzZ4jsBvyRYkgNmJBE: all dials failed  * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:39773->182.131.4.194:10080: i/o timeout
  f022804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023001: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH3zRQCDpPdZECMA4PVM9UCUxE8JffvUx9KtVsvLwpdze: all dials failed  * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:39773->192.168.1.236:34617: i/o timeout
  f023152: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ: all dials failed  * [/ip4/106.74.7.4/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ, but remote key matches 12D3KooWBZ26N9VbVLBfiutv3uADBSFjr3FM1RbNXDMz4uW37nLN
  f023198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f023200: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKV6h5S72ZzJvSVvUqoC1Q6i1eKKdYJEaKss2mbDNCnxi: all dials failed  * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:39773->175.24.25.61:13457: i/o timeout
  f023205: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSjjE2kccKuZd7nZ2wrZ82rCg9zVMp35vCgZG86H6Gvm7: all dials failed  * [/ip4/8.130.25.103/tcp/14567] dial tcp4 0.0.0.0:39773->8.130.25.103:14567: i/o timeout
  f023499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023530: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQWNyWUpMmAgh8f84bneQ5164tDUYjJkJsFWxKrC3UDDD: all dials failed  * [/ip4/47.252.15.25/tcp/55241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQWNyWUpMmAgh8f84bneQ5164tDUYjJkJsFWxKrC3UDDD, but remote key matches 12D3KooWLmissry3Smj7oSH495SWBwjCh6rQY3GWsnxJvweeZT7r
  f023561: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs912rgbTFiN7KBzjREuDXGqgG4CMDDbei1HBJ3qgvwg: all dials failed  * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:39773->103.44.247.32:40573: i/o timeout
  f023626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023627: 'fail, China, Zhongwei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023678: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023843: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024066: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjX9ZBRijeCWy8vVJhkar73WYmed1Sa137NZ3W56aHsc: all dials failed  * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:39773->182.131.4.197:10080: i/o timeout
  f024089: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9BpZhuAK5XLcTozTvCmwnCVL7BL4AisXBJgjfDBovpc: all dials failed  * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:39773->10.11.4.210:1234: i/o timeout
  f024137: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLMF5W4wheCZMaVuBe57eLV93Wx9azEJhv1mZ1BWk6Js: all dials failed  * [/ip4/8.130.25.208/tcp/14567] dial tcp4 0.0.0.0:39773->8.130.25.208:14567: i/o timeout
  f024156: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEsLDasE5cPgedsus1ps6F3aKgpPjcEANJ9LYoJTiHgct: all dials failed  * [/ip4/156.238.62.5/tcp/2345] dial tcp4 0.0.0.0:39773->156.238.62.5:2345: i/o timeout
  f024182: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z: all dials failed  * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024483: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024511: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMgkmvx3KwMPDLEw8QrSZbwhy7umbYpkhNGAg7wLgNKdM: all dials failed  * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:39773->103.44.247.137:51105: i/o timeout
  f024563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024895: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024944: 'fail, Korea, Yeongdeungpo-dong', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024972: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSK67f2i4BYCP4xjUWxhonw38WP7invh47VoUbbXT7zgR: all dials failed  * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:39773->10.30.8.211:14567: i/o timeout
  f025005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025017: 'fail, China, Hefei, 一三科技-913', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu: all dials failed  * [/ip4/175.6.250.70/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu, but remote key matches 12D3KooWHNxRAA9LvkwDt5a1oQUAqoHzVYXqwueDHo1kGDxAHMQN
  f025019: 'fail, China, Taiwan, Hsinchu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj: all dials failed  * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:39773->140.113.194.250:24002: i/o timeout
  f025044: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM5kp2XVhVakYkZEbNo86dXjxfQWDVUwVDMRBU8WhMyTB: all dials failed  * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029585: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029665: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHBddu2erdfQ6NNGgNfbzZyYaKYAm46kYPQQ1triYHDgA: all dials failed  * [/ip4/124.95.135.132/tcp/7000] dial tcp4 0.0.0.0:39773->124.95.135.132:7000: i/o timeout
  f030203: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030272: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030347: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030509: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030510: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030511: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032824: 'fail, USA, Cedar Park', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTsCNvyZr6zWvN2YtKuygfTyG5TqZfZ464472D4ZCqYd: all dials failed  * [/ip4/104.54.236.61/tcp/24001] dial tcp4 0.0.0.0:39773->104.54.236.61:24001: i/o timeout
  f032833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032913: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033025: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQF1PQe2YmFGPbFPq4SSum8WkJWYspUkBBA19G2ES522a: all dials failed  * [/ip4/59.23.202.120/tcp/23236] dial tcp4 59.23.202.120:23236: connect: connection refused
  f033130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBywLSzktYTwQvTDsdWQQK7mf2UyadHo4UPR822U4V2ex: all dials failed  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f033384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033462: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033501: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033517: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034544: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXVLz2WJA2xkJ5SYzGC1JSnenKMw6Ji3AcArgbigrsPQ: all dials failed  * [/ip4/183.131.58.134/tcp/14567] dial tcp4 0.0.0.0:39773->183.131.58.134:14567: i/o timeout
  f034545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGzwFRoHQ2PkctVAB2mNV67Yg4bJ1G84AQTNpN9y311b: all dials failed  * [/ip4/183.131.58.102/tcp/14567] dial tcp4 0.0.0.0:39773->183.131.58.102:14567: i/o timeout
  f034548: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7MPMEqCUUJMo2pszvQnR7prBnujeQuKrvaSyeeqJkCb: all dials failed  * [/ip4/183.131.58.70/tcp/14567] dial tcp4 0.0.0.0:39773->183.131.58.70:14567: i/o timeout
  f034566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034567: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034707: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034777: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035161: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035364: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f039992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f040665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042896: 'fail, China, Deyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWByGP4vQtFmERj16ttS52ifbvRzdiDUz8uyB2WxwXVSbU: all dials failed  * [/ip4/125.64.78.27/tcp/5003] dial tcp4 0.0.0.0:39773->125.64.78.27:5003: i/o timeout  * [/ip4/192.168.109.5/tcp/5003] dial tcp4 0.0.0.0:39773->192.168.109.5:5003: i/o timeout
  f043376: 'fail, Korea, Incheon', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f043929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRA6mCa3GAoAMnztMPrBHQSMgLd2pcq7XdCFXWgVyAE7N: all dials failed  * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:39773->120.232.96.38:24001: i/o timeout
  f044315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGau7GVCPBA7zFj82qgCaHukiHJhiXb2MqitVNguo4gFe: all dials failed  * [/ip4/127.0.0.1/tcp/23456] dial tcp4 127.0.0.1:23456: connect: connection refused  * [/ip4/183.136.238.136/tcp/2048] dial tcp4 183.136.238.136:2048: connect: connection refused  * [/ip4/183.136.238.136/tcp/2052] dial tcp4 183.136.238.136:2052: connect: connection refused  * [/ip4/172.16.0.10/tcp/23456] dial tcp4 0.0.0.0:39773->172.16.0.10:23456: i/o timeout
  f045505: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfhqYGvSHHhyQAdPgfHKfVYKHUt2cWycTeEMt1GEq1os: all dials failed  * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:39773->1.183.72.226:12700: i/o timeout
  f045743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045756: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f046248: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f047666: 'fail, China, Suihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTcEVBF8u3aw7U7uHvwnEQsF3BY9fpEaPrYCYKPrsVbp: all dials failed  * [/ip4/112.101.133.114/tcp/5678] dial tcp4 112.101.133.114:5678: connect: connection refused
  f048975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f048986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f049911: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053141: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054267: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054464: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdBMkc7P346VhjbYz823sUEGeQsqhCs6e1zTHC6M9WXZ: all dials failed  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054526: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054666: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCMWriKdL1S7spEtCAthnCcGvBEM6zLWTFpGxgNdyERf: all dials failed  * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:39773->36.158.255.7:1024: i/o timeout
  f055102: 'fail, Vietman, Ho Chi Minh City + China', // stream reset
  f055335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f055446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056406: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjfWgPNNiuxHwratpW5WU8mkF9zb3Q4co4TXB7mRuwdN: all dials failed  * [/ip4/221.130.79.154/tcp/1347] dial tcp4 0.0.0.0:39773->221.130.79.154:1347: i/o timeout
  f057070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBNGqopBvTEmD15SwX6JapLJ34cv9cCEoWPtUsxQpu4Z: all dials failed  * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:39773->117.71.104.68:10240: i/o timeout
  f057127: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvcvRJQHTrxjwH1NqPJnd5HnMQp1mWWzp9LHwBULp7pb: all dials failed  * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
  f057618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f057683: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058349: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f059788: 'fail, China, Zhanjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEhZ3xDvecQ7K14ByYanCewzQqufzX6P2xFaMQu64x3C8: all dials failed  * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:39773->183.2.149.76:33669: i/o timeout
  f059813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060114: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061051: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061407: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5phDUUZUiXuW5YVF7vVLuYSTsx5Shdp4sH5Ftm2pZQu: all dials failed  * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:39773->172.18.113.213:10241: i/o timeout
  f062245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062619: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBcj62i1JiSpJQG3rq8vMs5HrRfKgNP3Xh1hp893k5qYt: all dials failed  * [/ip4/115.231.84.133/tcp/14567] dial tcp4 0.0.0.0:39773->115.231.84.133:14567: i/o timeout
  f063996: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064218: 'fail, USA, Kirkland', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKjMeR4zo5dbDdmuVNBPoYUp11jbh6RuPXqge7MQZykZt: no good addresses
  f064855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064908: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065103: 'fail, USA + China, Suzhou + Guangzhou + Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN5iEA2EumZ9R2Ea496qXskZQDqhf4fXZeLCjqBVW9FxU: all dials failed  * [/ip4/47.242.68.99/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.68.99:16012: i/o timeout  * [/ip4/47.242.68.119/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.68.119:16012: i/o timeout  * [/ip4/47.242.2.41/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.2.41:16012: i/o timeout  * [/ip4/47.242.72.244/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.72.244:16012: i/o timeout  * [/ip4/47.242.78.254/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.78.254:16012: i/o timeout  * [/ip4/47.242.67.7/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.67.7:16012: i/o timeout  * [/ip4/47.242.67.107/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.67.107:16012: i/o timeout  * [/ip4/47.242.77.118/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.77.118:16012: i/o timeout  * [/ip4/47.242.71.3/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.71.3:16012: i/o timeout  * [/ip4/47.242.65.136/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.65.136:16012: i/o timeout  * [/ip4/47.242.39.102/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.39.102:16012: i/o timeout  * [/ip4/47.242.43.84/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.43.84:16012: i/o timeout  * [/ip4/47.242.70.11/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.70.11:16012: i/o timeout  * [/ip4/47.242.68.29/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.68.29:16012: i/o timeout  * [/ip4/47.242.65.177/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.65.177:16012: i/o timeout  * [/ip4/47.242.65.12/tcp/16012] dial tcp4 0.0.0.0:39773->47.242.65.12:16012: i/o timeout    ... skipping 4 errors ...
  f065113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065141: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065266: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066476: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067598: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068096: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMSQyXno4UrzArsMy22YhHRAvmzhhZKGbgAUULZCx3tB: all dials failed  * [/ip4/222.213.23.200/tcp/38999] dial tcp4 0.0.0.0:39773->222.213.23.200:38999: i/o timeout
  f068556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068560: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNABE3yaZenjaX91wM18UeiwjLMy96jFRs9tP7cYHTFy4: all dials failed  * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:39773->172.16.100.111:37929: i/o timeout
  f069391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRCdFYT9C9jwC6DHGha6wEGMhddnTaVzhNbFPK8oBNGDG: all dials failed  * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:39773->192.168.1.10:32759: i/o timeout
  f069448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070044: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU9u9dyQq369sqKHyscGqEbG3TKixJTmgSq2Ri4a88nT: all dials failed  * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:39773->47.57.185.52:12600: i/o timeout
  f070045: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070803: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070999: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071664: 'fail, China, Shangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD: all dials failed  * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:39773->10.133.8.210:32759: i/o timeout
  f073196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073552: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073844: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f077761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078465: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078621: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHo2ffY2a61PQtWTrb1U9Ku8KDwncRk3e1uCVpA3qNndT: all dials failed  * [/ip4/211.170.59.241/tcp/24001] dial tcp4 0.0.0.0:39773->211.170.59.241:24001: i/o timeout
  f079092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079197: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLV22X7z7KdMfiX31Xie9xHsi6UB8wAZ2gLf2JyQ4PuCa: all dials failed  * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:39773->172.22.20.109:10241: i/o timeout
  f079370: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f079425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079426: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQBg2oErr3Mx2fky471oxpmQmVggaDsGGVNqFagL27HeY: all dials failed  * [/ip4/106.74.7.6/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQBg2oErr3Mx2fky471oxpmQmVggaDsGGVNqFagL27HeY, but remote key matches 12D3KooWQtkXUECWx5MBUugczDBoDq6DJcse1m56FHLmhRkGLyHK
  f079719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080444: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080605: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081078: 'fail, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts: all dials failed  * [/ip4/220.84.94.10/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081969: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082356: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082617: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoXM8qWNsKEDyb67AmKZCnASvQspN6BLsTuRbBzY999n: all dials failed  * [/ip4/45.119.63.131/tcp/51105] dial tcp4 0.0.0.0:39773->45.119.63.131:51105: i/o timeout
  f082730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDravhMyWjyuK4TjaVaUvubwhpameXwWCuoixczAwFhsV: all dials failed  * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083638: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085710: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085735: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085777: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f086028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086204: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086222: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086572: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087256: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087879: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087890: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088125: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsq4hmpqQAfNPxLMJQfmiUA2Q1d2yqpfzVZu88GauXzT: all dials failed  * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:39773->172.22.22.101:10241: i/o timeout
  f088171: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088290: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088400: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQksh2T1XcnLj2Fjsrp8DafeLXA5DYTE79EdZunSSdWcb: all dials failed  * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:39773->172.22.22.102:10241: i/o timeout
  f089167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGBUUwC19e5cg914WheUfZmWAjcLAR8yW56vU4Mg5LgFp: all dials failed  * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:39773->172.19.108.155:10241: i/o timeout
  f089228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRaFywA6bQDMz7x1o5LpkVmjrEBpM8BWGHmrLF1Kvdfbm: all dials failed  * [/ip4/8.209.65.6/tcp/30126] dial tcp4 0.0.0.0:39773->8.209.65.6:30126: i/o timeout
  f089358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHVswzdG7ikc8WFqn6L2wVAfJQWFqKssWk3BGAHEWgbT: all dials failed  * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:39773->172.22.7.106:10241: i/o timeout
  f089551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCsDBR8rrN7Mdrpxrxpo58c2ymFGMCgWpyeM9suWpj8R: all dials failed  * [/ip4/121.40.135.72/tcp/26892] dial tcp4 0.0.0.0:39773->121.40.135.72:26892: i/o timeout
  f089819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090484: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090492: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090864: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090893: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMh6qvtA63P9fB2bQKuR68vDHm8TD3hj85zqKBNKUKmjN: all dials failed  * [/ip4/76.223.53.59/tcp/33912] dial tcp4 0.0.0.0:39773->76.223.53.59:33912: i/o timeout  * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:39773->6.143.143.121:912: i/o timeout
  f091143: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091243: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091798: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092157: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093658: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094128: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094764: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDidvy8zSZgUZabmKFXzy42g2LV7en7QYG79D3TLgAtcV: all dials failed  * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
  f094847: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095382: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpivFBnTWwf621CrbYU5YhJPJWd66wnLWCnvArSFqbYm: all dials failed  * [/ip4/125.93.73.102/tcp/2345] dial tcp4 125.93.73.102:2345: connect: connection refused
  f095970: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095998: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096064: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096077: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096087: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096133: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMTTEH1tp88nhvYAvRipkv2Do5uN3Zwf6sYZ5PBEivKQu: all dials failed  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:39773->175.6.68.154:14913: i/o timeout  * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:39773->175.6.66.78:14913: i/o timeout
  f096172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096173: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4jchbdLENPWWnb2rLPt3HosTodvebJ3eni4qAL7bqvb: all dials failed  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 0.0.0.0:39773->61.78.81.239:55555: i/o timeout  * [/ip4/61.78.81.239/tcp/11111] dial tcp4 0.0.0.0:39773->61.78.81.239:11111: i/o timeout  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 0.0.0.0:39773->61.78.81.239:44444: i/o timeout  * [/ip4/61.78.81.239/tcp/23456] dial tcp4 0.0.0.0:39773->61.78.81.239:23456: i/o timeout  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 0.0.0.0:39773->61.78.81.239:12345: i/o timeout  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 0.0.0.0:39773->61.78.81.239:22222: i/o timeout  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 0.0.0.0:39773->61.78.81.239:33333: i/o timeout  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 0.0.0.0:39773->61.78.81.239:8800: i/o timeout
  f096824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097182: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDZcnHgYqSaxf5g6EeZ1wCVLGCfHtM7ja3iqH4E1NQKja: all dials failed  * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097219: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097403: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097432: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097687: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1AdNGYDDG3J1D4ow3XnPT9vqZ4WdoZXDdEM1uWr4Zvb: all dials failed  * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f097840: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098664: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098770: 'fail, USA, Pontiac', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099247: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099369: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099387: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG5CzuwyhZ4vpEn7DCvSpmurKi2QjTRLNLKGwo44A6MRo: all dials failed  * [/ip4/124.239.180.3/tcp/24001] dial tcp4 124.239.180.3:24001: connect: connection refused
  f099705: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQjQn7oVZwMLeHFyFEvEAfuPjktyZgo6Haunp9Xi34MCf: all dials failed  * [/ip4/218.201.173.80/tcp/24001] dial tcp4 0.0.0.0:39773->218.201.173.80:24001: i/o timeout
  f099884: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099949: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNbRUwiuhnaRMRqzRXG4zAvtXvaTkbuQW2rQMZY34YEpC: all dials failed  * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0100033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100034: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101017: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101018: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnpnV8MaTxEYT7e1xCKvB8bwRSANko9wK9jDs6b5N8f3: all dials failed  * [/ip4/42.236.7.235/tcp/21001] failed to negotiate security protocol: message did not have trailing newline
  f0101019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101403: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHg2DuAH3MCXcdjhUHJGQkkj18rMizTrUGqrK8jE2JsY: all dials failed  * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0101570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102187: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102313: 'fail, Korea, Gangseo-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102641: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAnv5JtoVSUWYuZThhUYHGTAak2UwDa9d92BevuA15hfm: all dials failed  * [/ip4/124.16.8.144/tcp/23450] dial tcp4 0.0.0.0:39773->124.16.8.144:23450: i/o timeout
  f0103162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103396: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE: all dials failed  * [/ip4/60.190.243.138/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE, but remote key matches 12D3KooWJ9KC3jmmLpSk4pdrMA5Bn3VgCpvJs7QGQfXWGTVmTM2M
  f0103485: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103851: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104398: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105074: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106363: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDiRLUhWTMcRwbkognxeU1ukLgovkxj6ZdYybZQzQXACd: all dials failed  * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused
  f0106438: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107308: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR8tJtHhWPg3Sc1vpiosk3k9MjjhXpLXzxhMDRdXrnVkm: all dials failed  * [/ip4/124.95.138.6/tcp/23450] dial tcp4 0.0.0.0:39773->124.95.138.6:23450: i/o timeout
  f0107322: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107536: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvJDNfP1GYdLSZmqquRpPhwoAWpnMbZtn8oGzVjQCkyj: all dials failed  * [/ip4/60.174.118.137/tcp/25469] dial tcp4 60.174.118.137:25469: connect: connection refused
  f0107543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107656: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107753: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0107797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108672: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109040: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109309: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109606: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109743: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYvFEdMuA4GQUeN5xounAfSBSKcwh5i976nKJ1gGenRu: all dials failed  * [/ip4/58.220.66.137/tcp/10000] dial tcp4 0.0.0.0:39773->58.220.66.137:10000: i/o timeout
  f0109903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110695: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110768: 'fail, Korea, Gwangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHU6NdZNpMBZjZ7U5Jz2sBYMR5b7zyXmYNiYBCFRRrJLR: all dials failed  * [/ip4/211.223.2.211/tcp/24001] dial tcp4 211.223.2.211:24001: connect: connection refused
  f0110808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111174: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111499: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEy4PYMX2HMEnL2JEoThNZ2vaTfFyfYxpPXXc6cnSsGPr: all dials failed  * [/ip4/182.131.4.195/tcp/32762] dial tcp4 182.131.4.195:32762: connect: connection refused
  f0111584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFYYs51hFrAnZ9qjSBc6NjXtrrwVKKT6oqjgexxDxZXLH: all dials failed  * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:39773->192.168.3.14:32759: i/o timeout
  f0112593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112667: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112691: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112772: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113659: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113664: 'fail, France', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWERCyYmLBYeuSEC7ywAHdXQLu7jbpW6iZA9difuawNe9n: all dials failed  * [/ip4/178.170.47.28/tcp/24001] dial tcp4 0.0.0.0:39773->178.170.47.28:24001: i/o timeout
  f0113735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114118: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114153: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNx9sjDfaykDaZ6GS3FUQ9LNZfE4pViXufaCKeAhSZs2F: all dials failed  * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:39773->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:39773->175.6.66.78:24913: i/o timeout
  f0114333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114338: 'fail, China, Maoming', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8Q2z1wpYNC2dnDKSV6uji9ivBCVgGGt6JFgLE9cp7iz: all dials failed  * [/ip4/61.143.232.26/tcp/12888] dial tcp4 0.0.0.0:39773->61.143.232.26:12888: i/o timeout
  f0114350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115990: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur: all dials failed  * [/ip4/61.74.222.134/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L: all dials failed  * [/ip4/219.83.163.148/tcp/50666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L, but remote key matches 12D3KooWRpggHrYWrczv3N2h5AAtdVFiX5zsW1duYpnfc1C8hjLa
  f0116287: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFfHAMm4kNbBTJGDqrakZgV8Kw9Y234RddjNNTNd3GFn5: all dials failed  * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:39773->172.18.5.97:2347: i/o timeout
  f0116707: 'fail, Germany, Dusseldorf', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKrpq1UCyrRGc5MyiCJ7g5oipr3PY6nLKZq2nWictkCGb: all dials failed  * [/ip4/89.163.144.60/tcp/24001] dial tcp4 0.0.0.0:39773->89.163.144.60:24001: i/o timeout
  f0116766: 'fail, USA, Westford', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBfmSEjenJCp9XPzHbTqmUB8xshZP5FSoJXvzTUYn6m6f: all dials failed  * [/ip4/173.76.173.245/tcp/23456] dial tcp4 0.0.0.0:39773->173.76.173.245:23456: i/o timeout
  f0117146: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1wxB3gfZJGxydfCyCJzmeP2YJFTysjLfCEHv9PJ6NW9: all dials failed  * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:39773->106.12.253.240:24001: i/o timeout
  f0117211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117405: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117541: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118641: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118769: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118837: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119146: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119633: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9KSsd16NN33UvF4FTfZHkwwVXnEEvT921B2ZjnfF6JZ: all dials failed  * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:39773->183.62.138.7:12358: i/o timeout
  f0119828: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119997: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120909: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJVJznp7UR73gAUmKDe8TQhRBoGJoS5KrqWxXpPCaQPD5: all dials failed  * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0121584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121718: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122410: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122496: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123275: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123536: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124923: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125863: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126478: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126698: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126898: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127353: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127354: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127980: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128580: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128581: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128582: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128788: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128815: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129403: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130094: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130727: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130791: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130906: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131654: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131767: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132178: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132638: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132706: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133379: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133501: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133763: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133999: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNa6nuK3ysmqgPsoVYTycM3JMK23A8E4qEGAU4fo63NE8: all dials failed  * [/ip4/113.219.201.172/tcp/24001] dial tcp4 0.0.0.0:39773->113.219.201.172:24001: i/o timeout
  f0134006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJn7hDWbystnDA49NBTLjKANghNrVPLe6RqKogiwmTCuA: all dials failed  * [/ip4/10.140.8.34/tcp/32759] dial tcp4 0.0.0.0:39773->10.140.8.34:32759: i/o timeout
  f0134285: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134609: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDdsHRTxE7ZHiCAvMSSqpBm6DdiXhhuicAMG4oUqdCoAR: all dials failed  * [/ip4/127.0.0.1/tcp/1346] dial tcp4 127.0.0.1:1346: connect: connection refused  * [/ip4/183.136.236.94/tcp/1346] dial tcp4 0.0.0.0:39773->183.136.236.94:1346: i/o timeout
  f0135779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135859: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135934: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136239: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136642: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141446: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMWNQa11Kqn99QLWpZK2ibbGvdcSLv8M5vdcJ7huR54GN: all dials failed  * [/ip4/172.18.6.127/tcp/2347] dial tcp4 0.0.0.0:39773->172.18.6.127:2347: i/o timeout  * [/ip4/61.155.145.103/tcp/2347] dial tcp4 0.0.0.0:39773->61.155.145.103:2347: i/o timeout
  f0141634: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142135: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142337: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142515: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPRjsZzeZDCN28bF4sFjH9cWrtfLpGjXgeLr2bfEMfSuk: all dials failed  * [/ip4/10.4.104.10/tcp/12288] dial tcp4 0.0.0.0:39773->10.4.104.10:12288: i/o timeout
  f0142723: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqi4yZBZftta7YUBHtunGYowv7AVKXCoaRA4CZEtadnZ: all dials failed  * [/ip4/10.4.104.11/tcp/12288] dial tcp4 0.0.0.0:39773->10.4.104.11:12288: i/o timeout
  f0143032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143160: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143500: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143858: 'fail, USA, Calistoga', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvQftXwBGoquXhiJxviZ2YJnxnSYCaD8WTe8uVWvXhf2: all dials failed  * [/ip4/72.52.116.228/tcp/12350] dial tcp4 0.0.0.0:39773->72.52.116.228:12350: i/o timeout
  f0143907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRGhsq49BP7fSr84fuJZpUWe3TxEs1f2HNbeuifyWVRbH: all dials failed  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:39773->10.5.101.90:12288: i/o timeout  * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:39773->106.74.20.7:12288: i/o timeout
  f0144314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144530: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144615: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144724: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQG8mBpQNBfK8sLeJ71Di4n7hwKfW6UHxXXEW3sZZPgiC: all dials failed  * [/ip4/209.170.228.251/tcp/24001] dial tcp4 209.170.228.251:24001: connect: connection refused
  f0144756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145060: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145313: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146220: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146224: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146278: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146393: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPBraDH4aCJTMCjaZ1JBe7nDCJUioSHtkJZ6VWseSumiQ: all dials failed  * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:39773->183.2.233.3:24501: i/o timeout
  f0146428: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146875: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147586: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148143: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148269: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148391: 'fail, China, Changsha + Japan, Tokyo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150748: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150782: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0150816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150860: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151341: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'fail, China, Fuzhou + Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151487: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152563: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwo844dWRZkHcMjdGQX6TLCHqqjWaYNWRpqjNhtbMnXT: all dials failed  * [/ip4/58.43.1.82/tcp/24001] dial tcp4 0.0.0.0:39773->58.43.1.82:24001: i/o timeout  * [/ip4/192.168.1.100/tcp/24001] dial tcp4 0.0.0.0:39773->192.168.1.100:24001: i/o timeout
  f0152747: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152866: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153024: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153188: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYzvW7FieB4gDbRJMU9FRbFd3R6An7FtVBhcaK59mT2g: all dials failed  * [/ip4/218.13.93.62/tcp/5502] dial tcp4 0.0.0.0:39773->218.13.93.62:5502: i/o timeout
  f0153930: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153960: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153986: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4ngcStum65vCcnjVLEzHziUTdtNcAR4EvXu8QhBGR1H: all dials failed  * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0154152: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154294: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154865: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155258: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155515: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155983: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCiSxAQf3Hp6t1sFJdRotppHwUUBa6jQaA1bcJd4YEbJ1: all dials failed  * [/ip4/202.149.23.10/tcp/5472] dial tcp4 202.149.23.10:5472: connect: connection refused
  f0156214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156333: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157025: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157502: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157769: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157979: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHw1ytuA6ia2c2wQ7NAmSm7vStuTgeDhhKCpL7t4bY3da: all dials failed  * [/ip4/10.33.1.17/tcp/6789] dial tcp4 0.0.0.0:39773->10.33.1.17:6789: i/o timeout
  f0158156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158265: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158993: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0159067: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159380: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159632: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDPAdiHZY2J46XsioY41wEghorpiaJxjGFiR7Sru6B7pk: all dials failed  * [/ip4/10.140.8.11/tcp/32759] dial tcp4 0.0.0.0:39773->10.140.8.11:32759: i/o timeout
  f0159654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159883: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkHESE49gxVjwHSP1Pk5tXFGfAv8LuzDakUZd42SViFU: all dials failed  * [/ip4/10.133.9.111/tcp/32759] dial tcp4 0.0.0.0:39773->10.133.9.111:32759: i/o timeout
  f0159961: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160870: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNepasPf214kWmhHRTUS3GGcSgg2HzJBS2gWrnWVwdpse: all dials failed  * [/ip4/61.147.97.82/tcp/55556] dial tcp4 0.0.0.0:39773->61.147.97.82:55556: i/o timeout
  f0162183: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162394: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0163275: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164260: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166512: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166843: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0167137: 'fail, China, Shaoxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNZWmyu93EsfFKRWaunU1ykXxK1ontQcjY5nvEh29kvs: all dials failed  * [/ip4/115.239.191.45/tcp/24002] dial tcp4 0.0.0.0:39773->115.239.191.45:24002: i/o timeout
  f0167505: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSRFer5yWxcyjXWwa5FSNLZpZcNWxkfi1PqdNjh8EYuYj: all dials failed  * [/ip4/39.104.208.101/tcp/39891] dial tcp4 0.0.0.0:39773->39.104.208.101:39891: i/o timeout
  f0168537: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0199223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFnLArFiK8JWmiChXEutsTd1tGw8t5ZNciuST8FNDQ85j: all dials failed  * [/ip4/110.188.25.20/tcp/24001] dial tcp4 110.188.25.20:24001: connect: connection refused
  f0207949: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0214334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSAuVjd8bvt4cAAnTgRBREwGdC1FgNbNDD3k9cuWo8Csv: all dials failed  * [/ip4/192.168.100.203/tcp/24001] dial tcp4 0.0.0.0:39773->192.168.100.203:24001: i/o timeout
  f0215461: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJibSxo5yq7eoAH3vvKuhvrEkVxaBK28DChqjhEtJ2CwV: all dials failed  * [/ip4/103.44.253.105/tcp/12358] dial tcp4 0.0.0.0:39773->103.44.253.105:12358: i/o timeout
  f0217789: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217805: 'fail, China, Taiwan, Taipei', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS: all dials failed  * [/ip4/220.130.154.127/tcp/2348] dial tcp4 0.0.0.0:39773->220.130.154.127:2348: i/o timeout
  f0218072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218407: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSa11PfrsyKqW7wZUBXfuK9r6d2xjeeD81Be1EnzPntiz: all dials failed  * [/ip4/58.144.223.135/tcp/2347] dial tcp4 0.0.0.0:39773->58.144.223.135:2347: i/o timeout
  f0219106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220004: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222811: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222947: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223104: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223933: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0224894: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0227660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0229199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0229437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230200: 'fail, Korea, Gwanak-gu, G-mining', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqVoLFYKyjXJjR296i3ZzaUxnXu5j7NH3gKFf3kvQDcd: all dials failed  * [/ip4/175.197.30.99/tcp/46849] dial tcp4 0.0.0.0:39773->175.197.30.99:46849: i/o timeout
  f0230449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231112: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0238968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMU9goCRTFePemsze19JTJFKeNSTRQVrWUXrMMtcPY7C: all dials failed  * [/ip4/10.133.14.57/tcp/32759] dial tcp4 0.0.0.0:39773->10.133.14.57:32759: i/o timeout
  f0239251: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240035: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240185: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241764: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqoRsdJxx1zaAMFQWG3XV9Y3M3xYV1gTcU3MryCZywfa: all dials failed  * [/ip4/182.131.4.195/tcp/32800] dial tcp4 182.131.4.195:32800: connect: connection refused
  f0242156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242345: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242373: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0349810: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0364987: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0377277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391212: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBV1HZKx9vyt4tV9wEh421bU2ZFggsPVvD4jH8bCJVvR4: all dials failed  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/182.1.4.14/tcp/23450] dial tcp4 0.0.0.0:39773->182.1.4.14:23450: i/o timeout
  f0392808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR7WJ7MStK5W1vv7eEVxuzCYdUHZfoARfBVwogkszfteE: all dials failed  * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:39773->172.16.35.3:6789: i/o timeout
  f0392924: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGmQYeDiZRhAMBdmV36spYQGYLbzA11dsHYz2eXkj93Em: all dials failed  * [/ip4/10.34.1.4/tcp/6789] dial tcp4 0.0.0.0:39773->10.34.1.4:6789: i/o timeout
  f0393016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLGRUEmvdGKCi9AkHN4UbhRiubs9p1hrNCWMbyNEZNHBg: all dials failed  * [/ip4/34.66.95.149/tcp/1024] dial tcp4 0.0.0.0:39773->34.66.95.149:1024: i/o timeout
  f0393119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnobNqKiP2pSc5fA1c9BuR9G1kwPayN51ixrHeovVnWv: all dials failed  * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:39773->172.16.35.5:6789: i/o timeout
  f0393417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0394102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395459: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHME4JPRvp8zRufptxiJFoK94PT8EV99zZZfoVyc2TYv1: all dials failed  * [/ip4/59.23.140.193/tcp/40201] dial tcp4 0.0.0.0:39773->59.23.140.193:40201: i/o timeout
  f0395463: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDFj6atH9wG119bezyGp9dQ9eq1VBJsPAWdftQzf3DrQL: all dials failed  * [/ip4/14.46.214.131/tcp/40206] dial tcp4 14.46.214.131:40206: connect: connection refused
  f0395472: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKmFtP39FEaCuo3EtQaJoRFSz5qYMRaSpVAniDmrLUfQ5: all dials failed  * [/ip4/14.46.210.23/tcp/40205] dial tcp4 0.0.0.0:39773->14.46.210.23:40205: i/o timeout
  f0395680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395994: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396217: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396352: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396751: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0397083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397332: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397428: 'fail, Japan, Tokyo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKHj8ZWEa3NRZNvk5sts8Dw6sToLUi31M4kKGkyqZMbqi: all dials failed  * [/ip4/153.150.113.227/tcp/24001] dial tcp4 0.0.0.0:39773->153.150.113.227:24001: i/o timeout
  f0397561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397794: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397837: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratU2MQneMbEAL9o8kdXcRxM5RyQpU5wPsivnmJUVFa: all dials failed  * [/ip4/220.176.125.252/tcp/23450] dial tcp4 0.0.0.0:39773->220.176.125.252:23450: i/o timeout
  f0398286: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0398999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399083: 'fail, Korea, Seoul + Kwangmyong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399348: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400103: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE8zPug8tnGrJHjJ7ydxW3Xx3CaJgHr5C2JgYkeQhTR2A: all dials failed  * [/ip4/117.18.99.43/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE8zPug8tnGrJHjJ7ydxW3Xx3CaJgHr5C2JgYkeQhTR2A, but remote key matches 12D3KooWMhbstDNRup58FXy9Ur3GRvoNjYAB7kgYiQBj5kYM8wzt
  f0400264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400307: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN3wNopyr2kSic3t6TaAPAsRGF9FU5jdeGDzKDmX1qH1Y: all dials failed  * [/ip4/101.227.175.10/tcp/31347] dial tcp4 101.227.175.10:31347: connect: connection refused
  f0401287: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402233: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404643: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406478: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407244: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407410: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408582: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408717: 'fail, Korea, Ansan-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQN7ZQq8R2sizywZuP75u1hesjaTTLkQox6WdNb77gqBP: all dials failed  * [/ip4/1.224.35.165/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQN7ZQq8R2sizywZuP75u1hesjaTTLkQox6WdNb77gqBP, but remote key matches 12D3KooWKau3vkSsfbb3ngFmEt8fmGzogVUbfp4Zx7c1zuUwKXXg
  f0409172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEdvErGEyk7iwpMnJdJkWhBXjVSqKX8WgNHTWasbiwsiQ: all dials failed  * [/ip4/172.20.100.36/tcp/10241] dial tcp4 0.0.0.0:39773->172.20.100.36:10241: i/o timeout
  f0409399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0414383: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0418632: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNqenLnPxHHVwzUxTZN3SS8Ca53qY4SBaMm973X3oVy4c: all dials failed  * [/ip4/103.94.227.210/tcp/15001] dial tcp4 0.0.0.0:39773->103.94.227.210:15001: i/o timeout
  f0419311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419510: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBzsbHafdeXwkHyjRSapH5gQvgCVGmFT9auBsBgyC1KSM: all dials failed  * [/ip4/115.236.22.226/tcp/24001] dial tcp4 115.236.22.226:24001: connect: connection refused
  f0420508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKRgJFxeHjG9YjjSCrksosQrg9uT8mPDH9aBeZCVrDcQr: all dials failed  * [/ip4/10.155.8.11/tcp/32759] dial tcp4 0.0.0.0:39773->10.155.8.11:32759: i/o timeout
  f0422737: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423371: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGezDmLFS2XEmeahDvPxwPHNGHMMhz6XG3qxhQd3mjTfw: all dials failed  * [/ip6/::1/tcp/36401] dial tcp6 [::1]:36401: connect: connection refused  * [/ip4/127.0.0.1/tcp/41807] dial tcp4 127.0.0.1:41807: connect: connection refused  * [/ip4/119.167.140.133/tcp/41807] dial tcp4 0.0.0.0:39773->119.167.140.133:41807: i/o timeout  * [/ip4/192.168.110.3/tcp/41807] dial tcp4 0.0.0.0:39773->192.168.110.3:41807: i/o timeout
  f0428184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0429122: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0430101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0434411: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0435140: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLPo6bJJ2mzLWc8kXHfYyYcNBVhSYG6MtmNLWJQLpeAeS: all dials failed  * [/ip4/58.220.66.161/tcp/1024] dial tcp4 0.0.0.0:39773->58.220.66.161:1024: i/o timeout
  f0435971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436065: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441020: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441116: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441372: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441703: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449072: 'fail, Korea, Jung-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449088: 'fail, Korea, Jung-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470182: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0478563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494174: 'fail, Norway', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0498102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0498868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0501283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502948: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0506630: 'fail, China, Linyi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAbKEcHLWGs66jR818bSxuZTpCabn1ecF2s4u3kUy8bJr: all dials failed  * [/ip4/222.174.187.42/tcp/20111] dial tcp4 222.174.187.42:20111: connect: connection refused
  f0506800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0507420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0507913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511385: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515674: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0517655: 'fail, Korea, Gwangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFJm5NeNhiQL4htxCSBKsgB7uS3TZ2dZff5YNeQ1n6uFy: all dials failed  * [/ip4/121.179.79.12/tcp/55000] failed to negotiate security protocol: read tcp4 144.217.11.204:39773->121.179.79.12:55000: read: connection reset by peer
  f0518668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520262: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523396: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523711: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0536177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0592088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0602011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0646439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670491: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670902: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0671368: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0671982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0672951: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675675: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676183: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0678781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0682032: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBp35iwToBkDFKcBjtafn2QbyabmA7ysVVcpNwLqnX9U: all dials failed  * [/ip4/103.39.230.113/tcp/51105] dial tcp4 103.39.230.113:51105: connect: connection refused
  f0683965: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685231: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685539: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCL8AoMcfDSma9wxGozgyzERTs9MbofHeJLTifjHf63fN: all dials failed  * [/ip4/10.64.1.11/tcp/39875] dial tcp4 0.0.0.0:39773->10.64.1.11:39875: i/o timeout
  f0685706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0686816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0687211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688165: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0690736: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0691310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0695289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697462: 'fail, Korea, Dalseo-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700207: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702377: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0703149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSVCTrKML5F8jQcEumcU7utoM7j42VQVChK8GCZ9ke4Dy: all dials failed  * [/ip4/0.0.0.0/tcp/42545] dial tcp4 0.0.0.0:42545: connect: connection refused
  f0704898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705136: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705521: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHh5wxLbNfnGTtqX3N4JoTnj32MoBoPZwLXL4xSPhoRh: all dials failed  * [/ip4/125.122.66.43/tcp/24001] failed to negotiate security protocol: message did not have trailing newline
  f0707159: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0709896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711445: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0712676: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715707: 'fail, Japan, Yokohama', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJ1U5mXXp4GZQxvkfi24KSceiK6V9DoM3bN3iMWTGNxq2: all dials failed  * [/ip4/118.240.40.56/tcp/24001] dial tcp4 0.0.0.0:39773->118.240.40.56:24001: i/o timeout
  f0716283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717969: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFwkhRmWA7c58D9FbDxrNz555gyoSmvNHpVdzHWbzrwoN: all dials failed  * [/ip4/76.169.178.143/tcp/23789] dial tcp4 0.0.0.0:39773->76.169.178.143:23789: i/o timeout
  f0718079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0732272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL2n7opE3PS2fxEZeFqc4SCGNfFKKWzG61ijk4gBYboLa: all dials failed  * [/ip4/172.18.7.146/tcp/2347] dial tcp4 0.0.0.0:39773->172.18.7.146:2347: i/o timeout
  f0732862: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPes3er8PCSiiV2hSDBqqxj5UtH7dxmo84aYdgn7yiaHf: all dials failed  * [/ip4/127.0.0.1/tcp/40299] dial tcp4 127.0.0.1:40299: connect: connection refused  * [/ip6/::1/tcp/37339] dial tcp6 [::1]:37339: connect: connection refused  * [/ip4/124.232.154.194/tcp/40299] dial tcp4 124.232.154.194:40299: connect: connection refused  * [/ip4/192.168.3.101/tcp/40299] dial tcp4 0.0.0.0:39773->192.168.3.101:40299: i/o timeout
  f0733242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733692: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0735027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744513: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK18YecHFy5KA9kHu7uY1JYccCcesgKvCXjMgijX66GcY: all dials failed  * [/ip4/14.119.111.133/tcp/36284] dial tcp4 14.119.111.133:36284: connect: connection refused  * [/ip4/10.9.3.32/tcp/36284] dial tcp4 0.0.0.0:39773->10.9.3.32:36284: i/o timeout
  f0750779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752215: 'fail, USA, Huntersville', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752620: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0755645: 'fail, Korea, Jung-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFx323rUW6tTActLc4qB27CFKNzqDxx6Hsow4SXTHgr2n: all dials failed  * [/ip4/218.146.170.19/tcp/24001] dial tcp4 0.0.0.0:39773->218.146.170.19:24001: i/o timeout
  f0757610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0764901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0810223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813061: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818428: 'fail, China, Yichang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB5fTJhsaHNUVALvngbCqcZtfJyJfRaw2YCWwiheqvpeq: all dials failed  * [/ip4/119.36.140.201/tcp/24001] dial tcp4 0.0.0.0:39773->119.36.140.201:24001: i/o timeout
  f0826272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829506: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829836: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0832312: 'fail, USA, Auburn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyEpEwHQfVYEZCuK5jmCfK5APfvtVfXR3zMCDTCnATo4: all dials failed  * [/ip4/63.226.227.182/tcp/24001] dial tcp4 63.226.227.182:24001: connect: connection refused
  f0835613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0838467: 'fail, Korea, Incheon', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJt7236FkcMKoDsxP9DDDMZzayunW7iyVWVPVUJq9ThHp: all dials failed  * [/ip4/175.207.91.35/tcp/24001] dial tcp4 0.0.0.0:39773->175.207.91.35:24001: i/o timeout
  f0840060: 'fail, China, Changchun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD31mVVSYZcZegvMVhbAq2R2wogACR26Qbw3r8NnWxJRg: all dials failed  * [/ip4/172.168.0.118/tcp/33455] dial tcp4 0.0.0.0:39773->172.168.0.118:33455: i/o timeout
  f0841453: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0849079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found

  // Delisted

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
  f01274: 'delist, China, Guangdong', // carry-over
  f01291: 'delist, Sweden, Stockholm, tvsthlm', // carry-over
  f02304: 'delist, USA, Mountain View', // carry-over
  f02382: 'delist, China, Zhongshan-cfa', // carry-over
  f02385: 'delist, USA, East Islip', // carry-over
  f02398: 'delist, China, Hong Kong', // carry-over
  f02404: 'delist, Korea, Seoul', // carry-over
  f02424: 'delist, Korea, Wanju', // carry-over
  f02436: 'delist, Netherlands', // carry-over
  f02506: 'delist, USA, Clarksville', // carry-over
  f02515: 'delist, China, Hangzhou', // carry-over
  f02518: 'delist, China, Shaanxi', // carry-over
  f02575: 'delist, USA, Davis', // carry-over
  f02608: 'delist, USA, San Jose', // carry-over
  f02665: 'delist, Netherlands, Amsterdam, fm-ops', // carry-over
  f02666: 'delist, China, Chengdu', // carry-over
  f02668: 'delist, China, Chengdu', // carry-over
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02822: 'delist, China, Chengdu', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03224: 'delist, Ukraine, Kyiv', // carry-over
  f03225: 'delist, China, Guyuan', // carry-over
  f03264: 'delist, Korea, Bucheon-si', // carry-over
  f03269: 'delist, Australia', // carry-over
  f03319: 'delist, NR', // carry-over
  f03341: 'delist, NR', // carry-over
  f03346: 'delist, China, Huzhou, wckj', // carry-over
  f03361: 'delist, China, Guangzhou', // carry-over
  f03428: 'delist, China, Beijing + Jiaxing + Germany, Frankfurt', // carry-over
  f03487: 'delist, China, Yibin', // carry-over
  f03519: 'delist, USA, Seattle', // carry-over
  f03544: 'delist, China, Guiyang', // carry-over
  f03619: 'delist, China, Xiamen', // carry-over
  f03622: 'delist, 黑犇科技', // carry-over
  f03765: 'delist, Colombia, Medellin', // carry-over
  f04444: 'delist, NR', // carry-over
  f06262: 'delist, China, Guangzhou', // carry-over
  f07717: 'delist, China, Shenyang', // carry-over
  f07731: 'delist, NR', // carry-over
  f07772: 'delist, China, Dongguan', // carry-over
  f07796: 'delist, China, Hunan', // carry-over
  f07819: 'delist, China, Wuxi, YC--wuxi', // carry-over
  f07827: 'delist, China, Wuhan, 天际合', // carry-over
  f07843: 'delist, NR', // carry-over
  f07866: 'delist, China, Foshan', // carry-over
  f07924: 'delist, USA', // carry-over
  f07931: 'delist, NR', // carry-over
  f07959: 'delist, NR', // carry-over
  f07964: 'delist, USA, Ashburn', // carry-over
  f07987: 'delist, China, Beijing', // carry-over
  f08022: 'delist, China, Yibin', // carry-over
  f08053: 'delist, NR', // carry-over
  f08061: 'delist, China, Foshan', // carry-over
  f08095: 'delist, Canada, Surrey', // carry-over
  f08097: 'delist, Korea, Pyeongtaek-si', // carry-over
  f08136: "delist, China, Xi'an", // carry-over
  f08171: 'delist, NR', // carry-over
  f08183: 'delist, USA, Irvine', // carry-over
  f08207: 'delist, Australia, Brisbane', // carry-over
  f08223: 'delist, NR', // carry-over
  f08225: 'delist, Australia, Sydney', // carry-over
  f08238: 'delist, NR', // carry-over
  f08246: 'delist, USA', // carry-over
  f08280: 'delist, NR', // carry-over
  f08284: 'delist, China, Liaoning', // carry-over
  f08285: 'delist, Latvia, Riga, stander', // carry-over
  f08290: 'delist, NR', // carry-over
  f08311: 'delist, China, Shenzhen', // carry-over
  f08315: 'delist, China, Chongqing', // carry-over
  f08319: 'delist, NR', // carry-over
  f08322: 'delist, China, Chongqing', // carry-over
  f08327: 'delist, NR', // carry-over
  f08349: 'delist, China, Guangzhou, hkicloud', // carry-over
  f08361: 'delist, Malaysia, Kulai', // carry-over
  f08385: 'delist, NR', // carry-over
  f08388: 'delist, China, Taizhou', // carry-over
  f08390: 'delist, China, Shenzhen', // carry-over
  f08393: 'delist, NR', // carry-over
  f08402: 'delist, China, Sichuan', // carry-over
  f08406: 'delist, China, Shenzhen', // carry-over
  f08424: 'delist, China, Chengdu', // carry-over
  f08425: 'delist, NR', // carry-over
  f08429: 'delist, yfeing', // carry-over
  f08432: 'delist, China, Taizhou', // carry-over
  f08440: 'delist, France, Fontenay-sous-Bois', // carry-over
  f08460: 'delist, NR', // carry-over
  f08482: 'delist, USA, Athol, @why', // carry-over
  f08503: 'delist, NR', // carry-over
  f08532: 'delist, USA', // carry-over
  f08574: 'delist, USA', // carry-over
  f08787: 'delist, China, Yibin', // carry-over
  f08789: 'delist, China, Fuzhou', // carry-over
  f08791: 'delist, NR', // carry-over
  f08893: 'delist, NR', // carry-over
  f08902: 'delist, NR', // carry-over
  f08911: 'delist, Korea, Wanju', // carry-over
  f08964: 'delist, NR', // carry-over
  f08980: 'delist, USA, San Jose', // carry-over
  f08988: 'delist, Korea, Hwaseong-si', // carry-over
  f08994: 'delist, NR', // carry-over
  f09006: 'delist, NR', // carry-over
  f09007: 'delist, Korea, Hwaseong-si', // carry-over
  f09035: 'delist, NR', // carry-over
  f09053: 'delist, China, Shenzhen', // carry-over
  f09055: 'delist, China, Jieyang', // carry-over
  f09076: 'delist, NR', // carry-over
  f09084: 'delist, NR', // carry-over
  f09529: 'delist, NR', // carry-over
  f09538: 'delist, NR', // carry-over
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
  f09689: 'delist, USA, Portland', // carry-over
  f09707: 'delist, China, Guangdong', // carry-over
  f09712: 'delist, China, Chengdu', // carry-over
  f09719: 'delist, Korea, Geumcheon-gu', // carry-over
  f09731: 'delist, China, Guiyang', // carry-over
  f09733: 'delist, China, Chongqing', // carry-over
  f09736: 'delist, China, Guangdong', // carry-over
  f09753: 'delist, Korea, Pyeongtaek-si', // carry-over
  f09762: 'delist, China, Guangdong', // carry-over
  f09805: 'delist, China, Fuzhou', // carry-over
  f09833: 'delist, USA, San Jose', // carry-over
  f09840: 'delist, China, Baoding', // carry-over
  f09912: 'delist, USA, Concord', // carry-over
  f09964: 'delist, Germany, Frankfurt', // carry-over
  f09966: 'delist, NR', // carry-over
  f09974: 'delist, Canada, Calgary', // carry-over
  f09997: 'delist, USA', // carry-over
  f010005: 'delist, China, Zhongshan', // carry-over
  f010009: 'delist, USA, East Islip', // carry-over
  f010028: 'delist, USA, Berkeley', // carry-over
  f010033: 'delist, NR', // carry-over
  f010040: 'delist, China, Shenzhen', // carry-over
  f010041: 'delist, USA, Jackson', // carry-over
  f010078: 'delist, China, Zhangjiakou + Hong Kong', // carry-over
  f010173: 'delist, Korea, Pyeongtaek-si', // carry-over
  f010200: 'delist, NR', // carry-over
  f010213: 'delist, NR', // carry-over
  f010222: 'delist, NR', // carry-over
  f010227: 'delist, China, Xiamen', // carry-over
  f010244: 'delist, USA, Newton', // carry-over
  f010248: 'delist, China, Yibin', // carry-over
  f010265: 'delist, China, Zhengzhou', // carry-over
  f010275: 'delist, Korea, Cheongju-si + USA', // carry-over
  f010277: 'delist, France, Fontenay-sous-Bois', // carry-over
  f010281: 'delist, China, Shanghai', // carry-over
  f010282: 'delist, USA, San Francisco', // carry-over
  f010283: 'delist, Brazil, Sao Paulo', // carry-over
  f010292: 'delist, NR', // carry-over
  f010293: 'delist, China, Xiamen', // carry-over
  f010297: 'delist, USA, Howell', // carry-over
  f010303: 'delist, China, Guangdong', // carry-over
  f010305: 'delist, NR', // carry-over
  f010310: 'delist, Canada, Surrey', // carry-over
  f010313: 'delist, NR', // carry-over
  f010315: 'delist, Canada, Surrey', // carry-over
  f010346: 'delist, China, Karamay', // carry-over
  f010382: 'delist, NR', // carry-over
  f010402: 'delist, China, Shenyang', // carry-over
  f010425: 'delist, NR', // carry-over
  f010433: 'delist, Korea, Seoul', // carry-over
  f010438: 'delist, USA', // carry-over
  f010453: 'delist, China, Shaanxi', // carry-over
  f010468: 'delist, China, Guangzhou', // carry-over
  f010490: 'delist, NR', // carry-over
  f010517: 'delist, China, Chongqing', // carry-over
  f010520: 'delist, China, Hangzhou', // carry-over
  f010523: 'delist, China, Beijing, Interstellar Roewe', // carry-over
  f010542: 'delist, China, Ordos', // carry-over
  f010549: 'delist, China, Ordos', // carry-over
  f010551: 'delist, China, Shenyang', // carry-over
  f010559: 'delist, China, Shenyang', // carry-over
  f010566: 'delist, NR', // carry-over
  f010591: 'delist, China, Wuhan', // carry-over
  f010601: 'delist, NR', // carry-over
  f010602: 'delist, China, Guangdong', // carry-over
  f010603: 'delist, China, Baoding', // carry-over
  f010612: 'delist, USA, Mountain View', // carry-over
  f014207: 'delist, USA', // carry-over
  f014261: 'delist, China, Fuzhou', // carry-over
  f014271: 'delist, China, Fuzhou', // carry-over
  f014314: 'delist, Korea, Bucheon-si', // carry-over
  f014331: 'delist, China, Chongqing', // carry-over
  f014354: 'delist, USA, Concord', // carry-over
  f014366: 'delist, USA, Mountain View', // carry-over
  f014388: 'delist, China, Guangdong', // carry-over
  f014389: 'delist, China, Chongqing', // carry-over
  f014407: 'delist, China, Shanghai', // carry-over
  f014419: 'delist, USA, San Diego', // carry-over
  f014420: 'delist, Russia, Samara', // carry-over
  f014425: 'delist, Singapore', // carry-over
  f014477: 'delist, China, Hangzhou', // carry-over
  f014478: 'delist, Finland', // carry-over
  f014486: 'delist, NR', // carry-over
  f014495: 'delist, China, Hong Kong', // carry-over
  f014514: 'delist, China, Fuzhou', // carry-over
  f014533: 'delist, China, Fuzhou', // carry-over
  f014540: 'delist, USA, Newton', // carry-over
  f014556: 'delist, Korea, Bucheon-si', // carry-over
  f014629: 'delist, NR', // carry-over
  f014660: 'delist, Korea, Busan', // carry-over
  f014685: 'delist, Hong Kong', // carry-over
  f014708: 'delist, China, Beijing', // carry-over
  f014741: 'delist, China, Wuhan', // carry-over
  f014745: 'delist, China, Shenyang', // carry-over
  f014749: 'delist, China, Chongqing', // carry-over
  f014764: 'delist, Korea, Wanju', // carry-over
  f014793: 'delist, China, Hangzhou', // carry-over
  f014799: 'delist, China, Chongqing', // carry-over
  f014803: 'delist, China, Beijing', // carry-over
  f015061: 'delist, Australia, Sydney', // carry-over
  f015232: 'delist, Poland, Warsaw', // carry-over
  f015647: 'delist, China, Shenzhen', // carry-over
  f015709: 'delist, China, Hefei', // carry-over
  f015724: 'delist, China, Guangdong', // carry-over
  f015753: 'delist, China, Guyuan', // carry-over
  f015782: 'delist, Australia', // carry-over
  f015797: 'delist, Germany, Rostock', // carry-over
  f015798: 'delist, Germany', // carry-over
  f015799: 'delist, Germany, Rostock', // carry-over
  f015800: 'delist, Germany, Sankt Andreasberg', // carry-over
  f015802: 'delist, Germany', // carry-over
  f015805: 'delist, Germany', // carry-over
  f015808: 'delist, Germany', // carry-over
  f015809: 'delist, Germany', // carry-over
  f015810: 'delist, Germany', // carry-over
  f015811: 'delist, Germany, Lanshut', // carry-over
  f015812: 'delist, Germany', // carry-over
  f015827: 'delist, Russia', // carry-over
  f015829: 'delist, China, Beijing', // carry-over
  f015833: 'delist, China, Baoding', // carry-over
  f015867: 'delist, Netherlands, Amsterdam', // carry-over
  f015870: 'delist, China, Hangzhou', // carry-over
  f015875: 'delist, China, Fuzhou', // carry-over
  f015891: 'delist, China, Shanghai', // carry-over
  f015901: 'delist, Germany', // carry-over
  f015902: 'delist, Germany', // carry-over
  f015920: 'delist, China, Guangdong', // carry-over
  f015935: 'delist, China, Sichuan', // carry-over
  f015938: 'delist, Canada, Waterloo', // carry-over
  f015940: 'delist, Netherlands, Amsterdam', // carry-over
  f015942: 'delist, China, Ningbo', // carry-over
  f016140: 'delist, China, Beijing', // carry-over
  f016162: 'delist, France, Borgo', // carry-over
  f016172: 'delist, China, Guangdong', // carry-over
  f016203: 'delist, China, Chengdu', // carry-over
  f016217: 'delist, China, Nanchong', // carry-over
  f016228: 'delist, China, Chengdu', // carry-over
  f016234: 'delist, China, Chengdu', // carry-over
  f016262: 'delist, China, Fuzhou', // carry-over
  f016271: 'delist, Korea, Seodaemun-gu', // carry-over
  f016299: 'delist, China, Shanghai', // carry-over
  f016303: 'delist, USA, Boardman', // carry-over
  f016304: 'delist, USA, Boardman', // carry-over
  f016305: 'delist, USA, Boardman', // carry-over
  f016306: 'delist, USA, Boardman', // carry-over
  f016408: 'delist, NR', // carry-over
  f016426: 'delist, NR', // carry-over
  f016436: 'delist, Korea, Seoul', // carry-over
  f016456: 'delist, China, Zhejiang', // carry-over
  f016462: 'delist, USA, Clarksville', // carry-over
  f016482: 'delist, USA, Aliquippa', // carry-over
  f016594: 'delist, Germany', // carry-over
  f016628: 'delist, NR', // carry-over
  f016688: 'delist, Germany, Frankfurt', // carry-over
  f016706: 'delist, China, Guangzhou', // carry-over
  f017117: 'delist, Russia, Samara', // carry-over
  f017171: 'delist, NR', // carry-over
  f017181: 'delist, China, Nanchong', // carry-over
  f017186: 'delist, China, Jiaxing', // carry-over
  f017209: 'delist, NR', // carry-over
  f017215: 'delist, Finland', // carry-over
  f017216: 'delist, NR', // carry-over
  f017236: 'delist, NR', // carry-over
  f017251: 'delist, USA', // carry-over
  f017294: 'delist, China, Shenzhen', // carry-over
  f017323: 'delist, Poland, Warsaw', // carry-over
  f017334: 'delist, China, Fuzhou', // carry-over
  f017430: 'delist, Australia, Alexandria-cfa', // carry-over
  f017618: 'delist, Korea, Wanju', // carry-over
  f017628: 'delist, Brazil, Sao Paulo', // carry-over
  f017655: 'delist, NR', // carry-over
  f017722: 'delist, NR', // carry-over
  f017747: 'delist, NR', // carry-over
  f017793: 'delist, NR', // carry-over
  f018081: 'delist, Germany', // carry-over
  f018095: 'delist, Colombia, Medellin', // carry-over
  f018128: 'delist, China, Dongguan', // carry-over
  f018164: 'delist, USA, Howell', // carry-over
  f018311: "delist, China, Xi'an, <23h", // carry-over
  f018369: 'delist, NR', // carry-over
  f018393: 'delist, Colombia, Medellin', // carry-over
  f018397: 'delist, USA, Howell', // carry-over
  f018425: 'delist, USA, Howell', // carry-over
  f018437: 'delist, NR', // carry-over
  f018441: 'delist, USA', // carry-over
  f018445: 'delist, NR', // carry-over
  f018446: 'delist, China, Dongguan', // carry-over
  f018456: 'delist, Brazil, Sao Paulo', // carry-over
  f018474: 'delist, China, Xiamen', // carry-over
  f018484: 'delist, China, Shanghai', // carry-over
  f018490: 'delist, Korea, Hwaseong-si', // carry-over
  f018513: 'delist, NR', // carry-over
  f018517: 'delist, USA, Columbus', // carry-over
  f018518: "delist, China, Xi'an", // carry-over
  f018520: 'delist, China', // carry-over
  f018530: 'delist, China, Shaanxi', // carry-over
  f018531: 'delist, China, Shaanxi', // carry-over
  f018537: 'delist, China, Shaanxi', // carry-over
  f018542: 'delist, China, Chongqing', // carry-over
  f018754: 'delist, China, Dali', // carry-over
  f018761: 'delist, Russia, St. Petersburg', // carry-over
  f018790: 'delist, China, Chengdu', // carry-over
  f018802: 'delist, China, Dongguan', // carry-over
  f018812: 'delist, South Africa, Cape Town', // carry-over
  f018836: 'delist, NR', // carry-over
  f018837: 'delist, China, Shaanxi', // carry-over
  f018844: 'delist, NR', // carry-over
  f018864: 'delist, Korea, Busan', // carry-over
  f018865: 'delist, China, Chengdu', // carry-over
  f018869: 'delist, NR', // carry-over
  f018879: 'delist, Korea, Geumcheon-gu', // carry-over
  f018899: 'delist, China, Shanghai', // carry-over
  f019017: 'delist, China, Wenzhou-cfa', // carry-over
  f019024: 'delist, China, Sichuan', // carry-over
  f019029: 'delist, Serbia, Boljevac', // carry-over
  f019031: 'delist, NR', // carry-over
  f019042: 'delist, China, Shanghai', // carry-over
  f019048: 'delist, Brazil, Sao Paulo', // carry-over
  f019062: 'delist, Germany', // carry-over
  f019069: 'delist, NR', // carry-over
  f019109: 'delist, USA, Howell', // carry-over
  f019114: 'delist, USA, Howell', // carry-over
  f019118: 'delist, China, Jiaxing', // carry-over
  f019123: 'delist, China, Dongguan', // carry-over
  f019160: 'delist, USA, Fremont', // carry-over
  f019173: 'delist, China, Nanchong', // carry-over
  f019184: 'delist, China, Yibin', // carry-over
  f019218: 'delist, China, Dali', // carry-over
  f019239: 'delist, China, Jiaxing', // carry-over
  f019264: 'delist, NR', // carry-over
  f019284: 'delist, China, Foshan', // carry-over
  f019376: 'delist, NR', // carry-over
  f019378: 'delist, China, Changzhou', // carry-over
  f019401: 'delist, Brazil, Sao Paulo', // carry-over
  f019423: 'delist, South Africa, Johannesburg', // carry-over
  f019434: 'delist, NR', // carry-over
  f019437: 'delist, Korea, Guro-gu', // carry-over
  f019525: 'delist, USA, Berkeley', // carry-over
  f019528: 'delist, Peru', // carry-over
  f019547: 'delist, Peru', // carry-over
  f019645: 'delist, Russia, St. Petersburg', // carry-over
  f019723: 'delist, China, Zhongshan', // carry-over
  f019734: 'delist, NR', // carry-over
  f019757: 'delist, NR', // carry-over
  f019804: 'delist, China, Chengdu', // carry-over
  f019809: 'delist, NR', // carry-over
  f019812: 'delist, NR', // carry-over
  f019825: 'delist, China, Hong Kong', // carry-over
  f020223: 'delist, China, Guiyang', // carry-over
  f020241: 'delist, NR', // carry-over
  f020260: 'delist, NR', // carry-over
  f020276: 'delist, China, Xiamen', // carry-over
  f020281: 'delist, Korea, Uijeongbu-si', // carry-over
  f020352: 'delist, NR', // carry-over
  f020361: 'delist, Colombia, Medellin', // carry-over
  f020366: 'delist, China, Chengdu', // carry-over
  f020369: 'delist, NR', // carry-over
  f020379: 'delist, NR', // carry-over
  f020386: 'delist, Russia', // carry-over
  f020390: 'delist, NR', // carry-over
  f020408: 'delist, China, Hong Kong', // carry-over
  f020432: 'delist, Korea, Wanju', // carry-over
  f020433: 'delist, NR', // carry-over
  f020439: 'delist, China, Chengdu', // carry-over
  f020450: 'delist, NR', // carry-over
  f020451: 'delist, NR', // carry-over
  f020453: 'delist, China, Chengdu', // carry-over
  f020457: 'delist, NR', // carry-over
  f020525: 'delist, China, Dongguan', // carry-over
  f020541: 'delist, China, Shanghai', // carry-over
  f020559: 'delist, China, Liaoning', // carry-over
  f020563: 'delist, China, Dongguan', // carry-over
  f020578: 'delist, Korea, Wanju', // carry-over
  f020641: 'delist, NR', // carry-over
  f020678: 'delist, China, Wenzhou', // carry-over
  f020682: 'delist, NR', // carry-over
  f020683: 'delist, China, Changsha', // carry-over
  f020691: 'delist, NR', // carry-over
  f020739: 'delist, China, Dongguan', // carry-over
  f020763: 'delist, China, Luzhou', // carry-over
  f020775: 'delist, Japan, Osaka', // carry-over
  f020786: 'delist, China, Shenzhen', // carry-over
  f020788: 'delist, China, Chengdu', // carry-over
  f020789: 'delist, NR', // carry-over
  f020791: 'delist, China, Hangzhou', // carry-over
  f020819: 'delist, China, Chengdu', // carry-over
  f020822: 'delist, China, Shanghai', // carry-over
  f020896: 'delist, NR', // carry-over
  f020899: 'delist, China, Chengdu', // carry-over
  f020914: 'delist, NR', // carry-over
  f020934: 'delist, NR', // carry-over
  f020939: 'delist, NR', // carry-over
  f020961: 'delist, China, Shanghai', // carry-over
  f020975: 'delist, China, Shandong', // carry-over
  f020993: 'delist, China, Hong Kong', // carry-over
  f021069: 'delist, USA', // carry-over
  f021083: 'delist, NR', // carry-over
  f021092: 'delist, NR', // carry-over
  f021095: 'delist, NR', // carry-over
  f021265: 'delist, China, Wuhan', // carry-over
  f021274: 'delist, China, Shanghai', // carry-over
  f021286: 'delist, China, Shaanxi', // carry-over
  f021307: 'delist, China, Chengdu', // carry-over
  f021311: 'delist, NR', // carry-over
  f021337: 'delist, China, Beijing', // carry-over
  f021339: 'delist, China, Jiaxing', // carry-over
  f021346: 'delist, China, Shanghai', // carry-over
  f021357: 'delist, China, Shanghai', // carry-over
  f021418: 'delist, NR', // carry-over
  f021494: 'delist, NR', // carry-over
  f021500: 'delist, NR', // carry-over
  f021505: 'delist, NR', // carry-over
  f021509: 'delist, China, Fuzhou', // carry-over
  f021527: 'delist, NR', // carry-over
  f021535: 'delist, China, Chengdu', // carry-over
  f021555: 'delist, NR', // carry-over
  f021574: 'delist, NR', // carry-over
  f021580: 'delist, NR', // carry-over
  f021583: 'delist, China, Jiaxing', // carry-over
  f021684: 'delist, NR', // carry-over
  f021699: 'delist, NR', // carry-over
  f021725: 'delist, NR', // carry-over
  f021976: 'delist, NR', // carry-over
  f022015: 'delist, China, Hangzhou', // carry-over
  f022016: 'delist, NR', // carry-over
  f022030: 'delist, NR', // carry-over
  f022033: 'delist, NR', // carry-over
  f022070: 'delist, China, Jieyang', // carry-over
  f022084: 'delist, China, Shaanxi', // carry-over
  f022089: 'delist, China, Beijing', // carry-over
  f022091: 'delist, NR', // carry-over
  f022108: 'delist, China, Luzhou', // carry-over
  f022119: 'delist, USA, Lovettsville', // carry-over
  f022122: 'delist, NR', // carry-over
  f022132: 'delist, China, Dongguan', // carry-over
  f022171: 'delist, China, Shanghai', // carry-over
  f022202: 'delist, USA, Howell', // carry-over
  f022250: 'delist, NR', // carry-over
  f022262: 'delist, China, Hong Kong', // carry-over
  f022276: 'delist, Korea, Seoul', // carry-over
  f022284: 'delist, China, Shaanxi', // carry-over
  f022287: 'delist, China, Dongguan', // carry-over
  f022303: 'delist, NR', // carry-over
  f022313: 'delist, NR', // carry-over
  f022321: 'delist, China, Hong Kong', // carry-over
  f022326: 'delist, China, Zhongshan', // carry-over
  f022333: 'delist, China, Dongguan', // carry-over
  f022337: 'delist, NR', // carry-over
  f022343: 'delist, China, Dongguan', // carry-over
  f022372: 'delist, China, Chengdu', // carry-over
  f022376: 'delist, China, Dongguan', // carry-over
  f022494: 'delist, China, Dongguan', // carry-over
  f022501: 'delist, Japan, Osaka', // carry-over
  f022503: 'delist, NR', // carry-over
  f022505: 'delist, China, Shanghai', // carry-over
  f022517: 'delist, China, Taiwan, Taipei', // carry-over
  f022562: 'delist, NR', // carry-over
  f022564: 'delist, NR', // carry-over
  f022683: 'delist, NR', // carry-over
  f022755: 'delist, China, Shenzhen', // carry-over
  f022776: 'delist, Korea, Guri-si', // carry-over
  f022786: 'delist, NR', // carry-over
  f022790: 'delist, China, Luzhou', // carry-over
  f022791: 'delist, NR', // carry-over
  f022797: 'delist, NR', // carry-over
  f022834: 'delist, NR', // carry-over
  f022836: 'delist, China, Chongqing', // carry-over
  f022838: 'delist, China, Hong Kong', // carry-over
  f022841: 'delist, China, Zhongshan', // carry-over
  f022857: 'delist, NR', // carry-over
  f022880: 'delist, NR', // carry-over
  f022906: 'delist, NR', // carry-over
  f022911: 'delist, China, Hong Kong', // carry-over
  f022912: 'delist, NR', // carry-over
  f022926: 'delist, NR', // carry-over
  f022930: 'delist, NR', // carry-over
  f022954: 'delist, NR', // carry-over
  f022967: 'delist, Korea, Seoul', // carry-over
  f022969: 'delist, China, Chengdu', // carry-over
  f022970: 'delist, NR', // carry-over
  f022996: 'delist, NR', // carry-over
  f023021: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f023108: 'delist, China, Dongguan', // carry-over
  f023159: 'delist, NR', // carry-over
  f023207: 'delist, NR', // carry-over
  f023210: 'delist, China, Dongguan', // carry-over
  f023254: 'delist, NR', // carry-over
  f023463: 'delist, NR', // carry-over
  f023482: 'delist, NR', // carry-over
  f023501: 'delist, China, Mianyang', // carry-over
  f023505: 'delist, NR', // carry-over
  f023526: 'delist, China, Chongqing', // carry-over
  f023535: 'delist, China, Hong Kong', // carry-over
  f023560: 'delist, NR', // carry-over
  f023568: 'delist, NR', // carry-over
  f023571: 'delist, NR', // carry-over
  f023581: 'delist, China, Hong Kong, mine-much', // carry-over
  f023643: 'delist, NR', // carry-over
  f023647: 'delist, Korea, Gangseo-gu', // carry-over
  f023649: 'delist, Korea, Seoul, LS&NIHON', // carry-over
  f023661: 'delist, China, Zhejiang', // carry-over
  f023798: 'delist, China, Shanghai', // carry-over
  f023801: 'delist, China, Dongguan', // carry-over
  f023826: 'delist, USA, Germantown', // carry-over
  f023881: 'delist, China, Fuzhou', // carry-over
  f023939: 'delist, NR', // carry-over
  f023943: 'delist, USA, Ashburn', // carry-over
  f023965: 'delist, NR', // carry-over
  f023986: 'delist, Korea, Seoul', // carry-over
  f024031: 'delist, NR', // carry-over
  f024074: 'delist, NR', // carry-over
  f024129: 'delist, China, Zhejiang', // carry-over
  f024153: 'delist, NR', // carry-over
  f024165: 'delist, NR', // carry-over
  f024168: 'delist, USA, Ashburn', // carry-over
  f024496: 'delist, China, Dongguan', // carry-over
  f024526: 'delist, Korea', // carry-over
  f024556: 'delist, NR', // carry-over
  f024557: 'delist, NR', // carry-over
  f024558: 'delist, NR', // carry-over
  f024559: 'delist, NR', // carry-over
  f024611: 'delist, China, Dongguan', // carry-over
  f024902: 'delist, Korea, Incheon', // carry-over
  f024903: 'delist, undefined', // carry-over
  f024969: 'delist, NR', // carry-over
  f025028: 'delist, NR', // carry-over
  f025032: 'delist, China, Beijing', // carry-over
  f029368: 'delist, Korea, Gangseo-gu', // carry-over
  f029421: 'delist, undefined', // carry-over
  f029477: 'delist, undefined', // carry-over
  f029529: 'delist, China, Dongguan', // carry-over
  f029546: 'delist, NR', // carry-over
  f029566: 'delist, NR', // carry-over
  f029595: 'delist, undefined', // carry-over
  f029619: 'delist, undefined', // carry-over
  f029632: 'delist, undefined', // carry-over
  f030230: 'delist, China, Sichuan', // carry-over
  f030231: 'delist, China, Hunan', // carry-over
  f030327: 'delist, China, Beijing', // carry-over
  f030386: 'delist, NR', // carry-over
  f030514: 'delist, NR', // carry-over
  f030518: 'delist, China, Wuhan', // carry-over
  f030521: 'delist, China, Hong Kong', // carry-over
  f030531: 'delist, NR', // carry-over
  f030608: 'delist, China, Mianyang', // carry-over
  f030641: 'delist, China, Shaanxi', // carry-over
  f032865: 'delist, USA, Redmond', // carry-over
  f032887: 'delist, undefined', // carry-over
  f032904: 'delist, undefined', // carry-over
  f032922: 'delist, undefined', // carry-over
  f033014: 'delist, NR', // carry-over
  f033028: 'delist, China, Mianyang', // carry-over
  f033111: 'delist, China, Shanghai', // carry-over
  f033124: 'delist, China, Shanghai', // carry-over
  f033125: 'delist, NR', // carry-over
  f033209: 'delist, NR', // carry-over
  f033224: 'delist, NR', // carry-over
  f033511: 'delist, China, Dongguan', // carry-over
  f033545: 'delist, China, Shenzhen + USA', // carry-over
  f033549: 'delist, China, Quzhou', // carry-over
  f034084: 'delist, China, Chongqing', // carry-over
  f034229: 'delist, USA, Minneapolis', // carry-over
  f034311: 'delist, Korea, Gangnam-gu', // carry-over
  f034362: 'delist, China, Sichuan', // carry-over
  f034652: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f034666: 'delist, NR', // carry-over
  f040137: 'delist, NR', // carry-over
  f040432: 'delist, NR', // carry-over
  f040468: 'delist, NR', // carry-over
  f040971: 'delist, NR', // carry-over
  f042344: 'delist, Korea', // carry-over
  f042584: 'delist, Australia, Basin View', // carry-over
  f042839: 'delist, Korea, Pocheon-si', // carry-over
  f042901: 'delist, Finland, Helsinki', // carry-over
  f044143: 'delist, China, Taiwan, Taipei', // carry-over
  f044788: 'delist, NR', // carry-over
  f046043: 'delist, China, Shanghai', // carry-over
  f046073: 'delist, China, Shanghai', // carry-over
  f046074: 'delist, China, Shanghai', // carry-over
  f046078: 'delist, China, Shaanxi', // carry-over
  f046315: 'delist, NR', // carry-over
  f046317: 'delist, China, Nanyang', // carry-over
  f047327: 'delist, China, Hong Kong', // carry-over
  f047536: 'delist, NR', // carry-over
  f047858: 'delist, China, Wuhan', // carry-over
  f048172: 'delist, China, Suzhou', // carry-over
  f048192: 'delist, China, Suzhou', // carry-over
  f048545: 'delist, China, Chengdu', // carry-over
  f049990: 'delist, Korea, Incheon', // carry-over
  f052503: 'delist, NR', // carry-over
  f052562: 'delist, NR', // carry-over
  f052740: 'delist, China, Shaanxi', // carry-over
  f054163: 'delist, China, Dongguan', // carry-over
  f054389: 'delist, China, Chongqing', // carry-over
  f054677: 'delist, Finland, Helsinki', // carry-over
  f055040: 'delist, China, Fujian', // carry-over
  f055522: 'delist, USA', // carry-over
  f056393: 'delist, NR', // carry-over
  f057115: 'delist, China, Nanyang', // carry-over
  f057466: 'delist, China, Guangzhou', // carry-over
  f057560: 'delist, NR', // carry-over
  f057842: 'delist, Korea, Gyeonggi-do', // carry-over
  f058003: 'delist, China, Shenzhen', // carry-over
  f058321: 'delist, China, Dongguan', // carry-over
  f059280: 'delist, China, Shenzhen', // carry-over
  f059652: 'delist, China, Beijing', // carry-over
  f059705: 'delist, Korea, Naju', // carry-over
  f059740: 'delist, Germany, Bottrop', // carry-over
  f060780: 'delist, Korea, Goyang-si', // carry-over
  f061043: 'delist, China, Changsha', // carry-over
  f061059: 'delist, China, Beijing', // carry-over
  f061196: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f061430: 'delist, Korea, Naju', // carry-over
  f062375: 'delist, Korea, Gyeonggi-do', // carry-over
  f062445: 'delist, China, Shenzhen', // carry-over
  f062449: 'delist, NR', // carry-over
  f062492: 'delist, China, Hong Kong', // carry-over
  f062552: 'delist, NR', // carry-over
  f062587: 'delist, NR', // carry-over
  f062735: 'delist, China, Hong Kong', // carry-over
  f063173: 'delist, Korea, Gyeonggi-do', // carry-over
  f063780: 'delist, China, Shenyang', // carry-over
  f063921: 'delist, China, Ili', // carry-over
  f064442: 'delist, Japan', // carry-over
  f064688: 'delist, NR', // carry-over
  f065132: 'delist, Denmark, Vipperod', // carry-over
  f065225: 'delist, China, Dongguan', // carry-over
  f065250: 'delist, NR', // carry-over
  f065259: 'delist, NR', // carry-over
  f065426: 'delist, Korea, Gimpo-si', // carry-over
  f065477: 'delist, NR', // carry-over
  f065689: 'delist, NR', // carry-over
  f065718: 'delist, China, Taiwan, Hsinchu', // carry-over
  f065732: 'delist, Korea, Gyeonggi-do', // carry-over
  f065853: 'delist, Korea, Seongnam-si', // carry-over
  f066075: 'delist, NR', // carry-over
  f066289: 'delist, NR', // carry-over
  f066465: 'delist, NR', // carry-over
  f066566: 'delist, Korea, Gwangju', // carry-over
  f066568: 'delist, Korea, Gwangju, aoc-0002', // carry-over
  f066734: 'delist, NR', // carry-over
  f066804: 'delist, China, Zhejiang', // carry-over
  f066845: 'delist, China, Dongguan', // carry-over
  f067083: 'delist, Russia, Moscow', // carry-over
  f067185: 'delist, Korea, Gwangju', // carry-over
  f067195: 'delist, China, Huizhou', // carry-over
  f067283: 'delist, Korea, Seongnam-si', // carry-over
  f067314: 'delist, China, Ningbo', // carry-over
  f067545: 'delist, Canada, Kitchener', // carry-over
  f068253: 'delist, NR', // carry-over
  f068898: 'delist, China, Fuzhou', // carry-over
  f069450: 'delist, NR', // carry-over
  f069661: 'delist, China, Wuxi', // carry-over
  f070288: 'delist, China, Zhangzhou', // carry-over
  f070337: 'delist, China, Zhangzhou', // carry-over
  f070475: 'delist, China, Guyuan', // carry-over
  f070747: 'delist, China, Shenzhen', // carry-over
  f070756: 'delist, China, Beijing', // carry-over
  f070824: 'delist, China, Taiwan, Hsinchu', // carry-over
  f071114: 'delist, China, Shenyang', // carry-over
  f071190: 'delist, Korea, Gyeonggi-do', // carry-over
  f071692: "delist, China, Xi'an", // carry-over
  f071914: 'delist, China, Beijing', // carry-over
  f072737: 'delist, China, Shanghai', // carry-over
  f073048: 'delist, Korea, Gyeonggi-do', // carry-over
  f073535: 'delist, Korea, Gyeonggi-do', // carry-over
  f073783: 'delist, NR', // carry-over
  f073878: 'delist, NR', // carry-over
  f073931: 'delist, NR', // carry-over
  f078425: 'delist, Korea, Bucheon-si', // carry-over
  f078516: 'delist, NR', // carry-over
  f078770: 'delist, China, Karamay', // carry-over
  f080131: 'delist, NR', // carry-over
  f080945: 'delist, China, Shenzhen', // carry-over
  f081987: 'delist, NR', // carry-over
  f082054: 'delist, China, Hefei', // carry-over
  f082175: 'delist, China, Shenyang', // carry-over
  f082250: 'delist, China, Guilin', // carry-over
  f082543: 'delist, Korea, Osan', // carry-over
  f082590: 'delist, China, Taizhou', // carry-over
  f082669: 'delist, USA, Daytona Beach', // carry-over
  f082698: "delist, USA, Xi'an", // carry-over
  f083235: 'delist, Serbia, Belgrade', // carry-over
  f083474: 'delist, NR', // carry-over
  f085226: 'delist, Korea, Busan', // carry-over
  f085415: 'delist, NR', // carry-over
  f085682: 'delist, NR', // carry-over
  f085904: 'delist, China, Chongqing', // carry-over
  f085947: 'delist, NR', // carry-over
  f086450: 'delist, NR', // carry-over
  f086610: 'delist, Korea, Gyeonggi-do', // carry-over
  f087931: 'delist, China, Beijing', // carry-over
  f088305: 'delist, Korea, Gyeonggi-do', // carry-over
  f088404: 'delist, Korea, Gyeonggi-do', // carry-over
  f089201: 'delist, Korea, Gyeonggi-do', // carry-over
  f090052: 'delist, China, Suqian', // carry-over
  f090086: 'delist, Korea', // carry-over
  f090104: 'delist, China, Dongguan', // carry-over
  f090363: 'delist, China, Beijing', // carry-over
  f090747: 'delist, Korea, Anyang-si', // carry-over
  f090851: 'delist, China, Ningxia', // carry-over
  f091095: 'delist, Korea, Gwangju + Buk-gu', // carry-over
  f091139: 'delist, Korea, Gyeonggi-do', // carry-over
  f091355: 'delist, China, Chengdu', // carry-over
  f092516: 'delist, USA, Boardman', // carry-over
  f092630: 'delist, Korea, Gyeonggi-do', // carry-over
  f092724: 'delist, China, Beijing', // carry-over
  f092776: 'delist, Korea, Gimhae', // carry-over
  f092971: 'delist, China, Chongqing', // carry-over
  f093212: 'delist, Netherlands', // carry-over
  f093554: 'delist, China, Zhangzhou', // carry-over
  f094085: 'delist, Japan, Ota-ku', // carry-over
  f094430: 'delist, China, Ordos', // carry-over
  f094675: 'delist, NR', // carry-over
  f094785: 'delist, China, Shanghai', // carry-over
  f094825: 'delist, Korea, Gwangju', // carry-over
  f094869: 'delist, China, Shanghai', // carry-over
  f094894: 'delist, Korea, Gwangju', // carry-over
  f094899: 'delist, Korea', // carry-over
  f095049: 'delist, Korea, Bucheon-si', // carry-over
  f095296: 'delist, China, Suqian', // carry-over
  f095398: 'delist, Korea, Sejong', // carry-over
  f095506: 'delist, China, Ningxia', // carry-over
  f095528: 'delist, China, Hangzhou', // carry-over
  f095833: 'delist, Korea, Yongin-si', // carry-over
  f096224: 'delist, China, Chongqing', // carry-over
  f096976: 'delist, Russia', // carry-over
  f0106090: 'delist, NR', // carry-over
  f0107118: 'delist, China, Hangzhou + Zhejiang', // carry-over
  f0107127: 'delist, USA, Daytona Beach', // carry-over
  f0107171: 'delist, China, Karamay', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0110803: 'delist, Korea', // carry-over
  f0112027: 'delist, France', // carry-over
  f0115238: 'delist, China, Shenyang', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0117556: 'delist, NR', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0122815: 'delist, Korea, Bucheon-si, Healthcarenavi_80', // carry-over
  f0124335: 'delist, Finland, Helsinki', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126376: 'delist, NR', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0128191: 'delist, Korea, Gangnam-gu', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0131857: 'delist, China, Chongqing', // carry-over
  f0132765: 'delist, NR', // carry-over
  f0133486: 'delist, China, Shenzhen', // carry-over
  f0135906: 'delist, NR', // carry-over
  f0136425: 'delist, Korea, Busan', // carry-over
  f0137475: 'delist, China, Beijing', // carry-over
  f0144304: 'delist, NR', // carry-over
  f0145018: 'delist, Korea', // carry-over
  f0147676: 'delist, Korea, Seoul', // carry-over
  f0149670: 'delist, NR', // carry-over
  f0149783: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0157513: 'delist, Korea, Geumcheon-gu', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0164326: 'delist, China, Beijing', // carry-over
  f0165533: 'delist, NR', // carry-over
  f0167458: 'delist, NR', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0213894: 'delist, China, Hangzhou', // carry-over
  f0214181: 'delist, Australia, Mosman', // carry-over
  f0215360: 'delist, France', // carry-over
  f0215404: 'delist, China, Suzhou', // carry-over
  f0216068: 'delist, Romania, Iasi', // carry-over
  f0216139: 'delist, Korea, Goyang-si', // carry-over
  f0219415: 'delist, USA, Boardman', // carry-over
  f0219631: 'delist, USA, Council Bluffs', // carry-over
  f0220911: 'delist, NR', // carry-over
  f0223663: 'delist, China, Beijing', // carry-over
  f0224599: 'delist, China, Fuzhou', // carry-over
  f0224782: 'delist, USA', // carry-over
  f0225880: 'delist, NR', // carry-over
  f0226073: 'delist, China, Shenzhen', // carry-over
  f0228335: 'delist, China, Beijing', // carry-over
  f0228350: 'delist, China, Hangzhou', // carry-over
  f0228388: 'delist, USA, Cleveland', // carry-over
  f0228401: 'delist, Japan', // carry-over
  f0229547: 'delist, Japan, Yokohama', // carry-over
  f0230827: 'delist, Korea, Paju', // carry-over
  f0231135: 'delist, USA, Huntersville', // carry-over
  f0231161: 'delist, China, Qujing', // carry-over
  f0232136: 'delist, NR', // carry-over
  f0232437: 'delist, NR', // carry-over
  f0239266: 'delist, NR', // carry-over
  f0240893: 'delist, USA, Queens', // carry-over
  f0241272: 'delist, France, Deuil-la-Barre', // carry-over
  f0241284: 'delist, China, Jiangmen', // carry-over
  f0242152: 'delist, Korea, Guro-gu', // carry-over
  f0242260: 'delist, USA, St. Louis', // carry-over
  f0242416: 'delist, USA, Morganville', // carry-over
  f0347476: 'delist, China, Zhengzhou', // carry-over
  f0391370: 'delist, USA, Queens', // carry-over
  f0391520: 'delist, China, Guangzhou', // carry-over
  f0392707: 'delist, Korea, Chuncheon', // carry-over
  f0392712: 'delist, Korea, Ulju-gun', // carry-over
  f0392733: 'delist, USA, Huntersville', // carry-over
  f0393359: 'delist, China, Suzhou', // carry-over
  f0394461: 'delist, Korea, Seoul', // carry-over
  f0395473: 'delist, Korea, Daegu', // carry-over
  f0396705: 'delist, NR', // carry-over
  f0397675: 'delist, Korea, Guro-gu', // carry-over
  f0398326: 'delist, China, Jiangmen', // carry-over
  f0398338: 'delist, USA, Cleveland', // carry-over
  f0400681: 'delist, USA, Queens', // carry-over
  f0402314: 'delist, NR', // carry-over
  f0402492: 'delist, NR', // carry-over
  f0402975: 'delist, Korea', // carry-over
  f0403858: 'delist, China, Jiangmen', // carry-over
  f0403896: 'delist, USA, Huntersville', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0411786: 'delist, Korea, Busan', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid', // carry-over
  f0423713: 'delist, China, Qingdao', // carry-over
  f0424969: 'delist, China, Fuzhou', // carry-over
  f0427967: 'delist, China, Changsha', // carry-over
  f0427994: 'delist, China, Jinhua', // carry-over
  f0427996: 'delist, Canada, Bois-des-Filion', // carry-over
  f0428150: 'delist, China, Xiamen', // carry-over
  f0429006: 'delist, China, Zhangzhou', // carry-over
  f0430997: 'delist, Korea', // carry-over
  f0434480: 'delist, USA, Hummelstown', // carry-over
  f0466405: 'delist, Germany, Niederaula', // carry-over
  f0467217: 'delist, China, Beijing', // carry-over
  f0471266: 'delist, Japan, Ageo', // carry-over
  f0482136: 'delist, China, Fuzhou', // carry-over
  f0490090: 'delist, Korea, Seoul', // carry-over
  f0492222: 'delist, Canada, Vancouver', // carry-over
  f0492283: 'delist, USA, Quail Valley', // carry-over
  f0492295: 'delist, China, Shenzhen', // carry-over
  f0494332: 'delist, Ukraine, Sumy', // carry-over
  f0494586: 'delist, China, Nanchang', // carry-over
  f0497837: 'delist, Korea, Gangnam-gu', // carry-over
  f0503423: 'delist, NR', // carry-over
  f0504467: 'delist, Korea, Seoul', // carry-over
  f0510010: 'delist, Russia, Shchelkovo', // carry-over
  f0511480: 'delist, China, Yangzhou', // carry-over
  f0518641: 'delist, China, Hangzhou', // carry-over
  f0522078: 'delist, China, Hangzhou', // carry-over
  f0524517: 'delist, Korea, Uijeongbu-si', // carry-over
  f0524577: 'delist, China, Foshan', // carry-over
  f0524589: 'delist, Korea', // carry-over
  f0524945: 'delist, China, Beijing', // carry-over
  f0587126: 'delist, China, Shenyang', // carry-over
  f0601975: 'delist, Korea, Guro-gu', // carry-over
  f0601980: 'delist, Korea, Seoul', // carry-over
  f0607157: 'delist, China, Jieyang', // carry-over
  f0677977: 'delist, USA, Wenham', // carry-over
  f0697132: 'delist, Korea, Busan', // carry-over
  f0697162: 'delist, Finland, Helsinki', // carry-over
  f0698866: 'delist, Finland, Helsinki', // carry-over
  f0720716: 'delist, Korea, Seoul', // carry-over
  f0720762: 'delist, Korea, Incheon', // carry-over
  f0724179: 'delist, China, Wenzhou', // carry-over
  f0724192: 'delist, Korea, Hwaseong-si', // carry-over
  f0730529: 'delist, USA, Boardman', // carry-over
  f0732291: 'delist, Korea, Incheon', // carry-over
  f0744199: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0751619: 'delist, Korea, Ulsan', // carry-over
  f0752458: 'delist, Australia, Sydney', // carry-over
  f0755598: 'delist, Korea, Incheon', // carry-over
  f0755602: 'delist, Korea, Incheon', // carry-over
  f0755605: 'delist, Korea, Incheon', // carry-over
  f0756242: 'delist, China, Taiwan, Taipei', // carry-over
  f0757509: 'delist, Ukraine, Odessa', // carry-over
  f0758143: 'delist, Canada', // carry-over
  f0761445: 'delist, Ukraine, Odessa', // carry-over
  f0765545: 'delist, China, Hangzhou', // carry-over
  f0810756: 'delist, Romania, Bucharest', // carry-over
  f0818665: 'delist, Romania, Bucharest', // carry-over
  f0825528: 'delist, NR', // carry-over
  f0826452: 'delist, NR' // carry-over
}

export default annotations
