const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



// middleware 
app.use(cors());
app.use(express.json());




app.get('/',(req,res) => {
    res.send('Rhythmic music server is running')
})


app.listen(port ,() => {
    console.log(`Rhythmic music melody is running on port: ${port}`);
} )