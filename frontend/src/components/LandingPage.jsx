import {
  Activity,
  ShoppingCart,
  MessageCircle,
  ShieldCheck,
  Brain,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#020617_70%)]
"
    >
    
      

      {/* HERO */}
      <section className="relative px-8 py-24 overflow-hidden bg-linear-to-b from-[#020e2d] via-[#051f32] to-sky-300">
  {/* Background glow blobs */}
  {/* Left ambient glow */}
<div className="
  absolute -left-72 bottom-[-20rem]
  w-[600px] h-[600px]
  bg-gradient-to-br from-cyan-400/40 via-sky-400/20 to-transparent
  rounded-full blur-[160px]
" />

{/* Right ambient glow */}
<div className="
  absolute top-1/4 -right-72
  w-[600px] h-[600px]
  bg-gradient-to-bl from-blue-400/40 via-sky-400/20 to-transparent
  rounded-full blur-[160px]
" />


  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Smart Healthcare <br />
        <span
          className="
            bg-linear-to-r from-cyan-500 via-sky-300 to-blue-200
            bg-clip-text text-transparent
          "
        >
          Powered by AI
        </span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-xl">
        Describe your symptoms and let AI guide you with safe medicine
        suggestions, lab test recommendations, and instant chatbot support.
      </p>

      <div className="mt-8 flex gap-4">
        <button
          className="
            px-7 py-3 rounded-full
            bg-linear-to-r from-cyan-500 to-sky-300
            text-black font-semibold
            transition-all duration-500
            hover:from-sky-300 hover:to-cyan-500 border-2 border-[#020e2d]
            shadow-[0_0_30px_rgba(34,211,238,0.6)] cursor-pointer
          "
        >
          Check Symptoms
        </button>

        <button
          className="
            px-7 py-3 rounded-full
             text-[#020e2d] text-l font-semibold
            hover:bg-cyan-400/10 transition cursor-pointer border-2 border-[#020e2d]
          "
        >
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT AI CARD */}
    <div
  className="
    relative p-8 rounded-2xl
    bg-[linear-gradient(to_right,#020617_0%,#0f172a_40%,#38bdf8_100%)]
    backdrop-blur-xl
    border-2 border-cyan-400/40
    shadow-[0_0_30px_rgba(56,189,248,0.18)]
    hover:shadow-[0_0_70px_rgba(56,189,248,0.45)]
    hover:-translate-y-1
    transition-all duration-500 ease-out
    overflow-hidden
  "
>
  {/* subtle noise / glow layer */}
  <div className="absolute inset-0 bg-cyan-400/5 pointer-events-none" />

  <h3 className="text-xl font-semibold text-cyan-200 mb-6 tracking-wide">
    AI Decision System
  </h3>

  <ul className="space-y-4 text-slate-200 text-sm">
    <li className="flex items-center gap-3">
      <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
      Safe for OTC Medicine
    </li>

    <li className="flex items-center gap-3">
      <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
      Observation / Lab Test Needed
    </li>

    <li className="flex items-center gap-3">
      <span className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.6)]"></span>
      Doctor Consultation Required
    </li>
  </ul>

  {/* Decorative AI ring */}
  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full 
                  bg-cyan-400/10 
                  border border-cyan-300/30 
                  blur-sm animate-pulse" />
</div>
</div>
</section>
 
      {/* HOW IT WORKS */}
      <section className="px-8 py-20  bg-linear-to-t from-[#0a1c48] via-[#5091c2] to-sky-300">
        <h3 className="text-4xl font-bold text-center mb-16 text-[#0f172a]">How It Works</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto ">
          <Card
            icon={<Brain size={36} />}
            title="Enter Symptoms"
            desc="Describe symptoms via form or AI chatbot."
          />
          <Card
            icon={<Activity size={36} />}
            title="AI Analysis"
            desc="AI checks severity and decides safe next steps."
          />
          <Card
            icon={<ShoppingCart size={36} />}
            title="Buy or Consult"
            desc="OTC medicines enabled or doctor consultation suggested."
          />
        </div>
      </section>
       <section id="metrics" className="py-20 border-t-4 border-b-4 border-white bg-slate-900/30 border-y ">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <MetricItem value="99.9%" label="AI Accuracy" sub="Clinical Validation" />
          <MetricItem value="24/7" label="Availability" sub="Instant Support" />
          <MetricItem value="1.2M+" label="Cases Solved" sub="Verified Patients" />
          <MetricItem value="100%" label="Secure" sub="End-to-end Encrypted" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-24 bg-linear-to-r from-cyan-800 via-sky-100 to-blue-600 ">
        <h3 className="text-4xl font-bold text-center mb-16">
          Platform Features
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Feature
            icon={<ShieldCheck size={84} />}
            title="Responsible AI"
            desc="Medicine purchase blocked for high-risk symptoms."
          />
          <Feature
            icon={<MessageCircle size={84} />}
            title="AI Chatbot"
            desc="24/7 intelligent health and medicine assistance."
          />
          <Feature
            icon={<Stethoscope size={84} />}
            title="Doctor Guidance"
            desc="Instant referral when professional care is needed."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-28 text-center bg-linear-to-r from-cyan-800 via-sky-100 to-blue-600 text-black">
        <h3 className="text-4xl font-extrabold mb-6">
          Start Your Smart Health Journey
        </h3>
        <p className="text-lg mb-10">
          Make safe, informed healthcare decisions with AI assistance.
        </p>
        <button className="px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-slate-900">
          Get Started Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-6 text-center text-gray-500 text-sm">
        © 2026 MedAssist AI. This platform provides guidance, not medical
        diagnosis.
      </footer>
    </div>
  );
}

/* Reusable Components */

function Card({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-[#0f172a] backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 shadow-lg">
      <div className="text-cyan-400 mb-5">{icon}</div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
function MetricItem({ value, label, sub }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">{value}</div>
      <div>
        <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{label}</div>
        <div className="text-[10px] text-slate-500 font-bold uppercase">{sub}</div>
      </div>
    </div>
  );
}
function Feature({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 shadow-lg text-center">
      <div className="flex justify-center text-cyan-400 mb-5">{icon}</div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
