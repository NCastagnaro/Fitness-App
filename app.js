//imports
const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// //messagerino from fitnessCode.js file
// const message = require('/fitNodeEJS/public/js')



//creates connection to MySql database
let connection = mysql.createConnection({
    host:'localhost',
    database:'fitness',
    user:'root',
    password:'root',
	multipleStatements: true //This allows us to perform multiple mysql queries for one request
});

//Allows us to use body-parser
app.use(bodyParser.urlencoded({extended:true}));

//Static Files, grants access to the css(main.css file),image and js (fitnessCode.js file) in the public folder
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/images',express.static(__dirname + 'public/images'))
app.use('/js',express.static(__dirname + 'public/js'))


//Set Views
app.set('views', './views')
app.set('view engine','ejs')


app.get('/', function(req,res){
	//Find count of users in DB
	let q = 'SELECT COUNT(*) AS count FROM nutrition';
	connection.query(q, function(err,results){
		if(err) throw err;
		let count = results[0].count;
		console.log(count);
		//res.send(`We have ${count} users in our DB`)
		res.render('index', {data:count});
		module.exports = {countVal:count}
	});
});




app.get('/testing', function(req,res){
	//Find count of users in DB
	let q1 = 'SELECT meal FROM nutrition2 WHERE meal = "Steak with potatoes"; SELECT * FROM nutrition2;SELECT calories FROM nutrition';
	connection.query(q1, function(err,results){
		if(err) throw err;
		let meal = results[1].meal;
		res.render('index', {data:meal});
		console.log(results)
		console.log(results[0][0].meal);
		console.log(results[1][3].meal);
		console.log(results[2][4].calories);
	});
});


app.post('/register', function(req,res){
	let person = {
		user_id: req.body.userID,
        calories: req.body.calorieCount
    // console.log(req.body);
    };	
	connection.query('INSERT INTO nutrition set ?', person, function(err,result){
		if(err) throw err;
        res.redirect('/');
	});
});

//testing submitting breakfast info into mysql 
app.post('/', function(req,res){
	let macroValues = {
		meal:req.body.meal,
		protein:req.body.protein,
		carbs:req.body.carb,
		fats:req.body.fat
    // console.log(req.body);
    };	
	connection.query('INSERT INTO nutrition2 set ?', macroValues, function(err,result){
		if(err) throw err;
        res.redirect('/');
	});
});






//Listen on port 3000
app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})








