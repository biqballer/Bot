const express = require('express');
const app = express();
app.get('/', (req,res)=>{
res.send('<h1 style="text-align:center;margin-top:100px">🎄 Christmas Carnival Works! 🎅<br><br><button onclick="alert(\'+10 added\')" style="width:200px;height:200px;border-radius:50%;background:gold;font-size:20px">TAP TO MINE</button></h1>')
});
app.listen(process.env.PORT||3000);
