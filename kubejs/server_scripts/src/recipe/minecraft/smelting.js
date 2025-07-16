//熔炉
let smelting = [
    ['gtceu:rubber_ingot', 'kubejs:uncooked_rubber_dust'],
    ['minecraft:glass', 'gtceu:glass_dust']
]
ServerEvents.recipes(e=>{
    smelting.forEach(([r, i])=>{
        e.recipes.minecraft.smelting(r, i)
    })
})