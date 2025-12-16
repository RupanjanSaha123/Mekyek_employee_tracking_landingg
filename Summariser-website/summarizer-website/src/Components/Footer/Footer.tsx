import { FaHeart, FaStar, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainFooter}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <FaStar className={styles.logoIcon} />
              <span className={styles.logoText}>Summify<span className={styles.logoAccent}>AI</span></span>
            </div>
            <p className={styles.tagline}>
              Transform your reading experience with AI-powered summarization.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and tips</p>
          </div>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterBtn}>
              Subscribe
              <FaStar/>
            </button>
          </div>
        </div>

        <div className={styles.bottomFooter}>
          <div className={styles.copyright}>
            © {currentYear} SummifyAI. All rights reserved.
            <span className={styles.madeWith}>
              Made with <FaHeart className={styles.heart} /> 
            </span>
          </div>
          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer