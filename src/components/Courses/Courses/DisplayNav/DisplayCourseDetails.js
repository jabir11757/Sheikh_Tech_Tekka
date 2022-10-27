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
                    <h6 class="card-header bg-dark text-white">{details.title}</h6>
                    <div class="card-body">
                        <img style={{ height: "200px" }} src={details.picture} alt='' />
                        <Link to='/courses' class="btn btn-outline-dark d-flex align-items-center">Go Back</Link>
                    </div>
                    <div class="card-footer">Course Videos: {details.courses}</div>
                </div>
            </div>
            <div className='content w-100 mt-5 text-center shadow-lg p-3 mb-5 bg-body rounded'>
                <h3 className='text-dark my-3'>Motivation</h3>
                <h6 className='mb-3'>{details.roadMap}</h6>
            </div>
        </div>
    );
};

export default DisplayCourseDetails;