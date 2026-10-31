const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<body style="background:#0a1222;color:white;text-align:center;font-family:sans-serif;padding:20px"><h1 style="color:gold">🎄 Christmas Carnival 🎅</h1><h1 id=b style="color:gold">0</h1><p>CC Coins</p><button onclick="b.innerText=parseInt(b.innerText)+10" style="width:200px;height:200px;border-radius:50%;background:gold;font-size:20px;font-weight:bold">TAP TO MINE</button><br><br><button onclick="b.innerText=parseInt(b.innerText)+500;alert(\'+500\')" style="padding:12px;background:#00d084;color:white;border-radius:10px">Daily Bonus</button> <button onclick="let w=Math.floor(Math.random()*500);b.innerText=parseInt(b.innerText)+w;alert(\'Won \'+w)" style="padding:12px;background:orange;color:white;border-radius:10px">Spin Wheel</button><br><br><button onclick="alert(\'Link copied!\')" style="padding:12px">Invite Friends</button></body>');
});
app.listen(process.env.PORT || 3000);
