"use client";

// Librerias
import './lib/normalize.css'
import './lib/fontawesome';

// Components
import Header from '../public/Components/header';
import Main from '../public/Components/main';
import AboutMe from '../public/Components/aboutMe';
import Footer from '../public/Components/footer';

export default function Home() {
  return (
<>
  <Header></Header>
  <Main></Main>
  <AboutMe></AboutMe>
  <Footer></Footer>
</>
  );
}
