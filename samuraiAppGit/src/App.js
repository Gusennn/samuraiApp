import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="AppMainBox">
            <header>
                <img src="https://artel-kubachi.ru/wp-content/uploads/2019/08/s2-1.png" alt=""/>
            </header>
            <div className="noHeaderBox">
                <nav>
                    <div>
                        <a>Profile</a>
                    </div>
                    <div>
                        <a>Messages</a>
                    </div>
                    <div>
                        <a>News</a>
                    </div>
                    <div>
                        <a>Music</a>
                    </div>
                    <div>
                        <a>Settings</a>
                    </div>
                </nav>
                <div className="contentBox">
                    <div>
                        <img src="https://topwaymaterials.com/images/assets/landscapes/landscape-6-900x400.jpg" alt=""/>
                    </div>
                    <div>
                        Ava+description
                    </div>
                    <div>
                        My posts
                        <div>
                            new post
                        </div>
                        <div>post 1</div>
                        <div>post 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
