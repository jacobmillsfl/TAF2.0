import bcrypt


class CryptoUtil:

    @staticmethod
    def hash_password(password):
        # Use bcrypt to securely hash the password
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
        return hashed
    
    @staticmethod
    def check_password(password: str, hash: str):
        return bcrypt.checkpw(password.encode('utf-8'), hash.encode('utf-8'))