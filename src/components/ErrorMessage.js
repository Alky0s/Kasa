import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <div className="error-message__content">
                <h3 className="error-message__content-title">404</h3>
                <p className="error-message__content-text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='error-message__link' to={"/"}>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default ErrorMessage;