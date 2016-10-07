"use strict";
jQuery(document).ready(function(){

	jQuery('.super-list .hugeitmicro-item .play-icon').on('click', function(e){
		var data_id = jQuery(this).parent().parent().parent().attr("data-id");
		hg_send_ids_click(data_id);
	});
	
	jQuery('.super-list .videogallery-image-overlay a').on('click', function(e){
		var data_id = jQuery(this).attr("href");
		data_id = data_id.replace("#", "");
		hg_send_ids_click(data_id);
	});

	jQuery('li.huge_it_big_li').on('click', function(e){
		var data_id = jQuery(this).attr("data-id");
		hg_send_ids_click(data_id);
	});
	
	jQuery('a.huge_it_videogallery_item .play-icon').on('click', function(e){
		var data_id = jQuery(this).parent().attr("data-id");
		hg_send_ids_click(data_id);
	});
	
	jQuery('.hg_play_button').on('click', function(e){
		var data_id = jQuery(this).attr("data-id");
		if(data_id != undefined) {
			hg_send_ids_click(data_id);
		}
	});	
	
	jQuery(".thumb_wrapper").on('click', function(e){
		var data_id = jQuery(this).parent().attr("data-id");
		hg_send_ids_click(data_id);
	});
	 
});

function hg_send_ids_click(data_id){
	  jQuery.ajax({
	  url: ajax_object.ajax_url,
	  type: 'post',
	  data: {'action': 'share_count_ajax_callback','task':'data-id', 'id':data_id },
	  success: function(data, status) {
		data=JSON.parse(data);
	  },
	  error: function() {
	  }
	});
}