//物品在方块里
ServerEvents.recipes(e=>{
    e.custom({
        "type": "lychee:item_inside",
        "hide_in_viewer": false,
        "post": [
          {
            "type": "place",
            "block": "tinkers_thinking:pulp_fluid"
          }
        ],
        "item_in": [
          {
            "item": "gtceu:paper_dust"
          },
          {
            "item": "gtceu:paper_dust"
          },
          {
            "item": "gtceu:paper_dust"
          }
        ],
        "block_in": "minecraft:water",
        "time": 10
    })
    e.custom({
        "type": "lychee:item_inside",
        "hide_in_viewer": false,
        "post": [
          {
            "type": "place",
            "block": "*"
          },
          {
            "type": "drop_item",
            "item": 'kubejs:pattern_with_paper',
            'count': 5
          }
        ],
        "item_in": [
          {
            "item": 'tconstruct:pattern'
          },
          {
            "item": 'tconstruct:pattern'
          },
          {
            "item": 'tconstruct:pattern'
          },
          {
            "item": 'tconstruct:pattern'
          },
          {
            "item": 'tconstruct:pattern'
          }
        ],
        "block_in": "tinkers_thinking:pulp_fluid",
        "time": 20
      })
})