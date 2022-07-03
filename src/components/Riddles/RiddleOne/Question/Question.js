import React, { useRef } from 'react';
import { Button, Container, Input, InputContainer, Label } from './Question.style';

function Question({ setCurrentSolution }) {
    const inputsRef = useRef(
        Array.from(Array(8), () => [])
      );

      function moveFocus(index) {
        inputsRef.current[index].focus();
      }


       function handleChange(event, index) {
        if (index < 7 && event.target.value !== "") moveFocus(index + 1);
        blaBla();
      }

      function moveFocusBackwards(event, index) {
        if (
          index !== 0 &&
          event.code === "Backspace" &&
          event.target.value === inputsRef.current[index].value
        )
          moveFocus(index - 1);
      }

      function blaBla() {
        const value = inputsRef.current.map((input) => {
          return input.value;
        }).join('');
        
        setCurrentSolution(value);
      }

    return ( 
        <Container>
            <Label>Enter the secret word</Label>

            <InputContainer>
            {inputsRef.current.map((element, index) => (
            <Input
              key={index}
              id={index}
              onChange={(event) => handleChange(event, index)}
              onKeyUp={(event) => moveFocusBackwards(event, index)}
              ref={(ref) => (inputsRef.current[index] = ref)}
              type="text"
              maxLength={1}
            />
            ))}
            </InputContainer>
        </Container>
     );
}

export default Question;