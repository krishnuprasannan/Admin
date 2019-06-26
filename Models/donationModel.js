const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');


const donationSchema = new Schema({
    name: {
        type:String
    },
    contactNumber: {
        type:Number
    },
   email: {
       type:String
    },
    amount: {
        type:Number
    },
    cause: {
        type:String
    },
    timestamp: {
        type: String, 
        default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    },
    transactionID: {
          type:String
       }
       ,
    orderID: {
           type:String
        }
       
})

module.exports = mongoose.model('donations', donationSchema);

