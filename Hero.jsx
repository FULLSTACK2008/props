import Button from "./Button";

function Hero() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <p>This is a simple React landing page.</p>

      <Button label="Login" />
      <Button label="Register" />
      <Button label="Learn More" />
    </div>
  );
}

export default Hero;