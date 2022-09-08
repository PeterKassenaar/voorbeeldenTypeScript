export type IPerson = IPersonChild[];
export interface IPersonChildAddressGeo {
	lat: string;
	lng: string;
}
export interface IPersonChildAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IPersonChildAddressGeo;
}
export interface IPersonChildCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}
export interface IPersonChild {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IPersonChildAddress;
	phone: string;
	website: string;
	company: IPersonChildCompany;
}