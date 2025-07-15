//白雏菊
//输出 输入 时间
let pure_daisy = [
    ['botania:white_double_flower', 'botania:white_buried_petals', 5],
    ['botania:light_gray_double_flower', 'botania:light_gray_buried_petals', 5],
    ['botania:gray_double_flower', 'botania:gray_buried_petals', 5],
    ['botania:black_double_flower', 'botania:black_buried_petals', 5],
    ['botania:brown_double_flower', 'botania:brown_buried_petals', 5],
    ['botania:red_double_flower', 'botania:red_buried_petals', 5],
    ['botania:orange_double_flower', 'botania:orang_buried_petals', 5],
    ['botania:yellow_double_flower', 'botania:yellow_buried_petals', 5],
    ['botania:lime_double_flower', 'botania:lime_buried_petals', 5],
    ['botania:green_double_flower', 'botania:green_buried_petals', 5],
    ['botania:cyan_double_flower', 'botania:cyan_buried_petals', 5],
    ['botania:light_blue_double_flower', 'botania:light_blue_buried_petals', 5],
    ['botania:blue_double_flower', 'botania:blue_buried_petals', 5],
    ['botania:purple_double_flower', 'botania:purple_buried_petals', 5],
    ['botania:magenta_double_flower', 'botania:magenta_buried_petals', 5],
    ['botania:pink_double_flower', 'botania:pink_buried_petals', 5],
    ['minecraft:lava', 'kubejs:creosote', 512]
]
ServerEvents.recipes(e=>{
    pure_daisy.forEach(p=>{
        e.recipes.botania.pure_daisy(p[0], p[1], p[2])
    })
})