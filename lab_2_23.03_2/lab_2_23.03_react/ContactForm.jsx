import { useEffect, useState } from "react";

function ContactForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 60000);
  }, []);

  if (!open) return null;

  return (
    <div>
      <form>
        <input placeholder="Ім'я" />
        <button onClick={() => setOpen(false)}>Закрити</button>
      </form>
    </div>
  );
}

export default ContactForm;