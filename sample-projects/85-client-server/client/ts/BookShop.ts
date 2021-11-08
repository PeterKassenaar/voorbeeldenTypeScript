// BookShop.ts - de 'motor' van de applicatie.
// libraries importeren
import * as $ from 'jquery';

// Models
import {Book} from './model/book.model';
import {Order} from "./model/order.model";
import {ProductHelpers} from "./ProductHelpers";

export class BookShop {
	// variabelen
	books: Array<Book>   = []; // cache van boeken
	orders: Array<Order> = []; // alle bestellingen

	constructor() {
		this.getBooks();
		this.addClickHandlers();
		this.setupUI();
	}

	// 1. Boeken ophalen en tonen in UI
	getBooks(): void {
		// NU: Ophalen van lokale webserver, via NodeJS- API
		$.ajax('http://localhost:3000/api/books')
			.then((result: any) => {
				let rows: string = '';
				result.forEach((book: any) => {
					let newBook = new Book(
						book.id,
						book.titel,
						book.auteur,
						book.ISBN,
						book.prijs,
						book.url,
						book.description);
					this.books.push(newBook);
					rows += ProductHelpers.shopRow(newBook);
				});
				$('#products').append(rows);
			});
	}// end getBooks()

	// 2. Klikken op diverse onderdelen in de UI afvangen
	addClickHandlers(): void {
		// 3. Klikken op vraagteken instellen: details van boek tonen
		$(document).on('click', '.singleBook', (e: Event): void => {
			let bookId: number    = $(e.target).data().id;
			let currentBook: Book = this.books.filter(book => {
				return book.id === bookId
			})[0];

			$('#bookDetails')
				.html(ProductHelpers.showBookDetail(currentBook))
				.show();
		});

		// 4. Details verbergen
		$(document).on('click', '#hideDetail', () => {
			$('#bookDetails').hide();
		});

		// 5. Klikken op winkelwagentje/order-knop instellen
		$(document).on('click', '.orderMe', (e: Event): void => {
			console.log('Order book');
			// ID en boek opzoeken
			let orderId = $(e.target).data().id;
			let book    = this.books.filter((book: Book) => {
				return book.id === orderId;
			})[0];

			// caching
			let newOrder = new Order(this.orders.length, book, 1);
			this.orders.push(newOrder);

			// Toevoegen aan UI
			$('#tableCart').append(ProductHelpers.cartRow(newOrder));

			//  Nieuwe totaalprijs berekenen en winkewagentje tonen.
			$('#total').text(ProductHelpers.calculateTotal(this.orders).toFixed(2));
			$('#cart').fadeIn();
		});

		// 6. Boek verwijderen uit winkelwagen
		$(document).on('click', '.orderDelete', (e: Event): void => {
			// Boek vinden en verwijderen uit cache
			let orderId = $(e.target).data().id;
			this.orders = this.orders.filter((order: Order) => {
				return order.orderId !== orderId;
			});

			// Winkelwagentje opnieuw opbouwen
			$('#tableCart').empty();
			this.orders.forEach((order: Order): void => {
				$('#tableCart').append(ProductHelpers.cartRow(order));
			});
			$('#total').text(ProductHelpers.calculateTotal(this.orders).toFixed(2));
			if (this.orders.length === 0) {
				$('#cart').fadeOut();
			}
		});

		// 7. Bestelling plaatsen
		$('#orderCart').on('click', (): void => {
			let result = ProductHelpers.placeOrder(this.orders);
			$('#placeOrder').html(result.data);
			// Verzenden naar 'database' op NodeJS-TypeScript-server
			$.post('http://localhost:3000/api/order',
					JSON.stringify(result.orderSummary))
				.then((data:any)=>{
					console.log('Resultaat van de server', data);
					$('#serverResult').html(data.message);
			})

		});

		// 8. Winkelwagentje leegmaken
		$('#emptyCart').on('click', () => {
			this.orders = [];
			$('#placeOrder').empty();
			$('#cart').fadeOut('normal', () => {
				$('#tableCart').empty();
			});
		})
	}// end addClickHandlers()

	// 9. Basisinstellingen voor user interface
	setupUI() {
		$('#cart').hide();
		$('#bookDetails').hide();
	}
}

