const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/OSW6Agm.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*AJMAL-ACHU*

*BOT NAME : NANDHUTTY*

*VERSION : 2.0*

*owner number*

*Join our group:

*Ajmal : https://wa.me/919744196187*

*Achu : https://wa.me/918590967139*

*Nandhutty_v2 githublink   https://github.com/Ajmal-Achu/Nandhutty_v2*

*©AJMAL-ACHU©*

`}) 

}));
