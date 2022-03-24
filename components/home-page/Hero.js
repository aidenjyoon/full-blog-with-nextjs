import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/random_image.jpg"
          alt="An image showing Aiden"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Aiden</h1>
      <p>
        I blog about web development and machine learning - especially about
        deraining
      </p>
    </section>
  );
};

export default Hero;
