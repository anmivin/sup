import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import { CredentialResponse } from '@react-oauth/google';
import { useStore } from 'zustand';

import DefaultButton from '@components/DefaultButton';
import DefaultModal from '@components/DefaultModal/DefaultModal';
import GoogleAuth from '@components/GoogleAuth';

import { SignFormVariants } from '@constants/sharedTypes';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { SignFormProps, SignFormValuesProps, SignFormValuesSchema } from './SignForm.types';

const SignForm = ({ onClose, open }: SignFormProps) => {
  const { t } = useTranslation();
  const { isDarkTheme } = ProfileStore();
  const { signFormType, setSignFormType } = useStore(ProfileStore);

  const isSignUp = useMemo(() => {
    return signFormType === SignFormVariants.SignUp;
  }, [signFormType]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignFormValuesProps>({ resolver: zodResolver(SignFormValuesSchema) });
  const { loginWithGoogle, login } = ProfileStore();

  const onSubmit = handleSubmit(async (data: SignFormValuesProps) => {
    const createUSerData = {
      name: data.name,
      password: data.password,
      email: data.email,
    };
    /*  const user = await createUser(createUSerData);
    console.log(user);
    logIn(user.data.id); */
  });

  const errorHandler = useCallback(() => {
    console.log('Login Failed');
  }, []);

  const successHandler = useCallback(async (creds: CredentialResponse) => {
    creds.credential && (await loginWithGoogle(creds.credential));
  }, []);

  return (
    <DefaultModal open={open} onClose={onClose}>
      <Box display="flex" flexDirection="column" gap={2} width="50%" justifyContent="center">
        <Controller control={control} name="name" render={({ field }) => <TextField {...field} label="name" />} />
        <Controller
          control={control}
          name="password"
          render={({ field }) => <TextField {...field} label="password" />}
        />

        <Tooltip title="можете не заполнять, но тогда не сможете восстановить пароль, коли его забудете">
          <Controller control={control} name="email" render={({ field }) => <TextField {...field} label="email" />} />
        </Tooltip>
        <DefaultButton onClick={onSubmit}>
          <Typography>{isSignUp ? t(`data.pages.signup`) : t(`data.pages.login`)}</Typography>
        </DefaultButton>
        <Typography>{isSignUp ? 'Уже есть акк?' : 'Нет акка пока что'}</Typography>
        <Button onClick={() => setSignFormType(isSignUp ? SignFormVariants.SignIn : SignFormVariants.SignUp)}>
          {isSignUp ? t(`data.pages.login`) : t(`data.pages.signup`)}
        </Button>

        <GoogleAuth
          type={isSignUp ? 'signUp' : 'signIn'}
          isDarkTheme={isDarkTheme()}
          onSuccess={(credentialResponse) => successHandler(credentialResponse)}
          onError={errorHandler}
        />
      </Box>
    </DefaultModal>
  );
};
export default SignForm;
