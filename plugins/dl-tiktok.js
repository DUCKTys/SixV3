import { tiktok } from '../lib/tiktok.js'

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply(`Masukan URL!\n\nContoh:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Ka/`)
    if (!/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(args[0])) return m.reply('Invalid urls')
    await m.reply('_In Progress Please Wait..._')
    let { nickname, duration, description, play} = await tiktok(args[0])
    let caption = `
Nickname : ${nickname}
Duration : ${duration}

${description}
`.trim()
    let video = await conn.sendFile(m.chat, play, false, caption, m)
 }
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|tt)$/i
handler.limit = true
export default handler