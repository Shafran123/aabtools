import React from 'react'

export default function OutputLable(props) {

    let { lable, styleProp, isDisable, disableStyleProp, onClick } = props

    return (
        <div>
            <button disabled={isDisable} onClick={onClick} className={isDisable ? disableStyleProp : styleProp}>
                {lable}
            </button>
        </div>

    )
}
