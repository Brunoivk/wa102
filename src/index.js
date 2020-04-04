import express from 'express';
import dodaj from './dodaj';
import dohvati from './dohvati';
import moment from 'moment';

const app = express()
const port = 3001
const staticMiddleware = express.static('public') // direktorij sa statičkim datotekama

app.get('/', (req, res) => res.send("Početnaaaa stranica"))
app.get('/dodaj', dodaj.dodaj)
app.get('/dohvati', dohvati.dohvati)

app.get('/datum', (req, res) => res.send(moment().format("YYYY-MM-DD HH:mm:ss")))

let prognoza = ["Proljece", "Ljeto", "Jesen"];
app.get('/prognoza', (req, res) => res.send(prognoza[Math.floor(Math.random() * prognoza.length )]))


app.listen(port, () => console.log(`Slušam na portu ${port}!`))
