const express = require('express');

//create your app
app = express();

app.use(express.static('public'))
app.listen(3000 , () => {

    console.log("I am running on port 3000");
})
