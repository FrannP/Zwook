import React, { useState } from 'react';
import soundIcon from "../assets/icons/musicControls/soundIcon.svg"

export default function VolumeSlider() {
    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (event) => {
      setVolume(event.target.value);
    };
    return (
        <div className="flex justify-center items-center gap-[12px]">
        <img className='w-[20px] h-[20px]' src={soundIcon} alt="" />

      <div className="w-[172px] h-[3px] bg-primaryLighterBorder_Dark relative rounded-[3px]">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
        />
        <div
          className="absolute top-0 left-0 h-full bg-primaryText_Dark rounded-[360px]"
          style={{ width: `${volume}%` }}
        ></div>
      </div>
    </div>
    );
  }
  
