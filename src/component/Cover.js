import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/developer.png";
import { useEffect, useState } from "react";
import './Cover.css';
import { motion } from "framer-motion";


export const Cover = () => {
    const [loopNum, setloopNum]= useState(0);
    const[isDeleting, setIsDeleting]=useState(false);
    const toRotate=["a Web Developer", "an SEO Analyst", "a UI/UX Designer"];
    const [text, setText]=useState('');
    const [delta, setDelta]=useState(150-Math.random()*50);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    },[text])
    const tick = () =>{
        let i=loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0,text.length - 1): fullText.substring(0,text.length + 1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 1.2)
        }
         if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setloopNum(loopNum+1)
            setDelta(500);
        }
    }

  return (
    <section className="banner" id="cover">
      <Container>
  <Row className="align-items-center">

    <Col xs={12} md={6} xl={5}>
      <motion.img
        className="img-shift-left"
        src={headerImg}
        alt="Header Img"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </Col>

    <Col xs={12} md={6} xl={7}>
      <motion.span
        className="tagline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        About Me:
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Hello I'm Rasha <span className="wrap">{text}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        With expertise in web development, optimization strategies, and user
        experience design, I love crafting clean, functional interfaces while
        ensuring strong online visibility...
      </motion.p>

      <motion.button
        className="connect-btn"
        onClick={() => console.log("connect")}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <a href="#connect" style={{ textDecoration: 'none' }}>
  <span>Let's connect</span> <ArrowRightCircle className="arrow" size={25} />
</a>

      </motion.button>
    </Col>

  </Row>
</Container>

    </section>
  );
};
