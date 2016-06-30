var lista = ["coca","pepsi","manzanita","sevenup","sprite","caballito"];


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