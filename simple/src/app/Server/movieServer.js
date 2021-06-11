const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const app = express();
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = {};
db.mongoose = mongoose;
db.url = "mongodb+srv://alex:drew@cluster0.mg02w.mongodb.net/mydb?retryWrites=true&w=majority"
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!")
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})

const Movie = mongoose.model("Movies", mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    genre: String,
    ratingRT: Number,
    posterPath: String,
}))


app.get("/api/movies", (req, res) => {
    Movie.find().then(data => {
        res.send(data);
        console.log(data)
    }).catch(err => {
        res.status(500).send({
            message: "error retrieving Movies"
        })
    })
})
app.post("/api/movie", (req, res)=>{
    movies = req.body
    console.log(req.body)

    Movie.insertMany(movies).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:"could not add"})
    })
})




const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
