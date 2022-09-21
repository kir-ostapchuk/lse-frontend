import { object, string } from 'zod';

export const loginSchema = object({
    email: string().min(1,'Укажите email').email('Электронная почта недействительна'),
    password: string()
    .min(1,'Требуется пароль')
    .min(8, 'Пароль должен быть не менее 8 символов')
    .max(32, 'Пароль должен быть меньше 32 символов'),
});