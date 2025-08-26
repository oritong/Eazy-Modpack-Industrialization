// let tags = [
//     "forge:nuggets/",
//     "forge:dusts/",
//     "forge:gears/",
//     "forge:gems/",
//     "forge:ingots/",
//     "forge:raw_materials/",
//     "forge:ores/",
//     "forge:plates/",
//     "forge:rods/",
//     "forge:wires/",
//     "forge:storage_blocks/",
//     "forge:storage_blocks/raw_"
// ]
// let materials = [
//     "aeternium",
//     "aluminum",
//     "amber",
//     "apatite",
//     "bitumen",
//     "brass",
//     "bronze",
//     "charcoal",
//     "chrome",
//     "cinnabar",
//     "coal",
//     "coal_coke",
//     "cobalt",
//     "constantan",
//     "copper",
//     "diamond",
//     "electrum",
//     "elementium",
//     "emerald",
//     "enderium",
//     "fluorite",
//     "gold",
//     "graphite",
//     "invar",
//     "iridium",
//     "iron",
//     "lapis",
//     "lead",
//     "lumium",
//     "mithril",
//     "netherite",
//     "nickel",
//     "obsidian",
//     "osmium",
//     "peridot",
//     "platinum",
//     "potassium_nitrate",
//     "ruby",
//     "sapphire",
//     "signalum",
//     "silver",
//     "sulfur",
//     "tin",
//     "tungsten",
//     "uranium",
//     "zinc",
//     "steel",
//     "naquadah",
//     "rose_gold"
// ]
// ServerEvents.highPriorityData(event => {
//     function getResult(tag, material) {
//         // copper nugget 特殊
//         if (tag === "forge:nuggets/copper") return "create:copper_nugget"

//         // iron / gold / copper（排除 copper nugget）
//         if (["iron","gold"].includes(material) || (material === "copper" && !tag.startsWith("forge:nuggets/"))) {
//             if (tag.startsWith("forge:ingots/")) return `minecraft:${material}_ingot`
//             if (tag.startsWith("forge:nuggets/")) return `minecraft:${material}_nugget`
//             if (tag.startsWith("forge:storage_blocks/raw_")) return `minecraft:raw_${material}_block`
//             if (tag.startsWith("forge:storage_blocks/")) return `minecraft:${material}_block`
//         }

//         // diamond 特殊
//         if (material === "diamond") {
//             if (tag.startsWith("forge:gems/")) return "minecraft:diamond"
//             if (tag.startsWith("forge:storage_blocks/")) return "minecraft:diamond_block"
//         }

//         // coal & charcoal gems
//         if (tag.startsWith("forge:gems/coal")) return "minecraft:coal"
//         if (tag.startsWith("forge:gems/charcoal")) return "minecraft:charcoal"

//         // steel 特殊
//         if (tag === "forge:ingots/steel") return "mekanism:ingot_steel"
//         if (tag === "forge:storage_blocks/steel") return "mekanism:block_steel"

//         // raw blocks
//         if (tag.startsWith("forge:storage_blocks/raw_"))
//             return `gtceu:raw_${material}_block`

//         // 默认规则
//         if (tag.startsWith("forge:ingots/")) return `gtceu:${material}_ingot`
//         if (tag.startsWith("forge:nuggets/")) return `gtceu:${material}_nugget`
//         if (tag.startsWith("forge:gears/")) return `gtceu:${material}_gear`
//         if (tag.startsWith("forge:plates/")) return `gtceu:${material}_plate`
//         if (tag.startsWith("forge:rods/")) return `gtceu:${material}_rod`
//         if (tag.startsWith("forge:wires/")) return `gtceu:${material}_wire`
//         if (tag.startsWith("forge:storage_blocks/")) return `gtceu:${material}_block`
//         if (tag.startsWith("forge:gems/")) return `gtceu:${material}_gem`
//         if (tag.startsWith("forge:dusts/")) return `gtceu:${material}_dust`
//         if (tag.startsWith("forge:ores/")) return `gtceu:${material}_ore`

//         return `gtceu:${material}`
//     }

//     let replacements = []
//     let seen = new Set()

//     tags.forEach(tagPrefix => {
//         materials.forEach(material => {
//             let tag = `${tagPrefix}${material}`
//             let match = `#${tag}`
//             let result = getResult(tag, material)
//             let key = `${match}->${result}`
//             if (!seen.has(key)) {
//                 replacements.push({ matchItems: [match], resultItems: result })
//                 seen.add(key)
//             }
//         })
//     })

//     event.addJson('oneenoughitem:replacements/replace_materials.json', replacements)
// })

ServerEvents.highPriorityData(event => {
    event.addJson("oneenoughitem:replacements/replace_food.json", [
        {
            "matchItems":
                [
                    'create:dough',
                    'pneumaticcraft:sourdough'
                ],
            "resultItems": 'gtceu:dough'
        },{
            "matchItems":
                [
                    'pneumaticcraft:wheat_flour'
                ],
            "resultItems": 'create:wheat_flour'
        },{
            "matchItems":
                [
                    'youkaishomecoming:ice_cube'
                ],
            "resultItems": 'minecraft:air'
        }
    ])
    petals_colors.forEach(a=>{
        event.addJson(`oneenoughitem:replacements/replace_botania_${a}.json`, [
        {
            "matchItems":
                [
                    `botania:${a}_mushroom`
                ],
            "resultItems": 'minecraft:air'
        }
    ])
    })
})

let petals_colors = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "light_blue",
  "blue",
  "purple",
  "magenta",
  "pink"
]
