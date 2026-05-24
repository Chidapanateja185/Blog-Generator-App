import { useState, useRef, useEffect } from "react";
import "../css/ForgotPassword.css";
import { sendOTP, verifyOTP, resetPassword } from "../api/authApi.js";
import { useNavigate } from "react-router-dom";

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      width={18}
      height={18}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      width={18}
      height={18}
    >
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1={1} y1={1} x2={23} y2={23} />
    </svg>
  );
}

function StepIndicator({ currentStep }) {
  const steps = [
    { num: 1, label: "Email" },
    { num: 2, label: "Verify" },
    { num: 3, label: "New Password" },
  ];

  return (
    <div className="fp-stepper">
      {steps.map((step, idx) => {
        const isActive = step.num === currentStep;
        const isComplete = step.num < currentStep;

        const dotClass = isActive
          ? "fp-dot fp-dot--active"
          : isComplete
          ? "fp-dot fp-dot--done"
          : "fp-dot";

        const labelClass =
          isActive || isComplete
            ? "fp-dot-label fp-dot-label--active"
            : "fp-dot-label";

        return (
          <div key={step.num} className="fp-step-item">
            <div className="fp-step-col">
              <div className={dotClass}>
                {isComplete ? "✓" : step.num}
              </div>

              <span className={labelClass}>{step.label}</span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={`fp-connector ${
                  isComplete ? "fp-connector--done" : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="fp-left">
      <div className="fp-left-logo">
        <div className="fp-left-logo-box">✦</div>
        <span className="fp-left-logo-name">BlogCreft</span>
      </div>

      <div className="fp-left-bottom">
        <h2 className="fp-left-heading">
          Reset your password in 3 simple steps.
        </h2>

        <div className="fp-features">
          {[
            "Enter your email address",
            "Verify with a 6-digit OTP",
            "Set your new password",
          ].map((text) => (
            <div className="fp-feature" key={text}>
              <div className="fp-feature-dot">•</div>
              <span className="fp-feature-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STEP 1
========================================================= */

function Step1({ onNext }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");

    if (!email.trim()) {
      return setError("Email is required.");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return setError("Please enter a valid email address.");
    }

    setLoading(true);

    try {
      await sendOTP(email);

      onNext(email);
    } catch {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fp-form-step">
      <p className="fp-subtitle">
        Enter the email linked to your account 📧
      </p>

      <div className="fp-field">
        <label className="fp-label">Email Address</label>

        <div className="fp-input-wrap">
          <input
            type="email"
            className={`fp-input ${error ? "fp-input--error" : ""}`}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        {error ? (
          <p className="fp-field-error">{error}</p>
        ) : (
          <p className="fp-field-hint">
            We'll send a 6-digit verification code to this address.
          </p>
        )}
      </div>

      <button
        className="fp-submit-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <span className="fp-btn-spinner" /> : "Send Reset Code →"}
      </button>

      <button
        className="fp-submit-btn"
        style={{ marginTop: 12 }}
        onClick={() => navigate("/welcome")}
      >
        ← Go to Sign In
      </button>
    </div>
  );
}

/* =========================================================
   STEP 2
========================================================= */

function Step2({ email, onNext, onBack }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;

    const next = [...otp];
    next[i] = val;

    setOtp(next);
    setError("");

    if (val && i < 5) {
      inputRefs.current[i + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setError("");

    const code = otp.join("");

    if (code.length < 6) {
      return setError("Please enter the complete 6-digit code.");
    }

    setLoading(true);

    try {
      const response = await verifyOTP({
        email,
        otp: code,
      });

      sessionStorage.setItem(
        "reset_token",
        response.reset_token
      );

      onNext();
    } catch {
      setError("Invalid or expired code.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResent(false);

    await sendOTP(email);

    setResent(true);
  };

  return (
    <div className="fp-form-step">
      <p className="fp-subtitle">
        We sent a code to <strong>{email}</strong>
      </p>

      <div className="fp-otp-group">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            maxLength={1}
            value={digit}
            className="fp-otp-input"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}
      </div>

      {error && <p className="fp-field-error">{error}</p>}

      <button
        className="fp-submit-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <span className="fp-btn-spinner" /> : "Verify Code →"}
      </button>

      <div className="fp-resend-row">
        <span className="fp-footer-text">
          Didn't receive it?
        </span>

        <button className="fp-link-btn" onClick={handleResend}>
          {resent ? "✓ Code resent" : "Resend code"}
        </button>
      </div>

      <p className="fp-footer-text" style={{ marginTop: 10 }}>
        <button className="fp-link-btn" onClick={onBack}>
          ← Change email
        </button>
      </p>
    </div>
  );
}

/* =========================================================
   STEP 3
========================================================= */

function Step3({ onNext, onBack }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");

    if (!password || password.length < 8) {
      return setError("Password must be at least 8 characters.");
    }

    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    setLoading(true);

    try {
      const reset_token = sessionStorage.getItem("reset_token");

      await resetPassword({
        secreat_token: reset_token,
        new_password: password,
      });

      sessionStorage.removeItem("reset_token");

      onNext();
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fp-form-step">
      <p className="fp-subtitle">
        Almost there — create your new password 🔐
      </p>

      <div className="fp-field">
        <label className="fp-label">New Password</label>

        <div className="fp-input-wrap">
          <input
            type={showPass ? "text" : "password"}
            className="fp-input"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          <button
            className="fp-eye-btn"
            type="button"
            onClick={() => setShowPass((v) => !v)}
          >
            {showPass ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      <div className="fp-field">
        <label className="fp-label">
          Confirm New Password
        </label>

        <div className="fp-input-wrap">
          <input
            type={showConf ? "text" : "password"}
            className="fp-input"
            placeholder="Repeat your new password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
              setError("");
            }}
          />

          <button
            className="fp-eye-btn"
            type="button"
            onClick={() => setShowConf((v) => !v)}
          >
            {showConf ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {error && <p className="fp-field-error">{error}</p>}
      </div>

      <button
        className="fp-submit-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <span className="fp-btn-spinner" /> : "Reset Password →"}
      </button>

      <p className="fp-footer-text" style={{ marginTop: 14 }}>
        <button className="fp-link-btn" onClick={onBack}>
          ← Back
        </button>
      </p>
    </div>
  );
}

/* =========================================================
   STEP 4
========================================================= */

function Step4() {
  const navigate = useNavigate();

  return (
    <div className="fp-form-step fp-success">
      <div className="fp-success-icon">✅</div>

      <h2 className="fp-success-title">
        Password Reset!
      </h2>

      <p className="fp-success-text">
        Your password has been updated successfully.
      </p>

      <button
        className="fp-submit-btn"
        onClick={() => navigate("/welcome")}
      >
        Go to Sign In →
      </button>
    </div>
  );
}


export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleStep1Done = (submittedEmail) => {
    setEmail(submittedEmail);
    setStep(2);
  };

  return (
    <div className="fp-root">
      <LeftPanel />

      <div className="fp-right">
        <div className="fp-card">
          <div className="fp-card-header">
            <div className="fp-card-logo">✦</div>

            <h1 className="fp-brand">
              Blog<span className="fp-brand-accent">Creft</span>
            </h1>
          </div>

          {step < 4 && (
            <StepIndicator currentStep={step} />
          )}

          {step === 1 && (
            <Step1 onNext={handleStep1Done} />
          )}

          {step === 2 && (
            <Step2
              email={email}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <Step3
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && <Step4 />}
        </div>
      </div>
    </div>
  );
}