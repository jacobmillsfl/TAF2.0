-- ------------------------------
-- Author: Jacob Mills
-- Date: 07/09/23
-- Asana Task: 
-- Description: This script creates a new album for 'Soul On Fire (Instrumental)'
--              
-- ------------------------------

USE tafdb;

SET @tafArtistId := 0;
SELECT id
INTO @tafArtistId
FROM Artist WHERE name = 'The Ambient Funk';

CALL `tafdb`.`usp_Album_Add`(@tafArtistId, 'Soul On Fire (Instrumental)', 'album/soul_on_fire_inst.png','2023-08-01');
SET @tafAlbumSOFI := LAST_INSERT_ID();

CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Rudimentary (Instrumental)', 'song/Rudimentary_Instrumental.mp3', 1);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Free Your Mind (Instrumental)', 'song/FreeYourMind_Instrumental.mp3', 2);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Jumping It Up (Instrumental)', 'song/JumpingItUp_Instrumental.mp3', 3);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Vinculum (Instrumental)', 'song/Vinculum_Instrumental.mp3', 4);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Heaven Light My Candle (Instrumental)', 'song/HeavenLightMyCandle_Instrumental.mp3', 5);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'The Distance Between Us (Instrumental)', 'song/TheDistanceBetweenUs_Instrumental.mp3', 6);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Acrophobia (Instrumental)', 'song/Acrophobia_Instrumental.mp3', 7);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Soul On Fire (Instrumental)', 'song/SoulOnFire_Instrumental.mp3', 8);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Abyss of Bliss (Instrumental)', 'song/AbyssOfBliss_Instrumental.mp3', 9);
CALL `tafdb`.`usp_Song_Add`(@tafArtistId, @tafAlbumSOFI, 'Bring It Back (Instrumental)', 'song/BringItBack_Instrumental.mp3', 10);