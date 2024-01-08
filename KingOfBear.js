require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const request = require('request')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const tanggal2 = moment().tz("Asia/Jakarta").format("ll")
const nyoutube = (`📍𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ᴹᴿ᭄ King Of Bear ×፝֟͜× 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑`)
const powered = (`_Powered By @${'6288279268363'.split("@")[0]}_`)
const kangbanned = (`_Powered By @${'0'.split("@")[0]}_`)

// Hosting
const host = "vip-agunghost.buyerpo.my.id" //adonxd
const uroot = "root"
const proot = "Oki250918@"
const ipanda = "4.193.105.14" //54.345.3.22
const userr = ('root')
const pass = ('@@server01@@')
const serverr = ('yongnett.yongid.tech:2087')
const ipp = ('20.196.204.238')
const grups = ('120363046904282841@g.us')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good Afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good Afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good Afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good Morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 } 

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
//=================================================//
let hostwhm = "yongnett.yongid.tech"
let usrwhm = "root"
let passwhm = "@@server01@@"
let tokenwhm = "W4JWLEKBCYAQ9K63G4E12V21K2OWIEBQ"
let ipsrv = "20.196.204.238"

let authWhm = {headers: {Authorization: `WHM ${usrwhm}:${tokenwhm}`}}

module.exports = KingOfBear = async (KingOfBear, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await KingOfBear.decodeJid(KingOfBear.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const from = mek.key.remoteJid
     
	 
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: 'KingOfBear', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'KingOfBear',jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":'KingOfBear', "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': 'KingOfBear', 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "ig : @xaveey.xv", "caption": 'KingOfBear', 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'KingOfBear',jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': 'KingOfBear', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;KingOfBear,;;;\nFN:KingOfBear\nitem1.TEL;waid=6288279268363:6288279268363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": 'KingOfBear',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/dark.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		const fbear = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By ᴹᴿ᭄ King Of Bear ×፝֟͜×',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}

        // Group
        const groupMetadata = m.isGroup ? await KingOfBear.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!KingOfBear.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            KingOfBear.readMessages([m.key])
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await KingOfBear.setStatus(`KingOfBear | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await KingOfBear.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        KingOfBear.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: KingOfBear.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, KingOfBear.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        KingOfBear.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            KingOfBear.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, KingOfBear.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await KingOfBear.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await KingOfBear.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    KingOfBear.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    KingOfBear.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) KingOfBear.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) KingOfBear.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) KingOfBear.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    KingOfBear.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) KingOfBear.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) KingOfBear.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    KingOfBear.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await KingOfBear.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await KingOfBear.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            KingOfBear.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await KingOfBear.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) KingOfBear.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                KingOfBear.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/0b31865ef182a7681f9c3.jpg' }, caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau klik link dibawah ini*\n_https://saweria.co/\n\n*Atau Transfer via*\n- *Gopay Dana Ovo Qris ShopeePay*\n chat nomor berikut : wa.me/62895604670507\n\n_Terima kasih_` }, { quoted: m })
            }
            break 
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    KingOfBear.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    KingOfBear.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    KingOfBear.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    KingOfBear.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    KingOfBear.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    KingOfBear.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    KingOfBear.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await KingOfBear.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await KingOfBear.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    KingOfBear.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    KingOfBear.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    KingOfBear.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    KingOfBear.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    KingOfBear.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    KingOfBear.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    KingOfBear.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, KingOfBear.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                KingOfBear.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//Pembatas===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, jawab, KingOfBear.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            
           
