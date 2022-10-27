import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    // const category = useLoaderData();
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='w-25 mt-5 text-center'>
            {
                categories.map(category => <p key={category.category_id}>
                    <Button className='btn-nav w-75 mt-3' variant='dark'><Link to={`/category/${category.category_id}`}>{category.coursesName}</Link></Button>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;