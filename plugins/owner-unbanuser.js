let handler = async (m, {conn, text}) => {
  if (!text) throw "*⏤͟͟͞͞🍓ESTE USUARIO "m.sender" FUE DESBANEADO CON ÉXITO, YA PUEDE  USAR CURIOSITYBOT-MD*"
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw "*⚠️ INGRESA EL @tag DE ALGUN USUARIO*"
  let users = global.db.data.users
  users[who].banned = false
  conn.reply(m.chat, `*⚠️LO USO MAL *\n💡 Ejemplo .unbanuser azami`, m)
}
handler.help = ["unbanuser"]
handler.tags = ["owner"]
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
