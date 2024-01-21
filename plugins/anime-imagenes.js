import fetch from 'node-fetch'

var handler = async (m, { conn, command }) => {

if (command == 'fanart') {
let fanart = await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: fanart, caption: `*🧧 فانرت*`.trim()}, {quoted: m})
m.react('🧧')
}

if (command == 'husbu') {
let husbu = await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: husbu, caption: `*🚩 هوسبو*`.trim()}, {quoted: m})
m.react('🚩')
}

if (command == 'kanna') {
let kanna = await fetch(`https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: kanna, caption: `*🍧 كانا*`.trim()}, {quoted: m})
m.react('🍧')
}

if (command == 'megumin') {
let megumin = await fetch(`https://api.lolhuman.xyz/api/random/megumin?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: megumin, caption: `*🍂 ميغومين*`.trim()}, {quoted: m})
m.react('🍂')
}

if (command == 'neko') {
let neko = await fetch(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: neko, caption: `*😻 نيكو*`.trim()}, {quoted: m})
m.react('😻')
}

if (command == 'shota') {
let neko = await fetch(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: neko, caption: `*⚡ شوتا*`.trim()}, {quoted: m})
m.react('⚡')
}

if (command == 'waifu') {
let waifu = await fetch(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: waifu, caption: `*🍭 وايف*`.trim()}, {quoted: m})
m.react('🍭')
}

if (command == 'elaina') {
let elaina = await fetch(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: elaina, caption: `*🍚 الينا*`.trim()}, {quoted: m})
m.react('🍚')
}

}
handler.command = /^(فانرت|هوسبو|كانا|ميغومين|نيكو|شوتا|وايف|الينا)$/i
handler.tags = ['anime']
handler.help = ['فانرت', 'هوسبو', 'كانا', 'ميغومين', 'نيكو', 'شوتا', 'وايف', 'الينا']

handler.limit = true

export default handler
                 
