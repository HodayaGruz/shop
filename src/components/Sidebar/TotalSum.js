import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {totalSumSelector} from '../../store/selectors';
import {Button} from '../../shared/components'

const Wrapper = styled.div`
    position: absolute;
    background-color: white;
    -webkit-box-shadow: 0px -4px 3px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -4px 3px -2px rgba(0,0,0,0.75);
box-shadow: 0px -4px 3px -2px rgba(0,0,0,0.75);

    bottom: 0;
    width: 33.3%;
    align-items: center;
    left: 0;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    @media (min-width: 700px) {
        width: 25%;
      }
`;

const Sum = styled.div`
    flex: 1;
    font-weight: bold;
`

const TotalSum = ({}) => {

    const total = useSelector(totalSumSelector)
    return (
        <Wrapper>
            <Sum>{`Total: ${total} ₪`}</Sum>
            <Button>Pay</Button>
        </Wrapper>
    )
};

export default TotalSum;