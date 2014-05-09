/* creates users table */

DROP TABLE users;

CREATE TABLE users
(
  user_id character varying(25) NOT NULL,
  display_name character varying(30) NOT NULL,
  gender character varying(6) NOT NULL,
  profile_url character varying(50) NOT NULL,
  date_created date not null default CURRENT_DATE,
  CONSTRAINT users_pkey PRIMARY KEY (user_id)
)
WITH (
  OIDS=FALSE
);