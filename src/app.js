const express = require("express");
const app = express();
const { Restaurant, Menu, Item } = require("../models/index")
const { check, validationResult } = require("express-validator")


//TODO: Create your GET Request Route Below: 

// Helps parse the Request body that contains JSON objects
app.use(express.json())

// Helps parse the Request body with urlencoded()
app.use(express.urlencoded({extended: true}))




// READ - GET all restaurants
app.get("/restaurants", async (request, response) => {
    const restaurants = await Restaurant.findAll({
        include: Menu,
        include: [{
            model: Menu,
            include: [{
                model: Item
            }]
        }]
    })

    response.send(restaurants)
})

// READ - GET single restuarant 
app.get("/restaurants/:id", async (request, response) => {
    const id = request.params.id
    const restaurant = await Restaurant.findByPk(id)

    response.json(restaurant)
})

// CREATE - POST
app.post("/restaurants", [

    check("name").not().isEmpty().trim(),
    check("location").not().isEmpty().trim(),
    check("cuisine").not().isEmpty().trim()

], async (request, response) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        response.json({error: errors.array()})
    } else {
        const newResaurant = await Restaurant.create(request.body)
        response.json(newResaurant)
    }
    
   
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