
let $ClientLanguage = Java.loadClass("net.minecraft.client.resources.language.ClientLanguage")

// 丢client里面
// 自动对比zh_cn和en_us的语言文件，
// 并导出zh_cn缺少的语言文件，
// 在kubejs文件夹中的NotInChinese.json中
Client.tell("导出后记得删除该js，避免reload重复导出")
let Chinese = $ClientLanguage.loadFrom(Client.resourceManager, ["zh_cn"], true)
let English = $ClientLanguage.loadFrom(Client.resourceManager, ["en_us"], true)
let NotInChinese = Utils.newMap()
English.languageData.keySet().toArray().sort().forEach(key=>{
  if(!Chinese.has(key))
    NotInChinese.put(key, English.getOrDefault(key))
})/*
English.languageData.forEach(( key,value) => {
  if (!Chinese.languageData.containsKey(key)) {
    NotInChinese.put(key, value)
  }
})*/
JsonIO.write("kubejs/NotInChinese.json", NotInChinese)