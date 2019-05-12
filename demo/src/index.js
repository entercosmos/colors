import React from 'react'
import ReactDOM from 'react-dom'
import {Canvas, Heading} from '@pndr/demo-utils'
import {css, injectGlobal} from 'emotion'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import palettes from '../../src/palettes.json'

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

export const Box = ({children}) => (
    <div
        className={css`
            width: 100%;
            background: #fff;
            box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
            border-radius: 5px;
            margin-bottom: 50px;
            padding: 10px;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            margin-right: 16px;
            &:hover {
                box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12)
            }
            &:last-of-type {
                margin-right: 0;
            }
        `}
    >
        {children}
    </div>
)

const ColorPaletteShade = ({paletteId, shade}) => (
    <div
        className={css`
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-right: 16px;
            padding-left: 16px;
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
        <div
            className={css`
                font-size: 12px;
            `}
        >
            {shade.value}
        </div>
    </div>
)

const ColorPalette = ({palette}) => (
    <div>
        <Heading>
            <div
                className={css`
                    text-transform: capitalize;
                `}
            >
                {palette.id}
            </div>
        </Heading>
        <div
            className={css`
                    display: flex;
                    align-items: center;
                `}
        >
            {palette.shades.map((shade, i) => (
                <Box key={i}>
                    <ColorPaletteShade paletteId={palette.id} shade={shade}/>
                </Box>

            ))}
        </div>
    </div>
)

const Demo = () => (
    <Canvas>
        {palettes.map((palette, i) => (
            <ColorPalette
                key={i}
                palette={palette}
            />
        ))}
    </Canvas>
)

ReactDOM.render(<Demo/>, document.querySelector('#demo'))
