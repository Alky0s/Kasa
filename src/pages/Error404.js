import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from "../components/Header";

const Error404 = () => {
    return (
        <div>
            <Header />
            <ErrorMessage />
            <Footer />
        </div>
    );
};

export default Error404;