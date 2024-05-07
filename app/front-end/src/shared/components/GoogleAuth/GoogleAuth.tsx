import { GoogleLogin } from '@react-oauth/google';

import { GoogleAuthProps } from './GoogleAuth.types';

const GoogleAuth = ({ isDarkTheme, type, onSuccess, onError }: GoogleAuthProps) => {
  return (
    <GoogleLogin
      theme={isDarkTheme ? 'filled_black' : 'outline'}
      text={type === 'signIn' ? 'signin_with' : 'signup_with'}
      shape="circle"
      size="medium"
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};

export default GoogleAuth;
