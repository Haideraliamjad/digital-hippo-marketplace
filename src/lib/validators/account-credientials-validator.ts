import z from "zod";
const AuthCredientialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 words long" }),
});

type TAuthcriedientialsValidator = z.infer<typeof AuthCredientialsValidator>;
export { AuthCredientialsValidator };
export type { TAuthcriedientialsValidator };
