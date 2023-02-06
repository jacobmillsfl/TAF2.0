
-- Retrieves data for default playlist
DELIMITER //
CREATE PROCEDURE `tafdb`.`usp_Custom_LoadAllSongsWithArtistAlbumInfo`
(
)
BEGIN
    SELECT
        Artist.name as ArtistName, 
        Album.name as AlbumName,
        Album.artPath as ArtPath,
        Song.name as SongName,
        Song.songPath as SongPath,
        Song.trackNumber as TrackNumber 
    FROM Song
    INNER JOIN Artist ON Artist.id = Song.artistId
    INNER JOIN Album ON Album.id = Song.albumId
    ORDER BY Album.name, Song.trackNumber;
END //
DELIMITER ;