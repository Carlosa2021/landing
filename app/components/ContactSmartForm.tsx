'use client';

import { useState } from 'react';

interface InterestOption {
  value: string;
  label: string;
}

interface ContactCopy {
  stepOneTitle: string;
  stepTwoTitle: string;
  responseNote: string;
  emailLabel: string;
  emailPlaceholder: string;
  continueCta: string;
  nameLabel: string;
  messageLabel: string;
  interestLabel: string;
  interestPlaceholder: string;
  interestOptions: InterestOption[];
  backCta: string;
  submitCta: string;
  successMessage: string;
  missingEmail: string;
}

export default function ContactSmartForm({ copy }: { copy: ContactCopy }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    interest: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim() === '') {
      alert(copy.missingEmail);
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert(copy.successMessage);
    setFormData({ email: '', name: '', message: '', interest: '' });
    setStep(1);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-7 text-white backdrop-blur">
      <h2 className="text-xl font-semibold">
        {step === 1 ? copy.stepOneTitle : copy.stepTwoTitle}
      </h2>
      <p className="mt-2 text-sm text-white/60">{copy.responseNote}</p>

      {step === 1 && (
        <form onSubmit={handleStep1} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {copy.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              placeholder={copy.emailPlaceholder}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            {copy.continueCta}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {copy.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              placeholder={copy.nameLabel}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {copy.messageLabel}
            </label>
            <textarea
              name="message"
              placeholder={copy.messageLabel}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {copy.interestLabel}
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <option value="">{copy.interestPlaceholder}</option>
              {copy.interestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10"
            >
              {copy.backCta}
            </button>
            <button
              type="submit"
              className="w-1/2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {copy.submitCta}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
