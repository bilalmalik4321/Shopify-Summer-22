# set up DB with the following commands
docker pull mongo
docker run -d  --name mongo-for-shopify  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
