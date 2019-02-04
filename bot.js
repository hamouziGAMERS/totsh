const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










const adminprefix = "بريفكس مثال *";//FRAS
const devs = ['542017241378586645','542000476686909440'];//FRAS
client.on('message', message => {//FRAS
  var argresult = message.content.split(` `).slice(1).join(' ');//FRAS
    if (!devs.includes(message.author.id)) return;//FRAS
    
if (message.content.startsWith(adminprefix + 'play')) {//fras
  client.user.setGame(argresult);//fras
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)//fras
} else //fras
  if (message.content.startsWith(adminprefix + 'name')) {//fras
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});



client.login(NTQyMDE3MjQxMzc4NTg2NjQ1.Dzow4Q.LfbPY_Y5rO7YpJ4dTQubmL6p6hc);
