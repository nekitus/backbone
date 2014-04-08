// 1 --------------------
var result	= 100500 + value;
console.log(result);

// 2 --------------------
var result	= 'hello, ' + value;
var value	= 11;
console.log(result);

// 3 --------------------
var fns	   = [];
for (var i = 0; i < 10; i++){
	fns.push(function(){return i+10});
};
console.log(fns[1]());

// 4 --------------------
var i	= 10;

function func(){
	for (var i = 5; i > 0; i--){
		console.log(i)
	}
}
func();
console.log(i)

// 5 --------------------
var POINT		= function(){};
POINT.prototype	= {
	x	    : 0,
	y	    : 0,
	bounds	: {x: 0, y: 0},
	setX	: function(newX){
		this.x	= newX < this.bounds.x ? newX : this.x;
	},
	setY	: function(newY){
		this.y	= newY < this.bounds.y ? newY : this.y;
	}
}

var p1	    = new POINT();
p1.bounds.x	= 500;
p1.bounds.y	= 500;

var p2	    = new POINT();
p2.bounds.x	= 1000;
p2.bounds.y	= 1000;

p1.setX(450);
p1.setY(600);

p2.setX(1100);
p2.setY(900);

console.log(p1.x, p1.y, p2.x, p2.y);
