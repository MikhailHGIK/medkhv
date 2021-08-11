function modal_close(){
	$('#modalwindow').hide();
	$('html').css('overflow-y', 'scroll');
	$('html').css('height', 'auto');
	
	if(window.need_refresh!==undefined && window.need_refresh){
		window.location.reload();
	}
}

//esc
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
  	modal_close();
  }
});

$(document).click(function(){
	
	//alert($(this).hasClass('w3-modal'));
	
	if($(this).hasClass('w3-modal') && !$(this).hasClass('w3-modal-content')){
		//alert('1');
	}

});