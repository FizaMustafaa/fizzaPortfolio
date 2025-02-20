//smooth scroll//
//about//
document.addEventListener("DOMContentLoaded", function() {
    let aboutSection = document.getElementById('about');
    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                observer.unobserve(aboutSection); 
            }
        });
    });

    observer.observe(aboutSection);
});


