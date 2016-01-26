class HelloWorld {
	msg:string;

	constructor(msg:string) {
		this.msg = msg;
	}

	sayHello() {
	return this.msg;
}
}

window.onload=function() {
	var hello = new HelloWorld('Hello World');
	console.log(hello.sayHello());
};