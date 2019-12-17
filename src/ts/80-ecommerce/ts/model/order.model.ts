// order.model.ts
import {Book} from "./book.model";
export class Order {
	constructor(public orderId: number,
				public book: Book,
				public numOrders: number = 1) {
	}
}