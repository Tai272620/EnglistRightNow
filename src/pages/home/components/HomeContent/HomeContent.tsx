import React, { useEffect, useState } from 'react';
import './homeContent.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default function HomeContent() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [courses] = useState([
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/course-01.jpg?alt=media&token=3855eea4-95e7-4ffb-ab3d-ff7ec2eb01ee&_gl=1*jxumhf*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjQwMzIuMzQuMC4w",
            title: "Tiếng Anh cho người mất gốc"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/course-07.jpeg?alt=media&token=eee5af1e-3c46-48fc-8450-66769dfe63b2&_gl=1*19qq8ld*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5Njg1OTA3MS44MC4xLjE2OTY4NTkxMTMuMTguMC4w",
            title: "Tiếng Anh Giao tiếp"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/course-03.jpeg?alt=media&token=0a28757d-32ba-465b-8e7b-143549d707ce&_gl=1*1q4jtnq*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjQzMzEuNjAuMC4w",
            title: "Luyện thi TOEIC 4 kỹ năng"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/course-04.jpeg?alt=media&token=12386abf-22e2-46a9-83f1-a6711f3b3461&_gl=1*uzivvf*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjQ0NDAuNTQuMC4w",
            title: "Luyện thi IELTS"
        },
    ])

    const [teachers] = useState([
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-02.jpeg?alt=media&token=f129e9ff-50be-49c5-8972-709a3490e6c8&_gl=1*14loclf*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjc2NTIuNTAuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/teacher-01.jpeg?alt=media&token=9c1e05de-2121-40f9-aeb7-337961175b61&_gl=1*ybm8u0*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE2NDAwNi43NS4xLjE2OTYxNjU5NzAuNTIuMC4w",
            name: "Thầy Nguyên"
        },
    ])

    const [images] = useState([
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/image-01.jpeg?alt=media&token=6a064742-295c-4f54-b4c6-2ad9e07ad794&_gl=1*1erzncl*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzMxNjUuNDQuMC4w",
            title: "Tiếng Anh cho người mất gốc"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/image-02.jpeg?alt=media&token=ca67c059-531f-4687-b369-146a613036c3&_gl=1*18zqigb*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzMyNzYuNTEuMC4w",
            title: "Tiếng Anh Giao tiếp"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/imgae-06.jpeg?alt=media&token=6a3d5b6e-4462-4e5b-a7f9-0c8dca45bb40&_gl=1*1se4htw*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzM4NzUuNTEuMC4w",
            title: "Luyện thi IELTS"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/image-03.jpeg?alt=media&token=6d2199bd-5e1f-447c-a66e-041ef0d6ae74&_gl=1*fbbokl*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzMzOTAuNTAuMC4w",
            title: "Luyện thi TOEIC 4 kỹ năng"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/image-04.jpeg?alt=media&token=d2d9484a-c505-4619-ab0d-333b87c574ee&_gl=1*11lecjd*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzM0NTEuNDkuMC4w",
            title: "Luyện thi IELTS"
        },
        {
            url: "https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/image-05.jpeg?alt=media&token=c87b8015-42e2-44a5-8f6b-365b0411beb5&_gl=1*1bwz57m*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzM4MTUuNTEuMC4w",
            title: "Luyện thi IELTS"
        },

    ])
    return (
        <div>
            <div className='content__wrapper'>
                <div className='content_container'>
                    <div className='content'>
                        <div className='content_left'>
                            <h1>Learn English today <br />
                                For a better tomorrow</h1>
                            <p>English Right Now giúp bạn học nhanh, hiểu nhanh và đạt điểm cao trong thời gian ngắn nhất!</p>
                            <button className='primary_button'>TƯ VẤN CHO TÔI HỌC PHÍ VÀ LỊCH HỌC</button>
                        </div>
                        <div className="content_right">
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/hero.png?alt=media&token=d813c3b7-d22c-477b-b81e-8d7702e26c19&_gl=1*1o2spn*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQyNjQuNDcuMC4w" alt="" />
                        </div>
                    </div>
                    <div className='course_title'>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/british-council.png?alt=media&token=cc8aec65-e02c-46e6-a3c7-33beb6c9f9e3&_gl=1*cf1leu*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQzNDEuNTIuMC4w" alt="" />
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/cambridge.png?alt=media&token=e47a5a36-f3d2-4e87-957a-84df790e122d&_gl=1*ozetfk*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQzODcuNi4wLjA." alt="" />
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/harvard.png?alt=media&token=509a8f35-2d3d-4d74-8bf0-3fc21346f955&_gl=1*g25o4y*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ0MTguNDYuMC4w" alt="" />
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/oxford.png?alt=media&token=00715bb9-a482-4388-b6a7-ac7af51048dc&_gl=1*g5lkgl*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ0NDMuMjEuMC4w" alt="" />
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/macmillan.png?alt=media&token=1247574d-4c8d-4310-bc4f-faf94b5d3ad4&_gl=1*1a4z6nc*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ0NjMuMS4wLjA." alt="" />
                        </div>
                    </div>
                    <div className='banner'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/banner.png?alt=media&token=4cc5ee4b-b0a5-412b-8816-5d21ca24f38e&_gl=1*1y4zbu2*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ1MjAuNS4wLjA." alt="" className='banner_image' />
                    </div>
                </div>
            </div>
            {/* data-aos-delay="800"  */}
            <div className='knowledge_wrapper'>
                <div className='knowledge_container'>
                    <h3 data-aos="fade-up" data-aos-duration="3000">Hành trang kiến thức English Right Now trang bị cho bạn</h3>
                    <div className='knowledge_box'>
                        <div className='knowledge_box_image' data-aos="fade-right"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine">
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/title-01.jpeg?alt=media&token=d21d7fef-09c7-448d-8190-9b17531b7ed9&_gl=1*pldyx4*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ1NjYuNDQuMC4w" alt="" />
                        </div>
                        <div className='knowledge_box_image' data-aos="fade-right"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine">
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/title-02.jpeg?alt=media&token=d82e3a20-8914-47e9-aa12-852c9650bec7&_gl=1*xbu4kp*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ2MTkuNjAuMC4w" alt="" />
                        </div>
                        <div className='knowledge_box_image'
                            data-aos="fade-left"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine"
                        >
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/title-03.jpeg?alt=media&token=de7751a8-3d9f-4927-bb61-7dcc8b0609fd&_gl=1*jl92uh*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ2MzUuNDQuMC4w" alt="" />
                        </div>
                        <div className='knowledge_box_image'
                            data-aos="fade-left"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine"
                        >
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/title-04.jpeg?alt=media&token=4377b9d1-c220-4504-8643-ee3cee021330&_gl=1*k0pm7z*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ2NDkuMzAuMC4w" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='course_wrapper' data-aos="fade-up" data-aos-duration="3000">
                <div className='course_container'>
                    <h3>Các khoá học nổi bật tại English Right Now</h3>
                    <div className='course_box'>
                        {courses.map((course) => <div className='course_box_image' key={Math.random() * Date.now()} style={{ backgroundImage: `url(${course.url})` }}>
                            <p>{course.title}</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='teacher__wrapper'>
                <div className='multicarousel-container'>
                    <h3>Đội ngũ giáo viên</h3>
                    <Carousel
                        autoPlay={true}
                        // autoPlaySpeed={1000}
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={1500}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 50
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {teachers?.map((teacher) => (
                            <div className='teacher' key={Math.random() * Date.now()}>
                                <img src={teacher.url} alt="" />
                                <p>{teacher.name}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className='feedback__wrapper'>
                <div className='feedback'>
                    <h2>Feedback học viên</h2>
                    <div className='feedback_box'>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-01.jpeg?alt=media&token=143ef8ca-f0b0-4d55-b443-a96a1dc9052a&_gl=1*1aiys5e*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ3MTkuMzEuMC4w" alt="" />
                        </div>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-02.jpeg?alt=media&token=bd2224e6-eed0-4009-b4d7-75e9908a429c&_gl=1*jkvuwd*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ3NDAuMTAuMC4w" alt="" />
                        </div>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-03.jpeg?alt=media&token=77013cb2-c155-4ba3-8334-7b7c166f3dca&_gl=1*1ymy3dq*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ3NjMuNjAuMC4w" alt="" />
                        </div>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-05.jpeg?alt=media&token=b263fd50-bb2d-4b00-9852-d7d83a9ba821&_gl=1*1m8af7c*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ3ODEuNDIuMC4w" alt="" />
                        </div>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-06.jpeg?alt=media&token=4ab72544-63b4-462a-a9eb-5506e1b65865&_gl=1*d8gxwd*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ3OTcuMjYuMC4w" alt="" />
                        </div>
                        <div className='feedback_box_image'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/feedback-07.jpeg?alt=media&token=673f6725-9722-455a-ab6b-4cfde9ba9db4&_gl=1*2glrlc*_ga*MTg4MTQzMTQzNS4xNjg5NzYzODI2*_ga_CW55HF8NVT*MTY5NjE3MzE0OS43Ni4xLjE2OTYxNzQ4MDguMTUuMC4w" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='images__wrapper'>
                <div className='images__container'>
                    <h3>Phòng học ĐẸP – Giáo viên DẠY HAY</h3>
                    <div className='images'>
                        {images.map((image) => <div className='image'>
                            <img src={image.url} alt="" />
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='questions__wrapper'>
                <div className='questions__container'>
                    <div className='questions__left'>
                        <h2>HỎI VÀ TRẢ LỜI</h2>
                        <p>KHOÁ HỌC PHÙ HỢP VỚI NHỮNG AI? <span className="material-symbols-outlined">
                            add
                        </span>
                        </p>
                        <p>ƯU ĐIỂM KHI HỌC Ở ENGLISH RIGHT NOW? <span className="material-symbols-outlined">
                            add
                        </span>
                        </p>
                        <p>TRUNG TÂM CÓ ĐẢM BẢO ĐẦU RA KHÔNG? <span className="material-symbols-outlined">
                            add
                        </span>
                        </p>
                        <p>TÔI CÓ CẦN TEST THỬ TRÌNH ĐỘ KHÔNG? <span className="material-symbols-outlined">
                            add
                        </span>
                        </p>
                        <p>ĐĂNG KÝ LỊCH HỌC NHƯ THẾ NÀO? <span className="material-symbols-outlined">
                            add
                        </span>
                        </p>
                    </div>
                    <form className='questions__right'>
                        <h2>TEST TRÌNH ĐỘ MIỄN PHÍ</h2>
                        <p>Kiểm tra trình độ MIỄN PHÍ cùng English Right Now</p>
                        <div className='form__group'>
                            <label htmlFor="name">Tên của bạn</label><br />
                            <input type="text" id='name' />
                        </div>
                        <div className='form__group'>
                            <label htmlFor="phone">Số Điện Thoại</label><br />
                            <input type="text" id='phone' />
                        </div>
                        <div className='checkbox__container'>
                            <h5>Nhu Cầu Học Tiếng Anh Của Bạn</h5>
                            <label htmlFor="">
                                <input type="checkbox" />
                                lớp luyện thi IELTS
                            </label><br />
                            <label htmlFor="">
                                <input type="checkbox" />
                                lớp luyện thi TOEIC
                            </label><br />
                            <label htmlFor="">
                                <input type="checkbox" />
                                lớp tiếng Anh cho người mất gốc
                            </label><br />
                            <label htmlFor="">
                                <input type="checkbox" />
                                lớp tiếng Anh cho giao tiếp
                            </label><br />
                        </div>
                        <button type='button' className='submit__button'>GỬI</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
