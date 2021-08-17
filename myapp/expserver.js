let express=require("express")
let  path= require("path")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const routesurls=require("./routes/route")
const cors= require("cors")
const app=express()

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesurls) 

// let bodyParser=require("body-parser")

// const app = express()
// app.use('/',express.static(path.join(__dirname,'static')))

// app.post('/api/register',async (req,res)=>{
//     console.log(req.body)
// })

app.listen(4000,()=>{
    console.log('server up at 4000')
})

// app.get("/",function(res,req){ 
//     res.send
// })
