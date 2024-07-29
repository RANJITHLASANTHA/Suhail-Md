const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiWEFmRU5hWE14YWpVdDN4TCtjRzBDdVRiOTZlVnJaaDlDRHRQY3FkNThJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1ZGx0aGxOWVNLeXV2UmJWcDZlTExRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2OGVhZDk2LWYwOGItNGYxZi1hNTg1LWYwM2ZkMGMyZGRlMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDI0MyxcbiAgICAgIDQsXG4gICAgICAxNTYsXG4gICAgICAxNDMsXG4gICAgICA5LFxuICAgICAgMjMyLFxuICAgICAgMjEzLFxuICAgICAgNzQsXG4gICAgICAxLFxuICAgICAgMzAsXG4gICAgICA2OSxcbiAgICAgIDk2LFxuICAgICAgMjA1LFxuICAgICAgNzMsXG4gICAgICAxMjMsXG4gICAgICAxMDUsXG4gICAgICAyMDIsXG4gICAgICAxNjQsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAyNDcsXG4gICAgICA4NyxcbiAgICAgIDE1MyxcbiAgICAgIDE3MCxcbiAgICAgIDEwMCxcbiAgICAgIDE0NCxcbiAgICAgIDExMyxcbiAgICAgIDU0LFxuICAgICAgMjAwLFxuICAgICAgNzUsXG4gICAgICA1MixcbiAgICAgIDIzNyxcbiAgICAgIDczLFxuICAgICAgNTgsXG4gICAgICAyNSxcbiAgICAgIDE1MyxcbiAgICAgIDIxOSxcbiAgICAgIDYwLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZINVg1UDg0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1OTQwNDk5MDo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFnZW50IFBhbmRhXCIsXG4gICAgXCJsaWRcIjogXCIyNDc0MDM0NzA5NDYzMzg6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJ2a0tBREVNRHpqN1VHR0NrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEVkowN3U3OXFTRTZFZ0ZzaDZSSEQzSWg2U3JYWW11V1lhVlhCeWxSNFRFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVLRG9hMjRqY09oaFVDekFwUnY5ZDhzcWNsMDZhWUJId1V2S3o5Rk4wWExuVnhqYnRPQjBRTk1lWFhhZzJtMHRvejg1dmhxOVhwSXhuMTY0bytCZEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBXeFAwaWpsWmFuQmdURUMvS05tRzBZRWNGcUlHUUlLbnc3dk03WnQvNVVOdG0vR1NWT2ZSd3orVkRxekVTMDMwTWUycGNML1p6LzkyRjQxSzBQVUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5NDA0OTkwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMjIzNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVoZy5qc29uIjogIntcImtleURhdGFcIjpcIjhBZjRrTkVJVUJUU2VQYXZmcTI1Nzd2TE5CU1B3MUxoQ2VHYmRxeFk1MVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcyNjkxNjcwLFwiY3VycmVudEluZGV4XCI6MzksXCJkZXZpY2VJbmRleGVzXCI6WzAsMzcsMzhdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAxMjkwNDE0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
