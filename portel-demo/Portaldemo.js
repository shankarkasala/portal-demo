import React from 'react'
import ReactDom from 'react-dom'
function Portaldemo() {
    return ReactDom.createPortal(<h1>portel demo</h1>,
        document.getElementById('portal-root'))
}

export default Portaldemo
