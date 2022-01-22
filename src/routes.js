const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

routes.post('/posts', multer(multerConfig).array('file'), (req, res) => {
    console.log(req.file);

    return res.json({ hello: "Upload" });
});
routes.get("/check", (req, res) => {
    res.send("ok teste");
});

module.exports = routes;