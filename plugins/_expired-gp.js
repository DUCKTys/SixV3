
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `Bot Meninggalkan Grup *${this.user.name}* Karena Batas Waktu Sewa Bot Sudah Berakhir \n\nNote: Jangan Lupa Sewa Lagi Yaa, Nanti Di Kasih Gratis 2 Kali Penyewaan Jasa Bot`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
