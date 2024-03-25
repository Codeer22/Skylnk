"use client"
import React, { useState } from 'react';
import { LoginForm } from '@/components/ui/login-form';
import { RegisterForm } from '@/components/ui/register-form';
import { string } from 'zod';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const AuthPage = () => {
     const [authMode, setAuthMode] = useState('login'); // Initial state: 'login'

     const handleAuthModeSwitch = (newMode: string) => {
          setAuthMode(newMode);
     };

     return (
          <div>
               <div className="auth-mode-switcher">
               </div>

               {authMode === 'login' && <LoginForm />}
               {authMode === 'register' && <RegisterForm />}
          </div>
     );
};

export default AuthPage;
