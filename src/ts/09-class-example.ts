class GreeterClass{
	element: HTMLElement;

	constructor(element:HTMLElement){
		this.element = element;
	}

	greet(msg:string){
		this.element.innerHTML = msg;
	}
}

var greeter = new GreeterClass(document.getElementById('result'));
greeter.greet('Hello CM Telecom');
