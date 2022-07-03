import React, { useRef } from 'react';
import { Button, Container, Input, InputContainer, Label } from './Question.style';

function Question({inputLength}) {
    const inputsRef = useRef(
        Array.from(Array(inputLength), () => [])
      );

      function moveFocus(index) {
        inputsRef.current[index].focus();
      }

    //   function getEnteredCode() {
    //     return inputsRef.current.reduce(
    //       (acc, element) => (acc += `${element.value}`),
    //       ""
    //     );
    //   }

       function handleChange(event, index) {
    
        if (index < 5 && event.target.value !== "") moveFocus(index + 1);
    
        // const code = getEnteredCode();
    
        // if (code.length === VERIFY_CODE_INPUT_LENGTH) {
        //   setIsButtonDisabled(false);
        //   await handleSubmit(code);
        // } else {
        //   if (!isButtonDisabled) setIsButtonDisabled(true);
        // }
      }

      function moveFocusBackwards(event, index) {
        if (
          index !== 0 &&
          event.code === "Backspace" &&
          event.target.value === inputsRef.current[index].value
        )
          moveFocus(index - 1);
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

            <Button>Submit the solution</Button>
        </Container>
     );
}

export default Question;