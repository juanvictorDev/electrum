import './App.css';
import { Footer } from './components/footer-section/footer';
import { Header } from './components/header-section/Header';
import { Highlights } from './components/highlights-section/highlights/Highlights';
import { Newsletter } from './components/newsletter-section/newsletter';
import { Card } from './components/products-section/card/card';
import { Cards } from './components/products-section/cards/cards';
import { Promo } from './components/promo-section/promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Highlights />
      <h2 className="title">Produtos Novos</h2>
      <Cards>
        <Card img={'assets/prod-1.jpg'} category="Monitor" name="Monitor Gamer UltraWide" price="R$ 1.675,00"/>
        <Card img={'assets/prod-2.jpg'} category="Microfone" name="Microfone Gamer RGB" price="R$ 899,99"/>
        <Card img={'assets/prod-3.jpg'} category="TV" name="SmartTV 42 polegadas" price="R$ 1.800,90"/>
        <Card img={'assets/prod-4.jpg'} category="Desktop" name="Desktop Gamer RGB" price="R$ 320,85"/>
      </Cards>
      <Promo />
      <h2 className="title">Mais Vendidos</h2>
      <Cards>
        <Card img={'assets/prod-5.jpg'} category="Controle" name="Joystick X-Box" price="R$ 475,00"/>
        <Card img={'assets/prod-6.jpg'} category="Smartphone" name="Sansumg Galaxy 99" price="R$ 2.999,99"/>
        <Card img={'assets/prod-7.jpg'} category="Notebook" name="Notebook Acer" price="R$ 1.458,90"/>
        <Card img={'assets/prod-8.jpg'} category="Mouse" name="Mouse Gamer RGB" price="R$ 110,45"/>
      </Cards>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
