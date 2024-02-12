let handler = async (m, { text, conn }) => {
let user = global.db.data.users[m.sender]
m.reply(`
	Hai ${conn.getName(m.sender)} 
	Bot sedang aktif, ada yg bisa saya bantu?`
	}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler
