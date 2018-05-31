create table POSTS (
    ID serial UNIQUE PRIMARY KEY,
    PART varchar(100) NOT NULL,
    RETAILPRICE varchar(100) NOT NULL,
    PARTAGE varchar(100) NOT NULL
);