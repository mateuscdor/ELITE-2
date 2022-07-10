import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
┌─⊷ *❗SUBISTE DE NIVEL❗*
▢ Nivel anterior : *${before}*  
▢ Nivel actual : *${user.level}*
└──────────────
*🤖 Cuanto más interactúes con el bot , mayor será tu nivel,escribe .nivel para verificar.*`.trim())
    }
}
export const disabled = false
