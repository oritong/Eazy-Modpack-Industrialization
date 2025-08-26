let registry_common = [
    ['pattern_with_paper', '附着纸浆的模具'],
    ['the_black_knife', '黑刀'],
    ['super_glue_package', '强力胶包装'],
    ['uncooked_steel_dust', '生钢粉'],
    ['uncooked_rubber_dust', '橡胶末混合物']
]
//黄色 第三稀有
let registry_uncommon = [

]
//青色 第二稀有
let registry_rare = [
    ['originium_ingot', '源石锭']
]
//紫色 最稀有
let registry_epic = [

]
//半成品_机霸动力
let registry_sequenced_assembly = [
    ['infinite_water_sequenced_assembly', '无限水元件（半成品）']
]

StartupEvents.registry('item', e => {
    registry_common.forEach(([a, b]) => {
        e.create(a).displayName(b)
    })
    registry_rare.forEach(([a, b]) => {
        e.create(a).displayName(b).rarity('rare')
    })
    registry_uncommon.forEach(([a, b]) => {
        e.create(a).displayName(b).rarity('uncommon')
    })
    registry_epic.forEach(([a, b]) => {
        e.create(a).displayName(b).rarity('epic')
    })
    registry_sequenced_assembly.forEach(([a, b]) =>{
        e.create(a, 'create:sequenced_assembly').displayName(b)
    })
    e.create("black_knife", "music_disc").song("kubejs:music.black_knife", 117).tag("music_discs").displayName('Black Knife')
    e.create('mystic_light_quest', 'music_disc').song('kubejs:music.mystic_light_quest', 207).tag('music_discs').displayName('Mystic Light Quest')
    e.create('basic_circuit_i').displayName('配方限制器I').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_i')
    e.create('basic_circuit_ii').displayName('配方限制器II').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_ii')
    e.create('basic_circuit_iii').displayName('配方限制器III').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_iii')
    e.create('basic_circuit_iv').displayName('配方限制器IV').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_iv')
    e.create('basic_circuit_v').displayName('配方限制器V').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_v')
    e.create('basic_circuit_vi').displayName('配方限制器VI').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_vi')
    e.create('basic_circuit_vii').displayName('配方限制器VII').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_vii')
    e.create('basic_circuit_viii').displayName('配方限制器VIII').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_viii')
    e.create('basic_circuit_ix').displayName('配方限制器IX').tag('ori:circuit').texture('kubejs:item/circuit/basic/basic_circuit_ix')
})

StartupEvents.registry("sound_event", e => {
    e.create("music.black_knife")
    e.create('music.mystic_light_quest')
})

