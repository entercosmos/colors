const fs = require('fs')
const palettes = require('../src/palettes.json')

const colors = palettes.reduce((result, palette) => {
    palette.shades.forEach(shade => {
        shade.id = [palette.id, shade.id].join('.')

        result[shade.id] = shade
    })
    return result
}, {})

fs.writeFileSync(__dirname + '/../src/colors.json', JSON.stringify(colors, null, 2))