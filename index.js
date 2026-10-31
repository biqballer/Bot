const express = require('express');
const app = express();
app.get('/', (req,res)=>{
res.send(`
<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap" rel="stylesheet"><style>
*{font-family:Fredoka,Arial}body{margin:0;background:radial-gradient(circle at top,#1a2a4a,#060d1f);color:white;min-height:100vh}
.top{padding:20px;display:flex;justify-content:space-between;align-items:center}
.balBox{background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:12px 20px}
.bal{font-size:32px;color:#ffde59;font-weight:800}
.coinWrap{display:flex;justify-content:center;margin-top:30px}
#coin{width:260px;height:260px;background:radial-gradient(circle at 30% 30%,#ffe98a,#ffb700 40%,#ff8a00);border-radius:50%;border:8px solid #fff3;box-shadow:0 0 60px rgba(255,215,0,.6),inset 0 0 20px rgba(255,255,255,.6);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#000;cursor:pointer;animation:float 3s ease-in-out infinite;user-select:none}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
#coin:active{transform:scale(.93)}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:20px}
.card{background:linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:16px}
.btn{width:100%;padding:14px;border-radius:14px;border:0;font-weight:800;font-size:15px;margin-top:8px;cursor:pointer}
.green{background:linear-gradient(135deg,#00e676,#00b248);color:white}
.orange{background:linear-gradient(135deg,#ff9100,#ff3d00);color:white}
.blue{background:linear-gradient(135deg,#448aff,#2962ff);color:white}
.pill{display:inline-block;background:rgba(255,222,89,.2);color:#ffde59;padding:4px 10px;border-radius:20px;font-size:12px;margin-bottom:6px}
</style></head><body>
<div class="top"><div><span class="pill">🎄 SEASON 1 LIVE</span><div style="font-size:22px;font-weight:800">Christmas Carnival</div></div><div class="balBox"><div style="font-size:12px;opacity:.7">TOTAL CC</div><div class="bal" id="b">0</div></div></div>
<div class="coinWrap"><div id="coin" onclick="tap()">TAP TO MINE</div></div>
<div style="text-align:center;margin-top:12px;opacity:.7">Energy: <span id="e">100</span>/100 ⚡</div>
<div class="stats">
<div class="card"><div>🎁 Daily Reward</div><div style="font-size:12px;opacity:.6">Claim every 24h</div><button class="btn green" onclick="daily()">Claim +500</button></div>
<div class="card"><div>🎡 Lucky Wheel</div><div style="font-size:12px;opacity:.6">Spin & Win</div><button class="btn orange" onclick="spin()">Spin Now</button></div>
<div class="card"><div>👥 Refer Friends</div><div style="font-size:12px;opacity:.6">Earn 20% commission</div><button class="btn blue" onclick="invite()">Invite & Earn</button></div>
<div class="card"><div>🏆 League</div><div style="font-size:12px;opacity:.6">Top miners</div><button class="btn" style="background:rgba(255,255,255,.1);color:white">Bronze III</button></div>
</div>
<div id="toast" style="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:white;color:black;padding:10px 20px;border-radius:30px;font-weight:700;display:none"></div>
<script>
let bal=parseInt(localStorage.getItem('cc')||'0');let en=100;
let last=parseInt(localStorage.getItem('daily')||'0');
document.getElementById('b').innerText=bal.toLocaleString();
function toast(t){let x=document.getElementById('toast');x.innerText=t;x.style.display='block';setTimeout(()=>x.style.display='none',2000)}
function tap(){if(en<=0){toast('⚡ No energy!');return}bal+=10;en--;localStorage.setItem('cc',bal);document.getElementById('b').innerText=bal.toLocaleString();document.getElementById('e').innerText=en;if(navigator.vibrate)navigator.vibrate(20)}
setInterval(()=>{if(en<100){en++;document.getElementById('e').innerText=en}},2000);
function daily(){let now=Date.now();if(now-last>86400000){bal+=500;last=now;localStorage.setItem('daily',now);localStorage.setItem('cc',bal);document.getElementById('b').innerText=bal.toLocaleString();toast('🎁 +500 Claimed!')}else toast('⏰ Come tomorrow!')}
function spin(){let w=(Math.floor(Math.random()*5)+1)*100;bal+=w;localStorage.setItem('cc',bal);document.getElementById('b').innerText=bal.toLocaleString();toast('🎡 You won '+w+' CC!')}
function invite(){let l=location.href.split('?')[0]+'?ref='+Math.random().toString(36).slice(2,6);navigator.clipboard.writeText(l);toast('📋 Invite link copied!')}
let u=new URLSearchParams(location.search);if(u.get('ref')){bal+=200;localStorage.setItem('cc',bal);toast('🎉 +200 Referral Bonus!')}
</script></body></html>
`);
});
app.listen(process.env.PORT||3000);
