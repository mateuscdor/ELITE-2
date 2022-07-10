let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*𝙽𝚘 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!*_\n\n*${usedPrefix}mulaiabsen* - 𝙿𝚊𝚛𝚊 𝚎𝚖𝚙𝚎𝚣𝚊𝚛`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*❗Estas presente.*'
    absen.push(m.sender)
    m.reply(`*✨ Presente.*`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀 」*
𝙵𝚎𝚌𝚑𝚊: ${date}
${conn.absen[id][2]}
┌〔 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝚂𝙸𝚂𝚃𝙴𝙽𝙲𝙸𝙰 〕
│ 
├ Total: ${absen.length}
${list}
└────
`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['presente']
handler.tags = ['absen']
handler.command = /^(absen|presente)$/i
handler.group = true
export default handler
