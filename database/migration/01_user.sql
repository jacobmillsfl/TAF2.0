/*
Author:			This code was generated by DALGen Web available at https://dalgen.opendevtools.org
Date:			10/28/2023
Description:		Creates the User table and respective stored procedures

*/

USE tafdb;


-- Create Table 

CREATE TABLE `tafdb`.`User` (
id INT AUTO_INCREMENT,
name VARCHAR(256),
password_hash VARCHAR(64),
email VARCHAR(256),
active TINYINT,
scope VARCHAR(32),
CONSTRAINT pk_User_id PRIMARY KEY (id)
);


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_Load`
(
	IN paramid INT
)
BEGIN
	SELECT
		`User`.`id` AS `id`,
		`User`.`name` AS `name`,
		`User`.`password_hash` AS `password_hash`,
		`User`.`email` AS `email`,
		`User`.`active` AS `active`,
		`User`.`scope` AS `scope`
	FROM `User`
	WHERE `User`.`id` = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_LoadAll`
(
)
BEGIN
	SELECT
		`User`.`id` AS `id`,
		`User`.`name` AS `name`,
		`User`.`password_hash` AS `password_hash`,
		`User`.`email` AS `email`,
		`User`.`active` AS `active`,
		`User`.`scope` AS `scope`
	FROM `User`;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_Add`
(
	IN paramname VARCHAR(256),
	IN parampassword_hash VARCHAR(64),
	IN paramemail VARCHAR(256),
	IN paramactive TINYINT,
	IN paramscope VARCHAR(32)
)
BEGIN
	INSERT INTO `User` (name,password_hash,email,active,scope)
	VALUES (paramname,parampassword_hash,paramemail,paramactive,paramscope);
	-- Return last inserted ID as result
	SELECT LAST_INSERT_ID() as id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_Update`
(
	IN paramid INT,
	IN paramname VARCHAR(256),
	IN parampassword_hash VARCHAR(64),
	IN paramemail VARCHAR(256),
	IN paramactive TINYINT,
	IN paramscope VARCHAR(32)
)
BEGIN
	UPDATE `User`
	SET
		name = paramname,
		password_hash = parampassword_hash,
		email = paramemail,
		active = paramactive,
		scope = paramscope
	WHERE 
		id = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_Delete`
(
	IN paramid INT
)
BEGIN
	DELETE FROM `User`
	WHERE `User`.`id` = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_User_Search`
(
	IN paramname VARCHAR(256)
)
BEGIN
	SELECT
		User.`id` AS `id`,
		User.`name` AS `name`,
		User.`password_hash` AS `password_hash`,
		User.`email` AS `email`,
		User.`active` AS `active`,
		User.`scope` AS `scope`
	FROM `User`
	WHERE `User`.`name` = paramname;
END //
DELIMITER ;

