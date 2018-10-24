require('dotenv-extended').load();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(process.env.USER))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



require('dotenv-extended').load();
