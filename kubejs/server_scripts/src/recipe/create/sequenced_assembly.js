//装配线
ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly([
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')
    ],
        'ae2:fluid_cell_housing',
        [
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.deploying('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', 'sfm:water_tank']),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.pressing('kubejs:infinite_water_sequenced_assembly', 'kubejs:infinite_water_sequenced_assembly'),
        ]).transitionalItem('kubejs:infinite_water_sequenced_assembly').loops(23)
    e.recipes.create.sequenced_assembly([
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')
    ],
        'create:hose_pulley',
        [ 
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)]),
            e.recipes.create.filling('kubejs:infinite_water_sequenced_assembly', ['kubejs:infinite_water_sequenced_assembly', Fluid.of('minecraft:water', 1000)])
        ]).transitionalItem('kubejs:infinite_water_sequenced_assembly').loops(1048576)
    e.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(1),
        Item.of('gtceu:brass_block').withChance(999)
    ],
        'gtceu:brass_plate',
        [
            e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:brass_ingot']),
            e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:brass_ingot']),
            e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:brass_ingot'])
        ]).loops(5).transitionalItem('create:incomplete_precision_mechanism')
})