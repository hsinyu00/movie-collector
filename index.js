const PORT = 8000
const cheerio = require('cheerio')
const express = require('express')
const axios = require('axios')

const app = express()

const url = 'https://www.theguardian.com/uk'

app.get('/', function(req, res){
    res.json('This is web scraper')
})

app.get('/results', function(req, res){
    axios(url)
    .then(response => {
        const html = response.data
        
        // console.log(html)
        const $ = cheerio.load(html)
        const articles = []
        $('#container-news li .dcr-kk8k87', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        // console.log(articles)
        res.json(articles)
    }).catch(err=>console.log(err))
})


app.listen(PORT, ()=>console.log(`server running on PORT ${PORT}`))