import { useState } from "react";
import "../css/welcome.css";
import { registerUser, loginUser } from "../api/authApi";
import { setTokens } from "../api/client";


const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const BlogIllustration = () => (
  <svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "340px" }}>
    {/* Background card */}
    <rect x="20" y="20" width="300" height="260" rx="16" fill="rgba(255,255,255,0.12)" />

    {/* Top bar dots */}
    <circle cx="44" cy="44" r="6" fill="rgba(255,255,255,0.5)" />
    <circle cx="62" cy="44" r="6" fill="rgba(255,255,255,0.35)" />
    <circle cx="80" cy="44" r="6" fill="rgba(255,255,255,0.25)" />

    {/* Divider */}
    <line x1="36" y1="60" x2="304" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

    {/* Heading skeleton */}
    <rect x="36" y="76" width="180" height="14" rx="7" fill="rgba(255,255,255,0.6)" />
    <rect x="36" y="98" width="130" height="10" rx="5" fill="rgba(255,255,255,0.3)" />

    {/* Body text lines */}
    <rect x="36" y="124" width="268" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
    <rect x="36" y="140" width="240" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
    <rect x="36" y="156" width="255" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
    <rect x="36" y="172" width="200" height="8" rx="4" fill="rgba(255,255,255,0.15)" />

    {/* Tag pills */}
    <rect x="36" y="196" width="70" height="22" rx="11" fill="rgba(255,255,255,0.25)" />
    <rect x="114" y="196" width="80" height="22" rx="11" fill="rgba(255,255,255,0.18)" />
    <rect x="202" y="196" width="60" height="22" rx="11" fill="rgba(255,255,255,0.15)" />

    {/* Tag text approximations */}
    <rect x="50" y="204" width="42" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
    <rect x="128" y="204" width="52" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
    <rect x="214" y="204" width="36" height="6" rx="3" fill="rgba(255,255,255,0.35)" />

    {/* Bottom action row */}
    <rect x="36" y="234" width="100" height="30" rx="15" fill="rgba(255,255,255,0.9)" />
    <rect x="50" y="246" width="72" height="6" rx="3" fill="#E84A0C" />

    {/* Avatar cluster */}
    <circle cx="222" cy="249" r="13" fill="rgba(255,255,255,0.4)" />
    <circle cx="244" cy="249" r="13" fill="rgba(255,255,255,0.3)" />
    <circle cx="266" cy="249" r="13" fill="rgba(255,255,255,0.2)" />

    {/* Floating badge top-right */}
    <rect x="210" y="26" width="100" height="28" rx="14" fill="rgba(255,255,255,0.9)" />
    <circle cx="228" cy="40" r="7" fill="#E84A0C" opacity="0.7" />
    <rect x="240" y="36" width="58" height="5" rx="2.5" fill="#E84A0C" opacity="0.6" />
    <rect x="240" y="44" width="42" height="4" rx="2" fill="#E84A0C" opacity="0.35" />

    {/* Floating sparkles */}
    <text x="18" y="165" fontSize="18" opacity="0.5">✦</text>
    <text x="310" y="100" fontSize="12" opacity="0.4">✦</text>
    <text x="300" y="200" fontSize="10" opacity="0.3">✦</text>
  </svg>
);

