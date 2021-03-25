function hanoi(n, a, b, c){
if(n==1){
	document.write("Mova o disco " +n+ " da posição " +a+ " para a posição " +b+"<br>");
}
	else{
    	hanoi(n-1,a,c,b);
	hanoi(1,a,b,c);
	hanoi(n-1,c,b,a);
  }
}

    function calcular(){
        var disco = document.getElementById("valor").value;
        var result = hanoi(disco, "A", "B", "C");
        document.getElementById(result); 
    }