//附魔
ServerEvents.recipes(e=>{
    e.recipes.ars_nouveau.enchantment(['ars_nouveau:manipulation_essence', 'botania:manaweave_cloth', 'botania:manaweave_cloth', 'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block'], 'minecraft:protection', 1, 500)
    e.recipes.ars_nouveau.enchantment(['ars_nouveau:manipulation_essence', 'botania:manaweave_cloth', 'botania:manaweave_cloth', 'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block', 'minecraft:lapis_block', Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1).strongNBT()], 'minecraft:protection', 2, 750)
    e.recipes.ars_nouveau.enchantment(['ars_nouveau:manipulation_essence', 'botania:manaweave_cloth', 'botania:manaweave_cloth', 'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block', 'minecraft:lapis_block', 'minecraft:lapis_block', Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 2).strongNBT()], 'minecraft:protection', 3, 1000)
})