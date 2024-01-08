const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

global.owner = ['6281379880372','6281563701877']
global.ownernomer = "6281379880372"
global.premium = ['6288279268363','6288279268363']
global.packname = 'KingOfBear'
global.botName = 'Agung Hosting Bot'
global.author = 'KingOfBear'
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Success',
    admin: 'Feature Special Admin',
    botAdmin: 'Feature Special Botz Admin',
    premime: 'Feature Special Premium',
    owner: 'Only Owner',
    group: 'Feature Special Group',
    private: 'Feature Special Private Chat',
    bot: 'Feature Special User Botz',
    wait: 'Loading',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/dark.jpg')
global.vaze = fs.readFileSync('./video/dark.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
