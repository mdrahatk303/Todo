module.exports.user=function(req,res)
{
    return res.render('user',
    {
        title:"User"
    });
}

module.exports.play=function(req,res)
{
    return res.end('<h1>This is user play</h1>');
}