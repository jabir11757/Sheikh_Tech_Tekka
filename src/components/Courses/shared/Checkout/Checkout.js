import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className='container mt-4 w-50 mx-auto'>
            <div class="card text-center">
                <h5 class="card-header bg-dark text-white">Pay with belief</h5>
                <div class="card-body">
                    <Form className='w-75 mx-auto mt-5'>
                        <Form.Group className="mb-3 " controlId="formBasicName">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="number" type="pNumber" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Transaction ID</Form.Label>
                            <Form.Control name="transaction" type="transaction" placeholder="Enter Transaction ID" />
                        </Form.Group>
                        <div className='d-flex justify-content-center mb-4'>
                            <Button variant="outline-dark" type="submit"> Confirm </Button>
                        </div>
                    </Form>
                    <Link class="btn btn-outline-dark d-flex align-items-center">Go somewhere</Link>
                </div>
                <div class="card-footer text-muted">Thanks for visit</div>
            </div>
        </div>
    );
};

export default Checkout;