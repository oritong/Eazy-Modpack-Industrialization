//灌注
ServerEvents.recipes(e=>{
    //无效 e.recipes.ars_nouveau.imbuement('kitchenkarrot:gem_carrot', 'ars_nouveau:source_gem', 500)
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:manipulation_essence', 1250, ['minecraft:redstone_torch', 'minecraft:comparator', 'botania:redstone_root', 'create:brass_hand'])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:air_essence', 1250, ['pneumaticcraft:air_compressor', 'create:encased_fan', 'pneumaticcraft:charging_station', Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}').strongNBT()])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:fire_essence', 1250, ['minecraft:fire_charge', 'tconstruct:flint_and_brick', 'gtceu:industrial_tnt', Item.of('tconstruct:seared_fuel_tank', '{tank:{Amount:4000,FluidName:"tconstruct:blazing_blood"}}').strongNBT()])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:conjuration_essence', 1250, ['botania:pollidisiac', 'youkaishomecoming:koishi_mousse', 'tconstruct:blaze_head', 'youkaishomecoming:scarlet_devil_cake'])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:water_essence', 1250, ['minecraft:sea_lantern', 'create:water_wheel', 'minecraft:blue_ice', Item.of('kitchenkarrot:cocktail', '{cocktail:"kitchenkarrot:cocktails/shanghai_beach"}').strongNBT()])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:earth_essence', 1250, ['minecraft:dirt', 'ars_nouveau:magebloom_crop', 'botania:mana_pylon', 'minecraft:poisonous_potato'])
    e.recipes.ars_nouveau.imbuement('ars_nouveau:rune', 'ars_nouveau:abjuration_essence', 1250, ['minecraft:enchanted_golden_apple', 'minecraft:shield', 'minecraft:milk_bucket', Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 4).strongNBT()])
    // // 输入 输出 魔源数
    let imbuement_item = [
        ['kitchenkarrot:gem_carrot', 'ars_nouveau:source_gem', 256],
        ['minecraft:paper', 'tconstruct:silky_cloth', 320],
        ['ars_nouveau:bombegranate_pod', 'minecraft:fire_charge', 512],
        ['ars_nouveau:source_gem', 'minecraft:amethyst_shard', 512],
        ['ars_nouveau:blue_archwood_sapling', 'ars_nouveau:frostaya_pod', 512],
        ['ars_nouveau:red_archwood_sapling', 'ars_nouveau:bombegranate_pod', 512],
        ['ars_nouveau:purple_archwood_sapling', 'ars_nouveau:bastion_pod', 512],
        ['ars_nouveau:green_archwood_sapling', 'ars_nouveau:mendosteen_pod', 512]
    ]
    let imbuement_tag = [
        ['arsdelight:leaves', 'gtceu:fine_gold_wire', 48],
        ['ori:ars_logs', 'botania:livingwood_log', 128]
    ]
    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
          "item": 'minecraft:carrot'
        },
        "output": 'minecraft:golden_carrot',
        "pedestalItems": [
          {
            "item": {
              "item": "minecraft:gold_ingot"
            }
          },
          {
            "item": {
              "item": "minecraft:gold_ingot"
            }
          },
          {
            "item": {
              "item": "minecraft:gold_ingot"
            }
          },
          {
            "item": {
              "item": "minecraft:gold_ingot"
            }
          }
        ],
        "source": 512
    })
    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
          "item": 'gtceu:quantum_eye'
        },
        "output": 'endrem:witch_eye',
        "pedestalItems": [
          {
            "item": {
              "item": 'botania:flugel_eye'
            }
          },
          {
            "item": {
              "item": 'botania:thor_ring'
            }
          },
          {
            "item": {
              "item": 'botania:loki_ring'
            }
          },
          {
            "item": {
              "item": 'botania:king_key'
            }
          },
          {
            "item": {
              "item": 'botania:infinite_fruit'
            }
          },
          {
            "item": {
              "item": 'botania:odin_ring'
            }
          }
        ],
        "source": 10000000
    })
    
    
    
    
    
    
    imbuement_item.forEach(recipe => {
        e.custom({
            type: "ars_nouveau:imbuement",
            count: 1,
            input: { item: recipe[0] },
            output: recipe[1],
            pedestalItems: [],
            source: recipe[2]
        })
    })
    imbuement_tag.forEach(recipe => {
        e.custom({
            type: "ars_nouveau:imbuement",
            count: 1,
            input: { tag: recipe[0] },
            output: recipe[1],
            pedestalItems: [],
            source: recipe[2]
        })
    })
})