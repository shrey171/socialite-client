import z, { ZodType } from "zod";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
}

export interface IRegisterData {
  username: string;
  alias: string;
  email: string;
  password: string;
}

export interface ILoginData {
  username: string,
  password: string
}

export interface IEmail {
  email: string
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export const RegisterSchema: ZodType<IRegisterData> = z.object({
  username: z.string().min(4, 'Username should have atleast 4 characters').max(30, 'Username too long'),
  alias: z.string().min(4, 'Alias should have atleast 4 characters').max(30, 'Alias too long'),
  email: z.string().email(),
  password: z.string().min(6, 'Password should have atleast 6 characters').max(20, 'Password is too long'),
})

export const LoginSchema: ZodType<ILoginData> = z.object({
  username: z.string().min(4, 'Username should have atleast 4 characters').max(30, 'Username too long'),
  password: z.string().min(6, 'Password should have atleast 6 characters').max(20, 'Password too long'),
})

export const EmailSchema: ZodType<IEmail> = z.object({
  email: z.string().email(),
})

export const ResetPasswordSchema: ZodType<IResetPassword> = z.object({
  password: z.string().min(6, 'Password should have atleast 6 characters').max(20, 'Password too long'),
  confirmPassword: z.string(),
}).refine(({ confirmPassword, password }) => password === confirmPassword, { message: 'Both passwords should match', path: ['confirmPassword'] })