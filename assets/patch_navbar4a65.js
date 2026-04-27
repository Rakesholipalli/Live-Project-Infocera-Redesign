// Patch script to completely replace the buggy React navbar
// Version: RestorationFinal - 2026-03-24 08:45
// Log: --- NAVBAR RESTORED BY ANTIGRAVITY ---
// Uses ZERO Tailwind classes — everything is pure inline styles + JS media queries.

(function () {
  console.log('--- NAVBAR RESTORED BY ANTIGRAVITY ---');
  const BREAKPOINT = 768; // px — below this we show mobile layout

  // Instantly inject CSS to hide the original React navbar even before it mounts
  // Also hide #root initially with opacity:0, then fade it in after patches have applied
  const hideOldNavStyle = document.createElement('style');
  hideOldNavStyle.textContent = `
    nav.fixed.top-0 { display: none !important; opacity: 0 !important; visibility: hidden !important; }
    html, body { margin: 0; padding: 0; min-height: 100vh; transition: background-color 0.15s ease-out; }
    #root { margin: 0; padding: 0; min-height: 100vh; transition: background-color 0.15s ease-out; padding-top: 80px !important; opacity: 0; transition: opacity 0.2s ease-in; }
    
    /* --- INTERNAL PAGE QUICK FIXES --- */
    /* 1. Nuke the old React footer globally, excluding our new custom footer */
    body:not(.is-homepage) footer:not(.corp-footer), body:not(.is-homepage) .bg-slate-900 > .max-w-7xl { display: none !important; }
    
    /* 2. Dramatically improve typography and contrast on all inner paragraphs */
    body:not(.is-homepage) #root p { 
        font-size: 1.15rem !important; 
        line-height: 1.8 !important; 
        color: rgba(255,255,255,0.85) !important; 
    }
    
    /* 3. Hide the blatantly broken "0+" counters (identified by generic Tailwind large-bold text) */
    body:not(.is-homepage) #root .text-4xl.font-bold,
    body:not(.is-homepage) #root .text-5xl.font-bold { 
        display: none !important; 
    }

    /* 4. Kill the bright neon cards and force them into our dark glassmorphic brand aesthetic */
    body:not(.is-homepage) #root .bg-gradient-to-br,
    body:not(.is-homepage) #root .bg-blue-600,
    body:not(.is-homepage) #root .bg-purple-600,
    body:not(.is-homepage) #root .bg-emerald-600,
    body:not(.is-homepage) #root .bg-cyan-600 {
        background: rgba(30, 41, 59, 0.7) !important;
        backdrop-filter: blur(10px) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        color: #fff !important;
    }
    
    /* Fix weird timeline spacing by adding margin */
    body:not(.is-homepage) #root .flex.items-center.justify-center.space-x-4 > div {
        margin: 0 10px !important;
    }
    
    /* HOMEPAGE MOBILE HERO OVERRIDES - MOVED TO MEDIA QUERY */
    
    /* GLOBAL BULLETPROOF OVERLAP FIX */
    @media (max-width: 550px) {
        /* Target ANY absolutely positioned container that looks like a hero */
        body.is-homepage div.absolute.top-0.z-30, 
        body.is-homepage section div.absolute,
        body.is-homepage section .animate-fade-in-up,
        body.is-homepage section .animate-fade-in-down {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-top: 20px !important;
            height: auto !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
        }

        /* Force children to stack predictably */
        body.is-homepage section h1, 
        body.is-homepage section [class*="badge"], 
        body.is-homepage section .inline-flex {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            margin-bottom: 20px !important;
            width: auto !important;
            max-width: 90% !important;
            text-align: center !important;
        }
        
        body.is-homepage section h1 {
            font-size: 1.3rem !important;
            margin-top: 30px !important; /* Force space below badge */
            order: 2 !important;
        }
        
        body.is-homepage section .inline-flex, body.is-homepage section [class*="badge"] {
            order: 1 !important;
            scale: 0.8 !important;
        }
        
        /* CTA Buttons */
        body.is-homepage section div.flex.gap-4 {
            flex-direction: column !important;
            align-items: center !important;
            order: 3 !important;
        }
    }

    /* MOBILE HERO VERTICAL FLEX FIX */
    @media (max-width: 600px) {
        body.is-homepage section:first-of-type {
            display: flex !important;
            flex-direction: column !important;
            padding-top: 110px !important;
            padding-bottom: 30px !important;
            height: auto !important;
            justify-content: flex-start !important;
            align-items: center !important;
            gap: 15px !important;
            position: relative !important;
        }

        /* HEADING CONTAINER */
        body.is-homepage section:first-of-type div.absolute.top-0.z-30 {
            display: block !important;
            position: relative !important;
            order: -2 !important; /* ABSOLUTE TOP */
            top: auto !important;
            left: auto !important;
            width: 100% !important;
            transform: none !important;
            z-index: 100 !important;
            opacity: 1 !important;
            visibility: visible !important;
            padding: 0 15px !important;
            margin-bottom: 5px !important;
            padding-top: 0 !important;
        }
        
        body.is-homepage section:first-of-type h1 {
            font-size: 1.3rem !important;
            line-height: 1.3 !important;
            color: #fff !important;
            text-align: center !important;
            margin: 0 !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: inline-block !important;
        }

        /* CONTENT CONTAINER (BADGE, P, BUTTONS) */
        body.is-homepage section:first-of-type div.relative.max-w-7xl {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            position: relative !important;
            order: -1 !important; /* ABOVE BUTTONS, BELOW TITLE */
            top: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
            z-index: 50 !important;
            opacity: 1 !important;
            visibility: visible !important;
            padding: 0 20px !important;
            margin-top: 0 !important;
        }

        /* Our re-injected badge style */
        .infocera-stable-badge {
            display: inline-flex !important;
            order: 1 !important; /* Top within content container */
            align-items: center !important;
            gap: 8px !important;
            padding: 8px 16px !important;
            background: rgba(255,255,255,0.1) !important;
            backdrop-filter: blur(8px) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            border-radius: 99px !important;
            color: rgba(255,255,255,0.9) !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            margin-bottom: 25px !important;
            margin-top: 10px !important;
        }
        
        body.is-homepage section:first-of-type p {
            order: 2 !important; /* Below badge */
            text-align: center !important;
            margin-bottom: 25px !important;
        }

        /* CTA Buttons */
        body.is-homepage section:first-of-type div.flex.gap-4 {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            order: 3 !important; /* Below paragraph */
            gap: 12px !important;
        }
    }

    @media (min-width: 768px) {
        /* DESKTOP IS FINE - NO OVERRIDES HERE */
        body.is-homepage section:first-of-type h1 { margin-bottom: 0 !important; }
    }
    
    #mobile-menu { display: none !important; opacity: 0; pointer-events: none; transition: opacity 0.2s; }
    #mobile-menu.active { 
        display: block !important; 
        opacity: 1 !important; 
        visibility: visible !important; 
        pointer-events: auto !important;
        background: #0f172a !important;
        z-index: 1000000 !important; /* Extremely high to ensure visibility */
    }
    
    .mob-sub-link:hover, .mob-sub-link:active { color: #fff !important; }
    .mob-link:hover, .mob-link:active { background: rgba(255,255,255,0.05); }
    .mob-acc-btn:hover, .mob-acc-btn:active { background: rgba(255,255,255,0.03); }
    #mobile-menu-btn { touch-action: manipulation; }
    #mobile-menu-btn svg { pointer-events: none; }
  `;
  document.head.appendChild(hideOldNavStyle);

  // After patches have had time to apply, fade the content in
  function revealContent() {
    const rootEl = document.getElementById('root');
    if (rootEl) rootEl.style.opacity = '1';
  }
  // Use a small delay to let all patch scripts finish their DOM mutations
  setTimeout(revealContent, 400);
  document.addEventListener('DOMContentLoaded', () => setTimeout(revealContent, 500));

  const globalBgStyle = document.createElement('style');
  document.head.appendChild(globalBgStyle);

  // Eliminate white flash dynamically on all page changes without depending on document.body node
  function updateGlobalBackground() {
    // Instead of guessing which internal pages are light or dark, universally apply a dark slate
    // background (#0f172a) so that NO bright white flashes ever occur across the entire site.
    // If a specific page is meant to be white, React will seamlessly paint over it.
    globalBgStyle.textContent = 'html, body, #root { background-color: #0f172a !important; }';
  }

  // Call immediately to catch the very first render frame
  updateGlobalBackground();
  
  // Create a MutationObserver just in case React re-adds a class to #root that wipes inline styles
  // We don't really need it if we're injecting a `<style>` block with !important, but leaving the observer for safety
  const rootObserver = window.MutationObserver ? new MutationObserver(() => updateGlobalBackground()) : null;
  
  function checkPath() {
    const path = window.location.pathname;
    const isHome = path === '/' || path === '' || path.endsWith('index.html');
    if (isHome) {
      document.body.classList.add('is-homepage');
    } else {
      document.body.classList.remove('is-homepage');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    checkPath();
    updateGlobalBackground();
    const rootEl = document.getElementById('root');
    if (rootEl && rootObserver) rootObserver.observe(rootEl, { attributes: true, attributeFilter: ['class', 'style'] });
  });

  // Also catch route changes for SPA
  window.addEventListener('popstate', checkPath);
  const originalPushState = window.history.pushState;
  window.history.pushState = function() {
    originalPushState.apply(this, arguments);
    checkPath();
  };

  function initNavbarPatch() {
    const originalNav = document.querySelector('nav.fixed.top-0');
    if (originalNav && originalNav.dataset.patched !== 'true') {
      originalNav.style.setProperty('display', 'none', 'important');
      originalNav.dataset.patched = 'true';
    }

    // Only inject the custom navbar once. It survives React router unmounts because it's attached to the body.
    if (document.getElementById('custom-fixed-nav')) return;

    console.log("✅ Injecting Fixed Custom Navbar");

    // === INJECT STYLES FOR DROPDOWN LINKS ===
    const ddStyle = document.createElement('style');
    ddStyle.textContent = `
      .dd-link {
        display: block;
        padding: 6px 0;
        font-size: 13px;
        color: #cbd5e1;
        text-decoration: none;
        transition: color 0.2s;
        position: relative;
        padding-left: 14px;
      }
      .dd-link::before {
        content: '●';
        position: absolute;
        left: 0;
        color: #4f46e5;
        font-size: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
      .dd-link:hover {
        color: #fff;
      }
    `;
    document.head.appendChild(ddStyle);

    // === CREATE NAV ===
    const nav = document.createElement('nav');
    nav.id = 'custom-fixed-nav';
    // Use very high z-index so mobile menu covers everything including hero
    nav.style.cssText = 'position:fixed;top:0;left:0;width:100%;z-index:9999;transition:background 0.3s,box-shadow 0.3s,backdrop-filter 0.3s;background:transparent;color:#fff;font-family:inherit;';

    nav.innerHTML = `
      <div style="max-width:1280px;margin:0 auto;padding:0 16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;height:80px;">
          <!-- Logo -->
          <div style="flex-shrink:0;">
            <a href="/" onclick="window.location.href='/'; return false;" style="display:flex;flex-direction:column;align-items:flex-start;padding:8px 0;text-decoration:none;line-height:1;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.6));">
              <span style="font-family:'Exo','Orbitron',sans-serif;font-weight:800;font-size:28px;letter-spacing:3px;background:linear-gradient(135deg,#5b21b6,#9333ea,#4f46e5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">INFOCERA</span>
              <span style="font-family:sans-serif;font-weight:700;font-size:9px;letter-spacing:4px;color:#ffffff;margin-top:3px;text-transform:uppercase;">Seamless Connections</span>
            </a>
          </div>

          <!-- Desktop Links -->
          <div id="nav-desktop-links" style="display:none;align-items:center;gap:12px;white-space:nowrap;">
            <a href="/" onclick="window.location.href='/'; return false;" style="color:#fff;text-decoration:none;font-weight:500;padding:4px 2px;transition:color 0.2s;" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">Home</a>
            <a href="/about" style="color:#fff;text-decoration:none;font-weight:500;padding:4px 2px;transition:color 0.2s;" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">About Us</a>

            <!-- Dropdown: Services (Mega Menu) -->
            <div data-dropdown="services" style="position:relative;padding:24px 0;">
              <a href="/services" class="nav-dd-btn" style="display:flex;align-items:center;color:#fff;font-weight:500;text-decoration:none;background:none;border:none;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;transition:color 0.2s;">
                Services
                <svg class="dd-arrow" style="margin-left:4px;width:16px;height:16px;transition:transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="dd-panel" style="position:absolute;left:50%;transform:translateX(-50%) translateY(8px);top:100%;margin-top:-8px;width:750px;border-radius:12px;box-shadow:0 25px 50px rgba(0,0,0,0.5);background:rgba(15,23,42,0.97);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);opacity:0;visibility:hidden;transition:all 0.25s ease;z-index:100;pointer-events:none;padding:24px 28px;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px 40px;">
                  <!-- Col 1 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Mobile Application</div>
                    <a href="/services/mobile-apps" class="dd-link">Mobile App Development</a>
                    <a href="/services/windows-app-development" class="dd-link">Windows App Development</a>
                    <a href="/services/xamarin-app-development" class="dd-link">Xamarin App Development</a>
                    <a href="/services/hybrid-app-development" class="dd-link">Hybrid App Development</a>
                    <a href="/services/native-app-development" class="dd-link">Native App Development</a>
                  </div>
                  <!-- Col 2 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Online Marketing</div>
                    <a href="/services/seo-services" class="dd-link">SEO Services</a>
                    <a href="/services/search-engine-marketing" class="dd-link">Search Engine Marketing</a>
                    <a href="/services/social-media-marketing" class="dd-link">Social Media Marketing</a>
                    <a href="/services/pay-per-click-management" class="dd-link">Pay Per Click Management</a>
                    <a href="/services/seo-copywriting" class="dd-link">SEO Copywriting</a>
                    <a href="/services/digital-marketing" class="dd-link">Digital Marketing</a>
                    <a href="/services/brand-consulting" class="dd-link">Brand Consulting</a>
                    <a href="/services/lead-management-system" class="dd-link">Lead Management System</a>
                  </div>
                  <!-- Col 3 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Web Design & Development</div>
                    <a href="/services/ecommerce-development" class="dd-link">E-commerce Website Development</a>
                    <a href="/technologies/wordpress" class="dd-link">WordPress Development</a>
                    <a href="/technologies/php" class="dd-link">PHP Development</a>
                    <a href="/services/web-development" class="dd-link">Custom Web Development</a>
                  </div>
                  <!-- Col 4 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Creative Design</div>
                    <a href="/services/creative-design" class="dd-link">Creative Design</a>
                    <a href="/services/ui-ux-design" class="dd-link">UI/UX Design</a>
                    <a href="/services/logo-design" class="dd-link">Logo Design</a>
                    <a href="/services/brochure-design" class="dd-link">Brochure Design</a>
                  </div>
                  <!-- Col 5 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Consultant</div>
                    <a href="/services/consulting-services" class="dd-link">Consulting Services</a>
                    <a href="/services/netsuite-consultant" class="dd-link">NetSuite Solution Consultant</a>
                    <a href="/services/recruitment-service" class="dd-link">Recruitment Service</a>
                    <a href="/services/sharepoint-development" class="dd-link">SharePoint Development</a>
                    <a href="/services/software-consultant" class="dd-link">Software Consultant</a>
                  </div>
                  <!-- Col 6 -->
                  <div>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Data Science</div>
                    <a href="/services/ai-ml" class="dd-link">AI & Machine Learning</a>
                    <a href="/services/data-analytics" class="dd-link">Data Analytics</a>
                    <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:12px 0 8px;">Testing</div>
                    <a href="/services/software-testing" class="dd-link">Software Testing</a>
                    <a href="/services/security-testing" class="dd-link">Security Testing</a>
                    <a href="/services/performance-testing" class="dd-link">Performance Testing</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dropdown: Technologies (Mega Menu) -->
            <div data-dropdown="technologies" style="position:relative;padding:24px 0;">
              <a href="/technologies" class="nav-dd-btn" style="display:flex;align-items:center;color:#fff;font-weight:500;text-decoration:none;background:none;border:none;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;transition:color 0.2s;">
                Technologies
                <svg class="dd-arrow" style="margin-left:4px;width:16px;height:16px;transition:transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="dd-panel" style="position:absolute;left:50%;transform:translateX(-50%) translateY(8px);top:100%;margin-top:-8px;width:900px;border-radius:12px;box-shadow:0 25px 50px rgba(0,0,0,0.5);background:rgba(15,23,42,0.97);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);opacity:0;visibility:hidden;transition:all 0.25s ease;z-index:100;pointer-events:none;padding:24px 28px;">
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px 40px;">
                  <!-- Col 1 -->
                  <div style="display:flex;flex-direction:column;gap:16px;">
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">UI Design</div>
                      <a href="/technologies/html-css" class="dd-link">HTML/HTML5, CSS3</a>
                      <a href="/technologies/angular-js" class="dd-link">AngularJS, JS</a>
                      <a href="/technologies/ajax-json" class="dd-link">AJAX/JSON</a>
                      <a href="/technologies/jquery" class="dd-link">jQuery, jQuery UI</a>
                      <a href="/technologies/drupal" class="dd-link">Drupal</a>
                      <a href="/technologies/joomla" class="dd-link">Joomla</a>
                      <a href="/technologies/wordpress" class="dd-link">WordPress</a>
                      <a href="/technologies/react-development" class="dd-link">React Development</a>
                      <a href="/technologies/ar-vr-development" class="dd-link">AR/VR Development</a>
                    </div>
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Cloud Computing</div>
                      <a href="/technologies/aws" class="dd-link">AWS Development</a>
                      <a href="/technologies/google-cloud" class="dd-link">Google Cloud</a>
                      <a href="/technologies/godaddy" class="dd-link">Go Daddy</a>
                    </div>
                  </div>

                  <!-- Col 2 -->
                  <div style="display:flex;flex-direction:column;gap:16px;">
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Server Side Scripting</div>
                      <a href="/technologies/php" class="dd-link">PHP</a>
                      <a href="/technologies/java-frameworks" class="dd-link">J2EE, J2SE, Swing, Servlet</a>
                      <a href="/technologies/java-frameworks" class="dd-link">Spring, Struts, Hibernate</a>
                      <a href="/technologies/jsp-jsf" class="dd-link">JSP, JSF, ApacheCXF</a>
                      <a href="/technologies/java-testing" class="dd-link">JUnit, TestNG, Mockito</a>
                      <a href="/technologies/architecture" class="dd-link">Microsoft Visio, Enterprise Architect</a>
                      <a href="/technologies/shell" class="dd-link">Shell</a>
                      <a href="/technologies/perl" class="dd-link">Perl</a>
                      <a href="/technologies/python" class="dd-link">Python</a>
                      <a href="/technologies/nodejs-development" class="dd-link">NodeJS Development</a>
                    </div>
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Web Server Technology</div>
                      <a href="/technologies/jboss" class="dd-link">JBoss</a>
                      <a href="/technologies/apache" class="dd-link">Apache</a>
                      <a href="/technologies/tomcat" class="dd-link">Tomcat</a>
                      <a href="/technologies/iis" class="dd-link">IIS</a>
                    </div>
                  </div>

                  <!-- Col 3 -->
                  <div style="display:flex;flex-direction:column;gap:16px;">
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Data Mining and Analytics</div>
                      <a href="/technologies/oracle" class="dd-link">Database Design: Oracle</a>
                      <a href="/technologies/sql-database" class="dd-link">SQL Database</a>
                      <a href="/technologies/redis" class="dd-link">Redis</a>
                      <a href="/technologies/cassandra" class="dd-link">Cassandra</a>
                      <a href="/technologies/mongodb" class="dd-link">Database Development: MongoDB</a>
                      <a href="/technologies/sql-server" class="dd-link">Database Consulting: SQL Server</a>
                      <a href="/technologies/iot-solutions" class="dd-link">IoT Solutions</a>
                      <a href="/technologies/blockchain-development" class="dd-link">Blockchain Development</a>
                    </div>
                    <div>
                      <div style="color:#818cf8;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Testing & Software Process</div>
                      <a href="/technologies/software-testing" class="dd-link">Software Testing</a>
                      <a href="/technologies/unit-testing" class="dd-link">Unit Testing</a>
                      <a href="/technologies/integration-testing" class="dd-link">Integration Testing</a>
                      <a href="/technologies/system-testing" class="dd-link">System Testing</a>
                      <a href="/technologies/deployment-automation" class="dd-link">Deployment Automation Support</a>
                      <a href="/technologies/sdlc" class="dd-link">SDLC</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dropdown: Industries (HIDDEN TEMPORARILY) -->
            <div data-dropdown="industries" style="display:none !important; position:relative;padding:24px 0;">
              <a href="/industries" class="nav-dd-btn" style="display:flex;align-items:center;color:#fff;font-weight:500;text-decoration:none;background:none;border:none;cursor:pointer;font-size:inherit;font-family:inherit;padding:0;transition:color 0.2s;">
                Industries
                <svg class="dd-arrow" style="margin-left:4px;width:16px;height:16px;transition:transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="dd-panel" style="position:absolute;left:50%;transform:translateX(-50%) translateY(8px);top:100%;margin-top:-8px;width:400px;border-radius:12px;box-shadow:0 25px 50px rgba(0,0,0,0.5);background:rgba(15,23,42,0.97);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);opacity:0;visibility:hidden;transition:all 0.25s ease;z-index:100;pointer-events:none;padding:24px 28px;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 40px;">
                  <a href="/industries/automotive" class="dd-link">Automotive</a>
                  <a href="/industries/ecommerce" class="dd-link">Ecommerce</a>
                  <a href="/industries/education" class="dd-link">Education</a>
                  <a href="/industries/finance" class="dd-link">Finance</a>
                  <a href="/industries/gaming" class="dd-link">Gaming</a>
                  <a href="/industries/healthcare" class="dd-link">Healthcare</a>
                  <a href="/industries/manufacturing" class="dd-link">Manufacturing</a>
                  <a href="/industries/real-estate" class="dd-link">Real Estate</a>
                  <a href="/industries/retail" class="dd-link">Retail</a>
                </div>
              </div>
            </div>

            <a href="/portfolio" style="color:#fff;text-decoration:none;font-weight:500;padding:4px 2px;transition:color 0.2s;" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">Portfolio</a>
            <a href="/careers" style="color:#fff;text-decoration:none;font-weight:500;padding:4px 2px;transition:color 0.2s;" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">Careers</a>
            <a href="/contact" style="color:#fff;text-decoration:none;font-weight:500;padding:4px 2px;transition:color 0.2s;" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">Contact Us</a>

            <a href="/login" style="background:linear-gradient(to right,#2563eb,#9333ea);color:#fff;padding:10px 24px;border-radius:12px;text-decoration:none;font-weight:500;box-shadow:0 4px 15px rgba(147,51,234,0.3);transition:transform 0.3s;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">My Account</a>

            <button id="search-toggle-btn" style="padding:8px;color:#fff;background:none;border:none;cursor:pointer;transition:color 0.2s;" aria-label="Search" onmouseenter="this.style.color='#60a5fa'" onmouseleave="this.style.color='#fff'">
              <svg style="width:24px;height:24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
          </div>

          <!-- Mobile Hamburger Button -->
          <div id="nav-mobile-toggle" style="display:none;align-items:center;">
            <button id="mobile-menu-btn" style="padding:8px;margin-right:8px;color:#fff;background:none;border:none;cursor:pointer;">
              <svg id="hamburger-icon" style="width:32px;height:32px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="close-icon" style="width:32px;height:32px;display:none;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown (Full-screen overlay with accordion sub-menus) -->
      <div id="mobile-menu" style="display:none;background:#0f172a;border-top:1px solid rgba(255,255,255,0.1);box-shadow:0 25px 50px rgba(0,0,0,0.5);position:fixed;top:80px;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;z-index:9998;">
        <div style="padding:8px 16px 40px;">
          <a href="/" onclick="window.location.href='/'; return false;" class="mob-link" style="display:block;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;text-decoration:none;border-radius:8px;border-bottom:1px solid rgba(255,255,255,0.06);">Home</a>
          <a href="/about" class="mob-link" style="display:block;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;text-decoration:none;border-radius:8px;border-bottom:1px solid rgba(255,255,255,0.06);">About Us</a>

          <!-- Services Accordion -->
          <div class="mob-accordion" data-acc="services">
            <button class="mob-acc-btn" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;background:none;border:none;border-bottom:1px solid rgba(255,255,255,0.06);cursor:pointer;font-family:inherit;border-radius:8px;">
              Services
              <svg class="mob-acc-arrow" style="width:18px;height:18px;transition:transform 0.3s;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mob-acc-panel" style="display:none;padding:8px 0 8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <a href="/services" style="display:block;padding:8px 12px;font-size:14px;font-weight:600;color:#818cf8;text-decoration:none;">→ View All Services</a>
              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Mobile Application</div>
              <a href="/services/mobile-apps" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Mobile App Development</a>
              <a href="/services/windows-app-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Windows App Development</a>
              <a href="/services/xamarin-app-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Xamarin App Development</a>
              <a href="/services/hybrid-app-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Hybrid App Development</a>
              <a href="/services/native-app-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Native App Development</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Online Marketing</div>
              <a href="/services/seo-services" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">SEO Services</a>
              <a href="/services/search-engine-marketing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Search Engine Marketing</a>
              <a href="/services/social-media-marketing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Social Media Marketing</a>
              <a href="/services/pay-per-click-management" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Pay Per Click Management</a>
              <a href="/services/digital-marketing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Digital Marketing</a>
              <a href="/services/brand-consulting" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Brand Consulting</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Web Design & Development</div>
              <a href="/services/ecommerce-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">E-commerce Development</a>
              <a href="/services/web-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Custom Web Development</a>
              <a href="/services/ui-ux-design" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">UI/UX Design</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Creative Design</div>
              <a href="/services/creative-design" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Creative Design</a>
              <a href="/services/logo-design" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Logo Design</a>
              <a href="/services/brochure-design" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Brochure Design</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Consultant</div>
              <a href="/services/consulting-services" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Consulting Services</a>
              <a href="/services/netsuite-consultant" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">NetSuite Consultant</a>
              <a href="/services/software-consultant" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Software Consultant</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Data Science & Testing</div>
              <a href="/services/ai-ml" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">AI & Machine Learning</a>
              <a href="/services/data-analytics" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Data Analytics</a>
              <a href="/services/software-testing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Software Testing</a>
              <a href="/services/security-testing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Security Testing</a>
            </div>
          </div>

          <!-- Technologies Accordion -->
          <div class="mob-accordion" data-acc="technologies">
            <button class="mob-acc-btn" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;background:none;border:none;border-bottom:1px solid rgba(255,255,255,0.06);cursor:pointer;font-family:inherit;border-radius:8px;">
              Technologies
              <svg class="mob-acc-arrow" style="width:18px;height:18px;transition:transform 0.3s;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mob-acc-panel" style="display:none;padding:8px 0 8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <a href="/technologies" style="display:block;padding:8px 12px;font-size:14px;font-weight:600;color:#818cf8;text-decoration:none;">→ View All Technologies</a>
              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">UI Design</div>
              <a href="/technologies/html-css" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">HTML/HTML5, CSS3</a>
              <a href="/technologies/angular-js" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">AngularJS, JS</a>
              <a href="/technologies/jquery" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">jQuery, jQuery UI</a>
              <a href="/technologies/wordpress" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">WordPress</a>
              <a href="/technologies/react-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">React Development</a>
              <a href="/technologies/ar-vr-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">AR/VR Development</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Server Side Scripting</div>
              <a href="/technologies/php" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">PHP</a>
              <a href="/technologies/python" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Python</a>
              <a href="/technologies/nodejs-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">NodeJS Development</a>
              <a href="/technologies/java-frameworks" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Java Frameworks</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Cloud Computing</div>
              <a href="/technologies/aws" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">AWS Development</a>
              <a href="/technologies/google-cloud" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Google Cloud</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Data & Analytics</div>
              <a href="/technologies/oracle" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Oracle</a>
              <a href="/technologies/sql-database" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">SQL Database</a>
              <a href="/technologies/mongodb" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">MongoDB</a>
              <a href="/technologies/redis" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Redis</a>
              <a href="/technologies/iot-solutions" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">IoT Solutions</a>
              <a href="/technologies/blockchain-development" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Blockchain Development</a>

              <div style="color:#818cf8;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;padding:10px 12px 4px;">Web Server & Testing</div>
              <a href="/technologies/apache" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Apache</a>
              <a href="/technologies/tomcat" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Tomcat</a>
              <a href="/technologies/software-testing" class="mob-sub-link" style="display:block;padding:6px 12px 6px 20px;font-size:14px;color:#cbd5e1;text-decoration:none;">Software Testing</a>
            </div>
          </div>

          <a href="/portfolio" class="mob-link" style="display:block;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;text-decoration:none;border-radius:8px;border-bottom:1px solid rgba(255,255,255,0.06);">Portfolio</a>
          <a href="/careers" class="mob-link" style="display:block;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;text-decoration:none;border-radius:8px;border-bottom:1px solid rgba(255,255,255,0.06);">Careers</a>
          <a href="/contact" class="mob-link" style="display:block;padding:14px 12px;font-size:16px;font-weight:500;color:#fff;text-decoration:none;border-radius:8px;border-bottom:1px solid rgba(255,255,255,0.06);">Contact Us</a>
          <a href="/login" style="display:block;margin-top:20px;text-align:center;padding:14px 24px;background:linear-gradient(to right,#2563eb,#9333ea);color:#fff;font-weight:600;border-radius:12px;text-decoration:none;box-shadow:0 4px 15px rgba(147,51,234,0.3);font-size:16px;">My Account</a>
        </div>
      </div>

      <!-- Search Overlay -->
      <div id="search-overlay" style="display:none;position:absolute;top:100%;left:0;width:100%;background:rgba(15,23,42,0.97);backdrop-filter:blur(12px);border-top:1px solid rgba(255,255,255,0.1);box-shadow:0 25px 50px rgba(0,0,0,0.5);padding:24px;">
        <div style="max-width:768px;margin:0 auto;display:flex;align-items:center;">
          <input type="text" id="custom-search-input" placeholder="Search Infocera..." style="width:100%;background:transparent;color:#fff;font-size:20px;border:none;border-bottom:2px solid #334155;outline:none;padding:8px 0;transition:border-color 0.3s;" onfocus="this.style.borderBottomColor='#3b82f6'" onblur="this.style.borderBottomColor='#334155'">
          <button id="close-search-btn" style="margin-left:16px;padding:8px;color:#9ca3af;background:none;border:none;cursor:pointer;" onmouseenter="this.style.color='#fff'" onmouseleave="this.style.color='#9ca3af'">
            <svg style="width:32px;height:32px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    `;

    // Attach directly to body, OUTSIDE of React #root, so SPA routing never destroys the navbar
    document.body.prepend(nav);
    
    // Move the mobile menu to the body directly for guaranteed visibility/z-indexing
    const mobileMenu = nav.querySelector('#mobile-menu');
    if (mobileMenu) {
        document.body.appendChild(mobileMenu);
    }

    // === RESPONSIVE LAYOUT VIA JS MEDIA QUERY ===
    const desktopLinks = nav.querySelector('#nav-desktop-links');
    const mobileToggle = nav.querySelector('#nav-mobile-toggle');
    // mobileMenu is now a child of body
    const hamburgerIcon = nav.querySelector('#hamburger-icon');
    const closeIcon = nav.querySelector('#close-icon');

    function applyLayout() {
      const isDesktop = window.innerWidth >= BREAKPOINT;
      desktopLinks.style.display = isDesktop ? 'flex' : 'none';
      mobileToggle.style.display = isDesktop ? 'none' : 'flex';
      if (isDesktop) {
        mobileMenu.style.display = 'none';
        if (hamburgerIcon) hamburgerIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
      }
    }
    window.addEventListener('resize', applyLayout);
    applyLayout();

    // === DROPDOWN HOVER LOGIC ===
    const dropdownWrappers = nav.querySelectorAll('[data-dropdown]');
    dropdownWrappers.forEach(wrapper => {
      const panel = wrapper.querySelector('.dd-panel');
      const arrow = wrapper.querySelector('.dd-arrow');
      const btn = wrapper.querySelector('.nav-dd-btn');
      let hideTimeout;

      function show() {
        clearTimeout(hideTimeout);
        panel.style.opacity = '1';
        panel.style.visibility = 'visible';
        panel.style.transform = 'translateX(-50%) translateY(0)';
        panel.style.pointerEvents = 'auto';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        if (btn) btn.style.color = '#60a5fa';
      }

      function hide() {
        hideTimeout = setTimeout(() => {
          panel.style.opacity = '0';
          panel.style.visibility = 'hidden';
          panel.style.transform = 'translateX(-50%) translateY(8px)';
          panel.style.pointerEvents = 'none';
          if (arrow) arrow.style.transform = 'rotate(0)';
          if (btn) btn.style.color = '#fff';
        }, 120);
      }

      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        panel.style.opacity === '1' ? hide() : show();
        
        // SPA Routing for top-level dropdown links (e.g. Services, Industries)
        const href = btn.getAttribute('href');
        if (href && href !== '#') {
          window.history.pushState(null, '', href);
          window.dispatchEvent(new Event('popstate'));
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      dropdownWrappers.forEach(w => {
        const p = w.querySelector('.dd-panel');
        const a = w.querySelector('.dd-arrow');
        const b = w.querySelector('button');
        p.style.opacity = '0'; p.style.visibility = 'hidden';
        p.style.transform = 'translateX(-50%) translateY(8px)'; p.style.pointerEvents = 'none';
        if (a) a.style.transform = 'rotate(0)';
        if (b) b.style.color = '#fff';
      });
    });

    // === SCROLL EFFECT & ROUTE CHANGES ===
    function handleScroll() {
      const isInternal = window.location.pathname !== '/' && window.location.pathname !== '';
      
      if (window.scrollY > 50 || isInternal) {
        nav.style.background = 'rgba(15,23,42,0.95)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.boxShadow = 'none';
      }
    }
    
    function handleRouteOrScroll() {
      handleScroll();
      if (typeof updateGlobalBackground === 'function') {
        updateGlobalBackground();
      }
    }

    window.addEventListener('scroll', handleRouteOrScroll);
    window.addEventListener('popstate', handleRouteOrScroll);
    
    // Intercept pushState/replaceState to detect React Router navigation without reload
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      handleRouteOrScroll();
    };
    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      handleRouteOrScroll();
    };
    
    handleRouteOrScroll();

    // === MOBILE MENU TOGGLE ===
    const mobileBtn = nav.querySelector('#mobile-menu-btn');

    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('active');
      if (!isOpen) {
        mobileMenu.classList.add('active');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        nav.style.background = '#0f172a'; // Solid background when open
        nav.style.backdropFilter = 'blur(12px)';
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.remove('active');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = '';
        handleScroll();
        // Close all accordion panels when menu closes
        nav.querySelectorAll('.mob-acc-panel').forEach(p => { p.style.display = 'none'; });
        nav.querySelectorAll('.mob-acc-arrow').forEach(a => { a.style.transform = 'rotate(0)'; });
        nav.querySelectorAll('.mob-acc-btn').forEach(b => { b.style.color = '#fff'; b.style.background = 'none'; });
      }
    });

    // === MOBILE ACCORDION TOGGLE ===
    // Use event delegation on mobileMenu for robustness
    if (mobileMenu) {
      mobileMenu.addEventListener('click', (e) => {
        const btn = e.target.closest('.mob-acc-btn');
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();
        
        const accordion = btn.closest('.mob-accordion');
        const panel = accordion.querySelector('.mob-acc-panel');
        const arrow = accordion.querySelector('.mob-acc-arrow');
        const isOpen = panel.style.display === 'block';

        // Close all other accordions first
        document.querySelectorAll('.mob-accordion').forEach(acc => {
          const p = acc.querySelector('.mob-acc-panel');
          const a = acc.querySelector('.mob-acc-arrow');
          const b = acc.querySelector('.mob-acc-btn');
          if (p) p.style.display = 'none';
          if (a) a.style.transform = 'rotate(0)';
          if (b) {
            b.style.color = '#fff';
            b.style.background = 'none';
          }
        });

        // Toggle the clicked one
        if (!isOpen) {
          panel.style.display = 'block';
          arrow.style.transform = 'rotate(180deg)';
          btn.style.color = '#818cf8';
          btn.style.background = 'rgba(255,255,255,0.03)';
        }
      });
    }

    // === SEARCH OVERLAY ===
    const searchToggle = nav.querySelector('#search-toggle-btn');
    const searchOverlay = nav.querySelector('#search-overlay');
    const closeSearch = nav.querySelector('#close-search-btn');
    const searchInput = nav.querySelector('#custom-search-input');

    searchToggle.addEventListener('click', () => {
      searchOverlay.style.display = 'block';
      searchInput.focus();
    });
    closeSearch.addEventListener('click', () => {
      searchOverlay.style.display = 'none';
      searchInput.value = '';
    });

    // === LINK INTERCEPTOR ===
    // Use full page reload for local links so that ALL DOM patches 
    // (homepage fixes, testimonials, services, stats, etc.) re-execute correctly.
    // SPA pushState doesn't work here because React re-renders the component tree
    // which wipes out our DOM patches without re-running them.
    nav.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.hasAttribute('href')) {
        const href = link.getAttribute('href');
        
        // Ignore external links
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
          return;
        }

        // If it's a placeholder hash link, just prevent default to stop page jumping
        if (href === '#') {
          e.preventDefault();
          return;
        }

        // Full page navigation so all DOM patches re-execute
        e.preventDefault();
        window.location.href = href;
      }
    });

    // ULTIMATE HERO RE-ENFORCEMENT (Counter-React)
    function enforceHero() {
        // ONLY APPLY ON HOMEPAGE
        if (!document.body.classList.contains('is-homepage')) return;

        const hero = document.querySelector('.hero-section') || document.querySelector('section:first-of-type');
        if (!hero) return;

        const isDesktop = window.innerWidth >= 768;
        if (isDesktop) {
            // RESTORE DESKTOP LAYOUT (Aggressive 250px clear)
            hero.style.setProperty('padding-top', '250px', 'important');
            hero.style.setProperty('display', 'flex', 'important');
            hero.style.setProperty('flex-direction', 'column', 'important');
            hero.style.setProperty('min-height', 'auto', 'important');
            
            // Nuke any absolute positioning on heading containers for desktop
            const h1s = hero.querySelectorAll('h1');
            h1s.forEach(node => {
                node.style.setProperty('font-size', '2.8rem', 'important');
                node.style.setProperty('position', 'relative', 'important');
                node.style.setProperty('top', '0', 'important');
                node.style.setProperty('margin-top', '0', 'important');
                node.style.setProperty('display', 'inline-block', 'important');
                node.style.setProperty('opacity', '1', 'important');
                node.style.setProperty('visibility', 'visible', 'important');

                // also nudge parents to relative
                let p = node.parentElement;
                while(p && p !== hero) {
                    p.style.setProperty('position', 'relative', 'important');
                    p.style.setProperty('top', '0', 'important');
                    p.style.setProperty('transform', 'none', 'important');
                    p.style.setProperty('padding-top', '0', 'important');
                    p = p.parentElement;
                }
            });
            return;
        }

        // Force hero layout ONLY ON MOBILE
        hero.style.setProperty('display', 'flex', 'important');
        hero.style.setProperty('flex-direction', 'column', 'important');
        hero.style.setProperty('padding-top', '110px', 'important');
        hero.style.setProperty('align-items', 'center', 'important');
        hero.style.setProperty('justify-content', 'flex-start', 'important');
        hero.style.setProperty('height', 'auto', 'important');
        hero.style.setProperty('min-height', 'auto', 'important');
        hero.style.setProperty('overflow', 'visible', 'important');
        hero.style.setProperty('position', 'relative', 'important');

        // Target Title Container (contains rotating H1)
        const selectors = [
            'div.absolute.top-0.z-30',
            'div[class*="absolute"][class*="top-0"][class*="z-30"]',
            'div.text-center.px-2.pt-8' // From debug trace
        ];
        
        let titleContainer = null;
        for (const sel of selectors) {
            titleContainer = hero.querySelector(sel);
            if (titleContainer) break;
        }

        if (titleContainer) {
            titleContainer.style.setProperty('position', 'relative', 'important');
            titleContainer.style.setProperty('order', '-2', 'important'); // ABSOLUTE TOP
            titleContainer.style.setProperty('top', '0', 'important');
            titleContainer.style.setProperty('left', '0', 'important');
            titleContainer.style.setProperty('transform', 'none', 'important');
            titleContainer.style.setProperty('margin-bottom', '10px', 'important');
            titleContainer.style.setProperty('padding-top', '0', 'important');
            titleContainer.style.setProperty('display', 'block', 'important');
            titleContainer.style.setProperty('width', '100%', 'important');
            titleContainer.style.setProperty('opacity', '1', 'important');
            titleContainer.style.setProperty('visibility', 'visible', 'important');
        }

        // Target Main Content Container (Badge, P, Buttons)
        const contentContainer = hero.querySelector('div.relative.max-w-7xl') || hero.querySelector('div.relative.z-20');
        if (contentContainer) {
            contentContainer.style.setProperty('position', 'relative', 'important');
            contentContainer.style.setProperty('order', '-1', 'important');
            contentContainer.style.setProperty('top', '0', 'important');
            contentContainer.style.setProperty('left', '0', 'important');
            contentContainer.style.setProperty('transform', 'none', 'important');
            contentContainer.style.setProperty('display', 'flex', 'important');
            contentContainer.style.setProperty('flex-direction', 'column', 'important');
            contentContainer.style.setProperty('align-items', 'center', 'important');
            contentContainer.style.setProperty('width', '100%', 'important');
            contentContainer.style.setProperty('opacity', '1', 'important');
            contentContainer.style.setProperty('visibility', 'visible', 'important');
            contentContainer.style.setProperty('margin-top', '0', 'important');
        }
        
        // Ensure H1 specifically is visible and sized right (MOBILE ONLY)
        const mobileTargetH1 = hero.querySelector('h1');
        if (mobileTargetH1) {
            mobileTargetH1.style.setProperty('opacity', '1', 'important');
            mobileTargetH1.style.setProperty('visibility', 'visible', 'important');
            mobileTargetH1.style.setProperty('display', 'inline-block', 'important');
            mobileTargetH1.style.setProperty('font-size', '1.3rem', 'important');
            mobileTargetH1.style.setProperty('transform', 'none', 'important');
            mobileTargetH1.style.setProperty('position', 'relative', 'important');
            mobileTargetH1.style.setProperty('top', '0', 'important');
            mobileTargetH1.style.setProperty('margin-top', '0', 'important');
        }
    }

    // High speed enforcement
    setInterval(enforceHero, 300);
    enforceHero();
  }

  function initFooterPatch() {
    if (document.getElementById('custom-global-footer')) return;
    
    // Inject Custom Footer CSS
    const footerStyle = document.createElement('style');
    footerStyle.textContent = `
      /* ===== CUSTOM CORPORATE FOOTER STYLES ===== */
      .corp-footer { background:#030712; padding:80px 0 0; color:#cbd5e1; border-top:1px solid rgba(255,255,255,0.05); font-family:'Inter',system-ui,-apple-system,sans-serif; width: 100%; position: relative; z-index: 100; }
      .corp-footer .corp-section { max-width:1300px; margin:0 auto; padding:0 24px; }
      .footer-grid { display:grid; grid-template-columns:300px 1fr; gap:60px; margin-bottom:60px; }
      .footer-left { display:flex; flex-direction:column; gap:20px; }
      .footer-logo { display:flex; flex-direction:column; align-items:flex-start; text-decoration:none; line-height:1; margin-bottom:12px; }
      .footer-logo-main { font-family:'Exo','Orbitron',sans-serif; font-weight:800; font-size:28px; letter-spacing:3px; background:linear-gradient(135deg,#5b21b6,#9333ea,#4f46e5); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
      .footer-logo-sub { font-family:sans-serif; font-weight:700; font-size:9px; letter-spacing:4px; color:#fff; margin-top:3px; text-transform:uppercase; }
      .footer-desc { font-size:0.95rem; line-height:1.6; color:#e2e8f0; margin:0; }
      .footer-desc span { color:#0d9488; font-weight:600; }
      .footer-contact { display:flex; flex-direction:column; gap:16px; margin-top:12px; }
      .footer-contact .contact-item { display:flex; align-items:flex-start; gap:12px; font-size:0.9rem; color:#cbd5e1; line-height:1.5; }
      .footer-contact .contact-item svg { width:20px; height:20px; color:#0d9488; flex-shrink:0; margin-top:2px; }
      
      .footer-links-wrapper { display:grid; grid-template-columns:repeat(3, 1fr); gap:40px 30px; }
      .footer-col h4 { font-size:1.05rem; font-weight:600; color:#3b82f6; margin:0 0 16px 0; border-bottom:2px solid #1e3a8a; padding-bottom:8px; display:inline-block; width: 100%; max-width: 180px; }
      .footer-col ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
      .footer-col a, .footer-col span { color:#cbd5e1; text-decoration:none; font-size:0.9rem; display:inline-flex; align-items:center; transition:color 0.2s; font-weight:500; }
      .footer-col a:hover { color:#fff; }
      
      .footer-bottom { border-top:1px solid rgba(255,255,255,0.08); padding:24px 0; display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; color:#64748b; }
      
      @media(max-width:1024px) { .footer-grid { grid-template-columns:1fr; gap:40px; } .footer-links-wrapper { grid-template-columns:repeat(3, 1fr); } }
      @media(max-width:768px) { .footer-links-wrapper { grid-template-columns:repeat(2, 1fr); } }
      @media(max-width:480px) { .footer-links-wrapper { grid-template-columns:1fr; } }
      
      /* Only show this global footer on non-home pages! */
      body.is-homepage #custom-global-footer { display: none !important; }
    `;
    document.head.appendChild(footerStyle);

    // Inject Custom Footer DOM
    const footerWrapper = document.createElement('div');
    footerWrapper.id = 'custom-global-footer';
    footerWrapper.innerHTML = `
      <footer class="corp-footer">
        <div class="corp-section">
          <div class="footer-grid">
            <div class="footer-left">
              <a href="/" class="footer-logo" onclick="window.location.href='/'; return false;">
                <span class="footer-logo-main">INFOCERA</span>
                <span class="footer-logo-sub">Seamless Connections</span>
              </a>
              <p class="footer-desc">
                Leading IT services provider delivering <span>innovative technology solutions</span> that drive business growth and digital transformation.
              </p>
              <div class="footer-contact">
                <div class="contact-item">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+91 8882824948</span>
                </div>
                <div class="contact-item">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>info@infocera.in</span>
                </div>
                <div class="contact-item">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>First Floor, L29-L34, Block L<br>Connaught Place, New Delhi, Delhi - 110001</span>
                </div>
              </div>
            </div>

            <div class="footer-links-wrapper">
              <div class="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                  <li><a href="/services/web-development">Web Design &amp; Development</a></li>
                  <li><a href="/services/mobile-apps">Mobile Application</a></li>
                  <li><a href="/services">Software Services</a></li>
                  <li><a href="/services/creative-design">Creative Design</a></li>
                  <li><a href="/services/consulting-services">Consulting</a></li>
                  <li><a href="/services/ai-ml">Data Science &amp; AI</a></li>
                  <li><a href="/services/software-testing">QA &amp; Testing</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Industries</h4>
                <ul>
                  <li><a href="/industries/automotive">Automotive</a></li>
                  <li><a href="/industries/ecommerce">Ecommerce</a></li>
                  <li><a href="/industries/education">Education</a></li>
                  <li><a href="/industries/finance">Finance</a></li>
                  <li><a href="/industries/gaming">Gaming</a></li>
                  <li><a href="/industries/healthcare">Healthcare</a></li>
                  <li><a href="/industries/manufacturing">Manufacturing</a></li>
                  <li><a href="/industries/real-estate">Real Estate</a></li>
                  <li><a href="/industries/retail">Retail</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/login">Client Login</a></li>
                  <li><a href="/technologies" style="margin-top:12px; color:#3b82f6;">All Technologies &rarr;</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© 2026 Infocera. All rights reserved.</span>
          </div>
        </div>
      </footer>
    `;
    document.body.appendChild(footerWrapper);
  }

  // Poll until original nav mounts
  let checks = 0;
  const interval = setInterval(() => {
    initNavbarPatch();
    initFooterPatch();
    checks++;
    if (checks > 20) clearInterval(interval);
  }, 500);
})();
