#TypeScript client-server applicatie
Behorende bij <em>Web Development Library - ECMAScript 6 en TypeScript</em> door Peter Kassenaar.
ISBN : 9789059409323. 

##Gebruik
###Server
- ga naar de directory `\server` en draai `npm install`
- start de server met `nodemon server.js`
- de server wordt gestart op poort localhost:3000
- er is een API voor `http://localhost:3000 /api/books` en `http://localhost/api/order`
- wil je wijzigingen doorvoeren in de server? Start dan een nieuwe command line en draai hierin `npm run watch` (of draai zelf `tsc -w`)

###Client
- ga naar de directory `\client` en typ `npm install`
- Typ `typings install`
- Starten: typ `npm run build` of gebruik zelf de opdracht `webpack-dev-server --open`

Vragen: info@kassenaar.com


