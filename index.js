var mong = require("mongoose");
// mong.set('strictQuery', false);
console.log("trying to connect the node.js with mongodb");
mong.connect("mongodb://localhost:27017/node_js",(err)=>
            {
                if(err)
                {
                    console.log("error occured")
                }
                else
                {
                    console.log("connected succesfully")
                }
            })