//PEMBATAS=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 231 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'runtime': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await KingOfBear.sendButtonText(m.chat, buttons, lowq, nyoutube, m, {quoted: fkontak})
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await KingOfBear.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await KingOfBear.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                KingOfBear.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await KingOfBear.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await KingOfBear.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⌗ Packname : ${global.packname}\n⌗ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KingOfBear.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await KingOfBear.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await KingOfBear.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                await KingOfBear.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                await KingOfBear.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⌗ @${mem.id.split('@')[0]}\n`
                }
                KingOfBear.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            KingOfBear.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⌗ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┃ 
├ Total: ${vote[m.chat][1].length}
┃
┃ 
└────

┌〔 DEVOTE 〕
┃ 
├ Total: ${vote[m.chat][2].length}
┃
┃ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: KingOfBear.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            KingOfBear.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┃ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

┌〔 DEVOTE 〕
┃ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: KingOfBear.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            KingOfBear.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┃ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

┌〔 DEVOTE 〕
┃ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: KingOfBear.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            KingOfBear.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
┃ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

┌〔 DEVOTE 〕
┃ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${KingOfBear.user.id}
`
KingOfBear.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await KingOfBear.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await KingOfBear.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `Mode Group`, KingOfBear.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await KingOfBear.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await KingOfBear.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `Mode Edit Info`, KingOfBear.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `Mode Antilink`, KingOfBear.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${KingOfBear.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${KingOfBear.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `Mute Bot`, KingOfBear.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await KingOfBear.groupInviteCode(m.chat)
                KingOfBear.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await KingOfBear.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await KingOfBear.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                KingOfBear.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await KingOfBear.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await KingOfBear.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                KingOfBear.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await KingOfBear.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 *Broadcast Group* 」\n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `「 *Broadcast KingOfBear* 」\n\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await KingOfBear.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 KingOfBear.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await KingOfBear.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 KingOfBear.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    KingOfBear.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⌗ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                KingOfBear.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                KingOfBear.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                KingOfBear.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await KingOfBear.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, KingOfBear.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await KingOfBear.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, KingOfBear.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, KingOfBear.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await KingOfBear.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, KingOfBear.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, KingOfBear.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await KingOfBear.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, KingOfBear.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await KingOfBear.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, KingOfBear.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await KingOfBear.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, KingOfBear.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                KingOfBear.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                KingOfBear.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                KingOfBear.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                KingOfBear.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, nyoutube, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break
            
//=================================================//
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await KingOfBear.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await KingOfBear.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await KingOfBear.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await KingOfBear.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await KingOfBear.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'KingOfBear', 'morou', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             KingOfBear.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await KingOfBear.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await KingOfBear.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    KingOfBear.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await KingOfBear.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            KingOfBear.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            KingOfBear.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${KingOfBear.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            KingOfBear.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await KingOfBear.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await KingOfBear.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await KingOfBear.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    KingOfBear.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${author}`,jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤THANKS' }, type: 1 }]
            await KingOfBear.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await KingOfBear.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⌗ No : ${no++}\n⌗ Type : ${i.type}\n⌗ Video ID : ${i.videoId}\n⌗ Title : ${i.title}\n⌗ Views : ${i.views}\n⌗ Duration : ${i.timestamp}\n⌗ Upload At : ${i.ago}\n⌗ Author : ${i.author.name}\n⌗ Url : ${i.url}\n\n─────────────────\n\n`
                }
                KingOfBear.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⌗ *Title* : ${g.title}\n`
                teks += `⌗ *Description* : ${g.snippet}\n`
                teks += `⌗ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: KingOfBear.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⌗ Title : ${anu.title}
⌗ Ext : Search
⌗ ID : ${anu.videoId}
⌗ Duration : ${anu.timestamp}
⌗ Viewers : ${anu.views}
⌗ Upload At : ${anu.ago}
⌗ Author : ${anu.author.name}
⌗ Channel : ${anu.author.url}
⌗ Description : ${anu.description}
⌗ Url : ${anu.url}`,
                    footer: KingOfBear.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                KingOfBear.sendImage(m.chat, media.thumb, `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${isUrl(text)}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '128kbps'}`, m)
                KingOfBear.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                KingOfBear.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${isUrl(text)}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'autosw': {
if (!isCreator) return m.reply('Khusus owner')
if (KingOfBear.autosw) {
KingOfBear.autosw = false
m.reply('Auto SW sekarang tidak Aktif')
} else if (!KingOfBear.autosw) {
KingOfBear.autosw = true
m.reply('Auto SW sekarang Aktif')
}
} 
break;
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                KingOfBear.sendImage(m.chat, media.thumb, `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${urls[text - 1]}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '128kbps'}`, m)
                KingOfBear.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                KingOfBear.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${urls[text - 1]}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                KingOfBear.sendMessage(m.chat, { image: { url: result }, caption: '⌗ Media Url : '+result }, { quoted: m })
            }
            break
case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                KingOfBear.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                KingOfBear.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                KingOfBear.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⌗ Title : ${result.title}\n⌗ Category : ${result.type}\n⌗ Detail : ${result.source}\n⌗ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
              if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: `gcsearch ${text}`, buttonText: { displayText: 'Next' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await KingOfBear.sendButtonText(m.chat, buttons, jwbn, nyoutube, m, {quoted: fgclink})
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⌗ Title : ${result.title}\n⌗ Source : ${result.source}\n⌗ Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'isgd': case 'vurl': case 'clp': {
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: '🙏THANKS'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.hasil,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            
//Pembatas========================================
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                KingOfBear.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285692287644`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nomor HP :* ${anu.message.nomer_hp}\n⌗ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⌗ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⌗ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Mimpi :* ${anu.message.mimpi}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama Suami :* ${anu.message.suami.nama}\n⌗ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⌗ *Nama Istri :* ${anu.message.istri.nama}\n⌗ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Sisi Positif :* ${anu.message.sisi_positif}\n⌗ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Life Path :* ${anu.message.life_path}\n⌗ *Destiny :* ${anu.message.destiny}\n⌗ *Destiny Desire :* ${anu.message.destiny_desire}\n⌗ *Personality :* ${anu.message.personality}\n⌗ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendImage(m.chat,  anu.message.gambar, `⌗ *Nama Anda :* ${anu.message.nama_anda}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⌗ *Sisi Positif :* ${anu.message.sisi_positif}\n⌗ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⌗ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Rezeki :* ${anu.message.rejeki}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Pekerjaan :* ${anu.message.pekerjaan}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Analisa :* ${anu.message.analisa}\n⌗ *Angka Akar :* ${anu.message.angka_akar}\n⌗ *Sifat :* ${anu.message.sifat}\n⌗ *Elemen :* ${anu.message.elemen}\n⌗ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Analisa :* ${anu.message.analisa}\n⌗ *Sektor :* ${anu.message.sektor}\n⌗ *Elemen :* ${anu.message.elemen}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendImage(m.chat, anu.message.image, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tahun_lahir}\n⌗ *Gender :* ${anu.message.jenis_kelamin}\n⌗ *Angka Kua :* ${anu.message.angka_kua}\n⌗ *Kelompok :* ${anu.message.kelompok}\n⌗ *Karakter :* ${anu.message.karakter}\n⌗ *Sektor Baik :* ${anu.message.sektor_baik}\n⌗ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⌗ *Info :* ${anu.message.info}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Info :* ${anu.message.info}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hari Naas :* ${anu.message.hari_naas}\n⌗ *Info :* ${anu.message.catatan}\n⌗ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Tanggal :* ${anu.message.tanggal}\n⌗ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⌗ *Watak Hari :* ${anu.message.watak_hari}\n⌗ *Naga Hari :* ${anu.message.naga_hari}\n⌗ *Jam Baik :* ${anu.message.jam_baik}\n⌗ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                KingOfBear.sendText(m.chat, `⌗ *Zodiak :* ${anu.message.zodiak}\n⌗ *Nomor :* ${anu.message.nomor_keberuntungan}\n⌗ *Aroma :* ${anu.message.aroma_keberuntungan}\n⌗ *Planet :* ${anu.message.planet_yang_mengitari}\n⌗ *Bunga :* ${anu.message.bunga_keberuntungan}\n⌗ *Warna :* ${anu.message.warna_keberuntungan}\n⌗ *Batu :* ${anu.message.batu_keberuntungan}\n⌗ *Elemen :* ${anu.message.elemen_keberuntungan}\n⌗ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
//=================================================//
case 'tiktokmp3': case 'tiktokaudio': {
if (!text) throw 'Query Link'
m.reply(mess.wait)
let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
let buttons = [
{buttonId: `allmenu`, buttonText: {displayText: '⌕ List Menu'}, type: 1},
{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
]
let buttonMessage = {
text: `Download From ${text}`,
footer: nyoutube,
buttons: buttons,
headerType: 2
}
let msg = await KingOfBear.sendMessage(m.chat, buttonMessage, { quoted: m })
KingOfBear.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: msg })
}
break
//=================================================//
case 'instagram': case 'ig': case 'igdl': {
if (!text) throw `Contoh ${prefix+command} https://www.instagram.com/p/CNtpwxuH5NK/?igshid=g26k5coikzwr`
m.reply(mess.wait)
let anu = await fetchJson(`https://saipulanuar.ga/api/downloader/instagram?url=https://www.instagram.com/p/CNtpwxuH5NK/?igshid=g26k5coikzwr&apikey=VBkM7rbU`)
KingOfBear.sendMessage(m.chat, { video: { url: anu.result.post1.url }, caption: `⌗ Title : ${anu.result.title}`}, { quoted: m })
}
break
//=================================================//
case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'Query Link'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
KingOfBear.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⌗ Title : ${anu.result.title}`}, { quoted: m })
}
break
//=================================================//
case 'webp':{
const seactions = [{
title: `MAU TAMPILAN APA KAK?`,
rows: [
{title: `MOBILE LEGEND`, description: `Harga: Rp5000`, rowId: `${prefix}webp1`},
{title: `CODASHOP`, description: `Harga: Rp5000`, rowId: `${prefix}webp2`},
{title: `FREEFIRE`, description: `Harga: Rp5000`, rowId: `${prefix}webp3`},
{title: `SIMONTOK 18+`, description: `Harga: Rp5000`, rowId: `${prefix}webp4`},
{title: `YOUTUBE 18+`, description: `Harga: Rp5000`, rowId: `${prefix}webp5`},
{title: `GROUPWA 18+`, description: `Harga: Rp5000`, rowId: `${prefix}webp6`},
{title: `STUMBLE CLAM`, description: `Harga: Rp5000`, rowId: `${prefix}webp8`},
{title: `SAFELINKU 18+`, description: `Harga: Rp5000`, rowId: `${prefix}webp9`},
{title: `XNXX 18`, description: `Harga: Rp5000`, rowId: `${prefix}webp10`},
{title: `VIDEO 18+`, description: `Harga: Rp5000`, rowId: `${prefix}webp11`},
{title: `BANK BCA`, description: `Harga: Rp5000`, rowId: `${prefix}webp12`},
{title: `BANK SYARIAH`, description: `Harga: Rp5000`, rowId: `${prefix}webp13`},
{title: `BANK KREDIVO`, description: `Harga: Rp5000`, rowId: `${prefix}webp14`},
]}]
const listMenuMessage = { 
text: `Hallo *@${m.sender.split('@')[0]}* ${ucapanWaktu} 👋🏻

𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
ID : @${m.sender.split('@')[0]}
Nama : ${pushname}

𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
BotName : ${global.botName}
Library : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀-𝗠𝗗
Time : ${barat} WIB
Date : ${tanggal2}

Silahkan Kak @${m.sender.split("@")[0]} Pencet Button List Message Nya Di Bawah Ya`,
mentions: [m.sender, '6288279268363@s.whatsapp.net', '0@s.whatsapp.net'],
footer: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ᴹᴿ᭄ King Of Bear ×፝֟͜×`,
buttonText: 'Tampilan Webp',
sections: seactions,
listType: 1}
KingOfBear.sendMessage(from, listMenuMessage, { quoted: fkontak })
}
break
//=================================================//
case 'webp1': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/mobile-legend/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/mobile-legend/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp2': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/codashop/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/codashop/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp3': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/freefire/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/freefire/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp4': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/simontok/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/simontok/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp5': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/youtube/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/youtube/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp6': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/grupwa/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/grupwa/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp8': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/stumble/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/stumble/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp9': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/safelink/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/safelink/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp10': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/xnxx/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/xnxx/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp11': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/video/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/video/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp12': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/bca/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/bca/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp13': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/syariah/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/syariah/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'webp14': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
var inputt = {

              server: host,
              userwhm: uroot,
              passwhm: proot,
              ip: ipanda,
          }
 
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/kredivo/createcp.php',
              form: inputt
            }, function(error, response, body){

function afakahinijson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (afakahinijson(body)){
  let hasil = JSON.parse(body)
  let user = hasil.user
  let pass = hasil.pass
  let domain = hasil.domain
  let pendek = hasil.pendek
      
      user = user.replace(/\s+/g, '');
pass = pass.replace(/\s+/g, '');


var inputt = {

              server: host, 
              user: user,
              pass: pass,
              userwhm: uroot,
              passwhm: proot,
          }
          
          request.post({
              url: 'https://WebApiHosting.saipulanuar.repl.co/kredivo/upload.php',
              form: inputt
            }, function(error, res, body){
                
if (afakahinijson(body)){
    hasil = JSON.parse(body)
}else{
    }

KingOfBear.sendMessage(sender,{text: `O━• 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇 𝙈𝙀𝙈𝘽𝙐𝘼𝙏 𝙒𝙀𝘽 •━O

🎉 Status : Success
📆 ${tanggal2}
⏰ ${barat} Wib

🌐 Web : 
${pendek}

✎🌐 Setting :
${domain}/vhsfhqpdhdsih6/adon.php
━O━O━••••••••••••━O━O━

_*NOTE:*_
Dilarang menjual webp di bawah 10k atau akan saya benned`},{quoted:fkontak})
}); 
// BATAL 
}else{
m.reply("*COBA LAGI DALAM 5 MENIT*") //error
}
}); 
}
break
//=================================================//
case 'web2': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/HKzEHPRI6sxX.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `BRImo Tarif V2.zip`}, { quoted : m })
}
break
//=================================================//
case 'web3': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/97OvAdZNtepB.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `BCA Tarif V1.zip`}, { quoted : m })
}
break
//=================================================//
case 'web4': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/Z1PKB9SiKJFX.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `BSI Terbaru.zip`}, { quoted : m })
}
break
//=================================================//
case 'web5': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/uJYJglabDh0I.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `Bank JAGO Terbaru.zip`}, { quoted : m })
}
break
//=================================================//
case 'web6': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/OeQkLa3JcH6W.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `Kredivo V1 Terbaru.zip`}, { quoted : m })
}
break
//=================================================//
case 'web7': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/dhhm9RsS9YTU.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `Kredivo V2 Terbaru.zip`}, { quoted : m })
}
break
//=================================================//
case 'web8': {
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
m.reply(mess.wait)
let kimak = await getBuffer(`https://file.saipulanuar.ga/file/vLPOMcSIsT0v.zip`)
KingOfBear.sendMessage(m.chat, {document: kimak, mimetype: 'zip/rar', fileName: `DANA Kaget Terbaru.zip`}, { quoted : m })
}
break
//=================================================//
case 'pindl': case 'pinterestdl': {
if (!text) throw 'Query Link'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
KingOfBear.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
}
break
//=================================================//
case 'subcreate1':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone1 = "bb42691cbc1ae58042b7dc327883b2ee";
let apiToken1 = "jHZ6WnfjwdVWuciEKoYfTQd2Pltla231KUdk5Mkt";
let tld1 = "mediafire.ink";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apiToken1,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}

