const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const PORT = 3003
var multer  = require('multer')
// var upload = multer({ dest: 'images/' })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendStatus('200').send('Hello home apge')
})



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+ file.originalname)
    }
});
var upload = multer({storage: storage});

app.post('/save-product',upload.single('avatar'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
   
    res.send(`saved product successfully `)
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})