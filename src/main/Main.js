import React from "react";
import style from './Main.module.css';
import TypeWriterEffect from 'react-typewriter-effect';


export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.mainText}>
                    <div>Hi there</div>
                    <span><h1>My name is Dmitry </h1></span>
                    <div>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#3F3D56',
                                fontWeight: 500,
                                fontSize: '1.5em',
                            }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                                'Hey there, This is a type writer animation package',
                                'it consist of two types...',
                                'Single text display and multi text display',
                                'Fonts can be customized.',
                                'The type speed can be customized as well',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={30}
                        />
                    </div>
                </div>
                <div className={style.mainPhoto}></div>
            </div>
        </div>
    );
};