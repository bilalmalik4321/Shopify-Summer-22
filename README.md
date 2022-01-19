# Shopify-Summer-22

This repo holds the backend implementation of the Shopify challenge, and acts as a monrorepo for the frontend code. The frontend repo subrepo can be found [here](https://github.com/bilalmalik4321/Shopify-Summer-22-frontend).

This application has all CRUD operations as well as an additional feature of exporting the inventory as a `csv`.


## Run Locally

#### Pre-requisute

Make sure you have `docker` installed, I'm running `20.10.8` though most docker versions should be compatible.

As well make sure you have `git`, and `npm`. I'm running `git` version `2.31.1`, and `npm` version `6.14.5`.

#### Steps

0. Start by running mongo db locally, with the mongo image.
This can be done with the following command:

```
docker pull mongo
```

This command is to get the mongo image from the official Mongo repo on dockerhub.

2. Then we build the image with our own specfic credentials, say we want to run on port 27888 as thats where this API will look,
and specifying the db role and password as the following:

```
docker run -d  --name mongo-for-shopify  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```
Running the mongo image, does not need anything from our code, though these steps are also detailed in our repo under `/backend/db/mongo.sh`,
an sh file that runs the previous commands.

3. Now that our DB is running, we can set up the API. I've built the backend API in Node. Lets clone this repo, do this by running:

```
git clone https://github.com/bilalmalik4321/Shopify-Summer-22.git
```

4. Then we go into our app, by running:

```
cd shopify-backend-2022/backend
```

5. To install the modules and dependencies run: 

 ```
 npm i
 ```
 
 6. And then you can run the node server by:
 
 ```
 node server.js
 ```
 
 7. Finally we will run the front end of our app. The front end is placed in its own repo, and as part of the gneral monorepo here. 
 Clone into either a seperate directory or under `/frontend` the front end repo with:
 
 ```
 git clone https://github.com/bilalmalik4321/Shopify-Summer-22-frontend.git
 ```
 8. Now that we have the repo, from where we cloned the repo, cd into it with: 
 
 ```
 cd Shopify-Summer-22-frontend
 ```
 
 9. You will see a Dockerfile by running `ls`, we will build the front end app, which is placed in its own custom image.
 Start by building the image with:
 
 ```
 docker build -t shopify-challenge-frontend:latest .
 ```
 
 Or any other name you'd like instead of 'shopify-challenge-frontend'. 
 
 10. Once the image is built, we want to run the image, this will create a container, think of it as a small isolated environment where the app runs away from
 the host OS.
 
 To run our image:
 
 ```
 docker run -p 3000:3000 shopify-challenge-frontend:latest
 ```
 
 Where we run the image on port our computer port 3000 form the internal port of docker at 3000. If you want to chage the port, just chane the first
 port number before the colon ":" as that wil map to a new port on our machine. Please don't use 5000 as thats already being used by the Node app.
 
 Go to  `localhost:3000` and the inventory app is ready!
 
 ## How to use the App
 
 The application will start with an 'Inventory Item' header, and two buttons 'Add Inventory Item', 'Export to CSV'.
 It will look like the following image:![8510AB4D-AD88-4B9B-ACE9-5186A2E76AAD](https://user-images.githubusercontent.com/45467181/150185006-33f593c8-da7b-46ea-a2f5-838aa7100f28.jpeg)

 This is because we havent added any inventory to our database. 
 
 #### Add Inventory item
 
 To do this press the 'Add Inventory Item' button.
 You will be routed to a new page with 'add' as header, where you can put in information for the new item, things like the items name, quantity and price.
 Fill the form with the pertaining information for the inventory item.
 
 Your form will look something like this:
 
 ![43E69AC6-319D-47D9-BA5A-40F1552E5F87](https://user-images.githubusercontent.com/45467181/150206113-dcb89d0b-8a11-4d01-93c5-ea556a9bc6c9.jpeg)


 You can now either cancel, creating the item, or submit it. Let's submit so we have our first inventory item to work with in the inventory screen.
 
 #### Read Inventory items
 
 You'll be routed back to the homescreen where you can see a new inventroy item, with the inforamtion displayed, and two buttons next to its name, 'update'
 and 'delete'.
 
![F3FBB4E7-AA15-4725-A556-343EDD3790DF](https://user-images.githubusercontent.com/45467181/150206275-aafe6c13-602b-48d4-8376-3299aa43f65a.jpeg)

 
  #### Update Inventory item
 
 Let's update the contents of the item, press update, and you will be routed to a new screen with titled. You can see the prefilled value as the current
 value for the item. Lets increase the quantity of our item, by pressing the up arrow where our 'Item Quantity' input is. If we press cancel, the changes will 
 not occur and ofcourse if we submit, then we'll see the update to our inventory item. Lets press 'Submit'.
 
 Will be routed back to the inventory screen where we can see the changes to the inventory item. In my case, my item looks like so:
 
 ![5A1068CC-5371-4C51-93CD-E1EBA96C32D4](https://user-images.githubusercontent.com/45467181/150206498-57679fc5-6138-4b16-b1c1-537478a5598e.jpeg)


#### Export Inventory items to CSV

Lets export the items as a csv! Press the 'Export to CSV' button and you will get a downloaded csv file. Open to see all your inventory items. The button looks 
like so:

 ![C198F646-F7EB-4853-9237-AC4151C5CC06_4_5005_c](https://user-images.githubusercontent.com/45467181/150200510-9966a215-8eff-4620-b4d9-3b39cff2a4b1.jpeg)

#### Delete Inventory item

Now let's delete the inventory item. In the home page where we see our list of items, press the delete button next to the item. The button looks like the 
following:

![7F0F1512-0817-410C-B5FA-D2B281902564_4_5005_c](https://user-images.githubusercontent.com/45467181/150201305-c2e003a2-f143-4d55-9866-18cb32fbc6c1.jpeg)

You'll now see your inventory item list update, with item dissapearing.
 
