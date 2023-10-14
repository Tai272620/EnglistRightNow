import React, { useState } from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsActive(!isActive);
    }
    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <div className='navbar_left'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/english-right-now-logo.png?alt=media&token=c2af32a4-76a5-4270-9043-cc57b4062d9b&_gl=1*1i30urq*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE1NTAyNi43NC4xLjE2OTYxNTUwNjMuMjMuMC4w"
                        alt="" className='navbar_left_logo'
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className={`navbar_center ${showMenu ? 'responsive' : ''}`}>
                    <span>Giới thiệu</span>
                    <div className="dropdown">
                        <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Khoá học
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Tiếng Anh cho người mất gốc</a></li>
                            <li><a className="dropdown-item" href="#">Tiếng Anh Giao tiếp</a></li>
                            <li><a className="dropdown-item" href="#">Luyện thi TOEIC 4 kỹ năng</a></li>
                            <li><a className="dropdown-item" href="#">Luyện thi IELTS</a></li>
                        </ul>
                    </div>
                    <span>Giảng viên</span>
                    <span>Nghề nghiệp</span>
                </div>
                <div className='navbar_right'>
                    <span><button className='primary_button'>TƯ VẤN HỌC PHÍ VÀ LỊCH HỌC</button></span>
                </div>
                <div className='navbar_toggle' onClick={() => toggleMenu()}>
                    <i className="fa fa-bars"></i>
                </div>
            </nav>
        </div>
    )
}



