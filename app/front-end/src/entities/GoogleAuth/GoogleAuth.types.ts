import { CredentialResponse } from '@react-oauth/google';

export interface GoogleAuthProps {
  onSuccess: (cred: CredentialResponse) => void;
  onError: () => void;
  isDarkTheme: boolean;
  type: 'signIn' | 'signUp';
}
