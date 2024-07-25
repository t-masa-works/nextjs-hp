import React from "react";

const ContactPage = () => {
  return <div>ContactPage</div>;
};

export async function getStaticProps() {
  return {
    props: {
      topImage: "/contact.jpg",
      topText: "Contact",
    },
  };
}

export default ContactPage;
