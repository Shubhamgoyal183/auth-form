import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    aadhaar: '',
    pan: '',
    phone: '',
    address: ''
  });

  // Dark mode setup
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login data:' : 'Register data:', formData);
  };

  return (
    <div className={`${styles.pageContainer} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.authContainer}>
        <div className={`${styles.authBox} ${darkMode ? styles.dark : ''}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={styles.darkModeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <SunIcon className={styles.icon} /> : <MoonIcon className={styles.icon} />}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.inputGroup}
                  >
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={styles.inputGroup}
                  >
                    <label htmlFor="aadhaar" className={styles.label}>Aadhaar Number</label>
                    <input
                      type="text"
                      id="aadhaar"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleChange}
                      className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                      pattern="[0-9]{12}"
                      title="12-digit Aadhaar number"
                      required={!isLogin}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={styles.inputGroup}
                  >
                    <label htmlFor="pan" className={styles.label}>PAN Number</label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      title="10-character PAN (e.g., ABCDE1234F)"
                      required={!isLogin}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className={styles.inputGroup}
                  >
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                      pattern="[0-9]{10}"
                      title="10-digit phone number"
                      required={!isLogin}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className={styles.inputGroup}
                  >
                    <label htmlFor="address" className={styles.label}>Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                      rows="3"
                      required={!isLogin}
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${styles.input} ${darkMode ? styles.dark : ''}`}
                required
                minLength={6}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${styles.submitButton} ${darkMode ? styles.dark : ''}`}
            >
              {isLogin ? 'Login' : 'Register'}
            </motion.button>
          </form>

          <div className={styles.toggleAuthWrapper}>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`${styles.toggleAuth} ${darkMode ? styles.dark : ''}`}
            >
              {isLogin ? (
                <>
                  Don't have an account? Register
                  <ArrowRightIcon className={styles.icon} />
                </>
              ) : (
                <>
                  <ArrowLeftIcon className={styles.icon} />
                  Back to Login
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <footer className={`${styles.footer} ${darkMode ? styles.dark : ''}`}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com/shubhamgoyal183" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className={styles.socialIcon} />
          </a>
          <a href="https://twitter.com/shubham2goyal16" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com/shubham.goyal16" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com/in/shubham-goyal0224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a href="https://github.com/Shubhamgoyal183" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={styles.socialIcon} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Made with ❤️ By : 
          <a href="https://linkedin.com/in/shubham-goyal0224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span>  Shubham Goyal</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AuthForm;