let registry_common = [
    ['pattern_with_paper', '附着纸浆的模具'],
    ['the_black_knife', '黑刀'],
    ['super_glue_package', '强力胶包装'],
    ['uncooked_steel_dust', '生钢粉']
];

StartupEvents.registry('item', event => {
    registry_common.forEach(item => {
        event.create(item[0]).displayName(item[1])
    })
    event.create("black_knife", "music_disc").song("kubejs:music.black_knife", 117).tag("music_discs").displayName('Black Knife')
    event.create('mystic_light_quest', 'music_disc').song('kubejs:music.mystic_light_quest', 207).tag('music_discs').displayName('Mystic Light Quest')
})

StartupEvents.registry("sound_event", e => {
    e.create("music.black_knife")
    e.create('music.mystic_light_quest')
})