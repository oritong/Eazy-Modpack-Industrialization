//工作盆辊压
ServerEvents.recipes(e=>{
    e.recipes.create.compacting('gtceu:raw_rubber_dust', 'gtceu:sticky_resin')
    e.recipes.create.compacting('3x gtceu:raw_rubber_dust', 'gtceu:sticky_resin').heated()
})