"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Headphones,
  MapPin,
  Network,
  ShieldCheck,
  Video,
  Wifi,
  X,
  Cable,
  DoorOpen,
  Volume2,
  MonitorCog,
} from "lucide-react";

import Container from "@/components/ui/Container";

const services = [
  {
    id: "networking",
    label: "Enterprise Networking",
    icon: Network,
  },
  {
    id: "wifi",
    label: "Wi-Fi Installation",
    icon: Wifi,
  },
  {
    id: "cameras",
    label: "Security Cameras",
    icon: Video,
  },
  {
    id: "access-control",
    label: "Access Control",
    icon: DoorOpen,
  },
  {
    id: "cabling",
    label: "Structured Cabling",
    icon: Cable,
  },
  {
    id: "audio-video",
    label: "Audio / Video",
    icon: Volume2,
  },
  {
    id: "it-support",
    label: "IT Support",
    icon: MonitorCog,
  },
  {
    id: "other",
    label: "Other",
    icon: CircleDollarSign,
  },
];

const propertyTypes = [
  "Office",
  "Apartment Building",
  "Retail Store",
  "Gym / Fitness Center",
  "Restaurant",
  "Hotel",
  "Warehouse",
  "Healthcare",
  "Residential",
  "Other",
];

const projectSizes = [
  {
    id: "small",
    title: "Small",
    description: "One room, a few devices, or a small service call",
  },
  {
    id: "medium",
    title: "Medium",
    description: "An office, store, restaurant, or full business location",
  },
  {
    id: "large",
    title: "Large",
    description: "Multiple floors, departments, or extensive infrastructure",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Multiple buildings, locations, or a large commercial rollout",
  },
];

const timelines = [
  "As soon as possible",
  "Within 30 days",
  "Within 1–3 months",
  "Just planning",
];

const states = [
  "New Jersey",
  "New York",
  "Pennsylvania",
  "Connecticut",
  "Other",
];

type EstimateForm = {
  services: string[];
  propertyType: string;
  projectSize: string;
  squareFootage: string;
  state: string;
  city: string;
  zipCode: string;
  timeline: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  contactMethod: string;
  comments: string;

  cameraCount: string;
  cameraEnvironment: string;
  doorCount: string;
  cablingDrops: string;
  networkType: string;
};

const initialForm: EstimateForm = {
  services: [],
  propertyType: "",
  projectSize: "",
  squareFootage: "",
  state: "",
  city: "",
  zipCode: "",
  timeline: "",
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  contactMethod: "Call",
  comments: "",
  cameraCount: "",
  cameraEnvironment: "",
  doorCount: "",
  cablingDrops: "",
  networkType: "",
};

const totalSteps = 6;

