//花药台
ServerEvents.recipes(e => {
  e.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "item": 'minecraft:yellow_dye'
      }, {
        "item": 'minecraft:white_dye'
      }, {
        "item": 'minecraft:white_dye'
      }, {
        "item": 'minecraft:white_dye'
      }, {
        "item": 'minecraft:white_dye'
      }, {
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
      }, {
        "item": 'minecraft:slime_ball'
      }, {
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
  e.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "item": 'minecraft:fire_charge'
      }, {
        "item": 'botania:brown_petal'
      }, {
        "item": 'botania:brown_petal'
      }, {
        "item": 'botania:orange_petal'
      }
    ],
    "output": {
      "item": 'botania:endoflame'
    },
    "reagent": {
      "item": 'ars_nouveau:magebloom_crop'
    }
  })
  e.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "item": 'ars_nouveau:source_gem'
      }, {
        "item": 'ars_nouveau:magebloom_fiber'
      }, {
        "item": 'minecraft:bone_meal'
      }
    ],
    "output": {
      "item": 'ars_nouveau:runic_chalk'
    },
    "reagent": {
      "tag": 'forge:dyes/yellow'
    }
  })
  e.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "item": 'botania:red_petal'
      }, {
        "item": 'botania:red_petal'
      }, {
        "item": 'botania:yellow_petal'
      }, {
        "item": 'botania:orange_petal'
      }, {
        "item": 'botania:orange_petal'
      }, {
        "item": 'create:mechanical_arm'
      }
    ],
    "output": {
      "item": 'botania:pollidisiac'
    },
    "reagent": {
      "item": 'ars_nouveau:magebloom_crop'
    }
  })
})