const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

var userDetails = [];
app.get('/signin', (req, res) => {
	userDetails.map((userDetail)=>{
		if(((req.query.userName === userDetail.userName) && (req.query.password === userDetail.password))){
			res.send({ express: 'Welcome ' + userDetail.userName });
			return;
		}
    });
  res.send({ express: req.query.userName + ' is not a valid user ' });
});

app.post('/signup', function (req, res) {
  userDetails.push(req.body);
  res.send({ express: 'Welcome ' + req.body.userName });
});

app.listen(port, () => console.log(`Listening on port ${port}`));