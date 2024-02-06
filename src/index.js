// To create new file with CMD  = type nul > filename
// To delete file with CMD  = del file name
// To Save partial folder or other folder in automatically nodemon


const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
/*** Used for show Html file from Public folder ***/
const staticPath = path.join(__dirname, '../public');
app.use("/", express.static(staticPath));

// app.get("/", (req, res) => {
//     res.send('Hello World');
// });

/*** Show the content of View Engine (HBS) ***/
// Set view engine
app.set('view engine', 'hbs');
// Set any folder name rather than view
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// Template engine route
app.get("", (req, res) => {
    res.render("index", {
        dynamicName :"Sunny"
    });
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: 'Opps this about page could not be found'
    });
});
//add 404 page not found route
app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: "Opps Page couldn't be found!"
    })
});

app.listen(8000, () => {
    try {
        console.log("Yes server working");
    }catch(error) {
        console.error(error);
    }
});