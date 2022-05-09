const express = require('express')
const Router = express.Router()

//RouteFunctions import
const homeFunction = require('./route_functions/home')

Router.get('/', homeFunction)

module.exports = Router