// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var first = 1;
var second = 2;

console.log("The lowest number is "+lowest(first, second));

 function lowest(a, b) {
	if(a < b)
		return a;
	else if(a === b)
		return 0;
	else
		return b;
}