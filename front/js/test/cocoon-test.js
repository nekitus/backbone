function drawRect() {
//	var context = canvas.getContext('2d');

	context.save()
	context.fillStyle = 'red'
	context.fillRect(100, 100, 228, 228)

	context.restore()
}

function drawBack() {
//	var context = canvas.getContext('2d');

	context.save()
	context.translate(xx, yy)
	context.drawImage(IMAGES['img/map/bg/map.jpg'], 0, 0, 3800, 2400)
	context.restore()
}

function drawSmall() {

	SMALL.forEach(function(small) {
//		var context = canvas.getContext('2d');
		context.drawImage(IMAGES['img/map/bg/qwe.gif'], 0, 0, 60, 60, small.x, small.y, 60, 60)
	})
}

function drawText() {
//	var context = canvas.getContext('2d');

	TEXTS.forEach(function(text) {
		context.save()
		context.fillStyle = 'red'
		context.fillText('hello!', text.x, text.y)
		context.restore()
	})
}

	xx = 0,
	yy = 0,
	xstart = 0,
	ystart = 0,
	dragging = false;

function drawAll() {
	for (var i = 0; i < 1; i++) {
		drawBack()
	}
//	for (var i = 0; i < 300; i++) {
//		drawRect()
//	}

//	xx += 1;

	drawSmall()
//	drawText()

	FRAF(drawAll)
}

function initSmall() {
	for (var i = 0; i < 300; i++) {
		TEXTS.push({
			x: Math.random() * 3800,
			y: Math.random() * 2400
		})
	}
	for (var i = 0; i < 3000; i++) {
		SMALL.push({
			x: Math.random() * 3800,
			y: Math.random() * 2400
		})
	}
}

function FRAF(callback) {
	window.setTimeout(callback, 1000 / 60);
}

function START() {
	canvas = document.createElement(navigator.isCocoonJS? 'screencanvas' : 'canvas');
	context = canvas.getContext('2d')
	document.getElementsByTagName('body')[0].appendChild(canvas)
	canvas.style.padding = 0;
	canvas.style.margin = 0;
	canvas.style.border = 0;
	canvas.style.background = 'transparent';
	canvas.style.position = 'absolute';
	canvas.style.top = 0;
	canvas.style.left = 0;
//	canvas.width = 1024
//	canvas.height = 768
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	canvas.style.width = canvas.width + 'px'
	canvas.style.height = canvas.height + 'px'

	initSmall()
	FRAF(drawAll)

//	var t = new Date().getTime()
//	var context = canvas.getContext('2d')
//	context.getImageData(100, 100, 400, 400)
//	console.log(new Date().getTime() - t)
}

//setTimeout(START, 100)

SMALL = []
TEXTS = []
IMAGES = {}
keys = ['img/map/bg/map.jpg', 'img/map/bg/qwe.gif']
counter = 0;

keys.forEach(function(path) {
	IMAGES[path] = new Image()
	IMAGES[path].onload = function() {
		counter++;
		if (counter == keys.length) {
			setTimeout(START, 100)
		}
	}
	IMAGES[path].src = path;
})
