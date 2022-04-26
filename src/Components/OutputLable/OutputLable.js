import React from 'react'

export default function CustomButton(props) {

    let { textLines, readLineIndex } = props

    return (
        <div >

            <div  >
                Reading Line Number {readLineIndex + 1}:
            </div>

            <div className='h-10 text-[24px] font-semibold'>
                {textLines[readLineIndex]}
            </div>


        </div>
    )
}
