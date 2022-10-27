import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Blogs/Blog';
import Courses from '../../components/Courses/Courses/Courses'
import DisplayCourseDetails from '../../components/Courses/Courses/DisplayNav/DisplayCourseDetails';
import Checkout from '../../components/Courses/shared/Checkout/Checkout';
import FAQ from '../../components/FAQ/FAQ';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import PrivateRoute from '../../contexts/PrivateRoute/PrivateRoute';
import Main from '../../layout/Main';



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/category/:id',
                element: <DisplayCourseDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            }
        ]
    }
])
