import { useState } from 'react'
import { FaChevronDown, FaQuestionCircle, FaEnvelope } from 'react-icons/fa'
import styles from './FAQ.module.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How accurate are the summaries?',
      answer: 'Our AI achieves 95.2% accuracy in extracting key points and main ideas. The system uses advanced natural language processing to understand context, identify important information, and generate coherent summaries while maintaining the original meaning.',
      icon: '🎯'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use end-to-end encryption and never store your processed content. All summaries are generated in real-time and immediately discarded after delivery. We comply with GDPR, CCPA, and other major privacy regulations.',
      icon: '🔒'
    },
    {
      question: 'What types of content can be summarized?',
      answer: 'Our system works with articles, research papers, blog posts, news stories, documentation, and most text-based web content. It supports PDFs, web pages, and plain text. Currently, we focus on text content up to 50,000 words.',
      icon: '📄'
    },
    {
      question: 'How fast is the summarization process?',
      answer: 'Average processing time is 2.4 seconds for standard articles. The speed depends on content length and complexity, but most summaries are ready in under 5 seconds. We use distributed processing to ensure fast results even during peak hours.',
      icon: '⚡'
    },
    {
      question: 'Can I customize the summary length?',
      answer: 'Yes, you can choose from five different summary modes: brief (1-2 sentences), short (paragraph), medium (detailed overview), comprehensive (full analysis), and bullet points. Each mode adjusts the level of detail accordingly.',
      icon: '📏'
    },
    {
      question: 'Do you support multiple languages?',
      answer: 'We support 50+ languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, and Russian. The system detects the language automatically and provides accurate summaries while maintaining cultural context.',
      icon: '🌍'
    },
    {
      question: 'Is there a limit to usage?',
      answer: 'Free tier includes 10 summaries per month. Pro plans start at 500 summaries/month with additional features like batch processing, API access, and priority support. Enterprise plans offer unlimited usage and custom integrations.',
      icon: '📊'
    },
    {
      question: 'How does the pricing work?',
      answer: 'We offer transparent, usage-based pricing. Free forever plan for light users. Pro plans start at $19/month with volume discounts available. Enterprise plans include custom features, dedicated support, and SLA guarantees.',
      icon: '💰'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaQuestionCircle />
            <span>Frequently Asked Questions</span>
          </div>
          <h2>Everything You Need to <span className="text-gradient">Know</span></h2>
          <p>Quick answers to common questions about our service</p>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqHeader}>
                <div className={styles.faqIcon}>{faq.icon}</div>
                <h3>{faq.question}</h3>
                <FaChevronDown className={`${styles.chevron} ${activeIndex === index ? styles.rotate : ''}`} />
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <div className={styles.contactCard}>
            <div className={styles.contactHeader}>
              <FaEnvelope className={styles.contactIcon} />
              <h3>Still have questions?</h3>
              <p>Our team is here to help you get the most out of our platform</p>
            </div>
            <div className={styles.contactOptions}>
              <div className={styles.option}>
                <div className={styles.optionIcon}>💬</div>
                <div className={styles.optionContent}>
                  <h4>Live Chat Support</h4>
                  <p>Get instant answers from our support team</p>
                  <button className={styles.optionBtn}>Start Chat</button>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.optionIcon}>📧</div>
                <div className={styles.optionContent}>
                  <h4>Email Support</h4>
                  <p>We respond within 2 hours during business days</p>
                  <button className={styles.optionBtn}>Send Email</button>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.optionIcon}>📚</div>
                <div className={styles.optionContent}>
                  <h4>Documentation</h4>
                  <p>Detailed guides and API documentation</p>
                  <button className={styles.optionBtn}>View Docs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