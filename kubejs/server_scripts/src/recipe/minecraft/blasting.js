//高炉
let blasting = [
    ['gtceu:annealed_copper_nugget', 'gtceu:copper_nugget']
]
ServerEvents.recipes(e=>{
    blasting.forEach(([r, i])=>{
        e.recipes.minecraft.blasting(r, i)
    })
})