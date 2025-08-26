//厨锅
ServerEvents.recipes(e=>{
    e.recipes.farmersdelight.cooking(['kitchenkarrot:birch_sap_chocolate_bar', 'kitchenkarrot:birch_sap_chocolate_bar','youkaishomecoming:bowl_of_cream',  'youkaishomecoming:bowl_of_cream', 'gtceu:dough', 'youkaishomecoming:butter'], 'youkaishomecoming:koishi_mousse', 1, 200)
    e.recipes.farmersdelight.cooking(['gtceu:wheat_flour_with_water_bucket'], '3x gtceu:wheat_flour_with_water_dust', 0, 1500).replaceIngredient({item: 'gtceu:wheat_flour_with_water_bucket'}, 'minecraft:bucket')
    e.recipes.farmersdelight.cooking(['gtceu:high_fructose_syrup_bucket', 'kitchenkarrot:water', 'botania:yellow_petal', '#botania:petals/orange', 'minecraft:sugar', 'gtceu:small_sodium_bicarbonate_dust'], '2x create:honey_bucket', 0, 400, 'bucket').replaceIngredient({item: 'gtceu:high_fructose_syrup_bucket'}, 'minecraft:bucket')
    e.recipes.farmersdelight.cooking(['minecraft:honey_bottle', 'minecraft:sweet_berries', 'botania:red_petal', 'youkaishomecoming:bowl_of_cream', 'youkaishomecoming:bowl_of_cream', 'gtceu:dough'], 'youkaishomecoming:scarlet_devil_cake', 1, 200).replaceIngredient({item: 'minecraft:honey_bottle'}, 'minecraft:glass_bottle')
})