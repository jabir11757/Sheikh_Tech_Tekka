import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Blogs/Blog';
import Courses from '../../components/Courses/Courses/Courses'
import FAQ from '../../components/FAQ/FAQ';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import Main from '../../layout/Main';



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/courses',
                element: <Courses />
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
            }
        ]
    }
])
