import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourses from '../DisplayCourses/DisplayCourses';


const Content = () => {
    const courses = useLoaderData();

    return (
        <div className='w-75 text-center'>
            <div className='container mt-3'>
                <h3 className='text-center mb-3'>All Courses</h3>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        courses.map(course => <DisplayCourses key={course.id} course={course} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Content;