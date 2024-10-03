/* eslint-disable react/no-unknown-property */
import IndividualIntervalsExample from '../Components/Carousel';
import '../js files/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '../Components/alert';
import Xitsotuvlar from '../Components/Xitsotuvlar';
import { useEffect, useState } from 'react';
import VariantsExample from '../Components/Preload';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [darkMode, setDarkMode] = useState(false); // State to handle dark mode
    const [language, setLanguage] = useState('en'); // State to handle language switch

    const translations = {
        en: {
            message: "It's okay, continue",
            switchToDark: 'Switch to Dark Mode',
            switchToLight: 'Switch to Light Mode',
            switchLanguage: 'Switch Language',
            heading: 'Featured Products',
        },
        uz: {
            message: "Hammasi yaxshi, davom eting",
            switchToDark: 'Qorongʻi rejimga oʻting',
            switchToLight: 'Yorugʻ rejimga oʻting',
            switchLanguage: 'Tilni o‘zgartirish',
            heading: 'Asosiy Mahsulotlar',
        },
    };

    useEffect(() => {
        // Simulating data loading (waits for 3 seconds)
        setTimeout(() => {
            setData({ message: translations[language].message });
            setLoading(false); // Loading is done
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    // Toggle dark mode on/off
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Switch language function
    const switchLanguage = () => {
        setLanguage(language === 'en' ? 'uz' : 'en');
    };

    return (
        <>
            <div
                style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}
                className={`App ${darkMode ? 'dark-mode' : ''}`} // Apply dark mode class
            >
                {loading ? (
                    <VariantsExample />
                ) : (
                    <div>
                        <h1>{data.message}</h1>
                        {/* Button to toggle dark mode */}
                        <button onClick={toggleDarkMode} className='btn btn-black' style={{ margin: '20px' }}>
                            {darkMode ? translations[language].switchToLight : translations[language].switchToDark}
                        </button>

                        {/* Button to toggle language */}
                        <button onClick={switchLanguage} className='btn btn-black' style={{ margin: '20px' }}>
                            {translations[language].switchLanguage}
                        </button>
                    </div>
                )}
            </div>


            <BasicExample />
            <IndividualIntervalsExample />

            <section className="products">
                <section className="xit-sotuvlar">
                    <div className="cards">
                        <Xitsotuvlar />
                    </div>
                </section>
            </section>

            <style jsx="true">{`
                body {
                    background-color: ${darkMode ? '#121212' : '#fff'};
                    color: ${darkMode ? '#ffffff' : '#000000'};
                }

                .dark-mode {
                    background-color: #121212;
                    color: white;
                }

                .dark-mode button {
                    background-color: #333;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default Home;
