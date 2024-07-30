import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/zod/formSchema";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("メッセージが送信されました");
      } else {
        alert("送信に失敗しました");
      }
    } catch (error) {
      console.error(error);
      alert("送信中にエラーが発生しました");
    }
  };
  return (
    <form
      className="flex flex-col text-start md:items-center gap-5 h-full p-12 mt-5 bg-cyan-300 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:flex w-full">
        <label className="w-36 p-1 mr-1 sm:text-right" htmlFor="name">
          名前:
        </label>
        <input className="w-full p-1 rounded-sm" id="name" placeholder="田中　太郎"{...register("name")} />
      </div>
        {errors.name && <p className="text-red-600 font-bold">{errors.name.message}</p>}
      <div className="sm:flex w-full">
        <label className="w-36 text-right p-1 mr-1" htmlFor="email">
          メールアドレス:
        </label>
        <input className="w-full p-1 rounded-sm" id="email" placeholder="example@exmaple.com"{...register("email")} />
      </div>
        {errors.email && <p className="text-red-600 font-bold">{errors.email.message}</p>}
      <div className="sm:flex w-full">
        <label className="w-36 text-right p-1 mr-1" htmlFor="message">
          お問い合わせ内容:
        </label>
        <textarea className="w-full  h-80 p-1 rounded-sm" id="message" placeholder="問い合わせ内容をここに記載" {...register("message")} />
      </div>
        {errors.message && <p className="text-red-600 font-bold">{errors.message.message}</p>}
      <button className="bg-gray-400 w-full px-8 py-2 rounded-md hover:opacity-70 hover:font-bold transition duration-300" type="submit">送信</button>
    </form>
  );
};

export default ContactForm;
