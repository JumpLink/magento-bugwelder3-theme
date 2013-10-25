jQuery(document).ready(function() {
  jQuery('.command-bar .command-bar-form input[type="text"]').focus(function() {
    console.log("focus");
    //jQuery(this).addClass("focus");
    jQuery(this).closest('.command-bar').addClass("focus");
  }).blur(function() {
    console.log("blur");
    jQuery(this).closest('.command-bar').removeClass("focus");
  });
});