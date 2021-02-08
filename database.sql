-- CREATE DATABASE "harvester"


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"user_name" varchar(40) NOT NULL UNIQUE,
	"password" varchar(40) NOT NULL,
	"hourly_rate" DECIMAL(18,2) NOT NULL
);

CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"address_1" varchar(60) NOT NULL,
	"address_2" varchar(60) NOT NULL,
	"bid" DECIMAL(18,2) NOT NULL DEFAULT '0',
	"start_date" VARCHAR(20) NOT NULL
);

CREATE TABLE "categories" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"category_name" varchar(255) NOT NULL
);

CREATE TABLE "project_expenses" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"project_id" INT REFERENCES "projects",
	"category_id" INT REFERENCES "categories",
	"description" varchar(125) NOT NULL,
	"date" VARCHAR(20) NOT NULL,
	"total" DECIMAL (18,2) NOT NULL
);


CREATE TABLE "user_projects" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"user_id" INT REFERENCES "users" NOT NULL,
	"project_id" INT REFERENCES "projects" NOT NULL
	
);

-- Dummy Data for intial testing 
-- create users
INSERT INTO "users" ("user_name", "password", "hourly_rate")
VALUES
('joshua', 'hello', '15'),
('mike', 'taco', '20');

--create categories
INSERT INTO "categories" ("category_name")
VALUES 
('Equipment'),
('Materials'),
('Permit'),
('Wage');

--create new project
INSERT INTO "projects" ("address_1", "address_2", "bid", "start_date")
VALUES 
('1767 Dayton', 'Saint Paul, MN 55105', '10000', '09/16/20');

-- add expense to project
INSERT INTO "public"."project_expenses"("project_id", "category_id", "description", "date", "total") VALUES(1, 1, 'brushes', '09/19/20', 50) RETURNING "id", "project_id", "category_id", "description", "date", "total";

-- Add user to project
INSERT INTO "public"."user_projects"("user_id", "project_id") VALUES(1, 1) RETURNING "id", "user_id", "project_id";