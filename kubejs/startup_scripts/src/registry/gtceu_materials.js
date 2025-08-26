//使用了部分gregtech leisure的代码，以GPL v3协议分发
const LDLib = Java.loadClass("com.lowdragmc.lowdraglib.LDLib")
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
let gtm_dust = [
    ['platinum_slag', 0x262626]
]
let gtm_dust_and_fluid = [
    ['fluorowax_tin_niobium_nanocomposite', 0xffcc66],
    ['wheat_flour_with_water', 0xe3e4d4]
]
let gtm_dust_and_fluid_plasma = [
    ['plutonium_einsteinium_cored_sodium_thermalm_ultilayer_system_with_paraffin_shielding', 0x9966ff]
]//流体+等离子态
let gtm_fluid = [
    ['high_fructose_syrup', 0xfffdea]
]//只有流体





GTCEuStartupEvents.registry('gtceu:material', e => {
    gtm_dust.forEach(([a, b]) => {
        e.create(a).dust().color(b)
    })
    gtm_dust_and_fluid.forEach(([a, b]) => {
        e.create(a).dust().color(b).liquid()
    })
    gtm_dust_and_fluid_plasma.forEach(([a, b]) => {
        e.create(a).dust().color(b).liquid().plasma()
    })
    gtm_fluid.forEach(([a, b]) => {
        e.create(a).color(b).liquid()
    })
    e.create('glacial_acetic_acid').fluid().color(0xA0E4FF)
    e.create('chloroacetic_acid').fluid().color(0x4AFF15).secondaryColor(0xFF0000)
    e.create('ethyl_cyanoacrylate').fluid().color(0xFFD700).secondaryColor(0xFFFF00)
    e.create('ethyl_alpha_cyanoacetate').fluid().color(0x00BFFF).secondaryColor(0xE0FFFF)
    e.create('sodium_cyanide').dust().color(0x8A2BE2).components("1x sodium", "1x carbon", "1x nitrogen").secondaryColor(0x2F4F4F)
    GTMaterials.Brass.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Brass.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
})

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
