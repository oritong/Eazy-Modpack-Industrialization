//手动使用
//输出 被安装 安装
let item_application = [
    ['create:andesite_casing', 'gtceu:treated_wood_planks', 'gtceu:wrought_iron_ingot'],
    ['create:copper_casing', 'gtceu:treated_wood_planks', 'gtceu:annealed_copper_ingot'],
    ['create:brass_casing', 'gtceu:treated_wood_planks', 'gtceu:brass_ingot']
]
ServerEvents.recipes(e=>{
    item_application.forEach(([a, i, u])=>{
        e.recipes.create.item_application(a, [i, u])
    })
})