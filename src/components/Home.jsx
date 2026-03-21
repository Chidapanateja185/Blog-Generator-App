import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

/* ─── Blog Illustrations (SVG) ───────────────────────────────── */
const BlogIllustrations = [
  <svg key="1" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#D1CDC7"/>
    <polygon points="0,180 200,60 400,180" fill="#EFEFEF"/>
    <circle cx="140" cy="90" r="50" fill="#555" opacity="0.4"/>
    <circle cx="260" cy="100" r="40" fill="#555" opacity="0.3"/>
    {[110,130,155,175,120,160,195,80,90,200].map((x,i) => (
      <circle key={i} cx={x} cy={[100,85,110,95,120,75,90,105,130,80][i]} r="8" fill="#E8607A" opacity="0.85"/>
    ))}
    <line x1="140" y1="140" x2="100" y2="200" stroke="#555" strokeWidth="5"/>
    <line x1="140" y1="140" x2="170" y2="195" stroke="#555" strokeWidth="4"/>
  </svg>,

  <svg key="2" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#C8C4BF"/>
    <polygon points="0,180 200,60 400,180" fill="#EFEFEF"/>
    {[120,150,180,210,240].map((x,i) => (
      <g key={i}>
        <rect x={x} y={20} width="18" height="200" rx="4" fill="#5A9A4A" opacity="0.85"/>
        {[40,80,120,160].map((y,j) => (
          <ellipse key={j} cx={x+9+(i%2===0?30:-30)} cy={y} rx="28" ry="10" fill="#4A8A3A" opacity="0.7"
            transform={`rotate(${i%2===0?20:-20} ${x+9+(i%2===0?30:-30)} ${y})`}/>
        ))}
      </g>
    ))}
  </svg>,

  <svg key="3" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#C8C4BF"/>
    <polygon points="0,180 200,60 400,180" fill="#EFEFEF"/>
    <rect x="155" y="60" width="90" height="12" rx="2" fill="#D4B800"/>
    <rect x="145" y="72" width="110" height="8" rx="2" fill="#D4B800"/>
    <rect x="170" y="80" width="12" height="120" rx="3" fill="#CCA800"/>
    <rect x="218" y="80" width="12" height="120" rx="3" fill="#CCA800"/>
    <rect x="162" y="105" width="76" height="6" rx="2" fill="#BBA000"/>
    {[[60,50],[340,55],[200,30],[100,80],[310,75]].map(([cx,cy],i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="12" ry="5" fill="#fff" opacity="0.85"/>
    ))}
  </svg>,

  <svg key="4" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#B8B4B0"/>
    <polygon points="0,180 200,70 400,180" fill="#DDDBD8"/>
    <circle cx="200" cy="90" r="70" fill="#555" opacity="0.35"/>
    {[160,185,210,175,230,155,200,220,145,240].map((x,i) => (
      <g key={i}>
        <circle cx={x} cy={[80,65,90,100,75,110,55,115,85,95][i]} r="9" fill="#D4506A" opacity="0.8"/>
        <circle cx={x+4} cy={[80,65,90,100,75,110,55,115,85,95][i]-4} r="5" fill="#E8607A" opacity="0.6"/>
      </g>
    ))}
    <path d="M200 120 Q210 150 190 180 Q205 160 215 190" stroke="#666" strokeWidth="5" fill="none"/>
    <path d="M200 120 Q180 145 175 180" stroke="#666" strokeWidth="4" fill="none"/>
  </svg>,
];

/* ─── Data ───────────────────────────────────────────────────── */
const POSTS = [
  { id: 1, title: "Post 1 Headline", excerpt: "Sample small text. Lorem ipsum dolor sit amet.", date: "Sat Mar 21 2026" },
  { id: 2, title: "Post 2 Headline", excerpt: "Sample small text. Lorem ipsum dolor sit amet.", date: "Sat Mar 21 2026" },
  { id: 3, title: "Post 3 Headline", excerpt: "Sample small text. Lorem ipsum dolor sit amet.", date: "Sat Mar 21 2026" },
  { id: 4, title: "Post 4 Headline", excerpt: "Sample small text. Lorem ipsum dolor sit amet.", date: "Sat Mar 21 2026" },
];

const TOPICS = ["Technology", "Health & Wellness", "Finance", "Travel", "Food", "Science", "Lifestyle", "Business"];

/* ─── Navbar ─────────────────────────────────────────────────── */
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="navbar__logo-text">
          Blog<span>Creft</span>
        </span>
      </div>

      <div className="navbar__links">
        {["Home Page", "About Us", "Pages", "Contact Us"].map(item => (
          <a key={item} href="#" className={item === "Home Page" ? "active" : ""}>
            {item}
            {item === "Pages" && <span className="arrow">▼</span>}
          </a>
        ))}
      </div>

      <button
        className="btn-orange"
        style={{ padding: "11px 26px", fontSize: "13px" }}
        onClick={() => navigate("/welcome")}
      >
        GET STARTED
      </button>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Blog Generation Using AI</h1>
    </section>
  );
}

