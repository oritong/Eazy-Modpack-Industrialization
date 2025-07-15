PlayerEvents.chat(event => {
    let { message, player, server } = event
    if (message != 'c') return
    function getitem(slot) { return player.inventory.getItem(slot) }
    //读背包指定格子物品当配方
    let input = [
        getitem(9).id, getitem(10).id, getitem(11).id,
        getitem(18).id, getitem(19).id, getitem(20).id,
        getitem(27).id, getitem(28).id, getitem(29).id
    ]
    let output = getitem(21)
    //处理合成配方需要的key
    let count = output.count > 1 ? `${output.count}x ` : ''
    let keys = "ABCDEFGHI"
    let dic = { 'minecraft:air': ' ' }
    for (let i in input) {
        if (!(input[i] in dic)) {
            dic[input[i]] = keys[0]
            keys = keys.slice(1)
        }
        input[i] = dic[input[i]]
    }
    let dic2 = {}
    for (let i in dic) {
        if (dic[i] == ' ') continue
        dic2[dic[i]] = i
    }
    //超级字符串拼接
    let str = `e.shaped('${count}${output.id}', [\n    '${input[0] + input[1] + input[2]}',\n    '${input[3] + input[4] + input[5]}',\n    '${input[6] + input[7] + input[8]}'\n], {\n`
    for (let i in dic2) {
        str += `    ${i}: '${dic2[i]}',\n`
    }
    str = str.slice(0, -2) + `\n}).keepIngredient('forge:tools')`
    player.tell(Text.of('配方已生成，点击复制').hover(str).clickCopy(str))
})
//使用方法
//背包左上的3x3区域会被用于生成配方，3x3右侧一格作为输出
//材材材
//材材材产
//材材材
//然后在聊天栏发c即可生成(点击聊天栏复制代码)

//无序合成
PlayerEvents.chat(event => {
    let { message, player, server } = event
    if (message != 'x') return
    function getitem(slot) { return player.inventory.getItem(slot) }

    // 读取3x3网格物品（从快捷栏下方开始）
    let inputSlots = [
        9, 10, 11,   // 第一行
        18, 19, 20,  // 第二行
        27, 28, 29   // 第三行
    ]
    let output = getitem(21)

    // 获取实际物品ID列表（过滤空气）
    let materials = inputSlots
        .map(slot => getitem(slot))
        .filter(item => item.id != 'minecraft:air')
        .map(item => `'${item.id}'`)

    // 生成配方字符串
    let count = output.count > 1 ? `${output.count}x ` : ''
    let recipe = `e.recipes.kubejs.shapeless('${count}${output.id}', [${materials.join(', ')}]).keepIngredient('forge:tools')`

    // 发送可点击的文本
    player.tell(
        Text.of('配方已生成，点击复制')
            .hover(recipe)
            .clickCopy(recipe)
    )
})
//使用方法
//背包左上的3x3区域会被用于生成配方，3x3右侧一格作为输出
//材材材
//材材材产
//材材材
//然后在聊天栏发x即可生成(点击聊天栏复制代码)
PlayerEvents.chat(event => {
    let { message, player } = event;
    if (message != 'zhui') return;

    let itemIds = [];
    for (let slot = 0; slot < 36; slot++) {
        let item = player.inventory.getItem(slot);
        if (item.id == 'minecraft:air') continue; // 跳过air
        itemIds.push(`"${item.id}"`);
    }

    // 复制内容：每个ID后加逗号和换行
    let copyResult = itemIds.join(',\n');

    // 悬停预览：每个ID后加逗号和换行，并添加标题
    let hoverPreview = '即将复制的内容:\n' + itemIds.join(',\n');

    let displayText = Text.of('点击复制物品ID列表')
        .hover(Text.of(hoverPreview))
        .clickCopy(copyResult);

    player.tell(displayText);
});
//坠