-- CREATE DATABASE "harvester"

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name character varying(40) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    hourly_rate numeric(18,2) NOT NULL
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    address_1 character varying(60) NOT NULL,
    address_2 character varying(60) NOT NULL,
    bid numeric(18,2) NOT NULL DEFAULT '0'::numeric,
    start_date character varying(20) NOT NULL,
    image character varying(200) DEFAULT 'images/placeholder.png'::character varying
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name character varying(255) NOT NULL
);

CREATE TABLE user_projects (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id integer NOT NULL REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE project_expenses (
    id SERIAL PRIMARY KEY,
    project_id integer REFERENCES projects(id) ON DELETE CASCADE,
    category_id integer REFERENCES categories(id) ON DELETE CASCADE,
    description character varying(125) NOT NULL,
    date character varying(20) NOT NULL,
    total numeric(18,2) NOT NULL
);


--Dummy Data 
--Create at least two users through the application itself before continuing

INSERT INTO "categories"("id","category_name")
VALUES
(1,'Equipment'),
(2,'Materials'),
(3,'Permit'),
(4,'Wage');

INSERT INTO "projects"("id","address_1","address_2","bid","start_date","image")
VALUES
(1,'1735 Dayton','Saint Paul, MN 55104',15250,'05/16/2020','images/dayton_close.jpg'),
(18,'1755 Ashland Ave.','Saint Paul, MN 55104',12500,'07/20/2020','images/ashland.jpg'),
(19,'2922 Dorman Ave.','Minneapolis, MN 55406',7900,'08/16/2020','images/dayton_exterior.jpg'),
(20,'214 Woodlawn Ave.','Saint Paul, MN 55105',8600,'10/02/2020','images/overhang.jpg'),
(21,'2217 Summit Ave.','Saint Paul, MN 55104',14500,'10/21/2020','images/summit_french.jpg'),
(22,'1251 W Como Ave.','Saint Paul, MN 55117',9850,'11/08/2020','images/summit_entrance.jpg'),
(27,'1645 Laurel Ave ','Saint Paul, MN 55104',14500,'03/01/2021','images/placeholder.png');

-- expenses for project id #22 (1251 W Como Ave.)
INSERT INTO "public"."project_expenses"("id","project_id","category_id","description","date","total")
VALUES
(17,22,1,'bushes & drops','11/08/2020',125),
(18,22,2,'primer','11/08/2020',225),
(19,22,2,'chaulk','11/08/2020',22.5),
(20,22,4,'joshua','11/08/2020',141.75),
(21,22,2,'glasing','11/09/2020',25.48),
(22,22,1,'torch&gloves','11/09/2020',36.39),
(23,22,4,'joshua','11/09/2020',162),
(24,22,4,'joshua','11/10/2020',162),
(25,22,4,'mike','11/11/2020',198),
(26,22,4,'joshua','11/11/2020',182.25),
(27,22,2,'paint','11/12/2020',192.48),
(28,22,4,'joshua','11/12/2020',162),
(29,22,4,'mike','11/12/2020',176),
(30,22,2,'paint and rags','11/13/2020',98.47),
(31,22,4,'joshua','11/13/2020',141.75),
(32,22,4,'mike','11/13/2020',154),
(39,22,2,'Paint & brushes','02/22/2021',128),
(40,22,4,'joshua','02/22/2021',162);

-- Add users to a project, ideally 1251 W Como as it is the only one with expenses linked to it through the application. 
