import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="page_content">
                <div className="content-wrapper">
                    <h2>Bienvenue sur notre site de location de vélos</h2>
                    <p>
                        Si vous êtes un campeur, veuillez scanner le QR code afin de louer un vélo.
                    </p>
                    
                    <p>
                        Si vous êtes un administrateur, connectez-vous ici :
                    </p>
                    <div className="admin-login">
                        <Link to="/login">Se connecter</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
