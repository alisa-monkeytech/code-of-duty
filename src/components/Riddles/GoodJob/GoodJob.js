import React from 'react';
import { Code, Label } from './GoodJob.style';

function GoodJob({color, code}) {
    return ( 
       <div>
        <Label color={color}>Good job! 😜</Label>
        {code && <Code>Your number is {code}</Code>}
        <Label color={color}>The God is smiling upon you!</Label>
       </div> 
     );
}

export default GoodJob;