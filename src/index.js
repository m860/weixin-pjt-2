/**
 * Created by jean.h.ma on 1/13/17.
 */
require('normalize.css');
require('./assets/sass/index.sass');
$(window).on('touchmove webkitTouchMove',event=>{
	event.preventDefault()
})
let routerSelector = ['page-1'];

let resources=[
	{id:'kf-1-1',src:require('./assets/img/kf-scene-1/1.png')}
	,{id:'kf-1-2',src:require('./assets/img/kf-scene-1/2.png')}
	,{id:'kf-1-3',src:require('./assets/img/kf-scene-1/3.png')}
	,{id:'kf-1-4',src:require('./assets/img/kf-scene-1/4.png')}
	,{id:'kf-1-5',src:require('./assets/img/kf-scene-1/5.png')}
	,{id:'kf-1-6',src:require('./assets/img/kf-scene-1/6.png')}
	,{id:'kf-1-7',src:require('./assets/img/kf-scene-1/7.png')}
	,{id:'kf-1-8',src:require('./assets/img/kf-scene-1/8.png')}
	,{id:'kf-1-9',src:require('./assets/img/kf-scene-1/9.png')}
	,{id:'kf-1-10',src:require('./assets/img/kf-scene-1/10.png')}
	,{id:'kf-1-11',src:require('./assets/img/kf-scene-1/11.png')}
	,{id:'kf-1-12',src:require('./assets/img/kf-scene-1/13.png')}
	,{id:'kf-1-13',src:require('./assets/img/kf-scene-1/13.png')}
	,{id:'kf-1-14',src:require('./assets/img/kf-scene-1/14.png')}
	,{id:'kf-1-15',src:require('./assets/img/kf-scene-1/15.png')}
	,{id:'kf-1-16',src:require('./assets/img/kf-scene-1/16.png')}
	,{id:'kf-1-17',src:require('./assets/img/kf-scene-1/17.png')}
	,{id:'kf-1-18',src:require('./assets/img/kf-scene-1/18.png')}
	,{id:'kf-1-19',src:require('./assets/img/kf-scene-1/19.png')}
	,{id:'kf-1-20',src:require('./assets/img/kf-scene-1/20.png')}
	,{id:'kf-1-21',src:require('./assets/img/kf-scene-1/21.png')}
	,{id:'kf-1-22',src:require('./assets/img/kf-scene-1/22.png')}
	,{id:'kf-1-23',src:require('./assets/img/kf-scene-1/23.png')}
	,{id:'kf-1-24',src:require('./assets/img/kf-scene-1/24.png')}
	,{id:'kf-1-25',src:require('./assets/img/kf-scene-1/25.png')}
	,{id:'kf-1-26',src:require('./assets/img/kf-scene-1/26.png')}
	,{id:'kf-1-27',src:require('./assets/img/kf-scene-1/27.png')}
	,{id:'kf-1-28',src:require('./assets/img/kf-scene-1/28.png')}
	,{id:'kf-1-29',src:require('./assets/img/kf-scene-1/29.png')}
	,{id:'kf-1-30',src:require('./assets/img/kf-scene-1/30.png')}
	,{id:'kf-1-31',src:require('./assets/img/kf-scene-1/31.png')}
	,{id:'kf-1-32',src:require('./assets/img/kf-scene-1/32.png')}
	,{id:'kf-1-33',src:require('./assets/img/kf-scene-1/33.png')}
	,{id:'kf-1-34',src:require('./assets/img/kf-scene-1/34.png')}
	,{id:'kf-1-35',src:require('./assets/img/kf-scene-1/35.png')}
	,{id:'kf-1-36',src:require('./assets/img/kf-scene-1/36.png')}
	,{id:'kf-1-37',src:require('./assets/img/kf-scene-1/37.png')}
	,{id:'kf-1-38',src:require('./assets/img/kf-scene-1/38.png')}
	,{id:'kf-1-39',src:require('./assets/img/kf-scene-1/39.png')}
	,{id:'kf-1-40',src:require('./assets/img/kf-scene-1/40.png')}
	,{id:'kf-1-41',src:require('./assets/img/kf-scene-1/41.png')}
	,{id:'kf-1-42',src:require('./assets/img/kf-scene-1/42.png')}
	,{id:'kf-1-43',src:require('./assets/img/kf-scene-1/43.png')}
	,{id:'kf-1-44',src:require('./assets/img/kf-scene-1/44.png')}
	,{id:'kf-1-45',src:require('./assets/img/kf-scene-1/45.png')}
	,{id:'kf-1-46',src:require('./assets/img/kf-scene-1/46.png')}
	,{id:'kf-1-47',src:require('./assets/img/kf-scene-1/47.png')}
	,{id:'kf-1-48',src:require('./assets/img/kf-scene-1/48.png')}
	,{id:'kf-1-49',src:require('./assets/img/kf-scene-1/49.png')}
	,{id:'kf-1-50',src:require('./assets/img/kf-scene-1/50.png')}
	,{id:'kf-1-51',src:require('./assets/img/kf-scene-1/51.png')}
	,{id:'kf-1-52',src:require('./assets/img/kf-scene-1/52.png')}
	,{id:'kf-1-53',src:require('./assets/img/kf-scene-1/53.png')}
	,{id:'kf-1-54',src:require('./assets/img/kf-scene-1/54.png')}
	,{id:'kf-1-55',src:require('./assets/img/kf-scene-1/55.png')}
	,{id:'kf-1-56',src:require('./assets/img/kf-scene-1/56.png')}
	,{id:'kf-1-57',src:require('./assets/img/kf-scene-1/57.png')}
	,{id:'kf-1-58',src:require('./assets/img/kf-scene-1/58.png')}
	,{id:'kf-1-59',src:require('./assets/img/kf-scene-1/59.png')}
	,{id:'kf-1-60',src:require('./assets/img/kf-scene-1/60.png')}
	,{id:'kf-1-61',src:require('./assets/img/kf-scene-1/61.png')}
	,{id:'kf-1-62',src:require('./assets/img/kf-scene-1/62.png')}
	,{id:'kf-1-63',src:require('./assets/img/kf-scene-1/63.png')}
	,{id:'kf-1-64',src:require('./assets/img/kf-scene-1/64.png')}
	,{id:'kf-1-65',src:require('./assets/img/kf-scene-1/65.png')}
	,{id:'kf-1-66',src:require('./assets/img/kf-scene-1/66.png')}
	,{id:'kf-1-67',src:require('./assets/img/kf-scene-1/67.png')}
	,{id:'kf-1-68',src:require('./assets/img/kf-scene-1/68.png')}
	,{id:'kf-1-69',src:require('./assets/img/kf-scene-1/69.png')}
	,{id:'kf-1-70',src:require('./assets/img/kf-scene-1/70.png')}
	,{id:'kf-1-71',src:require('./assets/img/kf-scene-1/71.png')}
	,{id:'kf-1-72',src:require('./assets/img/kf-scene-1/72.png')}
	,{id:'flower',src:require('./assets/img/flower.png')}
];


