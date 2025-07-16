let registry_common = [
    ['pattern_with_paper', '附着纸浆的模具'],
    ['the_black_knife', '黑刀'],
    ['super_glue_package', '强力胶包装'],
    ['uncooked_steel_dust', '生钢粉'],
    ['uncooked_rubber_dust', '橡胶末混合物']
];

StartupEvents.registry('item', e => {
    registry_common.forEach(([a,b]) => {
        e.create(a).displayName(b)
    })
    e.create("black_knife", "music_disc").song("kubejs:music.black_knife", 117).tag("music_discs").displayName('Black Knife')
    e.create('mystic_light_quest', 'music_disc').song('kubejs:music.mystic_light_quest', 207).tag('music_discs').displayName('Mystic Light Quest')
    e.create('basic_circuit_i').displayName('配方限制器I').tag('ori:circuit')
    e.create('basic_circuit_ii').displayName('配方限制器II').tag('ori:circuit')
    e.create('basic_circuit_iii').displayName('配方限制器III').tag('ori:circuit')
    e.create('basic_circuit_iv').displayName('配方限制器IV').tag('ori:circuit')
    e.create('basic_circuit_v').displayName('配方限制器V').tag('ori:circuit')
    e.create('basic_circuit_vi').displayName('配方限制器VI').tag('ori:circuit')
    e.create('basic_circuit_vii').displayName('配方限制器VII').tag('ori:circuit')
    e.create('basic_circuit_viii').displayName('配方限制器VIII').tag('ori:circuit')
    e.create('basic_circuit_ix').displayName('配方限制器IX').tag('ori:circuit')
})

StartupEvents.registry("sound_event", e => {
    e.create("music.black_knife")
    e.create('music.mystic_light_quest')
})