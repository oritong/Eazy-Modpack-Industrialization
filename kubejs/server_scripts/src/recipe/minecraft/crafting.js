ServerEvents.recipes(e=>{
    /*//我不会做这块，交给后人了
    e.shaped('2x gtceu:paper_dust',[
        ' A ',
        'BBB',
        ' C '
    ],{
        A: '#forge:tools/shovels',
        B: 'minecraft:sugar_cane',
        C: 'minecraft:bowl'
    }).damageIngredient('#forge:tools/shovels', 3).keepIngredient('minecraft:bowl')
    */
    e.shaped('2x minecraft:paper',[
        ' A ',
        'BBB',
        ' A '
    ],{
        A: '#minecraft:wooden_slabs',
        B: 'kubejs:pattern_with_paper'
    }).keepIngredient('#minecraft:wooden_slabs').replaceIngredient('kubejs:pattern_with_paper', 'tconstruct:pattern')
    e.shaped('2x minecraft:paper',[
        ' B ',
        'ABA',
        ' B '
    ],{
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
    e.shaped('cookingforblockheads:sink', [
        'ABA',
        'ACA',
        'DAD'
    ], {
        A: 'minecraft:terracotta',
        B: 'minecraft:bucket',
        C: 'create:hose_pulley',
        D: 'minecraft:water_bucket'
    })
    e.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), [
        'ABC'
    ], {
        A: 'ae2:fluid_cell_housing',
        B: 'ae2:storage_bus',
        C: 'cookingforblockheads:sink'
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
    e.shaped('create:mechanical_press', [
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



})
