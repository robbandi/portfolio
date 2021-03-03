import React, { useState, Img } from 'react';
import { Button } from '../ButtonElements';
import Grad from './valatine-day.png';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  ImageBg,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
         {/* <ImageBg src={Grad} type='image/png'/> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi! 👋 I'm Robin Naghshbandi</HeroH1>
        <HeroP>
        </HeroP> 
        {/* <HeroBtnWrapper> 
          <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
