-- ------------------------------------------------------
-- Initializes tables with default data
-- WARNING: This should be the final script called during
--          database initialization
-- ------------------------------------------------------

CALL `tafdb`.`usp_Songs_Add`('Abyss of Bliss','The Ambient Funk','music/AbyssOfBliss.mp3','images/TafAlbumCover1000x.png');
CALL `tafdb`.`usp_Songs_Add`('Endemic Rancor','Brigand','music/EndemicRancor.mp3','images/BrigandAlbumCover.jpg');
CALL `tafdb`.`usp_Songs_Add`('Something About Us','Horse','music/SomethingAboutUs.mp3','images/tafhorse.png');