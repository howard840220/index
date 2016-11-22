(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1314,
	height: 740,
	fps: 8,
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



(lib._10nissan = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._111L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.U114animatebutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件國 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件蔣公 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件木樁 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件木槌 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件機 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件時間 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件救 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件發 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件動 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件工程帽 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件工程帽png複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件旗幟 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.U115animatebutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件地標 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件地標工廠 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件時間 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件hand = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件man = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件man2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件man2png複製 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件台灣 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.U116animatebutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.U117animatebutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.U118animatebutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1953 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1981 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.U118animatebutton();
	this.instance.setTransform(6.3,168.7,0.583,0.583);

	this.instance_1 = new lib.U117animatebutton();
	this.instance_1.setTransform(6.5,276.7,0.582,0.582);

	this.instance_2 = new lib.U116animatebutton();
	this.instance_2.setTransform(3.1,385.4,0.594,0.594);

	this.instance_3 = new lib.U115animatebutton();
	this.instance_3.setTransform(0.3,489.6,0.604,0.604);

	this.instance_4 = new lib.U114animatebutton();
	this.instance_4.setTransform(-5.3,596.3,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-5.3}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4,p:{x:-5.3}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},28).to({state:[{t:this.instance_4,p:{x:-6.8}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},618).to({state:[{t:this.instance_4,p:{x:-6.8}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},592).wait(1));

	// bg
	this.instance_5 = new lib.U114動畫物件國();
	this.instance_5.setTransform(999.2,480.9,0.306,0.306);

	this.instance_6 = new lib.U114動畫物件救();
	this.instance_6.setTransform(992.8,276.7,0.3,0.3);

	this.instance_7 = new lib.U114動畫物件機();
	this.instance_7.setTransform(320.6,480.9,0.318,0.318);

	this.instance_8 = new lib.U114動畫物件動();
	this.instance_8.setTransform(314.4,301.1,0.331,0.331);

	this.instance_9 = new lib.U114動畫物件發();
	this.instance_9.setTransform(314.4,123.1,0.356,0.356);

	this.instance_10 = new lib.U114動畫物件蔣公();
	this.instance_10.setTransform(467.6,205.7);

	this.instance_11 = new lib.U114動畫物件時間();
	this.instance_11.setTransform(541.1,0,0.687,0.687);

	this.instance_12 = new lib.U11YuLongBG1953();

	this.instance_13 = new lib.U114動畫物件工程帽();
	this.instance_13.setTransform(870.8,132.2,0.256,0.256);

	this.instance_14 = new lib._10nissan();
	this.instance_14.setTransform(253.4,159.1);

	this.instance_15 = new lib._111L();
	this.instance_15.setTransform(720.8,151.7);

	this.instance_16 = new lib.U114動畫物件旗幟();
	this.instance_16.setTransform(619.2,-42.9,0.594,0.594);

	this.instance_17 = new lib.U114動畫物件車車3();
	this.instance_17.setTransform(426.9,379.1);

	this.instance_18 = new lib.U114動畫物件車車2();
	this.instance_18.setTransform(426.9,216.7);

	this.instance_19 = new lib.U114動畫物件車車1();
	this.instance_19.setTransform(426.9,47.8);

	this.instance_20 = new lib.U114動畫物件木槌();
	this.instance_20.setTransform(768.2,337.5,0.556,0.556,-37.2);

	this.instance_21 = new lib.U114動畫物件木槌();
	this.instance_21.setTransform(484.6,165.8,0.556,0.556,45);

	this.instance_22 = new lib.U114動畫物件木樁();
	this.instance_22.setTransform(534.8,399.6,0.775,0.775);

	this.instance_23 = new lib.U115動畫物件地標();
	this.instance_23.setTransform(687.2,208.8,0.318,0.318);

	this.instance_24 = new lib.U115動畫物件地標();
	this.instance_24.setTransform(548.1,377.7,0.318,0.318);

	this.instance_25 = new lib.U115動畫物件台灣();
	this.instance_25.setTransform(476.2,168.7);

	this.instance_26 = new lib.U115動畫物件時間();
	this.instance_26.setTransform(500.4,0,0.825,0.825);

	this.instance_27 = new lib.U11YuLongBG1981();

	this.instance_28 = new lib.U115動畫物件hand();
	this.instance_28.setTransform(476.2,263.6);

	this.instance_29 = new lib.U115動畫物件man2();
	this.instance_29.setTransform(240.1,159.1);

	this.instance_30 = new lib.U115動畫物件man();
	this.instance_30.setTransform(882.6,151);

	this.instance_31 = new lib.U115動畫物件地標工廠();
	this.instance_31.setTransform(585.6,179.1);

	this.instance_32 = new lib.U114動畫物件工程帽png複製();
	this.instance_32.setTransform(588.7,74.5,0.45,0.45);

	this.instance_33 = new lib.U114動畫物件工程帽png複製();
	this.instance_33.setTransform(779.6,68.3,0.45,0.45);

	this.instance_34 = new lib.U114動畫物件工程帽png複製();
	this.instance_34.setTransform(1004.5,82.2,0.45,0.45);

	this.instance_35 = new lib.U114動畫物件工程帽png複製();
	this.instance_35.setTransform(299.5,92.2,0.45,0.45);

	this.instance_36 = new lib.U115動畫物件man2png複製();
	this.instance_36.setTransform(451.1,186.9);

	this.instance_37 = new lib.U115動畫物件man2png複製();
	this.instance_37.setTransform(892.1,180.7);

	this.instance_38 = new lib.U115動畫物件man2png複製();
	this.instance_38.setTransform(669.8,168.7);

	this.instance_39 = new lib.U115動畫物件man2png複製();
	this.instance_39.setTransform(169.8,180.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_12},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},48).to({state:[{t:this.instance_12},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},23).to({state:[{t:this.instance_12},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},23).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]},16).to({state:[{t:this.instance_27},{t:this.instance_28}]},21).to({state:[{t:this.instance_27},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]},30).to({state:[{t:this.instance_27},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]},30).to({state:[{t:this.instance_27}]},25).to({state:[{t:this.instance_27}]},17).to({state:[{t:this.instance_12},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},1005).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(651.7,370,1319.3,740);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;