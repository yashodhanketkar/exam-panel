export const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="bg-blue-500 text-white grid md:grid-cols-2 px-2 py-1">
      <p className="font-semibold">Exam-Panel</p>
      {/* <p className="font-semibold md:text-end">Vercel</p> */}
      <p className="text-xs text-center col-span-1 md:col-span-2">
        2023{currentYear !== 2023 && `-${currentYear}`} © Exam-Panel Yashodhan
        Ketkar
      </p>
    </footer>
  );
};