/* ─── Blog Card ──────────────────────────────────────────────── */
function BlogCard({ post, illustration }) {
  return (
    <div className="blog-card">
      <div className="blog-card__image">{illustration}</div>
      <div className="blog-card__body">
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <p className="blog-card__date">{post.date}</p>
        <button className="btn-orange" style={{ fontSize: "13px", padding: "10px 22px" }}>
          Read More
        </button>
      </div>
    </div>
  );
}

/* ─── Blog Grid ──────────────────────────────────────────────── */
function BlogGrid() {
  return (
    <section className="blog-grid">
      <div className="blog-grid__inner">
        {POSTS.map((post, i) => (
          <BlogCard key={post.id} post={post} illustration={BlogIllustrations[i]} />
        ))}
      </div>
      <div className="blog-grid__footer">
        <button className="btn-orange-outline">Load More Posts</button>
      </div>
    </section>
  );
}

/* ─── Newsletter Signup ──────────────────────────────────────── */
function NewsletterSignup() {
  const [form, setForm] = useState({ name: "", email: "", topic: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.includes("@")) e.email = "Please enter a valid email.";
    if (!form.topic) e.topic = "Please select a topic.";
    return e;
  };

  const handle = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">

        {/* Left */}
        <div>
          <span className="newsletter__badge">Daily AI Blog Digest</span>
          <h2 className="newsletter__heading">Get fresh blogs on your favourite topics, every day.</h2>
          <p className="newsletter__desc">
            Pick a topic you love and our AI will generate, curate, and deliver handpicked blog posts straight to your inbox — every single day, for free.
          </p>
          {[
            "AI-generated daily summaries",
            "Personalised to your topic",
            "Unsubscribe anytime",
          ].map(text => (
            <div key={text} className="newsletter__feature">
              <span className="newsletter__feature-icon">✦</span>
              <span className="newsletter__feature-text">{text}</span>
            </div>
          ))}
        </div>

        {/* Right form */}
        <div className="newsletter__form-card">
          {submitted ? (
            <div className="newsletter__success">
              <div className="newsletter__success-icon">🎉</div>
              <h3 className="newsletter__success-title">You're subscribed!</h3>
              <p className="newsletter__success-text">
                Daily <strong style={{ color: "#E84A0C" }}>{form.topic}</strong> blogs will land in <strong>{form.email}</strong> starting tomorrow. 🚀
              </p>
            </div>
          ) : (
            <>
              <h3 className="newsletter__form-title">Subscribe for Daily Blogs</h3>
              <p className="newsletter__form-subtitle">Choose your topic and get notified every day.</p>

              <div className="newsletter__field">
                <label className="newsletter__label">Your Name</label>
                <input
                  placeholder="e.g. Vishwanath"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ borderColor: errors.name ? "#C0392B" : "#E8E8E8" }}
                />
                {errors.name && <p className="newsletter__error">{errors.name}</p>}
              </div>

              <div className="newsletter__field">
                <label className="newsletter__label">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ borderColor: errors.email ? "#C0392B" : "#E8E8E8" }}
                />
                {errors.email && <p className="newsletter__error">{errors.email}</p>}
              </div>

              <div className="newsletter__field">
                <label className="newsletter__label">Choose Your Blog Topic</label>
                <div className="newsletter__topics">
                  {TOPICS.map(t => (
                    <button
                      key={t}
                      className={`topic-pill ${form.topic === t ? "active" : ""}`}
                      onClick={() => setForm({ ...form, topic: t })}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.topic && <p className="newsletter__error">{errors.topic}</p>}
              </div>

              <button
                className="btn-orange"
                onClick={handle}
                style={{ width: "100%", borderRadius: "10px", padding: "14px", fontSize: "14px" }}
              >
                Subscribe & Get Daily Blogs
              </button>
              <p className="newsletter__no-spam">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <h3 className="footer__brand-name">BlogCraft</h3>
          <p className="footer__brand-desc">
            We offer AI-powered blog generation for creators who want to write more, stress less, and reach readers who matter.
          </p>
          <div className="footer__socials">
            {["f", "𝕏", "in"].map(label => (
              <div key={label} className="footer__social-btn">{label}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer__contact-title">Contact Us</h4>
          {[
            { icon: "✉", text: "support@blogcraft.ai" },
            { icon: "📞", text: "+1 (234) 567-8910" },
            { icon: "📍", text: "Chennai, Tamil Nadu, India" },
          ].map(({ icon, text }) => (
            <p key={text} className="footer__contact-item">
              <span>{icon}</span> {text}
            </p>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        BlogCraft © 2025 All rights reserved. · Terms of use · Privacy Policy
      </div>
    </footer>
  );
}

/* ─── Root ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogGrid />
      <NewsletterSignup />
      <Footer />
    </>
  );
}