import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {isInCartSelector} from "../store/selectors";

const Wrapper = styled.div`
    display: flex;
    align-items: center;

`;
const NumberInput = styled.input.attrs({
    type: 'number'
})`
    margin: 0 15px;
    padding: 10px 10px;
    border-radius: 5px;
    min-width: 20px;
    max-width: 40px;
`

const Count = ({changeVal, count, counter}) => {

    const [val, setVal] = useState(0);

    useEffect(() => {
        console.log(count, val)
        if (count && !val){
            setVal(1);
        } else if (!count && val && !counter) {
            setVal(0)
        }
    }, [count, setVal, val])

    const onChange = (e) => {
        setVal(e.target.value);
        changeVal(parseInt(e.target.value))
    }
    return (
        <Wrapper>
            <div>Quantity:</div> 
            <NumberInput value={val} min={0} onChange={onChange}/>
        </Wrapper>
    )
}

export default React.memo(Count);