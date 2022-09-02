class HelloWorld {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    sayHello(): string {
        return this.msg;
    }
}

window.onload = function () {
    const hello = new HelloWorld('Hello World - this is my first TypeScript project');
    console.log(hello.sayHello());
};