let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("Enter Name & IP");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("Name Fail");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Fail" : "Enter IP");

subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP: ${e['ip']}\nName: ${e['name']}`);
else m.reply(`Fail Create New Subdomain\nMsg: ${e['error']}`)
});
break
//=================================================//
case 'subcreate2':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
function subDomain2(host, ip) {
return new Promise((resolve2) => {
let zone2 = "5d8ee869a9e3d1c01eacff869aa8cdbd";
let apiToken2 = "P4QIJhMHSecUAt2ILVjShgorJX1QRofDUZc5QZkr";
let tld2 = "qzxcs.ink";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld2, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apiToken2,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve2({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err2 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err2Str = String(err2);
resolve2({ success: false, error: err2Str });
});
});
}

let raw2 = args?.join(" ")?.trim();
if (!raw2) return m.reply("Enter Name & IP?");
let host2 = raw2
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host2) return m.reply("Name Fail");
let ip2 = raw2.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip2 || ip2.split(".").length < 4) return m.reply(ip2 ? "IP Fail" : "Enter IP");

subDomain2(host2, ip2).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP: ${e['ip']}\nName: ${e['name']}`);
else m.reply(`Fail Create New Subdomain\nMsg: ${e['error']}`)
});
break
//=================================================//
case 'subcreate3':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
function subDomain3(host, ip) {
return new Promise((resolve3) => {
let zone3 = "9879a24bffd98a987b67ce9c4e908c9e";
let apiToken3 = "P4QIJhMHSecUAt2ILVjShgorJX1QRofDUZc5QZkr";
let tld3 = "safefileku.ink";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone3}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld3, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken3,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve3({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err3 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err3Str = String(err3);
resolve3({ success: false, error: err3Str });
});
});
}

