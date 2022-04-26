import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading/Heading';
import CustomInput from '../../Components/CustomInput/CustomInput';
import OutputView from '../../Templates/outputView/outputView';

export default function Home() {

    const [isFile, setisFile] = useState(false)
    const [textLines, settxtLines] = useState([])

    const splitLines = (e) => {
        var fileContentArray = e.target.result.split(/\r\n|\n/);
        settxtLines(fileContentArray)
        setisFile(true)
    }

    const handleChangeFile = (file) => {
        setisFile(false)
        let fileData = new FileReader();
        console.log(fileData);
        fileData.onloadend = splitLines;
        fileData.readAsText(file);
    }

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div>

                <Heading />

                <div className='h-5'>

                </div>

                <CustomInput onChange={e => handleChangeFile(e.target.files[0])} />

                <div className='h-5'>

                </div>
                {isFile ?
                    <OutputView textLines={textLines}  />
                    : null
                }
            </div>
        </div>
    );

}
