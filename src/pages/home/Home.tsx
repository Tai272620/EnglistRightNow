import './home.scss';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


export default function Home() {
    return (
        <div className='home_page'>
            <div className='home_page_content'>
                <Navbar />
                <div className='content_body'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

