import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Research Lead at TechCorp',
      avatar: '👨‍💻',
      content: 'This tool has revolutionized how our team consumes information. We\'ve cut research time by 70% while improving comprehension.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Content Strategist',
      avatar: '👩‍💼',
      content: 'As a content creator, I process dozens of articles daily. This summarizer helps me extract key insights in seconds, not hours.',
      rating: 5,
      company: 'MediaFlow'
    },
    {
      id: 3,
      name: 'Dr. Michael Torres',
      role: 'Academic Researcher',
      avatar: '👨‍🔬',
      content: 'The accuracy of key point extraction is remarkable. It\'s become an essential tool for literature reviews and paper analysis.',
      rating: 4,
      company: 'Stanford University'
    },
    {
      id: 4,
      name: 'Lisa Wang',
      role: 'Product Manager',
      avatar: '👩‍💻',
      content: 'Game-changer for market research. We can now analyze competitor content 10x faster with better insights.',
      rating: 5,
      company: 'GrowthLabs'
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Legal Consultant',
      avatar: '👨‍⚖️',
      content: 'Perfect for quickly understanding complex legal documents and case studies. Saves hours of reading time daily.',
      rating: 5,
      company: 'LegalEdge'
    },
    {
      id: 6,
      name: 'Maria Rodriguez',
      role: 'Student',
      avatar: '👩‍🎓',
      content: 'As a graduate student, this helps me process dozens of papers weekly. The multi-language support is fantastic.',
      rating: 4,
      company: 'MIT'
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaStar />
            <span>Trusted by Professionals</span>
          </div>
          <h2>What Our <span className="text-gradient">Users Say</span></h2>
          <p>Join thousands of professionals who transformed their workflow</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={styles.testimonialCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FaQuoteLeft className={styles.quoteIcon} />
              <div className={styles.content}>{testimonial.content}</div>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${styles.star} ${i < testimonial.rating ? styles.filled : ''}`}
                  />
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                  <div className={styles.company}>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
              >
                <div className={styles.carouselContent}>
                  <FaQuoteLeft className={styles.carouselQuote} />
                  <p>{testimonial.content}</p>
                  <div className={styles.carouselAuthor}>
                    <div className={styles.carouselAvatar}>{testimonial.avatar}</div>
                    <div>
                      <div className={styles.carouselName}>{testimonial.name}</div>
                      <div className={styles.carouselRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.carouselControls}>
            <button onClick={prevTestimonial} className={styles.carouselBtn}>←</button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className={styles.carouselBtn}>→</button>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.9/5</div>
            <div className={styles.statLabel}>Average Rating</div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.statStar} />
              ))}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Would Recommend</div>
            <div className={styles.recommend}>👍</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50K+</div>
            <div className={styles.statLabel}>Active Users</div>
            <div className={styles.users}>👥</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials