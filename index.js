const fs = require("fs")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let data = {
    'hg': {
        name: 'Heart Gold',
        url: "roms/hg.gbc",
        console: "nds"
    },
    'ss': {
        name: 'Soul Silver',
        url: "roms/ss.gbc",
        console: "nds"
    },
    'argent': {
        name: 'Argent',
        url: "roms/argent.gbc",
        console: "gbc"
    },
    'or': {
        name: 'Or',
        url: "roms/or.gbc",
        console: "gbc"
    },
    'cristal': {
        name: 'Cristal',
        url: "roms/cristal.gbc",
        console: "gbc"
    },
    'saphir': {
        name: 'Saphir',
        url: "roms/saphir.gba",
        console: "gba"
    },
    'rubis': {
        name: 'Rubis',
        url: "roms/rubis.gba",
        console: "gba"
    },
    'emeraude': {
        name: 'Emeraude',
        url: "roms/emeraude.gba",
        console: "gba"
    },
    'feuille': {
        name: 'Vert Feuille',
        url: "roms/feuille.gba",
        console: "gba"
    },
    'feu': {
        name: 'Rouge Feu',
        url: "roms/feu.gba",
        console: "gba"
    },
    'perle': {
        name: 'Perle',
        url: "roms/perle.nds",
        console: "nds"
    },
    'diamant': {
        name: 'Diamant',
        url: "roms/diamant.nds",
        console: "nds"
    },
    'platine': {
        name: 'Platine',
        url: "roms/platine.nds",
        console: "nds"
    },
    'noire2': {
        name: 'Noire 2',
        url: "roms/noire2.nds",
        console: "nds"
    },
    'noire': {
        name: 'Noire',
        url: "roms/noire.nds",
        console: "nds"
    },
    'blanche2': {
        name: 'Blanche 2',
        url: "roms/blanche2.nds",
        console: "nds"
    },
    "blanche" : {
        name: 'Blanche',
        url: "roms/blanche.nds",
        console: "nds"
    },
    "bleue": {
        name: "Bleue",
        url: "roms/bleue.gb",
        console: "gb"
    },
    "rouge": {
        name: "Rouge",
        url: "roms/rouge.gb",
        console: "gb"
    },
    "vert": {
        name: "Vert",
        url: "roms/green.gb",
        console: "gb"
    },
    "jaune": {
        name: "Jaune",
        url: "roms/jaune.gb",
        console: "gb"
    }
}

app.get('/game/roms/:rom', (req, res) => {
  let rom = req.params.rom
  res.sendFile(`${__dirname}/roms/${rom}`)
})

let examplePage = fs.readFileSync('example.html', 'utf-8')

console.log(examplePage);

app.get('/game/:name', (req, res) => {
    let id = req.params.name
    if(!data[id]) return 'Page doesn\'t exist'
    res.send(examplePage.replace('TITLE', data[id].name).replace('URL',data[id].url).replace("CONSOLE", data[id].console).replace('GAME', data[id].name))
})