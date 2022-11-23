const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello World',
        status: 'success'
    })
})

app.listen(() => {
    console.log(`[APPLICATION RUNNING] ON PORT ${port}`)
});
