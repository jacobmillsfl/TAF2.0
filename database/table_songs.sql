-- ------------------------------------------------------
-- Creates the Songs database table and stored procedures
-- ------------------------------------------------------

-- WARNING: Only uncomment the following if there is a necessary schema change

-- DROP TABLE IF EXISTS `tafdb`.`Songs`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_LoadAll`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_Search`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_Add`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_Load`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_Delete`;
-- DROP PROCEDURE IF EXISTS `tafdb`.`usp_Songs_Update`;


-- Create Table 

CREATE TABLE `tafdb`.`Songs` (
id INT AUTO_INCREMENT,
title VARCHAR(512),
artist VARCHAR(512),
dataPath VARCHAR(512),
artPath VARCHAR(512),
CONSTRAINT pk_Songs_id PRIMARY KEY (id)
);


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_Load`
(
	IN paramid INT
)
BEGIN
	SELECT
		`Songs`.`id` AS `id`,
		`Songs`.`title` AS `title`,
		`Songs`.`artist` AS `artist`,
		`Songs`.`dataPath` AS `dataPath`,
		`Songs`.`artPath` AS `artPath`
	FROM `Songs`
	WHERE `Songs`.`id` = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_LoadAll`
(
)
BEGIN
	SELECT
		`Songs`.`id` AS `id`,
		`Songs`.`title` AS `title`,
		`Songs`.`artist` AS `artist`,
		`Songs`.`dataPath` AS `dataPath`,
		`Songs`.`artPath` AS `artPath`
	FROM `Songs`;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_Add`
(
	IN paramtitle VARCHAR(512),
	IN paramartist VARCHAR(512),
	IN paramdataPath VARCHAR(512),
	IN paramartPath VARCHAR(512)
)
BEGIN
	INSERT INTO `Songs` (title,artist,dataPath,artPath)
	VALUES (paramtitle,paramartist,paramdataPath,paramartPath);
	-- Return last inserted ID as result
	SELECT LAST_INSERT_ID() as id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_Update`
(
	IN paramid INT,
	IN paramtitle VARCHAR(512),
	IN paramartist VARCHAR(512),
	IN paramdataPath VARCHAR(512),
	IN paramartPath VARCHAR(512)
)
BEGIN
	UPDATE `Songs`
	SET
		title = paramtitle,
		artist = paramartist,
		dataPath = paramdataPath,
		artPath = paramartPath
	WHERE 
		id = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_Delete`
(
	IN paramid INT
)
BEGIN
	DELETE FROM `Songs`
	WHERE `Songs`.`id` = paramid;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Songs_Search`
(
	IN paramid INT,
	IN paramtitle VARCHAR(512),
	IN paramartist VARCHAR(512),
	IN paramdataPath VARCHAR(512),
	IN paramartPath VARCHAR(512)
)
BEGIN
	SELECT
		`Songs`.`id` AS `id`,
		`Songs`.`title` AS `title`,
		`Songs`.`artist` AS `artist`,
		`Songs`.`dataPath` AS `dataPath`,
		`Songs`.`artPath` AS `artPath`
	FROM `Songs`
	WHERE 
		COALESCE(`Songs`.`id`,0) = COALESCE(paramid,`Songs`.`id`,0)
		 AND COALESCE(`Songs`.`title`,'') LIKE COALESCE(CONCAT('%', paramtitle, '%'),`Songs`.`title`,'')
		 AND COALESCE(`Songs`.`artist`,'') LIKE COALESCE(CONCAT('%', paramartist, '%'),`Songs`.`artist`,'')
		 AND COALESCE(`Songs`.`dataPath`,'') LIKE COALESCE(CONCAT('%', paramdataPath, '%'),`Songs`.`dataPath`,'')
		 AND COALESCE(`Songs`.`artPath`,'') LIKE COALESCE(CONCAT('%', paramartPath, '%'),`Songs`.`artPath`,'');
END //
DELIMITER ;