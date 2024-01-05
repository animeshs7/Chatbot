
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return <button onClick={() => signOut()}>Sign out</button>;
  } else {
    return <button onClick={() => signIn('google')}>Sign in with Google</button>;
  }
}

export default AuthButton;
