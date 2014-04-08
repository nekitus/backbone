bg.class.define('bg.smth.main', {
	extend		: bg.window,
	type		: 'singleton',
	members		: {
		modal		: true,
		width		: 900,
		height		: 455,
		x			: 20,
		y			: 170,
		init		: function(){
			var list	= new bg.smth.main.list({y:100, name: 'smth_list'});

			this.add(list);

			select = new bg.ui.select({x:100});
			this.add(select);
		}
	}
});

bg.class.define('bg.smth.main.list', {
	extend: bg.container,
	members: {
		layout	: 'vbox',
		init	: function(cfg) {
			var list	= this.createList();

			this.add(list);
		},
		createList	: function() {
			var control	= new bg.yabu.controller();
			var model	= new bg.smth.model();

			var view	= new bg.container({x: 0, y: 0, layout: 'vbox', height: 405, padding: 60});
			var delegate	= {
				createItem	: function(model){
					var item	= new bg.smth.main.one({model: model});
					return item;
				}
			};

			control.setTarget(view);
			control.setDelegate(delegate);
			control.setModel(model);

			model.fetch();

			return view;
		}
	}
});

bg.class.define('bg.smth.main.one', {
	extend		: bg.container,
	members: {
		init	: function(cfg) {
			this.model	= cfg.model;
			var item	= new bg.rect({
				width: 310,
				height: 30,
				fill: 'grey',
				opacity: 0.8
			});

			var txt	= new bg.text({
				name		: 'txt',
				width		: 240,
				height		: 30,
				fill		: 'gold',
				fontSize	: 18,
				fontFamily	: 'round',
				x: 275,
				y: 5
			})

			var title	= new bg.text({
				name		: 'title',
				width		: 270,
				height		: 30,
				fill		: 'gold',
				fontSize	: 13,
				fontFamily	: 'round',
				x: 5,
				y: 8
			})

			var title_back	= new bg.rect({
				name		: 'title_rect',
				width		: 270,
				height		: 30,
				x: 5,
				y: 8,
				stroke: 'red'
			})

			this.add(item)
			this.add(txt)
			this.add(title)
//			this.add(title_back)

			title_back.setOpacity(0);

			title_back.on('mouseover', function() {
				title_back.setOpacity(1);
			}).on('mouseout', function() {
				title_back.setOpacity(0);
			})

			this.model.bind('reputation_amount', txt, 'text', function(val){return val?val:''})
			this.model.bind('name', title, 'text', function(val){return val?val:''})
//			this.model.bind('reputation_name', title, 'text', function(val){return val?val:''})
		}
	}
});

bg.class.define('bg.smth.model', {
	extend: bg.yabu.collection,
	type		: 'singleton',
	members		: {
		__url__		: '/user/fraction',
		__prepare: function(data){
			return data.data
		}
	}
})

//$(function(){
//	bg.smth.main.getInstance().open()
//});