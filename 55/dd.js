function dan(){
	document.write("<table border = '1'>");
	for(a = 1; a <= 9; a++){
		document.write("<tr>");
		for(i = 2; i <= 9; i++){
			if(i%2==0){
			document.write("<td>"+ i + " * " + a + " = " + (i * a) + "</td>");	
			}else{
			document.write("<td>"+ i + " * " + a + " = " + (i * a) + "</td>");
			}
		}
	}document.write("</tr>");
	document.write("</table>");
}

function dan2(){
	document.write("전달전달전달");
}