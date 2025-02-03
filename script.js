function topFunction() {
    document.body.scrollTop = 300; // For Safari
    document.documentElement.scrollTop = 300; // For Chrome, Firefox, IE and Opera
}

function clickLink(link) {
    // Open a new tab with the link
    window.open(link, '_blank');

}

function downloadResume() {
    // Download the resume pdf from local folder
    window.open(`./downloads/Chang Guan Quan's Tech Resume.pdf`, '_blank');
}

function scrollToSection(id) {
    // Scroll to the element
    const element = document.getElementById(id);
    console.log(element);
    window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset for fixed header
        behavior: "smooth",
    });
}