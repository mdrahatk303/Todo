module.exports.post=function(req,res)
{
    return res.end('<h1>this is first posting</h1>');
}
module.exports.posted=function(req,res)
{
    return res.end('<h1>this is first posted</h1>');
}