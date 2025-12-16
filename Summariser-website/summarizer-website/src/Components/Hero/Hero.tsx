import { FaStar, FaBolt, FaArrowRight } from 'react-icons/fa'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaStar className={styles.sparkleIcon} />
            <span>AI-Powered Summarization</span>
          </div>
          
          <h1 className={styles.title}>
            Transform Lengthy Web Content
            <span className="text-gradient"> Into Clear Insights</span>
          </h1>
          
          <p className={styles.subtitle}>
            Summarize any webpage in seconds with our advanced AI. Save time, boost productivity, 
            and understand complex content instantly.
          </p>
          
          <div className={styles.ctaContainer}>
            <button className="btn btn-primary">
              Start Summarizing Free
              <FaArrowRight />
            </button>
            <button className="btn btn-secondary">
              <FaBolt />
              Watch Demo
            </button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10M+</div>
              <div className={styles.statLabel}>Pages Summarized</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>99.8%</div>
              <div className={styles.statLabel}>Accuracy Rate</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3s</div>
              <div className={styles.statLabel}>Average Processing</div>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🌐</div>
                <div>
                  <h4>Article Summary</h4>
                  <p>https://example.com/long-article</p>
                </div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.summaryText}>
                  The article discusses the impact of artificial intelligence on modern businesses, 
                  highlighting key trends and practical applications...
                </p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.badgeSuccess}>✓ 95% Accurate</span>
                <span className={styles.time}>⏱️ 2.4s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero