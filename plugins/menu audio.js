let handler = async (m, { conn, command, text }) => {

let love = `

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
【..≼قــسم الصــوتيـــات≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❏..🔊╎❯ .عميق⌉
❏..🔊╎❯ .منفوخ⌉
❏..🔊╎❯ .تخين⌉
❏..🔊╎❯ .صاخب⌉
❏..🔊╎❯ .سريع⌉
❏..🔊╎❯ .رفيع⌉
❏..🔊╎❯ .روبوت⌉
❏..🔊╎❯ .بطئ⌉
❏..🔊╎❯ .ناعم⌉
❏..🔊╎❯ .سنجاب⌉
❏..🔊╎❯ .مكس⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

 `.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(الاصوات)$/i

export default handler
