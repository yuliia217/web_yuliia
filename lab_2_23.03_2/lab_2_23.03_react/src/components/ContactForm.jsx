import { useEffect, useState } from "react";

function ContactForm() {
  const [open, setOpen] = useState(false);

  // відкривається через 5 секунд (можеш змінити)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      <div className="bg-white text-black p-6 rounded-2xl w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Зв’яжіться з нами</h2>

        <form>
          <input
            type="text"
            placeholder="Ім'я"
            className="w-full mb-2 p-2 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded"
          />

          <input
            type="tel"
            placeholder="Телефон"
            className="w-full mb-2 p-2 border rounded"
          />

          <textarea
            placeholder="Повідомлення"
            className="w-full mb-3 p-2 border rounded"
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Закрити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;