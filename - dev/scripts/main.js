  // -----------Выбор цены --------------- //
var SliderWidget = (function(){

	var _insertValues = function($this){
		var
			container = $this.closest('.filter__slider'),
			from = container.find('.filter__slider-input_from'),
			to = container.find('.filter__slider-input_to');

		var values = $this.slider('option', 'values');

			from.val(values[0]);
			to.val(values[1]);
	}

	var init = $('.filter__slider-element').each(function(){
		var 
			$this = $(this),
			min = parseInt($this.data('min')),
			max = parseInt($this.data('max'));

		$this.slider({
		  range: true,
		  min: min,
		  max: max,
		  values: [min, max],
		  slide: function() {
		    _insertValues($this);
		  },
		  create: function(){
		  	_insertValues($this);
		  }
		});					
	});

	return {
		init: init
	};
})();

  // ------------------Селект------------------- //







  // -----------Переключение вида--------------- //

// var ViewStateChange =(function(){
	
// 	var _previousClass = '';

// 	var _changeState = function($this){
// 		var 
// 			item = $this.closest('.sort__view-item'),
// 			view = item.data('view'),
// 			listOfItems = $('#products-list'),
// 			modificationPrefix = 'products__list_',
// 			classOfViewState = modificationPrefix + view;

// 		if (_previousClass == '') {
// 			_previousClass.listOfItems.attr('class');
// 		}

// 		_changeActiveClass($this);
// 		listOfItems.attr('class', _previousClass + '' + classOfViewState);
// 	};

// 	var _changeActiveClass = function($this){
// 		$this.closest('.sort__view-item').addClass('active');			
// 		$this.siblings().removeClass('active');
// 	}

// 	return {
// 		init: function(){
// 			$('.sort__view-link').on('click', function(e){
// 				e.preventDefault();
// 				_changeState($(this));
// 			});
// 		}
// 	}

// }());

  // -------------Cлайдшоу --------------//

// var Slideshow = (function(){
	
// 	var _changeSlide = function($this){
// 		var container = $this.closest('.products__slideshow'),
// 				path = $this.find('img').attr('src'),
// 				display = container.find('.products__slideshow-img');

// 		display.fadeOut(function() {
// 			$(this).attr('src', path).fadeIn();
// 		});
// 	}

// 	return {
// 		init: function(){
// 			$('.products__slideshow-link').on('click', function(e){
// 				e.preventDefault();
				
// 				var 
// 						$this = $(this);

// 				_changeSlide($this);

// 			});
// 		}
// 	}
// }());




$(document).ready(function(){
	
	
	// ViewStateChange.init();


	// if($('.products__slideshow').lenght) {
	// 	 Slideshow.init();
	// }


	if($('.filter__slider-element').lenght) {
		 SliderWidget.init();
	}


	if($('.sort__select-elem').lenght) {
		 $('.sort__select-elem').select2({
		 	minimumResultsForSearch: Infinity		 	
		 });
	}


  // -------------Cброс чекбоксов --------------//

$('.filter__reset').on('click', function(e){
	e.preventDefault();		
	var	$this = $(this),
			container = $this.closest('.filter__item'),
			checkboxes = container.find('input:checkbox');
		checkboxes.each(function(){
			$(this).removeProp('checked');
		});
	});
});

  // -----------Выбор цвета sidebar------------//

$('.filter__colors-item').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('filter__colors-item-active');	
});

  // -------------- Columnizer ---------------//

$('.attension__text').columnize({
	width: 530
});