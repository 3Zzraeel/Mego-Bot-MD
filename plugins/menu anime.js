let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

*❐..≼قسم الانمي≽*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❐..🔮╎❯ .فانرت⌉
❐..🔮╎❯ .هوسبو⌉
❐..🔮╎❯ .كانا⌉
❐..🔮╎❯ .ميغومين⌉
❐..🔮╎❯ .نيكو⌉
❐..🔮╎❯ .شوتا⌉
❐..🔮╎❯ .وايف⌉
❐..🔮╎❯ .الينا⌉
❐..🔮╎❯ .مراتي⌉
❐..🔮╎❯ .بنت⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الانمي)$/i
export default handler
