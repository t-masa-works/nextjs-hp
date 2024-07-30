import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "!１文字以上入力してください"),
  email: z.string().email("!有効なメールアドレスを入力してください"),
  message: z.string().min(1, "!内容は必須です"),
});
