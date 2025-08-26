//离心
ServerEvents.recipes(e=>{
    e.recipes.mbd2.centrifuge().duration(7.2 * 20).inputItems('6x gtceu:platinum_group_sludge_dust').inputFluids('gtceu:aqua_regia 1200').chance(0.75, a=>a.outputItems('6x gtceu:platinum_slag_dust')).chance(0.8, a=>a.outputItems('4x gtceu:palladium_raw_dust')).chance(0.8, a=>a.outputItems('4x gtceu:platinum_raw_dust')).chance(0.85, a=>a.outputItems('2x gtceu:platinum_sludge_residue_dust')).chance(0.9, a=>a.outputItems('4x gtceu:tiny_inert_metal_mixture_dust')).chance(0.9, a=>a.outputItems('gtceu:tiny_rarest_metal_mixture_dust')).perTick(a=>a.inputFE(480))
})