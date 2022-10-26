import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/ProviderContexts/ProviderContexts';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error('error:', error))

        console.log(name, photoURL, email, password)
    }
    return (
        <Form onSubmit={handleSignup} className='w-25 mx-auto mt-5'>
            <Form.Group className="mb-3 " controlId="formBasicName">
                <Form.Label>User's Full Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="User's Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="photoURL" placeholder="Enter URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-flex justify-content-center mb-4'>
                <Button variant="dark" type="submit"> Sign Up </Button>
            </div>
            <Form.Text className="text-danger"> </Form.Text>
            <small><p className=""> Already have an account ? <Link to='/login'>Please Login</Link></p></small>
        </Form>
    );
};

export default Signup;