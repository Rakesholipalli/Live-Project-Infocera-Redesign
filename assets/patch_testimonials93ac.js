// Patch script to replace "What Our Clients Say" with "Why Choose Us"
// Hides the React testimonials section and injects a professional replacement

(function () {
  function replaceTestimonialsSection() {
    // Find the heading
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const testimonialHeading = headings.find(el => {
      const text = el.textContent.trim().toLowerCase();
      return text.includes('what our clients say') || text.includes('client testimonials') || text.includes('testimonials');
    });

    if (!testimonialHeading) return;

    // Find the parent section
    let section = testimonialHeading.parentElement;
    while (section && section.tagName !== 'SECTION' && !section.className.includes('py-')) {
      section = section.parentElement;
    }

    if (!section || section.dataset.patched === 'true') return;

    console.log("✅ Replacing Testimonials Section with Why Choose Us");

    // New "Why Choose Us" section content
    const newSection = document.createElement('section');
    newSection.className = 'relative overflow-hidden';
    newSection.style.cssText = 'background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%); padding: 5rem 0;';

    newSection.innerHTML = `
      <!-- Background decoration -->
      <div style="position:absolute;inset:0;background:radial-gradient(circle at 20% 50%, rgba(99,102,241,0.08), transparent 50%);"></div>
      <div style="position:absolute;inset:0;background:radial-gradient(circle at 80% 30%, rgba(139,92,246,0.06), transparent 50%);"></div>

      <div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; position:relative; z-index:10;">
        
        <!-- Section Header -->
        <div style="text-align:center; margin-bottom:4rem;">
          <h2 style="font-size:2.5rem; font-weight:800; margin-bottom:1rem; background:linear-gradient(to right, #fff, #c4b5fd, #67e8f9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-family:Poppins,Arial,sans-serif;">
            Why Choose Us
          </h2>
          <div style="width:5rem; height:4px; background:linear-gradient(to right, #a78bfa, #22d3ee); margin:0 auto 1.5rem; border-radius:9999px;"></div>
          <p style="color:#94a3b8; max-width:640px; margin:0 auto; font-size:1.125rem; line-height:1.75;">
            We combine technical excellence with business acumen to deliver software solutions that drive real results.
          </p>
        </div>

        <!-- Cards Grid -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem;">

          <!-- Card 1: Agile Methodology -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:1rem; padding:2.5rem; backdrop-filter:blur(12px); transition:all 0.3s; position:relative; overflow:hidden;"
               onmouseenter="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='rgba(99,102,241,0.5)';this.style.boxShadow='0 0 30px rgba(99,102,241,0.15)';this.style.transform='translateY(-4px)'"
               onmouseleave="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)';this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="width:4rem; height:4rem; background:rgba(99,102,241,0.2); border-radius:0.75rem; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem;">
              <svg style="width:2rem; height:2rem; color:#818cf8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 style="font-size:1.375rem; font-weight:700; color:#fff; margin-bottom:0.75rem;">Agile Methodology</h3>
            <p style="color:#94a3b8; font-size:0.95rem; line-height:1.7; margin-bottom:1.25rem;">
              We embrace iterative development with 2-week sprints, daily standups, and continuous feedback loops — ensuring your product evolves exactly as your vision demands.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
              <span style="background:rgba(99,102,241,0.15); color:#a5b4fc; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">Scrum</span>
              <span style="background:rgba(99,102,241,0.15); color:#a5b4fc; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">CI/CD</span>
              <span style="background:rgba(99,102,241,0.15); color:#a5b4fc; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">Sprint Reviews</span>
            </div>
          </div>

          <!-- Card 2: Dedicated Teams -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:1rem; padding:2.5rem; backdrop-filter:blur(12px); transition:all 0.3s; position:relative; overflow:hidden;"
               onmouseenter="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='rgba(168,85,247,0.5)';this.style.boxShadow='0 0 30px rgba(168,85,247,0.15)';this.style.transform='translateY(-4px)'"
               onmouseleave="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)';this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="width:4rem; height:4rem; background:rgba(168,85,247,0.2); border-radius:0.75rem; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem;">
              <svg style="width:2rem; height:2rem; color:#c084fc;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 style="font-size:1.375rem; font-weight:700; color:#fff; margin-bottom:0.75rem;">Dedicated Teams</h3>
            <p style="color:#94a3b8; font-size:0.95rem; line-height:1.7; margin-bottom:1.25rem;">
              Get a hand-picked team of senior developers, designers, and QA engineers who work exclusively on your project — fully integrated with your workflow and timezone.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
              <span style="background:rgba(168,85,247,0.15); color:#d8b4fe; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">Full-Stack</span>
              <span style="background:rgba(168,85,247,0.15); color:#d8b4fe; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">DevOps</span>
              <span style="background:rgba(168,85,247,0.15); color:#d8b4fe; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">QA Engineers</span>
            </div>
          </div>

          <!-- Card 3: End-to-End Delivery -->
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:1rem; padding:2.5rem; backdrop-filter:blur(12px); transition:all 0.3s; position:relative; overflow:hidden;"
               onmouseenter="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='rgba(6,182,212,0.5)';this.style.boxShadow='0 0 30px rgba(6,182,212,0.15)';this.style.transform='translateY(-4px)'"
               onmouseleave="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)';this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="width:4rem; height:4rem; background:rgba(6,182,212,0.2); border-radius:0.75rem; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem;">
              <svg style="width:2rem; height:2rem; color:#22d3ee;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 style="font-size:1.375rem; font-weight:700; color:#fff; margin-bottom:0.75rem;">End-to-End Delivery</h3>
            <p style="color:#94a3b8; font-size:0.95rem; line-height:1.7; margin-bottom:1.25rem;">
              From ideation to deployment and beyond — we handle architecture, development, testing, DevOps, and post-launch support under one roof with guaranteed SLAs.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
              <span style="background:rgba(6,182,212,0.15); color:#67e8f9; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">Architecture</span>
              <span style="background:rgba(6,182,212,0.15); color:#67e8f9; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">24/7 Support</span>
              <span style="background:rgba(6,182,212,0.15); color:#67e8f9; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.8rem;">SLA Backed</span>
            </div>
          </div>

        </div>
      </div>
    `;

    // Insert before the original React section and hide it
    section.parentNode.insertBefore(newSection, section);
    section.style.display = 'none';
    section.dataset.patched = 'true';
  }

  // Poll for React rendering
  let checks = 0;
  const interval = setInterval(() => {
    replaceTestimonialsSection();
    checks++;
    if (checks > 20) clearInterval(interval);
  }, 500);
})();
