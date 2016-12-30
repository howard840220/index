(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"WTF_atlas_", frames: [[5129,2705,285,40],[3820,1137,49,16],[8152,1671,10,583],[8164,1671,10,583],[6778,3168,414,229],[4796,3683,1053,192],[0,3706,1053,192],[8087,781,90,91],[8087,551,105,103],[6906,3639,1053,192],[221,4369,168,202],[1903,2817,623,583],[3567,4500,219,219],[955,4537,219,219],[801,2878,200,51],[2035,4490,219,219],[8179,0,7,21],[2256,4490,219,219],[1630,4499,219,219],[3125,4500,219,219],[3346,4500,219,219],[5297,4405,219,219],[2513,4419,219,219],[1316,0,1314,740],[2632,0,1314,740],[6162,4429,219,219],[5518,4449,219,219],[5739,4449,219,219],[1409,4468,219,219],[0,2878,402,36],[7363,4609,437,102],[1176,4537,219,219],[8165,0,12,22],[7267,2797,98,36],[4941,4576,219,219],[4528,4582,219,219],[3788,4586,219,219],[5146,3877,571,321],[0,3900,571,321],[573,3944,571,321],[1146,3944,571,321],[5602,4345,558,102],[0,4590,219,219],[404,2915,250,36],[0,4369,219,219],[0,2916,210,35],[7560,4388,219,219],[2035,4387,476,101],[2904,4401,219,219],[5198,585,1248,583],[404,2878,395,35],[6700,4404,219,219],[6248,1170,1248,581],[7698,1111,437,37],[440,4267,173,354],[5496,2204,450,35],[6921,4404,219,219],[7142,4404,219,219],[4220,3751,351,561],[3795,3945,353,418],[1055,3750,1053,192],[6448,585,1248,583],[7498,1170,691,417],[2528,3169,697,419],[8032,2609,150,150],[5416,2720,65,47],[3674,1658,56,77],[3227,3169,512,512],[4573,4200,182,380],[4757,4200,182,380],[0,742,1248,583],[1250,742,1248,583],[6331,4027,187,400],[2528,2817,428,336],[4009,4611,223,172],[880,1327,878,581],[6448,2275,950,520],[4054,2723,1073,444],[3165,3751,1053,192],[2110,3784,1053,192],[4999,1170,1247,583],[1760,1327,878,581],[5851,3833,1053,192],[0,2971,1248,345],[2500,742,1248,583],[5719,4027,610,157],[5719,4186,610,157],[6906,3833,325,569],[7233,3833,325,569],[2904,3978,211,421],[6741,4027,159,319],[5129,2797,931,496],[7498,1589,610,157],[0,1327,878,581],[3741,3169,1053,192],[2640,1327,950,520],[3592,1327,154,329],[5851,3295,170,335],[7894,4305,165,344],[6248,1753,950,520],[3592,2277,1073,444],[7698,551,387,558],[1872,3402,650,118],[5416,2643,75,75],[5297,4200,303,203],[3948,0,1248,583],[7560,3833,332,553],[1719,3944,314,553],[3165,3945,313,553],[3480,3945,313,553],[7894,3864,215,439],[2687,3978,215,439],[3750,1137,33,25],[7200,1753,950,520],[3750,742,191,393],[1409,4267,287,199],[5496,2241,251,29],[3785,1137,33,25],[955,4267,225,268],[1182,4267,225,268],[1851,4499,173,169],[221,4573,173,169],[3592,1755,950,520],[4796,3295,1053,192],[0,3318,1053,192],[4796,3169,147,109],[3741,3363,1053,192],[6062,3168,714,446],[1904,1910,715,446],[5496,1755,717,447],[8179,23,10,4],[8165,24,9,4],[1904,2371,1073,444],[6778,3445,1053,192],[4796,3489,1053,192],[0,3512,1053,192],[1075,2432,826,537],[8032,2275,158,332],[0,2432,1073,444],[2979,2723,1073,444],[1055,3556,1053,192],[5198,0,1248,583],[2979,2371,571,321],[0,0,1314,740],[7698,0,465,549],[615,4267,168,359],[785,4267,168,359],[7961,3419,224,443],[6448,0,1248,583],[8032,2761,102,37],[7891,2860,282,557],[5122,4200,173,366],[4573,3877,571,321],[4150,4314,187,295],[4667,2277,701,426],[1250,2971,620,583],[5129,2747,279,35],[7400,2275,630,583],[3741,3557,1053,192],[2734,4419,165,202],[7267,2860,622,583],[0,4223,438,144],[8110,1589,80,80],[4544,1755,950,520],[2640,1849,950,520],[0,1910,950,520],[952,1910,950,520],[5370,2399,120,120],[6520,4356,178,293],[6062,2797,1203,369],[3592,1658,80,80],[5370,2521,120,120],[8087,656,80,123],[5496,2275,950,520],[1055,3318,174,216],[6520,4027,219,327],[2035,3978,324,407],[2361,3978,324,407],[8087,1053,101,40],[8137,1095,45,62],[8087,874,69,95],[3948,585,1248,583],[4941,4200,179,374],[2110,3590,1053,192],[7363,4404,167,203],[5851,3639,1053,192],[5960,4449,165,201],[4945,3169,173,57],[4945,3228,173,57],[2110,3522,173,57],[4339,4314,187,293],[8087,971,80,80],[5370,2277,120,120],[3750,1170,1247,583],[5948,2204,285,40],[3795,4365,219,219]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.紅茶按鈕 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.紅茶2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.分隔線 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.分隔線png複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.名片 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.對話1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.對話2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.星星 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.星 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.生活館設施播放影片介紹Luxgen生活館內的各項設施 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.生活館 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._02car = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._0 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._00 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._1png複製2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._15658833_1262594267130371_554229512_o = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._15682537_1262594263797038_698513357_o = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._17 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._19 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._1先生請問是要看車嗎 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._1林先生您好我是智傑這是我的名片 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._2png複製2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._2是的 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._20 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib._2f = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib._2h = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib._2q = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib._2今天就由我為您服務首先就讓我來介紹一下納智捷吧 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib._3請問您貴姓呢 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib._4噢我姓林png複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib._5林先生您好那今天有幾位要一起看車呢 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib._6bg = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._6兩位我跟我太太而已 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib._7bg = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib._7好的林先生汽車這邊請 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.男人客 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib._8我們 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.眼鏡 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.眼鏡2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.a1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.APP元件 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.APP畫面2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.APP介面1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ARROWpng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ARRR = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.BackToChp3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.bbbbbbbbb = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.bbbbbbbbbpng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.bg21 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.boy = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.bubu = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ccc = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.ccccccccccc = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.ccddddd = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.ccdws = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.cd1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.cddgfdge = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.cs = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.cs2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.cwecfwe = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.dsddqwaregtfew = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.框 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.框png複製3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.familymanc = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.familymancpng複製2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.familywomanc = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.feiouhwjncs = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.給手 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.flame = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.frefef = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.frfewfew = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.gfdsfsdfsdfdsfwerw = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.ghuewnifvcl = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ghuinbrewjvk = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.girl = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.gwefceww = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.h = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.手拿 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.桌 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.硬幣按鈕 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.lk = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.桌子2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.mancr = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.manctalk = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.manc = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.mancpng複製2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.minus = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.mjhyngbfv = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.mmmmmmmm = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.nk = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.杯子 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.plus = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.pointer = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.pointerpng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.popopopopopo = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.popopopopopopng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.rhebdgwew = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.s1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.s2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.s3按鈕 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.s3png複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211130950 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211131010 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211131053 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.sg1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.sg2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.ssss = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.sub2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.sub3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.swsws = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.平板大 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.女人客 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.TALK1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.TALK2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.ttap = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.TT畫面 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.TV畫面 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.U31BG = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.vd = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.vvvvvvvvvvvv = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.vvvvvvvvvvvvpng複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.womancr = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.wtf = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.wuu = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.ww = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.wwwwwwwwwwww = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.xxxxxxxxxxxx = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.繼續播放 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.白幕由上往下 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.門 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.亮 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.右 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.品牌DNA播放影片介紹Luxgen的品牌精神和理念 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.品牌DNA = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.左 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.接手 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.提示1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.提示2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.提示3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.提示4 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.暫停 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.沙發 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.盆栽 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.矩形18拷貝 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.矩形20 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.矩形25 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.矩形4拷貝2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.矩形4 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.確認按鈕 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.箭頭 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.箭頭zzzzzzzz = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000s_0000_馬路 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.賣車的 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.車款展示展現車型顏色外觀給賓客瀏覽 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.車款展示 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.迎賓服務提供多種選項讓賓客選擇自己喜愛的飲品 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.迎賓服務 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕png複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕2 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕2png複製 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.重新播放 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.體驗劇場 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖3 = function() {
	this.spriteSheet = ss["WTF_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.白幕由上往下();
	this.instance.parent = this;
	this.instance.setTransform(-350.5,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-213,701,426);


(lib.補間動畫106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.白幕由上往下();
	this.instance.parent = this;
	this.instance.setTransform(-350.5,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-213,701,426);


(lib.補間動畫105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.右();
	this.instance.parent = this;
	this.instance.setTransform(-315,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,-291.5,630,583);


(lib.補間動畫104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.右();
	this.instance.parent = this;
	this.instance.setTransform(-315,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,-291.5,630,583);


(lib.補間動畫102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.左();
	this.instance.parent = this;
	this.instance.setTransform(-311,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-291.5,622,583);


(lib.補間動畫101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopopng複製();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopopng複製();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP畫面2();
	this.instance.parent = this;
	this.instance.setTransform(-345.5,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-208.5,691,417);


(lib.補間動畫98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP畫面2();
	this.instance.parent = this;
	this.instance.setTransform(-345.5,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-208.5,691,417);


(lib.補間動畫97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手拿();
	this.instance.parent = this;
	this.instance.setTransform(-193.5,-279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.5,-279,387,558);


(lib.補間動畫92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手拿();
	this.instance.parent = this;
	this.instance.setTransform(-193.5,-279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.5,-279,387,558);


(lib.補間動畫91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.lk();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-101.5,303,203);


(lib.補間動畫85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mmmmmmmm();
	this.instance.parent = this;
	this.instance.setTransform(-27,-196.5);

	this.instance_1 = new lib.wwwwwwwwwwww();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-164,-169.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-196.5,328,393);


(lib.補間動畫76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mmmmmmmm();
	this.instance.parent = this;
	this.instance.setTransform(-27,-196.5);

	this.instance_1 = new lib.wwwwwwwwwwww();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-164,-169.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-196.5,328,393);


(lib.補間動畫75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbb();
	this.instance.parent = this;
	this.instance.setTransform(-91,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-190,182,380);


(lib.補間動畫74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbb();
	this.instance.parent = this;
	this.instance.setTransform(-91,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-190,182,380);


(lib.補間動畫73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.BackToChp3();
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-70.3,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-70.3,140.6,140.6);


(lib.補間動畫72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.BackToChp3();
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-70.3,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-70.3,140.6,140.6);


(lib.補間動畫68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.給手();
	this.instance.parent = this;
	this.instance.setTransform(-465.5,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.5,-248,931,496);


(lib.補間動畫51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.給手();
	this.instance.parent = this;
	this.instance.setTransform(-465.5,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.5,-248,931,496);


(lib.補間動畫50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.接手();
	this.instance.parent = this;
	this.instance.setTransform(-219,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-72,438,144);


(lib.補間動畫49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.接手();
	this.instance.parent = this;
	this.instance.setTransform(-219,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-72,438,144);


(lib.補間動畫48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womancr();
	this.instance.parent = this;
	this.instance.setTransform(-112,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-221.5,224,443);


(lib.補間動畫47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womancr();
	this.instance.parent = this;
	this.instance.setTransform(-112,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-221.5,224,443);


(lib.補間動畫46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ghuewnifvcl();
	this.instance.parent = this;
	this.instance.setTransform(-77,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-133.5,154,329);


(lib.補間動畫33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.賣車的();
	this.instance.parent = this;
	this.instance.setTransform(-89.5,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-187,179,374);


(lib.補間動畫25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.賣車的();
	this.instance.parent = this;
	this.instance.setTransform(-89.5,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-187,179,374);


(lib.補間動畫22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg21();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624,-291.5,1248,583);


(lib.補間動畫21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg21();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624,-291.5,1248,583);


(lib.補間動畫20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.boy();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-200,187,400);


(lib.補間動畫14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.boy();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-200,187,400);


(lib.補間動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bubu();
	this.instance.parent = this;
	this.instance.setTransform(-214,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-168,428,336);


(lib.補間動畫8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bubu();
	this.instance.parent = this;
	this.instance.setTransform(-214,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-168,428,336);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wuu();
	this.instance.parent = this;
	this.instance.setTransform(-51,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,102,37);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wuu();
	this.instance.parent = this;
	this.instance.setTransform(-51,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,102,37);


(lib.rtevg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.gwefceww();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.gfdsfsdfsdfdsfwerw();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mjhyngbfv();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP介面1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件105, new cjs.Rectangle(0,0,697,419), null);


(lib.元件103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.平板大();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件103, new cjs.Rectangle(0,0,826,537), null);


(lib.元件102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbbpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件102, new cjs.Rectangle(0,0,182,380), null);


(lib.元件101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cddgfdge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件101, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.rhebdgwew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件99, new cjs.Rectangle(0,0,950,520), null);


(lib.元件98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccccccccccc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件98, new cjs.Rectangle(0,0,950,520), null);


(lib.元件97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.dsddqwaregtfew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件97, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.vvvvvvvvvvvv();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件96, new cjs.Rectangle(0,0,168,359), null);


(lib.元件95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.體驗劇場();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件95, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件93複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cs2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件93複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cd1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件93, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件92, new cjs.Rectangle(0,0,878,581), null);


(lib.元件90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕2png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccddddd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件89, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pointerpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件87, new cjs.Rectangle(0,0,225,268), null);


(lib.元件86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.frfewfew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件86, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件85, new cjs.Rectangle(0,0,878,581), null);


(lib.元件84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.swsws();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件84, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件83複製5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2q();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製5, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2h();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製4, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2f();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製3, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2b();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製2, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.xxxxxxxxxxxx();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TV畫面();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83, new cjs.Rectangle(0,0,571,321), null);


(lib.元件82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.frefef();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件82, new cjs.Rectangle(0,0,878,581), null);


(lib.元件80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211131053();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件80, new cjs.Rectangle(0,0,717,447), null);


(lib.元件79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pointer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件79, new cjs.Rectangle(0,0,225,268), null);


(lib.元件77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形18拷貝();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s3按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,109);


(lib.元件75複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ttap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件75複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.a1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件75, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件72複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.h();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72複製, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ssss();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.繼續播放();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件71, new cjs.Rectangle(0,0,187,295), null);


(lib.元件70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.暫停();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件70, new cjs.Rectangle(0,0,178,293), null);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.重新播放();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件69, new cjs.Rectangle(0,0,187,293), null);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件68, new cjs.Rectangle(0,0,219,327), null);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ww();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件67, new cjs.Rectangle(0,0,282,557), null);


(lib.元件66複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccdws();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製3, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s3png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211131010();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件65, new cjs.Rectangle(0,0,715,446), null);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件62複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TALK2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62複製, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TALK1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.硬幣按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,75,75), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.確認按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,40);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅茶2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,49,16), null);


(lib.元件55複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.minus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.14,scaleY:1.14,x:-2,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.minus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.14,scaleY:1.14,x:-2,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.亮();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(0,0,279,35), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅茶按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,40);


(lib.元件48複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sub3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製3, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sub2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211130950();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(0,0,714,446), null);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.生活館();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,202);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.品牌DNA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,202);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.車款展示();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,203);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.迎賓服務();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,201);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.生活館設施播放影片介紹Luxgen生活館內的各項設施();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.車款展示展現車型顏色外觀給賓客瀏覽();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.品牌DNA播放影片介紹Luxgen的品牌精神和理念();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.迎賓服務提供多種選項讓賓客選擇自己喜愛的飲品();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,174,216), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP元件();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.名片();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,414,229), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymancpng複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,325,569), null);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mancpng複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,313,553), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.沙發();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,1203,369), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.杯子();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0,0,251,29), null);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ghuinbrewjvk();
	this.instance.parent = this;
	this.instance.setTransform(99,0);

	this.instance_1 = new lib.feiouhwjncs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0,0,269,345), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.752,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件18複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manctalk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18複製2, new cjs.Rectangle(0,0,314,553), null);


(lib.元件18複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mancr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18複製, new cjs.Rectangle(0,0,332,553), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,313,553), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymanc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,325,569), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02car();
	this.instance.parent = this;
	this.instance.setTransform(630,0);

	this.instance_1 = new lib.分隔線();
	this.instance_1.parent = this;
	this.instance_1.setTransform(620,0);

	this.instance_2 = new lib.門();
	this.instance_2.parent = this;

	this.instance_3 = new lib.wtf();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,1253,583), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,324,407), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形4拷貝2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,324,407), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.星星();
	this.instance.parent = this;
	this.instance.setTransform(7,5);

	this.instance_1 = new lib.星();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,5,90,91);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0000s_0000_馬路();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U31BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1314,740), null);


