const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
const fruitSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
const Fruit= mongoose.model("Fruit", fruitSchema);
const fruit= new Fruit({
  // name: "Apple",
  rating: 9,
  review: "Good choice to eat when we are hungry!"
});
 //fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person= mongoose.model("Person", personSchema);
const person= new Person({
  name: "Arul",
  age: 36
});
//  person.save();
// const kiwi= new Fruit({
//   name : "Kiwi",
//   rating: 5,
//   review: "Less in taste."
// });
// const mango= new Fruit({
//   name: "Mango",
//   rating: 10,
//   review: "King of fruits."
// });
// Fruit.insertMany([kiwi,mango], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB.")
//   }
// });
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    // mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
// Fruit.updateOne({_id: "62a710256d9dd438df93ab8d"}, {name: "Apple"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated!");
//   }
// });
Fruit.deleteOne({name: "Apple"}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Deleted Successfully.");
  }
});