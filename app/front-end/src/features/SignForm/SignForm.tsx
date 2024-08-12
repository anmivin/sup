import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import { CredentialResponse } from '@react-oauth/google';
import { useStore } from 'zustand';

import GoogleAuth from '@entities/GoogleAuth';

import { SIGN_FORM_VARIANTS } from '@type/enums';

import { CommonStore } from '@stores/Common/Common.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import DefaultModal from '@ui/Modal';

import { SignFormProps, SignFormValuesProps, SignFormValuesSchema } from './SignForm.types';

const SignForm = ({ onClose, open }: SignFormProps) => {
  const { t } = useTranslation();
  const { isDarkTheme } = ProfileStore();
  const { signFormType, setSignFormType } = useStore(CommonStore);

  const isSignUp = useMemo(() => {
    return signFormType === SIGN_FORM_VARIANTS.SignUp;
  }, [signFormType]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignFormValuesProps>({ resolver: zodResolver(SignFormValuesSchema) });
  const { loginWithGoogle, login, createUser } = ProfileStore();

  const onSubmit = handleSubmit(async (data: SignFormValuesProps) => {
    console.log(data);
    const createUserData = {
      name: data.name,
      password: data.password,
      email: data.email,
      avatar: null,
    };
    console.log(createUserData);
    isSignUp ? login(createUserData) : createUser(createUserData);
    const user = login(createUserData);
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
        <Button onClick={onSubmit}>
          <Typography>{isSignUp ? t(`data.pages.signup`) : t(`data.pages.login`)}</Typography>
        </Button>
        <Typography>{isSignUp ? 'Уже есть акк?' : 'Нет акка пока что'}</Typography>
        <Button onClick={() => setSignFormType(isSignUp ? SIGN_FORM_VARIANTS.SignIn : SIGN_FORM_VARIANTS.SignUp)}>
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
