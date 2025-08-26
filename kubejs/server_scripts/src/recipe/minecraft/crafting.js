ServerEvents.recipes(e => {
    //留给后人解决这个世纪难题
    /*e.shaped('2x gtceu:paper_dust',[
        ' A ',
        'BBB',
        ' C '
    ],{
        A: Item.of('tinkers_things:shovel', '{tic_broken:0b}').weakNBT(),
        B: 'minecraft:sugar_cane',
        C: 'minecraft:bowl'
    }).damageIngredient('#forge:tools/shovels', 3).keepIngredient('minecraft:bowl')
    */
    e.shaped('2x minecraft:paper', [
        ' A ',
        'BBB',
        ' A '
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'kubejs:pattern_with_paper'
    }).keepIngredient('#minecraft:wooden_slabs').replaceIngredient('kubejs:pattern_with_paper', 'tconstruct:pattern')
    e.shaped('2x minecraft:paper', [
        ' B ',
        'ABA',
        ' B '
    ], {
        A: '#minecraft:wooden_slabs',
        B: 'kubejs:pattern_with_paper'
    }).keepIngredient('#minecraft:wooden_slabs').replaceIngredient('kubejs:pattern_with_paper', 'tconstruct:pattern'),
        e.shaped('arsmeteorites:ritual_conjure_meteorites', [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:fine_gold_wire',
            C: 'minecraft:paper',
            D: 'botania:livingwood_planks_slab',
            E: 'minecraft:fire_charge'
        })
    e.shaped('ars_nouveau:agronomic_sourcelink', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'ars_nouveau:source_gem',
        C: 'minecraft:amethyst_shard',
        D: 'minecraft:golden_carrot'
    })
    e.shaped('gtceu:matchbox', [
        'AAA',
        'ABC',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'ars_nouveau:bombegranate_pod',
        C: 'minecraft:paper'
    })
    e.shaped('4x gtceu:matches', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'ars_nouveau:bombegranate_pod'
    })
    e.shaped('ars_nouveau:arcane_pedestal', [
        'ABA',
        'CAC',
        'CAC'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:gold_nugget'
    })
    e.shaped('ars_nouveau:imbuement_chamber', [
        'ABA',
        'BCB',
        'AAA'
    ], {
        A: 'arsdelight:archwood_cabinet',
        B: 'minecraft:gold_ingot',
        C: 'ars_nouveau:source_gem'
    })
    e.shaped('botania:apothecary_default', [
        ' A ',
        'BCD',
        ' C '
    ], {
        A: 'gtceu:neutronium_hammer',
        B: 'gtceu:neutronium_knife',
        C: 'create:andesite_casing',
        D: 'gtceu:neutronium_saw'
    }).keepIngredient('forge:tools')
    e.shaped('botania:mana_pool', [
        'ABA',
        'AAA'
    ], {
        A: 'botania:livingrock',
        B: 'ars_nouveau:magebloom'
    }).keepIngredient('forge:tools')
    e.shaped('ars_nouveau:orange_sbed', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ars_nouveau:magebloom_fiber',
        B: 'ars_nouveau:magebloom_block'
    }).keepIngredient('forge:tools')
    e.shaped('create:wheat_flour', [
        ' A ',
        ' B '
    ], {
        A: 'minecraft:wheat',
        B: '#forge:tools/mortars'
    }).damageIngredient('#forge:tools/mortars')
    e.recipes.kubejs.shapeless('5x kubejs:uncooked_steel_dust', ['gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:charcoal_dust', 'gtceu:charcoal_dust', 'gtceu:charcoal_dust', 'gtceu:charcoal_dust']).keepIngredient('forge:tools')
    e.recipes.kubejs.shapeless('7x kubejs:uncooked_steel_dust', ['gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:coal_dust', 'gtceu:coal_dust', 'gtceu:coal_dust']).keepIngredient('forge:tools')
    e.recipes.kubejs.shapeless('9x kubejs:uncooked_steel_dust', ['gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:coke_dust']).keepIngredient('forge:tools')
    e.shaped('create:encased_fan', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: 'create:shaft',
        B: 'gtceu:neutronium_hammer',
        C: 'create:andesite_casing',
        D: 'gtceu:neutronium_saw',
        E: 'gtceu:steel_rotor'
    }).keepIngredient('forge:tools')
    e.shaped('create:mechanical_saw', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: 'create:shaft',
        B: 'gtceu:neutronium_hammer',
        C: 'create:andesite_casing',
        D: 'gtceu:neutronium_saw',
        E: 'gtceu:steel_buzz_saw_blade'
    }).keepIngredient('forge:tools')
    e.shaped('vintageimprovements:curving_press', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: 'create:piston_extension_pole',
        B: 'gtceu:neutronium_hammer',
        C: 'create:sticky_mechanical_piston',
        D: 'gtceu:neutronium_saw',
        E: 'mekanism:block_steel'
    }).keepIngredient('forge:tools')
    e.shaped('create:sticky_mechanical_piston', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'gtceu:neutronium_hammer',
        B: '#forge:slimeballs',
        C: 'create:mechanical_piston'
    }).keepIngredient('forge:tools')
    e.shaped('create:basin', [
        'A A',
        'AAA'
    ], {
        A: 'mekanism:ingot_steel'
    }).keepIngredient('forge:tools')
    e.shaped('mbd2:proto_smelter_crucible', [
        'A A',
        'AAA'
    ], {
        A: 'gtceu:firebrick'
    }).keepIngredient('forge:tools')
    e.shaped('2x kubejs:uncooked_rubber_dust', [
        'AAA',
        'AAA',
        'BBA'
    ], {
        A: 'gtceu:raw_rubber_dust',
        B: 'gtceu:sulfur_dust'
    }).keepIngredient('forge:tools')
    e.shaped('minecraft:blast_furnace', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'minecraft:furnace',
        C: 'minecraft:smooth_stone'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_i', [
        'A  ',
        ' B ',
        '   '
    ], {
        A: 'ars_nouveau:magebloom_fiber',
        B: '#ori:circuit'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_ii', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'ars_nouveau:magebloom_fiber',
        B: '#ori:circuit'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_iii', [
        '  A',
        ' B ',
        '   '
    ], {
        A: 'ars_nouveau:magebloom_fiber',
        B: '#ori:circuit'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_iv', [
        '   ',
        'AB ',
        '   '
    ], {
        A: 'ars_nouveau:magebloom_fiber',
        B: '#ori:circuit'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_v', [
        '   ',
        ' AB',
        '   '
    ], {
        A: '#ori:circuit',
        B: 'ars_nouveau:magebloom_fiber'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_vi', [
        '   ',
        ' A ',
        'B  '
    ], {
        A: '#ori:circuit',
        B: 'ars_nouveau:magebloom_fiber'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_vii', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: '#ori:circuit',
        B: 'ars_nouveau:magebloom_fiber'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_viii', [
        '   ',
        ' A ',
        '  B'
    ], {
        A: '#ori:circuit',
        B: 'ars_nouveau:magebloom_fiber'
    }).keepIngredient('forge:tools')
    e.shaped('kubejs:basic_circuit_ix', [
        '   ',
        ' A ',
        '   '
    ], {
        A: '#ori:circuit'
    }).keepIngredient('forge:tools')
    e.shaped('mbd2:coke_oven', [
        'ABC',
        'BDB',
        'EBF'
    ], {
        A: 'gtceu:neutronium_wrench',
        B: 'gtceu:iron_plate',
        C: 'gtceu:neutronium_hammer',
        D: 'gtceu:coke_oven_bricks',
        E: 'gtceu:neutronium_file',
        F: 'gtceu:neutronium_crowbar'
    }).keepIngredient('forge:tools')
    e.shaped('8x curvy_pipes:small_item_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:rubber_ingot',
        B: 'minecraft:dropper'
    }).keepIngredient('forge:tools')
    e.shaped('16x curvy_pipes:small_item_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:silicone_rubber_ingot',
        B: 'minecraft:dropper'
    }).keepIngredient('forge:tools')
    e.shaped('32x curvy_pipes:small_item_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:styrene_butadiene_rubber_ingot',
        B: 'minecraft:dropper'
    }).keepIngredient('forge:tools')
    e.shaped('8x curvy_pipes:small_fluid_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:rubber_ingot',
        B: 'minecraft:bucket'
    }).keepIngredient('forge:tools')
    e.shaped('16x curvy_pipes:small_fluid_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:silicone_rubber_ingot',
        B: 'minecraft:bucket'
    }).keepIngredient('forge:tools')
    e.shaped('32x curvy_pipes:small_fluid_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:styrene_butadiene_rubber_ingot',
        B: 'minecraft:bucket'
    }).keepIngredient('forge:tools')
    e.shaped('8x curvy_pipes:small_energy_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:rubber_ingot',
        B: 'minecraft:redstone_block'
    }).keepIngredient('forge:tools')
    e.shaped('16x curvy_pipes:small_energy_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:silicone_rubber_ingot',
        B: 'minecraft:redstone_block'
    }).keepIngredient('forge:tools')
    e.shaped('32x curvy_pipes:small_energy_pipe', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:styrene_butadiene_rubber_ingot',
        B: 'minecraft:redstone_block'
    }).keepIngredient('forge:tools')
    e.shaped('minecraft:white_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:white_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:light_gray_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:light_gray_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:gray_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:gray_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:black_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:black_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:brown_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:brown_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:red_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:red_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:orange_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:orange_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:yellow_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:yellow_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:lime_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:lime_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:green_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:green_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:cyan_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:cyan_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:light_blue_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:light_blue_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:blue_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:blue_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:purple_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:purple_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:magenta_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:magenta_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('minecraft:pink_dye', ['   ', ' B ', ' A '], {
        A: '#gtceu:tools/crafting_mortars',
        B: 'botania:pink_petal'
    }).damageIngredient('#gtceu:tools/crafting_mortars', 1)
    e.shaped('ars_nouveau:arcane_core', [
        'ABA',
        ' C ',
        'ABA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'ars_nouveau:sourcestone',
        C: 'botania:mana_diamond_block'
    }).keepIngredient('forge:tools')
    e.shaped('ars_nouveau:enchanting_apparatus', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:gold_nugget',
        B: 'ars_nouveau:sourcestone',
        C: 'minecraft:gold_ingot',
        D: 'botania:manasteel_ingot'
    }).keepIngredient('forge:tools')
    e.recipes.kubejs.shapeless('2x ars_nouveau:rune', ['ars_nouveau:runic_chalk']).damageIngredient('ars_nouveau:runic_chalk')
    e.shaped('6x create:fluid_pipe', [
        ' A ',
        'B B',
        ' A '
    ], {
        A: 'gtceu:annealed_copper_plate',
        B: 'gtceu:annealed_copper_ingot'
    }).keepIngredient('forge:tools')
    e.shaped('minecraft:clock', [
        ' A ',
        'ABA',
        'CDE'
    ], {
        A: 'gtceu:gold_plate',
        B: 'minecraft:redstone',
        C: 'gtceu:neutronium_screwdriver',
        D: 'minecraft:gold_ingot',
        E: 'gtceu:neutronium_wrench'
    }).keepIngredient('forge:tools')
    e.shaped('create:mechanical_press', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'vintageimprovements:curving_press',
        B: 'mekanism:block_steel',
        C: 'gtceu:neutronium_hammer'
    }).keepIngredient('forge:tools')
    e.shaped('pneumaticcraft:air_compressor', [
        'AAB',
        'ACB',
        'DDE'
    ], {
        A: 'gtceu:red_alloy_ingot',
        B: 'pneumaticcraft:reinforced_stone',
        C: 'create:mechanical_piston',
        D: 'pneumaticcraft:pressure_tube',
        E: 'minecraft:blast_furnace'
    }).keepIngredient('forge:tools')
    e.shaped('6x pneumaticcraft:reinforced_stone', [
        'AAA',
        'AAA',
        'BBB'
    ], {
        A: 'minecraft:stone',
        B: 'pneumaticcraft:ingot_iron_compressed'
    }).keepIngredient('forge:tools')
    e.shaped('4x create:belt_connector', [
        '   ',
        'AAA',
        'AAA'
    ], {
        A: 'gtceu:rubber_ingot'
    }).keepIngredient('forge:tools')
    e.shaped('8x create:belt_connector', [
        '   ',
        'AAA',
        'AAA'
    ], {
        A: 'gtceu:silicone_rubber_ingot'
    }).keepIngredient('forge:tools')
    e.shaped('16x create:belt_connector', [
        '   ',
        'AAA',
        'AAA'
    ], {
        A: 'gtceu:styrene_butadiene_rubber_ingot'
    }).keepIngredient('forge:tools')
    e.shaped('create:spout', [
        'ABA',
        'ACA',
        ' D '
    ], {
        A: 'gtceu:annealed_copper_plate',
        B: 'minecraft:glass',
        C: 'create:belt_connector',
        D: 'gtceu:neutronium_wrench'
    }).keepIngredient('forge:tools')
    e.shaped('create:item_drain', [
        ' A ',
        'BAB',
        'CBD'
    ], {
        A: 'minecraft:iron_bars',
        B: 'gtceu:copper_plate',
        C: 'gtceu:neutronium_hammer',
        D: 'gtceu:neutronium_crowbar'
    }).keepIngredient('forge:tools')
    e.shaped('create:deployer', [
        'ABC',
        ' D ',
        '   '
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: 'gtceu:vacuum_tube',
        D: 'create:brass_hand'
    }).keepIngredient('forge:tools')
})
