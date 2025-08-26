//电解
ServerEvents.recipes(e=>{
    e.recipes.mbd2.electrolytic().duration(7.2 * 20).inputItems('6x gtceu:ruby_dust').outputItems('2x gtceu:aluminium_dust', 'gtceu:chromium_dust').outputFluids('gtceu:oxygen 3000').perTick(a=>a.inputFE(60))
})