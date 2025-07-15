//使用了部分gregtech leisure的代码，以GPL v3协议分发
const LDLib = Java.loadClass("com.lowdragmc.lowdraglib.LDLib")
GTCEuStartupEvents.registry("gtceu:material", e => {
    for (let index = 1; index <= 8; index++) {
        e.create("grade_" + index + "_purified_water")
            .fluid()
            .components("1x minecraft:water")
            .color(0x0058cd)
            .iconSet(GTMaterialIconSet.FLUID)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    }
})

GTCEuStartupEvents.registry('gtceu:material', e => {
    e.create('glacial_acetic_acid').fluid().color(0xA0E4FF)
    e.create('chloroacetic_acid').fluid().color(0x4AFF15).secondaryColor(0xFF0000)
    e.create('ethyl_cyanoacrylate').fluid().color(0xFFD700).secondaryColor(0xFFFF00)
    e.create('ethyl_alpha_cyanoacetate').fluid().color(0x00BFFF).secondaryColor(0xE0FFFF)
    e.create('sodium_cyanide').dust().color(0x8A2BE2).components("1x sodium", "1x carbon", "1x nitrogen").secondaryColor(0x2F4F4F)
})