import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ProviderContexts/ProviderContexts';

const Login = () => {
    const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error('error:', error))
        console.log(email, password);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error:', error))
    }

    const handleGitSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error:', error))
    }
    return (
        <Form onSubmit={handleLogin} className='w-25 mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit"> Log In </Button>

            <div className='d-flex justify-content-center mb-4'>
                <Button variant="dark" type="submit"> Log In </Button>
            </div>
            <Form.Text className="text-danger"> </Form.Text>
            <small><p className=""> Forget Password ? <Link>Reset</Link></p></small>
            <small><p>Don't have account ? Please <Link to='/signup'>register</Link></p></small>

            <div className='d-flex flex-column'>
                <Button onClick={handleGoogleSignIn} className='mb-2 mt-2 d-flex align-items-center justify-content-center' variant='dark'><FaGoogle className='me-2' />Google Sign In</Button>
                <Button onClick={handleGitSignIn} className='mb-2 mt-2 d-flex align-items-center justify-content-center' variant='dark'><FaGithub className='me-2' />  Github Sign In</Button>
            </div>
        </Form>
    );
};

export default Login;