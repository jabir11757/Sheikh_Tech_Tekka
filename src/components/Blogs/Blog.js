import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>

            <h2 className='mb-5 text-dark d-flex justify-content-center'>We need to know</h2>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><p className='fw-bold'> what is cors?</p></Accordion.Header>
                    <Accordion.Body>
                        Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</p></Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><p className='fw-bold'>How does the private route work?</p></Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><p className='fw-bold'>What is Node? How does Node work?</p></Accordion.Header>
                    <Accordion.Body>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;