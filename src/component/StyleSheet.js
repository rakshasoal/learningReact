import React from 'react'
import StyleSheetCSS from '../component/StyleSheetCSS.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className= {`${className} font-xl`} >STYLE SHEET</h1>
        </div>
    )
}

export default StyleSheet
