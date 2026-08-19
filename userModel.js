// user schema

import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
    {
        name:{ 
            type:String,
            required:[true,"Please enter your name"],
            //  '      john      '
            trim: true, // remove extra space
            maxlength:[50,"Your name cannot be longer than 50 characters"] 


        },
        email:{ 
            type: String,
            required:[true,"Please enter email ID"],
            unique:true,
            lowercase:true, 
            trim:true,
            validate:[validator.isEmail,"Please enter valid email address"]
        },
        password:{ 
            type:String, 
            required:[true,"Please enter password"], 
            minlength:[6,"Your password must be longer than 6 characters"], 
            select:false
        },
        passwordConfirm:{ 
            type:String, 
            required:[true,"Please confirm your password"],
            validate:{ 
                validator:function(el) { 
                    return el == this.password 
                },
                message:"Password are not the same ! "
            }

        }, 
        phoneNumber:{ 
            type:String, 
            required:true,
            unique:true,
            trim:true, 

        }, 
        role: { 
            type:String, 
            enum:["user","admin"],
            default:"user"

        }, 
        avatar:{  
            url:{ type:String },
            public_id:{ type:String }
        },
        passwordChangedAt:{ 
            type:Date
        },
        passwordResetToken:{ 
            type:String,
            select:false ,
            index:true 

        }, 
        passwordResetExpires:{ 
            type:Date,
            select:false,

        },

    },

        { timestamps:true}
)
//settings to not pass in respone from server 

userSchema.set ("toJSON",{ 
transform:function(doc,ret){ 
    delete ret.password; 
    delete ret.passwordConfirm;
    delete ret.passwordResetToken;
    delete ret.passwordResetExpires;
    delete ret.__v;
    return ret;
}
})


  //password logic 
  //hashing 

  userSchema.pre("Save",async function(next){
    
  }