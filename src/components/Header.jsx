// src/components/Header.jsx
import { FiBell, FiUser, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const Header = ({ toggleSidebar }) => {
  const [time, setTime] = useState(new Date());
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNotifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const userRef = useRef();
  const notifRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 rounded-md shadow-md">
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-gray-700 text-xl">
          <FiMenu />
        </button>
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-gray-800">پنل کاربران</h1>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-600 hidden sm:block">🕒 {time.toLocaleTimeString('fa-IR')}</div>

        <div className="relative" ref={notifRef}>
          <button onClick={() => {
            setNotifDropdownOpen(!isNotifDropdownOpen);
            setUserDropdownOpen(false);
          }} className="text-gray-600 hover:text-blue-500 transition">
            <FiBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">۳</span>
          </button>
          {isNotifDropdownOpen && (
            <div className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg p-4 z-50 text-right">
              <h4 className="font-bold text-sm mb-2 text-gray-700">اعلان‌ها</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="p-2 hover:bg-gray-100 rounded transition">📄 درخواست تیکت جدید ثبت شد</li>
                <li className="p-2 hover:bg-gray-100 rounded transition">📄 تیکت شما آماده دریافت است</li>
                <li className="p-2 hover:bg-gray-100 rounded transition">📬 پاسخ پشتیبانی برای شما ارسال شد</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative" ref={userRef}>
          <button onClick={() => {
            setUserDropdownOpen(!isUserDropdownOpen);
            setNotifDropdownOpen(false);
          }} className="flex items-center gap-2 hover:opacity-80 transition">
            <FiUser className="text-xl text-gray-700" />
            <span className="text-sm text-gray-700 font-medium">کاربر</span>
          </button>
          {isUserDropdownOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50 text-right">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-12 h-12 rounded-full border object-cover" />
                <div>
                  <div className="font-semibold">دانیال شایگان</div>
                  <div className="text-xs text-gray-500">کد پرسنلی: 7772354646</div>
                </div>
              </div>
              <hr className="my-2" />
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition"><FiSettings /> تنظیمات حساب</li>
                <li className="flex items-center gap-2 text-red-500 hover:text-red-700 cursor-pointer transition"><FiLogOut /> خروج</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
