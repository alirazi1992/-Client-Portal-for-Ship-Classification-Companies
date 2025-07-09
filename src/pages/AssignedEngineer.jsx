import { useParams } from 'react-router-dom';

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

const AssignedEngineer = () => {
  const { id } = useParams();
  const ticket = mockSurveys.find(t => t.id === Number(id));

  if (!ticket) {
    return <div className="text-red-500 p-6">تیکت مورد نظر یافت نشد ❌</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">اطلاعات مسئول تیکت</h2>
      
      <div className="space-y-2">
        <p><strong>مسئول:</strong> {ticket.assignName}</p>
        <p><strong>تیکت:</strong> {ticket.shipName}</p>
        <p><strong>نوع مشکل:</strong> {ticket.problemType}</p>
        <p><strong>تاریخ:</strong> {ticket.date}</p>
        <p><strong>وضعیت:</strong> {
          ticket.status === 'pending'
            ? 'در حال بررسی'
            : ticket.status === 'approved'
            ? 'تأیید شده'
            : 'رد شده'
        }</p>
        <p><strong>اولویت:</strong> {
          ticket.priority === 'High'
            ? 'زیاد'
            : ticket.priority === 'Medium'
            ? 'متوسط'
            : 'کم'
        }</p>
        <p><strong>فایل پیوست:</strong> 
          <a href={ticket.attachment} target="_blank" rel="noreferrer" className="text-blue-600 underline mx-1">
            مشاهده فایل
          </a>
        </p>
      </div>
    </div>
  );
};

export default AssignedEngineer;
