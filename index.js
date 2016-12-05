(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[3657,742,400,400],[1204,1344,400,400],[3612,2120,359,320],[3612,1796,368,322],[1179,3502,1411,107],[2592,3502,1395,107],[3657,1144,311,107],[3612,2550,200,200],[4024,146,65,144],[3814,2550,200,200],[2632,0,1314,740],[1806,1793,200,51],[602,2448,600,550],[1151,742,600,600],[1204,2897,600,550],[1806,2950,600,550],[2408,2950,600,550],[2453,742,600,550],[3055,742,600,550],[1753,1241,600,550],[2355,1294,600,550],[2957,1294,600,550],[0,1318,600,550],[602,1344,600,550],[1204,1793,600,550],[1806,1846,600,550],[2408,1846,600,550],[3010,1846,600,550],[0,1870,600,550],[602,1896,600,550],[1204,2345,600,550],[1806,2398,600,550],[2408,2398,600,550],[3010,2398,600,550],[0,2422,600,550],[3559,1294,500,500],[0,742,1149,574],[0,3376,1177,182],[1316,0,1314,740],[1753,742,698,497],[1395,3611,1060,108],[4024,0,65,144],[3970,1144,80,80],[0,0,1314,740],[3948,0,74,321],[1606,1344,80,80],[1606,1426,80,80],[0,2974,600,400],[1606,1508,80,80],[3810,2929,261,106],[0,3611,1393,106],[3612,2442,461,106],[3010,2950,658,469],[0,3719,861,106],[3948,567,93,103],[3612,2752,196,195],[1675,1590,67,74],[3948,672,129,20],[3948,463,94,102],[1606,1590,67,74],[2457,3611,1061,106],[2457,3719,854,106],[602,3000,161,106],[765,3000,161,106],[3948,323,138,138],[928,3000,161,106],[3810,2752,175,175],[3670,3037,161,106]]}
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



(lib.下一頁Button3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.下一頁Button = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.圖片1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖片2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.圖片3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.圖片4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.圖片5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.洞察 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.未命名5png複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.細緻 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._101n1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._1241top1L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._1241top1R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._12420091Lpng複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._12420091Rpng複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._12420092L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._12420101R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._12420111L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._12420111R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._12420112L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._12420112R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._12420121L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._12420121R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._12420131L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._12420131R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._12420132L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._12420132R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._12420141L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._12420141R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._12420142L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._12420151L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._12420151R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._12420161L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._12420161R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._124buttonback = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._1png複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._2321 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.idkwhattoname = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.luxgen1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.luxgen2png複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.qwer = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.齒輪 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.U12背景 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.zsd = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.電視 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖24 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖27 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖28 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖30 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖36 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖38 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖39複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖41 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖42 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖44 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖46 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖52 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖53 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖54 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖55 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖56 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖57 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(67);
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


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.未命名5png複製();
	this.instance.parent = this;
	this.instance.setTransform(-25.9,-118.5,0.797,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-118.5,51.9,237.1);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.下一頁Button();
	this.instance.parent = this;
	this.instance.setTransform(-73.3,-73.3,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-73.3,146.6,146.6);


(lib.補間動畫24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖30();
	this.instance.parent = this;
	this.instance.setTransform(-247.2,-176.2,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.2,-176.2,494.4,352.4);


(lib.補間動畫21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Gen", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(0,-39.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsIMJQlDlBAAnIQAAnGFDlDQFClCHGABQHIgBFCFCQFCFDAAHGQAAHIlCFBQlCFCnIAAQnGAAlClCg");
	this.shape.setTransform(-1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-109.9,230,219.9);


(lib.補間動畫20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Gen", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(0,-39.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsJMKQlClCAAnIQAAnHFClCQFClBHHgBQHIABFCFBQFCFCAAHHQAAHIlCFCQlCFCnIAAQnHAAlClCg");
	this.shape.setTransform(-1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-109.9,230,219.9);


(lib.補間動畫19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Lux", "64px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(0,-62.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsZMaQlJlJABnRQgBnQFJlJQFJlJHQABQAbgBAcACQGuASE1E1QFIFJAAHQQAAHRlIFJQk1E1muASIg3ABQnQAAlJlIg");
	this.shape.setTransform(-1.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-137.8,251.1,275.7);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Lux", "64px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(0,-62.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsZMaQlIlJAAnRQAAnQFIlJQFJlIHQAAQAbgBAcACQGuASE1E1QFIFJAAHQQAAHRlIFJQk1E1muASIg3ABQnQAAlJlIg");
	this.shape.setTransform(-1.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-137.8,251.1,275.7);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.電視();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.602,1.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tv, new cjs.Rectangle(0,0,961,640.7), null);


(lib.sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sub, new cjs.Rectangle(0,0,870.9,66.8), null);


(lib.luxgen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen2png複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxgen2, new cjs.Rectangle(0,0,849.8,86.6), null);


(lib.luxgen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxgen1_1, new cjs.Rectangle(0,0,443.9,316.1), null);


(lib.lux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lux, new cjs.Rectangle(0,0,250.5,223.3), null);


(lib.gen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gen, new cjs.Rectangle(0,0,255.2,223.3), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._124buttonback();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,226.1);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖57();
	this.instance.parent = this;
	this.instance.setTransform(5.8,132.7,0.741,0.741);

	this.instance_1 = new lib.點陣圖56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,125,211.2), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖55();
	this.instance.parent = this;
	this.instance.setTransform(0.1,122.6,0.741,0.74);

	this.instance_1 = new lib.點陣圖54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,119.4,201.1), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.細緻();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,98.3,98.3), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.洞察();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,98.3,98.3), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖39複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.787,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,101.5,15.8), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,135.9,135.2), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖36();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,617.3,76), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖44();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,787.2,78.7), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,94,102), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,67,74), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,67,74), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,93,103), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖28();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,340.1,78.2), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖27();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,950,72.3), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,144.2,58.6), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,170.3,58.6), null);


