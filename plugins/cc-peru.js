import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
await conn.sendMessage(m.chat, { react: { text: 'ð', key: m.key } })  
await m.reply(global.wait)
let text = `*-11.562800,-77.270000*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'âðð¨ð¨ð«ððð§ðððâ',
body: 'â¦ÒÍ¡Íâ³ð»ð²ð¥ð¬ð°ð±â¢ââÍ¡ÍÛÛÛ£ð¹',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}}) 
}
handler.command = /^(perÃº)/i
handler.register = true
handler.limit = 2
export default handler
