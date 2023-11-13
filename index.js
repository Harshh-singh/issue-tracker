const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const Project = require('./models/project_schema');

const Issue = require('./models/issue_schema');

let project_List = [];


const app = express();

app.use(express.urlencoded());

app.use(express.static('./assets'));


app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);


app.set('view engine' , 'ejs');
app.set('views', './views');


app.use('/', require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
});