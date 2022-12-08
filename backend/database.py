import pymysql
import os

class DatabaseUtil:
    """Database Utility. Uses an on-demand pattern to connect and disconnect as needed."""

    def __init__(self):
        """Create a new instance of the database utility"""
        self.host = os.environ.get("MYSQL_HOSTNAME")
        self.user = os.environ.get("MYSQL_API_USER")
        self.password = os.environ.get("MYSQL_ROOT_PASSWORD")
        self.db = os.environ.get("MYSQL_DATABASE")

        env_errors = []
        if not self.host:
            env_errors.append("MYSQL_HOSTNAME not defined.")
        if not self.user:
            env_errors.append("MYSQL_API_USER not defined.")
        if not self.password:
            env_errors.append("MYSQL_ROOT_PASSWORD not defined.")
        if not self.db:
            env_errors.append("MYSQL_DATABASE not defined.")

        if len(env_errors) > 0:
            errors = "\n\t".join(env_errors)
            raise Exception(f"ERROR: Environment variables not set. \n{errors}")

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

    def songs_load_all(self):
        self.__connect__()
        self.cursor.execute("call usp_Songs_LoadAll()")
        result = self.cursor.fetchall()
        self.__disconnect__()
        return result
