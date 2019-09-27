import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import {totalSumSelector} from '../../store/selectors';
import {resetCart} from '../../store/actions';
import {Button} from '../../shared/components'

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    -webkit-box-shadow: -4px -2px 16px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px -2px 16px -5px rgba(0,0,0,0.75);
    box-shadow: -4px -2px 16px -5px rgba(0,0,0,0.75);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    @media (min-width: 700px) {
        width: 25%;
      }
`;

const Sum = styled.div`
    flex: 1;
    font-weight: bold;
`

const TotalSum = ({}) => {

    const total = useSelector(totalSumSelector);
    const dispatch = useDispatch();

    const onPay = () => {
        Swal.fire(
            'Your order has been payed succsefull!',
            '',
            'success'
          );
        dispatch(resetCart());
    }
    return (
        <Wrapper>
            <Sum>{`Total: ${total} ₪`}</Sum>
            <Button onClick={onPay}>Pay</Button>
        </Wrapper>
    )
};

export default TotalSum;