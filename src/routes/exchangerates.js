const express = require('express')
const exchangeRatesRouter = express.Router()
const axios = require('axios')

exchangeRatesRouter.get('', async(req, res) => {
    try {
        // send request to endpoint
        // for debugging you can add "format=1" as a parameter in the URL
        const currency = await axios.get(`http://apilayer.net/api/live?access_key=c92b0e664f8dd7743333fed2f42fd6c9`)
    
        // ------if you need to get keys and values into different containers-----
        // const exchangeName  = Object.keys(currency.data.quotes)
        // const exchangeRates = Object.values(currency.data.quotes)
        // exchangeName.forEach(element => console.log(element));
        // exchangeRates.forEach(element => console.log(element));

        // send data to exchangerates page
        // res.render('exchangerates', { exeNames : exchangeName, exeRates: exchangeRates })
        // ---------------------------------------------------------------------------
        
        // send only the quotes object elements
        // data is the JSON response and quotes is the object we need to parse
        res.render('exchangerates', { rates : currency.data.quotes })        

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

module.exports = exchangeRatesRouter