import React from 'react';
import Form from 'react-bootstrap/Form';


const FAQ = () => {
    return (
        <div>
            <h2 className='mb-5 d-flex justify-content-center'>Don't shy to meet</h2>
            <div className='mt-5 d-flex justify-content-center'>
                <div className='w-50 d-flex justify-content-center'>
                    <div>
                        <h4 className='my-5'>Contact With Us</h4>
                        <p>
                            <strong> GuniJon Kutir</strong> <br />
                            3/4, Block-A, Mirpur-2, <br />
                            Dhaka-1216, Bangladesh.<br />
                            Call us: +880755757575757<br />
                            <strong>Email: kutir@guni.com</strong>
                        </p>
                    </div>
                </div>
                <div className='w-50 mt-5 d-flex justify-content-center'>
                    <div>
                        <h4 className='mb-4'>Drop your feedback</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;