const InputField = ({ label, type, id, placeholder, value, onChange, showToggle, onToggle, showPass }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div className="input-wrap">
      <input
        id={id}
        type={showToggle ? (showPass ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {showToggle && (
        <button type="button" className="eye-btn" onClick={onToggle}>
          <EyeIcon open={showPass} />
        </button>
      )}
    </div>
  </div>
);

const SocialButtons = () => (
  <div className="social-btns">
    <button className="social-btn google">
      <svg viewBox="0 0 48 48" width="18" height="18">
        <path fill="#EA4335" d="M24 9.5c3.1 0 5.6 1.1 7.6 2.9l5.6-5.6C33.8 3.5 29.2 1.5 24 1.5 14.9 1.5 7.2 7.1 3.9 15l6.6 5.1C12.2 13.7 17.6 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z"/>
        <path fill="#FBBC05" d="M10.5 28.5c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L3.9 14C2.4 17 1.5 20.4 1.5 24s.9 7 2.4 10l6.6-5.5z"/>
        <path fill="#34A853" d="M24 46.5c5.2 0 9.6-1.7 12.8-4.7l-7.4-5.7c-2 1.3-4.5 2.1-5.4 2.1-6.4 0-11.8-4.2-13.5-10l-6.6 5.1C7.2 40.9 14.9 46.5 24 46.5z"/>
      </svg>
      Google
    </button>
    <button className="social-btn github">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.55 2.33 1.1 2.9.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.43c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.21 10.21 0 0022 12.2C22 6.58 17.52 2 12 2z"/>
      </svg>
      GitHub
    </button>
  </div>
);

export default function Welcome() {
  const [tab, setTab] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState(null);

  const [loginForm, setLoginForm] = useState({
    email: "", 
    password: "" 
  });

  const [regForm, setRegForm] = useState({ 
    fname: "", 
    lname: "", 
    email: "", 
    mobile: "",
    password: "", 
    confirm: "", 
    terms: false 
  });

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginForm;

    if (!email || !password) {
      return showToast("Please fill in all fields.", "error");
    }

    try {
      const res = await loginUser(loginForm);

      console.log("Login Success:", res);

      setTokens(res.access_token, res.refresh_token);

      showToast("Welcome back! 🎉");

      if (res.access_token) {
        localStorage.setItem("token", res.access_token);
      }

    } catch (error) {
      console.error("Login Error:", error);
      showToast(error.message || "Login failed", "error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, password, confirm, terms } = regForm;

    if (!fname || !lname || !email || !mobile || !password || !confirm) {
      return showToast("Please fill in all fields.", "error");
    }

    if (!terms) {
      return showToast("Please accept the Terms & Privacy Policy.", "error");
    }

    if (password !== confirm) {
      return showToast("Passwords do not match.", "error");
    }

    try {
      const res = await registerUser(regForm);

      console.log("Register Success:", res);

      showToast("Account created successfully! 🚀");

      setRegForm({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        password: "",
        confirm: "",
        terms: false
      });

    } catch (error) {
      console.error("Register Error:", error);
      showToast(error.message || "Registration failed", "error");
    }
  };

  const leftContent = {
    login: {
      heading: "Every great blog starts with a single idea.",
      features: [
        { icon: "✦", text: "AI-powered blog generation in seconds" },
        { icon: "✦", text: "Pick a topic — we craft the story" },
        { icon: "✦", text: "Publish and reach your audience faster" },
      ],
    },
    register: {
      heading: "Join thousands of creators writing smarter.",
      features: [
        { icon: "✦", text: "Free account — no credit card needed" },
        { icon: "✦", text: "Daily AI blog digest on your topics" },
        { icon: "✦", text: "Grow your readership from day one" },
      ],
    },
  };

  const panel = leftContent[tab];

  return (
    <div className="welcome-root">

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.type === "success" ? "✅" : "❌"} {toast.msg}
        </div>
      )}

      {/* ── LEFT PANEL ── */}
      <div className="auth-left">
        {/* Logo */}
        <div className="auth-left__logo">
          <div className="auth-left__logo-box">✍️</div>
          <span className="auth-left__logo-name">BlogCreft</span>
        </div>

        {/* Illustration */}
        <div className="auth-left__illustration">
          <BlogIllustration />
        </div>

        {/* Heading + Features */}
        <div className="auth-left__bottom">
          <h2 className="auth-left__heading">{panel.heading}</h2>
          <div className="auth-left__features">
            {panel.features.map(({ icon, text }) => (
              <div key={text} className="auth-left__feature">
                <div className="auth-left__feature-dot">{icon}</div>
                <span className="auth-left__feature-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="auth-right">
        <div className="card">

          {/* Header */}
          <div className="card-header">
            <div className="logo">✍️</div>
            <h1 className="brand">Blog<span>Creft</span></h1>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button className={`tab-btn ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>
              Sign In
            </button>
            <button className={`tab-btn ${tab === "register" ? "active" : ""}`} onClick={() => setTab("register")}>
              Sign Up
            </button>
            <div className={`tab-indicator ${tab === "register" ? "right" : ""}`} />
          </div>

          {/* Form */}
          <div className="form-body">
            {tab === "login" ? (
              <form onSubmit={handleLogin} noValidate>
                <p className="form-subtitle">Good to see you again 👋</p>

                <InputField label="Email Address" type="email" id="l-email" placeholder="you@example.com"
                  value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} />

                <InputField label="Password" type="password" id="l-pass" placeholder="Enter your password"
                  value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                  showToggle onToggle={() => setShowPass(p => !p)} showPass={showPass} />

                <div className="forgot-row">
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>

                <button type="submit" className="submit-btn">Sign In →</button>

                <div className="divider"><span>or continue with</span></div>

                <SocialButtons />
              </form>
            ) : (
              <form onSubmit={handleRegister} noValidate className="form-register">

                <p className="form-subtitle">Create your free account ✨</p>

                <div className="row">
                  <InputField label="First Name" type="text" id="r-fname" placeholder="John"
                    value={regForm.fname} onChange={e => setRegForm({ ...regForm, fname: e.target.value })} />
                  <InputField label="Last Name" type="text" id="r-lname" placeholder="Doe"
                    value={regForm.lname} onChange={e => setRegForm({ ...regForm, lname: e.target.value })} />
                </div>

                <InputField label="Email Address" type="email" id="r-email" placeholder="you@example.com"
                  value={regForm.email} onChange={e => setRegForm({ ...regForm, email: e.target.value })}/>

                <InputField label="Mobile" type="tel" id="r-mobile" placeholder="Enter your mobile number"
                  value={regForm.mobile} onChange={e => setRegForm({ ...regForm, mobile: e.target.value })}/>

                <InputField label="Password" type="password" id="r-pass" placeholder="Create a strong password"
                  value={regForm.password} onChange={e => setRegForm({ ...regForm, password: e.target.value })}
                  showToggle onToggle={() => setShowPass(p => !p)} showPass={showPass} />

                <InputField label="Confirm Password" type="password" id="r-confirm" placeholder="Repeat your password"
                  value={regForm.confirm} onChange={e => setRegForm({ ...regForm, confirm: e.target.value })}
                  showToggle onToggle={() => setShowConfirm(p => !p)} showPass={showConfirm} />

                <label className="checkbox-label">
                  <input type="checkbox" checked={regForm.terms}
                    onChange={e => setRegForm({ ...regForm, terms: e.target.checked })} />
                  <span>I agree to the <a href="#">Terms</a> & <a href="#">Privacy Policy</a></span>
                </label>

                <button type="submit" className="submit-btn">Create Account →</button>

                <div className="divider"><span>or sign up with</span></div>

                <SocialButtons />

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}