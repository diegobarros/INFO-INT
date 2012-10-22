/**
 * @author Diego Augusto de Faria Barros
 */
$(document).ready(function(){
	$("#ctrlEsquerdo").addClass("ctrl");
	$("#ctrlDireito").addClass("ctrl");
	$("#Alt").addClass("alt");
	$("#altGr").addClass("alt");
	$("#shiftDireito").addClass("shift");
	$("#shiftEsquerdo").addClass("shift");
	$("#menu").addClass("menu");
	$("#windows").addClass("windows");
	$("#exercitar-teclado-link").fancybox();
	
	$("#exercitar-teclado-link").click(function(){
		$("#exercitar-teclado-link").fancybox();
	});
	
	$("#botao-fechar-janela-ajuda").click(function(){
		$.fancybox.close();
	});
	
	
	
});
