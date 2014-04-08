var model		= null;

test('init', function () {
	raises(function(){model = new bg.yabu.model1(123)}, 'throw when init with Int');
	raises(function(){model = new bg.yabu.model1('asd')}, 'throw when init with Str');
	raises(function(){model = new bg.yabu.model1(function(){})}, 'throw when init with Function');
	raises(function(){model = new bg.yabu.model1([])}, 'throw when init with Array');

	model			= new bg.yabu.model1();
	deepEqual(model.__attrs, {}, 'init with null');

	model			= new bg.yabu.model1({});
	deepEqual(model.__attrs, {}, 'init without params');

	model			= new bg.yabu.model1({id: 1, name: 'ado'});
	deepEqual(model.__attrs, {id: 1, name: 'ado'}, 'init with params');
});

test('get', function () {
	model			= new bg.yabu.model1({id: 1, name: 'ado'});
	ok(model.get, 'has method');

	equal(model.get('id'), 1, 'single property');
	deepEqual(model.get(), {id: 1, name: 'ado'}, 'all properties');
});

test('set', function () {
	model			= new bg.yabu.model1({name: 'ado'});
	ok(model.set, 'has method');

	equal(model.set('id', 1), undefined, 'check return single value');
	equal(model.get('id'), 1, 'check single property setted');

	deepEqual(model.set({'level': 2, name: 'ado'}), {level: undefined, name: 'ado'}, 'check return multi value');
	deepEqual(model.get(), {name: 'ado', id: 1, level: 2 }, 'check multi property setted');
});

test('onChange single', function () {
	model			= new bg.yabu.model1({id: 5, name: 'ado'});
	ok(model.onChange, 'has method');

	var checker		= 1;
	var handler		= function(oldVal, newVal){
		checker+=oldVal+newVal;
	};
	model.onChange('id', handler);
	model.set('id', 6);
	equal(checker, 12, 'subscribe single onchange and fire');
});

test('offChange single', function () {
	model			= new bg.yabu.model1({id: 5, name: 'ado'});
	ok(model.offChange, 'has method');

	var checker		= 1;
	var handler		= function(oldVal, newVal){
		checker+=oldVal+newVal;
	};
	model.onChange('id', handler);
	model.offChange('id');
	model.set('id', 6);
	equal(checker, 1, 'unsubscribe single onchange and fire');
});

test('onChange path after set', function () {
	var checker		= 1;
	var handler		= function(oldVal, newVal){
		checker+=oldVal+newVal;
	};
	model			= new bg.yabu.model1({});
	var square		= new bg.yabu.model1({square_id: 1});
	var user		= new bg.yabu.model1({user_id: 2});

	square.set('user', user);
	model.set('square', square);

	model.onChange('square.user.user_id', handler);
	user.set('user_id', 3);
	equal(checker, 6, 'subscribe chain onchange and fire');

	console.log('---------------------------')
});

test('onChange path before set', function () {
	var checker		= 1;
	var handler		= function(oldVal, newVal){
		checker+=oldVal+newVal;
	};
	model			= new bg.yabu.model1({});
	var square		= new bg.yabu.model1({square_id: 1});
	var user		= new bg.yabu.model1({user_id: 2});

	model.onChange('square.user.user_id', handler);

	model.set('square', square);

	square.set('user', user);

	equal(checker, 3, 'subscribe chain onchange and fire');

});

test('offChange path', function () {
	var checker		= 1;
	var handler		= function(oldVal, newVal){
		checker+=oldVal+newVal;
	};

	model			= new bg.yabu.model1({});
	var square		= new bg.yabu.model1({square_id: 1});
	var user		= new bg.yabu.model1({user_id: 2});
	square.set('user', user);
	model.set('square', square);

	model.onChange('square.user.user_id', handler);
	model.offChange('square.user.user_id');
	user.set('user_id', 3);
	equal(checker, 1, 'unsubscribe chain onchange and fire');
});
