import Confetti from "react-confetti";
import { Main } from './SuccessScreen.style';
import React, { useState, useRef, useEffect } from 'react';


function SuccessScreen() {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [show, setShow] = useState(false);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
      }, [])
    
      const handleShow = toggle => {
        setShow(toggle);
      }

    return ( 
        <Main>
            <div
                onMouseEnter={() => handleShow(true)}
                onMouseLeave={() => handleShow(false)}
                className="confetti-wrap"
                ref={confettiRef}>
                <h3 style={{height: '100vh'}}>{}</h3>
                <Confetti
                recycle={show}
                numberOfPieces={80}
                width={width}
                height={height}
            />
            </div>
        </Main>
     );
}

export default SuccessScreen;