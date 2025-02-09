# MongoDB

Quelques données pour s'amuser avec MongoDB

Pour instancier le conteneur Docker
```
docker compose up -d
```

Pour charger les données de `persons.json`
```
docker exec -i mongo-container mongoimport --db formation --collection persons --file /shared/persons.json --jsonArray

```

Pour lancer un shell Mongo

```
docker exec -it mongo-container mongosh -u admin -p 123 --authenticationDatabase admin
```


