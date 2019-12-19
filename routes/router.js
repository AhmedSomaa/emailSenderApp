// create a router
const router = function(api){
    api.post('/test', function(req, res){
        var email = req.body.email;
        res.json({
            "msg": "success from back-end",
            "email": email
        })
    });
}

module.exports = router;