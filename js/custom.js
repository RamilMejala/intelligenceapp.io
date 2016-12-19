function pagescroll(id) {
		$("html, body").animate({ scrollTop: $(id).offset().top - 135}, 1000);
	}
	
if(window.innerWidth > 767)
{
	$(".MenuBarSubMenuBtn").eq(0).addClass("Active");
	$(".MenuBarSubMenuDiv").eq(0).addClass('Active');
	  
	$(".MenuBarSubMenuBtn").hover(
	function () {
	  $(".MenuBarSubMenuBtn").removeClass("Active");
	  $(".MenuBarSubMenuDiv").removeClass('Active');
	  
	  selIndex = $(this).index();
	  
	  $(this).addClass("Active");
	  $(".MenuBarSubMenuDiv").eq(selIndex).addClass('Active');
	});
	
}



$(document).ready(function() {
	
	$("header").load("header.html");
	$("footer").load("footer.html");
	
	// Collapse accordion every time dropdown is shown
	$('.dropdown-accordion').on('show.bs.dropdown', function (event) {
	  var accordion = $(this).find($(this).data('accordion'));
	  accordion.find('.panel-collapse.in').collapse('hide');
	});

	// Prevent dropdown to be closed when we click on an accordion link
	$('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
	  event.preventDefault();
	  event.stopPropagation();
	  $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
	  $($(this).attr('href')).collapse('show');
	})
	
	
});

if (window.innerWidth < 768) 
{
	// scrollbar
	setTimeout(
    function() {
      $('.navbar-collapse').mCustomScrollbar({
		theme:"light-2"
		});
    }, 1000);
	
	
}