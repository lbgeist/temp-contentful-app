import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio est
            aliquam, voluptate molestias vitae iusto libero necessitatibus harum
            consectetur, fuga, aliquid itaque eos suscipit at officia a nulla
            veritatis atque?
          </p>
        </div>
        <div className="ing-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
