const express = require('express')
const dashboardRouter = express.Router()

dashboardRouter.get('/', async(req, res) => {
    try {
        res.render('dashboard') 
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
})

module.exports = dashboardRouter