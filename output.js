function processOutput(data) {
    const { channel, status, event, message } = data

    switch (event) {
        case 'add':
            if (status) {
                console.log(`You successfully added channel ${channel}`)
                return
            }

            console.log(`You can not add channel ${channel}`)
            return
        case 'delete':
            if (status) {
                console.log(`You successfully deleted channel ${channel}`)
                return
            }

            console.log(`You can not delete channel ${channel}`)
            return
        case 'join':
            if (status) {
                console.log(`You successfully joined channel ${channel}`)
                return
            }

            console.log(`You can not join channel ${channel}`)
            return
        case 'leave':
            if (status) {
                console.log(`You successfully left channel ${channel}`)
                return
            }

            console.log(`You can not leave channel ${channel}`)
            return
        case 'message':
            if (status) {
                console.log(`Channel ${channel}: ${message}`)
                return
            }

            console.log(`You can not write to channel ${channel}`)
            return
        case 'get':
            const { products } = data

            products.forEach((product, index) => {
                console.log(
                    `${index + 1}. ${product.name}
                    \rCategory: ${product.category}
                    \rID: ${product._id}`
                )
            })

            return
        case 'getOne':
            const { product } = data

            const specs = product.specs.reduce((acc, currentSpec, index) => {
                const {key, value} = currentSpec
                return acc + `\t${index + 1}. ${key}: ${value}\n`
            }, '\n')

            console.log(
                `Name: ${product.name}
                \rDescription: ${product.description}
                \rCategory: ${product.category}
                \rID: ${product._id}
                \rSpecs: ${specs}`
            )

            return
        case 'postOrder':
            if (status) {
                console.log(`Your successfully created order`)
                return
            }

            console.log(`You can not create this order`)
            return
    }
}

module.exports = processOutput