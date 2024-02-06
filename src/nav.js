const express = require('express');
const app = express();

app.get("/", (req, res) => {
    // Single json in response
    // res.send('<h4>Welcome to my home page</h4>');

    // Multiple json file add in response
    // res.write("Welcome to my home page");
    // res.write("<h3>Welcome to my home page again</h3>");
    // res.send();

    //Send json in response
    res.send({
        id:1,
        name: "Sunny"
    });
    
});
app.get("/about", (req, res) => {
    res.send('Welcome to About page');
});
app.get("/contact", (req, res) => {
    res.send('Welcome to Contact Page');
});
app.get("/temp", (req, res) => {
    res.send('Welcome to Temp Page');
});

app.listen(8000, () => {
    try {
        console.log("Yes server working");
    }catch(error) {
        console.error(error);
    }
});