import React from 'react';
import '../assets/scss/Home.scss';
import Banner from '../components/Banner';
import FlightList from '../components/FlightList';

export default function Home() {

    return (
        <div>
            <Banner />
            {/* blog */}
            <FlightList />
            {/* end of blog */}


            {/* footer */}
            <footer>
                <div className="container">
                    <div className="footer-bottom">
                        <p>&copy; 2024 Flymya.com . All rights reserved.</p>
                    </div>
                </div>
            </footer>
            {/* end of footer */}

        </div>
    );
}
