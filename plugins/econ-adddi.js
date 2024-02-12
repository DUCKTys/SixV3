//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Tag Orangnya'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Masukkan jumlah *Berlian* yang ingin Anda tambahkan'
    if (isNaN(txt)) throw '🔢 hanya angka'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Minimal *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 DITAMBAHKAN*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Apakah kamu menerimanya? \n\n *+${dmt}* berlian`, who, m.text)
}

handler.help = ['addb <@user>']
handler.tags = ['econ']
handler.command = ['addb'] 
handler.rowner = true

export default handler

