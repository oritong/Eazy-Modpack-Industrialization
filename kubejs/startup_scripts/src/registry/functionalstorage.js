//该js出自https://www.mcmod.cn/post/5307.html   作者：柒月

let $StorageUpgradeItem = Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem")
let $StorageUpgradeItem$StorageTier = Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier")
let $Style = Java.loadClass("net.minecraft.network.chat.Style")
 
StartupEvents.registry("item", (event) => {
    /**
     * 
     * @param {string} name 名称
     * @param {number} multiplier 倍率
     */
    
    function addDrawerUpgrade(name, multiplier) {
        let itemMultiplier = multiplier
        let fluidMultiplier = itemMultiplier * 0.5
        let controllerMultiplier = fluidMultiplier * 0.5
 
        event.createCustom(`kubejs:${name}_upgrade`, () => {
            return new JavaAdapter($StorageUpgradeItem, {
                // 重写getStorageMultiplier()方法设置升级的倍率
                getStorageMultiplier() {
                    return multiplier
                },
                // 这里重写的是Item.getName()方法混淆后的名称m_7626_
                m_7626_(stack) {
                    if (Client.level) {
                        let _ = Component.translate(`item.kubejs.${name}_upgrade`)
                        _.setStyle($Style.EMPTY.applyTo(_.getStyle()))
 
                        return _
                    } else {
                        return Component.empty()
                    }
                },
                addTooltipDetails(key, stack, tooltip, advanced) {
                    let itemTranslateKey = "tooltip.kubejs.storage_upgrade.itemMultiplier"
                    let fluidTranslateKey = "tooltip.kubejs.storage_upgrade.fluidMultiplier"
                    let controllerTranslateKey = "tooltip.kubejs.storage_upgrade.controllerMultiplier"
 
                    // 显示物品容器的倍率
                    tooltip.add(Component.translate(itemTranslateKey, itemMultiplier).gray()) // .gray()也可以用.setStyle("gray")
                    // 显示流体容器的倍率
                    tooltip.add(Component.translate(fluidTranslateKey, fluidMultiplier).gray()) // .gray()也可以用.setStyle("gray")
                    // 显示控制器的范围
                    tooltip.add(Component.translate(controllerTranslateKey, controllerMultiplier).gray()) // .gray()也可以用.setStyle("gray")
                }
            }, $StorageUpgradeItem$StorageTier.DIAMOND)
        }).tag("functionalstorage:upgrades")
    }
     
    // 示例
    addDrawerUpgrade("steel", 10)
    
})
