import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
const books = require('./data/books.json');

import {Router} from 'express';
class Server {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
		this.express.listen(3000, () => {
			console.log('Express server gestart op localhost:3000...');
		})
	}

	private  middleware(): void {
		console.log('middleware called');
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({extended: false}));
		this.express.use(cors());
		this.express.use(express.static(__dirname + '/public'));
	}

	private routes(): void {
		console.log('routes called');
		let router: Router = express.Router();
		router.get('/api/books', (req, res, next) => {
			res.json(books);
		});

		router.post('/api/order', (req, res, next)=>{
			let order = req.body;
			console.log('Order ontvangen', order);
			// Doe iets met de order - opslaan in database, verder verwerken, etc.
			res.json({
				message: 'order ontvangen en wordt verwerkt...',
				order: order
			})
		});


		// Router toevoegen aan express-instantie
		this.express.use(router);
	}
}

export default new Server().express;