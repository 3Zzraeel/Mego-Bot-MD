let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/c1f3adc59818e62a90a8f.mp4'
  let { name } = global.db.data.users[who]
m.react('📥')
let str = `                  ✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم التحميلات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

❐╎🎥❯ .فيديو⌉
❐╎💾❯ .فيديو2⌉   ༺الرابط༻
❐╎🎵❯ .اغنيه⌉
❐╎🎶❯ .اغاني⌉  ༺الرابط༻
❐╎📻❯ .شغل⌉
❐╎🎞❯ .شغل1⌉
❐╎📸❯ .صورة ⌉
❐╎🔍❯ .البحث⌉
❐╎📑❯ .ويكيبيديا⌉
❐╎📥❯ .تيك⌉  ༺الرابط༻
❐╎🤳❯ .تيك_صور⌉   ༺الرابط༻
❐╎🎬❯ .يوتيوب⌉
❐╎🎐❯ .بينترست⌉
❐╎📱❯ .فيسبوك⌉  ༺الرابط༻
❐╎👾❯ .تطبيق⌉
❐╎📲❯ .انستا⌉  ༺الرابط༻
❐╎💿❯ .ميديافاير⌉  ༺الرابط༻
❐╎📚❯ .مانجا⌉
❐╎📼❯ .فريبيك⌉
❐╎🪄❯ .جيف⌉
❐╎🌐❯ .جوجل⌉
❐╎🚘❯ .سياره⌉
❐╎🌐❯ .جيثوب⌉
❐╎✖️❯ .تويتر⌉  ༺الرابط༻
❐╎📽❯ .فيلم⌉
❐╎📂❯ .ملف⌉
❐╎🎫❯ .انستغرام⌉
❐╎📖❯ .كتاب⌉
❐╎⚽❯ .كرة-القدم⌉
                    ✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['التحميلات']

export default handler
