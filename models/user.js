const mongoose = require("mongoose");
const authRouter = require("../routes/auth");
const { productSchema } = require("./product");

const userSchema = mongoose.Schema({
    name:{
        required : true,
        type : String,
        trim : true,
    },
    email:{
        required : true,
        type : String,
        trim : true,
        validate: {
            validator: (value)=>{
                const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(re);

            },
            message: ' Please enter valid email address',
        }
    },
    password:{
        required : true,
        type : String,
        validate: {
            validator: (value)=>{
              return value.length> 6;

            },
            message: ' Please enter password more than 6 letters',
        }
        
       
    },
    adress:{
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    cart: [
        {
            product: productSchema,
            quantity:{
                type: Number,
                required: true
            } 
        }
    ],

});

const User = mongoose.model("User", userSchema);
module.exports = User;