class List<T> {
	_items: T[] = [];

	add(item: T) {
		this._items.push(item);
	}

	getItems(): T[] {
		return this._items;
	}
}

var nameList = new List<string>();

nameList.add('Peter');
nameList.add('Sandra');
nameList.add('Javan');
nameList.add('Feline');
// nameList.add(42); // error
console.log('nameList: ', nameList);

var numList = new List<number>();
numList.add(1);
numList.add(2);
numList.add(3);
numList.add(5);
numList.add(8);
// numList.add('Hello world'); // oops!
console.log('numList: ', numList);
