const express = require('express')
const app = express()

const path = require("path")
const csvFilePath = path.join(__dirname, "data", "สำเนาของ Cyclone blockage TS6 ทุ่งสง - Cyclone blockage TS6 ทุ่งสง.csv");
const csv = require('csvtojson')

var delayInMilliseconds = 10000; //1 second

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

app.use(express.json())
app.use(express.urlencoded())

app.get('/get', (req, res) => {
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		/*
		for(let i=0; i<jsonObj.length; i++){
			sleep(delayInMilliseconds)
			//res.send(jsonObj[i])
		}
		*/
		let data = []
		for(let i=0; i<1000; i++){
			data.push(jsonObj[i])
		}
		res.send(data)
		
	})
})

app.post('/post', (req, res) => {
	console.log(req.body)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
