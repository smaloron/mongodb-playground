rs.initiate({
    _id: "rs0",
    members: [
        { _id: 0, host: "mongo1:27017" },
        { _id: 1, host: "mongo2:27017" },
        { _id: 2, host: "mongo3:27017" },
        { _id: 3, host: "mongo-arbiter:27017", arbiterOnly: true }
    ]
});

print("✅ Replica Set initialisé !");
