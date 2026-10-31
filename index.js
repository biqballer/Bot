const express = require('express');
const app = express();
app.get('/', (req,res)=>{
res.send(`
<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
body{background:#0b1220;color:white;font-family:sans-serif;text-align:center;margin:0;padding:20px}
h1{color:#ffcc00}
#coin{width:200px;height:200px;border-radius:50%;background:radial-gradient(gold,yellow);border:5px solid white;font-size:22px;font-weight:bold;margin:20px auto;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 0 30px gold}
#coin:active{transform:scale(0.9)}
.card{background:#1a2744;border-radius:15px;padding:15px;margin:10px}
button{padding:12px 20px;border-radius:10px;border:none;background:#00d084;color:white;font-weight:bold;margin:5px}
#balance{font-size:32px;color:gold}
</style></head><body>
<h1>🎄 Christmas Carnival 🎅</h1>
<div id="balance">0</div><div>CC Coins</div>
<div id="coin" onclick="mine()">TAP TO MINE</div>
<div class="card">
<button onclick="daily()">🎁 Daily +500</button>
<button onclick="spin()">🎡 Spin Wheel</button>
</div>
<div class="card">
<b>👥 Invite Friends: Earn 20%!</b><br>
<button onclick="invite()">Copy Invite Link</button>
<p id="ref"></p>
</div>
<script>
let bal = parseInt(localStorage.getItem('bal')||'0');
let lastDaily = localStorage.getItem('daily')||'0';
document.getElementById('balance').innerText=bal;
function save(){localStorage.setItem('bal',bal);document.getElementById('balance').innerText=bal}
function mine(){bal+=10;save();navigator.vibrate&&navigator.vibrate(50)}
function daily(){
let now=Date.now();
if(now-lastDaily>86400000){bal+=500;lastDaily=now;localStorage.setItem('daily',now);save();alert('+500 Daily!')}else alert('Come tomorrow!')
}
function spin(){let win=Math.floor(Math.random()*5+1)*100;bal+=win;save();alert('You won '+win+'!')}
function invite(){
let link=location.href+'?ref='+Math.random().toString(36).substr(2,6);
navigator.clipboard.writeText(link);
document.getElementById('ref').innerText='Link copied: '+link;
alert('Invite link copied! Share to friends.');
}
let url=new URLSearchParams(location.search);
if(url.get('ref')){bal+=200;save();alert('Welcome! +200 bonus from friend!');}
</script>
</body></html>
`)
});
app.listen(process.env.PORT||3000);
});
  
