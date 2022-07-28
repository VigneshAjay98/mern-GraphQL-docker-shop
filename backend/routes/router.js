const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/api', async (req, res) => {
    res.send(`<h1 align="center">Backend for react!</h1>`)
})

router.get('*', async (req, res) => {
    // console.log(path.resolve(`./frontend/public/index.html`))
    res.sendFile(path.resolve(`./frontend/public/index.html`))
})

module.exports = router