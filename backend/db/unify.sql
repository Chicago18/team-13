DROP TABLE person;

CREATE TABLE person(
    user_id SERIAL NOT NULL PRIMARY KEY ,
    lastName TEXT NOT NULL,
    firstName TEXT NOT NULL,
    email TEXT NOT NULL,
    dateOfBirth DATE NOT NULL,
    job_level TEXT NOT NULL,
    company TEXT NOT NULL,
    inden INT REFERENCES person_iden (id) ON DELETE SET NULL 
);

CREATE TABLE person_iden(
	
	id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL

);


CREATE TABLE doc(
	
	id SERIAL NOT NULL PRIMARY KEY,
	title TEXT NOT NULL,
	full_text TEXT NOT NULL,
	upld_by INT REFERENCES person (user_id) ON DELETE SET NULL
	
);
