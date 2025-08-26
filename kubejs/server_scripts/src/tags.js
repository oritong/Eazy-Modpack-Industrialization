let pressing_head = [
  'diamond'
]
ServerEvents.tags("item", e => {
  e.add('forge:tools/shovels', 'tinkers_things:shovel')
  e.add('ori:ars_logs', 'ars_nouveau:blue_archwood_log')
  e.add('ori:ars_logs', 'ars_nouveau:red_archwood_log')
  e.add('ori:ars_logs', 'ars_nouveau:green_archwood_log')
  e.add('ori:ars_logs', 'ars_nouveau:purple_archwood_log')
  e.add('ori:circuit', 'gtceu:resin_circuit_board')
  e.add('ori:tnt', 'gtceu:industrial_tnt')
  e.add('ori:tnt', 'minecraft:tnt')
  e.add('ori:tnt', 'gtceu:powderbarrel')
  e.add('ori:tnt', 'ae2:tiny_tnt')
  e.add('ori:tnt', 'gtceu:dynamite')
  e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
  petals_colors.forEach(a => {
    e.remove('botania:petals', `botania:${a}_mushroom`)
    e.remove('forge:mushrooms', `botania:${a}_mushroom`)
    e.remove('farmersdelight:cabbage_roll_ingredients', `botania:${a}_mushroom`)
    e.remove('appbot:p2p_attunements/mana_p2p_tunnel', `botania:${a}_mushroom`)
    e.remove('botania:shimmering_mushrooms', `botania:${a}_mushroom`)
    e.remove(`botania:petals/${a}`, `botania:${a}_mushroom`)
  })
  let tools_hammer = e.get('forge:tools/hammers').getObjectIds()
  tools_hammer.forEach(t => {
    e.add('forge:tools', t)
  })
  let tools_saw = e.get('forge:tools/saws').getObjectIds()
  tools_saw.forEach(t => {
    e.add('forge:tools', t)
  })
  mbd2_item_input.forEach(a => {
    e.add('ori:item_in', a)
    e.add('ori:in', a)
  })
  mbd2_fluid_input.forEach(a => {
    e.add('ori:fluid_in', a)
    e.add('ori:in', a)
  })
  mbd2_item_output.forEach(a => {
    e.add('ori:item_out', a)
    e.add('ori:out', a)
  })
  mbd2_fluid_output.forEach(a => {
    e.add('ori:fluid_out', a)
    e.add('ori:out', a)
  })
  pressing_head.forEach(a => {
    e.add('vintageimprovements:curving_heads', a)
  })
})
let mbd2_item_input = [
  'mbd2:i_item_input'
]
let mbd2_item_output = [
  'mbd2:i_item_output'
]
let mbd2_fluid_input = [
  'mbd2:i_fluid_input'
]
let mbd2_fluid_output = [
  'mbd2:i_fluid_output'
]
ServerEvents.tags('block', e => {
  mbd2_item_input.forEach(a => {
    e.add('ori:item_in', a)
    e.add('ori:in', a)
  })
  mbd2_fluid_input.forEach(a => {
    e.add('ori:fluid_in', a)
    e.add('ori:in', a)
  })
  mbd2_item_output.forEach(a => {
    e.add('ori:item_out', a)
    e.add('ori:out', a)
  })
  mbd2_fluid_output.forEach(a => {
    e.add('ori:fluid_out', a)
    e.add('ori:out', a)
  })
})

ServerEvents.tags('fluid', e => {
  e.remove('minecraft:water', 'createaddition:bioethanol')
  e.remove('minecraft:water', 'createaddition:flowing_bioethanol')
  e.remove('minecraft:water', 'createaddition:flowing_seed_oil')
  e.remove('minecraft:water', 'createaddition:seed_oil')
  e.remove('minecraft:water', 'minecraft:flowing_water')
})
/*
// 监听标签事件
ServerEvents.tags('item', event => {
  // 将 minecraft:diamond_ore 添加至 #forge:cobblestone
  e.add('forge:cobblestone', 'minecraft:diamond_ore')
  
  // 从 #forge:cobblestone 中移除 minecraft:mossy_cobblestone
  e.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')
  
  // 移除 #forge:ingots/copper 中的所有对象
  e.removeAll('forge:ingots/copper')
  
  // 用于 FTB任务 检测物品NBT
  e.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')
  
  // 自定义标签（#forge:completely_new_tag）
  e.add('forge:completely_new_tag', 'minecraft:clay_ball')
  
  // 移除包含 minecraft:stick 的所有标签中的所有对象
  e.removeAllTagsFrom('minecraft:stick')
  
  // 将 #forge:stone 中所有非闪长岩对象添加到 #c:stone 中
  const stones = e.get('forge:stone').getObjectIds()
  const blacklist = Ingredient.of(/.*diorite.*(delete me)/)
  stones.forEach(stone => {
    if (!blacklist.test(stone)) {
      e.add('c:stone', stone)
    }
  })
})
*/
