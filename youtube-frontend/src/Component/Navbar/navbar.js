import React from 'react'
import './navbar.css';
const navbar = () => {
  return (
    <div className="navbar">
      <div className ="header">
        <div className ="header__logo-wrap">
            <button className="barbutton" title="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 464.205 464.205" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
              <g>
                <path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
              </g>
            </svg>
            </button>        
            <div className ="logoyoutube">
                <div style={{ width: '100%', height: '100%', display: 'block', fill: 'currentcolor' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="yt-ringo2-svg_yt16" width="93" height="20" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                    <g>
                      <path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
                      <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
                    </g>
                    <g id="youtube-paths_yt16">
                      <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
                      <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
                      <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"></path>
                      <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
                      <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
                      <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
                      <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
                    </g>
                  </svg>
                </div>
                <span>VN</span>
            </div>
        </div>
        <div className ="header__search">
            <input type="text" className ="header__input" placeholder=" Search"></input>
            <button className="search--btn" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                <g>
                  <path fill="#000000" fillRule="evenodd" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-9 7a9 9 0 1 1 16.033 5.616l3.674 3.677a1 1 0 1 1-1.414 1.414L16.62 18.03A9 9 0 0 1 2 11zm8-5a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" clipRule="evenodd" opacity="1" data-original="#000000" className=""></path>
                </g>
              </svg>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 230.639 230.639" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="hovered-paths">
              <g>
                <path d="M184.777 125.36a7.5 7.5 0 0 0-15 0c0 30.028-24.43 54.458-54.458 54.458s-54.458-24.43-54.458-54.458a7.5 7.5 0 0 0-15 0c0 35.765 27.174 65.294 61.958 69.047v21.232H89.35a7.5 7.5 0 0 0 0 15h51.939a7.5 7.5 0 0 0 0-15H122.82v-21.232c34.783-3.753 61.957-33.282 61.957-69.047z" style={{}} fill="#1d1d1b" data-original="#1d1d1b" className="hovered-path"></path>
                <path d="M115.32 171.112c23.408 0 42.451-19.043 42.451-42.451v-86.21C157.771 19.043 138.728 0 115.32 0S72.869 19.043 72.869 42.451v86.21c0 23.408 19.043 42.451 42.451 42.451zM87.869 42.451C87.869 27.314 100.183 15 115.32 15s27.451 12.314 27.451 27.451v86.21c0 15.137-12.314 27.451-27.451 27.451s-27.451-12.314-27.451-27.451v-86.21z" style={{}} fill="#1d1d1b" data-original="#1d1d1b" className="hovered-path"></path>
              </g>
            </svg>
        </div>
        <div className ="header__infor">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
              <g>
                <path d="M421.647 421.647v30.118c0 33.267-26.968 60.235-60.235 60.235H60.235C26.968 512 0 485.032 0 451.765V150.588c0-33.267 26.968-60.235 60.235-60.235h30.118V60.235C90.353 26.968 117.321 0 150.588 0h301.176C485.032 0 512 26.968 512 60.235v301.176c0 33.267-26.968 60.235-60.235 60.235h-30.118zM90.353 120.471H60.235c-16.633 0-30.118 13.484-30.118 30.118v301.176c0 16.634 13.484 30.118 30.118 30.118h301.176c16.634 0 30.118-13.484 30.118-30.118v-30.118H150.588c-33.267 0-60.235-26.968-60.235-60.235zm60.235-90.353c-16.633 0-30.118 13.484-30.118 30.118v301.176c0 16.634 13.484 30.118 30.118 30.118h301.176c16.633 0 30.118-13.484 30.118-30.118V60.235c0-16.634-13.484-30.118-30.118-30.118H150.588zm82.824 105.411c0-12.028 13.405-19.201 23.412-12.53l112.941 75.294c8.941 5.961 8.941 19.099 0 25.06l-112.941 75.294c-10.007 6.672-23.412-.502-23.412-12.53zm30.117 28.138v94.312l70.735-47.156z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
              <g>
                <path d="M411 262.862V215c0-69.822-46.411-129.001-110-148.33V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67C147.41 85.999 101 145.177 101 215v47.862c0 61.332-23.378 119.488-65.827 163.756A14.999 14.999 0 0 0 46 452h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60H466a15 15 0 0 0 10.827-25.382C434.378 382.35 411 324.193 411 262.862zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zM78.33 422C112.491 376.208 131 320.792 131 262.862V215c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138zM451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213C430.717 113.944 451 162.913 451 215zM46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0C54.404 98.398 31 154.9 31 215c0 8.284 6.716 15 15 15z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
              </g>
            </svg>
            <img src="/asset/img/profile.png" alt=""/>
        </div>
    </div>
    <div className ="container">
        <div className ="grid__row">
            <div className ="grid__column--sidebar">
                <ul className ="sidebar__list">
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 682.667 682.667" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <defs>
                                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" fill="#000000" opacity="1" data-original="#000000"></path>
                                      </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                                      <path d="m0 0 213.004 152.733A39.809 39.809 0 0 0 236 160c8.56 0 16.492-2.688 22.996-7.267L472 0" style={{ strokeWidth: 40, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(20 332.036)" fill="none" stroke="#000000" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0a39.815 39.815 0 0 1-22.996 7.266A39.815 39.815 0 0 1-45.991 0l-156.027-112.631a40.001 40.001 0 0 1-16.978-32.71v-179.393c0-22.092 17.909-40 40-40h116v80c0 22.091 17.909 40 40 40 22.092 0 40-17.909 40-40v-80h116c22.092 0 40 17.908 40 40v179.393a40 40 0 0 1-16.977 32.71z" style={{ strokeWidth: 40, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(278.996 384.77)" fill="none" stroke="#000000" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Home</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M384 384H128c-44.161-.053-79.947-35.839-80-80V144c.053-44.161 35.839-79.947 80-80h256c44.161.053 79.947 35.839 80 80v160c-.053 44.161-35.839 79.947-80 80zM128 96c-26.51 0-48 21.49-48 48v160c0 26.51 21.49 48 48 48h256c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM416 448H96c-8.837 0-16-7.163-16-16s7.163-16 16-16h320c8.837 0 16 7.163 16 16s-7.163 16-16 16z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    <path d="M225.808 308.336c-17.64-.079-31.921-14.36-32-32V171.712c0-17.673 14.328-32 32.001-31.999A32.001 32.001 0 0 1 241.808 144l90.544 52.288c15.305 8.837 20.548 28.408 11.711 43.713a31.998 31.998 0 0 1-11.711 11.711L241.808 304a31.854 31.854 0 0 1-16 4.336zM316.368 224l-90.56-52.288v104.576z" fill="#000000" opacity="1" data-original="#000000"></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Shorts</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M256 196c-66.168 0-120 53.832-120 120s53.832 120 120 120 120-53.832 120-120-53.832-120-120-120zm0 210c-49.626 0-90-40.374-90-90s40.374-90 90-90 90 40.374 90 90-40.374 90-90 90z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M464.383 145.688c-5.021-25.8-21.566-47.9-45.009-60.041C411.559 45.587 376.368 16 334.74 16H177.26c-41.635 0-76.82 29.595-84.634 69.646-23.433 12.136-39.986 34.23-45.009 60.041C19.952 160.069 1 188.983 1 222.259v187.482C1 457.305 39.695 496 87.259 496h337.482C472.305 496 511 457.305 511 409.741V222.259c0-33.276-18.952-62.19-46.617-76.571zM177.26 46h157.48c21.281 0 40.234 12.224 49.755 30.143A87.434 87.434 0 0 0 379.74 76H132.26c-1.591 0-3.175.057-4.755.143C137.026 58.224 155.978 46 177.26 46zm-45 60h247.48c21.279 0 40.229 12.221 49.751 30.137a86.964 86.964 0 0 0-4.75-.137H87.259c-1.594 0-3.177.051-4.75.137C92.031 118.221 110.981 106 132.26 106zM481 409.741C481 440.763 455.763 466 424.741 466H87.259C56.237 466 31 440.763 31 409.741V222.259C31 191.237 56.237 166 87.259 166h337.482C455.763 166 481 191.237 481 222.259z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M285.894 284.394 245.5 324.787l-19.394-19.394c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213l30 30c5.859 5.858 15.355 5.858 21.213 0l51-51c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.212.001z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Subscription</span>
                        </a>
                    </li>
                </ul>
                <div className ="hr"></div>
                <ul className ="sidebar__list">
                    <li className ="sidebar__item">
                        <a className ="sidebar__item--link">
                            <span className ="text">You</span>
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="23" x="0" y="0" viewBox="0 0 6.35 6.35" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M2.258 1.315a.265.265 0 0 0-.174.469L3.703 3.17l-1.62 1.386a.265.265 0 1 0 .345.4L4.28 3.373a.265.265 0 0 0 0-.403L2.428 1.382a.265.265 0 0 0-.17-.067z" fill="#000000" opacity="1" data-original="#000000" className="you"></path>
                                  </g>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <g data-name="Layer 51">
                                      <path d="M26.253 6.368a13.016 13.016 0 0 0-18.385 0L7 7.237V4a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H8.065l1.217-1.218a11 11 0 1 1 0 15.557 1 1 0 1 0-1.414 1.414A13 13 0 1 0 26.253 6.368z" fill="#000000" opacity="1" data-original="#000000"></path>
                                      <path d="M15 20.74a1 1 0 0 0 .515-.143l6.232-3.74a1 1 0 0 0 0-1.714L15.515 11.4a1 1 0 0 0-1.515.86v7.48a1 1 0 0 0 1 1z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Video viewed</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="m19.22 15.8-4-2a.498.498 0 0 0-.72.45v4c0 .37.39.61.72.45l4-2c.37-.18.37-.71 0-.89zM19 5.25H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM19 10.25H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM12 15.25H5c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Playlist</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="m338.95 243.28-120-75A15.002 15.002 0 0 0 195.999 181v150a15 15 0 0 0 22.95 12.72l120-75a15 15 0 0 0 .001-25.44zM226 303.936v-95.873L302.698 256z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M437 61H75C33.645 61 0 94.645 0 136v240c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75V136c0-41.355-33.645-75-75-75zm45 315c0 24.813-20.187 45-45 45H75c-24.813 0-45-20.187-45-45V136c0-24.813 20.187-45 45-45h362c24.813 0 45 20.187 45 45z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Your videos</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="24" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Watch later</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path fill="#000000" fillRule="evenodd" d="M16.571 11.26a.829.829 0 0 1 .075-.005l.005.002c2.95 0 5.349 2.41 5.349 5.371S19.6 22 16.651 22c-2.95 0-5.35-2.41-5.35-5.372 0-.03.004-.058.007-.087.003-.029.005-.057.005-.087H9.268c-.447 0-.875-.085-1.293-.243l-1.085-.418a2.644 2.644 0 0 1-2.235 1.241A2.664 2.664 0 0 1 2 14.368V10.56a2.664 2.664 0 0 1 2.655-2.666c.681 0 1.296.266 1.766.69A6.204 6.204 0 0 0 7.53 7.57a6.707 6.707 0 0 0 1.063-1.803l.015-.037a8.324 8.324 0 0 0 .567-2.233c.045-.438.251-.83.566-1.1.402-.338.894-.469 1.378-.357.491.122.882.448 1.088.925.409.952.845 2.419.66 4.128h2.4c.641 0 1.245.317 1.608.84.372.523.457 1.195.242 1.803zM3.394 14.365c0 .698.564 1.264 1.259 1.264s1.259-.567 1.259-1.264v-3.81c0-.697-.565-1.263-1.26-1.263s-1.258.566-1.258 1.264zm3.905.083 1.176.452.005.002c.251.103.521.149.79.149h3.405c.633 0 1.209-.402 1.424-1.01L15.81 9.26a.56.56 0 0 0-.075-.523.558.558 0 0 0-.466-.243h-4.177c.093-.232.178-.475.233-.718.055-.188.094-.392.13-.608 0-.015.002-.028.005-.04a.177.177 0 0 0 .004-.036c.197-1.466-.185-2.756-.54-3.577-.026-.076-.084-.103-.12-.103-.046-.019-.094 0-.13.036a.302.302 0 0 0-.112.207 9.81 9.81 0 0 1-.66 2.606l-.002.004a8.28 8.28 0 0 1-1.301 2.202c-.418.5-.907.92-1.426 1.291.08.253.135.519.135.799v3.809c0 .015-.002.03-.005.043-.002.013-.004.026-.004.04zm5.395 2.177c0 2.19 1.773 3.97 3.952 3.97l.003-.003c2.18 0 3.953-1.78 3.953-3.97s-1.773-3.969-3.953-3.969c-.201 0-.4.03-.597.06l-.644 1.801a2.912 2.912 0 0 1-2.7 1.932l-.007.064a1.118 1.118 0 0 0-.007.115zm3.098-.886c0-.422.475-.667.816-.42v.005l1.22.886a.519.519 0 0 1 0 .837l-1.22.886a.515.515 0 0 1-.816-.42z" clipRule="evenodd" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Liked videos</span>
                        </a>
                    </li>
                </ul>
                <div className ="hr"></div>
                <div className ="sidebar__categories">
                    Subscription
                </div>
                <ul className ="sidebar__list">
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <img src="/asset/img/baemon channel.jpg" alt=""/>  
                            </div>
                            <span className ="sidebartext">BABYMONSTER</span>
                        </a>
                    </li>

                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                  <g>
                                    <path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    <path d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z" fill="#000000" opacity="1" data-original="#000000"></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Browse channels</span>
                        </a>
                    </li>
                </ul>
                <div className ="hr"></div>
                <div className ="sidebar__categories">
                    Explore
                </div>
                <ul className ="sidebar__list">
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M37.719 55.189c5.429-9.638 3.156-21.767-5.405-28.838l-.014-.012.037.092-.006.069c1.668 4.406 1.434 9.243-.615 13.393l-1.444 2.926-.443-3.233a13.715 13.715 0 0 0-2.402-6.076h-.201l-.106-.3c.015 3.351-.691 6.652-2.076 9.766-1.817 4.075-1.55 8.774.715 12.572l1.563 2.622-2.812-1.188c-4.637-1.959-8.344-5.733-10.171-10.354-2.047-5.16-1.668-11.143 1.015-16.001a27.066 27.066 0 0 0 2.914-7.976l.523-2.711 1.334 2.418a13.889 13.889 0 0 1 1.397 3.712l.03.031.031.21.029-.009c3.996-5.309 6.39-11.915 6.739-18.604l.09-1.733 1.454.948a25.976 25.976 0 0 1 11.328 17.042l.029.143.015.022.065-.092a8.687 8.687 0 0 0 1.777-5.286v-2.978l1.797 2.374a29.94 29.94 0 0 1 6.032 19.275c-.354 8.136-4.791 15.277-11.87 19.146l-3.065 1.675z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Trending</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 31.792 31.792" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M23.009 16.306a7.204 7.204 0 0 0-2.516-2.105 6.548 6.548 0 0 0-1.575-.576 4.44 4.44 0 0 0-.647-.09l-.061-2.733v-.213l.249-.156a21.55 21.55 0 0 0 2.396-1.736c.769-.659 1.539-1.406 2.119-2.464.57-1.073.812-2.344.444-3.669C23.07 1.258 21.814.041 20.257.003a3.196 3.196 0 0 0-2.086.699 3.471 3.471 0 0 0-.705.748c-.138.205-.257.338-.41.601-.635 1.021-.929 2.054-1.072 3.092-.137 1.024-.14 2.002-.098 2.94l.021.532c-1.22.686-2.512 1.395-3.745 2.259-.807.562-1.608 1.19-2.342 1.971-.73.772-1.398 1.727-1.78 2.853a6.763 6.763 0 0 0-.235 3.483 8.442 8.442 0 0 0 1.216 3.068c1.228 1.926 3.274 3.161 5.348 3.637.691.148 1.392.236 2.097.252l.037 1.233c.002.042.004.089.01.132a4.39 4.39 0 0 1 .006.924c-.03.309-.1.59-.197.797a.85.85 0 0 1-.332.39.96.96 0 0 1-.246.08c-.053.005-.103.018-.166.018l-.063.002-.128-.007-.143-.01-.069-.018a1.334 1.334 0 0 1-.164-.037 1.465 1.465 0 0 1-.354-.135 1.315 1.315 0 0 1-.498-.41.713.713 0 0 1-.132-.463.835.835 0 0 1 .059-.287c.025-.104.098-.219.149-.334l.071-.157a1.07 1.07 0 0 0-1.941-.909c-.119.241-.244.47-.322.75a2.887 2.887 0 0 0-.15.869 2.866 2.866 0 0 0 .538 1.755c.354.493.82.84 1.306 1.073.244.119.496.209.753.271.208.065.645.118.789.118l.148.008c.158.004.162-.003.251-.004a3.082 3.082 0 0 0 1.293-.337c.574-.303 1.001-.824 1.237-1.327a4.538 4.538 0 0 0 .393-1.48 6.543 6.543 0 0 0-.002-1.353l-.033-1.333a8.902 8.902 0 0 0 2.121-.711 6.22 6.22 0 0 0 1.439-.967 5.36 5.36 0 0 0 1.131-1.439c.492-.947.87-2.05.857-3.242a5.558 5.558 0 0 0-1.105-3.292zM18.304 5.484c.115-.78.391-1.537.74-2.07.074-.138.262-.353.385-.526.074-.102.164-.186.246-.242a.698.698 0 0 1 .479-.142c.312.025.664.306.771.775.118.456.014 1.133-.306 1.658-.485.821-1.419 1.607-2.453 2.311.011-.617.048-1.211.138-1.764zm-3.252 17.598c-1.486-.377-2.792-1.221-3.536-2.432a5.482 5.482 0 0 1-.763-2.037c-.112-.654-.086-1.347.123-1.956.397-1.249 1.586-2.395 2.978-3.373a32.59 32.59 0 0 1 2.175-1.386l.062 1.893a6.925 6.925 0 0 0-1.972.924 4.793 4.793 0 0 0-1.247 1.253 3.39 3.39 0 0 0-.438.909c-.027.088-.061.195-.076.264l-.029.17-.041.255-.013.245c-.041.662.192 1.393.591 1.94.423.548.875.921 1.515 1.22.036.02.08.035.119.05a1.077 1.077 0 0 0 1.363-.687 1.077 1.077 0 0 0-.685-1.363l-.01-.002c-1.172-.39-1.101-1.699.156-2.479.257-.161.542-.301.842-.412l.009.273.208 6.953a7.443 7.443 0 0 1-1.331-.222zm6.552-3.501c-.012.655-.256 1.345-.631 2.009-.209.344-.334.459-.595.69-.239.208-.54.385-.862.529a5.445 5.445 0 0 1-1.019.341l-.169-6.836-.01-.483c.028.007.062.014.088.023.317.08.667.227.994.407 1.339.738 2.281 2.027 2.204 3.32z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Music</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M511.9 341.7c-1.1-47.5-15.6-110.9-38.8-169.6-10.6-26.9-22.1-50-33.2-66.7-14.8-22.4-28.1-32.8-42.1-32.8-7.9 0-15-.3-21.8-.6-17.2-.7-32.1-1.3-45 4-13.3 5.5-21 15.8-25.7 26.1h-98.6C202 91.8 194.3 81.5 181 76c-13-5.3-27.8-4.7-45-4-6.9.3-14 .6-21.8.6-14 0-27.3 10.4-42.1 32.8-11.1 16.8-22.5 39.9-33.2 66.8C15.7 230.8 1.2 294.2.1 341.8c-1.9 83.4 37.4 97.6 61 98.7h2.1c23.6 0 49.5-18.1 79-55.1 13.9-17.4 25.1-34.8 31.2-44.6h165.2c6 9.8 17.3 27.1 31.2 44.6 30.5 38.1 57 56.2 81.1 55.1 23.6-1.1 62.9-15.4 61-98.8zM292.4 134.1C282.5 150 268.1 156 256 156s-26.5-6.1-36.4-21.9zm186.1 236.6c-5.4 36.7-22.6 37.5-29 37.8-4.5.2-22-2.3-54.4-42.8-19.1-23.9-33.3-48.6-33.5-48.8-2.9-5-8.1-8.1-13.9-8.1H164.3c-5.7 0-11 3.1-13.9 8-.1.2-14.3 24.9-33.5 48.8-32.4 40.5-49.9 43-54.4 42.8-6.5-.3-23.6-1.1-29-37.8C28 333 38.1 270.4 59.9 207.3c9.7-27.9 21-53.8 31.9-73 13.6-23.9 21.5-29 23.1-29.8 8.2 0 15.7-.3 22.3-.6 31.7-1.3 37.4-1.5 43.9 21.2C192 163.4 221.4 188 256 188c34.6 0 64-24.7 74.9-62.9 6.5-22.7 12.2-22.5 43.9-21.2 6.6.3 14.1.6 22.3.6 1.6.8 9.6 5.9 23.1 29.8 10.9 19.2 22.2 45.1 31.9 73 21.8 63.1 31.9 125.7 26.4 163.4zM189.8 230.1c0 8.8-7.2 16-16 16h-20.2v20.2c0 8.8-7.2 16-16 16s-16-7.2-16-16v-20.2h-20.2c-8.8 0-16-7.2-16-16s7.2-16 16-16h20.2v-20.2c0-8.8 7.2-16 16-16s16 7.2 16 16v20.2h20.2c8.9 0 16 7.1 16 16zm200.6-36.3v4c0 8.8-7.2 16-16 16s-16-7.2-16-16v-4c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 68.6v3.9c0 8.8-7.2 16-16 16s-16-7.2-16-16v-3.9c0-8.8 7.2-16 16-16s16 7.1 16 16zm36.2-32.3c0 8.8-7.2 16-16 16h-4c-8.8 0-16-7.2-16-16s7.2-16 16-16h4c8.9 0 16 7.1 16 16zm-68.5 0c0 8.8-7.2 16-16 16h-3.9c-8.8 0-16-7.2-16-16s7.2-16 16-16h3.9c8.8 0 16 7.1 16 16z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Game</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 682.667 682.667" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <defs>
                                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" fill="#000000" opacity="1" data-original="#000000"></path>
                                      </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                                      <path d="M0 0h492v-322.301c0-16.94-13.732-30.673-30.673-30.673H30.673C13.733-352.974 0-339.241 0-322.301Z" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(10 393.587)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0v58.814L39.764 1.233c.737-1.065 1.527-.543 1.527.752l-.55 56.94" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(128.184 282.113)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-24.602v-58.387H0" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(227.68 340.5)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-22.788" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(225.867 311.307)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0s-10.573 8.888-23.042 5.132c-11.448-3.449-13.05-16.651-4.767-22.05 0 0 8.127-3.626 17.142-6.951 21.7-8.005 12.353-28.998-5.116-28.998-8.748 0-16.09 3.831-20.534 8.734" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(381.868 334.98)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="m0 0 11.48-58.04c.423-1.189 2.107-1.177 2.513.017L31.919-.108" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(254.651 341.038)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="m0 0 17.881-58.04c.422-1.189 2.106-1.177 2.512.017L31.919-.108" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(286.57 341.038)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-492v47.127c0 16.94 13.733 30.673 30.673 30.673h430.654C-13.732 77.8 0 64.067 0 47.127Z" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(502 393.587)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h13.787" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(60.298 431.986)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h13.787" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(121.191 431.986)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h13.787" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(182.085 431.986)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h157.021" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(294.68 431.986)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-105.923c-5.633 0-10.2 4.566-10.2 10.199v110.447c0 5.632 4.567 10.198 10.2 10.198H0c5.633 0 10.199-4.566 10.199-10.198V10.199C10.199 4.566 5.633 0 0 0Z" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(183.356 94.33)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="m0 0-38.331-21.523c-4.654-2.615-10.4.75-10.4 6.087v43.048c0 5.338 5.746 8.701 10.4 6.088L0 12.176C4.751 9.508 4.751 2.668 0 0Z" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(158.316 153.663)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h187.554" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(257.213 225.173)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h187.554" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(257.213 181.559)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h187.554" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(257.213 94.33)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-48.57" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(444.767 137.944)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0h-48.571" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(305.784 137.944)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0v0" style={{ strokeWidth: 20, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(351.174 137.944)" fill="none" stroke="#000000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">News</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 511.999 511.999" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M466.45 49.374a37.048 37.048 0 0 0-28.267-13.071H402.41v-11.19C402.41 11.266 391.143 0 377.297 0H134.705c-13.848 0-25.112 11.266-25.112 25.112v11.19H73.816a37.05 37.05 0 0 0-28.267 13.071c-6.992 8.221-10.014 19.019-8.289 29.624 9.4 57.8 45.775 108.863 97.4 136.872 4.717 11.341 10.059 22.083 16.008 32.091 19.002 31.975 42.625 54.073 68.627 64.76 2.635 26.644-15.094 51.885-41.794 57.9-.057.013-.097.033-.153.046-5.211 1.245-9.09 5.921-9.09 11.513v54.363h-21.986c-19.602 0-35.549 15.947-35.549 35.549v28.058c0 6.545 5.305 11.85 11.85 11.85H390.56c6.545 0 11.85-5.305 11.85-11.85v-28.058c0-19.602-15.947-35.549-35.549-35.549h-21.988V382.18c0-5.603-3.893-10.286-9.118-11.52-.049-.012-.096-.028-.145-.04-26.902-6.055-44.664-31.55-41.752-58.394 25.548-10.86 48.757-32.761 67.479-64.264 5.949-10.009 11.29-20.752 16.008-32.095 51.622-28.01 87.995-79.072 97.395-136.87 1.725-10.605-1.297-21.402-8.29-29.623zM60.652 75.192c-.616-3.787.431-7.504 2.949-10.466A13.388 13.388 0 0 1 73.815 60h35.777v21.802c0 34.186 4.363 67.3 12.632 97.583-32.496-25.679-54.87-62.982-61.572-104.193zm306.209 385.051c6.534 0 11.85 5.316 11.85 11.85v16.208H134.422v-16.208c0-6.534 5.316-11.85 11.85-11.85h220.589zm-45.688-66.213v42.513H191.96V394.03h129.213zm-98.136-23.699a78.449 78.449 0 0 0 8.002-10.46c7.897-12.339 12.042-26.357 12.228-40.674 4.209.573 8.457.88 12.741.88a94.34 94.34 0 0 0 13.852-1.036c.27 19.239 7.758 37.45 20.349 51.289h-67.172zM378.709 81.803c0 58.379-13.406 113.089-37.747 154.049-23.192 39.03-53.364 60.525-84.956 60.525-31.597 0-61.771-21.494-84.966-60.523-24.342-40.961-37.748-95.671-37.748-154.049V25.112c0-.78.634-1.413 1.412-1.413h242.591c.78 0 1.414.634 1.414 1.413v56.691zm72.639-6.611c-6.702 41.208-29.074 78.51-61.569 104.191 8.268-30.283 12.631-63.395 12.631-97.58V60.001h35.773c3.938 0 7.66 1.723 10.214 4.726 2.518 2.961 3.566 6.678 2.951 10.465z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M327.941 121.658a11.857 11.857 0 0 0-9.566-8.064l-35.758-5.196-15.991-32.402a11.852 11.852 0 0 0-21.252 0l-15.991 32.402-35.758 5.196a11.849 11.849 0 0 0-6.567 20.213l25.875 25.221-6.109 35.613a11.848 11.848 0 0 0 17.193 12.492L256 190.32l31.982 16.813a11.843 11.843 0 0 0 12.478-.903 11.848 11.848 0 0 0 4.714-11.59l-6.109-35.613 25.875-25.221a11.849 11.849 0 0 0 3.001-12.148zm-49.877 24.747a11.847 11.847 0 0 0-3.408 10.489l3.102 18.09-16.245-8.541a11.86 11.86 0 0 0-11.028 0l-16.245 8.541 3.102-18.09a11.849 11.849 0 0 0-3.408-10.489l-13.141-12.81 18.162-2.64a11.849 11.849 0 0 0 8.922-6.482L256 108.015l8.122 16.458a11.851 11.851 0 0 0 8.922 6.482l18.162 2.64-13.142 12.81z" fill="#000000" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                                <span className ="sidebartext">Sports</span>
                        </a>
                    </li>
                </ul>
                <div className ="hr"></div>
                <ul className ="sidebar__list">
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 511.999 511.999" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                <g>
                                    <path d="M16.898 23.098a2.4 2.4 0 0 0-2.253-2.082h-.02a15.104 15.104 0 0 0-1.218.006H13.4a2.394 2.394 0 0 0-2.245 2.064c-.04.263-.078.54-.111.794a.398.398 0 0 1-.273.326c-.47.151-.93.342-1.376.565l-.006.003a.394.394 0 0 1-.42-.038l-.629-.475a2.4 2.4 0 0 0-3.08.134c-.297.278-.584.565-.856.865a2.392 2.392 0 0 0-.132 3.052c.157.215.327.437.482.64.094.122.11.287.038.425a9.649 9.649 0 0 0-.574 1.371c0 .002 0 .004-.002.007a.395.395 0 0 1-.323.27l-.781.108a2.4 2.4 0 0 0-2.082 2.253v.02c-.014.407-.014.813.006 1.218v.006A2.394 2.394 0 0 0 3.1 36.875c.263.04.54.078.794.111.152.02.28.127.326.273.151.47.342.93.565 1.376l.003.006a.394.394 0 0 1-.038.42l-.475.629a2.4 2.4 0 0 0 .134 3.08c.278.297.565.584.865.856a2.392 2.392 0 0 0 3.052.132c.215-.157.437-.327.64-.482a.397.397 0 0 1 .425-.038c.438.226.899.417 1.371.574a.395.395 0 0 1 .276.325l.11.781A2.4 2.4 0 0 0 13.4 47h.02c.407.014.813.014 1.218-.006h.006a2.394 2.394 0 0 0 2.245-2.064c.04-.263.078-.54.111-.794a.398.398 0 0 1 .273-.326c.47-.151.93-.342 1.376-.565l.006-.003a.394.394 0 0 1 .42.038l.629.475a2.4 2.4 0 0 0 3.08-.134c.297-.278.584-.565.856-.865a2.392 2.392 0 0 0 .132-3.052c-.157-.215-.327-.437-.482-.64a.397.397 0 0 1-.038-.425c.226-.438.417-.899.574-1.371 0-.002 0-.004.002-.007a.395.395 0 0 1 .323-.27l.781-.108a2.4 2.4 0 0 0 2.082-2.253v-.02c.014-.407.014-.813-.006-1.218v-.006a2.394 2.394 0 0 0-2.064-2.245 40.67 40.67 0 0 0-.794-.111.398.398 0 0 1-.326-.273c-.151-.47-.342-.93-.565-1.376l-.003-.006a.394.394 0 0 1 .038-.42l.475-.629a2.4 2.4 0 0 0-.134-3.08 15.602 15.602 0 0 0-.865-.856 2.392 2.392 0 0 0-3.052-.132c-.215.157-.437.327-.64.482a.397.397 0 0 1-.425.038 9.649 9.649 0 0 0-1.371-.574c-.002 0-.004 0-.007-.002a.395.395 0 0 1-.27-.323zm-1.984.262.112.795c.125.909.759 1.666 1.633 1.95.368.122.732.273 1.083.454h.003a2.4 2.4 0 0 0 2.55-.23l.63-.476a.395.395 0 0 1 .503.02c.255.232.5.475.736.727a.402.402 0 0 1 .019.51l-.484.64a2.394 2.394 0 0 0-.223 2.533 7.72 7.72 0 0 1 .446 1.09 2.4 2.4 0 0 0 1.965 1.64l.783.11c.188.024.33.178.342.368.016.345.016.69.005 1.035a.4.4 0 0 1-.346.373l-.795.112a2.394 2.394 0 0 0-1.95 1.633 7.592 7.592 0 0 1-.454 1.083v.003a2.4 2.4 0 0 0 .23 2.55l.476.63a.395.395 0 0 1-.02.503c-.232.255-.475.5-.727.736a.402.402 0 0 1-.51.019l-.64-.484a2.394 2.394 0 0 0-2.533-.223 7.72 7.72 0 0 1-1.087.445h-.003a2.4 2.4 0 0 0-1.64 1.966l-.11.783a.394.394 0 0 1-.368.342c-.345.016-.69.016-1.035.005a.4.4 0 0 1-.373-.346l-.112-.795a2.394 2.394 0 0 0-1.633-1.95 7.592 7.592 0 0 1-1.083-.454H10.3a2.4 2.4 0 0 0-2.55.23l-.63.476a.395.395 0 0 1-.503-.02c-.255-.232-.5-.475-.736-.727a.402.402 0 0 1-.019-.51l.484-.64a2.394 2.394 0 0 0 .223-2.533 7.72 7.72 0 0 1-.445-1.087v-.003a2.4 2.4 0 0 0-1.966-1.64l-.783-.11a.394.394 0 0 1-.342-.368c-.016-.345-.016-.69-.005-1.035a.4.4 0 0 1 .346-.373l.795-.112a2.394 2.394 0 0 0 1.95-1.633c.122-.368.273-.732.454-1.083v-.003a2.4 2.4 0 0 0-.23-2.55l-.476-.63a.395.395 0 0 1 .02-.503c.232-.255.475-.5.727-.736a.402.402 0 0 1 .51-.019l.64.484a2.394 2.394 0 0 0 2.533.223 7.72 7.72 0 0 1 1.087-.445h.003a2.4 2.4 0 0 0 1.64-1.966l.11-.783a.394.394 0 0 1 .368-.342c.345-.016.69-.016 1.035-.005a.4.4 0 0 1 .373.346z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    <path d="M28.964 38.924a2.995 2.995 0 0 0 2.313-2.537c.043-.3.083-.611.119-.904.05-.397.332-.725.715-.836.399-.106.782-.23 1.16-.37l.004-.001a.992.992 0 0 1 1.073.251l.621.652a3.002 3.002 0 0 0 3.899.414l.599-.444a2.994 2.994 0 0 0 .817-3.817 45.293 45.293 0 0 0-.436-.802 1 1 0 0 1 .088-1.097c.26-.319.497-.646.72-.981l.003-.003a.993.993 0 0 1 1.015-.428l.886.163a3 3 0 0 0 3.397-1.957l.225-.711a2.995 2.995 0 0 0-1.583-3.568c-.273-.135-.557-.268-.824-.394a.998.998 0 0 1-.574-.938c.022-.411.022-.814.006-1.217v-.005a.993.993 0 0 1 .57-.942l.813-.389a3.001 3.001 0 0 0 1.598-3.58l-.237-.708a2.994 2.994 0 0 0-3.378-1.956c-.299.052-.607.111-.897.167a1 1 0 0 1-1.016-.422 13.076 13.076 0 0 0-.71-.989l-.003-.004a.992.992 0 0 1-.093-1.097l.429-.792a3 3 0 0 0-.812-3.836l-.607-.434a2.995 2.995 0 0 0-3.882.404c-.212.217-.427.446-.629.662a1.002 1.002 0 0 1-1.07.256 12.59 12.59 0 0 0-1.155-.383l-.005-.001a.994.994 0 0 1-.72-.834l-.119-.892A3 3 0 0 0 28.373.998l-.746.006a2.994 2.994 0 0 0-2.904 2.608c-.043.301-.082.612-.119.905-.05.397-.332.725-.715.836-.399.106-.782.23-1.16.37l-.004.001a.992.992 0 0 1-1.073-.251l-.621-.652a3.002 3.002 0 0 0-3.899-.414l-.599.444a2.994 2.994 0 0 0-.817 3.817c.142.269.293.544.436.802a1 1 0 0 1-.088 1.097c-.26.319-.497.646-.72.981l-.003.003a.993.993 0 0 1-1.015.428l-.886-.163a3 3 0 0 0-3.397 1.957l-.225.711a2.995 2.995 0 0 0 1.583 3.568c.273.135.557.268.824.394a.982.982 0 0 1 .319.237 1 1 0 0 0 1.49-1.334 3.005 3.005 0 0 0-.958-.714l-.813-.388a.994.994 0 0 1-.53-1.186c.065-.213.134-.425.201-.638a1.002 1.002 0 0 1 1.129-.643h.001c.301.058.613.118.908.167a2.988 2.988 0 0 0 3.037-1.292c.188-.282.39-.559.606-.825l.008-.009a3 3 0 0 0 .281-3.315l-.43-.792a.994.994 0 0 1 .269-1.271c.178-.134.358-.266.538-.398a1 1 0 0 1 1.291.144c.21.224.427.455.636.669a2.991 2.991 0 0 0 3.218.739c.317-.117.643-.223.975-.311l.011-.003a2.999 2.999 0 0 0 2.176-2.516l.118-.894a.994.994 0 0 1 .964-.87c.223-.004.446-.004.669-.006.491.016.899.387.961.875v.001c.038.304.078.619.121.915a2.99 2.99 0 0 0 2.169 2.489c.325.092.651.198.971.322l.011.004a3.001 3.001 0 0 0 3.24-.757l.62-.653a.994.994 0 0 1 1.292-.137c.183.127.363.258.544.388a.998.998 0 0 1 .263 1.272v.001c-.148.269-.301.547-.44.812a2.991 2.991 0 0 0 .291 3.288c.21.266.411.543.597.831l.007.01a3 3 0 0 0 3.066 1.292l.885-.164a.995.995 0 0 1 1.126.648c.073.211.142.423.212.635a.999.999 0 0 1-.535 1.183c-.278.131-.566.266-.833.399a2.99 2.99 0 0 0-1.698 2.831c.013.338.014.681-.005 1.024l-.001.011a3 3 0 0 0 1.721 2.848l.813.388a.994.994 0 0 1 .53 1.186c-.065.213-.134.425-.201.638a1.002 1.002 0 0 1-1.129.643h-.001a36.584 36.584 0 0 0-.908-.167 2.988 2.988 0 0 0-3.037 1.292c-.188.282-.39.559-.606.825l-.008.009a3 3 0 0 0-.281 3.315l.43.792a.994.994 0 0 1-.269 1.271c-.178.134-.358.266-.538.398a1 1 0 0 1-1.291-.144c-.21-.224-.427-.455-.636-.669a2.991 2.991 0 0 0-3.218-.739c-.317.117-.643.223-.975.311l-.011.003a2.999 2.999 0 0 0-2.176 2.516l-.118.894a.994.994 0 0 1-.768.846 1 1 0 0 0 .438 1.951zM14 29c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6z" fill="#000000" opacity="1" data-original="#000000"></path><path d="M21.042 20.768A7.004 7.004 0 0 1 28 13c3.863 0 7 3.137 7 7a7.004 7.004 0 0 1-7.763 6.959 1 1 0 0 0-.215 1.988c.321.035.648.053.978.053 4.967 0 9-4.033 9-9s-4.033-9-9-9-9 4.033-9 9c0 .333.018.662.053.985a1 1 0 0 0 1.989-.217z" fill="#000000" opacity="1" data-original="#000000"></path>
                                </g>
                            </svg>
                            </div>
                            <span className ="sidebartext">Settings</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path fill="#000000" fillRule="nonzero" d="M59.075 27.505a44.887 44.887 0 0 1-10.35-7.111A137.497 137.497 0 0 0 52.26 2.069c.178-1.44-.623-1.905-.872-2.013a1.582 1.582 0 0 0-1.898.63c-5.472 6.547-12.969 5.8-20.905 5.005-7.999-.8-16.25-1.612-22.369 5.411a3.419 3.419 0 0 0-3.583-1.156l-.138.038a3.418 3.418 0 0 0-2.369 4.207L12.336 57.88a2.935 2.935 0 0 0 2.818 2.144c.268 0 .534-.038.792-.11l1.069-.298a2.93 2.93 0 0 0 2.034-3.611l-3.781-13.533c5.506-7.08 13.18-6.331 21.298-5.52 8.11.81 16.487 1.646 22.64-5.713l.003-.004a3.342 3.342 0 0 0 .683-2.682 1.47 1.47 0 0 0-.817-1.048zM17.037 57.25a.922.922 0 0 1-.56.44l-1.068.298a.931.931 0 0 1-1.147-.646l-12.21-43.69a1.417 1.417 0 0 1 .983-1.742l.137-.038a1.419 1.419 0 0 1 1.743.981l.108.388v.002l6.253 22.375 5.847 20.924a.927.927 0 0 1-.086.708zM57.67 29.957c-5.474 6.546-12.97 5.798-20.904 5.004-7.904-.79-16.06-1.605-22.155 5.156L9.148 20.57l-2.065-7.387c5.507-7.08 13.18-6.312 21.305-5.5 7.715.769 15.678 1.566 21.737-4.71-.747 5.7-1.86 11.346-3.332 16.903-.2.719.027 1.488.583 1.984a47.74 47.74 0 0 0 10.577 7.332c-.021.277-.12.542-.283.767z" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Report history</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 682.667 682.667" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <defs>
                                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" fill="#000000" opacity="1" data-original="#000000"></path>
                                      </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                                      <path d="M0 0c13.696-69.014 74.573-121.043 147.61-121.043 30.199 0 58.315 8.901 81.882 24.213l61.383-16.978-16.978 61.383C289.209-28.858 298.11-.742 298.11 29.457c0 73.037-52.029 133.914-121.043 147.61" style={{ strokeWidth: 30, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(198.89 136.043)" fill="none" stroke="#000000" strokeWidth="30" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M0 0c-99.687 0-180.5-80.813-180.5-180.5 0-35.738 10.389-69.049 28.307-97.081l-21.072-76.184 76.184 21.072C-69.048-350.612-35.738-361 0-361c99.687 0 180.5 80.813 180.5 180.5S99.687 0 0 0Z" style={{ strokeWidth: 30, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(195.5 497)" fill="none" stroke="#000000" strokeWidth="30" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                      <path d="M210.5 211h-30v30h30z" style={{ fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }} fill="#000000" data-original="#000000"></path>
                                      <path d="M0 0c0 24.853 20.147 45 45 45S90 24.853 90 0c0-13.15-5.643-24.981-14.637-33.208L45-61v-30" style={{ strokeWidth: 30, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1 }} transform="translate(150.5 362)" fill="none" stroke="#000000" strokeWidth="30" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Help</span>
                        </a>
                    </li>
                    <li className ="sidebar__item">
                        <a href="#" className ="sidebar__item--link">
                            <div className ="sidebaricon">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="25" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                                  <g>
                                    <path d="M459.883 22.016H52.117C23.379 22.016 0 45.396 0 74.133v282.162c0 28.738 23.379 52.117 52.117 52.117h5.778l-15.473 54.13a21.525 21.525 0 0 0 28.866 25.829l194.826-79.958h193.768c28.738 0 52.117-23.379 52.117-52.117V74.133c.001-28.737-23.378-52.117-52.116-52.117zm9.069 334.279c0 4.916-4.153 9.069-9.068 9.069H261.87c-2.803 0-5.579.548-8.172 1.612L96.014 431.69l11.116-38.886a21.52 21.52 0 0 0-20.695-27.44H52.117c-4.916 0-9.068-4.153-9.068-9.069V74.133c0-4.916 4.153-9.068 9.068-9.068h407.766c4.916 0 9.068 4.153 9.068 9.068v282.162z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    <circle cx="150.888" cy="220.483" r="24.601" fill="#000000" opacity="1" data-original="#000000"></circle>
                                    <circle cx="257.962" cy="220.483" r="24.601" fill="#000000" opacity="1" data-original="#000000"></circle>
                                    <circle cx="365.037" cy="220.483" r="24.601" fill="#000000" opacity="1" data-original="#000000"></circle>
                                  </g>
                                </svg>
                            </div>
                            <span className ="sidebartext">Feedback</span>
                        </a>
                    </li>
                </ul>
                <div className ="hr"></div>
                <div className ="copyright">
                    <ul className ="copyright__list">
                        <li className ="copyright__list-item">
                            <a href="#">About</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Press</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Copyright</a>
                        </li>
                    </ul>
                    <ul className ="copyright__list">
                        <li className ="copyright__list-item">
                            <a href="#">Contact us</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Creators</a>
                        </li>
                    </ul>
                    <ul className ="copyright__list copyright__list--margin">
                        <li className ="copyright__list-item">
                            <a href="#">Advertise</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Developers</a>
                        </li>
                    </ul>
                    <ul className ="copyright__list">
                        <li className ="copyright__list-item">
                            <a href="#">Terms</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Privacy</a>
                        </li>
                        <li className ="copyright__list-item">
                            <a href="#">Policy & Safety</a>
                        </li>
                    </ul>
                    <ul className ="copyright__list copyright__list--last">
                        <li className ="copyright__list-item">
                            <a href="#">How Metube works</a>
                        </li>
                    </ul>
                    <ul className ="copyright__list">
                        <li className ="copyright__list-item">
                            <a href="#">Test new features</a>
                        </li>
                    </ul>
                    <span className ="copyright--text">© 2024 Google LLC</span>
                </div>
            </div>
            <div className ="grid__column--videowrap">
                <div className ="grid__columnn--categories">
                    <button className ="categories-item categories-item--active">All</button>
                    <button className ="categories-item" title="Game">Game</button>
                    <button className ="categories-item" title ="Music">Music</button>
                    <button className ="categories-item" title ="Livestream">Livestream</button>
                    <button className ="categories-item" title ="Javascript">Javascript</button>
                    <button className ="categories-item" title ="Computers">Computers</button>
                    <button className ="categories-item" title ="Java">Java</button>
                    <button className ="categories-item" title ="C++">C++</button>
                    <button className ="categories-item" title ="ASMR">ASMR</button>
                    <button className ="categories-item" title ="Rap">Rap</button>
                    <button className ="categories-item" title ="Cooking">Cooking</button>
                    <button className ="categories-item" title ="Viewed">Viewed</button>
                    <button className ="categories-item" title ="Action-adventure Game">Action-adventure Game</button>
                    <button className ="categories-item" title ="Combined List">Combined List</button>
                    <button className ="categories-item" title ="New Proposal">New Proposal</button>
                    <button className ="categories-item categories-item--last" title ="Categories Item"></button>
                </div>
                <div className ="grid__column--videos">
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/drip baemon.jpg" alt=""/>
                            <span className ="img-timetext">3:09</span>
                            <div className ="iconvideowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">BABYMONSTER-'DRIP' M/V</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">24M views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">1 day ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/batter up.jpg" alt=""/>
                            <span className ="img-timetext">3:19</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">BABYMONSTER-'BATTER UP' M/V</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">287M views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">11 months ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/forever.jpg" alt=""/>
                            <span className ="img-timetext">3:54</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">BABYMONSTER-'FOREVER' M/V</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">147M views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">4 months ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/drip album.jpg" alt=""/>
                            <span className ="img-timetext">3:19</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">Woke Up In Tokyo (RUKA & ASA)</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">907N views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">1 day ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/drip album.jpg" alt=""/>
                            <span className ="img-timetext">3:08</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/> </div>
                            <div className ="videointrotitle">
                                <div className ="video--title">Love, Maybe</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">904N views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">1 day ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/drip album.jpg" alt=""/>
                            <span className ="img-timetext">2:38</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">BILLIONAIRE</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">1tr views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">1 day ago</span>
                            </div>
                        </div>
                    </div>
                    <div className ="grid__column--video">
                        <div className ="imgwrap">
                            <img src="/asset/img/drip album.jpg" alt=""/>
                            <span className ="img-timetext">3:12</span>
                            <div className ="iconvideowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="27" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <path d="M458.406 380.681c-8.863-6.593-21.391-4.752-27.984 4.109A217.989 217.989 0 0 1 418.889 399c-7.315 8.275-6.538 20.915 1.737 28.231a19.923 19.923 0 0 0 13.239 5.016c5.532 0 11.04-2.283 14.992-6.754a257.803 257.803 0 0 0 13.658-16.829c6.593-8.861 4.754-21.391-4.109-27.983zM491.854 286.886c-10.786-2.349-21.447 4.496-23.796 15.288a215.372 215.372 0 0 1-4.646 17.681c-3.261 10.554 2.651 21.752 13.204 25.013 1.967.607 3.955.896 5.911.896 8.54 0 16.448-5.514 19.102-14.102a255.373 255.373 0 0 0 5.514-20.98c2.349-10.792-4.496-21.446-15.289-23.796zM362.139 444.734a216.715 216.715 0 0 1-16.34 8.233c-10.067 4.546-14.542 16.392-9.996 26.459 3.34 7.396 10.619 11.773 18.239 11.773 2.752 0 5.549-.571 8.22-1.777a256.456 256.456 0 0 0 19.377-9.764c9.645-5.384 13.098-17.568 7.712-27.212-5.383-9.643-17.567-13.096-27.212-7.712zM236 96v151.716l-73.339 73.338c-7.81 7.811-7.81 20.474 0 28.284a19.935 19.935 0 0 0 14.143 5.858 19.943 19.943 0 0 0 14.143-5.858l79.196-79.196A20.001 20.001 0 0 0 276 256V96c0-11.046-8.954-20-20-20s-20 8.954-20 20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                    <path d="M492 43c-11.046 0-20 8.954-20 20v55.536C425.448 45.528 344.151 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512c.169 0 .332-.021.5-.025.168.004.331.025.5.025 7.208 0 14.487-.304 21.637-.902 11.007-.922 19.183-10.592 18.262-21.599-.923-11.007-10.58-19.187-21.6-18.261-6.044.505-12.2.762-18.299.762-.169 0-.332.021-.5.025-.168-.004-.331-.025-.5-.025-119.103 0-216-96.897-216-216S136.897 40 256 40c76.758 0 147.357 40.913 185.936 106h-54.993c-11.046 0-20 8.954-20 20s8.954 20 20 20H448a63.612 63.612 0 0 0 33.277-9.353 19.968 19.968 0 0 0 1.796-1.152C500.479 164.044 512 144.347 512 122V63c0-11.046-8.954-20-20-20z" fill="#fffcfc" opacity="1" data-original="#000000" className=""></path>
                                  </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" height="28" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="iconvideo">
                                  <g>
                                    <g fill="#000">
                                      <path d="M3 5.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 6.75 3 6.19 3 5.5zM4.25 9.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM3 16.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM17.007 20.813a.75.75 0 0 0 1.115.546l4.738-2.708a.75.75 0 0 0 0-1.302l-4.738-2.708a.75.75 0 0 0-1.122.651v5.416c0 .036.002.07.007.105z" fill="#fffefe" opacity="1" data-original="#000000" className=""></path>
                                    </g>
                                  </g>
                                </svg>
                            </div>
                        </div>
                        <div className ="video__title--wrap">
                            <div className ="imgchannel"><img src="/asset/img/baemon channel.jpg" alt=""/></div>
                            <div className ="videointrotitle">
                                <div className ="video--title">Love In My Heart</div>
                                <div className ="video--channelimg-text videodescription">BABYMONSTER</div>
                                <span className ="viewtime">762N views</span>
                                <span className ="dot">.</span>
                                <span className ="timewatch">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default navbar