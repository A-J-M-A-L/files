let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter text1|text2\n\nexample: .logo3 Wizard|md'
  m.reply('*Wait a minute⏳*\nprocessing ⚙️...')
  let res = `https://caliphapi.com/api/girlneko?text=${response[0]}&text2=${response[1]}&apikey=ELYASXD`
  conn.sendFile(m.chat, res, 'nekologo.jpg', `Sudah jadi`, m, false)
}
handler.help = ['logo3'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logo3)$/i

module.exports = handler
