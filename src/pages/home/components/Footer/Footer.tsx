import React from 'react';
import './footer.scss';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <div className='footer__content'>
                <div className='footer__top'>
                    <div className='footer__top__left'>
                        <div className='footer__top__left__image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/english-right-now-logo.png?alt=media&token=c2af32a4-76a5-4270-9043-cc57b4062d9b&_gl=1*1i30urq*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE1NTAyNi43NC4xLjE2OTYxNTUwNjMuMjMuMC4w" alt="" />
                            <p>TRUNG TÂM NGOẠI NGỮ <br /> ENGLISH RIGHT NOW</p>
                        </div>
                        <div className='footer__top__left__contact'>
                            <span className="material-symbols-outlined">
                                call
                            </span>
                            <p>
                                Thứ 2 - Chủ nhật : 09AM - 09PM <br />
                                0333 987 516
                            </p>
                        </div>
                    </div>
                    <div className='footer__top__center'>
                        <div className='footer__top__center__left'>
                            <ul>
                                <li className='title'>Giới thiệu</li>
                                <li>Giáo Viên</li>
                                <li>Hình Ảnh</li>
                                <li>Video</li>
                            </ul>
                        </div>
                        <div className='footer__top__center__right'>
                            <ul>
                                <li className='title'>Khoá học</li>
                                <li>Tiếng Anh cho người mất gốc</li>
                                <li>Tiếng Anh Giao tiếp</li>
                                <li>Luyện thi TOEIC 4 kỹ năng</li>
                                <li>Luyện thi IELTS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__top__right'>
                        <p className='footer__top__right__title'>
                            Kết nối mạng xã hội
                        </p>
                        <div className='footer__top__right__link'>
                            <a href="https://www.facebook.com/RightNowC102">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div className='footer__bottom'>
                    <div className='footer__bottom__left__address'>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <p>CƠ SỞ 1: SỐ 33, NGÕ 1, PHỐ VĂN HỘI, BẮC TỪ LIÊM, HÀ NỘI</p>
                    </div>
                    <div className='footer__bottom__left__address'>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <p>CƠ SỞ 2: SỐ 139, XUÂN THUỶ, CẦU GIẤY, HÀ NỘI</p>
                    </div>
                </div>
                <div className='footer__copyright'>
                    <p>Copyright ©2013-2023, English Right Now.</p>
                </div>
            </div>
        </div>
    )
}

