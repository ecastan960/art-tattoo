import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart;
    let history = useNavigate();

    if (!shippingAddress) {
        history('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history('/placeorder');
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check type='radio' label='PayPal or Credit Card'
                                id='Paypal' name='paymenMethod' value='PayPal'
                                checked onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                            </Form.Check>
                            {/* <Form.Check type='radio' label='Stripe'
                                id='Stripe' name='paymenMethod' value='Stripe'
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                            </Form.Check> */}
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit' variant='primary' className='mt-3'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentScreen