
document.addEventListener('DOMContentLoaded', (event) => {
    const projects = [
        { title: "Project 1", description: "Description of Project 1" },
        { title: "Project 2", description: "Description of Project 2" },
        { title: "Project 3", description: "Description of Project 3" }
    ];

    const projectGallery = document.getElementById("project-gallery");

    // Function to create project items
    function createProjectItem(project) {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        return projectItem;
    }

    // Function to display projects in the gallery
    function displayProjects() {
        projects.forEach(project => {
            const projectItem = createProjectItem(project);
            projectGallery.appendChild(projectItem);
        });

        // Apply fade-in animation after projects are appended
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.opacity = 1;
            }, 200 * index); // Delay each item by 200ms
        });
    }

    displayProjects();

    // Modal functionality
    const modal = document.getElementById("project-modal");
    const closeModal = document.querySelector(".close");

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Form validation
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields.");
        } else {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        }
    });

    // Typewriter effect for the header title
    const headerTitle = document.getElementById("header-title");
    const text = "Hello, I'm Dani Rossiter"; // The text you want to type
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            headerTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 1); // Typing speed (milliseconds)
        }
    }

    // Start typing animation
    typeWriter();
});
