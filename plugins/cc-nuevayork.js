import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })  
await m.reply(global.wait)
await m.reply(global.rec)
let text = `*40.770418,-73.97463*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❗𝐂𝐨𝐨𝐫𝐝𝐞𝐧𝐚𝐝𝐚❗',
body: '✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}}) 
}
handler.command = /^(newyork)/i
handler.register = true
handler.limit = 2
export default handler
