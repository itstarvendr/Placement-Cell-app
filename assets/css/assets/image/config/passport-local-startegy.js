// const mongoose = require('mongoose');
// async function main(){
//     await mongoose.connect('mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/placementcell?retryWrites=true&w=majority');
//     console.log("connection Successfull !! ");
// }
// main().catch(error =>console.log("connection not successfull !!"));
// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// const mongoDB = "mongodb+srv://user1:Mirzapur@1@cluster0.nqv5wfv.mongodb.net/?retryWrites=true&w=majority"; 
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   console.log('connected');
// }



const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://user1:user1@cluster0.gaqmv3e.mongodb.net/PLACEMENT?retryWrites=true&w=majority"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected');
}
