import ContactForm from "@/components/ContactForm";
import React from "react";


const ContactPage = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-xl">お問い合わせ</h2>
      <ContactForm/>
    </div>
  );
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
