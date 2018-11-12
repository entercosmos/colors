import React from 'react'
import ReactDOM from 'react-dom'
import {css, injectGlobal} from 'emotion'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import palettes from '../../src/palettes.json'

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const ColorPaletteShade = ({paletteId, shade}) => (
    <div
        className={css`
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-right: 32px;
            padding-left: 32px;
            font-size: 16px;
            color: ${shade.color};
            background-color: ${shade.backgroundColor};
            &:first-child {
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
            }
            &:last-child {
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }
        `}
    >
        <div
            className={css`
                flex-grow: 1;
            `}
        >
            <div
                className={css`
                    margin-bottom: 4px;
                `}
            >
                {shade.name}
            </div>
            <div
                className={css`
                    font-size: 11px;
                    opacity: 0.5;
                `}
            >
                {`${paletteId}.${shade.id}`}
            </div>
        </div>
        <div>
            {shade.value}
        </div>
    </div>
)

const ColorPalette = ({palette}) => (
    <div>
        {palette.shades.map((shade, i) => (
            <ColorPaletteShade paletteId={palette.id} key={i} shade={shade}/>
        ))}
    </div>
)

const Demo = () => (
    <div className="container-fluid">
        <h1>
            Colors
        </h1>
        <p>Used for adding color to things.</p>
        <h2>
            Color palette
        </h2>
        <div className="row">
            {palettes.map((palette, i) => (
                <div key={i} className="col-md-4">
                    <div
                        className={css`
                            margin-bottom: 30px;
                        `}
                    >
                        <ColorPalette
                            palette={palette}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
)

ReactDOM.render(<Demo/>, document.querySelector('#demo'))
