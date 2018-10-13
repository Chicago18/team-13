create database unify
	with owner postgres
;

create table if not exists person_iden
(
	id serial not null
		constraint person_iden_pkey
			primary key,
	name text not null
)
;

alter table person_iden owner to postgres
;

create table if not exists person
(
	user_id serial not null
		constraint person_pkey
			primary key,
	lastname text not null,
	firstname text not null,
	email text not null,
	dateofbirth date not null,
	job_level text not null,
	company text not null,
	inden integer
		constraint person_inden_fkey
			references person_iden
				on delete set null
)
;

alter table person owner to postgres
;

create table if not exists doc
(
	id serial not null
		constraint doc_pkey
			primary key,
	title text not null,
	full_text text,
	upld_by integer
		constraint doc_upld_by_fkey
			references person
				on delete set null,
	href text,
	doctype text not null,
	description text not null
)
;

alter table doc owner to postgres
;

create table if not exists company
(
	id serial not null
		constraint company_pkey
			primary key,
	name text not null,
	member_since date not null,
	egr_lead integer
		constraint company_egr_lead_fkey
			references person
				on delete set null
)
;

alter table company owner to postgres
;

create table if not exists post
(
	id serial not null
		constraint post_pkey
			primary key,
	title text not null,
	person_id serial not null
		constraint post_person_id_fkey
			references person
				on delete cascade,
	community_id serial not null
		constraint post_community_id_fkey
			references person_iden
				on delete set null,
	post_text text not null,
	num_reply integer not null
)
;

alter table post owner to postgres
;


