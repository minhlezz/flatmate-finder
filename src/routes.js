import React from 'react';
import HomePage from './components/homes/homePage';
import About from './components/abouts/about';
import Contact from './components/abouts/contact';
import NotFound from './components/notFound';

const routes = [
    {
        path: '/' ,
        exact: true,
        main: () => <HomePage />
    },

    {
        path: '/about' ,
        exact: false,
        main: () => <About />
    },

    {
        path: '/contact' ,
        exact: false,
        main: () => <Contact />
    },

    {
        path: '/products' ,
        exact: false,
        main: ({match}) => <Product match = {match}/>
    },

    {
        path: '' ,
        exact: false,
        main: () => <NotFound />
    },
    
    
 

];


export default routes;


