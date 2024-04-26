import React from "react";

// Definir los componentes de los jumbotrons fuera de Jumbotron
const HomePageJumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">¡Bienvenido a nuestra aplicación!</h1>
            <p className="lead">Esto es un mensaje de bienvenida para la página de inicio.</p>
            <hr className="my-4" />
            <p>¡Explora todas las funcionalidades que tenemos para ofrecerte!</p>
        </div>
    );
};

const LoginPageJumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Acerca de nosotros</h1>
            <p className="lead">Aquí puedes encontrar información sobre nuestra empresa o proyecto.</p>
            <hr className="my-4" />
            <p>¡Conoce más sobre nosotros y nuestra misión!</p>
        </div>
    );
};   

const ContactPageJumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">¡Contáctanos!</h1>
            <p className="lead">¡No dudes en contactarnos si tienes alguna pregunta o comentario!</p>
            <hr className="my-4" />
            <p>¡Estamos aquí para ayudarte!</p>
        </div>
    );
};

// Ahora exportar Jumbotron como un componente separado
const Jumbotron = ({ page }) => {
    // Determina qué componente de Jumbotron mostrar según la página actual
    switch (page) {
        case 'home':
            return <HomePageJumbotron />;
        case 'login':
            return <LoginPageJumbotron />;
        case 'contact':
            return <ContactPageJumbotron />;
        default:
            return null;
    }
};

export default Jumbotron;