(lib._4setting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.齒輪();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._3now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._1main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib.測試啦 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.qwer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.798,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


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
	this.instance = new lib.idkwhattoname();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,0,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.nissanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2321();
	this.instance.parent = this;
	this.instance.setTransform(66.9,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissanword, new cjs.Rectangle(66.9,54.4,1177,182), null);


(lib.看三小 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zsd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.701,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.3,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,146.6);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.4},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖53();
	this.instance.parent = this;
	this.instance.setTransform(0,117.6,0.741,0.741);

	this.instance_1 = new lib.元件22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.1,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,119.3,196.1), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖52();
	this.instance.parent = this;
	this.instance.setTransform(0,125.1,0.741,0.741);

	this.instance_1 = new lib.元件21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.3,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,119.3,203.6), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 12
	this.instance = new lib.元件32();
	this.instance.parent = this;
	this.instance.setTransform(686.4,112,1,1,0,0,0,62.5,105.6);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({alpha:1},15).wait(577));

	// 圖層 11
	this.instance_1 = new lib.元件31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(467.7,114.6,1,1,0,0,0,59.6,100.6);
	this.instance_1.alpha = 0.148;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({alpha:1},14).wait(589));

	// 圖層 10
	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.6,117,1,1,0,0,0,59.6,98);
	this.instance_2.alpha = 0.172;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({alpha:1},15).wait(600));

	// 圖層 9
	this.instance_3 = new lib.元件29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.4,115.8,1,1,0,0,0,59.6,101.8);
	this.instance_3.alpha = 0.172;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({alpha:1},15).wait(612));

	// 圖層 7
	this.instance_4 = new lib.元件19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(718.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_4.alpha = 0.27;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:690.8,alpha:1},6).wait(627));

	// 圖層 6
	this.instance_5 = new lib.元件20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(605.7,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_5.alpha = 0.27;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:578.2,alpha:1},8).wait(632));

	// 圖層 5
	this.instance_6 = new lib.元件19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(490.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_6.alpha = 0.27;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:463.3,alpha:1},7).wait(640));

	// 圖層 4
	this.instance_7 = new lib.元件20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(378.2,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_7.alpha = 0.172;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({x:350.7,alpha:1},7).wait(646).to({x:388.2},0).wait(1));

	// 圖層 3
	this.instance_8 = new lib.元件19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(263.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_8.alpha = 0.148;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:235.8,alpha:1},7).wait(653).to({x:273.3},0).wait(1));

	// 圖層 2
	this.instance_9 = new lib.元件20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.8,67.9,1,1,0,0,0,50.8,7.9);
	this.instance_9.alpha = 0.148;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({x:124.3,alpha:1},8).wait(660).to({x:161.8},0).wait(1));

	// 圖層 1
	this.instance_10 = new lib.元件19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(36.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_10.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:9.3,alpha:1},7).wait(667).to({x:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-1.2,138.6,137.9);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件15();
	this.instance.parent = this;
	this.instance.setTransform(47,51,1,1,0,0,0,47,51);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).to({alpha:0},15).to({alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,102);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件12();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,67,74), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件13();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.98},10).to({alpha:0},30).to({alpha:1},16).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件10();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.129},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(46.5,51.5,1,1,0,0,0,46.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},47).to({alpha:1},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


// stage content:
(lib._1204檔案修正 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_224 = function() {
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(226);
		}
	}
	this.frame_1227 = function() {
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
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(1235);
		}
	}
	this.frame_1255 = function() {
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
		
		
		this.sp4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_48.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_48()
		{
			this.gotoAndStop(1258);
		}
	}
	this.frame_1258 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bt1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_55.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_55()
		{
			this.gotoAndStop(1255);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_56.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_56()
		{
			this.gotoAndStop(1262);
		}
	}
	this.frame_1262 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.asd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_63.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_63()
		{
			this.gotoAndStop(1267);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToAndStopAtFrame_64.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_64()
		{
			this.gotoAndStop(1258);
		}
	}
	this.frame_1267 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gp2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_59.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_59()
		{
			this.gotoAndStop(1274);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_60.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_60()
		{
			this.gotoAndStop(1262);
		}
	}
	this.frame_1274 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.haha.addEventListener("click", fl_ClickToGoToAndStopAtFrame_65.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_65()
		{
			this.gotoAndStop(1278);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sisi.addEventListener("click", fl_ClickToGoToAndStopAtFrame_66.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_66()
		{
			this.gotoAndStop(1267);
		}
	}
	this.frame_1278 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gfgfg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_67()
		{
			this.gotoAndStop(1282);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sasa.addEventListener("click", fl_ClickToGoToAndStopAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_68()
		{
			this.gotoAndStop(1274);
		}
	}
	this.frame_1282 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.jkjk.addEventListener("click", fl_ClickToGoToAndStopAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_69()
		{
			this.gotoAndStop(1287);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.frd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_70.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_70()
		{
			this.gotoAndStop(1278);
		}
	}
	this.frame_1287 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sgfdgdsfgs.addEventListener("click", fl_ClickToGoToAndStopAtFrame_71.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_71()
		{
			this.gotoAndStop(1292);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.jutyngf.addEventListener("click", fl_ClickToGoToAndStopAtFrame_72.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_72()
		{
			this.gotoAndStop(1282);
		}
	}
	this.frame_1292 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.grewvfsagthytetrutegbr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_74.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_74()
		{
			this.gotoAndStop(1297);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.liukyjhntgbfdv.addEventListener("click", fl_ClickToGoToAndStopAtFrame_75.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_75()
		{
			this.gotoAndStop(1287);
		}
	}
	this.frame_1297 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.kijuyhngbf.addEventListener("click", fl_ClickToGoToAndStopAtFrame_76.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_76()
		{
			this.gotoAndStop(1302);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.fewsdcv.addEventListener("click", fl_ClickToGoToAndStopAtFrame_77.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_77()
		{
			this.gotoAndStop(1292);
		}
	}
	this.frame_1302 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.dhtrdbvsdvcdfdgw.addEventListener("click", fl_ClickToGoToAndStopAtFrame_78.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_78()
		{
			this.gotoAndStop(1307);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bvbvbvbvbfgre.addEventListener("click", fl_ClickToGoToAndStopAtFrame_79.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_79()
		{
			this.gotoAndStop(1297);
		}
	}
	this.frame_1307 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.hghghrtjrjuher.addEventListener("click", fl_ClickToGoToAndStopAtFrame_80.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_80()
		{
			this.gotoAndStop(1311);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.lkiujhnbgvdfrgsrgr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(1302);
		}
	}
	this.frame_1311 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.drews.addEventListener("click", fl_ClickToGoToAndStopAtFrame_82.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_82()
		{
			this.gotoAndStop(1307);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1003).call(this.frame_1227).wait(28).call(this.frame_1255).wait(3).call(this.frame_1258).wait(4).call(this.frame_1262).wait(5).call(this.frame_1267).wait(7).call(this.frame_1274).wait(4).call(this.frame_1278).wait(4).call(this.frame_1282).wait(5).call(this.frame_1287).wait(5).call(this.frame_1292).wait(5).call(this.frame_1297).wait(5).call(this.frame_1302).wait(5).call(this.frame_1307).wait(4).call(this.frame_1311).wait(1130));

	// 常駐
	this.setting = new lib._4setting();
	this.setting.parent = this;
	this.setting.setTransform(1839.7,83.5,1.461,1.461,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.setting, 0, 1, 1);

	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1709.7,83.5,1.461,1.461,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.local, 0, 1, 1);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1579.6,83.5,1.461,1.461,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.hint, 0, 1, 1);

	this.home = new lib._1main();
	this.home.parent = this;
	this.home.setTransform(1449.6,83.5,1.461,1.461,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},2440).wait(1));

	// 內容
	this.drews = new lib.看三小();
	this.drews.parent = this;
	this.drews.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.drews, 0, 1, 1);

	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(1556.4,794.1,1.461,1.461,0,0,0,113.1,113.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.drews}]},1311).to({state:[]},1).wait(1129));

	// 內容
	this.lkiujhnbgvdfrgsrgr = new lib.看三小();
	this.lkiujhnbgvdfrgsrgr.parent = this;
	this.lkiujhnbgvdfrgsrgr.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.lkiujhnbgvdfrgsrgr, 0, 1, 1);

	this.hghghrtjrjuher = new lib.測試啦();
	this.hghghrtjrjuher.parent = this;
	this.hghghrtjrjuher.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.hghghrtjrjuher, 0, 1, 1);

	this.instance_1 = new lib._12420161R();
	this.instance_1.parent = this;
	this.instance_1.setTransform(943,215,1.309,1.309);

	this.instance_2 = new lib._12420161L();
	this.instance_2.parent = this;
	this.instance_2.setTransform(173,247,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.hghghrtjrjuher},{t:this.lkiujhnbgvdfrgsrgr}]},1307).to({state:[]},1).wait(1133));

	// 內容
	this.bvbvbvbvbfgre = new lib.看三小();
	this.bvbvbvbvbfgre.parent = this;
	this.bvbvbvbvbfgre.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.bvbvbvbvbfgre, 0, 1, 1);

	this.dhtrdbvsdvcdfdgw = new lib.測試啦();
	this.dhtrdbvsdvcdfdgw.parent = this;
	this.dhtrdbvsdvcdfdgw.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.dhtrdbvsdvcdfdgw, 0, 1, 1);

	this.instance_3 = new lib._12420151R();
	this.instance_3.parent = this;
	this.instance_3.setTransform(979,267,1.248,1.248);

	this.instance_4 = new lib._12420151L();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156,210,1.352,1.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.dhtrdbvsdvcdfdgw},{t:this.bvbvbvbvbfgre}]},1302).to({state:[]},1).wait(1138));

	// 內容
	this.fewsdcv = new lib.看三小();
	this.fewsdcv.parent = this;
	this.fewsdcv.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.fewsdcv, 0, 1, 1);

	this.kijuyhngbf = new lib.測試啦();
	this.kijuyhngbf.parent = this;
	this.kijuyhngbf.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.kijuyhngbf, 0, 1, 1);

	this.instance_5 = new lib._12420142L();
	this.instance_5.parent = this;
	this.instance_5.setTransform(199,264,1.254,1.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.kijuyhngbf},{t:this.fewsdcv}]},1297).to({state:[]},1).wait(1143));

	// 內容
	this.liukyjhntgbfdv = new lib.看三小();
	this.liukyjhntgbfdv.parent = this;
	this.liukyjhntgbfdv.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.liukyjhntgbfdv, 0, 1, 1);

	this.grewvfsagthytetrutegbr = new lib.測試啦();
	this.grewvfsagthytetrutegbr.parent = this;
	this.grewvfsagthytetrutegbr.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.grewvfsagthytetrutegbr, 0, 1, 1);

	this.instance_6 = new lib._12420141R();
	this.instance_6.parent = this;
	this.instance_6.setTransform(929,221,1.358,1.358);

	this.instance_7 = new lib._12420141L();
	this.instance_7.parent = this;
	this.instance_7.setTransform(188,221,1.327,1.327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.grewvfsagthytetrutegbr},{t:this.liukyjhntgbfdv}]},1292).to({state:[]},1).wait(1148));

	// 內容
	this.jutyngf = new lib.看三小();
	this.jutyngf.parent = this;
	this.jutyngf.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.jutyngf, 0, 1, 1);

	this.sgfdgdsfgs = new lib.測試啦();
	this.sgfdgdsfgs.parent = this;
	this.sgfdgdsfgs.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.sgfdgdsfgs, 0, 1, 1);

	this.instance_8 = new lib._12420132R();
	this.instance_8.parent = this;
	this.instance_8.setTransform(933,213,1.376,1.376);

	this.instance_9 = new lib._12420132L();
	this.instance_9.parent = this;
	this.instance_9.setTransform(166,221,1.345,1.345);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.sgfdgdsfgs},{t:this.jutyngf}]},1287).to({state:[]},1).wait(1153));

	// 內容
	this.frd = new lib.看三小();
	this.frd.parent = this;
	this.frd.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.frd, 0, 1, 1);

	this.jkjk = new lib.測試啦();
	this.jkjk.parent = this;
	this.jkjk.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.jkjk, 0, 1, 1);

	this.instance_10 = new lib._12420131R();
	this.instance_10.parent = this;
	this.instance_10.setTransform(949,238,1.29,1.29);

	this.instance_11 = new lib._12420131L();
	this.instance_11.parent = this;
	this.instance_11.setTransform(179,242,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.jkjk},{t:this.frd}]},1282).to({state:[]},1).wait(1158));

	// 內容
	this.sasa = new lib.看三小();
	this.sasa.parent = this;
	this.sasa.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.sasa, 0, 1, 1);

	this.gfgfg = new lib.測試啦();
	this.gfgfg.parent = this;
	this.gfgfg.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.gfgfg, 0, 1, 1);

	this.instance_12 = new lib._12420121R();
	this.instance_12.parent = this;
	this.instance_12.setTransform(968,248,1.279,1.279);

	this.instance_13 = new lib._12420121L();
	this.instance_13.parent = this;
	this.instance_13.setTransform(168,248,1.32,1.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.gfgfg},{t:this.sasa}]},1278).to({state:[]},1).wait(1162));

	// 內容
	this.sisi = new lib.看三小();
	this.sisi.parent = this;
	this.sisi.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.sisi, 0, 1, 1);

	this.haha = new lib.測試啦();
	this.haha.parent = this;
	this.haha.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.haha, 0, 1, 1);

	this.instance_14 = new lib._12420112R();
	this.instance_14.parent = this;
	this.instance_14.setTransform(967,251,1.308,1.308);

	this.instance_15 = new lib._12420112L();
	this.instance_15.parent = this;
	this.instance_15.setTransform(162,237,1.315,1.315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.haha},{t:this.sisi}]},1274).to({state:[]},1).wait(1166));

	// 內容
	this.bt2 = new lib.看三小();
	this.bt2.parent = this;
	this.bt2.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.bt2, 0, 1, 1);

	this.gp2 = new lib.測試啦();
	this.gp2.parent = this;
	this.gp2.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.gp2, 0, 1, 1);

	this.instance_16 = new lib._12420111R();
	this.instance_16.parent = this;
	this.instance_16.setTransform(956,244,1.339,1.339);

	this.instance_17 = new lib._12420111L();
	this.instance_17.parent = this;
	this.instance_17.setTransform(147,217,1.388,1.388);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.gp2},{t:this.bt2}]},1267).to({state:[]},1).wait(1173));

	// 內容
	this.qwe = new lib.看三小();
	this.qwe.parent = this;
	this.qwe.setTransform(32.7,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.qwe, 0, 1, 1);

	this.asd = new lib.測試啦();
	this.asd.parent = this;
	this.asd.setTransform(1845.7,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.asd, 0, 1, 1);

	this.instance_18 = new lib._12420101R();
	this.instance_18.parent = this;
	this.instance_18.setTransform(963,254,1.265,1.265);

	this.instance_19 = new lib._12420092L();
	this.instance_19.parent = this;
	this.instance_19.setTransform(180,250,1.251,1.251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.asd},{t:this.qwe}]},1262).to({state:[]},1).wait(1178));

	// 內容
	this.bt1 = new lib.看三小();
	this.bt1.parent = this;
	this.bt1.setTransform(32.9,447.1,1.461,1.461);
	new cjs.ButtonHelper(this.bt1, 0, 1, 1);

	this.gp1 = new lib.測試啦();
	this.gp1.parent = this;
	this.gp1.setTransform(1846,620.3,1.461,1.461,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.gp1, 0, 1, 1);

	this.instance_20 = new lib._12420091Rpng複製();
	this.instance_20.parent = this;
	this.instance_20.setTransform(964,244,1.274,1.274);

	this.instance_21 = new lib._12420091Lpng複製();
	this.instance_21.parent = this;
	this.instance_21.setTransform(156,230,1.347,1.347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.gp1},{t:this.bt1}]},1258).to({state:[]},1).wait(1182));

	// 又見
	this.sp4 = new lib.元件33();
	this.sp4.parent = this;
	this.sp4.setTransform(1808.1,447.1,1.461,1.461);
	this.sp4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sp4).wait(1255).to({_off:false},0).to({_off:true},1).wait(1185));

	// 往事紀錄
	this.instance_22 = new lib._1241top1R();
	this.instance_22.parent = this;
	this.instance_22.setTransform(963,273,1.289,1.289);

	this.instance_23 = new lib._1241top1L();
	this.instance_23.parent = this;
	this.instance_23.setTransform(156,256,1.307,1.307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.instance_22}]},1255).to({state:[]},1).wait(1185));

	// 下一頁
	this.next = new lib.元件34();
	this.next.parent = this;
	this.next.setTransform(1781.6,951.7,1.461,1.461,0,0,0,73.3,73.3);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.instance_24 = new lib.下一頁Button3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1682,842,0.535,0.535);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.29,0,0,0.29,-166.5,-83.1)).s().p("A5/M/IAA5+MAz/AAAIAAZ+g");
	this.shape.setTransform(1719.7,941.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.387,0,0,0.387,-222.4,-111.1)).s().p("EgiuARXMAAAgitMBFeAAAMAAAAitg");
	this.shape_1.setTransform(1656.1,913);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.484,0,0,0.484,-278.3,-139)).s().p("EgreAVuMAAAgrbMBW9AAAMAAAArbg");
	this.shape_2.setTransform(1592.5,884.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.582,0,0,0.582,-334.2,-166.9)).s().p("Eg0NAaGMAAAg0LMBobAAAMAAAA0Lg");
	this.shape_3.setTransform(1529,856.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.679,0,0,0.679,-390.2,-194.9)).s().p("Eg88AedMAAAg85MB55AAAMAAAA85g");
	this.shape_4.setTransform(1465.4,828.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.776,0,0,0.776,-446.1,-222.8)).s().p("EhFsAi0MAAAhFnMCLZAAAMAAABFng");
	this.shape_5.setTransform(1401.8,800.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.874,0,0,0.874,-502,-250.8)).s().p("EhObAnMMAAAhOXMCc3AAAMAAABOXg");
	this.shape_6.setTransform(1338.2,772.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.971,0,0,0.971,-557.9,-278.7)).s().p("EhXKArjMAAAhXFMCuVAAAMAAABXFg");
	this.shape_7.setTransform(1274.6,744.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(1.068,0,0,1.068,-613.8,-306.6)).s().p("Ehf5Av6MAAAhfzMC/zAAAMAAABfzg");
	this.shape_8.setTransform(1211.1,716.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(1.166,0,0,1.166,-669.8,-334.6)).s().p("EhooA0SMAAAhojMDRRAAAMAAABojg");
	this.shape_9.setTransform(1147.5,688.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(1.263,0,0,1.263,-725.7,-362.5)).s().p("EhxXA4pMAAAhxRMDivAAAMAAABxRg");
	this.shape_10.setTransform(1083.9,660);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(1.36,0,0,1.36,-781.6,-390.5)).s().p("Eh6HA9BMAAAh6BMD0PAAAMAAAB6Bg");
	this.shape_11.setTransform(1020.3,631.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(1.458,0,0,1.458,-837.5,-418.4)).s().p("EiC2BBYMAAAiCvMEFtAAAMAAACCvg");
	this.shape_12.setTransform(956.8,603.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.next}]},1227).to({state:[{t:this.instance_24}]},7).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(1186));

	// 飛出來
	this.instance_25 = new lib.元件18();
	this.instance_25.parent = this;
	this.instance_25.setTransform(488,548.8,1.461,1.461,0,0,0,68,67.6);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(984).to({_off:false},0).wait(228).to({_off:true},1).wait(1228));

	// 閃亮
	this.instance_26 = new lib.元件14();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1322.4,385.5,1.461,1.461,0,0,0,47,51);

	this.instance_27 = new lib.元件11();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1204.8,460,1.461,1.461,0,0,0,33.5,37);

	this.instance_28 = new lib.元件9();
	this.instance_28.parent = this;
	this.instance_28.setTransform(530.1,791.4,1.461,1.461,0,0,0,33.5,37);

	this.instance_29 = new lib.元件7();
	this.instance_29.parent = this;
	this.instance_29.setTransform(443.1,710.3,1.461,1.461,0,0,0,46.5,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},817).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},109).to({state:[]},1).wait(1514));

	// 車
	this.instance_30 = new lib.補間動畫24("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(473.1,568.5,1.461,1.461);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(805).to({_off:false},0).to({x:898.9},8).wait(113).to({startPosition:0},0).to({x:813.7},5).to({x:2196.3},7).to({_off:true},1).wait(1502));

	// 創新
	this.instance_31 = new lib.元件2();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1222.4,796.6,1.461,1.461,0,0,0,72,29.3);
	this.instance_31.alpha = 0.379;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(528).to({_off:false},0).to({alpha:1},15).wait(45).to({alpha:0},16).to({_off:true},1).wait(1836));

	// 細緻
	this.instance_32 = new lib.元件1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(560,796.6,1.461,1.461,0,0,0,85.1,29.3);
	this.instance_32.alpha = 0.379;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(492).to({_off:false},0).to({alpha:1},16).wait(80).to({alpha:0},16).to({_off:true},1).wait(1836));

	// 字幕
	this.instance_33 = new lib.圖片3();
	this.instance_33.parent = this;
	this.instance_33.setTransform(276,819,0.911,0.911);

	this.instance_34 = new lib.sub();
	this.instance_34.parent = this;
	this.instance_34.setTransform(912,868.4,1.461,1.461,0,0,0,435.4,33.5);
	this.instance_34.alpha = 0.238;
	this.instance_34._off = true;

	this.instance_35 = new lib.元件3();
	this.instance_35.parent = this;
	this.instance_35.setTransform(905,867,1.461,1.461,0,0,0,475.1,36.1);
	this.instance_35.alpha = 0.43;
	this.instance_35._off = true;

	this.instance_36 = new lib.元件4();
	this.instance_36.parent = this;
	this.instance_36.setTransform(924.3,859.8,1.461,1.461,0,0,0,170.1,39.1);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.instance_37 = new lib.點陣圖44();
	this.instance_37.parent = this;
	this.instance_37.setTransform(326,807,1.084,1.084);

	this.instance_38 = new lib.元件16();
	this.instance_38.parent = this;
	this.instance_38.setTransform(901.1,864.3,1.461,1.461,0,0,0,393.6,39.3);
	this.instance_38._off = true;

	this.instance_39 = new lib.元件17();
	this.instance_39.parent = this;
	this.instance_39.setTransform(893.8,853.3,1.461,1.461,0,0,0,308.7,38);
	this.instance_39.alpha = 0.148;
	this.instance_39._off = true;

	this.instance_40 = new lib.點陣圖46();
	this.instance_40.parent = this;
	this.instance_40.setTransform(415,790,1.233,1.233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},344).to({state:[{t:this.instance_34}]},118).to({state:[{t:this.instance_34}]},7).to({state:[{t:this.instance_35}]},225).to({state:[{t:this.instance_35}]},6).to({state:[{t:this.instance_36}]},62).to({state:[{t:this.instance_36}]},20).to({state:[]},29).to({state:[{t:this.instance_37}]},6).to({state:[{t:this.instance_38}]},129).to({state:[{t:this.instance_38}]},11).to({state:[{t:this.instance_39}]},9).to({state:[{t:this.instance_39}]},8).to({state:[{t:this.instance_40}]},97).to({state:[{t:this.instance_40}]},141).to({state:[]},1).wait(1228));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(462).to({_off:false},0).to({alpha:1},7).to({_off:true},225).wait(1747));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(694).to({_off:false},0).to({alpha:1},6).to({_off:true},62).wait(1679));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(762).to({_off:false},0).to({alpha:1},20).to({_off:true},29).wait(1630));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(946).to({_off:false},0).to({alpha:0},11).to({_off:true},9).wait(1475));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(966).to({_off:false},0).to({alpha:1},8).to({_off:true},97).wait(1370));

	// gen
	this.instance_41 = new lib.gen();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1218.1,590.7,1.461,1.461,0,0,0,127.6,111.7);
	this.instance_41.alpha = 0.238;
	this.instance_41._off = true;

	this.text = new cjs.Text("Genius", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(1217.6,530.2,1.428,1.428);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZ0AAQAAKtnkHjQnjHkqtAAQqsAAnjnkQnknjAAqtQAAqrHknkQHjnkKsAAQKtAAHjHkQHkHkAAKrg");
	this.shape_13.setTransform(1214.8,588.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D69B").s().p("AxvRwQnYnWAAqaQAAqYHYnYQHXnWKYAAQKbAAHWHWQHWHYAAKYQAAKanWHWQnWHWqbAAQqYAAnXnWg");
	this.shape_14.setTransform(1214.8,588.4);

	this.instance_42 = new lib.補間動畫20("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(1217.6,588.3,1.461,1.461);
	this.instance_42._off = true;

	this.instance_43 = new lib.補間動畫21("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(1058.9,590.5,1.461,1.461);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_41}]},392).to({state:[{t:this.instance_41}]},24).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Genius"}}]},232).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Geniu"}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Geni"}}]},4).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Gen"}}]},5).to({state:[{t:this.instance_42}]},9).to({state:[{t:this.instance_43}]},23).to({state:[{t:this.instance_43}]},9).to({state:[{t:this.instance_43}]},20).to({state:[{t:this.instance_43}]},41).to({state:[{t:this.instance_43}]},37).wait(1642));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(392).to({_off:false},0).to({alpha:1},24).to({_off:true},232).wait(1793));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(669).to({_off:false},0).to({_off:true,x:1058.9,y:590.5,alpha:0},23).wait(1749));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(669).to({_off:false},23).wait(9).to({alpha:0.16},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).wait(1642));

	// lux
	this.instance_44 = new lib.luxgen1_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(893.8,576.8,1.461,1.461,0,0,0,222,158);
	this.instance_44.alpha = 0.289;
	this.instance_44._off = true;

	this.instance_45 = new lib.luxgen2();
	this.instance_45.parent = this;
	this.instance_45.setTransform(898,871,1.461,1.461,0,0,0,424.9,43.3);

	this.instance_46 = new lib.lux();
	this.instance_46.parent = this;
	this.instance_46.setTransform(565.4,593,1.461,1.461,0,0,0,125.3,111.7);
	this.instance_46.alpha = 0.238;
	this.instance_46._off = true;

	this.text_1 = new cjs.Text("Luxury", "64px 'Calibri'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 80;
	this.text_1.lineWidth = 247;
	this.text_1.parent = this;
	this.text_1.setTransform(566.8,534.9,1.461,1.461);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8EB4E3").s().p("AyHSHQngnfAAqoQAAqnHgngQHgngKnAAQAoAAAoACQJ0AaHDHEQHhHgAAKnQAAKonhHfQnDHFp0AaQgoACgoAAQqnAAngnhg");
	this.shape_15.setTransform(564.3,589.3);

	this.instance_47 = new lib.補間動畫18("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(566.8,626.6,1.461,1.461);
	this.instance_47._off = true;

	this.instance_48 = new lib.補間動畫19("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(815.2,624.5,1.461,1.461);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_44}]},252).to({state:[{t:this.instance_44}]},14).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:1}}]},9).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.512}}]},46).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.32}}]},4).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.148}}]},3).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.109}}]},3).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0}}]},4).to({state:[]},2).to({state:[{t:this.instance_46}]},23).to({state:[{t:this.instance_46}]},21).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxury"}}]},249).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxur"}}]},3).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxu"}}]},4).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Lux"}}]},4).to({state:[{t:this.instance_47}]},28).to({state:[{t:this.instance_48}]},23).to({state:[{t:this.instance_48}]},9).to({state:[{t:this.instance_48}]},20).to({state:[{t:this.instance_48}]},41).to({state:[{t:this.instance_48}]},37).to({state:[]},1610).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(252).to({_off:false},0).to({alpha:1},14).wait(55).to({alpha:0.512},0).wait(4).to({alpha:0.32},0).wait(3).to({alpha:0.148},0).wait(3).to({alpha:0.109},0).wait(4).to({alpha:0},0).to({_off:true},2).wait(2104));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(360).to({_off:false},0).to({alpha:1},21).to({_off:true},249).wait(1811));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(669).to({_off:false},0).to({_off:true,x:815.2,y:624.5,alpha:0},23).wait(1749));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(669).to({_off:false},23).wait(9).to({alpha:0.121},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).to({_off:true},1610).wait(32));

	// 開
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgA4MDVZAAAIAABxMjVZAAAg");
	this.shape_16.setTransform(895.6,570.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EhqrAA5IAAhxMDVXAAAIAABxg");
	this.shape_17.setTransform(895.6,570.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgEnMDVZAAAIAAJOMjVZAAAg");
	this.shape_18.setTransform(895.6,571.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EhqrAEnIAApNMDVXAAAIAAJNg");
	this.shape_19.setTransform(895.6,571.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgIVMDVZAAAIAAQrMjVZAAAg");
	this.shape_20.setTransform(895.6,572);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EhqrAIWIAAwrMDVXAAAIAAQrg");
	this.shape_21.setTransform(895.6,572);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgMDMDVZAAAIAAYHMjVZAAAg");
	this.shape_22.setTransform(895.6,572.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EhqrAMEIAA4HMDVXAAAIAAYHg");
	this.shape_23.setTransform(895.6,572.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgPxMDVZAAAIAAfjMjVZAAAg");
	this.shape_24.setTransform(895.6,573.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EhqrAPyIAA/jMDVXAAAIAAfjg");
	this.shape_25.setTransform(895.6,573.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgTfMDVZAAAMAAAAnAMjVZAAAg");
	this.shape_26.setTransform(895.6,573.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EhqrAThMAAAgnBMDVXAAAMAAAAnBg");
	this.shape_27.setTransform(895.6,573.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgXRMDVZAAAMAAAAujMjVZAAAg");
	this.shape_28.setTransform(895.6,573.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EhqrAXSMAAAgujMDVXAAAMAAAAujg");
	this.shape_29.setTransform(895.6,573.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgbDMDVZAAAMAAAA2HMjVZAAAg");
	this.shape_30.setTransform(895.6,573.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EhqrAbEMAAAg2HMDVXAAAMAAAA2Hg");
	this.shape_31.setTransform(895.6,573.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqsge0MDVZAAAMAAAA9qMjVZAAAg");
	this.shape_32.setTransform(895.6,573.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EhqrAe1MAAAg9pMDVXAAAMAAAA9pg");
	this.shape_33.setTransform(895.6,573.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgimMDVZAAAMAAABFOMjVZAAAg");
	this.shape_34.setTransform(895.6,573.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EhqrAinMAAAhFNMDVXAAAMAAABFNg");
	this.shape_35.setTransform(895.6,573.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgmYMDVZAAAMAAABMxMjVZAAAg");
	this.shape_36.setTransform(895.6,573.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("EhqrAmZMAAAhMxMDVXAAAMAAABMxg");
	this.shape_37.setTransform(895.6,573.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgqKMDVZAAAMAAABUVMjVZAAAg");
	this.shape_38.setTransform(895.6,573.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EhqrAqLMAAAhUVMDVXAAAMAAABUVg");
	this.shape_39.setTransform(895.6,573.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqsgt7MDVZAAAMAAABb4MjVZAAAg");
	this.shape_40.setTransform(895.6,573.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EhqrAt9MAAAhb5MDVXAAAMAAABb5g");
	this.shape_41.setTransform(895.6,573.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgulMDVZAAAMAAABdLMjVZAAAg");
	this.shape_42.setTransform(895.6,573.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EhqrAumMAAAhdLMDVXAAAMAAABdLg");
	this.shape_43.setTransform(895.6,573.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgvOMDVZAAAMAAABedMjVZAAAg");
	this.shape_44.setTransform(895.6,573.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EhqrAvPMAAAhedMDVXAAAMAAABedg");
	this.shape_45.setTransform(895.6,573.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqsgv3MDVZAAAMAAABfvMjVZAAAg");
	this.shape_46.setTransform(895.6,573.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EhqrAv4MAAAhfvMDVXAAAMAAABfvg");
	this.shape_47.setTransform(895.6,573.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgwgMDVZAAAMAAABhCMjVZAAAg");
	this.shape_48.setTransform(895.6,573.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EhqrAwhMAAAhhBMDVXAAAMAAABhBg");
	this.shape_49.setTransform(895.6,573.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgxKMDVZAAAMAAABiVMjVZAAAg");
	this.shape_50.setTransform(895.6,573.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EhqrAxLMAAAhiVMDVXAAAMAAABiVg");
	this.shape_51.setTransform(895.6,573.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgxzMDVZAAAMAAABjnMjVZAAAg");
	this.shape_52.setTransform(895.6,573.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("EhqrAx0MAAAhjnMDVXAAAMAAABjng");
	this.shape_53.setTransform(895.6,573.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgycMDVZAAAMAAABk5MjVZAAAg");
	this.shape_54.setTransform(895.6,573.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("EhqrAydMAAAhk5MDVXAAAMAAABk5g");
	this.shape_55.setTransform(895.6,573.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgzGMDVZAAAMAAABmMMjVZAAAg");
	this.shape_56.setTransform(895.6,573.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EhqrAzGMAAAhmMMDVXAAAMAAABmMg");
	this.shape_57.setTransform(895.6,573.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqsgzvMDVZAAAMAAABnfMjVZAAAg");
	this.shape_58.setTransform(895.6,573.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("EhqrAzwMAAAhnfMDVXAAAMAAABnfg");
	this.shape_59.setTransform(895.6,573.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqsg0YMDVZAAAMAAABoxMjVZAAAg");
	this.shape_60.setTransform(895.6,573.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EhqrA0ZMAAAhoxMDVXAAAMAAABoxg");
	this.shape_61.setTransform(895.6,573.9);

	this.instance_49 = new lib.補間動畫19("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(815.2,624.5,1.461,1.461);
	this.instance_49.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},229).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.instance_49}]},961).to({state:[]},1207).wait(22));

	// 小動畫
	this.instance_50 = new lib.tv();
	this.instance_50.parent = this;
	this.instance_50.setTransform(896.7,638.2,1.461,1.461,0,0,0,480.4,320.3);
	this.instance_50.alpha = 0.48;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(225).to({_off:false},0).to({alpha:1},3).to({_off:true},1006).wait(1207));

	// 小動畫bg
	this.instance_51 = new lib.U12背景();
	this.instance_51.parent = this;
	this.instance_51.setTransform(0,0,1.461,1.461);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(225).to({_off:false},0).wait(2216));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1762.8,1030.2,1.461,1.461,0,0,0,100,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(222).to({_off:false},0).wait(2).to({_off:true},1).wait(2216));

	// 裕隆前話
	this.nissanword = new lib.nissanword();
	this.nissanword.parent = this;
	this.nissanword.setTransform(960.9,938.2,1.461,1.461,0,0,0,650,150);
	this.nissanword.alpha = 0.5;
	this.nissanword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissanword).wait(9).to({_off:false},0).to({alpha:1},34).wait(70).to({_off:true},1).wait(2327));

	// 裕隆前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(961.1,541.2,1.461,1.461,0,0,0,657.1,370.1);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(114).to({_off:false},0).to({alpha:1},20).wait(90).to({_off:true},1).wait(2216));

	// 裕隆前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(961.1,541.2,1.461,1.461,0,0,0,657.1,370.1);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(90).to({_off:true},1).wait(2327));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.9,541.4,1920,1081.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;