(lib._3now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.現在位置w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.提示w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._1main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.首頁w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib.nissannext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17,x:-17.2,y:-4.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:6.9,y:1.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.nissan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._15658833_1262594267130371_554229512_o();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,1,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._15682537_1262594263797038_698513357_o();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.補間動畫81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sg2();
	this.instance.parent = this;
	this.instance.setTransform(-174.5,12.5);

	this.instance_1 = new lib.sg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-159.5,12.5);

	this.instance_2 = new lib.元件95();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,623.5,291.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-623.5,-291.5,1247,583);


(lib.元件100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫81("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(623.5,291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件100, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// 圖層 1
	this.instance = new lib.補間動畫72("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.3,70.3);
	this.instance.alpha = 0;

	this.instance_1 = new lib.補間動畫73("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.3,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,140.6);


(lib.元件81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫66("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,47.5);

	this.instance_1 = new lib.補間動畫67("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,20.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫68("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.5,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:20.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:47.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,95);


(lib.元件78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_187 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(187).call(this.frame_187).wait(1));

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egz4ApgMAAAhS/MBnxAAAMAAABS/g");
	var mask_graphics_187 = new cjs.Graphics().p("Egz4ApgMAAAhS/MBnxAAAMAAABS/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:224.8,y:129.7}).wait(187).to({graphics:mask_graphics_187,x:224.8,y:129.7}).wait(1));

	// 圖層 1
	this.instance = new lib.元件79();
	this.instance.parent = this;
	this.instance.setTransform(112.5,217.7,1,1,0,0,0,112.5,134);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,83.7,225,268);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫63("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28,38.5);

	this.instance_1 = new lib.補間動畫64("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,13.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫65("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(28,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:13.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:38.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,77);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(24.5,8,1,1,0,0,0,24.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,49,16), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫60("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,23.5);

	this.instance_1 = new lib.補間動畫61("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.4,23.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫62("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:45.4},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,x:32.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,47);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// 圖層 1
	this.instance = new lib.元件53();
	this.instance.parent = this;
	this.instance.setTransform(137.7,-11.5,1,1,0,0,0,139.5,17.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-29,279,35);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫56("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.5,19);

	this.instance_1 = new lib.補間動畫57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,31);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫58("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:31},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:19},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,45,62);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件25();
	this.instance.parent = this;
	this.instance.setTransform(601.5,398.5,1,1,0,0,0,601.5,184.5);
	this.instance.alpha = 0.828;

	this.instance_1 = new lib.分隔線png複製();
	this.instance_1.parent = this;
	this.instance_1.setTransform(573,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0,0,1203,583), null);


(lib.元件20複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(83.2,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.039},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,0,112.8,117.5);


(lib.元件20複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(56.4,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.02},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(56.4,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.02},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(45,45.5,1,1,0,0,0,45,45.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,105,103), null);


(lib.元件5複製10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51,18.5);

	this.instance_1 = new lib.補間動畫4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,18.5);
	this.instance_1.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:27,alpha:0.211},16).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,37);


(lib.az = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件94();
	this.instance.parent = this;
	this.instance.setTransform(70.3,70.3,1,1,0,0,0,70.3,70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,140.6);


(lib.補間動畫59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件52();
	this.instance.parent = this;
	this.instance.setTransform(2,29.1,1,1,0,0,0,139.5,17.5);

	this.instance_1 = new lib.點陣圖1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-142.5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-20,285,40);


(lib.補間動畫7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-86,344,172);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121.2,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.7,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.2,-86,344.5,172);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121.1,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.8,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-86,344.3,172);


// stage content:
(lib.到32完 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://nini0601.github.io/contents/", "_self");
		}
	}
	this.frame_222 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(223);
		}
	}
	this.frame_421 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.star1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(424);
		}
	}
	this.frame_434 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.tip1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(435);
		}
	}
	this.frame_483 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.star2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(484);
		}
	}
	this.frame_494 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.tip2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(495);
		}
	}
	this.frame_610 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.arrow1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(614);
		}
	}
	this.frame_639 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.arrow2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(644);
		}
	}
	this.frame_664 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.arrow3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(669);
		}
	}
	this.frame_680 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.star3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(681);
		}
	}
	this.frame_693 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.TIP3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(694);
		}
	}
	this.frame_708 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.star4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(709);
		}
	}
	this.frame_723 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.tip4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(724);
		}
	}
	this.frame_2261 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.yingbinfuwu.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(2262);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.pingpaidna.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_35.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_35()
		{
			this.gotoAndPlay(3029);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.chekuanzhanshi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(3539);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.shenghuoguansheshi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_47.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_47()
		{
			this.gotoAndPlay(4225);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ezgg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_51.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_51()
		{
			this.gotoAndPlay(272);
		}
	}
	this.frame_2303 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.skipggggggggg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(2462);
		}
	}
	this.frame_2500 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.skippppppp.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_26.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_26()
		{
			this.gotoAndPlay(2576);
		}
	}
	this.frame_2615 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.redtea.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(2620);
		}
	}
	this.frame_2619 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_2630 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.adddddddddc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(2764);
		}
	}
	this.frame_2763 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
	}
	this.frame_2764 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.pppppppap.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(2769);
		}
		
		
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.rbeiopop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(2763);
		}
	}
	this.frame_2769 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.huhuuuuuu.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2764);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.RT.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30()
		{
			this.gotoAndPlay(2773);
		}
	}
	this.frame_2789 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ASDQWE.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_31.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_31()
		{
			this.gotoAndPlay(2790);
		}
	}
	this.frame_2824 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gggggggggggg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_32.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_32()
		{
			this.gotoAndPlay(2952);
		}
	}
	this.frame_2977 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bala.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_3069 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.qq.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_52.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_52()
		{
			this.gotoAndPlay(3199);
		}
	}
	this.frame_3218 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jj.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_53.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_53()
		{
			this.gotoAndPlay(3282);
		}
	}
	this.frame_3538 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.uuuy.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_3576 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gregewfde.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_42.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_42()
		{
			this.gotoAndPlay(3702);
		}
	}
	this.frame_3727 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kjhybrtvfdw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_43.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_43()
		{
			this.gotoAndPlay(3735);
		}
	}
	this.frame_3734 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_3752 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jtrfgsehgrethrtsd.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_44.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_44()
		{
			this.gotoAndPlay(3759);
		}
	}
	this.frame_3769 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hregwetgerghregewgw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_45.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_45()
		{
			this.gotoAndPlay(3770);
		}
	}
	this.frame_3935 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.vfvfvfvfv.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_54.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_54()
		{
			this.gotoAndPlay(4149);
		}
	}
	this.frame_4224 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.f.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_4261 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jh.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_49.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_49()
		{
			this.gotoAndPlay(4400);
		}
	}
	this.frame_4427 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.oi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_50.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_50()
		{
			this.gotoAndPlay(4494);
		}
	}
	this.frame_4725 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.m.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_4888 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gvregveew.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_57.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_57()
		{
			this.gotoAndPlay(4889);
		}
	}
	this.frame_4898 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jtyhrbgve.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_58.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_58()
		{
			this.gotoAndPlay(4899);
		}
	}
	this.frame_4924 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.nbtvredc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_59.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_59()
		{
			this.gotoAndPlay(4925);
		}
	}
	this.frame_4935 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.grvwef.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_60.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_60()
		{
			this.gotoAndPlay(4936);
		}
	}
	this.frame_4945 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kmuynbtgvf.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_61.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_61()
		{
			this.gotoAndPlay(4946);
		}
	}
	this.frame_4954 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jythrgve.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_62.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_62()
		{
			this.gotoAndPlay(4955);
		}
	}
	this.frame_5330 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.fewfwegwewfwe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_64.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_64()
		{
			this.gotoAndPlay(5331);
		}
	}
	this.frame_5340 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gergfwerfw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_63.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_63()
		{
			this.gotoAndPlay(5341);
		}
	}
	this.frame_5408 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gerwfweqwweqwwqdsa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_65.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_65()
		{
			this.gotoAndPlay(5409);
		}
	}
	this.frame_5417 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kjunhbhytr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_66.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_66()
		{
			this.gotoAndPlay(5418);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(168).call(this.frame_222).wait(199).call(this.frame_421).wait(13).call(this.frame_434).wait(49).call(this.frame_483).wait(11).call(this.frame_494).wait(116).call(this.frame_610).wait(29).call(this.frame_639).wait(25).call(this.frame_664).wait(16).call(this.frame_680).wait(13).call(this.frame_693).wait(15).call(this.frame_708).wait(15).call(this.frame_723).wait(1538).call(this.frame_2261).wait(42).call(this.frame_2303).wait(197).call(this.frame_2500).wait(115).call(this.frame_2615).wait(4).call(this.frame_2619).wait(11).call(this.frame_2630).wait(133).call(this.frame_2763).wait(1).call(this.frame_2764).wait(5).call(this.frame_2769).wait(20).call(this.frame_2789).wait(35).call(this.frame_2824).wait(153).call(this.frame_2977).wait(92).call(this.frame_3069).wait(149).call(this.frame_3218).wait(320).call(this.frame_3538).wait(38).call(this.frame_3576).wait(151).call(this.frame_3727).wait(7).call(this.frame_3734).wait(18).call(this.frame_3752).wait(17).call(this.frame_3769).wait(166).call(this.frame_3935).wait(289).call(this.frame_4224).wait(37).call(this.frame_4261).wait(166).call(this.frame_4427).wait(298).call(this.frame_4725).wait(163).call(this.frame_4888).wait(10).call(this.frame_4898).wait(26).call(this.frame_4924).wait(11).call(this.frame_4935).wait(10).call(this.frame_4945).wait(9).call(this.frame_4954).wait(376).call(this.frame_5330).wait(10).call(this.frame_5340).wait(68).call(this.frame_5408).wait(9).call(this.frame_5417).wait(421));

	// Actions
	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1261.7,57.2,1,1,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1165,57.2,1,1,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.home = new lib._1main();
	this.home.parent = this;
	this.home.setTransform(1068.2,57.2,1,1,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},54).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},168).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},37).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},147).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},49).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},11).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},116).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},29).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},25).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},16).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},427).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},99).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},265).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},655).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},58).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},34).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},41).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},197).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},115).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},22).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},111).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},20).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},35).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},153).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},52).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},40).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},118).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},31).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},253).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},67).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},38).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},151).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},7).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},18).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},166).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},12).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},277).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},37).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},166).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},298).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},150).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},21).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},11).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},9).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},45).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},331).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},68).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},9).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},420).wait(1));

	// 圖層 80
	this.kjunhbhytr = new lib.元件107();
	this.kjunhbhytr.parent = this;
	this.kjunhbhytr.setTransform(658,421.1,0.16,0.16,0,0,0,474.9,260);
	this.kjunhbhytr._off = true;
	new cjs.ButtonHelper(this.kjunhbhytr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.kjunhbhytr).wait(5409).to({_off:false},0).to({regX:475,scaleX:1,scaleY:1,y:421},8).to({regX:474.6,regY:259.9,scaleX:0.03,scaleY:0.03},8).to({_off:true},1).wait(412));

	// 圖層 78
	this.gerwfweqwweqwwqdsa = new lib.元件5複製10();
	this.gerwfweqwweqwwqdsa.parent = this;
	this.gerwfweqwweqwwqdsa.setTransform(659.1,229.2,1,1,0,0,0,52.5,-0.3);
	this.gerwfweqwweqwwqdsa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gerwfweqwweqwwqdsa).wait(5408).to({_off:false},0).to({_off:true},1).wait(429));

	// 圖層 77
	this.gergfwerfw = new lib.元件106();
	this.gergfwerfw.parent = this;
	this.gergfwerfw.setTransform(658,428,0.18,0.18,0,0,0,475,259.9);
	this.gergfwerfw._off = true;
	new cjs.ButtonHelper(this.gergfwerfw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gergfwerfw).wait(5331).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1},9).to({regX:474.8,scaleX:0.05,scaleY:0.05},8).to({_off:true},1).wait(489));

	// 圖層 76
	this.fewfwegwewfwe = new lib.元件5複製9();
	this.fewfwegwewfwe.parent = this;
	this.fewfwegwewfwe.setTransform(649.4,224.3,1,1,0,0,0,52.5,-0.3);
	this.fewfwegwewfwe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fewfwegwewfwe).wait(5330).to({_off:false},0).to({_off:true},1).wait(507));

	// 圖層 60 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5074 = new cjs.Graphics().p("EglCAVOMAAAgqbMBKFAAAMAAAAqbg");
	var mask_graphics_5115 = new cjs.Graphics().p("EglCAVOMAAAgqbMBKFAAAMAAAAqbg");
	var mask_graphics_5263 = new cjs.Graphics().p("EglCAVOMAAAgqbMBKFAAAMAAAAqbg");
	var mask_graphics_5405 = new cjs.Graphics().p("EglCAVOMAAAgqbMBKFAAAMAAAAqbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5074).to({graphics:mask_graphics_5074,x:1043.9,y:576.2}).wait(41).to({graphics:mask_graphics_5115,x:1043.9,y:576.2}).wait(1).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_graphics_5263,x:1043.9,y:576.2}).wait(86).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_graphics_5405,x:1043.9,y:576.2}).wait(433));

	// 圖層 59
	this.instance = new lib.補間動畫91("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1424.5,648.5);
	this.instance._off = true;

	this.instance_1 = new lib.補間動畫90("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1251.5,624.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫88("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1158.5,624.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.補間動畫89("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1084.5,627.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5074).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},12).to({state:[]},1).to({state:[{t:this.instance_3}]},147).to({state:[]},86).to({state:[{t:this.instance_3}]},56).to({state:[]},22).wait(411));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5074).to({_off:false},0).to({_off:true,x:1251.5,y:624.5},11).wait(753));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5074).to({_off:false},11).to({_off:true,x:1158.5},9).wait(744));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5085).to({_off:false},9).to({_off:true,x:1084.5,y:627.5},9).wait(735));

	// 圖層 58 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5047 = new cjs.Graphics().p("EgqrARlMAAAgjJMBVXAAAMAAAAjJg");
	var mask_1_graphics_5115 = new cjs.Graphics().p("EgqrARlMAAAgjJMBVXAAAMAAAAjJg");
	var mask_1_graphics_5263 = new cjs.Graphics().p("EgqrARlMAAAgjJMBVXAAAMAAAAjJg");
	var mask_1_graphics_5405 = new cjs.Graphics().p("EgqrARlMAAAgjJMBVXAAAMAAAAjJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5047).to({graphics:mask_1_graphics_5047,x:303.8,y:599.5}).wait(68).to({graphics:mask_1_graphics_5115,x:303.8,y:599.5}).wait(1).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_1_graphics_5263,x:303.8,y:599.5}).wait(86).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_5405,x:303.8,y:599.5}).wait(433));

	// 圖層 57
	this.instance_4 = new lib.補間動畫86("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-118.5,649.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5047).to({_off:false},0).to({x:-2.8,y:618.9},8).to({x:235.1},13).to({x:270.4,y:622.1},6).wait(41).to({startPosition:0},0).to({_off:true},1).wait(147).to({_off:false},0).to({_off:true},86).wait(56).to({_off:false},0).to({_off:true},22).wait(411));

	// 圖層 71
	this.instance_5 = new lib.cwecfwe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(33,367);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5271).to({_off:false},0).to({_off:true},78).wait(56).to({_off:false},0).to({_off:true},22).wait(411));

	// 圖層 75 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5299 = new cjs.Graphics().p("Eg5zAi4MAAAhFwMBznAAAMAAABFwg");
	var mask_2_graphics_5405 = new cjs.Graphics().p("Eg5zAi4MAAAhFwMBznAAAMAAABFwg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5299).to({graphics:mask_2_graphics_5299,x:648.9,y:352.3}).wait(50).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_2_graphics_5405,x:648.9,y:352.3}).wait(433));

	// 圖層 74
	this.instance_6 = new lib.補間動畫106("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(657.5,-84);
	this.instance_6._off = true;

	this.instance_7 = new lib.補間動畫107("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(657.5,342);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},5299).to({state:[{t:this.instance_7}]},31).to({state:[]},19).to({state:[{t:this.instance_7}]},56).to({state:[]},22).wait(411));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5299).to({_off:false},0).to({_off:true,y:342},31).wait(508));

	// 圖層 73 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_5271 = new cjs.Graphics().p("EgzSAtjMAAAhbFMBmlAAAMAAABbFg");
	var mask_3_graphics_5405 = new cjs.Graphics().p("EgzSAtjMAAAhbFMBmlAAAMAAABbFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(5271).to({graphics:mask_3_graphics_5271,x:952.7,y:420.5}).wait(78).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_3_graphics_5405,x:952.7,y:420.5}).wait(433));

	// 圖層 70
	this.instance_8 = new lib.補間動畫104("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1596,420.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.補間動畫105("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(970,420.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},5271).to({state:[{t:this.instance_9}]},24).to({state:[]},54).to({state:[{t:this.instance_9}]},56).to({state:[]},22).wait(411));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5271).to({_off:false},0).to({_off:true,x:970},24).wait(543));

	// 圖層 72 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_5271 = new cjs.Graphics().p("EgyJArrMAAAhXVMBkTAAAMAAABXVg");
	var mask_4_graphics_5405 = new cjs.Graphics().p("EgyJArrMAAAhXVMBkTAAAMAAABXVg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(5271).to({graphics:mask_4_graphics_5271,x:354,y:408.5}).wait(78).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_4_graphics_5405,x:354,y:408.5}).wait(433));

	// 圖層 68
	this.instance_10 = new lib.補間動畫102("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-278,420.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5271).to({_off:false},0).to({x:344},24).to({_off:true},54).wait(56).to({_off:false},0).to({_off:true},22).wait(411));

	// 圖層 67
	this.instance_11 = new lib.補間動畫100("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(657.5,370.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.補間動畫101("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(319.5,370.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5205).to({_off:false},0).to({_off:true,x:319.5},22).wait(611));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5205).to({_off:false},22).wait(6).to({startPosition:0},0).to({x:272.5,y:472.2},10).to({x:279.8,y:408},6).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,x:908.5,y:411.3,alpha:1},0).to({x:491.2,y:518.9},20).wait(8).to({startPosition:0},0).to({x:471.6,y:582.5},8).to({y:540.1},7).wait(7).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(23).to({x:957.4,y:569.4},0).to({x:735.5,y:536.8},13).wait(6).to({startPosition:0},0).to({x:709.4,y:580.8},6).to({x:724.1,y:525.4},6).to({_off:true},1).wait(379));

	// 圖層 66
	this.instance_13 = new lib.補間動畫98("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(476.5,423.5);
	this.instance_13.alpha = 0.25;
	this.instance_13._off = true;

	this.instance_14 = new lib.補間動畫99("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(476.5,423.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5188).to({_off:false},0).to({_off:true,alpha:1},6).wait(644));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5188).to({_off:false},6).wait(55).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(14).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({_off:true},32).wait(379));

	// 圖層 65
	this.instance_15 = new lib.補間動畫94("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(905.5,532.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.補間動畫95("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(588.5,349.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.補間動畫96("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(567.1,400.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.補間動畫97("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(572.2,334.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},5158).to({state:[{t:this.instance_16}]},13).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_18}]},6).to({state:[]},1).wait(645));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5158).to({_off:false},0).to({_off:true,x:588.5,y:349.3},13).wait(667));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5158).to({_off:false},13).wait(5).to({startPosition:0},0).to({_off:true,x:567.1,y:400.5},10).wait(652));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5176).to({_off:false},10).to({_off:true,x:572.2,y:334.5,alpha:0},6).wait(646));

	// 圖層 64
	this.instance_19 = new lib.元件105();
	this.instance_19.parent = this;
	this.instance_19.setTransform(476.3,422.5,1,1,0,0,0,348.5,209.5);
	this.instance_19.alpha = 0.238;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5149).to({_off:false},0).to({alpha:1},9).wait(28).to({alpha:0},6).to({_off:true},1).wait(645));

	// 圖層 63
	this.instance_20 = new lib.元件103();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1141.4,591.1,0.253,0.253,0,0,0,413.2,268.6);
	this.instance_20.alpha = 0.16;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5129).to({_off:false},0).to({x:923.6,alpha:0.5},3).to({regX:413,regY:268.5,scaleX:1,scaleY:1,x:473,y:425.5,alpha:1},12).wait(105).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(78).to({_off:true},32).wait(379));

	// 圖層 62 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_5116 = new cjs.Graphics().p("EghKAeNMAAAg8ZMBCVAAAMAAAA8Zg");
	var mask_5_graphics_5349 = new cjs.Graphics().p("EghKAeNMAAAg8ZMBCVAAAMAAAA8Zg");
	var mask_5_graphics_5363 = new cjs.Graphics().p("EghKAeNMAAAg8ZMBCVAAAMAAAA8Zg");
	var mask_5_graphics_5404 = new cjs.Graphics().p("EghKAeNMAAAg8ZMBCVAAAMAAAA8Zg");
	var mask_5_graphics_5427 = new cjs.Graphics().p("EghKAeNMAAAg8ZMBCVAAAMAAAA8Zg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(5116).to({graphics:mask_5_graphics_5116,x:1065.7,y:520.3}).wait(147).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_5_graphics_5349,x:1065.7,y:520.3}).wait(14).to({graphics:mask_5_graphics_5363,x:1065.7,y:520.3}).wait(41).to({graphics:mask_5_graphics_5404,x:1065.7,y:520.3}).wait(23).to({graphics:mask_5_graphics_5427,x:1065.7,y:520.3}).wait(411));

	// 圖層 61
	this.instance_21 = new lib.補間動畫92("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1079.5,649);
	this.instance_21._off = true;

	this.instance_22 = new lib.補間動畫93("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1079.5,436);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_21,this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(5116).to({_off:false},0).to({_off:true,y:436},13).wait(709));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5116).to({_off:false},13).wait(120).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(14).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({_off:true},32).wait(379));

	// 圖層 55
	this.instance_23 = new lib.TT畫面();
	this.instance_23.parent = this;
	this.instance_23.setTransform(33,129);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(5035).to({_off:false},0).to({_off:true},81).wait(147).to({_off:false},0).to({_off:true},86).wait(489));

	// 圖層 54 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_4984 = new cjs.Graphics().p("EgfoAj6MAAAhHzMA/RAAAMAAABHzg");
	var mask_6_graphics_5023 = new cjs.Graphics().p("EgfoAj6MAAAhHzMA/RAAAMAAABHzg");
	var mask_6_graphics_5034 = new cjs.Graphics().p("EgfoAj6MAAAhHzMA/RAAAMAAABHzg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(4984).to({graphics:mask_6_graphics_4984,x:236.3,y:487}).wait(39).to({graphics:mask_6_graphics_5023,x:236.3,y:487}).wait(11).to({graphics:mask_6_graphics_5034,x:236.3,y:487}).wait(804));

	// 圖層 53
	this.instance_24 = new lib.補間動畫82("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-86.5,498);
	this.instance_24._off = true;

	this.instance_25 = new lib.補間動畫83("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-7.5,461);
	this.instance_25._off = true;

	this.instance_26 = new lib.補間動畫85("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(253.5,498);

	var maskedShapeInstanceList = [this.instance_24,this.instance_25,this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},4984).to({state:[{t:this.instance_25}]},7).to({state:[{t:this.instance_25}]},6).to({state:[{t:this.instance_25}]},7).to({state:[{t:this.instance_25}]},7).to({state:[{t:this.instance_25}]},6).to({state:[{t:this.instance_26}]},6).to({state:[]},12).wait(803));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(4984).to({_off:false},0).to({_off:true,x:-7.5,y:461},7).wait(847));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4984).to({_off:false},7).to({x:53.6,y:490},6).to({x:108.2,y:467.5},7).to({x:137.1,y:490},7).to({x:185.3,y:473},6).to({_off:true,x:253.5,y:498},6).wait(815));

	// 圖層 52
	this.instance_27 = new lib.元件102();
	this.instance_27.parent = this;
	this.instance_27.setTransform(975,471,1,1,0,0,0,91,190);
	this.instance_27.alpha = 0.328;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(4968).to({_off:false},0).to({alpha:1},13).to({_off:true},54).wait(803));

	// 圖層 51
	this.instance_28 = new lib.元件101();
	this.instance_28.parent = this;
	this.instance_28.setTransform(657.5,427.5,1,1,0,0,0,623.5,291.5);
	this.instance_28.alpha = 0.352;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(4968).to({_off:false},0).to({alpha:1},13).to({_off:true},54).wait(803));

	// 圖層 49
	this.jythrgve = new lib.rtevg();
	this.jythrgve.parent = this;
	this.jythrgve.setTransform(677.1,427.1,0.253,0.253,0,0,0,475,260.1);
	this.jythrgve._off = true;
	new cjs.ButtonHelper(this.jythrgve, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jythrgve).wait(4946).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1,x:677,y:427},8).to({regX:474.9,regY:259.9,scaleX:0.02,scaleY:0.02},7).to({_off:true},1).wait(876));

	// 圖層 41
	this.kmuynbtgvf = new lib.元件5複製8();
	this.kmuynbtgvf.parent = this;
	this.kmuynbtgvf.setTransform(573.4,295.1,1,1,0,0,0,52.5,-0.3);
	this.kmuynbtgvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kmuynbtgvf).wait(4945).to({_off:false},0).to({_off:true},1).wait(892));

	// 提示間情
	this.grvwef = new lib.元件99();
	this.grvwef.parent = this;
	this.grvwef.setTransform(657.1,436.1,0.117,0.117,0,0,0,475.1,260);
	this.grvwef._off = true;
	new cjs.ButtonHelper(this.grvwef, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.grvwef).wait(4925).to({_off:false},0).to({regX:475,scaleX:1,scaleY:1,x:657,y:436},10).to({regX:474.9,regY:259.9,scaleX:0.02,scaleY:0.02},9).to({_off:true},1).wait(893));

	// 星星知我星
	this.nbtvredc = new lib.元件5複製7();
	this.nbtvredc.parent = this;
	this.nbtvredc.setTransform(813.3,293.8,1,1,0,0,0,52.5,-0.3);
	this.nbtvredc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nbtvredc).wait(4924).to({_off:false},0).to({_off:true},1).wait(913));

	// 結
	this.instance_29 = new lib.vvvvvvvvvvvvpng複製();
	this.instance_29.parent = this;
	this.instance_29.setTransform(923,174,1.474,1.474);

	this.instance_30 = new lib.眼鏡();
	this.instance_30.parent = this;
	this.instance_30.setTransform(925,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},4913).to({state:[{t:this.instance_30}]},11).to({state:[]},44).wait(870));

	// 人客
	this.instance_31 = new lib.vd();
	this.instance_31.parent = this;
	this.instance_31.setTransform(33,138);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4913).to({_off:false},0).to({_off:true},55).wait(870));

	// 2背景
	this.instance_32 = new lib.桌子2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(33,132);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(4913).to({_off:false},0).to({_off:true},55).wait(870));

	// 提示哥哥
	this.jtyhrbgve = new lib.元件98();
	this.jtyhrbgve.parent = this;
	this.jtyhrbgve.setTransform(657,438.1,0.122,0.122,0,0,0,475,260.1);
	this.jtyhrbgve._off = true;
	new cjs.ButtonHelper(this.jtyhrbgve, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jtyhrbgve).wait(4889).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1,y:438},9).to({regX:474.6,scaleX:0.02,scaleY:0.02,y:438.1},8).to({_off:true},1).wait(931));

	// 高速星星
	this.gvregveew = new lib.元件5複製6();
	this.gvregveew.parent = this;
	this.gvregveew.setTransform(648.5,187.7,1,1,0,0,0,52.5,-0.3);
	this.gvregveew._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gvregveew).wait(4888).to({_off:false},0).to({_off:true},1).wait(949));

	// 眼鏡仔
	this.instance_33 = new lib.元件97();
	this.instance_33.parent = this;
	this.instance_33.setTransform(658,425.5,1,1,0,0,0,624,291.5);
	this.instance_33.alpha = 0.5;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(4870).to({_off:false},0).to({alpha:1},11).to({_off:true},32).wait(925));

	// 圖層 28 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_4752 = new cjs.Graphics().p("Eg0wA3xMAAAhQfMBu1AAAMAAABQfg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(4752).to({graphics:mask_7_graphics_4752,x:371.7,y:356.9}).wait(1086));

	// J
	this.instance_34 = new lib.補間動畫74("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(-91,516);
	this.instance_34._off = true;

	this.instance_35 = new lib.補間動畫75("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(512,516);

	this.instance_36 = new lib.元件96();
	this.instance_36.parent = this;
	this.instance_36.setTransform(522,515.5,1,1,0,0,0,84,179.5);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_34,this.instance_35,this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34}]},4752).to({state:[{t:this.instance_34}]},10).to({state:[{t:this.instance_34}]},4).to({state:[{t:this.instance_34}]},5).to({state:[{t:this.instance_34}]},5).to({state:[{t:this.instance_34}]},5).to({state:[{t:this.instance_34}]},5).to({state:[{t:this.instance_34}]},5).to({state:[{t:this.instance_34}]},6).to({state:[{t:this.instance_35}]},5).to({state:[{t:this.instance_36}]},18).to({state:[{t:this.instance_36}]},6).to({state:[{t:this.instance_36}]},18).to({state:[]},69).wait(925));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(4752).to({_off:false},0).to({x:91,y:495.1},10).to({x:132.5,y:509.6},4).to({x:185.5,y:527},5).to({x:233.8,y:490.3},5).to({x:306.1,y:516},5).to({x:376.9,y:490.3},5).to({x:434.7,y:516},5).to({x:487.8,y:503},6).to({_off:true,x:512,y:516},5).wait(1036));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(4820).to({_off:false},0).wait(6).to({scaleX:0.78,scaleY:0.78,x:598.4,y:471.2},18).to({_off:true},69).wait(925));

	// 圖層 21 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_4752 = new cjs.Graphics().p("EgqFA3wMAAAhPOMBZeAAAMAAABPOg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(4752).to({graphics:mask_8_graphics_4752,x:303.3,y:356.8}).wait(1086));

	// 人客
	this.instance_37 = new lib.補間動畫76("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(-365.4,509.5);
	this.instance_37._off = true;

	this.instance_38 = new lib.補間動畫77("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(199,509.5);

	var maskedShapeInstanceList = [this.instance_37,this.instance_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37}]},4752).to({state:[{t:this.instance_37}]},10).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},4).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},6).to({state:[{t:this.instance_38}]},5).to({state:[]},111).wait(925));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(4752).to({_off:false},0).to({x:-243.3},10).to({x:-211.1},5).to({x:-135.6},4).to({x:-74.5},5).to({x:5.8,y:487},5).to({x:83,y:507.9},5).to({x:131.2,y:483.8},5).to({x:179.7,y:520.5},6).to({_off:true,x:199,y:509.5},5).wait(1036));

	// 背景
	this.instance_39 = new lib.元件100();
	this.instance_39.parent = this;
	this.instance_39.setTransform(658.5,425.5,1,1,0,0,0,623.5,291.5);
	this.instance_39.alpha = 0.32;
	this.instance_39._off = true;

	this.instance_40 = new lib.sg2();
	this.instance_40.parent = this;
	this.instance_40.setTransform(484,438);

	this.instance_41 = new lib.sg1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(499,438);

	this.instance_42 = new lib.元件95();
	this.instance_42.parent = this;
	this.instance_42.setTransform(658.5,425.5,1,1,0,0,0,623.5,291.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},4739).to({state:[{t:this.instance_39}]},12).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40}]},1).to({state:[{t:this.instance_42}]},105).to({state:[]},56).wait(925));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(4739).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(1086));

	// 圖層 27
	this.m = new lib.元件90();
	this.m.parent = this;
	this.m.setTransform(982,541.9);
	this.m.alpha = 0;
	this.m._off = true;
	new cjs.ButtonHelper(this.m, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.m).wait(4708).to({_off:false},0).to({alpha:1},17).to({_off:true},1).wait(1112));

	// 圖層 26
	this.instance_43 = new lib.元件72複製();
	this.instance_43.parent = this;
	this.instance_43.setTransform(657.5,418,1,1,0,0,0,536.5,222);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(4708).to({_off:false},0).to({alpha:1},17).to({_off:true},1).wait(1112));

	// 圖層 25
	this.instance_44 = new lib.元件71();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1066.5,322.4,1,1,0,0,0,93.5,147.5);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(4620).to({_off:false},0).to({alpha:1},9).wait(9).to({alpha:0},10).to({_off:true},78).wait(1112));

	// 圖層 24
	this.instance_45 = new lib.元件70();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1066,325.5,1,1,0,0,0,89,146.5);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(4591).to({_off:false},0).to({alpha:1},7).wait(10).to({alpha:0},9).to({_off:true},109).wait(1112));

	// 圖層 23
	this.instance_46 = new lib.元件69();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1064.5,325.5,1,1,0,0,0,93.5,146.5);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(4570).to({_off:false},0).to({alpha:1},7).wait(8).to({alpha:0},5).to({_off:true},136).wait(1112));

	// 圖層 22
	this.instance_47 = new lib.元件68();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1064.5,325.5,1,1,0,0,0,109.5,163.5);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(4570).to({_off:false},0).to({alpha:1},7).wait(8).to({alpha:0},5).wait(1).to({alpha:1},7).wait(10).to({alpha:0},9).wait(3).to({alpha:1},9).wait(9).to({alpha:0},10).to({_off:true},34).wait(1156));

	// 圖層 19
	this.jh = new lib.元件93();
	this.jh.parent = this;
	this.jh.setTransform(678.5,601,1,1,0,0,0,526.5,96);
	this.jh.alpha = 0;
	this.jh._off = true;

	this.oi = new lib.元件93複製();
	this.oi.parent = this;
	this.oi.setTransform(678.5,601,1,1,0,0,0,526.5,96);
	this.oi.alpha = 0;
	this.oi._off = true;

	this.instance_48 = new lib.元件66複製3();
	this.instance_48.parent = this;
	this.instance_48.setTransform(662.5,605,1,1,0,0,0,526.5,96);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jh).wait(4248).to({_off:false},0).to({alpha:1},13).wait(139).to({alpha:0},11).to({_off:true},6).wait(1421));
	this.timeline.addTween(cjs.Tween.get(this.oi).wait(4417).to({_off:false},0).to({alpha:1},10).wait(67).to({alpha:0},7).to({_off:true},20).wait(1317));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(4521).to({_off:false},0).to({alpha:1},13).wait(165).to({alpha:0},7).to({_off:true},20).wait(1112));

	// 女
	this.instance_49 = new lib.元件67();
	this.instance_49.parent = this;
	this.instance_49.setTransform(208,425.5,1,1,0,0,0,141,278.5);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(4507).to({_off:false},0).to({alpha:1},11).to({_off:true},208).wait(1112));

	// 圖層 17
	this.lkk = new lib.元件92();
	this.lkk.parent = this;
	this.lkk.setTransform(975.8,423.4,1,1,0,0,0,438.8,290.4);
	this.lkk.alpha = 0;
	this.lkk._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lkk).wait(4225).to({_off:false},0).wait(1).to({x:937.5,alpha:0.039},0).wait(1).to({x:902.5,alpha:0.078},0).wait(1).to({x:870.7,alpha:0.129},0).wait(1).to({x:841.9,alpha:0.172},0).wait(1).to({x:816,alpha:0.211},0).wait(1).to({x:792.8,alpha:0.262},0).wait(1).to({x:772.2,alpha:0.301},0).wait(1).to({x:754,alpha:0.34},0).wait(1).to({x:738.1,alpha:0.391},0).wait(1).to({x:724.3,alpha:0.43},0).wait(1).to({x:712.5,alpha:0.469},0).wait(1).to({x:702.4,alpha:0.52},0).wait(1).to({x:694.1,alpha:0.559},0).wait(1).to({x:687.3,alpha:0.602},0).wait(1).to({x:681.8,alpha:0.648},0).wait(1).to({x:677.5,alpha:0.691},0).wait(1).to({x:674.3,alpha:0.73},0).wait(1).to({x:672,alpha:0.781},0).wait(1).to({x:670.5,alpha:0.82},0).wait(1).to({x:669.5,alpha:0.859},0).wait(1).to({x:669.1,alpha:0.91},0).wait(1).to({x:668.9,alpha:0.949},0).wait(1).to({x:668.8,alpha:1},0).wait(300).to({_off:true},178).wait(1112));

	// 圖層 16
	this.f = new lib.元件90();
	this.f.parent = this;
	this.f.setTransform(1081.5,587.5,1,1,0,0,0,86.5,28.5);
	this.f.alpha = 0;
	this.f._off = true;
	new cjs.ButtonHelper(this.f, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.f).wait(4214).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(1613));

	// 圖層 13
	this.vfvfvf = new lib.元件89();
	this.vfvfvf.parent = this;
	this.vfvfvf.setTransform(657.5,423,1,1,0,0,0,536.5,222);
	this.vfvfvf.alpha = 0;
	this.vfvfvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vfvfvf).wait(4214).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(1613));

	// 圖層 2
	this.instance_50 = new lib.元件83();
	this.instance_50.parent = this;
	this.instance_50.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.instance_51 = new lib.元件83複製();
	this.instance_51.parent = this;
	this.instance_51.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.instance_52 = new lib.元件83複製2();
	this.instance_52.parent = this;
	this.instance_52.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);

	this.instance_53 = new lib.元件83複製3();
	this.instance_53.parent = this;
	this.instance_53.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);

	this.instance_54 = new lib.元件83複製4();
	this.instance_54.parent = this;
	this.instance_54.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);

	this.instance_55 = new lib.元件83複製5();
	this.instance_55.parent = this;
	this.instance_55.setTransform(969.5,345.5,1,1,0,0,0,285.5,160.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},3807).to({state:[{t:this.instance_50}]},7).to({state:[{t:this.instance_50}]},93).to({state:[{t:this.instance_50}]},5).to({state:[{t:this.instance_51}]},4).to({state:[{t:this.instance_51}]},22).to({state:[{t:this.instance_52}]},220).to({state:[{t:this.instance_53}]},6).to({state:[{t:this.instance_54}]},6).to({state:[{t:this.instance_55}]},7).to({state:[{t:this.instance_51}]},8).to({state:[]},40).wait(1613));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(3807).to({_off:false},0).to({alpha:1},7).wait(93).to({alpha:0},5).to({_off:true},4).wait(1922));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(3916).to({_off:false},0).to({alpha:1},22).to({_off:true},220).wait(27).to({_off:false},0).to({_off:true},40).wait(1613));

	// 圖層 9
	this.instance_56 = new lib.元件87();
	this.instance_56.parent = this;
	this.instance_56.setTransform(590,470.9,1,1,0,0,0,112.5,134);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(4136).to({_off:false},0).to({alpha:1},13).wait(8).to({x:656.5,y:513},2).to({x:697.5,y:571},3).to({x:663,y:647},3).to({x:590,y:667.5},4).to({x:502.9,y:656.4},4).to({x:472.5,y:581},4).to({x:501.3,y:510.5},4).to({x:590,y:470.9},4).wait(4).to({x:746.6,y:522},7).wait(3).to({y:559},4).to({x:759.6,y:516},5).to({_off:true},17).wait(1613));

	// 圖層 10
	this.instance_57 = new lib.點陣圖3();
	this.instance_57.parent = this;
	this.instance_57.setTransform(366,340);

	this.instance_58 = new lib._00();
	this.instance_58.parent = this;
	this.instance_58.setTransform(366,340);

	this.instance_59 = new lib._0();
	this.instance_59.parent = this;
	this.instance_59.setTransform(366,340);

	this.instance_60 = new lib._1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(366,340);

	this.instance_61 = new lib._2();
	this.instance_61.parent = this;
	this.instance_61.setTransform(366,340);

	this.instance_62 = new lib._3();
	this.instance_62.parent = this;
	this.instance_62.setTransform(366,340);

	this.instance_63 = new lib._4();
	this.instance_63.parent = this;
	this.instance_63.setTransform(366,340);

	this.instance_64 = new lib._5();
	this.instance_64.parent = this;
	this.instance_64.setTransform(366,340);

	this.instance_65 = new lib._6();
	this.instance_65.parent = this;
	this.instance_65.setTransform(366,340);

	this.instance_66 = new lib._7();
	this.instance_66.parent = this;
	this.instance_66.setTransform(366,340);

	this.instance_67 = new lib._8();
	this.instance_67.parent = this;
	this.instance_67.setTransform(366,340);

	this.instance_68 = new lib._9();
	this.instance_68.parent = this;
	this.instance_68.setTransform(366,340);

	this.instance_69 = new lib._10();
	this.instance_69.parent = this;
	this.instance_69.setTransform(366,340);

	this.instance_70 = new lib._11();
	this.instance_70.parent = this;
	this.instance_70.setTransform(366,340);

	this.instance_71 = new lib._12();
	this.instance_71.parent = this;
	this.instance_71.setTransform(366,340);

	this.instance_72 = new lib._13();
	this.instance_72.parent = this;
	this.instance_72.setTransform(366,340);

	this.instance_73 = new lib._14();
	this.instance_73.parent = this;
	this.instance_73.setTransform(366,340);

	this.instance_74 = new lib._15();
	this.instance_74.parent = this;
	this.instance_74.setTransform(366,340);

	this.instance_75 = new lib._16();
	this.instance_75.parent = this;
	this.instance_75.setTransform(366,340);

	this.instance_76 = new lib._17();
	this.instance_76.parent = this;
	this.instance_76.setTransform(366,340);

	this.instance_77 = new lib._18();
	this.instance_77.parent = this;
	this.instance_77.setTransform(366,340);

	this.instance_78 = new lib._19();
	this.instance_78.parent = this;
	this.instance_78.setTransform(366,340);

	this.instance_79 = new lib._20();
	this.instance_79.parent = this;
	this.instance_79.setTransform(366,340);

	this.instance_80 = new lib._21();
	this.instance_80.parent = this;
	this.instance_80.setTransform(366,340);

	this.instance_81 = new lib._22();
	this.instance_81.parent = this;
	this.instance_81.setTransform(366,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_57}]},4157).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_57}]},1).to({state:[]},43).wait(1613));

	// 圖層 8
	this.vfvfvfvfv = new lib.元件86();
	this.vfvfvfvfv.parent = this;
	this.vfvfvfvfv.setTransform(656.5,602,1,1,0,0,0,526.5,96);
	this.vfvfvfvfv.alpha = 0;
	this.vfvfvfvfv._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vfvfvfvfv).wait(3929).to({_off:false},0).to({alpha:1},6).wait(214).to({alpha:0},5).to({_off:true},71).wait(1613));

	// 圖層 6
	this.instance_82 = new lib.元件85();
	this.instance_82.parent = this;
	this.instance_82.setTransform(475,424.5,1,1,0,0,0,439,290.5);
	this.instance_82.alpha = 0;
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(3916).to({_off:false},0).to({alpha:1},22).to({_off:true},287).wait(1613));

	// 圖層 4
	this.instance_83 = new lib.元件84();
	this.instance_83.parent = this;
	this.instance_83.setTransform(656.5,609,1,1,0,0,0,526.5,96);
	this.instance_83.alpha = 0;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(3807).to({_off:false},0).to({alpha:1},7).wait(93).to({alpha:0},5).to({_off:true},313).wait(1613));

	// 圖層 56
	this.instance_84 = new lib.元件82();
	this.instance_84.parent = this;
	this.instance_84.setTransform(658,424.6,1,1,0,0,0,439,290.5);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(3780).to({_off:false},0).wait(9).to({x:477.9},16).wait(102).to({alpha:0},5).to({_off:true},1).wait(1925));

	// hand
	this.instance_85 = new lib.元件78();
	this.instance_85.parent = this;
	this.instance_85.setTransform(576.5,530.7,1,1,0,0,0,112.5,134);
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(3769).to({_off:false},0).to({_off:true},1).wait(2068));

	// tip
	this.hregwetgerghregewgw = new lib.元件77();
	this.hregwetgerghregewgw.parent = this;
	this.hregwetgerghregewgw.setTransform(658.1,425.5,0.239,0.239,0,0,0,472.9,257);
	this.hregwetgerghregewgw._off = true;
	new cjs.ButtonHelper(this.hregwetgerghregewgw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hregwetgerghregewgw).wait(3759).to({_off:false},0).to({regY:257.1,scaleX:1,scaleY:1,x:658,y:425.6},10).to({regX:472.3,regY:256.7,scaleX:0.02,scaleY:0.02,y:425.5},10).to({_off:true},1).wait(2058));

	// 星光美少女
	this.jtrfgsehgrethrtsd = new lib.元件5複製5();
	this.jtrfgsehgrethrtsd.parent = this;
	this.jtrfgsehgrethrtsd.setTransform(384.3,121.1,1,1,0,0,0,52.5,-0.3);
	this.jtrfgsehgrethrtsd._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jtrfgsehgrethrtsd).wait(3752).to({_off:false},0).to({_off:true},1).wait(2085));

	// 箭頭老師
	this.instance_86 = new lib.元件81();
	this.instance_86.parent = this;
	this.instance_86.setTransform(382.5,394.8,1,1,0,0,0,34.5,47.5);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(3727).to({_off:false},0).wait(7).to({_off:true},1).wait(2103));

	// s3按鈕
	this.kjhybrtvfdw = new lib.元件76();
	this.kjhybrtvfdw.parent = this;
	this.kjhybrtvfdw.setTransform(301.8,205.1);
	this.kjhybrtvfdw._off = true;
	new cjs.ButtonHelper(this.kjhybrtvfdw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.kjhybrtvfdw).wait(3727).to({_off:false},0).wait(7).to({_off:true},1).wait(2103));

	// 字幕
	this.gregewfde = new lib.元件75();
	this.gregewfde.parent = this;
	this.gregewfde.setTransform(658.5,591.5,1,1,0,0,0,526.5,96);
	this.gregewfde.alpha = 0;
	this.gregewfde._off = true;

	this.instance_87 = new lib.元件75複製2();
	this.instance_87.parent = this;
	this.instance_87.setTransform(658.5,591.5,1,1,0,0,0,526.5,96);
	this.instance_87.alpha = 0;
	this.instance_87._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gregewfde).wait(3566).to({_off:false},0).to({alpha:1},6).wait(139).to({alpha:0},7).to({_off:true},3).wait(2117));
	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(3721).to({_off:false},0).to({alpha:1},13).to({alpha:0},11).to({_off:true},1).wait(2092));

	// 車款背景
	this.eeujbhvf = new lib.元件80();
	this.eeujbhvf.parent = this;
	this.eeujbhvf.setTransform(843.4,428.5,1,1,0,0,0,358.3,223.4);
	this.eeujbhvf.alpha = 0;
	this.eeujbhvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eeujbhvf).wait(3539).to({_off:false},0).wait(1).to({x:820.5,alpha:0.039},0).wait(1).to({x:799.6,alpha:0.078},0).wait(1).to({x:780.6,alpha:0.129},0).wait(1).to({x:763.5,alpha:0.172},0).wait(1).to({x:748,alpha:0.211},0).wait(1).to({x:734.2,alpha:0.262},0).wait(1).to({x:721.8,alpha:0.301},0).wait(1).to({x:711,alpha:0.34},0).wait(1).to({x:701.5,alpha:0.391},0).wait(1).to({x:693.2,alpha:0.43},0).wait(1).to({x:686.2,alpha:0.469},0).wait(1).to({x:680.2,alpha:0.52},0).wait(1).to({x:675.2,alpha:0.559},0).wait(1).to({x:671.1,alpha:0.602},0).wait(1).to({x:667.9,alpha:0.648},0).wait(1).to({x:665.3,alpha:0.691},0).wait(1).to({x:663.4,alpha:0.73},0).wait(1).to({x:662,alpha:0.781},0).wait(1).to({x:661.1,alpha:0.82},0).wait(1).to({x:660.6,alpha:0.859},0).wait(1).to({x:660.3,alpha:0.91},0).wait(1).to({x:660.2,alpha:0.949},0).wait(1).to({x:660.1,alpha:1},0).to({_off:true},218).wait(2058));

	// 圖層 48
	this.uuuy = new lib.元件73();
	this.uuuy.parent = this;
	this.uuuy.setTransform(1087.5,578.5,1,1,0,0,0,86.5,28.5);
	this.uuuy.alpha = 0;
	this.uuuy._off = true;
	new cjs.ButtonHelper(this.uuuy, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.uuuy).wait(3526).to({_off:false},0).to({alpha:1},11).to({_off:true},2).wait(2299));

	// 圖層 47
	this.instance_88 = new lib.元件72();
	this.instance_88.parent = this;
	this.instance_88.setTransform(657.5,418,1,1,0,0,0,536.5,222);
	this.instance_88.alpha = 0;
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(3526).to({_off:false},0).to({alpha:1},11).to({_off:true},2).wait(2299));

	// 圖層 46
	this.instance_89 = new lib.元件71();
	this.instance_89.parent = this;
	this.instance_89.setTransform(1066.5,322.4,1,1,0,0,0,93.5,147.5);
	this.instance_89.alpha = 0;
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(3425).to({_off:false},0).to({alpha:1},8).wait(67).to({alpha:0},20).to({_off:true},19).wait(2299));

	// 圖層 45
	this.instance_90 = new lib.元件70();
	this.instance_90.parent = this;
	this.instance_90.setTransform(1066,325.5,1,1,0,0,0,89,146.5);
	this.instance_90.alpha = 0;
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(3400).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},3).to({_off:true},36).wait(2299));

	// 圖層 44
	this.instance_91 = new lib.元件69();
	this.instance_91.parent = this;
	this.instance_91.setTransform(1064.5,325.5,1,1,0,0,0,93.5,146.5);
	this.instance_91.alpha = 0;
	this.instance_91._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(3375).to({_off:false},0).to({alpha:1},13).wait(112).to({alpha:0},3).to({_off:true},36).wait(2299));

	// 圖層 43
	this.instance_92 = new lib.元件68();
	this.instance_92.parent = this;
	this.instance_92.setTransform(1064.5,325.5,1,1,0,0,0,109.5,163.5);
	this.instance_92.alpha = 0;
	this.instance_92._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(3375).to({_off:false},0).to({alpha:1},13).wait(112).to({alpha:0},3).to({_off:true},36).wait(2299));

	// 對話框
	this.qq = new lib.元件66();
	this.qq.parent = this;
	this.qq.setTransform(662.5,605,1,1,0,0,0,526.5,96);
	this.qq.alpha = 0;
	this.qq._off = true;

	this.jj = new lib.元件66複製();
	this.jj.parent = this;
	this.jj.setTransform(662.5,605,1,1,0,0,0,526.5,96);
	this.jj.alpha = 0;
	this.jj._off = true;

	this.instance_93 = new lib.元件66複製2();
	this.instance_93.parent = this;
	this.instance_93.setTransform(662.5,605,1,1,0,0,0,526.5,96);
	this.instance_93.alpha = 0;
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.qq).wait(3053).to({_off:false},0).to({alpha:1},16).wait(130).to({alpha:0},7).to({_off:true},4).wait(2628));
	this.timeline.addTween(cjs.Tween.get(this.jj).wait(3210).to({_off:false},0).to({alpha:1},8).wait(64).to({alpha:0},13).wait(4).to({_off:true},15).wait(2524));
	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(3314).to({_off:false},0).to({alpha:1},13).wait(173).to({alpha:0},20).to({_off:true},19).wait(2299));

	// 女
	this.instance_94 = new lib.元件67();
	this.instance_94.parent = this;
	this.instance_94.setTransform(208,425.5,1,1,0,0,0,141,278.5);
	this.instance_94.alpha = 0;
	this.instance_94._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(3299).to({_off:false},0).to({alpha:1},11).to({_off:true},229).wait(2299));

	// 品牌DNA畫面
	this.instance_95 = new lib.元件65();
	this.instance_95.parent = this;
	this.instance_95.setTransform(351,425.5,1,1,0,0,0,357.3,222.9);
	this.instance_95.alpha = 0;
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(3029).to({_off:false},0).wait(1).to({x:389.5,y:425.8,alpha:0.039},0).wait(1).to({x:424.6,y:426,alpha:0.078},0).wait(1).to({x:456.5,y:426.3,alpha:0.129},0).wait(1).to({x:485.4,y:426.5,alpha:0.172},0).wait(1).to({x:511.4,y:426.6,alpha:0.211},0).wait(1).to({x:534.7,y:426.8,alpha:0.262},0).wait(1).to({x:555.4,y:427,alpha:0.301},0).wait(1).to({x:573.6,y:427.1,alpha:0.34},0).wait(1).to({x:589.6,y:427.2,alpha:0.391},0).wait(1).to({x:603.5,y:427.3,alpha:0.43},0).wait(1).to({x:615.3,y:427.4,alpha:0.469},0).wait(1).to({x:625.4,y:427.5,alpha:0.52},0).wait(1).to({x:633.8,alpha:0.559},0).wait(1).to({x:640.6,y:427.6,alpha:0.602},0).wait(1).to({x:646.1,alpha:0.648},0).wait(1).to({x:650.4,alpha:0.691},0).wait(1).to({x:653.6,y:427.7,alpha:0.73},0).wait(1).to({x:655.9,alpha:0.781},0).wait(1).to({x:657.5,alpha:0.82},0).wait(1).to({x:658.4,alpha:0.859},0).wait(1).to({x:658.9,alpha:0.91},0).wait(1).to({x:659.1,alpha:0.949},0).wait(1).to({alpha:1},0).wait(188).to({_off:true},299).wait(2299));

	// 按鈕
	this.bala = new lib.元件64();
	this.bala.parent = this;
	this.bala.setTransform(1078.5,599.5,1,1,0,0,0,86.5,28.5);
	this.bala.alpha = 0;
	this.bala._off = true;
	new cjs.ButtonHelper(this.bala, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bala).wait(2968).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(2860));

	// 對話1
	this.gggggggggggg = new lib.元件62();
	this.gggggggggggg.parent = this;
	this.gggggggggggg.setTransform(657.5,427,1,1,0,0,0,536.5,222);
	this.gggggggggggg.alpha = 0.211;
	this.gggggggggggg._off = true;

	this.instance_96 = new lib.元件62複製();
	this.instance_96.parent = this;
	this.instance_96.setTransform(657.5,427,1,1,0,0,0,536.5,222);
	this.instance_96.alpha = 0;
	this.instance_96._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gggggggggggg).wait(2814).to({_off:false},0).to({alpha:1},10).wait(128).to({alpha:0},10).to({_off:true},6).wait(2870));
	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(2968).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(2860));

	// 箭頭投
	this.instance_97 = new lib.元件61();
	this.instance_97.parent = this;
	this.instance_97.setTransform(953.4,388.4,1,1,0,0,0,28,38.5);
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(2789).to({_off:false},0).to({_off:true},1).wait(3048));

	// 圖層 31 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_2790 = new cjs.Graphics().p("ApkH3IAAvtITJAAIAAPtg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(2790).to({graphics:mask_9_graphics_2790,x:949.6,y:262.5}).wait(24).to({graphics:null,x:0,y:0}).wait(3024));

	// 硬幣
	this.ASDQWE = new lib.元件60();
	this.ASDQWE.parent = this;
	this.ASDQWE.setTransform(950.5,262.5,1,1,0,0,0,37.5,37.5);
	this.ASDQWE.alpha = 0;
	this.ASDQWE._off = true;
	new cjs.ButtonHelper(this.ASDQWE, 0, 1, 1);

	var maskedShapeInstanceList = [this.ASDQWE];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.ASDQWE).wait(2781).to({_off:false},0).to({alpha:1},8).wait(1).to({y:171.5},23).to({_off:true},1).wait(3024));

	// 紅茶
	this.instance_98 = new lib.元件57();
	this.instance_98.parent = this;
	this.instance_98.setTransform(969.5,381,1,1,0,0,0,24.5,8);
	this.instance_98.alpha = 0;
	this.instance_98._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(2773).to({_off:false},0).to({alpha:1},7).to({_off:true},10).wait(3048));

	// 件投
	this.instance_99 = new lib.元件56();
	this.instance_99.parent = this;
	this.instance_99.setTransform(853.6,542.7,1,1,0,0,0,32.5,23.5);
	this.instance_99._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(2769).to({_off:false},0).to({_off:true},1).wait(3068));

	// 確認
	this.RT = new lib.元件59();
	this.RT.parent = this;
	this.RT.setTransform(954.5,540,1,1,0,0,0,50.5,20);
	this.RT._off = true;
	new cjs.ButtonHelper(this.RT, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.RT).wait(2769).to({_off:false},0).to({_off:true},1).wait(3068));

	// 數量
	this.instance_100 = new lib._1png複製2();
	this.instance_100.parent = this;
	this.instance_100.setTransform(559,363);

	this.instance_101 = new lib._2png複製2();
	this.instance_101.parent = this;
	this.instance_101.setTransform(559,363);

	this.instance_102 = new lib._2();
	this.instance_102.parent = this;
	this.instance_102.setTransform(559,363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_100}]},2764).to({state:[]},1).to({state:[{t:this.instance_101}]},4).to({state:[{t:this.instance_102}]},4).to({state:[]},1).wait(3064));

	// 減2
	this.huhuuuuuu = new lib.元件55複製();
	this.huhuuuuuu.parent = this;
	this.huhuuuuuu.setTransform(495,362);
	this.huhuuuuuu._off = true;
	new cjs.ButtonHelper(this.huhuuuuuu, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.huhuuuuuu).wait(2769).to({_off:false},0).to({_off:true},1).wait(3068));

	// 剪刀腳
	this.rbeiopop = new lib.元件55();
	this.rbeiopop.parent = this;
	this.rbeiopop.setTransform(495,362);
	this.rbeiopop._off = true;
	new cjs.ButtonHelper(this.rbeiopop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.rbeiopop).wait(2764).to({_off:false},0).to({_off:true},1).wait(3073));

	// 減
	this.tttt = new lib.元件55();
	this.tttt.parent = this;
	this.tttt.setTransform(511.5,374.5,1,1,0,0,0,16.5,12.5);
	this.tttt.alpha = 0;
	this.tttt._off = true;
	new cjs.ButtonHelper(this.tttt, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tttt).wait(2620).to({_off:false},0).to({alpha:1},10).wait(133).to({_off:true},1).wait(3074));

	// 加三
	this.instance_103 = new lib.元件54複製2();
	this.instance_103.parent = this;
	this.instance_103.setTransform(451,362);
	this.instance_103._off = true;
	new cjs.ButtonHelper(this.instance_103, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(2769).to({_off:false},0).to({_off:true},1).wait(3068));

	// 加2
	this.pppppppap = new lib.元件54複製();
	this.pppppppap.parent = this;
	this.pppppppap.setTransform(451,362);
	this.pppppppap._off = true;
	new cjs.ButtonHelper(this.pppppppap, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pppppppap).wait(2764).to({_off:false},0).to({_off:true},1).wait(3073));

	// 加
	this.adddddddddc = new lib.元件54();
	this.adddddddddc.parent = this;
	this.adddddddddc.setTransform(467.5,374.5,1,1,0,0,0,16.5,12.5);
	this.adddddddddc.alpha = 0;
	this.adddddddddc._off = true;
	new cjs.ButtonHelper(this.adddddddddc, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.adddddddddc).wait(2620).to({_off:false},0).to({alpha:1},10).to({_off:true},134).wait(3074));

	// 紅茶按鈕
	this.redtea = new lib.元件51();
	this.redtea.parent = this;
	this.redtea.setTransform(444.3,374,1,1,0,0,0,142.5,20);
	new cjs.ButtonHelper(this.redtea, 0, 1, 1);

	this.instance_104 = new lib.補間動畫59("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(444.5,374);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.redtea}]},2615).to({state:[{t:this.instance_104}]},5).to({state:[{t:this.instance_104}]},149).to({state:[{t:this.instance_104}]},4).to({state:[]},1).wait(3064));

	// 件投
	this.instance_105 = new lib.元件50();
	this.instance_105.parent = this;
	this.instance_105.setTransform(339.5,320,1,1,0,0,0,22.5,31);
	this.instance_105._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(2615).to({_off:false},0).wait(5).to({alpha:0},14).wait(5).to({x:466.5,alpha:1},0).to({_off:true},130).wait(3069));

	// 對話框
	this.skipggggggggg = new lib.元件48();
	this.skipggggggggg.parent = this;
	this.skipggggggggg.setTransform(656.5,600,1,1,0,0,0,526.5,96);
	this.skipggggggggg.alpha = 0.359;
	this.skipggggggggg._off = true;

	this.skippppppp = new lib.元件48複製();
	this.skippppppp.parent = this;
	this.skippppppp.setTransform(656.5,600,1,1,0,0,0,526.5,96);
	this.skippppppp.alpha = 0;
	this.skippppppp._off = true;

	this.instance_106 = new lib.元件48複製2();
	this.instance_106.parent = this;
	this.instance_106.setTransform(656.5,600,1,1,0,0,0,526.5,96);
	this.instance_106.alpha = 0;
	this.instance_106._off = true;

	this.instance_107 = new lib.元件48複製3();
	this.instance_107.parent = this;
	this.instance_107.setTransform(656.5,600,1,1,0,0,0,526.5,96);
	this.instance_107.alpha = 0;
	this.instance_107._off = true;

	this.timeline.addTween(cjs.Tween.get(this.skipggggggggg).wait(2292).to({_off:false},0).to({alpha:1},11).wait(159).to({alpha:0},18).to({_off:true},3).wait(3355));
	this.timeline.addTween(cjs.Tween.get(this.skippppppp).wait(2483).to({_off:false},0).to({alpha:1},17).wait(76).to({alpha:0},15).to({_off:true},6).wait(3241));
	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(2597).to({_off:false},0).to({alpha:1},22).wait(3).to({alpha:0.859},0).to({alpha:0},12).to({_off:true},5).wait(3199));
	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(2639).to({_off:false},0).to({alpha:1},13).wait(99).to({alpha:0},12).to({_off:true},215).wait(2860));

	// 迎賓服務bg
	this.instance_108 = new lib.元件47();
	this.instance_108.parent = this;
	this.instance_108.setTransform(351,426.7,1,1,0,0,0,356.8,222.9);
	this.instance_108.alpha = 0;
	this.instance_108._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(2262).to({_off:false},0).wait(1).to({x:389.3,alpha:0.039},0).wait(1).to({x:424.3,alpha:0.078},0).wait(1).to({x:456.1,alpha:0.129},0).wait(1).to({x:484.9,alpha:0.172},0).wait(1).to({x:510.8,alpha:0.211},0).wait(1).to({x:534,alpha:0.262},0).wait(1).to({x:554.6,alpha:0.301},0).wait(1).to({x:572.8,alpha:0.34},0).wait(1).to({x:588.8,alpha:0.391},0).wait(1).to({x:602.6,alpha:0.43},0).wait(1).to({x:614.4,alpha:0.469},0).wait(1).to({x:624.4,alpha:0.52},0).wait(1).to({x:632.8,alpha:0.559},0).wait(1).to({x:639.6,alpha:0.602},0).wait(1).to({x:645.1,alpha:0.648},0).wait(1).to({x:649.3,alpha:0.691},0).wait(1).to({x:652.5,alpha:0.73},0).wait(1).to({x:654.8,alpha:0.781},0).wait(1).to({x:656.4,alpha:0.82},0).wait(1).to({x:657.3,alpha:0.859},0).wait(1).to({x:657.8,alpha:0.91},0).wait(1).to({x:658,alpha:0.949},0).wait(1).to({alpha:1},0).to({_off:true},693).wait(2860));

	// 返回按鈕
	this.ezgg = new lib.az();
	this.ezgg.parent = this;
	this.ezgg.setTransform(1211.3,646.3,1,1,0,0,0,70.3,70.3);
	this.ezgg._off = true;
	new cjs.ButtonHelper(this.ezgg, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ezgg).wait(2261).to({_off:false},0).to({_off:true},1).wait(3576));

	// 字幕1
	this.instance_109 = new lib.元件32();
	this.instance_109.parent = this;
	this.instance_109.setTransform(664.5,603,1,1,0,0,0,526.5,96);
	this.instance_109.alpha = 0.18;
	this.instance_109._off = true;

	this.instance_110 = new lib.元件33();
	this.instance_110.parent = this;
	this.instance_110.setTransform(656.5,257,1,1,0,0,0,526.5,96);
	this.instance_110.alpha = 0.199;
	this.instance_110._off = true;

	this.instance_111 = new lib.元件34();
	this.instance_111.parent = this;
	this.instance_111.setTransform(656.5,604,1,1,0,0,0,526.5,96);
	this.instance_111.alpha = 0.129;
	this.instance_111._off = true;

	this.instance_112 = new lib.元件35();
	this.instance_112.parent = this;
	this.instance_112.setTransform(656.5,271,1,1,0,0,0,526.5,96);
	this.instance_112.alpha = 0.199;
	this.instance_112._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(1290).to({_off:false},0).to({alpha:1},10).wait(134).to({alpha:0},9).to({_off:true},47).wait(4348));
	this.timeline.addTween(cjs.Tween.get(this.instance_110).wait(1490).to({_off:false},0).to({alpha:1},9).wait(147).to({alpha:0},9).to({_off:true},54).wait(4129));
	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(1709).to({_off:false},0).to({alpha:1},12).wait(100).to({alpha:0},10).to({_off:true},43).wait(3964));
	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(1874).to({_off:false},0).to({alpha:1},11).wait(116).to({y:268.2,alpha:0},8).to({_off:true},1).wait(3828));

	// 紅框1
	this.instance_113 = new lib.元件31();
	this.instance_113.parent = this;
	this.instance_113.setTransform(377,310,1,1,0,0,0,87,108);
	this.instance_113.alpha = 0.18;
	this.instance_113._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_113).wait(1279).to({_off:false},0).to({alpha:1},6).wait(167).to({y:468.8},12).to({y:517},21).wait(176).to({x:802.7,y:323},22).to({x:934.4,y:309.9},20).wait(137).to({y:478},12).to({y:515.7},17).wait(145).to({alpha:0},8).to({_off:true},2).wait(3814));

	// 平板按鈕
	this.shenghuoguansheshi = new lib.元件44();
	this.shenghuoguansheshi.parent = this;
	this.shenghuoguansheshi.setTransform(930,525,1,1,0,0,0,84,101);
	new cjs.ButtonHelper(this.shenghuoguansheshi, 0, 1, 1);

	this.pingpaidna = new lib.元件43();
	this.pingpaidna.parent = this;
	this.pingpaidna.setTransform(384.5,524,1,1,0,0,0,82.5,101);
	new cjs.ButtonHelper(this.pingpaidna, 0, 1, 1);

	this.chekuanzhanshi = new lib.元件42();
	this.chekuanzhanshi.parent = this;
	this.chekuanzhanshi.setTransform(930.5,306.5,1,1,0,0,0,83.5,101.5);
	new cjs.ButtonHelper(this.chekuanzhanshi, 0, 1, 1);

	this.yingbinfuwu = new lib.元件41();
	this.yingbinfuwu.parent = this;
	this.yingbinfuwu.setTransform(383.5,306.5,1,1,0,0,0,82.5,100.5);
	new cjs.ButtonHelper(this.yingbinfuwu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.yingbinfuwu},{t:this.chekuanzhanshi},{t:this.pingpaidna},{t:this.shenghuoguansheshi}]},2261).to({state:[]},1).wait(3576));

	// 平板bg
	this.instance_114 = new lib.元件30();
	this.instance_114.parent = this;
	this.instance_114.setTransform(658,425.5,1,1,0,0,0,624,291.5);
	this.instance_114.alpha = 0;
	this.instance_114._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(1260).to({_off:false},0).to({alpha:1},10).wait(1034).to({_off:true},1476).wait(2058));

	// 名片
	this.instance_115 = new lib.元件29();
	this.instance_115.parent = this;
	this.instance_115.setTransform(336.8,565.2,1,1,0,0,0,207,114.5);
	this.instance_115.alpha = 0.211;
	this.instance_115._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_115).wait(1063).to({_off:false},0).to({alpha:1},16).wait(7).to({x:992.4},15).wait(12).to({alpha:0},20).to({_off:true},18).wait(4687));

	// 男人客啦
	this.instance_116 = new lib.元件28();
	this.instance_116.parent = this;
	this.instance_116.setTransform(985.5,431.5,1,1,0,0,0,162.5,284.5);
	this.instance_116.alpha = 0.328;
	this.instance_116._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_116).wait(1024).to({_off:false},0).to({alpha:1},12).wait(223).to({_off:true},1).wait(4578));

	// JJJJ
	this.instance_117 = new lib.元件27();
	this.instance_117.parent = this;
	this.instance_117.setTransform(336.5,439.5,1,1,0,0,0,156.5,276.5);
	this.instance_117.alpha = 0.328;
	this.instance_117._off = true;

	this.instance_118 = new lib.框png複製3();
	this.instance_118.parent = this;
	this.instance_118.setTransform(38,540);

	this.instance_119 = new lib._1林先生您好我是智傑這是我的名片();
	this.instance_119.parent = this;
	this.instance_119.setTransform(66,567);

	this.instance_120 = new lib._2今天就由我為您服務首先就讓我來介紹一下納智捷吧();
	this.instance_120.parent = this;
	this.instance_120.setTransform(66,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_117}]},1024).to({state:[{t:this.instance_117}]},12).to({state:[{t:this.instance_117},{t:this.instance_118}]},1).to({state:[{t:this.instance_117},{t:this.instance_118},{t:this.instance_119}]},8).to({state:[{t:this.instance_117},{t:this.instance_118},{t:this.instance_120}]},96).to({state:[{t:this.instance_117},{t:this.instance_118},{t:this.instance_120}]},118).to({state:[]},1).wait(4578));
	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(1024).to({_off:false},0).to({alpha:1},12).wait(223).to({_off:true},1).wait(4578));

	// 9bg
	this.instance_121 = new lib.元件26();
	this.instance_121.parent = this;
	this.instance_121.setTransform(680.5,424.5,1,1,0,0,0,601.5,291.5);
	this.instance_121.alpha = 0.219;
	this.instance_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(1024).to({_off:false},0).to({alpha:0.84},12).wait(223).to({_off:true},1).wait(4578));

	// 圖層 15 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_979 = new cjs.Graphics().p("EhM8Am9MAAAhN4MCZ5AAAMAAABN4g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(979).to({graphics:mask_10_graphics_979,x:670.4,y:382.4}).wait(4859));

	// 給手
	this.instance_122 = new lib.補間動畫51("synched",0);
	this.instance_122.parent = this;
	this.instance_122.setTransform(659.5,26);
	this.instance_122._off = true;

	this.instance_123 = new lib.補間動畫52("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(659.3,379.7);

	var maskedShapeInstanceList = [this.instance_122,this.instance_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_122}]},979).to({state:[{t:this.instance_123}]},20).to({state:[{t:this.instance_123}]},24).to({state:[]},1).wait(4814));
	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(979).to({_off:false},0).to({_off:true,x:659.3,y:379.7},20).wait(4839));

	// 圖層 14 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_985 = new cjs.Graphics().p("Egq2AMBIAA4BMBVuAAAIAAYBg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(985).to({graphics:mask_11_graphics_985,x:687.8,y:642}).wait(4853));

	// 接手
	this.instance_124 = new lib.補間動畫49("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(657,782);
	this.instance_124._off = true;

	this.instance_125 = new lib.補間動畫50("synched",0);
	this.instance_125.parent = this;
	this.instance_125.setTransform(657,643);

	var maskedShapeInstanceList = [this.instance_124,this.instance_125];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_124}]},985).to({state:[{t:this.instance_125}]},8).to({state:[{t:this.instance_125}]},30).to({state:[]},1).wait(4814));
	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(985).to({_off:false},0).to({_off:true,y:643},8).wait(4845));

	// 杯水車薪
	this.instance_126 = new lib.元件24();
	this.instance_126.parent = this;
	this.instance_126.setTransform(743.2,574.7,1.608,1.608,0,0,0,125.5,14.5);
	this.instance_126.alpha = 0.191;
	this.instance_126._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(896).to({_off:false},0).to({alpha:1},32).to({_off:true},51).wait(4859));

	// 7裝飾物
	this.instance_127 = new lib.盆栽();
	this.instance_127.parent = this;
	this.instance_127.setTransform(696,475);

	this.instance_128 = new lib.桌();
	this.instance_128.parent = this;
	this.instance_128.setTransform(401,598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_128},{t:this.instance_127}]},822).to({state:[]},157).wait(4859));

	// 圖層 11 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_878 = new cjs.Graphics().p("EgV0AimMAAAhFKMArpAAAMAAABFKg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(878).to({graphics:mask_12_graphics_878,x:174.7,y:471.4}).wait(4960));

	// 那那
	this.instance_129 = new lib.補間動畫47("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(-112,471.5);
	this.instance_129._off = true;

	this.instance_130 = new lib.補間動畫48("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(197,471.5);

	var maskedShapeInstanceList = [this.instance_129,this.instance_130];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_129}]},878).to({state:[{t:this.instance_130}]},11).to({state:[]},90).wait(4859));
	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(878).to({_off:false},0).to({_off:true,x:197},11).wait(4949));

	// 人客們
	this.instance_131 = new lib.補間動畫36("synched",0);
	this.instance_131.parent = this;
	this.instance_131.setTransform(309,450.5);
	this.instance_131._off = true;

	this.instance_132 = new lib.補間動畫37("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(333,426.5);
	this.instance_132._off = true;

	this.instance_133 = new lib.補間動畫38("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(356,449.5);
	this.instance_133._off = true;

	this.instance_134 = new lib.補間動畫39("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(380,425.5);
	this.instance_134._off = true;

	this.instance_135 = new lib.補間動畫40("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(433,437.5);
	this.instance_135._off = true;

	this.instance_136 = new lib.補間動畫41("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(477,421.5);
	this.instance_136._off = true;

	this.instance_137 = new lib.補間動畫42("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(531,440.5);
	this.instance_137._off = true;

	this.instance_138 = new lib.補間動畫43("synched",0);
	this.instance_138.parent = this;
	this.instance_138.setTransform(574,428.5);
	this.instance_138._off = true;

	this.instance_139 = new lib.補間動畫44("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(654,459.5);
	this.instance_139._off = true;

	this.instance_140 = new lib.補間動畫45("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(702,446.5);
	this.instance_140._off = true;

	this.instance_141 = new lib.補間動畫46("synched",0);
	this.instance_141.parent = this;
	this.instance_141.setTransform(751,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_131}]},822).to({state:[{t:this.instance_132}]},4).to({state:[{t:this.instance_133}]},3).to({state:[{t:this.instance_134}]},3).to({state:[{t:this.instance_135}]},3).to({state:[{t:this.instance_136}]},4).to({state:[{t:this.instance_137}]},4).to({state:[{t:this.instance_138}]},6).to({state:[{t:this.instance_139}]},7).to({state:[{t:this.instance_140}]},8).to({state:[{t:this.instance_141}]},8).to({state:[]},107).wait(4859));
	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(822).to({_off:false},0).to({_off:true,x:333,y:426.5},4).wait(5012));
	this.timeline.addTween(cjs.Tween.get(this.instance_132).wait(822).to({_off:false},4).to({_off:true,x:356,y:449.5},3).wait(5009));
	this.timeline.addTween(cjs.Tween.get(this.instance_133).wait(826).to({_off:false},3).to({_off:true,x:380,y:425.5},3).wait(5006));
	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(829).to({_off:false},3).to({_off:true,x:433,y:437.5},3).wait(5003));
	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(832).to({_off:false},3).to({_off:true,x:477,y:421.5},4).wait(4999));
	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(835).to({_off:false},4).to({_off:true,x:531,y:440.5},4).wait(4995));
	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(839).to({_off:false},4).to({_off:true,x:574,y:428.5},6).wait(4989));
	this.timeline.addTween(cjs.Tween.get(this.instance_138).wait(843).to({_off:false},6).to({_off:true,x:654,y:459.5},7).wait(4982));
	this.timeline.addTween(cjs.Tween.get(this.instance_139).wait(849).to({_off:false},7).to({_off:true,x:702,y:446.5},8).wait(4974));
	this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(856).to({_off:false},8).to({_off:true,x:751,y:458.5},8).wait(4966));

	// 7背景
	this.instance_142 = new lib._7bg();
	this.instance_142.parent = this;
	this.instance_142.setTransform(35,135);
	this.instance_142._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(822).to({_off:false},0).to({_off:true},157).wait(4859));

	// 圖層 5 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_799 = new cjs.Graphics().p("EghVAl/MAAAhL9MBCrAAAMAAABL9g");
	var mask_13_graphics_821 = new cjs.Graphics().p("EghVAl/MAAAhL9MBCrAAAMAAABL9g");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(799).to({graphics:mask_13_graphics_799,x:1068.6,y:472.9}).wait(22).to({graphics:mask_13_graphics_821,x:1068.6,y:472.9}).wait(5017));

	// 買車背影
	this.instance_143 = new lib.元件23();
	this.instance_143.parent = this;
	this.instance_143.setTransform(990.5,574.5,1,1,0,0,0,134.5,141.5);
	this.instance_143._off = true;

	var maskedShapeInstanceList = [this.instance_143];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(799).to({_off:false},0).to({y:474.1},22).to({_off:true},1).wait(5016));

	// 圖層 3 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_799 = new cjs.Graphics().p("EghVAqwMAAAhVfMBCrAAAMAAABVfg");
	var mask_14_graphics_821 = new cjs.Graphics().p("EghVAqwMAAAhVfMBCrAAAMAAABVfg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(799).to({graphics:mask_14_graphics_799,x:1068.6,y:442.4}).wait(22).to({graphics:mask_14_graphics_821,x:1068.6,y:442.4}).wait(5017));

	// 賣車背影
	this.instance_144 = new lib.補間動畫34("synched",0);
	this.instance_144.parent = this;
	this.instance_144.setTransform(1202,582.5);
	this.instance_144._off = true;

	var maskedShapeInstanceList = [this.instance_144];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_144).wait(799).to({_off:false},0).to({y:482.1},22).to({_off:true},1).wait(5016));

	// 6背景
	this.instance_145 = new lib._6bg();
	this.instance_145.parent = this;
	this.instance_145.setTransform(34,133);
	this.instance_145._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_145).wait(799).to({_off:false},0).to({_off:true},23).wait(5016));

	// 賣車的
	this.instance_146 = new lib.補間動畫25("synched",0);
	this.instance_146.parent = this;
	this.instance_146.setTransform(1145.5,445);
	this.instance_146._off = true;

	this.instance_147 = new lib.補間動畫26("synched",0);
	this.instance_147.parent = this;
	this.instance_147.setTransform(1145.5,452.9);
	this.instance_147._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(736).to({_off:false},0).to({_off:true,y:452.9},7).wait(5095));
	this.timeline.addTween(cjs.Tween.get(this.instance_147).wait(736).to({_off:false},7).wait(5).to({startPosition:0},0).to({y:481.9},6).to({_off:true},45).wait(5039));

	// 人客
	this.instance_148 = new lib.補間動畫30("synched",0);
	this.instance_148.parent = this;
	this.instance_148.setTransform(904,364);
	this.instance_148._off = true;

	this.instance_149 = new lib.補間動畫31("synched",0);
	this.instance_149.parent = this;
	this.instance_149.setTransform(904,387.9);

	this.instance_150 = new lib.補間動畫32("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(904,387.9);
	this.instance_150._off = true;

	this.instance_151 = new lib.補間動畫33("synched",0);
	this.instance_151.parent = this;
	this.instance_151.setTransform(904,422.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_148}]},736).to({state:[{t:this.instance_149}]},8).to({state:[{t:this.instance_150}]},5).to({state:[{t:this.instance_151}]},12).to({state:[]},38).wait(5039));
	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(736).to({_off:false},0).to({_off:true,y:387.9},8).wait(5094));
	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(749).to({_off:false},0).to({_off:true,y:422.3},12).wait(5077));

	// 提示4
	this.tip4 = new lib.元件22();
	this.tip4.parent = this;
	this.tip4.setTransform(660,422,0.19,0.19,0,0,0,475,259.9);
	this.tip4._off = true;
	new cjs.ButtonHelper(this.tip4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip4).wait(709).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1},14).to({regX:475.4,regY:260.1,scaleX:0.03,scaleY:0.03,x:660.1,y:422.1},12).to({_off:true},1).wait(5102));

	// 星星4
	this.star4 = new lib.元件5複製3();
	this.star4.parent = this;
	this.star4.setTransform(575.5,470.2,1,1,0,0,0,52.5,-0.3);
	this.star4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star4).wait(708).to({_off:false},0).to({_off:true},1).wait(5129));

	// 提示3
	this.TIP3 = new lib.元件19();
	this.TIP3.parent = this;
	this.TIP3.setTransform(696,422,0.24,0.24,0,0,0,475,260);
	this.TIP3._off = true;
	new cjs.ButtonHelper(this.TIP3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.TIP3).wait(681).to({_off:false},0).to({scaleX:1,scaleY:1},12).to({regX:474.9,regY:259.7,scaleX:0.03,scaleY:0.03},11).to({_off:true},1).wait(5133));

	// 星星3
	this.star3 = new lib.元件5複製2();
	this.star3.parent = this;
	this.star3.setTransform(556,475.2,1,1,0,0,0,52.5,-0.3);
	this.star3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star3).wait(680).to({_off:false},0).to({_off:true},1).wait(5157));

	// 顧客對話框
	this.instance_152 = new lib.框();
	this.instance_152.parent = this;
	this.instance_152.setTransform(668,534);

	this.instance_153 = new lib._2是的();
	this.instance_153.parent = this;
	this.instance_153.setTransform(712,563);

	this.instance_154 = new lib._4噢我姓林png複製();
	this.instance_154.parent = this;
	this.instance_154.setTransform(712,563);

	this.instance_155 = new lib._6兩位我跟我太太而已();
	this.instance_155.parent = this;
	this.instance_155.setTransform(712,563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_152}]},569).to({state:[{t:this.instance_152},{t:this.instance_153}]},34).to({state:[{t:this.instance_152},{t:this.instance_154}]},28).to({state:[{t:this.instance_152},{t:this.instance_155}]},30).to({state:[]},75).wait(5102));

	// J對話框
	this.instance_156 = new lib.flame();
	this.instance_156.parent = this;
	this.instance_156.setTransform(41,534);

	this.instance_157 = new lib._1先生請問是要看車嗎();
	this.instance_157.parent = this;
	this.instance_157.setTransform(80,563);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBLQAYgDAOgJIAHAHQAFAFgIgBQgOAJgVAEgAAoBHIAIgIQAPAHAXADIgGANQgVgDgTgMgAg3BUIAAhNIgWABQgEAHgCgHIgDgKIARAAIAMgTIgagTIAGgKIAFAEIAVgnIAMAIQAHAEgJABIgUAhIAJAIIATggIAMAIQAGADgJACIgdAvIAWgBIgIgNIAJgFQAKAOAGAOIgLAGIgCgIIgQABIAABPgAhSBDQAGgTABgaIAMABQAHAAgGAFQgCAbgFAPgAgGA9IAAg8IBPAAIAAA8gAAFA0IA3AAIAAgIIg3AAgAAFAjIA3AAIAAgIIg3AAgAAFASIA3AAIAAgIIg3AAgAgmAYIANgDQAIATABAPIgOAFQgDgUgFgQgAgPgEIAAgoIBhAAIAAAogAgDgNIBJAAIAAgIIgYAAQgHAAgBgHIAAgHIgMAAQgBARgUADIgFgGQAPgDABgLIgTAAgAAwgdQAAABABAAQAAABAAAAQABAAAAABQABAAABAAIASAAIAAgJIgWAAgAgHgzIAAgJIAhAAIAAgGIgsAAIAAgJIAsAAIAAgLIALAAQAGAAgFAEIAAAHIAvAAIAAAJIgvAAIAAAGIAkAAIAAAJg");
	this.shape.setTransform(611.4,602.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BWIAAhPIgTACQgEAHgCgHIgDgMIAPAAIALgTIgagTIAIgLIAHAFIAQglIANAFQAHACgIADIgSAiIAHAGIAPgcIAOAGQAEACgGACIgeAxIAVgCIgGgNIAMgFQAHANAGASIAAhYIAMAAQAFABgEAEIAAA/IBZAAIAAALIhZAAIAABBIBbAAIAAAMIhbAAIAAAJIgNAAIAAhKIgMAEIgDgKIgNACIAABPgAhVBGQAGgUABgbIAMAAQAHAAgGAGQgBAYgDAUgAgqAYIANgDQAIAVACARIgOADQgCgRgHgVgAAiAzIgdADQgEAGgBgGIgBgKIAHAAIAHgJIgNgKIARgZIAIAEQAEADgFABIgMANIAIAFIAKgRIAKAEQADADgGABIgRAbIAMgBIgEgKIAKgCIAFAMIADAAIAIgKIgOgIIAPgYIAJAEQADADgEABIgLAMIAHAEIALgQIAIAEQAFADgHACIgSAZIAMgBIgEgIIAJgEIALAYIgLAEIgCgIIgbADIACAFIgLADgAAggYIgbADQgEAGgBgGIgDgLIALAAIAGgLIgQgKIAEgJIACABIAMgXIAKADQAGADgIACIgLAVIAHADIAKgTIAIAEQAFADgGACIgSAeIALgBIgEgLIALgCIAEANIAFAAIAGgKIgPgLIAVgfIAJAEQAEADgGACIgOAUIAHAEIAMgUIAIAFQAGADgHABIgTAeIAMgBIgEgKIAKgDQAGANAEAMIgLAEIgCgIIgdACIACAGIgMADg");
	this.shape_1.setTransform(592.3,602.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA9QAmgGASgTQAUgTAAgnIAAg2IAOACQAGAAgFAEIAAA2QAAAZgJARIAjAdIgKAOIgfgfQgUAbgxAMgAhJA/IgIgQIATgJIgEhtIAPABQAGABgGAEIAFBgQAhgTAUgQIAHAMQgXATg7AjQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAgAgcg4IAMgMQAOALAMARIgNALQgOgTgLgIg");
	this.shape_2.setTransform(573.9,602.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2BTIgEgRIARAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIAAgjIghAHQgFAGgBgEIgFgRQAVgDAXgFIAAgfIgpAAIAAgOIApAAIAAgaIgiAFIgEgPQAsgEAagJIAIAOQACAEgGgCIgWAEIAAAdIAkAAIAAgvIAOAAQAGABgGAEIAAAqIA2AAIAAAOIg2AAQABAbAEASQANgRAJgPIAPAHQAEACgIACQgPAYgLAMQAJAQANADQAGABABgQIAOAIQgEAcgOgEQgXgFgOgVQgSAQgUAKIgHgQQAdgNAJgLQgHgWAAgiIgkAAIAAAcIAdgHIACANIgfAJIAAAvQAAAMgMAAgAAkg8IAMgLQANALAGAHIgNALQgGgHgMgLg");
	this.shape_3.setTransform(554.4,602.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBGQAmgGARgQIgWgNIgDAJIgMgGQAMgaADgLIgeAAIAAgNIAjAAIAKgfIANADQAEABgFADQgDAJgFAPIBAAAIAAANIgXAAQgFAZgLASQAJAFAZASIgKAOQgVgRgNgIQgVAWgqAIgAAIAYQAPAHALAHQALgTAEgSIgfAAQgFANgFAKgAhJBUIgCgQIAJAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgqIgOADQgCAFgCgDIgDgQIAVgEIAAgpIgTAAIAAgPIATAAIAAgjIAPAAQAFABgFADIAAAfIASAAIAAAPIgSAAIAAAmQAJgCAKgDIACAMQgKAEgLADIAAA3QAAAKgMAAgABCgZIAAgXIhLAAIAAAXIgOAAIAAglIArAAIAAgXIAOAAQAGABgFAEIAAASIAuAAIAAAlg");
	this.shape_4.setTransform(535.3,602.2);

	this.arrow1 = new lib.元件20();
	this.arrow1.parent = this;
	this.arrow1.setTransform(580.3,632.3,1,1,0,0,0,56.4,58.8);

	this.instance_158 = new lib._3請問您貴姓呢();
	this.instance_158.parent = this;
	this.instance_158.setTransform(80,563);

	this.arrow2 = new lib.元件20複製();
	this.arrow2.parent = this;
	this.arrow2.setTransform(580.3,632.3,1,1,0,0,0,56.4,58.8);

	this.instance_159 = new lib._5林先生您好那今天有幾位要一起看車呢();
	this.instance_159.parent = this;
	this.instance_159.setTransform(80,563);

	this.arrow3 = new lib.元件20複製2();
	this.arrow3.parent = this;
	this.arrow3.setTransform(580.3,632.3,1,1,0,0,0,56.4,58.8);

	this.instance_160 = new lib._7好的林先生汽車這邊請();
	this.instance_160.parent = this;
	this.instance_160.setTransform(80,563);

	this.instance_161 = new lib._8我們();
	this.instance_161.parent = this;
	this.instance_161.setTransform(80,563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_156}]},569).to({state:[{t:this.instance_156},{t:this.instance_157}]},13).to({state:[{t:this.instance_156},{t:this.instance_157},{t:this.arrow1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},28).to({state:[{t:this.instance_156},{t:this.instance_158}]},4).to({state:[{t:this.instance_156},{t:this.instance_158},{t:this.arrow2}]},25).to({state:[{t:this.instance_156},{t:this.instance_159}]},5).to({state:[{t:this.instance_156},{t:this.instance_159},{t:this.arrow3}]},20).to({state:[{t:this.instance_156},{t:this.instance_160}]},5).to({state:[{t:this.instance_156},{t:this.instance_161}]},36).to({state:[{t:this.instance_156},{t:this.instance_161}]},30).to({state:[]},1).wait(5102));

	// J
	this.instance_162 = new lib.元件18();
	this.instance_162.parent = this;
	this.instance_162.setTransform(315.5,438.5,1,1,0,0,0,156.5,276.5);
	this.instance_162.alpha = 0.25;
	this.instance_162._off = true;

	this.instance_163 = new lib.元件18複製();
	this.instance_163.parent = this;
	this.instance_163.setTransform(315.5,438.5,1,1,0,0,0,156.5,276.5);

	this.instance_164 = new lib.元件18複製2();
	this.instance_164.parent = this;
	this.instance_164.setTransform(315.5,438.5,1,1,0,0,0,156.5,276.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_162}]},560).to({state:[{t:this.instance_162}]},9).to({state:[{t:this.instance_163}]},100).to({state:[{t:this.instance_164}]},36).to({state:[]},31).wait(5102));
	this.timeline.addTween(cjs.Tween.get(this.instance_162).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},100).wait(5169));

	// 顧客
	this.instance_165 = new lib.元件17();
	this.instance_165.parent = this;
	this.instance_165.setTransform(972.5,430.5,1,1,0,0,0,162.5,284.5);
	this.instance_165.alpha = 0.25;
	this.instance_165._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_165).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},167).wait(5102));

	// 對話背景
	this.instance_166 = new lib.元件16();
	this.instance_166.parent = this;
	this.instance_166.setTransform(660.5,423.5,1,1,0,0,0,626.5,291.5);
	this.instance_166.alpha = 0.25;
	this.instance_166._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_166).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},167).wait(5102));

	// 女生
	this.instance_167 = new lib.補間動畫18("synched",0);
	this.instance_167.parent = this;
	this.instance_167.setTransform(395.3,554.9);
	this.instance_167._off = true;

	this.instance_168 = new lib.補間動畫19("synched",0);
	this.instance_168.parent = this;
	this.instance_168.setTransform(543.4,538);
	this.instance_168._off = true;

	this.instance_169 = new lib.補間動畫20("synched",0);
	this.instance_169.parent = this;
	this.instance_169.setTransform(597.5,505);
	this.instance_169._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_167).wait(505).to({_off:false},0).to({_off:true,x:543.4,y:538},16).wait(5317));
	this.timeline.addTween(cjs.Tween.get(this.instance_168).wait(505).to({_off:false},16).to({_off:true,x:597.5,y:505},8).wait(5309));
	this.timeline.addTween(cjs.Tween.get(this.instance_169).wait(521).to({_off:false},8).wait(15).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},11).wait(166).to({_off:false},0).wait(32).to({startPosition:0},0).to({_off:true},31).wait(5039));

	// 提示2
	this.tip2 = new lib.元件12();
	this.tip2.parent = this;
	this.tip2.setTransform(657.1,437,0.163,0.163,0,0,0,475,259.9);
	this.tip2._off = true;
	new cjs.ButtonHelper(this.tip2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip2).wait(484).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1,x:657},10).wait(1).to({regX:475.1,regY:259.1,scaleX:0.01,scaleY:0.01,x:657.1},9).to({_off:true},1).wait(5333));

	// 星星2
	this.star2 = new lib.元件5複製();
	this.star2.parent = this;
	this.star2.setTransform(605.5,194.7,1,1,0,0,0,52.5,-0.3);
	this.star2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star2).wait(483).to({_off:false},0).to({_off:true},1).wait(5354));

	// 提示1
	this.tip1 = new lib.元件11();
	this.tip1.parent = this;
	this.tip1.setTransform(657.1,422,0.208,0.208,0,0,0,475,259.9);
	this.tip1._off = true;
	new cjs.ButtonHelper(this.tip1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip1).wait(424).to({_off:false},0).to({regY:260,scaleX:1,scaleY:1,x:657},10).wait(1).to({regX:475.1,regY:259.1,scaleX:0.01,scaleY:0.01,x:657.1},9).to({_off:true},1).wait(5393));

	// 星星1
	this.star1 = new lib.元件5();
	this.star1.parent = this;
	this.star1.setTransform(605.5,210.5,1,1,0,0,0,52.5,51.5);
	this.star1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star1).wait(421).to({_off:false},0).to({_off:true},1).wait(5416));

	// 男生
	this.instance_170 = new lib.boy();
	this.instance_170.parent = this;
	this.instance_170.setTransform(515,273);

	this.instance_171 = new lib.補間動畫14("synched",0);
	this.instance_171.parent = this;
	this.instance_171.setTransform(608.5,473);
	this.instance_171._off = true;

	this.instance_172 = new lib.補間動畫15("synched",0);
	this.instance_172.parent = this;
	this.instance_172.setTransform(859.5,473);
	this.instance_172._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_170}]},388).to({state:[{t:this.instance_171}]},57).to({state:[{t:this.instance_172}]},15).to({state:[{t:this.instance_172}]},12).to({state:[{t:this.instance_172}]},11).to({state:[{t:this.instance_172}]},61).to({state:[{t:this.instance_172}]},10).to({state:[{t:this.instance_172}]},5).to({state:[]},1).wait(5278));
	this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(445).to({_off:false},0).to({_off:true,x:859.5},15).wait(5378));
	this.timeline.addTween(cjs.Tween.get(this.instance_172).wait(445).to({_off:false},15).to({scaleX:0.85,scaleY:0.85,x:878.1,y:428.3},12).to({scaleX:0.74,scaleY:0.74,x:997.3,y:419},11).wait(61).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(5278));

	// 賓客駕駛到來背景
	this.instance_173 = new lib.bg2();
	this.instance_173.parent = this;
	this.instance_173.setTransform(34,134);

	this.instance_174 = new lib.補間動畫21("synched",0);
	this.instance_174.parent = this;
	this.instance_174.setTransform(658,425.5);

	this.instance_175 = new lib.補間動畫22("synched",0);
	this.instance_175.parent = this;
	this.instance_175.setTransform(658,425.5);
	this.instance_175._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_173}]},388).to({state:[{t:this.instance_174}]},147).to({state:[{t:this.instance_175}]},9).to({state:[{t:this.instance_175}]},10).to({state:[{t:this.instance_175}]},5).to({state:[]},1).to({state:[{t:this.instance_175}]},176).to({state:[{t:this.instance_175}]},32).to({state:[]},31).wait(5039));
	this.timeline.addTween(cjs.Tween.get(this.instance_175).wait(544).to({_off:false},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(176).to({_off:false},0).wait(32).to({startPosition:0},0).to({_off:true},31).wait(5039));

	// 圖層 1 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_535 = new cjs.Graphics().p("A5QfzMAAAg/lMAyhAAAMAAAA/lg");
	var mask_15_graphics_736 = new cjs.Graphics().p("A5QfzMAAAg/lMAyhAAAMAAAA/lg");
	var mask_15_graphics_778 = new cjs.Graphics().p("A5QfzMAAAg/lMAyhAAAMAAAA/lg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(535).to({graphics:mask_15_graphics_535,x:1119.3,y:337.5}).wait(25).to({graphics:null,x:0,y:0}).wait(176).to({graphics:mask_15_graphics_736,x:1119.3,y:337.5}).wait(42).to({graphics:mask_15_graphics_778,x:1119.3,y:337.5}).wait(5060));

	// 右門
	this.instance_176 = new lib.元件15();
	this.instance_176.parent = this;
	this.instance_176.setTransform(1119,337.5,1,1,0,0,0,162,203.5);
	this.instance_176._off = true;

	var maskedShapeInstanceList = [this.instance_176];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_176).wait(535).to({_off:false},0).to({x:1383.6},19).to({_off:true},6).wait(176).to({_off:false},0).wait(29).to({x:1218},13).to({x:1120},16).to({_off:true},5).wait(5039));

	// 左門
	this.instance_177 = new lib.元件13();
	this.instance_177.parent = this;
	this.instance_177.setTransform(795.6,337.5,1,1,0,0,0,162,203.5);
	this.instance_177._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_177).wait(535).to({_off:false},0).to({x:528.4},19).to({_off:true},6).wait(176).to({_off:false},0).wait(29).to({x:707.2},13).to({x:796},16).to({_off:true},5).wait(5039));

	// 圖層 7 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_388 = new cjs.Graphics().p("Egt4AfpMAAAg/RMBbxAAAMAAAA/Rg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:null,x:0,y:0}).wait(388).to({graphics:mask_16_graphics_388,x:951.7,y:336.5}).wait(5450));

	// 車2
	this.instance_178 = new lib.補間動畫8("synched",0);
	this.instance_178.parent = this;
	this.instance_178.setTransform(1404,371);
	this.instance_178._off = true;

	this.instance_179 = new lib.補間動畫9("synched",0);
	this.instance_179.parent = this;
	this.instance_179.setTransform(1007.6,371);
	this.instance_179._off = true;

	var maskedShapeInstanceList = [this.instance_178,this.instance_179];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_178).wait(388).to({_off:false},0).to({x:1186.6},13).to({_off:true,x:1007.6},20).wait(5417));
	this.timeline.addTween(cjs.Tween.get(this.instance_179).wait(401).to({_off:false},20).wait(123).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(5278));

	// 車
	this.instance_180 = new lib.補間動畫7("synched",0);
	this.instance_180.parent = this;
	this.instance_180.setTransform(234,621);
	this.instance_180._off = true;

	this.instance_181 = new lib.補間動畫5("synched",0);
	this.instance_181.parent = this;
	this.instance_181.setTransform(837.9,621);
	this.instance_181._off = true;

	this.instance_182 = new lib.補間動畫6("synched",0);
	this.instance_182.parent = this;
	this.instance_182.setTransform(1032.8,621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_180}]},314).to({state:[{t:this.instance_181}]},46).to({state:[{t:this.instance_182}]},27).to({state:[]},1).wait(5450));
	this.timeline.addTween(cjs.Tween.get(this.instance_180).wait(314).to({_off:false},0).to({_off:true,x:837.9},46).wait(5478));
	this.timeline.addTween(cjs.Tween.get(this.instance_181).wait(314).to({_off:false},46).to({_off:true,x:1032.8},27).wait(5451));

	// 迎賓背景
	this.movieClip_1 = new lib.元件2();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(658,425.5,1,1,0,0,0,624,291.5);
	this.movieClip_1.alpha = 0;
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(272).to({_off:false},0).to({alpha:1},42).to({_off:true},74).wait(5450));

	// 底圖
	this.instance_183 = new lib.元件1();
	this.instance_183.parent = this;
	this.instance_183.setTransform(656.7,369.8,1,1,0,0,0,656.7,369.8);
	this.instance_183.alpha = 0;
	this.instance_183._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_183).wait(260).to({_off:false},0).to({alpha:1},9).wait(5569));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1207.1,705.3,1,1,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(220).to({_off:false},0).wait(2).to({_off:true},1).wait(5615));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(658,370.5,1,1,0,0,0,657.1,370.1);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},19).to({alpha:1},2).wait(52).to({_off:true},37).wait(5615));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(658,370.5,1,1,0,0,0,657.1,370.1);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(5725));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(657.6,370.2,1314.6,740.3);
// library properties:
lib.properties = {
	width: 1314,
	height: 740,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/WTF_atlas_.png", id:"WTF_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;