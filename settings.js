/*
 
╭────ꕥ Big thanks to ꕥ────
│◦ RxhL Official
│◦ Anggazyy Developer
│◦ X Developer team
└──ꕥ Devil 5.0 Gen 4
 
 * Script made by Anggazyy Developer
 * Thanks to RxhL Official
 * Backup  X Developer team

*/

require("./all/module.js")
const { color } = require('./all/function')
const version = require("@whiskeysockets/baileys/package.json").version
//========== Setting Owner ==========//
global.owner = "6282336452967"
global.namaowner = "mourvex ☕"
global.namaowner2 = "mourvex"

//======== Setting Bot & Link ========//
global.namabot = "Devil 5.0 Gen 4" 
global.botname = "Devil 5.0 Gen 4"
global.namabot2 = "Devil 5.0 Gen 4"
global.namaowner = "Devil Script - By anggazy" // ini untuk funticon reply dll/respon cmd
global.linkfoto = "https://telegra.ph/file/d226e31c9f06b551a4f45.jpg" // untuk foto di cmd menu/spesialmenu/bugmenu
global.version = "Devil 5.0 Gen 4"
global.foother = "Devil 5.0 Gen 4 © Anggazyy"
global.idsaluran = "120363301756685796@newsletter"
global.linkgc = 'https://whatsapp.com/channel/0029VaimaUx2kNFhAd6QCt3s'
global.linksaluran = "https://whatsapp.com/channel/0029VaimaUx2kNFhAd6QCt3s"
global.linkyt = 'https://youtube.com/@anggazyyzxyy?si=ojas1NHwYj6lmI_M'
global.linktele = "https://t.me/relzzganteng"
global.packname = "Created By Devil 5.0 Gen 4"
global.author = "AnggazyyDev"
global.newsletterName = "DevilBot"
global.target = 'https://www.en.sfcnavy.gov.bd/public/files/assets/ckeditor/kcfinder/upload.php'
global.premium = ["6282336452967"] // Premium User
global.wm = "By mourvex - Devil Script"
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========== Setting Foto ===========//

//========== Setting Panell & Gausah isi kalo gadaa ==========//
//========== Setting Panell & Gausah isi kalo gadaa ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

global.fake = {
	anonim: 'https://telegra.ph/file/d226e31c9f06b551a4f45.jpg',
	thumbnailUrl: 'https://telegra.ph/file/d226e31c9f06b551a4f45.jpg',
	thumbnail: fs.readFileSync('./media/anggazyy.jpg'),
	docs: fs.readFileSync('./media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
    ch: 'https://whatsapp.com/channel/0029VaimaUx2kNFhAd6QCt3s',
	gh: 'https://whatsapp.com/channel/0029VaimaUx2kNFhAd6QCt3s',
	
}
//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "082193222977"
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error! terjadi kesalahan.",
"done": "Donee, ~ Oke desuuu.", 
"wait": "Please wait a minute bot being proses.", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"anggazyyprem": "*~ Devil System:*\n\n- Khusus user premium sayang.",
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*Khusus owner sayang*", 
"query": "*Masukan query*",
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
