import {Button, IconButton, InputAdornment, TextField} from '@mui/material'
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";
import {textFieldStyle} from './sign-up-body-styles'
import { TypeOf } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from './validation-form';
import { RouteNames } from '../../routes';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignUpBody: FC = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
      } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
      });

      const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
        setUser(values)
      };

      useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            navigate(RouteNames.STUDY)
        }
      }, [isSubmitSuccessful]);

    return (
        <Box 
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
        >
            <TextField error={!!errors['firstName']}
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Имя' 
                        placeholder='Введите имя'
                        helperText={errors['firstName'] ? errors['firstName'].message : ''}
                        {...register('firstName')}/>
            <TextField error={!!errors['lastName']} 
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Фамилия' 
                        placeholder='Введите фамилию'
                        helperText={errors['lastName'] ? errors['lastName'].message : ''}
                        {...register('lastName')}/>
            <TextField error={!!errors['email']}
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Email' placeholder='Введите email'
                        helperText={errors['email'] ? errors['email'].message : ''}
                        {...register('email')}/>
            <TextField error={!!errors['groupNumber']}
                        required 
                        style={textFieldStyle} 
                        fullWidth label='Номер группы'
                        placeholder='Введите номер группы'
                        helperText={errors['groupNumber'] ? errors['groupNumber'].message : ''}
                        {...register('groupNumber')}/>
            <TextField error={!!errors['faculty']}
                        required 
                        style={textFieldStyle} 
                        fullWidth label='Факультет' 
                        placeholder='Введите факультет'
                        helperText={errors['faculty'] ? errors['faculty'].message : ''}
                        {...register('faculty')}/>
            <TextField error={!!errors['password']} 
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        type={showPassword ? "text" : "password"}
                        label='Пароль' 
                        placeholder='Придумайте пароль'
                        helperText={errors['password'] ? errors['password'].message : ''}
                        {...register('password')}
                        InputProps={{endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )}}/>
            <TextField error={!!errors['passwordConfirm']} 
                        required 
                        style={textFieldStyle} 
                        type={showConfirmPassword ? "text" : "password"}
                        fullWidth 
                        label='Подтвердите пароль' placeholder='Подтвердите пароль'
                        helperText={
                            errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''
                        }
                        {...register('passwordConfirm')}
                        InputProps={{endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                            >
                              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )}}
              />
            <Box mt={2} textAlign='center'>
                <Button type='submit' 
                        variant='contained'
                        color='primary'
                        >Зарегистрироваться</Button>
            </Box>
    </Box>
    )
}

type RegisterInput = TypeOf<typeof registerSchema>;

export default SignUpBody;