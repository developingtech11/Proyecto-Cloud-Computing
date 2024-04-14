// JavaScript Document
const animalProduct = {
	nombre: null,
	especie: null,
	precio: 0,
	edad: 0,
	alimentacion: null
}

const Jaguar1 = Object.create(animalProduct);
Jaguar1.nombre = 'Lenny';
Jaguar1.especie = 'Jaguar';
Jaguar1.precio = 400000;
Jaguar1.edad = 1;
Jaguar1.alimentacion = 'Carnivoro';

const Jaguar2 = Object.create(animalProduct);
Jaguar2.nombre = 'Colmillos';
Jaguar2.especie = 'Jaguar';
Jaguar2.precio = 500000;
Jaguar2.edad = 1;
Jaguar2.alimentacion = 'Carnivoro';

const GuacamayoAzul1 = Object.create(animalProduct);
GuacamayoAzul1.nombre = 'Kiwi';
GuacamayoAzul1.especie = 'Guacamayo Azul';
GuacamayoAzul1.precio = 230000;
GuacamayoAzul1.edad = 1;
GuacamayoAzul1.alimentacion = 'Semillas';

const GuacamayoAzul2 = Object.create(animalProduct);
GuacamayoAzul2.nombre = 'Jade';
GuacamayoAzul2.especie = 'Guacamayo Azul';
GuacamayoAzul2.precio = 230000;
GuacamayoAzul2.edad = 1;
GuacamayoAzul2.alimentacion = 'Semillas';

const Tigre1 = Object.create(animalProduct);
Tigre1.nombre = 'Galileo';
Tigre1.especie = 'Tigre';
Tigre1.precio = 1000000;
Tigre1.edad = 2;
Tigre1.alimentacion = 'Carnivoro';

const Tigre2 = Object.create(animalProduct);
Tigre2.nombre = 'Jupiter';
Tigre2.especie = 'Tigre';
Tigre2.precio = 1700000;
Tigre2.edad = 1;
Tigre2.alimentacion = 'Carnivoro';

let catalogo = [];
let carritoCompra = [];

catalogo.push(Jaguar1);
catalogo.push(Jaguar2);
catalogo.push(GuacamayoAzul1);
catalogo.push(GuacamayoAzul2);
catalogo.push(Tigre1);
catalogo.push(Tigre2);
var comingFromCart = false;

function badge(cantItems){
	if(cantItems > 0){
		var divCarro = document.getElementById("badge");
		divCarro.innerHTML = `${cantItems}`;
		divCarro.style.background = "#694834";
		divCarro.style.color = "white";
		divCarro.style.paddingBottom= "3px";
	   }
	
 }

function saveCart(){
	localStorage.setItem("products", JSON.stringify(carritoCompra));
}

function Nosotros(){
	localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	carritoCompra = JSON.parse(localStorage.getItem("products"));
	var cantItemsCart = carritoCompra.length;
	badge(cantItemsCart);
	document.getElementById("botonCatalogo").removeAttribute('class');
	document.getElementById("carrito").removeAttribute('class');
	document.getElementById("botonHome").removeAttribute('class');
	document.getElementById("botonNosotros").setAttribute('class','beforecartactive');
	document.getElementById("mainSec").setAttribute('class','nosotrosInfo');
	document.getElementById("mainSec").innerHTML= "<h2>Quienes somos</h2>        <p>Somos una tienda de animales exoticos especializada en la venta de especies raras y dificiles de encontrar. Contamos con un equipo de expertos en la materia que se encarga de cuidar y mantener a nuestros animales en las mejores condiciones.</p>        <h2>Nuestra mision</h2>        <p>Nuestra mision es proporcionar a nuestros clientes las mejores opciones en cuanto a animales exoticos se refiere, siempre velando por el bienestar y la salud de los mismos. Ademas, nos preocupamos por brindar un excelente servicio al cliente y ofrecer precios competitivos en el mercado.</p>        <h2>Contactanos</h2>        <p>Si tienes alguna duda o necesitas informacion adicional, no dudes en contactarnos por telefono o correo electronico:</p>        <ul>          <li>Telefono: 993-387-5018</li>          <li>Correo electronico: info@amazhop.com</li>";
}

