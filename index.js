const express=require('express');
const app=express();
const port=8000;

//using express router
app.use('/',require('./routes'));

//setting view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})