//被替换 替换
let rpl_all = [
    ['create:andesite_alloy', 'gtceu:wrought_iron_ingot'],
    ['pneumaticcraft:ingot_iron_compressed', 'gtceu:wrought_iron_ingot'],
    ['#forge:plates/iron', 'gtceu:iron_plate']
]

ServerEvents.recipes(e => {
    rpl_all.forEach(([a, b])=>{
        e.replaceInput({}, a, b)
        e.replaceOutput({}, a, b)
    })
    e.replaceInput({mod: 'botania'}, '#botania:seed_apothecary_reagent', 'ars_nouveau:magebloom_crop')
    e.replaceInput({id: 'ars_nouveau:magebloom_crop'}, '#forge:seeds', 'minecraft:wheat_seeds')
})

/*
//配方需要满足输入木棍和木板标签才能将输入的木棍替换为烈焰棒
    event.replaceInput({input:'minecraft:stick',input:'#minecraft:planks'},'minecraft:stick','minecraft:blaze_rod');
    //配方需要满足输出物品为:发射器、投掷器、熔炉时才能将输入物品为圆石替换为钻石
    event.replaceInput([{output:'minecraft:dispenser'},{output:'minecraft:dropper'},{output:'minecraft:furnace'}],"minecraft:cobblestone",'minecraft:diamond');
    //配方只要不满足输入物品为木棍和木板标签的都将输出物品为木头标签替换为石砖
    event.replaceOutput({not:{input:'minecraft:stick',input:'#minecraft:planks'}},'#minecraft:logs','minecraft:stone_bricks');
*/