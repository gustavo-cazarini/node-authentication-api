create table administrator (
	id serial primary key,
	name varchar not null,
	login varchar not null,
	password varchar not null,
	role varchar not null,
	phone varchar not null
);

create table client (
	id serial primary key,
	name varchar not null,
	phone varchar not null
);

INSERT INTO administrator(name, login, password, role, phone)
VALUES('John Doe', 'john', '123456', 'administrator', '11999999999');