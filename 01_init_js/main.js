var a;
var b;
var c;

var a = 12;
var b = 5;
var c = a + b;

console.log("El valor de c es: " + c);
console.log(`El valor de c es: ${c}`);

variable = "Esta es una variable definida sin var.\nSiempre va a ser global";
console.log(variable);

// let genera variables locales (dentro de {}), mientras que var genera variables locales
// en general es preferible evitar el uso de var

const func = () => {
	var a = "Nueva variable llamada a, global"; // reemplaza la variable global
	console.log(a);
};

const func2 = () => {
	let a = "Nueva variable llamada a";
	console.log(a); // devolveria la variable a, mientras que la global se mantendria
};

func();
func2();

console.log(a);

const func3 = () => {
	console.log(miVar);
	if (true) {
		var miVar = "Hola mundo";
	}
	console.log(miVar);
};

func3();

const func4 = () => {
	var miVar;
	console.log(miVar);
	if (true) {
		miVar = "Hola mundo";
	}
	console.log(miVar);
};

func4();

// const func5 = () => {
// 	console.log(miVar); // falla
// 	if (true) {
// 		let miVar = "Hola mundo";
// 	}
// 	console.log(miVar); // falla
// };

// func5();

const USUARIO = {
	id: "rosap",
	nombre: "Rosa Palo",
};

USUARIO.id = "nuevo id";

console.log(USUARIO);
USUARIO = "rositap";
console.log(USUARIO);

const addHtml = (a, b, c) => {
	return `
    <div>
        <h1>Elementos</h1>
        <div>El primer valor es: ${a}</div>
        <div>El segundo valor es: ${b}</div>
        <div>El tercer valor es: ${c}</div>
    </div>
    `;
};

window.onload = () => {
	const element = document.querySelector("#element");

	const HTML_DATA = addHtml(10, 15, 20);

	element.innerHTML = HTML_DATA;

	// element.innerHTML = `
	//     <div>
	//         <h1>Variables</h1>
	//         <div>La variable a tiene el valor: ${a}</div>
	//         <div>La variable b tiene el valor: ${b}</div>
	//         <div>La variable c tiene el valor: ${c}</div>
	//     </div>
	// `;
};
