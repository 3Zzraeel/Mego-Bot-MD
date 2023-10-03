 import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async(m, { conn, text, usedPrefix, command }) => {

const perfil_sc = await conn.profilePictureUrl(m.sender, "image").catch(_ => "https://i.pinimg.com/564x/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg")
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'Pagina web de Delirius',
  address: 'Created by Sareth',
  url: md,
  isLive: true,
  accuracyInMeters: 0,
  
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: 'Hola',
  jpegThumbnail: await conn.reSize(perfil_sc, 200, 150)
}}, { quoted: m })
conn.relayMessage(m.chat, msg.message, {})
}

//let str = '*🍧 CuriosityBot-MD*'
//await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }})
 
handler.command = /^((a|a)a)$/i
handler.owner = true

export default handler
