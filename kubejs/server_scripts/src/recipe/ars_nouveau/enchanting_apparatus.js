//附魔装置
ServerEvents.recipes(e=>{
    e.recipes.ars_nouveau.enchanting_apparatus(['ars_nouveau:rune', Item.of('botania:mana_tablet', '{mana:500000}').strongNBT(), 'ars_nouveau:rune', 'botania:mana_diamond_block', 'ars_nouveau:rune', 'ars_nouveau:manipulation_essence'], 'botania:livingrock', 'botania:runic_altar')
})