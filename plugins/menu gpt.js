let handler = async (m, { conn, command, text }) => {

let love = `

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
【..≼قــسم الذكـاء لاصطناعي≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❏..🤖╎❯ .بارد⌉
❏..🤖╎❯ .تحدث⌉
❏..🤖╎❯ .بوت⌉
❏..🤖╎❯ .سيري⌉
❏..🤖╎❯ .شوف⌉

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

 `.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(ذكاءاصطناعي)$/i

export default handler
