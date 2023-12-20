import pymysql

class DatabaseUtil:
    """Database Utility. Uses an on-demand pattern to connect and disconnect as needed."""

    def __init__(self, config):
        """Create a new instance of the database utility"""
        self.host = config["MYSQL_HOSTNAME"]
        self.user = config["MYSQL_API_USER"]
        self.password = config["MYSQL_ROOT_PASSWORD"]
        self.db = config["MYSQL_DATABASE"]


    # Connection methodologies

    def __connect__(self):
        """Establishes a new connection. Call before each database transaction."""

        self.connection = pymysql.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            db=self.db,
            cursorclass=pymysql.cursors.DictCursor)
        self.cursor = self.connection.cursor()

    def __disconnect__(self):
        """Closes the current connection. Call after each database transaction."""

        self.connection.close()
    
    def __commit__(self):
        """Commits a database transaction."""
        self.connection.commit()

    def songs_load_all(self):
        self.__connect__()
        self.cursor.execute("call usp_Songs_LoadAll()")
        result = self.cursor.fetchall()
        self.__disconnect__()
        return result
    
    def custom_load_default_playlist(self):
        self.__connect__()
        self.cursor.execute("call usp_Custom_LoadAllSongsWithArtistAlbumInfo()")
        result = self.cursor.fetchall()
        self.__disconnect__()
        return result

    def album_load_all(self):
        self.__connect__()
        self.cursor.execute("call usp_Album_LoadAll()")
        result = self.cursor.fetchall()
        self.__disconnect__()
        return result

    def user_create(self, username, password_hash, email, active, scope):
        self.__connect__()
        query = "usp_User_Add"
        params = [username, password_hash, email, active, scope]
        self.cursor.callproc(query, params)

        result = self.cursor.fetchall()
        self.__commit__()
        self.__disconnect__()
        return result

    def user_search(self, username):
        self.__connect__()
        query = "usp_User_Search"
        params = [username]
        self.cursor.callproc(query, params)

        rows = self.cursor.fetchall()
        self.__disconnect__()
        return rows