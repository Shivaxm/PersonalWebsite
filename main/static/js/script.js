
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.8,
        rootMargin: "0px 0px -100px 0px" 
    });

    
    document.querySelectorAll('.head1, .head2, .p1, .p2').forEach(el => {
        observer.observe(el);
    });
});