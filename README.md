# Shopify-Summer-22

### Run Locally

Make sure you have `docker` installed, I'm running `20.10.8` though most docker versions should be compatible.

As well make sure you have `git`, and `npm`. I'm running `git` version `2.31.1`, and `npm` version `6.14.5`.

Start by running mongo db locally, with the mongo image.
This can be done with the following command:

```
docker pull mongo
```

This command is to get the mongo image from the official Mongo repo on dockerhub.

Then we build the image with our own specfic credentials, say we want to run on port 27888 as thats where this API will look,
and specifying the db role and password as the following:

```
docker run -d  --name mongo-for-shopify  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```
Running the mongo image, does not need anything from our code, though these steps are also detailed in our repo under `/backend/db/mongo.sh`,
an sh file that runs the previous commands.

Now that our DB is running, we can set up the API. I've built the backend API in Node. Lets clone this repo, do this by running:

```
git clone https://github.com/bilalmalik4321/Shopify-Summer-22.git
```

Then we go into our app, by running:

```
cd shopify-backend-2022/backend
```

To install the modules and dependencies run: 

 ```
 npm i
 ```
 
 And then you can run the node server by:
 
 ```
 node server.js
 ```
 
 Finally we will run the front end of our app. The front end is placed in its own repo, and as part of the gneral monorepo here. 
 Clone into either a seperate directory or under `/frontend` the front end repo with:
 
 ```
 git clone https://github.com/bilalmalik4321/Shopify-Summer-22-frontend.git
 ```
 Now that we have the repo, from where we cloned the repo, cd into it with: 
 
 ```
 cd Shopify-Summer-22-frontend
 ```
 
 You will see a Dockerfile by running `ls`, we will build the front end app, which is placed in its own custom image.
 Start by building the image with:
 
 ```
 docker build -t shopify-challenge-frontend:latest .
 ```
 
 Or any other name you'd like instead of 'shopify-challenge-frontend'. 
 
 Once the image is built, we want to run the image, this will create a container, think of it as a small isolated environment where the app runs away from
 the host OS.
 
 To run our image:
 
 ```
 docker run -p 3000:3000 shopify-challenge-frontend:latest
 ```
 
 Where we run the image on port our computer port 3000 form the internal port of docker at 3000. If you want to chage the port, just chane the first
 port number before the colon ":" as that wil map to a new port on our machine. Please don't use 5000 as thats already being used by the Node app.
 
 Go to  `localhost:3000` and the inventory app is ready!
