'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'Configuration':
        return 'There is a problem with the server configuration. Please contact support.';
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.';
      case 'Verification':
        return 'The verification link has expired or has already been used.';
      case 'OAuthSignin':
        return 'Error occurred during OAuth sign-in attempt.';
      case 'OAuthCallback':
        return 'Error occurred during OAuth callback.';
      case 'OAuthCreateAccount':
        return 'Could not create OAuth provider account.';
      case 'EmailCreateAccount':
        return 'Could not create email provider account.';
      case 'Callback':
        return 'Error occurred during the callback process.';
      case 'OAuthAccountNotLinked':
        return 'Email already exists with different provider. Please sign in using your original provider.';
      case 'EmailSignin':
        return 'Check your email address for sign-in link.';
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.';
      case 'SessionRequired':
        return 'Please sign in to access this page.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          {/* Error Icon */}
          <div className="mx-auto mb-4">
            <svg
              className="h-12 w-12 text-red-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Authentication Error
          </h1>

          <div className="mb-8">
            <p className="text-gray-600">
              {getErrorMessage(error)}
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/auth/signin"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Try Again
            </Link>

            <Link
              href="/"
              className="block w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
            >
              Return Home
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;