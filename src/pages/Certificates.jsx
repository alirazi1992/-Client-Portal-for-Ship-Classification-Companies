const mockTickets = [
  {
    id: 1,
    subject: 'مشکل در لاگین سیستم',
    category: 'نرم‌افزار',
    submitted: '2025-07-06',
    status: 'Open',
    file: '/ticket-1.pdf',
  },
  {
    id: 2,
    subject: 'عدم اتصال به اینترنت',
    category: 'شبکه',
    submitted: '2025-06-28',
    status: 'Resolved',
    file: '/ticket-2.pdf',
  },
];

const Tickets = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'text-red-600';
      case 'In Progress':
        return 'text-yellow-600';
      case 'Resolved':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">تیکت‌های پشتیبانی</h2>

      <div className="space-y-4">
        {mockTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border border-gray-200 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{ticket.subject}</h3>
              <p className="text-sm text-gray-500">
                دسته‌بندی: {ticket.category} | تاریخ ثبت: {ticket.submitted}
              </p>
              <p className={`text-sm mt-1 font-medium ${getStatusColor(ticket.status)}`}>
                وضعیت: {ticket.status === 'Open'
                  ? 'باز ❗'
                  : ticket.status === 'In Progress'
                  ? 'در حال بررسی ⏳'
                  : 'حل شده ✅'}
              </p>
            </div>

            <a
              href={ticket.file}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              دانلود فایل
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
