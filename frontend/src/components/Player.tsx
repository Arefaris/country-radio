import React from 'react'
import { useState } from 'react'
import {Howl, Howler} from 'howler';
import { Slider } from '@mantine/core';

export default function Player() {
   let [controls, setControls] = useState<Howl>()
   let [current, setCurrent] = useState<number>()

   const playRadio = () =>{

    if(controls?.playing(current)){
      return
    }

    let play = new Howl({
      src: ['https://online.kissfm.ua/KissFM_HD'],
      html5: true,
      volume: 0.5,     
  });

    setControls(play)
    let id = play.play()
    setCurrent(id)
   }  

   const pauseRadio = (controls: Howl) => {
      controls.pause()
   }

  return (<>
        <button onClick={() => playRadio()}>Play</button>
        <button onClick={() => controls ? pauseRadio(controls) : ""}>Pause</button>
    </>
  )
}
