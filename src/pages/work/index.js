import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/data/images";

Modal.setAppElement("#__next");

const WorkPage = () => {
  const [openIsId, setIsOpenId] = useState(null);
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-5">制作物一覧</h2>
      <p>※画像をクリックすると拡大。赤文字はリンクです。</p>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <button onClick={() => setIsOpenId(image.id)}>
              <Image
                className="mb-5 rounded-md hover:opacity-70 transition"
                src={image.src}
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                alt={image.alt}
              />
            </button>
            {image.link ? (
              <Link className="text-red-500" href={image.link}>
                {image.text}
              </Link>
            ) : (
              <p className="font-bold">{image.text}</p>
            )}
            <Modal
              isOpen={openIsId === image.id}
              onRequestClose={() => setIsOpenId(null)}
            >
              <button onClick={() => setIsOpenId(null)}>
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="contain"
                  alt={image.alt}
                />
              </button>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      topImage: "/works.jpg",
      topText: "Works",
    },
  };
}

export default WorkPage;