let raw3 = args?.join(" ")?.trim();
if (!raw3) return m.reply("Enter Name & IP");
let host3 = raw3
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host3) return m.reply("Name Fail");
let ip3 = raw3.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip3 || ip3.split(".").length < 4) return m.reply(ip3 ? "IP Fail" : "Enter IP");

subDomain3(host3, ip3).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
break
//=================================================//
case 'createcp':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
let domain = q.split('|')[0]
let usern = q.split('|')[1]
let pekeg = q.split('|')[2]
if (args.length < 2) return m.reply(`Use ${command} Domain|Username|Package`)
m.reply("Creating Please Wait")

axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=contact@KingOfBear.ink&pekeg=${pekeg}&domain=${domain}`, authWhm)
.then(response => {     
let np = response.data
if (np.metadata.result == 0) {
m.reply(np.metadata.reason)
} else {
let dsta = np.metadata.output.raw;
var substr = dsta.substring(
dsta.toString().indexOf("+===================================+")
); //substr = 'word. Hello!'
let nefft = substr.split("| Language: en")[0];
m.reply(`${nefft}+===================================+\n\nLogin WHM : https://${hostwhm}:2087\nLogin cPanel : https://${hostwhm}:2083`)
}});
break
//=================================================//
case 'infoserver':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
info = `INFO SETINGAN BOT HOST
            
-- DATABASE BOT --
*Server:* ${serverr}
*Username:* ${userr}
*Password:* ${pass}
*Ip address:* ${ipp}`
m.reply(info)
break

