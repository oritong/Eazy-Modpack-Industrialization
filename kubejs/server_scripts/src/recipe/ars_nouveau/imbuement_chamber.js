//灌注
ServerEvents.recipes(e=>{
    //无效 e.recipes.ars_nouveau.imbuement('kitchenkarrot:gem_carrot', 'ars_nouveau:source_gem', 500)
    // 输入 输出 魔源数
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