const express = require('express');
const cupcakes = require('./data/cupcakes');
const queries = require('./data/queries');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req,res)=>{
  res.render('index', {
    cupcakes: cupcakes
  })
})

app.get('/cupcakes/:id', (req,res) =>{
  const id = req.params.id;
  const getOneCupcake = queries.getOneCupcake(id)
  res.render('oneCupcakePage', {
    getOneCupcake: getOneCupcake
  })
})

app.post('/cupcakes/ratings/:id', (req, res) => {
  const id = req.params.id;
  const vote = Number(req.body.vote);

  queries.addVote(id, vote)
  res.redirect('/');
})

app.listen(3000, (req,res)=>{
  console.log(`It's working!`)
})
