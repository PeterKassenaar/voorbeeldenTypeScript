﻿(function () {

	//Optional parameter
	function buildAddressOptional(address1:string, city:string, address2?:string) {
		var addr2 = (address2) ? ' Address2: ' + address2 : '';
		displayAddress(address1 + addr2 + ', ' + city);
	}

	//Default parameter
	function buildAddressDefault(address1:string, city:string, address2 = 'N/A') {
		displayAddress('Address: ' + address1 + ' Address2: ' + address2 + ' City: ' + city);
	}

	//Rest parameters
	function buildAddressRest(city:string, ...restOfAddress:string[]) {
		var address = '';
		restOfAddress.forEach((addr) => address += ' ' + addr);
		displayAddress(restOfAddress + ', ' + city);
	}

	buildAddressRest('Etten-Leur', 'Trivium', 'Trivium 76', 'Breda', 'Tilburg')

	function displayAddress(msg:string) {
		document.getElementById('result').innerHTML = msg;
	}

	// Quick & Dirty jQuery imitation...
	const $ = id => document.getElementById(id);

	// <> betekent Casting, oftewel 'omzetten'
	const addressButton: HTMLButtonElement = <HTMLButtonElement>$('addressButton'),
		address: HTMLInputElement = <HTMLInputElement>$('address'),
		address2: HTMLInputElement = <HTMLInputElement>$('address2'),
		city: HTMLInputElement = <HTMLInputElement>$('city'),
		result = $('result');

	//Call function with optional parameter
	addressButton.addEventListener('click',
		(e) => buildAddressOptional(address.value, city.value));

	//Call function with default parameter
	//addressButton.addEventListener('click', (e) => buildAddressDefault(address.value, city.value));

	//Call function with Rest parameters
	//addressButton.addEventListener('click',(e) => buildAddressRest(city.value, address.value, address2.value));

}());
