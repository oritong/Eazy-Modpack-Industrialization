let key_zh_cn = [
]
let item_js_key_zh_cn = [
    ["black_knife.desc", "§ka§rBlack§ka§rKnife§ka§r-§ka§rToby§ka§rFox§ka"],
    ["mystic_light_quest.desc", "Mystic Light Quest - 塞壬唱片"]
]
let item_gt_key_zh_cn = [
    ["grade_1_purified_water", "源初涌动之息"],
    ['grade_2_purified_water', '微光涤尘之澈'],
    ['grade_3_purified_water', '晶核汇聚之脉'],
    ['grade_4_purified_water', '清流激石之冽'],
    ['grade_5_purified_water', '深寒凝萃之华'],
    ['grade_6_purified_water', '超维滤净之析'],
    ['grade_7_purified_water', '星辉盈渊之沁'],
    ['grade_8_purified_water', '太虚归真之寂'],
    ['sodium_cyanide', '氰化钠'],
    ['ethyl_alpha_cyanoacetate', 'α–氰基丙烯酸乙酯'],
    ['ethyl_cyanoacrylate', '氰基乙酸乙酯'],
    ['glacial_acetic_acid', '冰醋酸'],
    ['chloroacetic_acid', '氯乙酸']
]
let fluid_js_zh_cn = [
    ['creosote', '杂酚油']
]
let mbd2_key_zh_cn = [
    ['coke_oven', '焦炉'],
    ['primitive_blast_furnace', '土高炉'],
    ['proto_smelter_crucible', '土坩埚'],
    ['advanced_furnace_ii', '锻钢II号'],
    ['i_fluid_input', 'I级输入仓'],
    ['i_fluid_output', 'I级输出仓'],
    ['i_item_input', 'I级输入总线'],
    ['i_item_output', 'I级输出总线'],
]
ClientEvents.lang('zh_cn', e => {
    key_zh_cn.forEach(([key, value]) => {
        e.add(key, value)
    })
    item_js_key_zh_cn.forEach(([key, value]) => {
        e.add(`item.kubejs.${key}`, value)
    })
    item_gt_key_zh_cn.forEach(([key, value]) => {
        e.add(`material.gtceu.${key}`, value)
    })
    fluid_js_zh_cn.forEach(([key, name])=>{
        e.add(`item.kubejs.${key}_bucket`, name)
        e.add(`fluid.kubejs.${key}`, name)
        e.add(`block.kubejs.${key}`, name)
    })
    mbd2_key_zh_cn.forEach(([key, name])=>{
        e.add(`block.mbd2.${key}`, name)
    })
})