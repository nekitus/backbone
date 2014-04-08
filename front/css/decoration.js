bg.ui.decoration				= {};

bg.ui.decoration.window_big		= bg.ui.image.extend({
	initialize: function(cfg){
		var self		= this;

		self.setImage(this.source);
//		var image		= new Image();
//		image.onload	= function(){
//			self.setImage(image);
//		};
//
//		image.src		= this.source;
	},
	source		: '/img/ui/window/bg_window_big.png'
});

bg.ui.decoration.window_big		= bg.ui.image.extend({
	initialize: function(cfg){
		var self		= this;

		self.setImage(this.source);
//		var image		= new Image();
//		image.onload	= function(){
//			self.setImage(image);
//		};
//
//		image.src		= this.source;
	},
	source		: '/img/ui/window/bg_window_big.png'
});

bg.ui.decoration.vitrage_big	= bg.ui.image.extend({
	initialize: function(cfg){
		var self		= this;


		self.setImage(this.source);

//		var image		= new Image();
//		image.onload	= function(){
//			self.setImage(image);
//		};
//
//		image.src		= this.source;
	},
	source		: '/img/ui/window/vitrage_big.png'
});


bg.ui.decoration.window_small	= bg.ui.image.extend({
	initialize: function(cfg){
		var self		= this;


		self.setImage(this.source);
//		var image		= new Image();
//		image.onload	= function(){
//			self.setImage(image);
//		};
//
//		image.src		= this.source;
	},
	source		: '/img/ui/window/bg_window_small.png'
});

bg.ui.decoration.vitrage_small	= bg.ui.image.extend({
	initialize: function(cfg){
		var self		= this;


		self.setImage(this.source);
//		var image		= new Image();
//		image.onload	= function(){
//			self.setImage(image);
//		};

//		image.src		= this.source;
	},
	source		: '/img/ui/window/vitrage_small.png'
});

bg.ui.decoration.black_border	= bg.ui.rect.extend({
	initialize: function(cfg){
		this.attrs.stroke	= 'black';
	}
});

bg.ui.decoration.round_menu		= bg.ui.image.extend({
	initialize	: function(cfg){
		this.setImage(this.source);
		this.setOffset({x: 450/2, y: 450/2})
	},
	source		: '/img/ui/menu/round/back.png'
})

bg.ui.decoration.event_window		= bg.ui.image.extend({
	initialize	: function(cfg){
		this.setImage(this.source);
	},
	source		: '/img/ui/window/bg_quest.png'
})
