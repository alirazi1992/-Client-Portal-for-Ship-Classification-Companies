// src/pages/SupportTicketRequest.jsx
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SupportTicketRequest = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    ticketTitle: '',
    category: '',
    reportDate: '',
    reportedBy: '',
    description: '',
  });

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('تیکت پشتیبانی با موفقیت ثبت شد ✅');

    console.log('Form Data:', formData);
    if (fileInputRef.current?.files[0]) {
      console.log('Attached File:', fileInputRef.current.files[0].name);
    }

    // Clear all
    setFormData({
      ticketTitle: '',
      category: '',
      reportDate: '',
      reportedBy: '',
      description: '',
    });
    setSelectedFileName('');
    e.target.reset();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">ارسال تیکت پشتیبانی</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">عنوان تیکت</label>
          <input
            type="text"
            name="ticketTitle"
            value={formData.ticketTitle}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">دسته‌بندی مشکل</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">انتخاب کنید</option>
            <option value="software">نرم‌افزاری</option>
            <option value="hardware">سخت‌افزاری</option>
            <option value="network">شبکه</option>
            <option value="account">حساب کاربری</option>
            <option value="other">سایر</option>
          </select>
        </div>

        {/* Report Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">تاریخ ثبت مشکل</label>
          <input
            type="date"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Reporter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">نام گزارش‌دهنده</label>
          <input
            type="text"
            name="reportedBy"
            value={formData.reportedBy}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">شرح کامل مشکل</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>

        {/* Attachment */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">فایل ضمیمه (اختیاری)</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition text-sm"
            >
              📎 افزودن فایل ضمیمه
            </button>
            {selectedFileName && (
              <span className="text-sm text-gray-700 truncate max-w-xs">
                {selectedFileName}
              </span>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-left">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ارسال تیکت
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportTicketRequest;
