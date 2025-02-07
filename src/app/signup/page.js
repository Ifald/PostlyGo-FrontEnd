'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Компонент для поля ввода
 */
const InputField = ({ type, name, placeholder, error }) => (
  <div className="w-full flex flex-col items-center">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-[268px] h-[38px] bg-[#FAFAFA] border rounded-[3px] px-3 text-[12px] leading-[14px] text-[#737373] focus:outline-none ${
        error
          ? 'border-red-500 focus:ring-red-300'
          : 'border-[#DBDBDB] focus:ring-blue-300'
      }`}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

export default function SignUp() {
  const [errors, setErrors] = useState({ username: '' });

  /**
   * Проверка имени пользователя
   */
  const validateUsername = (username) => {
    if (username === 'existinguser') {
      return 'This username is already taken.';
    }
    return '';
  };

  /**
   * Обработчик отправки формы
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');

    const usernameError = validateUsername(username);
    setErrors({ username: usernameError });

    if (!usernameError) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Карточка регистрации */}
      <div className="bg-white border border-[#DBDBDB] rounded-[1px] shadow-md w-[350px] p-6 flex flex-col items-center">
        {/* Логотип */}
        <div className="mb-2">
          <Image src="/logo.png" alt="ICHGRAM Logo" width={190} height={83} />
        </div>

        {/* Заголовок */}
        <p
          className="text-center text-[#737373] text-[16px] font-semibold leading-[20px] mb-6"
          style={{ width: '280px' }}
        >
          Sign up to see photos and videos from your friends.
        </p>

        {/* Форма */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-1.5"
        >
          <InputField type="email" name="email" placeholder="Email" />
          <InputField type="text" name="fullname" placeholder="Full Name" />
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            error={errors.username}
          />
          <InputField type="password" name="password" placeholder="Password" />

          {/* Информационный текст */}
          <div
            className="text-[12px] leading-[16px] text-[#737373] text-center mt-10 mb-5"
            style={{ width: '268px', height: '80px' }}
          >
            <p>
              People who use our service may have uploaded your contact
              information to Instagram.{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </p>
            <p className="mt-2">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms
              </a>
              ,{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Cookies Policy
              </a>
              .
            </p>
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            className="w-[268px] h-[32px] bg-[#0095F6] text-white text-[14px] font-medium rounded-[8px] hover:bg-blue-500 transition"
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Логин-секция */}
      <div className="w-[350px] text-center mt-3 border border-[#DBDBDB] bg-white py-4 rounded-[1px]">
        <p className="text-sm text-[#737373]">
          Have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
