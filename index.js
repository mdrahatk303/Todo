const express=require('express');


//Running on port 8000
const port=8000;
const app=express();

//express-ejs-layouts
// const layout=require('express-ejs-layouts');
// app.use(layout);
// app.set('layout extractStyles',true);
// app.set('layout extractStyles',true);

//connecting to database
const db=require('./config/mongoose');

//setting view engine
app.set('view engine','ejs');
app.set('views','./views');

//using express router
app.use(express.urlencoded());
app.use('/',require('./routes'));

//Adding static file i.e CSS file
app.use(express.static('assets'));


//Listening the request of running server
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})