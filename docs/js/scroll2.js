$(document).ready(function(){
	setBindings();
});

function setBindings(){
$("nav a").click(function(e){
	a.preventDefault();
	var sectionID = e.currentTarget.id + "Section";

	$("html body").animate({
		scrollTop:$("#" + sectionID).offset().top
	},1000)
})
}