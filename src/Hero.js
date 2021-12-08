import React from "react";
import createActivity from './createActivity.svg';
import createClass from './createClass.svg';
import announcements from './announcements.svg';

const Hero = ({handleLogout}) => {
    return (
        <div>
            <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button onClick={handleLogout}>Logout</button>
                </nav>

                <div className='miniNav'>
                        <button class="btn"><i className="material-icons">calendar_month</i><br/>Calendar</button>
                        <button class="btn"><i className="material-icons">account_circle</i><br/>My Profile</button>
                        <button class="btn"><i className="material-icons">settings</i><br/>Settings</button>
                </div>

                <div className='main'>

                        {/* Box 1 */}
                    <div className='mainBoxes'>
                        <div className='mainBoxesHeader'>
                                {/* Logo */}
                            <img src={createClass} className='svgSize' alt="create class"/>
                        </div>
                        <div className='mainBoxesMain'>
                                {/* Content */}
                            <h3 className='links'>Create Class</h3>
                            <h3 className='links'>View Class</h3>
                        </div>
                    </div>

                        {/* Box 2 */}
                    <div className='mainBoxes'>
                        <div className='mainBoxesHeader'>
                            <img src={createActivity} className='svgSize' alt="create activity"/>
                        </div>
                        <div className='mainBoxesMain'>
                            <h3 className='links'>Create Activity</h3>
                            <h3 className='links'>To Do</h3>
                        </div>
                    </div>

                        {/* Box 3 */}
                    <div className='mainBoxes'>
                        <div className='mainBoxesHeader'>
                            <img src={announcements} className='svgSize' alt="announcements"/>
                        </div>
                        <div className='mainBoxesMain2'>
                            <h3 className='links'>Announcements</h3>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Hero;