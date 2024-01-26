db.createUser(
    {
        user: "ikrar557",
        pwd: "r4ngk1ng",
        roles: [
            {
                role: "readWrite",
                db: "my_db"
            }
        ]
    }
);
db.createCollection("test"); //MongoDB creates the database when you first store data in that database