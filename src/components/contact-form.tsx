"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

type FieldName =
  | "name"
  | "email"
  | "company"
  | "phone"
  | "interest"
  | "message";

const inputClass =
  "w-full rounded-xl border border-ink-700 bg-ink-950/70 px-4 py-3 text-sm text-ink-100 outline-none transition-colors duration-200 placeholder:text-ink-500 focus:border-neon-400/70 focus:ring-2 focus:ring-neon-400/15";

const labelClass =
  "text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400";

export function ContactForm() {
  const { t } = useLocale();
  const { form } = t.cta;

  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: form.interestOptions[0] ?? "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const update =
    (field: FieldName) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!values.name.trim()) nextErrors.name = form.required;
    if (!values.email.trim()) {
      nextErrors.email = form.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      nextErrors.email = form.validEmail;
    }
    if (!values.message.trim()) nextErrors.message = form.required;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");

    const body = [
      `${form.name}: ${values.name}`,
      `${form.email}: ${values.email}`,
      values.company ? `${form.company}: ${values.company}` : null,
      values.phone ? `${form.phone}: ${values.phone}` : null,
      `${form.interest}: ${values.interest}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${t.cta.info.email}?subject=${encodeURIComponent(
      `[aitechx.vn] ${values.interest} — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setStatus("success");
      window.location.href = mailto;
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-panel flex flex-col gap-5 rounded-3xl p-6 shadow-panel sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className={labelClass}>
            {form.name} *
          </label>
          <input
            id="cf-name"
            name="name"
            value={values.name}
            onChange={update("name")}
            placeholder={form.namePlaceholder}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={cn(inputClass, errors.name && "border-magenta-500/70")}
          />
          {errors.name ? (
            <span className="text-xs text-magenta-400">{errors.name}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className={labelClass}>
            {form.email} *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder={form.emailPlaceholder}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={cn(inputClass, errors.email && "border-magenta-500/70")}
          />
          {errors.email ? (
            <span className="text-xs text-magenta-400">{errors.email}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cf-company" className={labelClass}>
            {form.company}
          </label>
          <input
            id="cf-company"
            name="company"
            value={values.company}
            onChange={update("company")}
            placeholder={form.companyPlaceholder}
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cf-phone" className={labelClass}>
            {form.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            value={values.phone}
            onChange={update("phone")}
            placeholder={form.phonePlaceholder}
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-interest" className={labelClass}>
          {form.interest}
        </label>
        <div className="relative">
          <select
            id="cf-interest"
            name="interest"
            value={values.interest}
            onChange={update("interest")}
            className={cn(inputClass, "appearance-none pr-10")}
          >
            {form.interestOptions.map((option) => (
              <option key={option} value={option} className="bg-ink-900">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className={labelClass}>
          {form.message} *
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          placeholder={form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          className={cn(
            inputClass,
            "resize-y",
            errors.message && "border-magenta-500/70",
          )}
        />
        {errors.message ? (
          <span className="text-xs text-magenta-400">{errors.message}</span>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-400 via-neon-300 to-violet-glow-400 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-[0_14px_44px_-16px_rgba(34,211,238,0.9)] transition-all duration-300 hover:brightness-110 disabled:cursor-wait disabled:opacity-80"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {form.sending}
          </>
        ) : (
          <>
            {form.submit}
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      {status === "success" ? (
        <p
          role="status"
          className="flex items-start gap-2.5 rounded-xl border border-lime-neon-400/30 bg-lime-neon-400/10 px-4 py-3 text-sm text-lime-neon-400"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          <span>
            {form.success}{" "}
            <a href={`mailto:${t.cta.info.email}`} className="underline">
              {t.cta.info.email}
            </a>
          </span>
        </p>
      ) : null}
    </form>
  );
}
