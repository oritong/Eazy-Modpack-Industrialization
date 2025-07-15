let pressing_head = [
  'diamond'
]
ServerEvents.tags("item",e=>{
    e.add('forge:tools/shovels', 'tinkers_things:shovel')
    e.add('ori:ars_logs', 'ars_nouveau:blue_archwood_log')
    e.add('ori:ars_logs', 'ars_nouveau:red_archwood_log')
    e.add('ori:ars_logs', 'ars_nouveau:green_archwood_log')
    e.add('ori:ars_logs', 'ars_nouveau:purple_archwood_log')
    let tools_hammer = e.get('forge:tools/hammers').getObjectIds()
    tools_hammer.forEach(t => {
      e.add('forge:tools', t)
    })
    let tools_saw = e.get('forge:tools/saws').getObjectIds()
    tools_saw.forEach(t=>{
      e.add('forge:tools', t)
    })
    mbd2_item_input.forEach(a=>{
      e.add('ori:item_in', a)
      e.add('ori:in', a)
    })
    mbd2_fluid_input.forEach(a=>{
      e.add('ori:fluid_in', a)
      e.add('ori:in', a)
    })
    mbd2_item_output.forEach(a=>{
      e.add('ori:item_out', a)
      e.add('ori:out', a)
    })
    mbd2_fluid_output.forEach(a=>{
      e.add('ori:fluid_out', a)
      e.add('ori:out', a)
    })
    pressing_head.forEach(a=>{
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
ServerEvents.tags('block',e=>{
    mbd2_item_input.forEach(a=>{
      e.add('ori:item_in', a)
      e.add('ori:in', a)
    })
    mbd2_fluid_input.forEach(a=>{
      e.add('ori:fluid_in', a)
      e.add('ori:in', a)
    })
    mbd2_item_output.forEach(a=>{
      e.add('ori:item_out', a)
      e.add('ori:out', a)
    })
    mbd2_fluid_output.forEach(a=>{
      e.add('ori:fluid_out', a)
      e.add('ori:out', a)
    })
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
