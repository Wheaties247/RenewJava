create table USERS (
    ID serial UNIQUE,
    user_name varchar(100) NOT NULL,
    password varchar(100) NOT NULL
);

