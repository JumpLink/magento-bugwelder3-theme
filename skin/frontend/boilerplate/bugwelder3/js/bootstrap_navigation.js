jQuery(document).ready(function() {
  jQuery('.navbar .form-search input[type="text"]').focus(function() {
    console.log("focus");
    //jQuery(this).addClass("focus");
    jQuery(this).closest('.navbar').addClass("search-focus");
  }).blur(function() {
    console.log("blur");
    jQuery(this).closest('.navbar').removeClass("search-focus");
  });
});