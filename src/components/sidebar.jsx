// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { FiHome, FiFileText, FiSearch, FiAward, FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggle }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-3 rounded-md transition ${
      isActive ? 'bg-violet-600 text-white' : 'hover:bg-gray-700 text-gray-300'
    }`;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen bg-gray-900 shadow-lg p-4 fixed">
        <div className="text-white text-2xl font-bold mb-8">🎫 Client Portal</div>
        <nav className="flex flex-col space-y-1 text-sm">
          <NavLink to="/" className={linkClass}><FiHome /> داشبورد</NavLink>
          <NavLink to="/request" className={linkClass}><FiFileText /> درخواست تیکت</NavLink>
          <NavLink to="/status" className={linkClass}><FiSearch /> وضعیت تیکت</NavLink>
          <NavLink to="/certificates" className={linkClass}><FiAward /> تیکت‌ها</NavLink>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 z-50 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">🎫 پنل</h2>
          <button onClick={toggle} className="text-white text-xl">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2 text-sm">
          <NavLink to="/" onClick={toggle} className={linkClass}><FiHome /> داشبورد</NavLink>
          <NavLink to="/request" onClick={toggle} className={linkClass}><FiFileText /> درخواست تیکت</NavLink>
          <NavLink to="/status" onClick={toggle} className={linkClass}><FiSearch /> وضعیت تیکت</NavLink>
          <NavLink to="/certificates" onClick={toggle} className={linkClass}><FiAward /> تیکت‌ها</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
