import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

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
        if (count && !val && val !== ''){
            setVal(1);
        } else if (!count && val && !counter) {
            setVal(0)
        }
    }, [count, setVal, val])

    const onChange = (e) => {
        setVal(e.target.value);
        if (e.target.value !== '' ){
            changeVal(parseInt(e.target.value))
        }
    }

    const onBlur = (e) => {
        if (e.target.value === '') {
            setVal(0);
            changeVal(0)
        }
    }

    return (
        <Wrapper>
            <div>Quantity:</div> 
            <NumberInput value={val} min={0} onChange={onChange} onBlur={onBlur}/>
        </Wrapper>
    )
}

export default React.memo(Count);