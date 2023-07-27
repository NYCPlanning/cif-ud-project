import { useState } from "react";
import "./Modal.css"
import useGUI from "../stores/useGUI";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

export default function Modal(){
    const [visible, setVisible] = useState(true)
    const turnOffBlur = useGUI((state) => state.guiIntroTurnOff)

    return(
        visible && <div className="modalBackground" onPointerOver={(event) => event.stopPropagation()} onPointerOut={ (event) => event.stopPropagation()}>
            <div className="modalContainer" >
                <div className="titleBtn-layout">
                    <button onClick={() => {setVisible(false), turnOffBlur()}} className="titleBtn">X</button>
                </div>
                <div className="title">
                    <h1> Welcome to the tool!</h1>
                </div>
                <div className="body">
                    <p>This interactive housing model simulates a low density New York City neighborhood. 
                        To navigate the tool:</p>
                </div>
                <Swiper>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>

                </Swiper>


            </div>

        </div>
    )
}