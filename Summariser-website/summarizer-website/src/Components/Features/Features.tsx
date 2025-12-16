import { FaCheckCircle, FaBolt, FaLock, FaGlobe, FaBrain, FaChartLine } from 'react-icons/fa'
import styles from './Features.module.css'

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast Processing',
      description: 'Summarize any webpage in under 3 seconds with our optimized AI algorithms.',
      stats: '2.4s avg. processing time'
    },
    {
      icon: '🎯',
      title: 'Intelligent Extraction',
      description: 'AI identifies and extracts key points, main arguments, and conclusions automatically.',
      stats: '95% accuracy rate'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data is encrypted end-to-end and never stored on our servers.',
      stats: 'Zero data retention'
    },
    {
      icon: '🌍',
      title: 'Multi-language Support',
      description: 'Process content in 50+ languages with native context understanding.',
      stats: '50+ languages'
    },
    {
      icon: '📊',
      title: 'Customizable Output',
      description: 'Adjust summary length, tone, and format to match your needs.',
      stats: '5 summary modes'
    },
    {
      icon: '⚡',
      title: 'Batch Processing',
      description: 'Summarize multiple articles simultaneously for research projects.',
      stats: '10x faster research'
    }
  ]

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaBolt />
            <span>Why Choose Our Summarizer</span>
          </div>
          <h2>Advanced Features for <span className="text-gradient">Modern Professionals</span></h2>
          <p>Powerful tools designed to enhance your reading and research workflow</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
              </div>
              <p className={styles.description}>{feature.description}</p>
              <div className={styles.stats}>
                <FaChartLine className={styles.statsIcon} />
                <span>{feature.stats}</span>
              </div>
              <div className={styles.highlight}></div>
            </div>
          ))}
        </div>

        <div className={styles.comparison}>
          <div className={styles.comparisonCard}>
            <h3>Traditional Reading vs AI Summarization</h3>
            <div className={styles.comparisonGrid}>
              <div className={styles.column}>
                <h4>Without Summarizer</h4>
                <ul>
                  <li><span>⏱️</span> Hours spent reading</li>
                  <li><span>🧠</span> Information overload</li>
                  <li><span>📝</span> Manual note-taking</li>
                  <li><span>😴</span> Missed key points</li>
                </ul>
              </div>
              <div className={styles.divider}>
                <div className={styles.vs}>VS</div>
              </div>
              <div className={`${styles.column} ${styles.efficient}`}>
                <h4>With Summarizer</h4>
                <ul>
                  <li><span>⚡</span> Seconds to understand</li>
                  <li><span>🎯</span> Focused insights</li>
                  <li><span>📊</span> Automatic extraction</li>
                  <li><span>✅</span> 95% key points captured</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features