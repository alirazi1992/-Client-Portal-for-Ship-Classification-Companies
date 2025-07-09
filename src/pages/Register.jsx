// src/pages/Register.jsx
import { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // default role

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Save role in Firestore
      await setDoc(doc(db, 'users', uid), {
        email,
        role,
      });

      toast.success('ثبت‌نام با موفقیت انجام شد ✅');
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('❌ خطا در ثبت‌نام');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">ثبت‌نام کاربر جدید</h2>

        <input
          type="email"
          placeholder="ایمیل"
          className="mb-3 w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="mb-3 w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="mb-3 w-full p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="user">کاربر معمولی</option>
          <option value="engineer">مهندس</option>
          <option value="admin">مدیر</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default Register;
