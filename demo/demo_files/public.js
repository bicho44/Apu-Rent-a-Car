!function(t){"use strict";t(function(){t(".tm-testi-slider").each(function(){var i,e=t(this),n=e.data("atts"),a={pagination:"#tm-testi-slider-pagination-"+n.id,nextButton:"#tm-testi-slider-next-"+n.id,prevButton:"#tm-testi-slider-prev-"+n.id,paginationClickable:!0,autoHeight:!1},s=null;if("undefined"!==n)for(i in n)a[i]=n[i];s=new Swiper(e,a)})})}(jQuery);