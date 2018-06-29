require(["config"], function(){
	require(["load","zoom"], function(){
		//放大镜
	$('.zoom').elevateZoom({
			gallery:'gallery_01',
			cursor : 'pointer',
			galleryActiveClass : 'active'
		});

    })

});