ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // 定义映射表
    let input = [
        '123',
        '111'
    ]
    let output = [
        '321',
        '456'
    ]

    event.register(
        Commands.literal('text')
        .then(
            Commands.argument('value', Arguments.STRING.create(event))
            .executes(c => {
                let arg = Arguments.STRING.getResult(c, 'value')

                // 查找对应输出
                let result = ''
                let index = input.indexOf(arg)
                if (index >= 0) {
                    result = output[index]
                } else {
                    result = '未找到对应结果'
                }

                // 发送带点击复制的消息
                let player = c.source.player
                let msg = Text.of(result)
                    .hover('点击复制')
                    .clickCopy(result)
                player.tell(msg)

                return 1
            })
        )
    )
})
