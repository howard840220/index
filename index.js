(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1314,
	height: 740,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
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



(lib.提示 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.電視 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖24 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖27 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖28 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖30 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖36 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖38 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖39複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖41 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖42 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖44 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖46 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖52 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖53 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖54 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖55 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖56 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖57 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.補間動畫31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.未命名5png複製();
	this.instance.setTransform(-25.9,-118.5,0.797,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-118.5,51.9,237.1);


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.未命名5png複製();
	this.instance.setTransform(-25.9,-118.5,0.797,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-118.5,51.9,237.1);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.下一頁Button();
	this.instance.setTransform(-73.3,-73.3,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-73.3,146.6,146.6);


(lib.補間動畫24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖30();
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
	this.text.setTransform(-2,-41.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsIMJQlDlCAAnHQAAnGFDlDQFClBHGAAQHHAAFCFBQFDFDAAHGQAAHHlDFCQlCFCnHAAQnGAAlClCg");
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
	this.text.setTransform(-2,-41.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsIMJQlDlCAAnHQAAnGFDlDQFClBHGAAQHIAAFCFBQFCFDgBHGQAAHHlBFCQlCFCnIAAQnGAAlClCg");
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
	this.text.setTransform(-2,-64.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsYMZQlJlJAAnQQAAnPFJlJQFJlJHPAAQAbAAAbABQGuATE1E1QFJFJAAHPQAAHQlJFJQk1E2muASIg2ABQnPAAlJlJg");
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
	this.text.setTransform(-2,-64.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsYMZQlJlJAAnQQAAnPFJlJQFJlJHPAAQAbAAAbACQGuARE1E2QFJFJAAHPQAAHQlJFJQk1E2muASIg2ABQnPAAlJlJg");
	this.shape.setTransform(-1.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-137.8,251.1,275.7);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.電視();
	this.instance.setTransform(0,0,1.602,1.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,961,640.7);


(lib.sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片4();
	this.instance.setTransform(0,0,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,870.9,66.8);


(lib.luxgen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen2png複製();
	this.instance.setTransform(0,0,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,849.8,86.6);


(lib.luxgen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen1();
	this.instance.setTransform(0,0,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443.9,316.1);


(lib.lux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片1();
	this.instance.setTransform(0,0,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250.5,223.3);


(lib.gen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片2();
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.2,223.3);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.qwer();
	this.instance.setTransform(0,0,0.798,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtbFOIAAqcIa2AAIAAKcg");
	this.shape.setTransform(86,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,67);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖57();
	this.instance.setTransform(5.8,132.7,0.741,0.741);

	this.instance_1 = new lib.點陣圖56();
	this.instance_1.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,211.2);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖55();
	this.instance.setTransform(0.1,122.6,0.741,0.74);

	this.instance_1 = new lib.點陣圖54();
	this.instance_1.setTransform(0,0,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.4,201.1);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.細緻();
	this.instance.setTransform(0,0,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,98.3);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.洞察();
	this.instance.setTransform(0,0,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,98.3);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖39複製();
	this.instance.setTransform(0,0,0.787,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.5,15.8);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37複製();
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.9,135.2);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖36();
	this.instance.setTransform(0,0,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,617.3,76);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖44();
	this.instance.setTransform(0,0,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,787.2,78.7);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖41();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,102);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖38();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖28();
	this.instance.setTransform(0,0,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340.1,78.2);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖27();
	this.instance.setTransform(0,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,72.3);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖24();
	this.instance.setTransform(0,0,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,58.6);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片5();
	this.instance.setTransform(0,0,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.3,58.6);


(lib._4setting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.齒輪();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._3now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._1main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib.nissannext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17,x:-17.2,y:-4.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:6.9,y:1.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.nissan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.idkwhattoname();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


(lib.nissanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2321();
	this.instance.setTransform(66.9,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.9,54.4,1177,182);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫31("synched",0);
	this.instance.setTransform(25.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫26("synched",0);
	this.instance.setTransform(73.3,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,146.6);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫30("synched",0);
	this.instance.setTransform(25.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.4},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖53();
	this.instance.setTransform(0,117.6,0.741,0.741);

	this.instance_1 = new lib.元件22();
	this.instance_1.setTransform(62.1,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.3,196.1);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖52();
	this.instance.setTransform(0,125.1,0.741,0.741);

	this.instance_1 = new lib.元件21();
	this.instance_1.setTransform(61.3,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.3,203.6);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 12
	this.instance = new lib.元件32();
	this.instance.setTransform(686.4,112,1,1,0,0,0,62.5,105.6);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({alpha:1},15).wait(577));

	// 圖層 11
	this.instance_1 = new lib.元件31();
	this.instance_1.setTransform(467.7,114.6,1,1,0,0,0,59.6,100.6);
	this.instance_1.alpha = 0.148;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({alpha:1},14).wait(589));

	// 圖層 10
	this.instance_2 = new lib.元件30();
	this.instance_2.setTransform(234.6,117,1,1,0,0,0,59.6,98);
	this.instance_2.alpha = 0.172;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({alpha:1},15).wait(600));

	// 圖層 9
	this.instance_3 = new lib.元件29();
	this.instance_3.setTransform(9.4,115.8,1,1,0,0,0,59.6,101.8);
	this.instance_3.alpha = 0.172;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({alpha:1},15).wait(612));

	// 圖層 7
	this.instance_4 = new lib.元件19();
	this.instance_4.setTransform(718.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_4.alpha = 0.27;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:690.8,alpha:1},6).wait(627));

	// 圖層 6
	this.instance_5 = new lib.元件20();
	this.instance_5.setTransform(605.7,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_5.alpha = 0.27;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:578.2,alpha:1},8).wait(632));

	// 圖層 5
	this.instance_6 = new lib.元件19();
	this.instance_6.setTransform(490.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_6.alpha = 0.27;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:463.3,alpha:1},7).wait(640));

	// 圖層 4
	this.instance_7 = new lib.元件20();
	this.instance_7.setTransform(378.2,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_7.alpha = 0.172;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({x:350.7,alpha:1},7).wait(646).to({x:388.2},0).wait(1));

	// 圖層 3
	this.instance_8 = new lib.元件19();
	this.instance_8.setTransform(263.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_8.alpha = 0.148;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:235.8,alpha:1},7).wait(653).to({x:273.3},0).wait(1));

	// 圖層 2
	this.instance_9 = new lib.元件20();
	this.instance_9.setTransform(151.8,67.9,1,1,0,0,0,50.8,7.9);
	this.instance_9.alpha = 0.148;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({x:124.3,alpha:1},8).wait(660).to({x:161.8},0).wait(1));

	// 圖層 1
	this.instance_10 = new lib.元件19();
	this.instance_10.setTransform(36.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_10.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:9.3,alpha:1},7).wait(667).to({x:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-1.2,138.6,137.9);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件15();
	this.instance.setTransform(47,51,1,1,0,0,0,47,51);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).to({alpha:0},15).to({alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,102);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件12();
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件13();
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.98},10).to({alpha:0},30).to({alpha:1},16).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件10();
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.129},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件8();
	this.instance.setTransform(46.5,51.5,1,1,0,0,0,46.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},47).to({alpha:1},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


// stage content:



(lib._1204檔案 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.ss.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(1255);
		}
	}
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(226);
		}
	}
	this.frame_1233 = function() {
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
		
		this.next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
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
		
		
		this.sp4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(1257);
		}
	}
	this.frame_1256 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gp.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(1259);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(1256);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(224).call(this.frame_224).wait(1009).call(this.frame_1233).wait(22).call(this.frame_1255).wait(1).call(this.frame_1256).wait(1185));

	// 圖層 1
	this.ss = new lib.元件36();
	this.ss.setTransform(321,322.5,1,1,0,0,0,86,33.5);
	new cjs.ButtonHelper(this.ss, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ss).wait(114).to({_off:true},1).wait(2326));

	// 常駐
	this.setting = new lib._4setting();
	this.setting.setTransform(1259.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.setting, 0, 1, 1);

	this.local = new lib._3now();
	this.local.setTransform(1170.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.local, 0, 1, 1);

	this.hint = new lib._2hint();
	this.hint.setTransform(1081.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.hint, 0, 1, 1);

	this.home = new lib._1main();
	this.home.setTransform(992.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},2440).wait(1));

	// 內容
	this.instance = new lib._12420091Rpng複製();
	this.instance.setTransform(659.6,167.2,0.872,0.872);

	this.instance_1 = new lib._12420091Lpng複製();
	this.instance_1.setTransform(106.6,157.2,0.922,0.922);

	this.instance_2 = new lib._12420101R();
	this.instance_2.setTransform(659.1,173.9,0.866,0.866);

	this.instance_3 = new lib._12420092L();
	this.instance_3.setTransform(123.1,171.4,0.856,0.856);

	this.instance_4 = new lib._12420111R();
	this.instance_4.setTransform(654.3,166.7,0.916,0.916);

	this.instance_5 = new lib._12420111L();
	this.instance_5.setTransform(100.6,148.3,0.95,0.95);

	this.instance_6 = new lib._12420112R();
	this.instance_6.setTransform(661.9,172.1,0.895,0.895);

	this.instance_7 = new lib._12420112L();
	this.instance_7.setTransform(111,162.1,0.9,0.9);

	this.instance_8 = new lib._12420121R();
	this.instance_8.setTransform(662.2,169.9,0.875,0.875);

	this.instance_9 = new lib._12420121L();
	this.instance_9.setTransform(115,169.9,0.903,0.903);

	this.instance_10 = new lib._12420131R();
	this.instance_10.setTransform(649.4,162.9,0.883,0.883);

	this.instance_11 = new lib._12420131L();
	this.instance_11.setTransform(122.3,165.5,0.878,0.878);

	this.instance_12 = new lib._12420132R();
	this.instance_12.setTransform(638.6,145.6,0.942,0.942);

	this.instance_13 = new lib._12420132L();
	this.instance_13.setTransform(113.6,151.6,0.92,0.92);

	this.instance_14 = new lib._12420141R();
	this.instance_14.setTransform(636.1,151,0.929,0.929);

	this.instance_15 = new lib._12420141L();
	this.instance_15.setTransform(128.4,151,0.908,0.908);

	this.instance_16 = new lib._12420142L();
	this.instance_16.setTransform(136.5,180.9,0.858,0.858);

	this.instance_17 = new lib._12420151R();
	this.instance_17.setTransform(670,183,0.854,0.854);

	this.instance_18 = new lib._12420151L();
	this.instance_18.setTransform(107.1,143.9,0.925,0.925);

	this.instance_19 = new lib._12420161R();
	this.instance_19.setTransform(645.6,147.1,0.896,0.896);

	this.instance_20 = new lib._12420161L();
	this.instance_20.setTransform(118.5,169.3,0.879,0.879);

	this.btl = new lib.元件35();
	this.btl.setTransform(44.6,402.5,1,1,0,0,180,25.9,118.5);
	new cjs.ButtonHelper(this.btl, 0, 1, 2, false, new lib.元件35(), 3);

	this.instance_21 = new lib._124buttonback();
	this.instance_21.setTransform(952.1,430.4,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1256).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_5},{t:this.instance_4}]},2).to({state:[{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8}]},2).to({state:[{t:this.instance_11},{t:this.instance_10}]},2).to({state:[{t:this.instance_13},{t:this.instance_12}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_18},{t:this.instance_17}]},2).to({state:[{t:this.instance_20},{t:this.instance_19}]},2).to({state:[{t:this.instance_21},{t:this.btl}]},2).to({state:[]},3).wait(1160));

	// 左右漸
	this.bt = new lib.元件37();
	this.bt.setTransform(45.7,424.5,1,1,0,0,180,25.9,118.5);
	new cjs.ButtonHelper(this.bt, 0, 1, 1);

	this.gp = new lib.元件37();
	this.gp.setTransform(1263.4,424.5,1,1,0,0,0,25.9,118.5);
	new cjs.ButtonHelper(this.gp, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gp},{t:this.bt}]},1256).to({state:[]},2).wait(1183));

	// 又見
	this.sp4 = new lib.元件33();
	this.sp4.setTransform(1237.5,306);
	this.sp4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sp4).wait(1255).to({_off:false},0).to({_off:true},1).wait(1185));

	// 往事紀錄
	this.instance_22 = new lib._1241top1R();
	this.instance_22.setTransform(658.9,186.6,0.883,0.883);

	this.instance_23 = new lib._1241top1L();
	this.instance_23.setTransform(106.8,175.2,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.instance_22}]},1255).to({state:[]},1).wait(1185));

	// 下一頁
	this.next = new lib.元件34();
	this.next.setTransform(1219.3,651.3,1,1,0,0,0,73.3,73.3);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.instance_24 = new lib.下一頁Button3();
	this.instance_24.setTransform(1151,576,0.366,0.366);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.198,0,0,0.198,-113.9,-56.9)).s().p("AxyI5IAAxxMAjkAAAIAARxg");
	this.shape.setTransform(1176.9,644.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.265,0,0,0.265,-152.2,-76)).s().p("A3wL4IAA3vMAvhAAAIAAXvg");
	this.shape_1.setTransform(1133.4,624.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.332,0,0,0.332,-190.4,-95.1)).s().p("A9vO3IAA9tMA7fAAAIAAdtg");
	this.shape_2.setTransform(1089.9,605.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.398,0,0,0.398,-228.7,-114.3)).s().p("EgjuAR2MAAAgjrMBHdAAAMAAAAjrg");
	this.shape_3.setTransform(1046.4,586.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.465,0,0,0.465,-267,-133.4)).s().p("EgptAU1MAAAgppMBTaAAAMAAAAppg");
	this.shape_4.setTransform(1002.9,567.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.531,0,0,0.531,-305.2,-152.5)).s().p("EgvrAX0MAAAgvoMBfXAAAMAAAAvog");
	this.shape_5.setTransform(959.4,547.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.598,0,0,0.598,-343.5,-171.6)).s().p("Eg1qAa0MAAAg1nMBrVAAAMAAAA1ng");
	this.shape_6.setTransform(915.9,528.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.665,0,0,0.665,-381.8,-190.7)).s().p("Eg7pAdzMAAAg7lMB3TAAAMAAAA7lg");
	this.shape_7.setTransform(872.3,509.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.731,0,0,0.731,-420.1,-209.9)).s().p("EhBnAgyMAAAhBjMCDPAAAMAAABBjg");
	this.shape_8.setTransform(828.8,490.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.798,0,0,0.798,-458.3,-229)).s().p("EhHmAjxMAAAhHhMCPNAAAMAAABHhg");
	this.shape_9.setTransform(785.3,470.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.864,0,0,0.864,-496.6,-248.1)).s().p("EhNlAmxMAAAhNhMCbLAAAMAAABNhg");
	this.shape_10.setTransform(741.8,451.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.931,0,0,0.931,-534.9,-267.2)).s().p("EhTjApwMAAAhTfMCnHAAAMAAABTfg");
	this.shape_11.setTransform(698.3,432.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],36), null, new cjs.Matrix2D(0.998,0,0,0.998,-573.2,-286.3)).s().p("EhZiAsvMAAAhZdMCzFAAAMAAABZdg");
	this.shape_12.setTransform(654.8,413.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.next}]},1227).to({state:[{t:this.instance_24}]},7).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(1186));

	// 飛出來
	this.instance_25 = new lib.元件18();
	this.instance_25.setTransform(334,375.6,1,1,0,0,0,68,67.6);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(984).to({_off:false},0).wait(228).to({_off:true},1).wait(1228));

	// 閃亮
	this.instance_26 = new lib.元件14();
	this.instance_26.setTransform(905.1,263.9,1,1,0,0,0,47,51);

	this.instance_27 = new lib.元件11();
	this.instance_27.setTransform(824.6,314.9,1,1,0,0,0,33.5,37);

	this.instance_28 = new lib.元件9();
	this.instance_28.setTransform(362.8,541.7,1,1,0,0,0,33.5,37);

	this.instance_29 = new lib.元件7();
	this.instance_29.setTransform(303.3,486,1,1,0,0,0,46.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},817).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},109).to({state:[]},1).wait(1514));

	// 車
	this.instance_30 = new lib.補間動畫24("synched",0);
	this.instance_30.setTransform(323.8,389.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(805).to({_off:false},0).to({x:615.2},8).wait(113).to({startPosition:0},0).to({x:556.9},5).to({x:1503.1},7).to({_off:true},1).wait(1502));

	// 創新
	this.instance_31 = new lib.元件2();
	this.instance_31.setTransform(836.6,545.2,1,1,0,0,0,72,29.3);
	this.instance_31.alpha = 0.379;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(528).to({_off:false},0).to({alpha:1},15).wait(45).to({alpha:0},16).to({_off:true},1).wait(1836));

	// 細緻
	this.instance_32 = new lib.元件1();
	this.instance_32.setTransform(383.3,545.2,1,1,0,0,0,85.1,29.3);
	this.instance_32.alpha = 0.379;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(492).to({_off:false},0).to({alpha:1},16).wait(80).to({alpha:0},16).to({_off:true},1).wait(1836));

	// 字幕
	this.instance_33 = new lib.圖片3();
	this.instance_33.setTransform(188.8,560.8,0.624,0.624);

	this.instance_34 = new lib.sub();
	this.instance_34.setTransform(624.2,594.2,1,1,0,0,0,435.4,33.4);
	this.instance_34.alpha = 0.238;
	this.instance_34._off = true;

	this.instance_35 = new lib.元件3();
	this.instance_35.setTransform(619.3,593.4,1,1,0,0,0,475,36.1);
	this.instance_35.alpha = 0.43;
	this.instance_35._off = true;

	this.instance_36 = new lib.元件4();
	this.instance_36.setTransform(632.6,588.4,1,1,0,0,0,170.1,39.1);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.instance_37 = new lib.點陣圖44();
	this.instance_37.setTransform(223.1,552.2,0.742,0.742);

	this.instance_38 = new lib.元件16();
	this.instance_38.setTransform(616.7,591.5,1,1,0,0,0,393.6,39.3);
	this.instance_38._off = true;

	this.instance_39 = new lib.元件17();
	this.instance_39.setTransform(611.7,584,1,1,0,0,0,308.7,38);
	this.instance_39.alpha = 0.148;
	this.instance_39._off = true;

	this.instance_40 = new lib.點陣圖46();
	this.instance_40.setTransform(284,541,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},344).to({state:[{t:this.instance_34}]},118).to({state:[{t:this.instance_34}]},7).to({state:[{t:this.instance_35}]},225).to({state:[{t:this.instance_35}]},6).to({state:[{t:this.instance_36}]},62).to({state:[{t:this.instance_36}]},20).to({state:[]},29).to({state:[{t:this.instance_37}]},6).to({state:[{t:this.instance_38}]},129).to({state:[{t:this.instance_38}]},11).to({state:[{t:this.instance_39}]},9).to({state:[{t:this.instance_39}]},8).to({state:[{t:this.instance_40}]},97).to({state:[{t:this.instance_40}]},141).to({state:[]},1).wait(1228));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(462).to({_off:false},0).to({alpha:1},7).to({_off:true},225).wait(1747));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(694).to({_off:false},0).to({alpha:1},6).to({_off:true},62).wait(1679));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(762).to({_off:false},0).to({alpha:1},20).to({_off:true},29).wait(1630));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(946).to({_off:false},0).to({alpha:0},11).to({_off:true},9).wait(1475));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(966).to({_off:false},0).to({alpha:1},8).to({_off:true},97).wait(1370));

	// gen
	this.instance_41 = new lib.gen();
	this.instance_41.setTransform(833.7,404.3,1,1,0,0,0,127.6,111.7);
	this.instance_41.alpha = 0.238;
	this.instance_41._off = true;

	this.text = new cjs.Text("Genius", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.setTransform(831.3,360.9,0.977,0.977);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARqAAQAAHUlLFLQlLFLnUAAQnTAAlLlLQlLlLAAnUQAAnTFLlLQFLlLHTAAQHUAAFLFLQFLFLAAHTg");
	this.shape_13.setTransform(831.4,402.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D69B").s().p("AsIMJQlDlCAAnHQAAnGFDlDQFClBHGAAQHIAAFCFBQFCFDgBHGQAAHHlBFCQlCFCnIAAQnGAAlClCg");
	this.shape_14.setTransform(831.4,402.7);

	this.instance_42 = new lib.補間動畫20("synched",0);
	this.instance_42.setTransform(833.3,402.7);
	this.instance_42._off = true;

	this.instance_43 = new lib.補間動畫21("synched",0);
	this.instance_43.setTransform(724.7,404.2);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_41}]},392).to({state:[{t:this.instance_41}]},24).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Genius"}}]},232).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Geniu"}}]},3).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Geni"}}]},4).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{text:"Gen"}}]},5).to({state:[{t:this.instance_42}]},9).to({state:[{t:this.instance_43}]},23).to({state:[{t:this.instance_43}]},9).to({state:[{t:this.instance_43}]},20).to({state:[{t:this.instance_43}]},41).to({state:[{t:this.instance_43}]},37).wait(1642));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(392).to({_off:false},0).to({alpha:1},24).to({_off:true},232).wait(1793));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(669).to({_off:false},0).to({_off:true,x:724.7,y:404.2,alpha:0},23).wait(1749));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(669).to({_off:false},23).wait(9).to({alpha:0.16},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).wait(1642));

	// lux
	this.instance_44 = new lib.luxgen1_1();
	this.instance_44.setTransform(611.7,394.8,1,1,0,0,0,222,158);
	this.instance_44.alpha = 0.289;
	this.instance_44._off = true;

	this.instance_45 = new lib.luxgen2();
	this.instance_45.setTransform(614.6,596.1,1,1,0,0,0,424.9,43.3);

	this.instance_46 = new lib.lux();
	this.instance_46.setTransform(387,405.9,1,1,0,0,0,125.3,111.7);
	this.instance_46.alpha = 0.238;
	this.instance_46._off = true;

	this.text_1 = new cjs.Text("Luxury", "64px 'Calibri'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 80;
	this.text_1.lineWidth = 247;
	this.text_1.setTransform(385.9,364.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8EB4E3").s().p("AsYMZQlJlJAAnQQAAnPFJlJQFJlJHPAAQAbAAAbACQGuARE1E2QFJFJAAHPQAAHQlJFJQk1E2muASIg2ABQnPAAlJlJg");
	this.shape_15.setTransform(386.2,403.3);

	this.instance_47 = new lib.補間動畫18("synched",0);
	this.instance_47.setTransform(387.9,428.9);
	this.instance_47._off = true;

	this.instance_48 = new lib.補間動畫19("synched",0);
	this.instance_48.setTransform(557.9,427.4);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_44}]},252).to({state:[{t:this.instance_44}]},14).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:1}}]},9).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.512}}]},46).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.32}}]},4).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.148}}]},3).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0.109}}]},3).to({state:[{t:this.instance_44},{t:this.instance_45,p:{alpha:0}}]},4).to({state:[]},2).to({state:[{t:this.instance_46}]},23).to({state:[{t:this.instance_46}]},21).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxury"}}]},249).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxur"}}]},3).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Luxu"}}]},4).to({state:[{t:this.shape_15},{t:this.text_1,p:{text:"Lux"}}]},4).to({state:[{t:this.instance_47}]},28).to({state:[{t:this.instance_48}]},23).to({state:[{t:this.instance_48}]},9).to({state:[{t:this.instance_48}]},20).to({state:[{t:this.instance_48}]},41).to({state:[{t:this.instance_48}]},37).to({state:[]},1610).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(252).to({_off:false},0).to({alpha:1},14).wait(55).to({alpha:0.512},0).wait(4).to({alpha:0.32},0).wait(3).to({alpha:0.148},0).wait(3).to({alpha:0.109},0).wait(4).to({alpha:0},0).to({_off:true},2).wait(2104));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(360).to({_off:false},0).to({alpha:1},21).to({_off:true},249).wait(1811));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(669).to({_off:false},0).to({_off:true,x:557.9,y:427.4,alpha:0},23).wait(1749));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(669).to({_off:false},23).wait(9).to({alpha:0.121},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).to({_off:true},1610).wait(32));

	// 開
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgAmMCSBAAAIAABNMiSBAAAg");
	this.shape_16.setTransform(612.9,390.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EhJAAAnIAAhNMCSBAAAIAABNg");
	this.shape_17.setTransform(612.9,390.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgDJMCSBAAAIAAGTMiSBAAAg");
	this.shape_18.setTransform(612.9,391);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EhJAADKIAAmTMCSBAAAIAAGTg");
	this.shape_19.setTransform(612.9,391);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgFsMCSBAAAIAALZMiSBAAAg");
	this.shape_20.setTransform(612.9,391.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EhJAAFtIAArZMCSBAAAIAALZg");
	this.shape_21.setTransform(612.9,391.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgIPMCSBAAAIAAQfMiSBAAAg");
	this.shape_22.setTransform(612.9,391.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EhJAAIQIAAwfMCSBAAAIAAQfg");
	this.shape_23.setTransform(612.9,391.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgKyMCSBAAAIAAVlMiSBAAAg");
	this.shape_24.setTransform(612.9,392.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EhJAAKzIAA1lMCSBAAAIAAVlg");
	this.shape_25.setTransform(612.9,392.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgNVMCSBAAAIAAarMiSBAAAg");
	this.shape_26.setTransform(612.9,392.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EhJAANWIAA6rMCSBAAAIAAarg");
	this.shape_27.setTransform(612.9,392.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgP7MCSBAAAIAAf3MiSBAAAg");
	this.shape_28.setTransform(612.9,392.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EhJAAP8IAA/3MCSBAAAIAAf3g");
	this.shape_29.setTransform(612.9,392.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgSgMCSBAAAMAAAAlBMiSBAAAg");
	this.shape_30.setTransform(612.9,392.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EhJAAShMAAAglBMCSBAAAMAAAAlBg");
	this.shape_31.setTransform(612.9,392.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgVFMCSBAAAMAAAAqLMiSBAAAg");
	this.shape_32.setTransform(612.9,392.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EhJAAVGMAAAgqMMCSBAAAMAAAAqMg");
	this.shape_33.setTransform(612.9,392.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgXrMCSBAAAMAAAAvWMiSBAAAg");
	this.shape_34.setTransform(612.9,392.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EhJAAXsMAAAgvWMCSBAAAMAAAAvWg");
	this.shape_35.setTransform(612.9,392.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgaQMCSBAAAMAAAA0hMiSBAAAg");
	this.shape_36.setTransform(612.9,392.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("EhJAAaRMAAAg0hMCSBAAAMAAAA0hg");
	this.shape_37.setTransform(612.9,392.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgc2MCSBAAAMAAAA5tMiSBAAAg");
	this.shape_38.setTransform(612.9,392.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EhJAAc3MAAAg5tMCSBAAAMAAAA5tg");
	this.shape_39.setTransform(612.9,392.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgfbMCSBAAAMAAAA+3MiSBAAAg");
	this.shape_40.setTransform(612.9,392.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EhJAAfcMAAAg+3MCSBAAAMAAAA+3g");
	this.shape_41.setTransform(612.9,392.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgf3MCSBAAAMAAAA/vMiSBAAAg");
	this.shape_42.setTransform(612.9,392.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EhJAAf4MAAAg/vMCSBAAAMAAAA/vg");
	this.shape_43.setTransform(612.9,392.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAggUMCSBAAAMAAABApMiSBAAAg");
	this.shape_44.setTransform(612.9,392.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EhJAAgUMAAAhAoMCSBAAAMAAABAog");
	this.shape_45.setTransform(612.9,392.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAggwMCSBAAAMAAABBhMiSBAAAg");
	this.shape_46.setTransform(612.9,392.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EhJAAgxMAAAhBhMCSBAAAMAAABBhg");
	this.shape_47.setTransform(612.9,392.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAghMMCSBAAAMAAABCZMiSBAAAg");
	this.shape_48.setTransform(612.9,392.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EhJAAhNMAAAhCZMCSBAAAMAAABCZg");
	this.shape_49.setTransform(612.9,392.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAghoMCSBAAAMAAABDRMiSBAAAg");
	this.shape_50.setTransform(612.9,392.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EhJAAhpMAAAhDRMCSBAAAMAAABDRg");
	this.shape_51.setTransform(612.9,392.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgiEMCSBAAAMAAABEJMiSBAAAg");
	this.shape_52.setTransform(612.9,392.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("EhJAAiFMAAAhEJMCSBAAAMAAABEJg");
	this.shape_53.setTransform(612.9,392.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgihMCSBAAAMAAABFDMiSBAAAg");
	this.shape_54.setTransform(612.9,392.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("EhJAAiiMAAAhFCMCSBAAAMAAABFCg");
	this.shape_55.setTransform(612.9,392.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgi9MCSBAAAMAAABF7MiSBAAAg");
	this.shape_56.setTransform(612.9,392.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EhJAAi+MAAAhF7MCSBAAAMAAABF7g");
	this.shape_57.setTransform(612.9,392.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgjZMCSBAAAMAAABGzMiSBAAAg");
	this.shape_58.setTransform(612.9,392.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("EhJAAjaMAAAhGzMCSBAAAMAAABGzg");
	this.shape_59.setTransform(612.9,392.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhJAgj1MCSBAAAMAAABHrMiSBAAAg");
	this.shape_60.setTransform(612.9,392.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EhJAAj2MAAAhHrMCSBAAAMAAABHrg");
	this.shape_61.setTransform(612.9,392.7);

	this.instance_49 = new lib.補間動畫19("synched",0);
	this.instance_49.setTransform(557.9,427.4);
	this.instance_49.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},229).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.instance_49}]},961).to({state:[]},1207).wait(22));

	// 小動畫
	this.instance_50 = new lib.tv();
	this.instance_50.setTransform(613.7,436.8,1,1,0,0,0,480.4,320.3);
	this.instance_50.alpha = 0.48;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(225).to({_off:false},0).to({alpha:1},3).to({_off:true},1006).wait(1207));

	// 小動畫bg
	this.instance_51 = new lib.U12背景();
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(225).to({_off:false},0).wait(2216));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.setTransform(1206.5,705,1,1,0,0,0,100,25.5);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(222).to({_off:false},0).wait(2).to({_off:true},1).wait(2216));

	// 裕隆前話
	this.nissanword = new lib.nissanword();
	this.nissanword.setTransform(657.7,642.1,1,1,0,0,0,650,150);
	this.nissanword.alpha = 0.5;
	this.nissanword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissanword).wait(9).to({_off:false},0).to({alpha:1},34).wait(70).to({_off:true},1).wait(2327));

	// 裕隆前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.setTransform(657.7,370.3,1,1,0,0,0,657,370);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(114).to({_off:false},0).to({alpha:1},20).wait(90).to({_off:true},1).wait(2216));

	// 裕隆前
	this.nissan1 = new lib.nissan1();
	this.nissan1.setTransform(657.7,370.3,1,1,0,0,0,657,370);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(90).to({_off:true},1).wait(2327));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(657.7,370.3,1314,740);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;