const fs = require('fs')
const palettes = require('../src/palettes.json')

const colors = palettes.reduce((result, palette) => {
    const shades = palette.shades.map(shade => {
        shade.id = [palette.id, shade.id].join('.')
        return shade
    })
    return result.concat(shades)
}, [])

fs.writeFileSync(__dirname + '/../src/colors.json', JSON.stringify(colors, null, 2))