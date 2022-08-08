// JSON Data
const profilesJSON = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`

// Parse the JSON into objects
const profiles = JSON.parse(profilesJSON)

// Get the container where the profile card html will be added
const container = document.querySelector(".template-hook");

// Loop through each profile and write the html
let profileList = profiles.forEach(function(profile){
    // Create the html element for the card
    let card = document.createElement("article");
    // Add the class to the card
    card.classList.add('card');
    // Insert Inner html for the card using ES6 String templating
    card.innerHTML = `
        <section class="profile">
            <img src="/img/headshot.jpg" alt="profile picture">
            <h1>${profile.name}</h1>
            <h2>${profile.jobTitle}</h2>
        </section>
        <section class="info">
            <p><strong>Company:</strong> ${profile.company}</p>
            <p><strong>Experience:</strong> ${profile.experience}</p>
            <p><strong>School:</strong> ${profile.school}</p>
            <p><strong>Major:</strong> ${profile.major}</p>
            <p><strong>Email:</strong> ${profile.email}</p>
            <div><img src="img/linkedin.svg" alt=""><p>${profile.linkedInUrl}</p></div>
        </section>
    `;
    // Insert HTML into the page
    container.append(card);
})
