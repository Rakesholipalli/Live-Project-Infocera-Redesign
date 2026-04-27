// Patch script to replace the "Our Clients" section with a professional grid
// (Original section likely broken/empty due to missing assets)

(function () {
  function replaceClientsSection() {
    // 1. Find the heading that says "Our Clients"
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const clientHeading = headings.find(el => el.textContent.trim().toLowerCase() === 'our clients');

    if (!clientHeading) return;

    // 2. Find the parent section container
    let section = clientHeading.parentElement;
    while (section && section.tagName !== 'SECTION' && !section.className.includes('py-')) {
      section = section.parentElement;
    }

    if (!section || section.dataset.patched === 'true') return;

    // 3. Define the new Professional HTML Content
    const newContent = `
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300" style="font-family: Poppins, Arial, sans-serif;">Our Proven Process</h2>
        <div class="w-20 md:w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>
        <p class="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          We follow a structured, agile approach to ensure successful delivery of high-quality digital solutions tailored to your business needs.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Step 1 -->
          <div class="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-blue-500/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group text-left relative overflow-hidden backdrop-blur-md">
            <div class="absolute -right-4 -top-4 text-8xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors">01</div>
            <div class="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Discovery &amp; Strategy</h3>
            <p class="text-blue-100 text-sm leading-relaxed">We analyze your requirements, target audience, and business goals to craft a comprehensive roadmap.</p>
          </div>
          
          <!-- Step 2 -->
          <div class="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-purple-500/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 group text-left relative overflow-hidden backdrop-blur-md">
            <div class="absolute -right-4 -top-4 text-8xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors">02</div>
            <div class="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">UI/UX Design</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Creating intuitive, user-centric interfaces with modern aesthetics that align perfectly with your brand identity.</p>
          </div>

          <!-- Step 3 -->
          <div class="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 group text-left relative overflow-hidden backdrop-blur-md">
            <div class="absolute -right-4 -top-4 text-8xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors">03</div>
            <div class="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Agile Development</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Building robust, scalable solutions using cutting-edge technologies and best coding practices.</p>
          </div>

          <!-- Step 4 -->
          <div class="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-blue-500/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group text-left relative overflow-hidden backdrop-blur-md">
            <div class="absolute -right-4 -top-4 text-8xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors">04</div>
            <div class="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Quality &amp; Launch</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Rigorous testing ensures a bug-free experience before seamless deployment to production environments.</p>
          </div>

        </div>
      </div>
    `;

    // 5. Create wrapper, inject before React section, and hide React section
    const newSection = document.createElement('section');
    newSection.className = "py-10 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden";
    
    // Include the original background design dots/circles as well
    newSection.innerHTML = `
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        ` + newContent;

    // Insert new layer and hide the original React rendering
    section.parentNode.insertBefore(newSection, section);
    section.style.display = 'none';
    section.dataset.patched = 'true';
    console.log("✅ Custom Clients Section Injected");
  }

  // Run interval aggressively for a few seconds to catch React mounting
  let checks = 0;
  const interval = setInterval(() => {
    replaceClientsSection();
    checks++;
    if (checks > 20) clearInterval(interval);
  }, 500);

})();
