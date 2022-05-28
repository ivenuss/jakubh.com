import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '~/ui/Button';
import InputField from '~/ui/InputField';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((curr) => ({ ...curr, [e.target.name]: e.target.value || '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const promise = fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(async (res) => {
        setLoading(false);

        const r = await res.json();

        if (r.error) throw new Error(r.error);
        return r;
      })
      .catch(() => {
        setLoading(false);
      });

    toast.promise(promise, {
      loading: 'Loading',
      success: (data) => data.message,
      error: (data) => data.message
    });

    setForm({
      fullname: '',
      email: '',
      message: ''
    });
  };

  return (
    <section>
      <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Get in touch
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <InputField
          required
          label="Full Name"
          name="fullname"
          placeholder="Your name"
          maxLength={120}
          value={form.fullname}
          onChange={handleInputChange}
        />
        <InputField
          required
          label="Email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleInputChange}
        />

        <InputField
          required
          label="Message"
          name="message"
          placeholder="Your message, question..."
          textarea
          rows={3}
          maxLength={3000}
          value={form.message}
          onChange={handleInputChange}
        />

        <Button
          loading={loading}
          type="submit"
          value="Submit"
          className="w-full md:w-7/12 md:ml-auto"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
