const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home spage')
      } 
})


server.listen(3000,()=>{

    console.log("Server running on 3000");

})