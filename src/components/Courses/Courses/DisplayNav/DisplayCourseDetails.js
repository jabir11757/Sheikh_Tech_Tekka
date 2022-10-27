import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './DisplayCourseDetails.css'

const DisplayCourseDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div className='container'>
            <h1 className='text-center text-bolder mt-4'>{details.coursesName}</h1>
            <div className='mt-4'>
                <div class="card text-center w-50 mx-auto">
                    <h6 class="card-header">{details.title}</h6>
                    <div class="card-body">
                        <img style={{ height: "200px" }} src={details.picture} alt='' />
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to='/courses' class="btn btn-dark d-flex align-items-center">Go Back</Link>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
            <div className='content w-100 mt-5 text-center shadow-lg p-3 mb-5 bg-body rounded'>
                <h4 className='text-success my-3'>Motivation</h4>
                <h5 className='mb-3'>{details.roadMap}</h5>
            </div>
        </div>
    );
};

export default DisplayCourseDetails;