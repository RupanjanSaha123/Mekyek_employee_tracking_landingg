import { useState } from 'react'
import { FaGlobe, FaClock, FaChartBar, FaMagic, FaCopy, FaDownload } from 'react-icons/fa'
import styles from './Summarizer.module.css'

const Summarizer = () => {
  const [url, setUrl] = useState('')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [length, setLength] = useState('medium')

  const handleSummarize = async () => {
    if (!url.trim()) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setSummary(`This article discusses the revolutionary impact of artificial intelligence on modern business practices. Key findings indicate that AI-powered automation can increase productivity by up to 40% while reducing operational costs significantly. The implementation of machine learning algorithms in data analysis has enabled companies to make more informed decisions, leading to improved customer satisfaction and revenue growth.

Notable applications include natural language processing for customer service automation, predictive analytics for market trends, and computer vision for quality control. The article emphasizes the importance of ethical AI implementation and the need for continuous learning and adaptation in this rapidly evolving field.

Companies that have successfully integrated AI report an average ROI of 300% within the first year, with the most significant improvements seen in operational efficiency and customer engagement.`)
      setLoading(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(summary)
  }

  const handleDownload = () => {
    const blob = new Blob([summary], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'summary.txt'
    a.click()
  }

  return (
    <section className={styles.summarizer}>
      <div className="container">
        <div className={styles.header}>
          <h2>Instant Webpage Summarizer</h2>
          <p>Paste any URL and get a concise summary in seconds</p>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.urlInput}>
            <FaGlobe className={styles.inputIcon} />
            <input
              type="url"
              placeholder="https://example.com/article"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={styles.urlField}
            />
            <button 
              onClick={handleSummarize} 
              className={`btn btn-primary ${styles.summarizeBtn}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className={styles.spinner}></span>
                  Processing...
                </>
              ) : (
                <>
                  <FaMagic />
                  Summarize Now
                </>
              )}
            </button>
          </div>

          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <label>
                <FaClock />
                Summary Length
              </label>
              <div className={styles.lengthOptions}>
                {['short', 'medium', 'detailed'].map((option) => (
                  <button
                    key={option}
                    className={`${styles.lengthBtn} ${length === option ? styles.active : ''}`}
                    onClick={() => setLength(option)}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.optionGroup}>
              <label>
                <FaChartBar />
                Key Points
              </label>
              <select className={styles.select}>
                <option>Include All Key Points</option>
                <option>Main Points Only</option>
                <option>Bullet Points Format</option>
              </select>
            </div>
          </div>
        </div>

        {summary && (
          <div className={styles.resultSection}>
            <div className={styles.resultHeader}>
              <h3>Generated Summary</h3>
              <div className={styles.resultActions}>
                <button onClick={handleCopy} className={styles.actionBtn}>
                  <FaCopy />
                  Copy
                </button>
                <button onClick={handleDownload} className={styles.actionBtn}>
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
            <div className={styles.resultContent}>
              <div className={styles.summaryBox}>
                <p>{summary}</p>
              </div>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>95%</div>
                  <div className={styles.metricLabel}>Accuracy</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>2.4s</div>
                  <div className={styles.metricLabel}>Processing Time</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>87%</div>
                  <div className={styles.metricLabel}>Content Reduced</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔒</div>
            <h4>Secure Processing</h4>
            <p>Your data is encrypted and never stored</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌍</div>
            <h4>Multi-language</h4>
            <p>Supports 50+ languages for global use</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4>Lightning Fast</h4>
            <p>Average processing time under 3 seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summarizer