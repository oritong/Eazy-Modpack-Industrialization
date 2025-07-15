ItemEvents.tooltip( e => {
})
//格式[物品, tooltip]
let tooltip_zh_cn = [
    ['gtceu:wrought_iron_ingot', '使用锻铁粒来合成'],
    ['gtceu:wrought_iron_nugget', '使用铁粒在熔炉中烧制而成'],
    ['minecraft:stone', '用锻造锤破坏我得到空气'],
    ['minecraft:cobblestone', '用锻造锤破坏我得到沙砾'],
    ['minecraft:gravel', '用锻造锤破坏我得到沙子'],
    ['minecraft:sand','我没有下一级啦'],
    ['mbd2:i_fluid_input', '§b流体容量§r：10000mB'],
    ['mbd2:i_fluid_output', '§b流体容量§r：10000mB'],
    ['mbd2:i_item_input', '§6物品槽位数量§r：1'],
    ['mbd2:i_item_output', '§6物品槽位数量§r：1'],
]

ItemEvents.tooltip(e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        
        e.add(key, Text.translate('tt.' + key))
    })
})

ClientEvents.lang('zh_cn', e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        e.add('tt.' + key, text)
    })
})