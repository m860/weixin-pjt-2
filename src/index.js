/**
 * Created by jean.h.ma on 1/13/17.
 */
require('normalize.css');
require('./assets/sass/index.sass');
let routerSelector = ['page-1'];

let resources=[
	{id:'1',src:require('./assets/img/chicken.png')}
];

function goto(selector) {
	$(selector).toggleClass('page-init');
	routerSelector.push(selector);
}

function back() {
	let selector = routerSelector.pop();
	$(selector).addClass('page-init');
}

function loadAssets(onProgress = ()=> {
}, onComplete = ()=> {
}) {
	let assets = new createjs.LoadQueue();
	assets.loadManifest(resources);
	assets.on('complete', event=> {
		onComplete(event, assets);
	});
	assets.on('fileprogress', event=> {
		onProgress(event);
	})
	assets.load();
}


$('.page-1 button').bind('click', ()=> {
	goto('.page-2')
})

$('.page-2 button:first').bind('click', ()=> {
	goto('.page-3')
})
$('.page-2 button.btn-back').bind('click', ()=> {
	back()
})

loadAssets()