-- Table: characters

DROP TABLE characters;

CREATE TABLE characters
(
  character_id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id character varying(25) NOT NULL,
  user_display_name character varying(30) NOT NULL,
  name character varying(25) NOT NULL,
  true_name character varying(25) NOT NULL,
  race integer NOT NULL,
  alignment integer NOT NULL,
  hit_points integer NOT NULL,
  dc_physical integer NOT NULL,
  exp_level integer NOT NULL,
  points integer NOT NULL,
  iq integer NOT NULL,
  me integer NOT NULL,
  ma integer NOT NULL,
  ps integer NOT NULL,
  pp integer NOT NULL,
  pe integer NOT NULL,
  pb integer NOT NULL,
  speed integer NOT NULL,
  age integer NOT NULL,
  life_span integer NOT NULL,
  ppe integer NOT NULL,
  sex character(1) NOT NULL,
  date_created date NOT NULL DEFAULT ('now'::text)::date,
  CONSTRAINT characters_pkey PRIMARY KEY (character_id, user_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE characters
  OWNER TO squireshand;
