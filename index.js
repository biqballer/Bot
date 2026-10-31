const express = require('express');
const { Telegraf, Markup } = require('telegraf');
const app = express();
const BOT_TOKEN = process.env.BOT_TOKEN;
const GAME_URL = 'https://bot-shfr.onrender.com';
let bot;
if(BOT_TOKEN){
  bot = new Telegraf(BOT_TOKEN);
  bot.start((ctx)=>{
    ctx.reply('🎄 *Christmas Carnival - Season 1 is LIVE!* 🎅\n\n💰 Mine CC Coins\n🎡 Spin & Win\n👥 Invite Friends - Earn 20%\n\n👇 Tap Play to Start Earning:',{
      parse_mode:'Markdown',
      ...Markup.inlineKeyboard([[Markup.button.webApp('🎮 Play Carnival', GAME_URL)]])
    })
  });
  bot.launch().then(()=>console.log('Bot Launched'));
}

app.get('/',(req,res)=>{
res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Fredoka,sans-serif}
body{background:#070b18;color:#fff;overflow:hidden;height:100vh;display:flex;flex-direction:column}
.top{padding:16px 20px;display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.08)}
.bal{font-size:28px;font-weight:700;color:#ffde59}
.bal-sub{font-size:11px;opacity:0.6;letter-spacing:1px}
.pill{background:linear-gradient(90deg,#ff8a00,#ffde59);color:#000;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700}

.main{flex:1;overflow-y:auto;padding-bottom:90px}
.tab{display:none;padding:20px;animation:fade .3s}
.tab.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

/* MINE */
.coinWrap{display:flex;justify-content:center;margin:20px 0;position:relative}
#coin{width:250px;height:250px;background:radial-gradient(circle at 30% 30%,#fff7c0,#ffca28 35%,#ff8f00 70%);border-radius:50%;border:10px solid rgba(255,255,255,0.15);box-shadow:0 0 80px rgba(255,202,40,.5),inset 0 0 30px rgba(255,255,255,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#000;font-weight:800;cursor:pointer;user-select:none;transition:transform .1s}
#coin:active{transform:scale(.92)}
#coin span:first-child{font-size:50px}
.energy-bar{height:10px;background:rgba(255,255,255,0.1);border-radius:20px;overflow:hidden;margin:10px 0}
.energy-fill{height:100%;background:linear-gradient(90deg,#00e676,#00c
