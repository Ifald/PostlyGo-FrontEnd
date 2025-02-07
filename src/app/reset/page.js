import Image from 'next/image';

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full border-b border-gray-300 py-2">
        <div className="max-w-screen-xl mx-auto px-4">
          <Image
            src="/logo.png"
            alt="ICHGRAM"
            width={97}
            height={54.56}
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white border border-gray-300 rounded-md shadow-md px-6 py-8 w-[390px] h-[537px] flex flex-col">
          {/* Lock Icon */}
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/lock-icon.svg"
              alt="Lock Icon"
              width={96}
              height={96}
            />
          </div>

          {/* Title */}
          <h1 className="text-center text-[18px] font-semibold text-gray-900 mb-4">
            Trouble logging in?
          </h1>

          {/* Description */}
          <p className="text-center text-[14px] leading-[18px] text-gray-500 mb-6">
            Enter your email, phone, or username and we’ll send you a link to
            get back into your account.
          </p>

          {/* Form */}
          <form className="space-y-4 mb-6">
            <input
              type="email"
              placeholder="Email or Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
            >
              Reset your password
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-[1px] bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-[1px] bg-gray-300"></div>
          </div>

          {/* Create New Account */}
          <p className="text-center text-sm text-blue-500 hover:underline cursor-pointer mb-4">
            <a href="/signup">Create new account</a>
          </p>

          {/* Back to Login Button */}
          <a
            href="/login"
            className="w-full h-[44px] border border-gray-300 bg-gray-50 py-2 text-sm text-center text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 mt-auto inline-block rounded-md"
          >
            Back to login
          </a>
        </div>
      </main>
    </div>
  );
}