//藏钱木盒
let money_heng = [
    ['qi_tu_sheng_jin', '奇土生金'],
    ['shui_sheng_mu_hu', '水生木护'],
    ['jin_han_shui_yan', '金寒水衍'],
    ['tou_mu_yan_yan', '投木炎延'],
    ['ku_han', '苦寒'],
    ['fei_feng', '匪风'],
    ['lin_yu', '霖雨'],
    ['pi_li', '霹雳'],
    ['han_re', '旱热'],
    ['hong_ni', '虹霓'],
    ['wu_song', '雾凇'],
    ['shuang_xue', '霜雪'],
    ['zhi_yu_sui', '志欲遂'],
    ['hui_bi_zai', '慧避灾'],
    ['qing_feng_shou', '庆丰收'],
    ['sai_shang_yue', '塞上月'],
    ['jun_tun_ken', '军屯垦'],
    ['gui_yi_dai_bi', '诡意代币'],
    ['yi_shan_fan', '移山繁'],
    ['tian_xia_xian', '天下先'],
    ['chu_you_wen', '初有文'],
    ['qin_yun_ti', '勤运体'],
    ['hong_meng_kai_huang', '鸿蒙开荒']
]
let money_hua = [
    ['huo_zhuo_tu_wo', '火灼土沃'],
    ['chi_dao_chang', '驰道长'],
    ['wu_ren_zhi_zheng', '武人之争'],
    ['bai_ye_ju_xing', '百业俱兴'],
    ['ju_li_ze_qiang', '聚力则强'],
    ['jian_cheng_juan', '茧成绢'],
    ['ping_sha_zhi_dun', '平沙之盾'],
    ['huo_shang_zhi_zao', '火上之灶'],
    ['zai_dao_yuan', '载道远'],
    ['xiu_xing_qing', '修性情'],
    ['xin_wu_huan', '心无患'],
    ['ya_jue_jin_bi', '鸭爵金币'],
    ['ji_ren_zhong', '己任重'],
    ['sheng_zhao_feng_shen', '圣诏封神'],
    ['shen_mi_shang_jia', '神秘商贾']
]
let money_li = [
    ['xi_lian_zhen', '西廉贞'],
    ['bei_ci_mian', '北刺面'],
    ['nan_jian_shan', '南见山'],
    ['dong_que_jiao', '东缺角'],
    ['han_chuang_zhi', '寒窗志'],
    ['zhan_xue_liu', '战血流'],
    ['yu_liang_yi', '遇良弈'],
    ['yin_shi_you', '隐市忧'],
    ['fa_yu_lv', '法与律'],
    ['liang_jiang_chun', '两江春'],
    ['fan_wu_bian', '凡物变'],
    ['ren_jian_chang_cun', '人间长存'],
    ['shen_nong_shou', '神农守'],
    ['meng_qi_wu', '梦奇物'],
    ['yi_zi_luo', '一字落'],
    ['dai_ji_yuan', '待机缘'],
    ['hua_ren_jian', '画人间'],
    ['zi_kuang_qing', '恣狂情'],
    ['sui_xing_tian_shi', '岁醒天时'],
    ['wu_jiao_zhi_mei', '无皎之昧'],
    ['an_shuo_xi', '安硕鼷'],
    ['he_hu_li', '合乎礼'],
    ['hei_zi_fu', '黑子伏'],
    ['yi_shan_nan', '移山难'],
    ['zhao_wen_dao', '朝闻道'],
    ['zhu_xie_lei_fa', '诛邪雷法'],
    ['shang_lu_nan_xing', '商路难行']
]
StartupEvents.registry('item', e => {
    e.create('da_yan_tong_bao').displayName('大炎通宝').tag('ori_money').texture('kubejs:item/money/da_yan_tong_bao')
    money_heng.forEach(([a, b])=>{
        e.create(a).displayName(b).rarity('rare').tag('ori_money').texture(`kubejs:item/money/${a}`)
    })
    money_li.forEach(([a, b])=>{
        e.create(a).displayName(`§4${b}`).rarity('epic').tag('ori_money').texture(`kubejs:item/money/${a}`)
    })
    money_hua.forEach(([a, b])=>{
        e.create(a).displayName(b).rarity('epic').tag('ori_money').texture(`kubejs:item/money/${a}`)
    })
})
StartupEvents.modifyCreativeTab('kubejs:tab', e=>{
    e.remove('kubejs:da_yan_tong_bao')
    money_heng.forEach(([a, b])=>{
        e.remove(`kubejs:${a}`)
    })
    money_li.forEach(([a, b])=>{
        e.remove(`kubejs:${a}`)
    })
    money_hua.forEach(([a, b])=>{
        e.remove(`kubejs:${a}`)
    })
})
StartupEvents.registry('creative_mode_tab', e=>{
    e.create('ori:tab_money').icon(() => Item.of("kubejs:da_yan_tong_bao")).displayName = Text.translatable("item_group.ori.tab_money")
})
StartupEvents.modifyCreativeTab('ori:tab_money', e=>{
    e.add('kubejs:da_yan_tong_bao')
    money_heng.forEach(([a, b])=>{
        e.add(`kubejs:${a}`)
    })
    money_li.forEach(([a, b])=>{
        e.add(`kubejs:${a}`)
    })
    money_hua.forEach(([a, b])=>{
        e.add(`kubejs:${a}`)
    })
})