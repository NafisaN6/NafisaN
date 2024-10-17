document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a, .dropbtn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    
    // Smooth scrolling to sections
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Hide all sections except the clicked one
            document.querySelectorAll('.left, .right, .projects').forEach(section => {
                section.style.display = 'none';
            });
            targetElement.style.display = 'block';
        });
    });

    // Initially show the About section
    document.getElementById('about').style.display = 'block';
});
