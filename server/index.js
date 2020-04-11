const express = require('express')
const path = require('path')
const port = 3000

const app = express()

app.use(express.static(path.resolve(__dirname, 'public/')))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log('Front end service running')
})
