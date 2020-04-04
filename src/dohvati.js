import store from './store'

let text = ""

let dohvati = (req, res) => (
    store.list.forEach(element => text = text + '  ' + element),
    res.send(text)
    ); 

export default { dohvati }