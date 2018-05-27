create table POSTS (
    ID serial,
    part varchar(100) NOT NULL,
    retail_price varchar(100) ,
    part_age varchar(100) NOT NULL,
    user_Id integer NOT NULL REFERENCES USERS(ID),
--    constraint user_Id FOREIGN KEY(ID)
--        REFERENCES USERS (ID)
--        ON UPDATE RESTRICT ON DELETE CASCADE
);