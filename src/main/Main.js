import React from "react";
import style from './Main.module.css';
import Typewriter from 'typewriter-effect';
import styleContainer from '../common/styles/Container.module.css';


export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.contentWrapper}>
                <div className={style.mainText}>
                    <div>Hi there</div>
                    <span><h1>My name is Dmitry</h1></span>
                    <div>
                        <Typewriter
                            options={{
                                strings: ['Hey there, This is a type writer animation package',
                                    'Fonts can be customized.',
                                    'The type speed can be customized as well'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className={style.mainPhoto}>
                    img
                </div>
            </div>
        // </div>
    );
};