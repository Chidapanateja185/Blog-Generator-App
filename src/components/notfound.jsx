import '../css/notfound.css';

export default function NotFound() {
  return (
    <div className="notfound-root">
      {/* Background blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-number">404</div>
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-subtitle">Oops! The page you're looking for doesn't exist.</p>
          <p className="notfound-description">The requested URL was not found on this server.</p>
          
          <div className="notfound-buttons">
            <a href="/" className="notfound-btn home-btn">Go Home</a>
            <a href="/" className="notfound-btn contact-btn">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
