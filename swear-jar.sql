--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: swears; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.swears (
    id integer NOT NULL,
    users_to_teams_id integer,
    user_id integer,
    "timestamp" timestamp without time zone,
    has_paid boolean DEFAULT false
);


ALTER TABLE public.swears OWNER TO postgres;

--
-- Name: swears_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.swears_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.swears_id_seq OWNER TO postgres;

--
-- Name: swears_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.swears_id_seq OWNED BY public.swears.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    swear text NOT NULL,
    team_name text,
    pledge_url text NOT NULL,
    end_date text,
    owner integer
);


ALTER TABLE public.teams OWNER TO postgres;

--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO postgres;

--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text,
    email text NOT NULL,
    identify_as text NOT NULL,
    temp_total_swears integer DEFAULT 0
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_to_teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_to_teams (
    id integer NOT NULL,
    user_id integer,
    team_id integer,
    per_swear integer DEFAULT 5
);


ALTER TABLE public.users_to_teams OWNER TO postgres;

--
-- Name: users_to_teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_to_teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_to_teams_id_seq OWNER TO postgres;

--
-- Name: users_to_teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_to_teams_id_seq OWNED BY public.users_to_teams.id;


--
-- Name: swears id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swears ALTER COLUMN id SET DEFAULT nextval('public.swears_id_seq'::regclass);


--
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: users_to_teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_to_teams ALTER COLUMN id SET DEFAULT nextval('public.users_to_teams_id_seq'::regclass);


--
-- Data for Name: swears; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.swears (id, users_to_teams_id, user_id, "timestamp", has_paid) FROM stdin;
1	1	1	\N	f
2	1	1	\N	f
3	2	2	\N	f
\.


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teams (id, swear, team_name, pledge_url, end_date, owner) FROM stdin;
2	the f word	laser sharks	url2	date	4
1	pronouns	street sharks	url1	datehere	1
3	guys	young machetes	url3	a date	8
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, identify_as, temp_total_swears) FROM stdin;
2	seymour_butts	sey@microsoft	mr. butts	8
6	xquivalentxchange	yoshikagekira@gmail	gappy	10
10	20thcenturydaddy	jojo@aol.com	joseph	16
7	lisalisastan89	lisalisafan89@hotmail	jorge	2
11	beautifulboi	caesar@zeppeli.family	caesar	4
8	wine_mom	bruabba@gmail	abbacchio	9
5	xSTEELBALLx	gyro@zeppeli-joestar.net	gyro	7
9	DeusEx	RobertEO@speedwagon.foundation	speedwagon	7
1	mxlizandry	liz@gmail	liz	5
4	james_is_here	james@jamesnet	james	5
3	cassie_x	cass@home	cassie	3
\.


--
-- Data for Name: users_to_teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_to_teams (id, user_id, team_id, per_swear) FROM stdin;
1	1	1	10
2	2	1	3
3	3	1	15
4	4	2	7
5	1	2	5
6	1	3	2
7	5	1	4
8	6	1	7
9	7	3	3
10	8	3	12
11	9	3	5
12	10	1	5
13	11	2	6
14	9	1	50
15	2	2	5
\.


--
-- Name: swears_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.swears_id_seq', 3, true);


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: users_to_teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_to_teams_id_seq', 15, true);


--
-- Name: swears swears_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swears
    ADD CONSTRAINT swears_pkey PRIMARY KEY (id);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_to_teams users_to_teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_to_teams
    ADD CONSTRAINT users_to_teams_pkey PRIMARY KEY (id);


--
-- Name: teams owner_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT owner_id FOREIGN KEY (owner) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET DEFAULT;


--
-- Name: users_to_teams team_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_to_teams
    ADD CONSTRAINT team_id FOREIGN KEY (team_id) REFERENCES public.teams(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_to_teams user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_to_teams
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: swears user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swears
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: swears users_to_teams_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swears
    ADD CONSTRAINT users_to_teams_id FOREIGN KEY (users_to_teams_id) REFERENCES public.users_to_teams(id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

