import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SG.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // 管理者に送信
      await sendgrid.send({
        to: "t.masa.works@gmail.com", // 管理者のメールアドレス
        from: "portfolio@example.com", // 送信元のメールアドレス
        subject: `新しいコンタクトフォームメッセージ: ${name}`,
        html: `<p><strong>名前:</strong> ${name}</p>
               <p><strong>メール:</strong> ${email}</p>
               <p><strong>メッセージ:</strong> ${message}</p>`,
      });

      // フォーム送信者に確認メールを送信
      await sendgrid.send({
        to: email, // フォーム送信者のメールアドレス
        from: "portfolio@example.com", // 送信元のメールアドレス
        subject: "お問い合わせありがとうございます",
        html: `<p>${name}様</p>
               <p>お問い合わせいただきありがとうございます。以下の内容で受け付けました。</p>
               <p><strong>名前:</strong> ${name}</p>
               <p><strong>メール:</strong> ${email}</p>
               <p><strong>メッセージ:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "メールが送信されました" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "メールの送信に失敗しました" });
    }
  } else {
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
};
