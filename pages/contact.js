import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = (props) => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me messages!" />
      </Head>
      <ContactForm />
    </>
  );
};

// const getServerSideProps = () => {};

// export { getServerSideProps };
export default ContactPage;
