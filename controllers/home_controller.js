module.exports.home1=function(req,res)
{
    return  res.render('home',{
        title:"Home"
    });
}
module.exports.home2=function(req,res)
{
    return  res.end("<h1>This is my 2nd action</h1>");
}