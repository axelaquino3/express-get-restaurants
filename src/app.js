const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

// Helps parse the Request body that contains JSON objects
app.use(express.json())

// Helps parse the Request body with urlencoded()
app.use(express.urlencoded())

app.get("/restaurants", async (request, response) => {
    const restaurants = await Restaurant.findAll()

    response.send(restaurants)
})


// READ - GET
app.get("/restaurants/:id", async (request, response) => {
    const id = request.params.id
    const restaurant = await Restaurant.findByPk(id)

    response.json(restaurant)
})

// CREATE - POST
app.post("/restaurants", async (request, response) => {
    const newResaurant = await Restaurant.create(request.body)
    response.json(newResaurant)
})

// UPDATE - PUT/PATCH
app.put("/restaurants/:id", async (request, response) => {
    const id = request.params.id
    const updateRestaurant = await Restaurant.update(request.body, {
        where: {
            id: id
        }
    })
    response.json(updateRestaurant)
})


// DELETE - DESTROY
app.delete("/restaurants/:id", async (request, response) => {
    const id = request.params.id
    const deleteRestaurant = await Restaurant.destroy({
        where:{
            id : id
        }
    })

    response.json(deleteRestaurant)
})


module.exports = app;