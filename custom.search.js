window.timerId = 0;

function make_search(block, locator){
	
	setTimeout(function(){
		$(block+' '+locator).focus()
	},300);

	if($(block+' '+locator).hasClass('search_initialized')){
		$(block).unbind('on');
	}

	$(block+' '+locator).addClass('search_initialized');
	
	$(block).on('keyup', locator, function(e) {	
		if (e.keyCode === 9 || e.keyCode === 27 || e.keyCode === 16 || e.keyCode === 13 || e.keyCode === 18 || e.keyCode === 17 ||  e.keyCode >=37 && e.keyCode <=40  ){
			return false;
		} 
		
		$(this).css('background', 'url("../i/preloader.svg") no-repeat right center #ddffff');
	
		var $this = $(this);
		clearTimeout(window.timerId);
		window.timerId = setTimeout(function() {
						
			var value = $.trim($this.val());
			var searcharray = value.split(" ");
			var resultlocator = '.searchable';
			if ($this.attr('data-searchable')!==undefined){
				resultlocator = $this.attr('data-searchable');
			}
			
			if(value!==''){
				$('.subclinic').removeClass('paddingleft');
			}else {
				$('.subclinic').addClass('paddingleft');
			}
			
			if(value!==''){
				$(block+' '+resultlocator+' .search_line').hide();
	
				$(block+' '+resultlocator+' .search_line').each(function() {
					
					var show = true;
					for(var i=0; i<searcharray.length; i++){
						if ($(this).find('.search_cell').text().toLowerCase().indexOf(searcharray[i].toLowerCase()) + 1) {
							
						} else {
							show = false;
							break;
						}
					}
					
					if(show){
						$(this).show();						
					}
				});
			} else {
				$(block+' '+resultlocator+' .search_line').show();
			}
			
			$this.css('background', '#fff');
		}, 400);

	});
}

$(document).ready(function() {
	make_search('body', 'input.quicksearch');

	if($(window).width()<992) {
		$('#filterform').addClass('w3-hide');
	}

	if($(window).width()>992) {
		$('#filterform').removeClass('w3-hide');
	}

	if($(window).width()<992) {
		$('#filter-sidebar').addClass('w3-margin');
	}

	const template = document.getElementById('profile_exit_button');

	if(typeof tippy !== 'undefined' && template) {
		tippy('#profile_popup', {
			content: template.innerHTML,
			allowHTML: true,
			interactive: true,
			delay: [0,1000]
		});
	}

	$('.toggle-filters').click(function(){
		$('.toggle-filters').toggleClass('margin-bottom-15');
		$('#filterform').toggleClass('w3-hide');
	});
});
