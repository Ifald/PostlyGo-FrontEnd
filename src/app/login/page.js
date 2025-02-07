'use client';

import Image from 'next/image';

export default function LogIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Карточка логина */}
      <div className="bg-white border border-[#DBDBDB] rounded-[1px] shadow-md w-[350px] p-6 flex flex-col items-center">
        {/* Логотип */}
        <div className="mb-6">
          <Image src="/logo.png" alt="ICHGRAM Logo" width={190} height={83} />
        </div>

        {/* Форма входа */}
        <form className="flex flex-col items-center space-y-1.5">
          <input
            type="text"
            name="username"
            placeholder="Username, or email"
            className="w-[268px] h-[38px] bg-[#FAFAFA] border border-[#DBDBDB] rounded-[3px] px-3 text-[12px] leading-[14px] text-[#737373] focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-[268px] h-[38px] bg-[#FAFAFA] border border-[#DBDBDB] rounded-[3px] px-3 text-[12px] leading-[14px] text-[#737373] focus:outline-none focus:ring-1 focus:ring-blue-300"
          />

          {/* Кнопка входа */}
          <button
            type="submit"
            className="w-[268px] h-[32px] bg-[#0095F6] text-white text-[14px] font-medium rounded-[8px] hover:bg-blue-500 transition"
          >
            Log In
          </button>
        </form>

        {/* Разделитель */}
        <div className="flex items-center justify-between w-[268px] my-3">
          <hr className="flex-1 border-[#DBDBDB]" />
          <span className="text-[12px] text-[#737373] mx-2">OR</span>
          <hr className="flex-1 border-[#DBDBDB]" />
        </div>

        {/* Ссылка на восстановление пароля */}
        <div className="text-center mb-3">
          <a
            href="/forgot-password"
            className="text-blue-500 text-[12px] hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </div>

      {/* Регистрация */}
      <div className="w-[350px] text-center mt-3 border border-[#DBDBDB] bg-white py-4 rounded-[1px]">
        <p className="text-sm text-[#737373]">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
