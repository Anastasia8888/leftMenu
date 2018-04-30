$(document).ready(function () {
$(".main>div").hover(function () { //элементы  div которые являются прямыми потомками класса main
$(this).find("div").animate({width: 'toggle'});
});
});
