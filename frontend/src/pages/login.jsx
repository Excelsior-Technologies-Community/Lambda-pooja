import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./login.css";

const logoUrl =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/core_admin/logo/0x200/1758302184/logo-site-01.png";

const backgroundImages = [
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/login_bg_img_1/1758302184/login-01.jpg",
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/login_bg_img_2/1758302184/login-02.jpg",
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/login_bg_img_3/1758302184/login-03.jpg",
];

function Login() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(false);
  const [showLostPassword, setShowLostPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [lostPasswordMessage, setLostPasswordMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [lostPasswordForm, setLostPasswordForm] = useState({
    searchType: "username",
    value: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLostPasswordSubmit = async (e) => {
    e.preventDefault();
    setLostPasswordMessage("");

    try {
      const endpoint = "http://localhost:5000/api/auth/forgot-password";
      const payload = {
        [lostPasswordForm.searchType]: lostPasswordForm.value,
      };

      const res = await axios.post(endpoint, payload);
      setLostPasswordMessage(res.data.message || "If an account exists, a reset link has been sent to your email.");
      
      setTimeout(() => {
        setShowLostPassword(false);
        setLostPasswordForm({ searchType: "username", value: "" });
        setLostPasswordMessage("");
      }, 3000);
    } catch (err) {
      setLostPasswordMessage(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const endpoint = isRegistering
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const payload = isRegistering
        ? form
        : {
            username: form.username,
            password: form.password,
          };

      const res = await axios.post(endpoint, payload);

      if (!isRegistering) {
        localStorage.setItem("lambdaUser", JSON.stringify(res.data.user));
        navigate("/");
        return;
      }

      setMessage(res.data.message);
      setForm({
        username: "",
        email: "",
        password: "",
      });

      if (isRegistering) {
        setIsRegistering(false);
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-panel" aria-label="Lambda login">
        <div className="login-panel-inner">
          {!showLostPassword && <img src={logoUrl} alt="Lambda Theme for Moodle" className="login-logo" />}

          {!showLostPassword ? (
            <>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-field">
              <FaUser aria-hidden="true" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </label>

            {isRegistering && (
              <label className="login-field">
                <FaEnvelope aria-hidden="true" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            )}

            <label className="login-field">
              <FaLock aria-hidden="true" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                minLength={isRegistering ? 6 : undefined}
                required
              />
            </label>

            <button className="primary-login-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Please wait"
                : isRegistering
                  ? "Create account"
                  : "Log in"}
            </button>
          </form>

          <button className="lost-password" type="button" onClick={() => setShowLostPassword(true)}>
            Lost password?
          </button>

          {message && <p className="login-message">{message}</p>}

          <div className="first-time">
            <h2>Is this your first time here?</h2>

            <p>
              For full access to courses you'll need to take a minute to create
              a new account for yourself on this web site. Please make sure that
              you have a valid email address, as you will be asked for this
              during registration.
            </p>

            <button
              className="create-account-btn"
              type="button"
              onClick={() => {
                setIsRegistering((prev) => !prev);
                setMessage("");
              }}
            >
              {isRegistering ? "Back to log in" : "Create new account"}
            </button>
          </div>

          <div className="guest-note">
            <strong>Note:</strong> Only guest access is available for this demo site.
          </div>

          <button
            className="cookies-notice"
            type="button"
            onClick={() => setShowCookieNotice(true)}
          >
            Cookies notice
          </button>
            </>
          ) : (
            <div className="lost-password-panel">
              <p>
                To reset your password, submit your username or your email
                address below. If we can find you in the database, an email will
                be sent to your email address, with instructions how to get
                access again.
              </p>

              <form onSubmit={handleLostPasswordSubmit}>
                <div className="lost-password-section">
                  <h3>Search by username</h3>
                  <label>
                    <span>Username</span>
                    <input
                      type="text"
                      placeholder="Enter your username"  
                      value={lostPasswordForm.searchType === "username" ? lostPasswordForm.value : ""}
                      onChange={(e) => {
                        setLostPasswordForm({ searchType: "username", value: e.target.value });
                      }}
                    />
                  </label>
                  <button
                    type="submit"
                    className="lost-password-search-btn"
                    onClick={() => setLostPasswordForm({ ...lostPasswordForm, searchType: "username" })}
                  >
                    Search
                  </button>
                </div>

                <hr className="lost-password-divider" />

                <div className="lost-password-section">
                  <h3>Search by email address</h3>
                  <label>
                    <span>Email address</span>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={lostPasswordForm.searchType === "email" ? lostPasswordForm.value : ""}
                      onChange={(e) => {
                        setLostPasswordForm({ searchType: "email", value: e.target.value });
                      }}
                    />
                  </label>
                  <button
                    type="submit"
                    className="lost-password-search-btn"
                    onClick={() => setLostPasswordForm({ ...lostPasswordForm, searchType: "email" })}
                  >
                    Search
                  </button>
                </div>
              </form>

              {lostPasswordMessage && (
                <p className="lost-password-message">{lostPasswordMessage}</p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="login-image-slider" aria-label="Campus photos">
        {backgroundImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </section>

      {showCookieNotice && (
        <div className="cookie-modal-backdrop" role="dialog" aria-modal="true">
          <div className="cookie-modal">
            <button
              className="cookie-modal-close"
              type="button"
              aria-label="Close cookies notice"
              onClick={() => setShowCookieNotice(false)}
            >
              x
            </button>

            <h2>Cookies must be enabled in your browser</h2>

            <div className="cookie-modal-body">
              <p>Two cookies are used on this site:</p>

              <p>
                The essential one is the session cookie, usually called
                MoodleSession. You must allow this cookie in your browser to
                provide continuity and to remain logged in when browsing the
                site. When you log out or close the browser, this cookie is
                destroyed (in your browser and on the server).
              </p>

              <p>
                The other cookie is purely for convenience, usually called
                MOODLEID or similar. It just remembers your username in the
                browser. This means that when you return to this site, the
                username field on the login page is already filled in for you.
                It is safe to refuse this cookie - you will just have to retype
                your username each time you log in.
              </p>
            </div>

            <div className="cookie-modal-footer">
              <button type="button" onClick={() => setShowCookieNotice(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Login;