function goto(selector,callback=()=>{}) {
	$(selector).toggleClass('page-init');
	routerSelector.push(selector);
	setTimeout(callback,500);
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
	assets.on('progress', event=> {
		onProgress(event);
	})
	assets.load();
}

let eleFlower=$('.progress-wrapper>img')
	,eleProgressValue=$('.progress-value')
	,eleProgressText=$('.progress-text');
let progressPos=eleProgressValue.position();
let eleBegin=$('.begin')
    ,eleBtnsWrapper=$('.btns-wrapper')
    ,btnStart=$('.btn-start')
    ,btnBack=$('.page-2 .btn-back')
    ,eleGame=$('.page-2 .game');
let viewHeight=window.innerWidth*0.64;
// let viewHeight=window.innerWidth;
eleFlower.css({
	left:eleProgressValue.position().left,
	visibility:'visible'
})
$('.redbag').css({
	height:`${viewHeight}px`
});

//type 1 = 1元
//type 5 = 5元
//type 10 = 10元
//type 100 = 100元
//type ticket = 体验券
//type none = 没有中奖
function showRedbag(type){
	$('.page-2 .game,.page-2 .btn-start').addClass('hidden');
	$('.page-2 .redbag,.page-2 .btn-back,.page-2 .left-game-times').removeClass('hidden');
	$('.btns-wrapper').removeClass('hidden2');
	let redbag=$('.page-2 .redbag');
	let url;
	switch (type){
		case '1':
			url=require('./assets/img/redbag1.png');
			break;
		case '5':
			url=require('./assets/img/redbag5.png');
			break;
		case '10':
			url=require('./assets/img/redbag10.png');
			break;
		case '100':
			url=require('./assets/img/redbag100.png');
			break;
		case 'ticket':
			url=require('./assets/img/redbag-ticket.png');
			break;
		default:
			url=require('./assets/img/redbag-none.png');
	}
	redbag.css('background-image',`url('${url}')`);
}

