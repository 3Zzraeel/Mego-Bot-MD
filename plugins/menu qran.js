let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

【..≼قــســم الــديــن≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❐..🕋╎❯ .ايه-الكرسي⌉
❐..🕋╎❯ .الله⌉
❐..🕋╎❯ .قران⌉
❐..🕋╎❯ .سوره⌉
❐..🕋╎❯ .سور⌉
❐..🕋╎❯ .حديث⌉
❐..🕋╎❯ .ذكر⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الدين)$/i
export default handler
