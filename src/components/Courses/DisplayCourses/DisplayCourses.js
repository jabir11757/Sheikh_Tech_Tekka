import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayCourses.css'

const DisplayCourses = ({ course }) => {
    const { name, picture, id } = course;
    return (


        <div class="col">
            <div class="card h-100">
                <img className="rounded-circle m-2" style={{ height: '150px' }} src={picture} alt="..." />
                <div class="card-body">
                    <h5 className="text-center">{name}</h5>
                    <Button className='btn-map' variant='dark' ><Link to={`/category/:${id}`}>See Roadmap</Link></Button>
                </div>
            </div>
        </div>

    );
};

export default DisplayCourses;