$('ul').on("click","li",function(){
	$(this).toggleClass("compelete");
});
$('ul').on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		remove();
	});
	e.stopPropagation();
})
$('input').keypress(function(e){
if(e.which === 13 )
{
	var todotext =$(this).val();
	$(this).val("");
	$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>");
}

})
$(".fa-plus-circle").click(function(){
	$("input[type='text'").fadeToggle();
})