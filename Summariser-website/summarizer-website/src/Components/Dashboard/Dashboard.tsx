import { FaChartLine, FaUsers, FaBolt } from 'react-icons/fa'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const stats = [
    { icon: '📈', value: '10M+', label: 'Pages Summarized', change: '+42%' },
    { icon: '⏱️', value: '2.4s', label: 'Avg. Processing Time', change: '-18%' },
    { icon: '🎯', value: '95.2%', label: 'Accuracy Rate', change: '+2.1%' },
    { icon: '👥', value: '50K+', label: 'Active Users', change: '+35%' }
  ]

  const languages = [
    { name: 'English', percent: 45, color: 'var(--primary)' },
    { name: 'Spanish', percent: 18, color: 'var(--secondary)' },
    { name: 'French', percent: 12, color: 'var(--accent)' },
    { name: 'German', percent: 8, color: '#8b5cf6' },
    { name: 'Others', percent: 17, color: '#64748b' }
  ]

  return (
    <section className={styles.dashboard}>
      <div className="container">
        <div className={styles.header}>
          <h2>Real-time <span className="text-gradient">Analytics Dashboard</span></h2>
          <p>Monitor performance metrics and usage statistics in real-time</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statHeader}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.change} data-positive={stat.change.startsWith('+')}>
                  {stat.change}
                </span>
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ 
                    width: `${Math.min(100, parseInt(stat.value) * 0.8)}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Usage Trend</h3>
              <span className={styles.trend}>📈 +24% this month</span>
            </div>
            <div className={styles.chart}>
              {[65, 40, 75, 60, 85, 70, 95].map((height, i) => (
                <div key={i} className={styles.bar}>
                  <div 
                    className={styles.barFill}
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className={styles.barLabel}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Language Distribution</h3>
              <span className={styles.trend}>🌍 50+ languages</span>
            </div>
            <div className={styles.languageChart}>
              <div className={styles.pieChart}>
                <div className={styles.pieSegment} style={{ '--percent': '45%', '--color': 'var(--primary)' } as any}></div>
                <div className={styles.pieSegment} style={{ '--percent': '18%', '--color': 'var(--secondary)', '--offset': '45%' } as any}></div>
                <div className={styles.pieSegment} style={{ '--percent': '12%', '--color': 'var(--accent)', '--offset': '63%' } as any}></div>
                <div className={styles.pieSegment} style={{ '--percent': '8%', '--color': '#8b5cf6', '--offset': '75%' } as any}></div>
                <div className={styles.pieSegment} style={{ '--percent': '17%', '--color': '#64748b', '--offset': '83%' } as any}></div>
                <div className={styles.pieCenter}></div>
              </div>
              <div className={styles.legend}>
                {languages.map((lang, i) => (
                  <div key={i} className={styles.legendItem}>
                    <div className={styles.legendColor} style={{ background: lang.color }}></div>
                    <span className={styles.legendLabel}>{lang.name}</span>
                    <span className={styles.legendPercent}>{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.performance}>
          <div className={styles.performanceCard}>
            <div className={styles.performanceHeader}>
              <FaBolt className={styles.performanceIcon} />
              <h3>Performance Metrics</h3>
            </div>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricName}>Response Time</div>
                <div className={styles.metricValue}>124ms</div>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricName}>Uptime</div>
                <div className={styles.metricValue}>99.98%</div>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: '99%' }}></div>
                </div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricName}>Accuracy</div>
                <div className={styles.metricValue}>95.2%</div>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard