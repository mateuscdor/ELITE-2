import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, isStaff, text, usedPrefix }) => {
  await conn.sendMessage(m.chat, { react: { text: 'β¨', key: m.key } })
  if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*.play <contenido>*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await m.reply(global.wait)
  await conn.sendHydrated(m.chat, `
βββββββββββββββ
β’ π *TITULO:* ${title}
β’ π *DESCRIPCION:* ${description}
β’ π *PUBLICADO:* ${publishedTime}
β’ β±οΈ *DURACION:* ${durationH}
β’ π *VISTAS:* ${viewH}
βββββββββββββββ
  `.trim(), author, thumbnail, `${url}`, 'YOUTUBE', null, null, [
    ['πΆ MUSICA.', `${usedPrefix}yta ${url} yes`],
    ['π₯ VIDEO.', `${usedPrefix}ytv ${url} yes`],
    ['π¦ EXTRA.', `${usedPrefix}play2 ${text}`]
  ], m)
}catch(e){
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')
console.log(e)
}}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play?$/i
handler.register = true
handler.limit = 2
export default handler
