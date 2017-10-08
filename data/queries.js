const cupcakes = require('./cupcakes')

function getOneCupcake(id) {
  for(var i = 0; i < cupcakes.length; i++) {
    if(cupcakes[i].id == id) {
      return cupcakes[i]
    }
  }
}

function addVote(id, vote) {
  var sum = 0;
  for(var i = 0; i < cupcakes.length; i++) {
    var cupcake = cupcakes[i];
    if(cupcake.id == id){
      cupcake.ratings.push(vote)
      for(var j = 0; j < cupcake.ratings.length; j++) {
        sum += cupcake.ratings[j]
      }
      var total = sum/cupcake.ratings.length;
      cupcake.averageRating = Math.round(total*100)/100;
    }
  }
}

module.exports = {
  getOneCupcake: getOneCupcake,
  addVote: addVote
}
