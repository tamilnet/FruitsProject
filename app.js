const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
const fruitSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
const Fruit= mongoose.model("Fruit", fruitSchema);
const fruit= new Fruit({
  name: "Apple",
  rating: 9,
  review: "Good choice to eat when we are hungry!"
});
/*fruit.save();*/
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person= mongoose.model("Person", personSchema);
const person= new Person({
  name: "Arul",
  age: 36
});
person.save();
const kiwi= new Fruit({
  name : "Kiwi",
  rating: 5,
  review: "Less in taste."
});
const mango= new Fruit({
  name: "Mango",
  rating: 10,
  review: "King of fruits."
});
Fruit.insertMany([kiwi,mango], function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB.")
  }
});