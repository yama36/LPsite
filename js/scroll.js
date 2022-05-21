var ScrollrevealFade = {
	origin: 'bottom',
	distance: '50px',//移動範囲
	scale: .8,//拡大表示（１で横スクロールが始まる）
	duration: 1200, //アニメーションの速度
	delay :200 //要素が表示するまでの待機時間（ディレイ）
};

ScrollReveal().reveal('.scrollTrigger', ScrollrevealFade, 100);
