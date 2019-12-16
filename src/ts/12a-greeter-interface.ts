interface IMessage {
    greeting: string;
}

interface IGreet {
    greet(msg: IMessage): void;
}


class Greeter implements IGreet {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    greet(msg: IMessage) {
        this.element.innerHTML = msg.greeting;
    }
}

window.onload = () => {
    const el = document.getElementById('content');
    const greeter = new Greeter(el);
    greeter.greet({ greeting: 'Hello from the Greeter Class!' });
};
