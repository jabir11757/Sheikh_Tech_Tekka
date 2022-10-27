import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './LeftSideNav.css'

const LeftSideNav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='w-25 text-center'>
            <>
                <Button variant="primary" onClick={handleShow}>
                    See all courses
                </Button>

                <Offcanvas style={{ marginTop: '72px' }} className='w-25' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Courses</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='d-flex flex-column w-75 mx-auto'>
                            <Button variant='dark' className='btn-category'>Category</Button>
                            <Button variant='dark' className='btn-category'>Category</Button>
                            <Button variant='dark' className='btn-category'>Category</Button>
                            <Button variant='dark' className='btn-category'>Category</Button>
                            <Button variant='dark' className='btn-category'>Category</Button>
                            <Button variant='dark' className='btn-category'>Category</Button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    );
};

export default LeftSideNav;