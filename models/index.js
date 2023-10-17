const Restaurant = require('./Restaurant')
const Menu = require("./Menu")
const Item = require("./Item")

// Associations

// One To Many Relationship
Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)

// Many to Many Relationship
Item.belongsToMany(Menu, ({through: "item-menu"}))
Menu.belongsToMany(Item, ({through: "item_menu"}))

module.exports = {
    Restaurant,
    Menu,
    Item
}