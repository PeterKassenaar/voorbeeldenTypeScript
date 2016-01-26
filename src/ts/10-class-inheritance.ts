class GreeterBaseClass {
	private _msg:string;

	constructor(msg:string) {
		this._msg = msg;
	}

	getMsg() {
		return this._msg;
	}
}

class GreeterExtendedClass extends GreeterBaseClass {
	constructor(msg:string) {
		super(msg)
	}

	greet() {
		return super.getMsg();
	}
}

var greeterExtended                         = new GreeterExtendedClass('Hello Breda');
document.getElementById('result').innerHTML = greeterExtended.greet();
