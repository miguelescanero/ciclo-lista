var lista = ["coca","pepsi","manzanita","sevenup","sprite","caballito"];

lista.push(prompt("Introduce el nuevo articulo"));
document.write(lista[lista.length-1] + "</p>");
document.write("<p> El primer articulo es ");
document.write(lista[2] + "</p>");
document.write("<p> El ultimo es articulo es ");
document.write(lista[lista.length-1] + "</p>");
lista.unshift("fanta");
document.write("<p> El nuevo articulo es: ");
document.write(lista[0] + "</p>");


//alert("borraremos el primer articulo");
//lista.shift();
//alert("borraremos el ultimo articulo");
//lista.pop();


i = 0;
lista.sort();
var myList;
var li;
//document.write(lista);



n = lista.length;
myList = document.getElementById("results");
	for(i = 0; i <lista.length; i++){
		li = document.createElement("li");
		li.innerHTML=lista[i];
		myList.appendChild(li);

}

