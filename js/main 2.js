$(function(){

//-------------------------------------------Scroll to Jump links-----------------------------------

//slow jump event
$('a.slow-jump').on('click', function(e){
	e.preventDefault();
	goToByScroll($(this).attr('href'));
	return false;
});


//jumplink handler
function goToByScroll(id){
$('html,body').animate({scrollTop: $(id).offset().top}, 3000, 'easeOutQuint');
};


//-------------------------------------------Scrollsnap.js-----------------------------------
	//https://github.com/benoitpointet/jquery-scrollsnap-plugin/blob/master/index.html

	$(document).scrollsnap({
        snaps: '.snap',
        proximity: 250,
        easing: 'easeOutQuint'
        });




// jquery touchwipe control over dropdown menu
		// http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
		// $(window).touchwipe({
		// 	wipeLeft: function() {
		// 	 //prev image
		// 	 prev_img();
		// 	},

		// 	wipeRight: function() {
		// 	  	//next image
		// 	  	next_img();
		// 	},

		// 	preventDefaultEvents: false
		// });



});// function





