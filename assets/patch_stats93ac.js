// Patch script for Portfolio Stats Animation and Styling

(function () {
    function enhanceStatsSection() {
        // 1. Identify the Stats Section (Usually "100+", "Search Projects", etc.)
        // We look for elements containing numbers with '+' sign
        const candidates = Array.from(document.querySelectorAll('div, section, span, h2, h3'));
        const statElements = candidates.filter(el => /^\d+\+$/.test(el.textContent.trim()) && el.tagName !== 'SCRIPT');

        if (statElements.length === 0) return;

        // Find the container section
        let section = statElements[0].parentElement;
        while (section && section.tagName !== 'SECTION' && !section.className.includes('py-')) {
            section = section.parentElement;
        }

        if (!section) return;

        // 2. Apply Deep Dark Blue Background (Break up the white page)
        section.style.backgroundColor = '#1e3a8a'; // Deep Blue
        section.style.color = '#ffffff';
        section.classList.add('bg-dark-stats');

        // 3. Animate Numbers
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const finalValue = parseInt(el.dataset.value);
                    if (isNaN(finalValue)) return;

                    animateValue(el, 0, finalValue, 2000);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statElements.forEach(el => {
            const text = el.textContent.trim();
            const value = parseInt(text);
            el.dataset.value = value;
            el.textContent = '0+';
            el.style.color = '#ffffff'; // Ensure white
            el.style.fontSize = '3rem';
            el.style.fontWeight = 'bold';
            observer.observe(el);
        });
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Run
    window.addEventListener('load', enhanceStatsSection);
    setTimeout(enhanceStatsSection, 1500); // Retry later

})();