// 显示弹窗
function toggleDialog(selector){
	$(selector).toggleClass('hidden').find('.close').unbind().on('click',()=>{
		$(selector).toggleClass('hidden');
	})
}
function showRule(){
	toggleDialog('#rule');
}
function showResult(){
	toggleDialog('#result');
}

$('.btn-rule').on('click',showRule)
$('.btn-result').on('click',showResult)

function ok(){
	$('#btn-ok,#form-mobile').addClass('hidden');
	$('#btn-modify,#text-mobile').removeClass('hidden')
	$('#lblMobile').text($('#txtMobile').val());
}
$('#btn-ok').on('click',ok);
function modify(){
	$('#btn-ok,#form-mobile').removeClass('hidden');
	$('#btn-modify,#text-mobile').addClass('hidden')
}
$('#btn-modify').on('click',modify);
btnStart.on('mousedown touchstart webkitTouchStart',(event)=>{
    event.preventDefault();
    eleBegin.addClass('hidden')
    eleGame.removeClass('hidden').css({
        height:`${viewHeight}px`
    })
}).on('mouseup touchend webkitTouchEnd',(event)=>{
    event.preventDefault();
    eleGame.unbind().on('animationend webkitAnimationEnd',event2=>{
        eleGame.addClass('hidden')
        showRedbag()
    }).removeClass('game').addClass('game-done')
})
loadAssets(event=>{
	let value=Math.floor(event.progress*100);
    eleProgressText.text(`${value}%`)
    eleProgressValue.css({width:`${value}%`})
	if(value<100) {
        eleFlower.css({
            left: progressPos.left + eleProgressValue.width()-eleFlower.width()/2
        })
    }
    else{
    	eleFlower.remove();
        eleProgressValue.addClass('progress-value-full');


	}

},()=>{
    setTimeout(()=>{
    	goto('.page-2',()=>{

			btnBack.on('click',event=>{
				btnBack.addClass('hidden')
				btnStart.removeClass('hidden');
				eleGame.addClass('hidden game').removeClass('game-done');
				eleBegin.removeClass('hidden');
				$('.page-2 .redbag').addClass('hidden')
			})
    		eleBegin.addClass('begin-active').css({
            	height:`${viewHeight}px`
			}).on('animationend webkitAnimationEnd',()=>{
				eleBtnsWrapper.removeClass('hidden2')
				eleBegin.attr('class','loop');


				// btnStart.unbind().on('click',()=>{
				// 	eleBegin.addClass('hidden')
				// 	eleBtnsWrapper.addClass('hidden2')
				// 	eleGame.removeClass('hidden').css({
				// 		height:`${viewHeight}px`
				// 	}).on('animationend webkitAnimationEnd',event=>{
				// 		showRedbag()
				// 	})
				// });
			});

		})
    },500);
})