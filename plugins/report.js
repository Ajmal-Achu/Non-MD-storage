/* Codded by @Ravindu Manoj
Re edited By hisham-Muhammed
Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');

const REPORT_DESC = "You can report someone who is acting against the rules of the group or harassing you....."
const AAA = "*Report Accepted⚠⚠ * \ n✔_ Please wait while the admin notices_"
const AAB = ", Unusual Activity Detected"
const AAC = ", An inappropriate action has been taken.\n\n\n*********************************"
const NEED_NUM = "*Give me a user!*\n_Mention the person you want or give the command as a reply to his message_✨\n\n  ᵇʸ ʜͥɪͭsᷤʜᴀͫᴍͤ"
const REPORT = "⚠ @{} ⚠"

const SEWA = "⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠\n\n         *❆❉☣REPORTED☣❉❆*\n      *❱❱❱A complaint has been received❰❰❰*\n         \n*to*:-"
const SEWB = "\nකෙනා:-"
const SEWC = "\n\n\n*Reason*:-"
const SEWD = "\n\n*കാരണം*:-"
const SEWE = "╔═══════════ೋೋ═══════════╗\n╠       ⚠⚠⚠*Report Detected*⚠⚠⚠\n\n"
const SEWF = "\n╠           *👆👆Group Admins👆👆*                      \n╚═══════════ೋೋ═══════════╝\n\n_*Please have an admin for this*_\n_*Pay attention*_\n\n\n_*Coded By ʜͥɪͭsᷤʜᴀͫᴍͤ*_\n         *👑Sophia👑*\n\n⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠"

if (Config.WORKTYPE == 'private') {

QueenSew.addCommand({pattern: 'report ?(.*)', fromMe: true, desc: REPORT_DESC}, (async (message, match) => {    
        if (message.reply_message !== false, match[1] === '') {
        var SewRep;{
        SewRep = match[1];
        }
      
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
         await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
        
            await message.client.sendMessage(message.jid, SEWA + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWB + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWC + SewRep + AAB + SEWD + SewRep + AAC, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}, previewType: 0
           });
           
           await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});
            
        } else if (message.mention !== false) {
                
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
                
            message.mention.map(async user => {
            
            await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
           
                await message.client.sendMessage(message.jid, SEWA + REPORT.format(user.split('@')[0]) + SEWB + REPORT.format(user.split('@')[0]) + SEWC + AAB + SEWD + AAC , MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}, previewType: 0
                });
                await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});

            });
        } else {
            await message.client.sendMessage(message.jid, NEED_NUM, MessageType.text);
        }
        
    }));

}
else if (Config.WORKTYPE == 'public') {
QueenSew.addCommand({pattern: 'report ?(.*)', fromMe: false, desc: REPORT_DESC}, (async (message, match) => {    
        if (message.reply_message !== false, match[1] === '') {
        var SewRep;{
        SewRep = match[1];
        }
      
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
         await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
        
            await message.client.sendMessage(message.jid, SEWA + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWB + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWC + SewRep + AAB + SEWD + SewRep + AAC, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}, previewType: 0
           });
           
           await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});
          } else if (message.mention !== false) {
                
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
                
            message.mention.map(async user => {
            
            await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
           
                await message.client.sendMessage(message.jid, SEWA + REPORT.format(user.split('@')[0]) + SEWB + REPORT.format(user.split('@')[0]) + SEWC + AAB + SEWD + AAC  , MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}, previewType: 0
                }); 
                await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});

            });
        } else {
            await message.client.sendMessage(message.jid, NEED_NUM, MessageType.text);
        }
        
    }));
    
    QueenSew.addCommand({pattern: 'report ?(.*)', fromMe: true, desc: REPORT_DESC}, (async (message, match) => {    
        if (message.reply_message !== false, match[1] === '') {
        var SewRep;{
        SewRep = match[1];
        }
      
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
         await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
        
            await message.client.sendMessage(message.jid, SEWA + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWB + REPORT.format(message.reply_message.jid.split('@')[0]) + SEWC + SewRep + AAB + SEWD + SewRep + AAC, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}, previewType: 0
           });
           
           await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});
                       
        } else if (message.mention !== false) {
                
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
                
            message.mention.map(async user => {
            
            await message.client.sendMessage(
           message.jid,AAA, MessageType.text);
           
                await message.client.sendMessage(message.jid, SEWA + REPORT.format(user.split('@')[0]) + SEWB + REPORT.format(user.split('@')[0]) + SEWC + AAB + SEWD + AAC , MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}, previewType: 0
                }); 
                await message.client.sendMessage(message.jid, SEWE + mesaj + SEWF, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0});
            });
        } else {
            await message.client.sendMessage(message.jid, NEED_NUM, MessageType.text);
        }
        
    }));
    
}