case 'adduser':
if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
let sUser1 = userr;
let sPass1 = pass;
let serverName1 = `https://${serverr}`;

let uname1 = args?.join(" ")?.trim()?.split("|")?.[0]?.trim();
let pack1 = args?.join(" ")?.trim()?.split("|")?.[1]?.trim();

if (!uname1 || !pack1) return m.reply(`Enter ${!uname1 && !pack1 ? "Username & Package" : !uname1 ? "Username" : !pack1 ? "Package" : ""} \n\nUse: adduser Username|Package`);

axios
.get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
let pkgs = e.data?.data?.pkg
?.map((x) => {
return x.name;
})
.filter((x) => {
return !x.includes("_") && !x.includes("default");
});
if(!pkgs.includes(pack1)) return m.reply(`Package ${pack1} No Available\nPackage Available:\n- ${pkgs.join("\n- ")}`)
axios
.get(`https://${serverName1}/json-api/changepackage?api.version=1&user=${encodeURIComponent(uname1)}&pkg=${encodeURIComponent(pack1)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
console.log("Upgrade User Package: " + JSON.stringify(e.data?.metadata?.reason || {}, null, 2));
if (e.data?.metadata?.reason == "OK") {
let allowedPkg = pkgs.filter((x) => {
return pack1.toLowerCase().includes("whm") ? x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("admin") ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("ceo") ? !x.toLowerCase().includes("ceo") && !x.toLowerCase().includes("founder") : pack1.toLowerCase().includes("founder") ? true : false;
});
if (allowedPkg.length > 0) {
let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=1&enable_overselling_bandwidth=1&enable_overselling_diskspace=1&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
if (e?.data?.metadata?.reason == "OK") {
let pkgDone = [];
for await (let pkg of allowedPkg) {
console.log(`Add ${pkg} To ${uname1}`);
await axios
.get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
.then((e) => {
if (e?.data?.metadata?.reason == "OK") {
console.log(`Add ${pkg} To ${uname1} Success`);
pkgDone.push(pkg);
} else {

console.log({ error: `Add: ${pkg} To: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
}
})
.catch((e) => {
console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
});
}
if (pkgDone.length > 0) m.reply(`Success Add\nList Package Add:\n- ${pkgDone.join("\n- ")}`);
} else console.log(`upgrade user ${uname1} to ${pack1} Failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
});
}
} else {
console.log({ error: `Upgrading User Plan From Defaut To ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
}
})
.catch((e) => {
console.log({ error: `Upgrading User Plan From Defaut To ${pack1}`, message: JSON.stringify(e.response?.data || e, null, 2) });
});
})
.catch((e) => {
console.log(`Upgrade User Package To ${pack1} Failed\nReason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
});
break
//=================================================//
case 'termint':
if (!isCreator) throw  m.reply(`Ente kadang-kadang ente\nIni Khusus Owner Kentod`)
let uname = args[0]
if(!uname) m.reply("Enter Username")
        
axios.get(`https://${serverr}/json-api/removeacct?api.version=1&username=${uname}`, { headers: { Authorization: "Basic " + Buffer.from(`root:${pass}`).toString("base64") } })
.then(e=>{if([1, "1"].includes(e.data?.metadata?.result)) m.reply(`Success Termint ${uname}`); else {m.reply("Enter Username"); console.log(e.data)}})
.catch(e=>{m.reply("Enter Username"); console.log(JSON.stringify(e, null, 2))})
break
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
case 'sponsor': {
if (!m.isGroup) throw mess.group
let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
let ownernya = 6288279268363 + '@s.whatsapp.net'
let ownernomerr = `${ownernomer}@s.whatsapp.net`
let me = m.sender
let jawab = `*King Of Bear Sponsor* 
-Creator :  @${ownernya.split('@')[0]}\n-Owner Bot : @${ownernomerr.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
let buttons = [
{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 }
]
await KingOfBear.sendButtonText(m.chat, buttons, jawab, KingOfBear.user.name, m, {mentions: ments})
}
break
//=================================================//
case 'menu': {
    if(from != grups) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
base = fs.readFileSync('./sound/menu.mp3')
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let jawab = `┏━━━ꕥ〔 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 〕ꕥ━⬣
┃✾ *Name* : ${pushname}
┃✾ *Number* : @${me.split('@')[0]}
┃✾ *Premium* : ${isPremium ? '✅' : `❌`}
┃✾ *Limit* : ${isPremium ? 'Infinity' : `〽️${db.data.users[m.sender].limit}`}
┗━━━━━━━━━ꕥ

┏━━━ꕥ〔 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 〕ꕥ━⬣
┃✾ *Name* : ${pushname}
┃✾ *Mode* : ${KingOfBear.public ? 'Public' : `Self`}
┃✾ *Prefix* :「 Multi Device 」
┃▬▭▬▭▬▭▬▭▬▭▬▭▬▭
┃✾ Source Code : Private
┃✾ API : https://saipulanuar.ga
┃✾「⫹⫺YukiBot By KingOfBear⫹⫺」
┃▬▭▬▭▬▭▬▭▬▭▬▭▬▭
┃✾ Web : https://yongnett.yongid.tech:2087/
┗━━━━━━━━━ꕥ

┏━━━ꕥ〔 𝐓𝐈𝐌𝐄 〕ꕥ━⬣
┃✾ *DAY* : ${hariini}
┃✾ *WIB* : ${barat} 
┃✾ *WITA* : ${tengah} 
┃✾ *WIT* : ${timur} 
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let ments = [ownernya, me, ini_mark]
let buttons = [{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'webp', buttonText: { displayText: '𝐖𝐄𝐁𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
} 
break
//=================================================//
case 'rulesmenu': {
base = fs.readFileSync('./sound/rules.mp3')
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
rules = `┏━━━ꕥ〔 𝐑𝐔𝐋𝐄𝐒𝐌𝐄𝐍𝐔 〕ꕥ━⬣
┃✾ 𝐑𝐔𝐋𝐄𝐒 : NO SPAM
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 },{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
}
break
//=================================================//
case 'simplemenu': case 'list': case 'help': {
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
let kukiw = `┏━━━ꕥ〔 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 〕ꕥ━⬣*
┃✾ *Name* : ${pushname}
┃✾ *Number* : @${me.split('@')[0]}
┃✾ *Premium* : ${isPremium ? '✅' : `❌`}
┃✾ *Limit* : ${isPremium ? 'Infinity' : `〽️${db.data.users[m.sender].limit}`}
┗━━━━━━━━━ꕥ

┏━━━ꕥ〔 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 〕ꕥ━⬣
┃✾ *Name* : ${pushname}
┃✾ *Mode* : ${KingOfBear.public ? 'Public' : `Self`}
┃✾ *Prefix* :「 Multi Device 」
┃▬▭▬▭▬▭▬▭▬▭▬▭▬▭
┃✾ Source Code : Private
┃✾ API : https://saipulanuar.ga
┃✾「⫹⫺YukiBot By KingOfBear⫹⫺」
┃▬▭▬▭▬▭▬▭▬▭▬▭▬▭
┃✾ Web : https://yongnett.yongid.tech:2087/
┗━━━━━━━━━ꕥ

┏━━━ꕥ〔 𝐓𝐈𝐌𝐄 〕ꕥ━⬣
┃✾ *DAY* : ${hariini}
┃✾ *WIB* : ${barat} 
┃✾ *WITA* : ${tengah} 
┃✾ *WIT* : ${timur} 
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let sections = [
{
title: "SELECT HERE",
rows: [
{title: "𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔", rowId: `hostingmenu`, description: `𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔`},
{title: "𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔", rowId: `groupmenu`, description: `𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔`},
{title: "𝐑𝐔𝐋𝐄𝐒𝐌𝐄𝐍𝐔", rowId: `rulesmenu`, description: `𝐑𝐔𝐋𝐄𝐒𝐌𝐄𝐍𝐔`},
{title: "𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔", rowId: `ownermenu`, description: `𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔`}, 
{title: "𝐖𝐄𝐁𝐌𝐄𝐍𝐔", rowId: `webmenu`, description: `𝐖𝐄𝐁𝐌𝐄𝐍𝐔`}, 
]
},
]
KingOfBear.sendListMsg(m.chat, kukiw, nyoutube, `*WELCOME ${pushname}*`, `SELECT MENU`, sections, m, {quoted: fkontak})
}
break
//=================================================//
case 'groupmenu': {
goup = `┏━━━ꕥ〔 𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔 〕ꕥ━⬣
┃✾ ${prefix}linkgroup
┃✾ ${prefix}ephemeral [option]
┃✾ ${prefix}setppgc [image]
┃✾ ${prefix}setname [text]
┃✾ ${prefix}setdesc [text]
┃✾ ${prefix}group [option]
┃✾ ${prefix}editinfo [option]
┃✾ ${prefix}add @user
┃✾ ${prefix}kick @user
┃✾ ${prefix}hidetag [text]
┃✾ ${prefix}tagall [text]
┃✾ ${prefix}antilink [on/off]
┃✾ ${prefix}mute [on/off]
┃✾ ${prefix}promote @user
┃✾ ${prefix}demote @user
┃✾ ${prefix}vote [text]
┃✾ ${prefix}devote
┃✾ ${prefix}upvote
┃✾ ${prefix}cekvote
┃✾ ${prefix}hapusvote
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 },{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, goup, nyoutube, m, {quoted: fkontak})
}
break
//=================================================//
case 'ownermenu': {
oner = `┏━━━ꕥ〔 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔 〕ꕥ━⬣
┃✾ ${prefix}react [emoji]
┃✾ ${prefix}chat [option]
┃✾ ${prefix}join [link]
┃✾ ${prefix}leave
┃✾ ${prefix}block @user
┃✾ ${prefix}unblock @user
┃✾ ${prefix}bcgroup [text]
┃✾ ${prefix}bcall [text]
┃✾ ${prefix}setppbot [image]
┃✾ ${prefix}setexif
┃✾ ${prefix}setmenu [option]
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 },{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, oner, nyoutube, m, {quoted: fkontak})
}
break
//=================================================//
case 'hostingmenu': {
oner = `┏━━━ꕥ〔 𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔 〕ꕥ━⬣
┃✾ ${prefix}infoserver
┃✾ ${prefix}adduser <username>
┃✾ ${prefix}termint <username>
┃✾ ${prefix}listsubcreate
┃✾ ${prefix}subcreate1
┃✾ ${prefix}subcreate2
┃✾ ${prefix}subcreate3
┃✾ ${prefix}createcp
┃✾ ${prefix}ssweb
┃✾ ${prefix}webmenu (Download Sc)
┃✾ ${prefix}webp (Create Webp)
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 },{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, oner, nyoutube, m, {quoted: fkontak})
}
break
//=================================================//
case 'webmenu': {
web = `┏━━━ꕥ〔 𝐖𝐄𝐁𝐌𝐄𝐍𝐔 〕ꕥ━⬣
┃✾ .web2 : BRImo Tarif V2 (Ress Telegram)
┃✾ .web3 : BCA Tarif V1 (Ress Telegram)
┃✾ .web4 : BSI Terbaru (Ress Tele & Email)
┃✾ .web5 : Bank JAGO Terbaru
┃✾ .web6 : Kredivo V1 Terbaru
┃✾ .web7 : Kredivo V2 Terbaru 
┃✾ .web8 : DANA Kaget Terbaru
┃✾    
┃✾ Contoh : .web1
┃✾ Untuk Web Mediafire MP4
┗━━━━━━━━━ꕥ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '𝐁𝐀𝐂𝐊' }, type: 1 },{ buttonId: 'hostingmenu', buttonText: { displayText: '𝐇𝐎𝐒𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔' }, type: 1 },{ buttonId: 'groupmenu', buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔' }, type: 1 }]
await KingOfBear.sendButtonText(m.chat, buttons, web, nyoutube, m, {quoted: fkontak})
}
break
//=================================================//
case 'assalamualaikum': {
base = fs.readFileSync('./sound/salam.mp3')
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
//=================================================//
case 'bot': {
list = ['./sound/oy.mp3','./sound/kenapa.mp3','./sound/iya.mp3']
 random = list[Math.floor(Math.random() * list.length)]
base = fs.readFileSync(random)
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
//=================================================//
case 'kontol': {
base = fs.readFileSync('./sound/ASADE.mp3')
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
//=================================================//
case 'menyesal': {
base = fs.readFileSync('./sound/menyesal.mp3')
KingOfBear.sendMessage(m.chat, {audio: base, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
//=================================================//
case 'sc': {
let runnya = `━━━ꕥ〔 *SOURCE CODE* 〕ꕥ━⬣
✾ *Script Private | Mau Buy? Silahkan Hubungi* https://wa.me/6288279268363


✾ *50K:* NOT FREE UPDATE
✾ *100K:* FREE UPDATE & FREE PERBAIKAN SC


✾ *OFFICIAL GROUP*
_https://chat.whatsapp.com/HAZ6yFgCafUAeDbNH33IrL_
✾ *YOUTUBE OFFICIAL*
_https://youtu.be/pwLZpdfO8AU_
━━━━━━ꕥ`
m.reply(runnya)    
let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/script.mp3`
KingOfBear.sendMessage(m.chat, {audio: await getBuffer(vn), mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
case 'ss': case 'ssweb':{
if (!q) return m.reply(`Contoh ${prefix+command} https://saipulanuar.ga`)
m.reply(mess.wait)
let krt =  await fetchJson(`https://saipulanuar.ga/api/download/ssweb?url=${q}&apikey=VBkM7rbU`)
let ktr = await ( await fetch(`https://saipulanuar.ga/api/download/ssweb?url=${q}&apikey=VBkM7rbU`)).buffer()
KingOfBear.sendMessage(m.chat,{image:ktr,caption:`*「 Screenshot Web 」*\n\n*💻 Url:* ${q}`},{quoted:fkontak})
}
break
//=================================================//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
KingOfBear_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await KingOfBear.sendMessage(m.chat, { audio: KingOfBear_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=================================================//
default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    KingOfBear.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
