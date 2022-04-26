import React, { useEffect, useState } from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import OutputLable from '../../Components/OutputLable/OutputLable'

export default function OutputView(props) {
    const [readLineIndex, setReadLineIndex] = useState(0)

    let { textLines } = props

    const handelClickPrevLine = () => {
        console.log('prev');
        setReadLineIndex(readLineIndex - 1)
    }

    const handelClickNextLine = () => {
    
        setReadLineIndex(readLineIndex + 1)
    }

    const isDisableNextButton = () => {
        if(readLineIndex === textLines.length - 1){
            return true
        }else{
            return false
        }
    }


    const isDisablePrevButton = () => {
        if(readLineIndex === 0){
            return true
        }else{
            return false
        }
    }

    useEffect(() => {
      console.log('outPut View');

    }, [])
    
    
    return (
        <div>
            
            <OutputLable textLines={textLines} readLineIndex={readLineIndex} />

            <div className='h-5'>

            </div>

            <div className='flex justify-between items-center'>
                <CustomButton isDisable={isDisablePrevButton()} lable={'Prev Line'} styleProp={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'} disableStyleProp={'bg-gray-500 text-white font-bold py-2 px-4 rounded'} onClick={handelClickPrevLine} />


                <div className='font-semibold text-lg'>
                    {readLineIndex + 1} / {textLines.length}
                </div>

                <CustomButton isDisable={isDisableNextButton()} lable={'Next Line'} styleProp={'bg-green-600  hover:bg-green-700 text-white font-bold py-2 px-4 rounded'} disableStyleProp={'bg-gray-500 text-white font-bold py-2 px-4 rounded'} onClick={handelClickNextLine} />

            </div>
        </div>

    )
}
