function sendToServerFactory(event) {
    return function (ws, data) {
        ws.send(JSON.stringify({
            event, data
        }))
    }
}

const addChannel = sendToServerFactory('add')
const deleteChannel = sendToServerFactory('delete')
const joinChannel = sendToServerFactory('join')
const leaveChannel = sendToServerFactory('leave')
const sendMessage = sendToServerFactory('message')
const getProducts = sendToServerFactory('get')
const getOneProduct = sendToServerFactory('getOne')
const postOrder = sendToServerFactory('postOrder')

module.exports = {addChannel, deleteChannel, joinChannel, leaveChannel, sendMessage, getProducts, getOneProduct, postOrder}