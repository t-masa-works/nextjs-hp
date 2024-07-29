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
      <p>※画像をクリックすると拡大。</p>
      <p>デイトラ課題はベーシック認証をかけているものがあります。</p>
      <p>範囲選択でNAMEとPASSを表示<br/>
      NAME:<span className="text-white">demo</span><br/>
      PASS:<span className="text-white">demo</span>
      </p>
      <div className="grid grid-cols-3 gap-16 mt-5">
        {images.map((image) => (
          <div key={image.id} className="relative block">
            <button onClick={() => setIsOpenId(image.id)}>
              <Image
                className="mb-5 rounded-md hover:opacity-70 hover:scale-110 transition duration-300"
                src={image.src}
                sizes="100vw"
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                alt={image.alt}
              />
            </button>
            {image.link ? (
              <Link
                className="hover:text-red-500 hover:font-bold hover:text-lg transition duration-300 block"
                href={image.link}
                target="_blank"
              >
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
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
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
