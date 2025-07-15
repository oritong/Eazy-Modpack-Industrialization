ServerEvents.recipes(e=>{
    e.custom({
        "type": "lychee:item_burning",
        "post": [
          {
            "type": "drop_item",
            "item": "minecraft:gold_nugget",
            "count": 2
          }
        ],
        "item_in": {
          "item": "gtceu:fine_gold_wire"
        }
      })
})