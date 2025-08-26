//注液
ServerEvents.recipes(e=>{
    e.recipes.create.filling('create:super_glue', ['kubejs:super_glue_package', Fluid.of('gtceu:ethyl_alpha_cyanoacetate', 1000)])
    e.recipes.create.filling('kubejs:super_glue_package', ['gtceu:polytetrafluoroethylene_tiny_fluid_pipe', Fluid.of('gtceu:polyethylene', 864)])
})