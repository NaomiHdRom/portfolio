import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderImg from '../assets/images/backgrounds/bannerREX.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Mechatronics Engineer", "Front-End Developer", "Data Scientist"];
  const [text, setText] = useState('');
  const period = 1000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className=' banner ' id='home'>
      <div >
        <Container>
          <div>
            <p className='text-white pb-2 '>Welcome to my Portfolio</p>
            <h1>Hi, I'm Naomi HdRom!</h1>
            <span className='wrap '>{text}</span>
            <p className='texto-banner  pt-8 pb-8'>
            Graduated in Mechatronics Engineering from School of Engineering UNAM. I am a technology enthusiast, love science fiction and look forward to make fantasy come true. </p>
          </div>
        </Container>
      </div>

      <div >
        <img
          className='img-fluid'
          src={HeaderImg}
          alt="Header"
          style={{ Width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>

    </section>
  );
};

export default Banner;
