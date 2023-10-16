$(".input-field").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input-field").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})