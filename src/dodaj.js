import store from './store.js'

let dodaj = (req, res) => (
    store.list.push(Math.floor(Math.random()*100)),
    console.log(store.list),
    res.send("Novi dodani broj: " + store.list[(store.list.length) - 1])
)

export default { dodaj }