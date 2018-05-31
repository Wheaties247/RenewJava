create table USERS (
    ID serial UNIQUE PRIMARY KEY,
    USERNAME varchar(100) NOT NULL,
    PASSWORD varchar(100) NOT NULL
);

