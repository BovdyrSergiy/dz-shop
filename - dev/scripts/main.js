var myModule = (function () {

	var init = function () {
		_setLowPricePhone();
		_downCheckBox();
		_setPriceSlider();
		_setColorPhone();
		_setUpImage();
		_setPagination();
		_setColum();
		// _setGridiLine();
		_setAccordeon();
		_setSelect();
	};

  // ------- Переключение флагман/бюджет --------//

	var _setLowPricePhone = function () {

		$(function(){
		  $(".categories__item").on('click', function(e) {
		    e.preventDefault();
		    $(".categories__item").removeClass('active');
		    $(this).addClass('active');
		  })
		});
	}

	 // -------------Cброс чекбоксов --------------//

	var _downCheckBox = function () {
		$('.filter__reset').on('click', function(e){
			e.preventDefault();		
			var	$this = $(this),
					container = $this.closest('.filter__item'),
					checkboxes = container.find('input:checkbox');
				checkboxes.each(function(){
					$(this).removeProp('checked');
				});
		});
	}

	// -----------Выбор цены --------------- //

	var _setPriceSlider = function () {
	
		var _insertValues = function($this){
			var container = $this.closest('.filter__slider'),
					from = container.find('.filter__slider-input_from'),
					to = container.find('.filter__slider-input_to');

			var values = $this.slider('option', 'values');

				from.val(values[0]);
				to.val(values[1]);
		}
		
		$('.filter__slider-element').each(function(){
			var $this = $(this),
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
  }

  // -----------Выбор цвета Телефона------------//

	var _setColorPhone = function () {
		$('.filter__colors-item').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('filter__colors-item-active');	
		});
	}


 // ------------ Слайдшоу --------------//

	var _setUpImage = function () {
		$('.products__slideshow-item').on('click', function(e) {
			e.preventDefault();
			var element = $(this),
					preview = element.find('.products__slideshow-thumb-img'),
					src = preview.attr('src'),
					gallery = element.closest('.products__slideshow'),
					img = gallery.find('.products__slideshow-img');
			img.attr('src', src);	
		});
		$(function(){
		  $(".products__slideshow-link").on('click', function(e) {
		    e.preventDefault();
		    $(".products__slideshow-link").removeClass('active');
		    $(this).addClass('active');
		  })
		});
	}

	// ------- Переключение страниц --------//

	var _setPagination = function () {
		$(function(){
		  $(".pagination__link").on('click', function(e) {
		    e.preventDefault();
		    $(".pagination__link").removeClass('active');
		    $(this).addClass('active');
		  })
		});
	}

  // -------------- Columnizer ---------------//

	var _setColum = function () {
		$('.attension__text').columnize({
			width: 530
		});
	}

 // -------------- Accordeon --------------//

	var _setAccordeon = function () {
		$(document).ready(function(){
			$('.filter__title').on('click', function(e) {
				e.preventDefault();
				var $this = $(this),
						content = $this.closest('.filter__item').find('.filter__content');
				if (content.hasClass('closed')) {
					content.removeClass('closed').stop(true, true).slideDown(300);
					$this.removeClass('active');
				} else {
					content.slideUp(300).addClass('closed');
					$this.addClass('active');
				}
			});
		});
	}

  // ------------------Селект------------------- //

	var _setSelect = function () {
		$(".sort__select-elem").select2({
			minimumResultsForSearch: Infinity
		});
	}

 // -------------- End myModule --------------//


	return {
		init: init
	};

})();

myModule.init();





  // -----------Переключение вида--------------- //

var ViewStateChange =(function(){
	
	var _previousClass = '';

	var _changeState = function($this){
		 
		var	item = $this.closest('.sort__view-item'),
				view = item.data('view'),
				listOfItems = $('#products-list'),
				modificationPrefix = 'products__list_',
				classOfViewState = modificationPrefix + view;

		if (_previousClass == '') {
			_previousClass.listOfItems.attr('class');
		}

		_changeActiveClass($this);
		listOfItems.attr('class', _previousClass + ' ' + classOfViewState);
	};

	var _changeActiveClass = function($this){
		$this.closest('.sort__view-item').addClass('active');			
		$this.siblings().removeClass('active');
	}

	return {
		init: function(){
			$('.sort__view-link').on('click', function(e){
				e.preventDefault();
				_changeState($(this));
			});
		}
	}

}());


$(document).ready(function(){	
	ViewStateChange.init();
});


$('.sort__view-icon').on('click', function(e){
	e.preventDefault();
  $(".sort__view-icon").removeClass('active');
  $(this).addClass('active');
});


