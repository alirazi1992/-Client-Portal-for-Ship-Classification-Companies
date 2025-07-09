import { useParams } from 'react-router-dom';
import { useState } from 'react';

const mockSurveys = [
  {
    id: 1,
    TickName: 'Darya-101',
    problemType: 'مشکل عدم نمایش شناورها',
    assignName: 'مهندس رضایی',
    date: '2025-06-12',
    priority: 'High',
    status: 'pending',
    attachment: 'https://example.com/sample.pdf',
  },
  {
    id: 2,
    TickName: 'Persian Star',
    problemType: 'فراموشی رمز سیستم',
    assignName: 'مهندس کریمی',
    date: '2025-05-22',
    priority: 'Medium',
    status: 'approved',
    attachment: 'https://example.com/report.docx',
  },
];

const EngineerDashboard = () => {
  const { name } = useParams();
  const [tickets, setTickets] = useState(
    mockSurveys.filter((t) => t.assignName === name)
  );
  const [replies, setReplies] = useState({});

  const handleStatusChange = (id, newStatus) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const handleReplyChange = (id, text) => {
    setReplies({ ...replies, [id]: text });
  };

  const handleReplySubmit = (id) => {
    alert(`✅ پاسخ شما برای تیکت ${id} ثبت شد:\n${replies[id]}`);
    setReplies({ ...replies, [id]: '' });
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">داشبورد {name}</h2>

      {tickets.length === 0 ? (
        <p className="text-red-500">هیچ تیکتی برای شما ثبت نشده است.</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket.id} className="mb-6 p-4 border rounded space-y-2">
            <p><strong>تیکت:</strong> {ticket.shipName}</p>
            <p><strong>نوع مشکل:</strong> {ticket.problemType}</p>
            <p><strong>تاریخ:</strong> {ticket.date}</p>
            <p><strong>فایل پیوست:</strong> <a href={ticket.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">نمایش فایل</a></p>

            <label className="block mt-2">تغییر وضعیت:</label>
            <select
              value={ticket.status}
              onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
              className="p-2 border rounded mt-1"
            >
              <option value="pending">در حال بررسی</option>
              <option value="approved">تأیید شده</option>
              <option value="rejected">رد شده</option>
              <option value="resolved">حل شده</option>
            </select>

            <label className="block mt-3 font-semibold">ارسال پاسخ:</label>
            <textarea
              rows={3}
              className="w-full border rounded p-2"
              placeholder="پاسخ خود را تایپ کنید..."
              value={replies[ticket.id] || ''}
              onChange={(e) => handleReplyChange(ticket.id, e.target.value)}
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleReplySubmit(ticket.id)}
            >
              ارسال پاسخ
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default EngineerDashboard;
