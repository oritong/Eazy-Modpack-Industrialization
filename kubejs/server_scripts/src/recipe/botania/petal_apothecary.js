//花药台
ServerEvents.recipes(e=>{
    e.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
          {
            "item": 'minecraft:yellow_dye'
          },{
            "item": 'minecraft:white_dye'
          },{
            "item": 'minecraft:white_dye'
          },{
            "item": 'minecraft:white_dye'
          },{
            "item": 'minecraft:white_dye'
          },{
            'item': 'ars_nouveau:magebloom'
          }
        ],
        "output": {
          "item": 'botania:pure_daisy'
        },
        "reagent": {
          "item": 'ars_nouveau:magebloom_crop'
        }
    })
    e.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
          {
            "item": 'minecraft:slime_ball'
          },{
            "item": 'minecraft:slime_ball'
          },{
            "item": 'minecraft:slime_ball'
          }
        ],
        "output": {
          "item": 'gtceu:rubber_sapling'
        },
        "reagent": {
          "tag": 'minecraft:saplings'
        }
    })
})