let handler = async (m, { conn, participants }) => {
let chat = global.db.data.chats[m.chat]
  if (!(m.chat in global.db.data.chats)) return m.reply('                   *[βππππβ]*\n\n*π΄πππ΄ π²π·π°π π½π» π΄πππ° ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π±π°ππ΄ π³π΄ π³π°ππΎπ!*')
 await conn.sendMessage(m.chat, { react: { text: 'π«‘', key: m.key } }) 
    if (chat.isBanned) return m.reply('                   *[βππππβ]*\n\n*π΄πππ΄ π²π·π°π ππ° π΄πππ° π±π°π½π΄π°π³πΎ*\n\n*ββ π΄π» π±πΎπ π½πΎ ππ΄π°π²π²πΈπΎπ½π°ππ° π° π½πΈπ½πΆππ½ π²πΎπΌπ°π½π³πΎ π·π°πππ° π³π΄ππ±π°π½π΄π°π π΄πππ΄ π²π·π°π*')
    chat.isBanned = true
    m.reply('                    *[βππππβ]*\n\n*π΄πππ΄ π²π·π°π π΅ππ΄ π±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ*\n\n*ββ π΄π» π±πΎπ π½πΎ ππ΄π°π²π²πΈπΎπ½π°ππ° π° π½πΈπ½πΆππ½ π²πΎπΌπ°π½π³πΎ π·π°πππ° π³π΄ππ±π°π½π΄π°π π΄πππ΄ π²π·π°π*')
}
handler.help = ['bangrupo']
handler.tags = ['owner']
handler.command = /^bangrupo$/i
handler.admin = true
export default handler
