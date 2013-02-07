/**
 * 
 */
$(document).ready(function() {
	$.ajax({
		url : "home_leftpanel.html",
		success : function(data) {
			$('.home_leftpanel').html(data);
			$('.hleft_action li').bind('click', function() {
				var selected_item = $('select[name=select_action]').val();
				var selected_action = $(this).attr('value');
				if (selected_item == 'Product' && selected_action == '0') {
					$.ajax({
						url : "product.html",
						success : function(data) {
							$('.hright_outer').html(data);
							$('#product_btn').attr('value','Add');
						}
					});
				}
				if (selected_item == 'Product' && selected_action == '1') {
					$.ajax({
						url : "product.html",
						success : function(data) {
							$('.hright_outer').html(data);
							$('#product_btn').attr('value','Save');
						}
					});
				}
				if (selected_item == 'Product' && selected_action == '2') {
					$.ajax({
						url : "product.html",
						success : function(data) {
							$('.hright_outer').html(data);
							$('#product_btn').attr('value','Remove');
						}
					});
				}
			});
		}
	});
	$.ajax({
		url : "home_rightpanel.html",
		success : function(data) {
			$('.home_rightpanel').html(data);
		}
	});

});