function Carrito() {
	localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	carritoCompra = JSON.parse(localStorage.getItem("products"));
	var cantItemsCart = carritoCompra.length;
	badge(cantItemsCart);
	var total = 0;
	document.getElementById("botonCatalogo").setAttribute('class','');
	document.getElementById("botonHome").setAttribute('class','');
	document.getElementById("botonNosotros").setAttribute('class','beforecart');
	document.getElementById("carrito").setAttribute('class','carritoactivo');
	var products = document.getElementById("mainSec");
	products.innerHTML="";
	products.setAttribute('class','carrito');
	var totaldiv = document.createElement('div');
	totaldiv.setAttribute('class','totalBox');
	carritoCompra.forEach(i => {
		total = total + i.precio;
		var productoBloque = document.createElement('div');
		productoBloque.setAttribute('class','productosCarrito');
		var div = document.createElement('div');
		div	.setAttribute('class', 'productoenCarro');
		var ruta = "img/" + i.nombre + '.jpg';
		div.innerHTML = "<img src=\"" + ruta + "\" class=\"imagenCarro\" />";
		var info = document.createElement('div');
		info.setAttribute('class', 'infoProductoCarro')
		info.innerHTML = "<h1>" + i.nombre + "</h1>" + "<h3>" + i.precio+" MXN" + "</h3>" + "<p>" + 1 +"</p>";
		div.appendChild(info);
		productoBloque.appendChild(div);
		var botonRemover = document.createElement('input');
		botonRemover.setAttribute('type','button');
		botonRemover.setAttribute('class','quitar');
		botonRemover.setAttribute('value', 'Quitar del carrito');
		botonRemover.addEventListener('click', () => {
			var index = carritoCompra.indexOf(i);
			carritoCompra.splice(index, 1);
			alert(i.nombre + " fue quitado del carrito");
			badge(cantItemsCart);
			saveCart();
			comingFromCart = true;
			localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
			Catalogo();
		})
		productoBloque.appendChild(botonRemover);
		products.appendChild(productoBloque);
		
		
	})
	var totalStr = numberWithCommas(total);
		totaldiv.innerHTML = "<h1>TOTAL</h1><br><h3> "+ totalStr +" MXN</h3>";
		products.appendChild(totaldiv);
	
}

function Home(){
	localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	carritoCompra = JSON.parse(localStorage.getItem("products"));
	var cantItemsCart = carritoCompra.length;
	badge(cantItemsCart);
	document.getElementById("botonCatalogo").removeAttribute('class');
	document.getElementById("carrito").removeAttribute('class');
	document.getElementById("botonHome").setAttribute('class','active');
	document.getElementById("mainSec").setAttribute('class','generalInfo');
	document.getElementById("mainSec").innerHTML="<h3>Bienvenido a Amazhop, la tienda en linea especializada en la venta de animales exoticos</h3> <p>En nuestra pagina web encontraras una amplia variedad de especies unicas y fascinantes, cuidadosamente seleccionadas y criadas por expertos en el cuidado de animales exoticos. </p> <p>Nos apasiona brindarte la oportunidad de tener en casa una mascota unica y especial que llene de vida y diversion tu hogar, nuestro compromiso es garantizarte la mejor calidad en el servicio, asesoria y cuidado de tus mascotas.</p>	<p>¡Explora nuestra pagina web y descubre a tu nuevo companero exotico!</p>";
}

function Catalogo() {
	localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	console.log(comingFromCart);
	document.getElementById("botonHome").removeAttribute('class');
	document.getElementById("botonNosotros").removeAttribute('class');
	document.getElementById("carrito").setAttribute('class','carrito');
	document.getElementById("botonCatalogo").setAttribute('class','active');
	try{
		carritoCompra = JSON.parse(localStorage.getItem("products"));
		var cantItemsCart = carritoCompra.length;
		badge(cantItemsCart);
		comingFromCart = JSON.parse(localStorage.getItem("comingFromCart"));
	}
	catch (error)
	{
		console.log("No hay carrito")	
	}
	if(!comingFromCart){
	badge(cantItemsCart);
	var sec = document.getElementById("mainSec");
	sec.innerHTML = "";
	sec.setAttribute('class','productos');	
	var divCarro = document.getElementById("badge");
	catalogo.forEach(i => {
		var div = document.createElement('div');
		div.setAttribute('class','grid-item');
		var ruta = "img/" + i.nombre + '.jpg';
		div.innerHTML = "<img id=\"productImage\" src=\"" + ruta + "\"/>" + "<h2>" + i.nombre + "</h2> <h4>" + i.especie + "</h4> <h1>" + i.precio + " MXN</h1>";
		var botonAgregar = document.createElement('input');
		botonAgregar.setAttribute('type','button');
		botonAgregar.setAttribute('class','agregar');
		botonAgregar.setAttribute('value', 'Agregar al carrito');
		botonAgregar.addEventListener('click', () => {
			var verify = verifyCart(i);
			if(verify){
			   alert("No se puede agregar 2 veces al mismo espécimen");
			   }else{
				carritoCompra.push(i);
				alert(i.nombre + " fue agregado al carrito");
				badge(carritoCompra.length);
				saveCart();
			   }
			
		})
		div.appendChild(botonAgregar)
		sec.appendChild(div);
	}
		
	);
		}else{
			comingFromCart = false;
				Carrito();
		}
}

function verifyCart(animal){
	carritoCompra = JSON.parse(localStorage.getItem("products"));

	var bool = false;
	carritoCompra.forEach(i =>{
		if(i.nombre.localeCompare(animal.nombre) === 0){
		   bool = true;
		   }
		else{
			bool = false;
		}
	})
	return bool;
}

function checkCartComing(){
	localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	console.log(comingFromCart);
	comingFromCart = JSON.parse(localStorage.getItem("comingFromCart"));
	if(comingFromCart){
		console.log(comingFromCart);
	   	Carrito();
		comingFromCart = false;
		localStorage.setItem("comingFromCart", JSON.stringify(comingFromCart));
	   }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



