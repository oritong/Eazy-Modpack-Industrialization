ItemEvents.tooltip(e => {
})
//格式[物品, tooltip]
let tooltip_zh_cn = [
    ['gtceu:wrought_iron_ingot', '使用锻铁粒来合成'],
    ['gtceu:wrought_iron_nugget', '使用铁粒在熔炉中烧制而成'],
    ['minecraft:stone', '用锻造锤破坏我得到空气'],
    ['minecraft:cobblestone', '用锻造锤破坏我得到沙砾'],
    ['minecraft:gravel', '用锻造锤破坏我得到沙子'],
    ['minecraft:sand', '我没有下一级啦'],
    ['mbd2:i_fluid_input', '§b流体容量§r：10000mB'],
    ['mbd2:i_fluid_output', '§b流体容量§r：10000mB'],
    ['mbd2:i_item_input', '§6物品槽位数量§r：1'],
    ['mbd2:i_item_output', '§6物品槽位数量§r：1'],
    ['create:potato_cannon', '§4这样事情就完美解决喽！'],
    ['kubejs:xi_lian_zhen', '西靠穷山　怪石嶙峋　小人得势　祸心包藏'],
    ['kubejs:bei_ci_mian', '北窗有松　峥峥如怪　其枝冲面　唯有避之'],
    ['kubejs:nan_jian_shan', '坐北朝南　开门见山　重峦叠嶂　且挡其势'],
    ['kubejs:dong_que_jiao', '天圆地方　东缺一角　言不入耳　家宅不宁'],
    ['kubejs:qi_tu_sheng_jin', '奇土覆币　闻有金臭　盈盈聚财　土亦消匿'],
    ['kubejs:shui_sheng_mu_hu', '埋之地下　可见水光　生木护宅　水光渐散'],
    ['kubejs:jin_han_shui_yan', '币掺异金　抚之极寒　凝露其上　盈盈水色'],
    ['kubejs:huo_zhuo_tu_wo', '灼烫难触　落地即燃　火熄烟灭　土肥草长'],
    ['kubejs:tou_mu_yan_yan', '嵌于柴中　无可取下　投之敌营　猛火不灭'],
    ['kubejs:ku_han', '冽彼冬风　冰雪其雱　任力者苦　移城志高'],
    ['kubejs:fei_feng', '匪风发发　其流荡荡　两江之渔　以待风息'],
    ['kubejs:lin_yu', '霖雨霏霏　疏渠活水　润叶泽茎　风雨时也'],
    ['kubejs:pi_li', '惊雷坠地　百工奔忙　引电疏霆　逢凶化吉'],
    ['kubejs:han_re', '朝霞暮霞　无水煎茶　牧草盈仓　有备无患'],
    ['kubejs:hong_ni', '虹首坠江　饮江皋霁　祸不妄至　谋事在人'],
    ['kubejs:wu_song', '冽彼冰花　太平佳兆　其始播谷　风调雨顺'],
    ['kubejs:shuang_xue', '冰封霜降　驰道难行　川流车乘　让礼三分'],
    ['kubejs:chi_dao_chang', '求工求学　驰道疏通　归程无阻　离多返少'],
    ['kubejs:wu_ren_zhi_zheng', '东拳西腿　争胜永日　好事者众　各学几分'],
    ['kubejs:bai_ye_ju_xing', '两江汤汤　孕彼百氏　百业争发　愈渐繁华'],
    ['kubejs:han_chuang_zhi', '繁霜覆窗　萧萧其风　灯下苦读　志高凌云'],
    ['kubejs:zhi_yu_sui', '老树开花　心顽志坚　耄儒看榜　今年中乎'],
    ['kubejs:hui_bi_zai', '钦天之眼　目光炯炯　防灾其冗　化繁为简'],
    ['kubejs:zhan_xue_liu', '烽动鼓鸣　千军即发　武极弭乱　亦能致乱'],
    ['kubejs:yu_liang_yi', '棋逢对手　相与有成　弈枰胜负　谋定看天'],
    ['kubejs:yin_shi_you', '柴米油盐　隐市之逸　喜怒哀乐　亦有纷扰'],
    ['kubejs:fa_yu_lv', '法之为公　情无可恕　律之悦情　翩翾若舞'],
    ['kubejs:liang_jiang_chun', '散仙妙手　春回两江　青山有碍　心摧不弃'],
    ['kubejs:fan_wu_bian', '凡物之变　日夜不息　泡影无踪　唯付一笑'],
    ['kubejs:ren_jian_chang_cun', '钢铁拟心　岂能久乎　欲存于世　砥砺必行'],
    ['kubejs:shen_nong_shou', '枯田万亩　静守千年　壤成膏沃　百谷丰登'],
    ['kubejs:meng_qi_wu', '笔自成书　无人茶沸　垂帘拂面　觉来知梦'],
    ['kubejs:yi_zi_luo', '教而化之　民识愈开　无字无念　了了忘缘'],
    ['kubejs:dai_ji_yuan', '好物有价　至情无市　因时施宜　静待佳音'],
    ['kubejs:hua_ren_jian', '良辰美景　自有去时　未若画中　墨香长留'],
    ['kubejs:zi_kuang_qing', '酒至酣处　诗兴亦狂　或邀双月　或闻征鼓'],
    ['kubejs:sui_xing_tian_shi', '岁识即醒　天地震荡　伥气起兮　难捱此难'],
    ['kubejs:wu_jiao_zhi_mei', '有神无形　浊水晦冥　岁识怨怒　乱流相击'],
    ['kubejs:qing_feng_shou', '农忙事毕　影戏喧喧　祈愿来年　时和岁丰'],
    ['kubejs:sai_shang_yue', '漠上圆月　寒沙白草　将士出塞　铁衣如雪'],
    ['kubejs:ju_li_ze_qiang', '广厦亭亭　驰道交通　八方施力　大业既成'],
    ['kubejs:jun_tun_ken', '执刃之手　挥锄不辍　良田郁郁　谷仓盈盈'],
    ['kubejs:an_shuo_xi', '戾彼硕鼷　横行纵暴　食以好麦　无食我苗'],
    ['kubejs:gui_yi_dai_bi', '您有需求　他有答案　若有诚意　交个朋友'],
    ['kubejs:he_hu_li', '喜宴嘉宾　厚礼相赠　还礼与否　忧以忘喜'],
    ['kubejs:jian_cheng_juan', '茧能成绢　故得青目　天下熙熙　惟利是营'],
    ['kubejs:hei_zi_fu', '诸事顺遂　似有天助　一子既落　已在局中'],
    ['kubejs:ping_sha_zhi_dun', '边城屡覆　寇乱沙碛　终得一城　走沙御敌'],
    ['kubejs:huo_shang_zhi_zao', '矿以为火　城以为灶　化灾为宜　进取奇速'],
    ['kubejs:yi_shan_nan', '土木学子　念彼高山　移城在即　技犹不及'],
    ['kubejs:yi_shan_fan', '彼山崔崔　乡心眷眷　移山迢迢　将勤补拙'],
    ['kubejs:zhao_wen_dao', '天师学徒　难得贤才　朝起闻道　惺忪思眠'],
    ['kubejs:tian_xia_xian', '一朝出师　自树其帜　心怀天下　少年壮志'],
    ['kubejs:chu_you_wen', '炎字为首　千字呼出　同文同心　百氏共荣'],
    ['kubejs:zai_dao_yuan', '著文载道　行以文传　彼江杳杳　有光始清'],
    ['kubejs:qin_yun_ti', '轻舞缓行　习拳蹬腿　晨园熙攘　日日不倦'],
    ['kubejs:xiu_xing_qing', '吹呼吐纳　凝思冥想　静以养性　防患未然'],
    ['kubejs:xin_wu_huan', '澹然忘忧　琐事无争　心闲自乐　陶然成趣'],
    ['kubejs:ya_jue_jin_bi', '东西不错　千金不换　哈哈哈哈　再加个零'],
    ['kubejs:hong_meng_kai_huang', '百氏从炎　避祸迁徙　两江之畔　垦墟为田'],
    ['kubejs:ji_ren_zhong', '平步青云　志在万里　云浮霞动　且兢其步'],
    ['kubejs:sheng_zhao_feng_shen', '悠悠上古　群英争辉　圣诏赫赫　一举逐神'],
    ['kubejs:shen_mi_shang_jia', '革旧之机　从新之望　非无可买　愿以何换'],
    ['kubejs:zhu_xie_lei_fa', '其心昭明　有思则悟　诛恶及本　雷撼天地'],
    ['kubejs:shang_lu_nan_xing', '国之初开　荒路匪起　出金买路　镖匪同存'],
    ['minecraft:lightning_rod', '是的，这就是格雷科技0']
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