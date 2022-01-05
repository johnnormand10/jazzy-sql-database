CREATE TABLE "artistlist" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "birthdate" date
);

INSERT INTO artistlist(name, birthdate)
VALUES('Ella Fitzgerald', '04-25-1917'),
('Dave Brubeck', '12-06-1920'),
('Miles Davis', '05-26-1926'),
('Esperanza Spalding', '10-18-1984');





CREATE TABLE "songlist"(
	"id" SERIAL PRIMARY KEY,
	"title" varChar(100),
	"length" varChar,
	"released" date
);

INSERT INTO songlist(title, length, released)
VALUES('Take Five', '5:24', '1959-09-29'),
('So What', '9:22', '1959-08-17'),
('Black Gold', '5:17', '2012-02-01');