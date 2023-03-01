import React from 'react';

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <div className="error-message__content">
                <h3 className="error-message__content-title">404</h3>
                <p className="error-message__content-text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <a className="error-message__link" href="http://localhost:3000/">Retourner sur la page d’accueil</a>    
        </div>
    );
};

export default ErrorMessage;