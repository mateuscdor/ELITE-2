let handler = async (m, { conn, text}) => {
await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key } })  
await m.reply(global.wait)
if (!text) throw '*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π°π»πΆππ½ ππππ°ππΈπΎ*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π°π»πΆππ½ ππππ°ππΈπΎ*'
let users = global.db.data.users
users[who].banned = true
let name = await conn.getName(m.sender)
conn.reply(m.chat, `        *β USUARIO BANEADO β*\n\nβββββββββββββββββββββββ\n\n*β’ Registrado en blocklist.*\n*β’ No accede a comandos.*\n*β’ BOT ignora a :*\n    ${name}. \n\nβββββββββββββββββββββββ\n\n*β’ATTE: ππ’π§ ${gt}*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^block$/i
handler.rowner = true
export default handler
