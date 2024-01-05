
import { getSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = getSession();

  if (!session) {
    // Redirect the user to the login page if not authenticated
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      {/* Your protected content */}
    </div>
  );
}