export default function EstimateCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<EstimateForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const progress = useMemo(
    () => Math.round((step / totalSteps) * 100),
    [step]
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function openEstimate() {
  setIsOpen(true);
  setSubmitted(false);
  setSubmitError("");
}

  function closeEstimate() {
    setIsOpen(false);
  }

  function toggleService(serviceId: string) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(serviceId)
        ? current.services.filter((item) => item !== serviceId)
        : [...current.services, serviceId],
    }));
  }

  function canContinue() {
    if (step === 1) {
  if (form.services.length === 0) return false;

  if (
    form.services.includes("cameras") &&
    (!form.cameraCount || !form.cameraEnvironment)
  ) {
    return false;
  }

  if (
    form.services.includes("access-control") &&
    !form.doorCount
  ) {
    return false;
  }

  if (
    form.services.includes("cabling") &&
    !form.cablingDrops
  ) {
    return false;
  }

  if (
    (form.services.includes("networking") ||
      form.services.includes("wifi")) &&
    !form.networkType
  ) {
    return false;
  }

  return true;
}
    if (step === 2) return Boolean(form.propertyType);
    if (step === 3) return Boolean(form.projectSize);
    if (step === 4) {
      return Boolean(form.state && form.city && form.zipCode);
    }
    if (step === 5) return Boolean(form.timeline);
    if (step === 6) {
      return Boolean(
        form.fullName &&
          form.phone &&
          form.email &&
          form.contactMethod
      );
    }

    return true;
  }

  function nextStep() {
    if (!canContinue()) return;
    setStep((current) => Math.min(current + 1, totalSteps));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!canContinue() || isSubmitting) return;

  setIsSubmitting(true);
  setSubmitError("");

  try {
    const response = await fetch("/api/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ?? "Your request could not be submitted."
      );
    }

    setSubmitted(true);
  } catch (error) {
    setSubmitError(
      error instanceof Error
        ? error.message
        : "Your request could not be submitted. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  function resetForm() {
  setForm(initialForm);
  setStep(1);
  setSubmitted(false);
  setSubmitError("");
  setIsSubmitting(false);
}

  return (
    <>
      <section
        id="start-project"
        className="relative overflow-hidden border-y border-white/10 bg-[#080b12] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <Container>
          <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-14 text-center shadow-2xl shadow-blue-950/30 sm:px-10 sm:py-16 lg:px-16">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Fast Project Estimate
            </div>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Get your project estimate
              <span className="block text-blue-400">
                in just a few clicks.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Tell us what you need, the approximate size of your space, and
              where the project is located. Our team will review your request
              and contact you quickly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                No obligation
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Takes about one minute
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Fast response
              </span>
            </div>

            <button
              type="button"
              onClick={openEstimate}
              className="group mt-10 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_22px_60px_rgba(37,99,235,0.45)] sm:text-lg"
            >
              Get My Free Estimate
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Container>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeEstimate();
            }
          }}
        >
          <div className="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e17] shadow-2xl shadow-blue-950/50">
            <button
              type="button"
              onClick={closeEstimate}
              aria-label="Close estimate form"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <div className="border-b border-white/10 px-5 pb-5 pt-6 sm:px-8">
                  <p className="pr-12 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Project Estimate
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-sm text-zinc-400">
                      Step {step} of {totalSteps}
                    </p>

                    <p className="text-sm font-semibold text-white">
                      {progress}%
                    </p>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                    {step === 1 && (
  <div>
    <h3 className="text-2xl font-semibold text-white">
      What services do you need?
    </h3>

    <p className="mt-2 text-sm text-zinc-400">
      Select all that apply.
    </p>

    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon;
        const selected = form.services.includes(service.id);

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => toggleService(service.id)}
            className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
              selected
                ? "border-blue-400/60 bg-blue-500/15 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
            }`}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                selected
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-blue-300"
              }`}
            >
              <Icon className="h-5 w-5" />
            </span>

            <span className="flex-1 text-sm font-semibold">
              {service.label}
            </span>

            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                selected
                  ? "border-blue-400 bg-blue-500"
                  : "border-white/20"
              }`}
            >
              {selected && <Check className="h-3 w-3" />}
            </span>
          </button>
        );
      })}
    </div>

    {form.services.length > 0 && (
      <div className="mt-8 border-t border-white/10 pt-7">
        <h4 className="text-lg font-semibold text-white">
          A few service details
        </h4>

        <p className="mt-2 text-sm text-zinc-400">
          These quick answers help us understand the approximate scope.
        </p>

        <div className="mt-5 space-y-5">
          {form.services.includes("cameras") && (
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-2">
              <label>
                <span className="text-sm font-medium text-zinc-300">
                  Approximately how many cameras?
                </span>

                <select
                  value={form.cameraCount}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      cameraCount: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none focus:border-blue-400/60"
                >
                  <option value="">Select quantity</option>
                  <option value="1–4 cameras">1–4 cameras</option>
                  <option value="5–10 cameras">5–10 cameras</option>
                  <option value="11–25 cameras">11–25 cameras</option>
                  <option value="26–50 cameras">26–50 cameras</option>
                  <option value="More than 50 cameras">
                    More than 50 cameras
                  </option>
                  <option value="Not sure">Not sure</option>
                </select>
              </label>

              <label>
                <span className="text-sm font-medium text-zinc-300">
                  Camera environment
                </span>

                <select
                  value={form.cameraEnvironment}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      cameraEnvironment: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none focus:border-blue-400/60"
                >
                  <option value="">Select environment</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Indoor and outdoor">
                    Indoor and outdoor
                  </option>
                  <option value="Not sure">Not sure</option>
                </select>
              </label>
            </div>
          )}

          {form.services.includes("access-control") && (
            <label className="block rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <span className="text-sm font-medium text-zinc-300">
                Approximately how many doors need access control?
              </span>

              <select
                value={form.doorCount}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    doorCount: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none focus:border-blue-400/60"
              >
                <option value="">Select door quantity</option>
                <option value="1 door">1 door</option>
                <option value="2–4 doors">2–4 doors</option>
                <option value="5–10 doors">5–10 doors</option>
                <option value="11–25 doors">11–25 doors</option>
                <option value="More than 25 doors">
                  More than 25 doors
                </option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>
          )}

          {form.services.includes("cabling") && (
            <label className="block rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <span className="text-sm font-medium text-zinc-300">
                Approximately how many cable drops?
              </span>

              <select
                value={form.cablingDrops}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    cablingDrops: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none focus:border-blue-400/60"
              >
                <option value="">Select approximate quantity</option>
                <option value="1–10 drops">1–10 drops</option>
                <option value="11–25 drops">11–25 drops</option>
                <option value="26–50 drops">26–50 drops</option>
                <option value="51–100 drops">51–100 drops</option>
                <option value="More than 100 drops">
                  More than 100 drops
                </option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>
          )}

          {(form.services.includes("networking") ||
            form.services.includes("wifi")) && (
            <label className="block rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <span className="text-sm font-medium text-zinc-300">
                What best describes the network project?
              </span>

              <select
                value={form.networkType}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    networkType: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none focus:border-blue-400/60"
              >
                <option value="">Select project type</option>
                <option value="New network installation">
                  New network installation
                </option>
                <option value="Upgrade an existing network">
                  Upgrade an existing network
                </option>
                <option value="Improve Wi-Fi coverage">
                  Improve Wi-Fi coverage
                </option>
                <option value="Troubleshoot connectivity issues">
                  Troubleshoot connectivity issues
                </option>
                <option value="Multiple locations">
                  Multiple locations
                </option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>
          )}
        </div>
      </div>
    )}
  </div>
)}

                    {step === 2 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          What type of property is it?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          Choose the option that best describes the location.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {propertyTypes.map((property) => {
                            const selected = form.propertyType === property;

                            return (
                              <button
                                key={property}
                                type="button"
                                onClick={() =>
                                  setForm((current) => ({
                                    ...current,
                                    propertyType: property,
                                  }))
                                }
                                className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition ${
                                  selected
                                    ? "border-blue-400/60 bg-blue-500/15 text-white"
                                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/30"
                                }`}
                              >
                                <Building2 className="h-5 w-5 text-blue-300" />
                                {property}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          How large is the project?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          An approximate answer is completely fine.
                        </p>

                        <div className="mt-6 space-y-3">
                          {projectSizes.map((size) => {
                            const selected = form.projectSize === size.id;

                            return (
                              <button
                                key={size.id}
                                type="button"
                                onClick={() =>
                                  setForm((current) => ({
                                    ...current,
                                    projectSize: size.id,
                                  }))
                                }
                                className={`w-full rounded-2xl border p-5 text-left transition ${
                                  selected
                                    ? "border-blue-400/60 bg-blue-500/15"
                                    : "border-white/10 bg-white/[0.03] hover:border-blue-400/30"
                                }`}
                              >
                                <p className="font-semibold text-white">
                                  {size.title}
                                </p>

                                <p className="mt-1 text-sm leading-6 text-zinc-400">
                                  {size.description}
                                </p>
                              </button>
                            );
                          })}
                        </div>

                        <label className="mt-6 block">
                          <span className="text-sm font-medium text-zinc-300">
                            Approximate square footage
                            <span className="ml-1 text-zinc-500">
                              (optional)
                            </span>
                          </span>

                          <input
                            type="text"
                            value={form.squareFootage}
                            onChange={(event) =>
                              setForm((current) => ({
                                ...current,
                                squareFootage: event.target.value,
                              }))
                            }
                            placeholder="Example: 5,000 sq. ft."
                            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                          />
                        </label>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Where is the project located?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          This helps us determine service availability and
                          travel requirements.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <label className="sm:col-span-2">
                            <span className="text-sm font-medium text-zinc-300">
                              State
                            </span>

                            <select
                              value={form.state}
                              onChange={(event) =>
                                setForm((current) => ({
                                  ...current,
                                  state: event.target.value,
                                }))
                              }
                              className="mt-2 w-full rounded-xl border border-white/10 bg-[#101622] px-4 py-3.5 text-white outline-none transition focus:border-blue-400/60"
                            >
                              <option value="">Select a state</option>

                              {states.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label>
                            <span className="text-sm font-medium text-zinc-300">
                              City
                            </span>

                            <input
                              type="text"
                              value={form.city}
                              onChange={(event) =>
                                setForm((current) => ({
                                  ...current,
                                  city: event.target.value,
                                }))
                              }
                              placeholder="City"
                              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                            />
                          </label>

                          <label>
                            <span className="text-sm font-medium text-zinc-300">
                              ZIP code
                            </span>

                            <input
                              type="text"
                              inputMode="numeric"
                              value={form.zipCode}
                              onChange={(event) =>
                                setForm((current) => ({
                                  ...current,
                                  zipCode: event.target.value,
                                }))
                              }
                              placeholder="ZIP code"
                              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                            />
                          </label>
                        </div>

                        <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                          <p className="text-sm leading-6 text-zinc-300">
                            Shield X primarily serves New York, New Jersey,
                            Pennsylvania, and Connecticut.
                          </p>
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          When would you like to begin?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          Select the closest estimated timeframe.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {timelines.map((timeline) => {
                            const selected = form.timeline === timeline;

                            return (
                              <button
                                key={timeline}
                                type="button"
                                onClick={() =>
                                  setForm((current) => ({
                                    ...current,
                                    timeline,
                                  }))
                                }
                                className={`rounded-2xl border p-5 text-left text-sm font-semibold transition ${
                                  selected
                                    ? "border-blue-400/60 bg-blue-500/15 text-white"
                                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/30"
                                }`}
                              >
                                {timeline}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 6 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          How can we reach you?
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          A Shield X specialist will review your request and
                          contact you shortly.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <FormInput
                            label="Full name"
                            value={form.fullName}
                            placeholder="Your name"
                            onChange={(value) =>
                              setForm((current) => ({
                                ...current,
                                fullName: value,
                              }))
                            }
                          />

                          <FormInput
                            label="Business name"
                            optional
                            value={form.businessName}
                            placeholder="Company name"
                            onChange={(value) =>
                              setForm((current) => ({
                                ...current,
                                businessName: value,
                              }))
                            }
                          />

                          <FormInput
                            label="Phone number"
                            type="tel"
                            value={form.phone}
                            placeholder="Phone number"
                            onChange={(value) =>
                              setForm((current) => ({
                                ...current,
                                phone: value,
                              }))
                            }
                          />

                          <FormInput
                            label="Email"
                            type="email"
                            value={form.email}
                            placeholder="Email address"
                            onChange={(value) =>
                              setForm((current) => ({
                                ...current,
                                email: value,
                              }))
                            }
                          />
                        </div>

                        <div className="mt-6">
                          <p className="text-sm font-medium text-zinc-300">
                            Preferred contact method
                          </p>

                          <div className="mt-3 flex flex-wrap gap-3">
                            {["Call", "Text", "Email"].map((method) => (
                              <button
                                key={method}
                                type="button"
                                onClick={() =>
                                  setForm((current) => ({
                                    ...current,
                                    contactMethod: method,
                                  }))
                                }
                                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                                  form.contactMethod === method
                                    ? "border-blue-400 bg-blue-500 text-white"
                                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/30"
                                }`}
                              >
                                {method}
                              </button>
                            ))}
                          </div>
                        </div>

                        <label className="mt-6 block">
                          <span className="text-sm font-medium text-zinc-300">
                            Additional project details
                            <span className="ml-1 text-zinc-500">
                              (optional)
                            </span>
                          </span>

                          <textarea
                            value={form.comments}
                            onChange={(event) =>
                              setForm((current) => ({
                                ...current,
                                comments: event.target.value,
                              }))
                            }
                            placeholder="Tell us anything else we should know."
                            rows={4}
                            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
                          />
                        </label>
                        {submitError && (
  <div
    role="alert"
    className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
  >
    {submitError}
  </div>
)}
                      </div>
                      
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/20 px-5 py-4 sm:px-8">
                    <button
                      type="button"
                      onClick={previousStep}
                      disabled={step === 1}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white disabled:pointer-events-none disabled:opacity-30"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </button>

                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canContinue()}
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:pointer-events-none disabled:opacity-40"
                      >
                        Continue
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canContinue() || isSubmitting}
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:pointer-events-none disabled:opacity-40"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending Request...
                          </>
                        ) : (
                          <>
                            Submit Estimate Request
                            <ChevronRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-300">
                  <Check className="h-10 w-10" />
                </div>

                <h3 className="mt-7 text-3xl font-semibold text-white">
                  Estimate request received.
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-zinc-400">
                  A Shield X specialist will review your project details and
                  contact you using your preferred contact method.
                </p>

                <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left">
                  <Headphones className="h-6 w-6 shrink-0 text-blue-300" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Fast response
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Most requests are reviewed within one business day.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={closeEstimate}
                    className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

type FormInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  optional?: boolean;
};

function FormInput({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  optional = false,
}: FormInputProps) {
  return (
    <label>
      <span className="text-sm font-medium text-zinc-300">
        {label}

        {optional && (
          <span className="ml-1 text-zinc-500">(optional)</span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/60"
      />
    </label>
  );
}