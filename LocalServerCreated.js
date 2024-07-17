const libexpress = require('express')()


libexpress.use((req,res)=>{


    res.send("Local Server Created.....")

})

libexpress.listen(4000)