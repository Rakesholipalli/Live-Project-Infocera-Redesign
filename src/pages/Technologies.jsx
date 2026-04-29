import './Technologies.css'

function Technologies() {
  return (
    <div className="tech-content">
      <div className="tech-header">
        <h1>Our Technology Stack</h1>
        <p>We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions for your business</p>
      </div>
      
      <div className="tech-container">
        {/* Frontend Technologies */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">Frontend Development</h2>
            <p className="tech-category-desc">Modern UI frameworks and libraries for building responsive, interactive user interfaces</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">⚛️</div>
              <h3 className="tech-name">React</h3>
              <p className="tech-desc">Build dynamic, component-based user interfaces with React's powerful ecosystem</p>
              <div className="tech-tags">
                <span className="tech-tag">SPA</span>
                <span className="tech-tag">Components</span>
                <span className="tech-tag">Hooks</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🅰️</div>
              <h3 className="tech-name">Angular</h3>
              <p className="tech-desc">Enterprise-grade framework for building scalable web applications</p>
              <div className="tech-tags">
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">MVC</span>
                <span className="tech-tag">Enterprise</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🎨</div>
              <h3 className="tech-name">HTML5 & CSS3</h3>
              <p className="tech-desc">Modern web standards for semantic markup and stunning visual designs</p>
              <div className="tech-tags">
                <span className="tech-tag">Responsive</span>
                <span className="tech-tag">Semantic</span>
                <span className="tech-tag">Animations</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">💎</div>
              <h3 className="tech-name">jQuery</h3>
              <p className="tech-desc">Fast, feature-rich JavaScript library for DOM manipulation</p>
              <div className="tech-tags">
                <span className="tech-tag">DOM</span>
                <span className="tech-tag">AJAX</span>
                <span className="tech-tag">Plugins</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Backend Technologies */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">Backend Development</h2>
            <p className="tech-category-desc">Powerful server-side technologies for building robust APIs and business logic</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🟢</div>
              <h3 className="tech-name">Node.js</h3>
              <p className="tech-desc">JavaScript runtime for building fast, scalable server-side applications</p>
              <div className="tech-tags">
                <span className="tech-tag">Express</span>
                <span className="tech-tag">REST API</span>
                <span className="tech-tag">Real-time</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🐍</div>
              <h3 className="tech-name">Python</h3>
              <p className="tech-desc">Versatile language for web development, AI/ML, and data processing</p>
              <div className="tech-tags">
                <span className="tech-tag">Django</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">FastAPI</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🐘</div>
              <h3 className="tech-name">PHP</h3>
              <p className="tech-desc">Server-side scripting language for dynamic web applications</p>
              <div className="tech-tags">
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">CMS</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">☕</div>
              <h3 className="tech-name">Java</h3>
              <p className="tech-desc">Enterprise-grade platform for building large-scale applications</p>
              <div className="tech-tags">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Hibernate</span>
                <span className="tech-tag">Microservices</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Database Technologies */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">Database & Storage</h2>
            <p className="tech-category-desc">Reliable data storage solutions for structured and unstructured data</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🍃</div>
              <h3 className="tech-name">MongoDB</h3>
              <p className="tech-desc">NoSQL database for flexible, scalable document storage</p>
              <div className="tech-tags">
                <span className="tech-tag">NoSQL</span>
                <span className="tech-tag">JSON</span>
                <span className="tech-tag">Scalable</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🗄️</div>
              <h3 className="tech-name">SQL Server</h3>
              <p className="tech-desc">Microsoft's relational database management system</p>
              <div className="tech-tags">
                <span className="tech-tag">RDBMS</span>
                <span className="tech-tag">T-SQL</span>
                <span className="tech-tag">Enterprise</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🔴</div>
              <h3 className="tech-name">Redis</h3>
              <p className="tech-desc">In-memory data structure store for caching and real-time applications</p>
              <div className="tech-tags">
                <span className="tech-tag">Cache</span>
                <span className="tech-tag">Fast</span>
                <span className="tech-tag">Key-Value</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🐬</div>
              <h3 className="tech-name">MySQL</h3>
              <p className="tech-desc">Popular open-source relational database system</p>
              <div className="tech-tags">
                <span className="tech-tag">RDBMS</span>
                <span className="tech-tag">Open Source</span>
                <span className="tech-tag">Reliable</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cloud & DevOps */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">Cloud & DevOps</h2>
            <p className="tech-category-desc">Modern cloud platforms and deployment tools for scalable infrastructure</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">☁️</div>
              <h3 className="tech-name">AWS</h3>
              <p className="tech-desc">Amazon Web Services for comprehensive cloud computing solutions</p>
              <div className="tech-tags">
                <span className="tech-tag">EC2</span>
                <span className="tech-tag">S3</span>
                <span className="tech-tag">Lambda</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🔵</div>
              <h3 className="tech-name">Google Cloud</h3>
              <p className="tech-desc">Google's cloud platform for scalable applications and AI services</p>
              <div className="tech-tags">
                <span className="tech-tag">GCP</span>
                <span className="tech-tag">BigQuery</span>
                <span className="tech-tag">AI/ML</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🐳</div>
              <h3 className="tech-name">Docker</h3>
              <p className="tech-desc">Containerization platform for consistent deployment environments</p>
              <div className="tech-tags">
                <span className="tech-tag">Containers</span>
                <span className="tech-tag">Microservices</span>
                <span className="tech-tag">DevOps</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">☸️</div>
              <h3 className="tech-name">Kubernetes</h3>
              <p className="tech-desc">Container orchestration for automated deployment and scaling</p>
              <div className="tech-tags">
                <span className="tech-tag">Orchestration</span>
                <span className="tech-tag">Scaling</span>
                <span className="tech-tag">K8s</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CMS & Frameworks */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">CMS & Frameworks</h2>
            <p className="tech-category-desc">Content management systems and frameworks for rapid development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">📝</div>
              <h3 className="tech-name">WordPress</h3>
              <p className="tech-desc">World's most popular CMS for websites and blogs</p>
              <div className="tech-tags">
                <span className="tech-tag">CMS</span>
                <span className="tech-tag">Plugins</span>
                <span className="tech-tag">Themes</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🌊</div>
              <h3 className="tech-name">Drupal</h3>
              <p className="tech-desc">Enterprise-level CMS for complex, scalable websites</p>
              <div className="tech-tags">
                <span className="tech-tag">Enterprise</span>
                <span className="tech-tag">Flexible</span>
                <span className="tech-tag">Secure</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🎯</div>
              <h3 className="tech-name">Joomla</h3>
              <p className="tech-desc">Flexible CMS for building websites and online applications</p>
              <div className="tech-tags">
                <span className="tech-tag">CMS</span>
                <span className="tech-tag">Extensions</span>
                <span className="tech-tag">Community</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">⚡</div>
              <h3 className="tech-name">Next.js</h3>
              <p className="tech-desc">React framework for production-grade applications</p>
              <div className="tech-tags">
                <span className="tech-tag">SSR</span>
                <span className="tech-tag">SSG</span>
                <span className="tech-tag">React</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Emerging Technologies */}
        <div className="tech-category">
          <div className="tech-category-header">
            <h2 className="tech-category-title">Emerging Technologies</h2>
            <p className="tech-category-desc">Cutting-edge technologies for next-generation applications</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🤖</div>
              <h3 className="tech-name">AI & Machine Learning</h3>
              <p className="tech-desc">Artificial intelligence and ML models for intelligent applications</p>
              <div className="tech-tags">
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">NLP</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🔗</div>
              <h3 className="tech-name">Blockchain</h3>
              <p className="tech-desc">Decentralized ledger technology for secure transactions</p>
              <div className="tech-tags">
                <span className="tech-tag">Ethereum</span>
                <span className="tech-tag">Smart Contracts</span>
                <span className="tech-tag">Web3</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🌐</div>
              <h3 className="tech-name">IoT Solutions</h3>
              <p className="tech-desc">Internet of Things for connected devices and smart systems</p>
              <div className="tech-tags">
                <span className="tech-tag">Sensors</span>
                <span className="tech-tag">MQTT</span>
                <span className="tech-tag">Edge Computing</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🥽</div>
              <h3 className="tech-name">AR/VR</h3>
              <p className="tech-desc">Augmented and virtual reality for immersive experiences</p>
              <div className="tech-tags">
                <span className="tech-tag">Unity</span>
                <span className="tech-tag">WebXR</span>
                <span className="tech-tag">3D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
