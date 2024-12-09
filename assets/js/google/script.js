// Banner Section

document.addEventListener("DOMContentLoaded", () => {
  fetchHeroBannerData();
});

async function fetchHeroBannerData() {
  try {
    const response = await fetch(
      "https://hybricold-backend.onrender.com/api/sheets/banner"
    );
    const result = await response.json();

    if (result.success) {
      populateHeroBanner(result.data);
    } else {
      console.error("Failed to fetch hero banner data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching hero banner data:", error);
  }
}

function populateHeroBanner(data) {
  // Assuming the first row after headers contains the hero section data
  // Columns:
  // 0: Subheading
  // 1: Main Heading
  // 2: Description
  // 3: Image URL (optional)

  // Skip header row
  const heroData = data[1] || [];

  // Select elements to update
  const subheadingEl = document.querySelector(".banner-contentv02 h5");
  const headingEl = document.querySelector(".banner-contentv02 h1");
  const descriptionEl = document.querySelector(".banner-contentv02 p");
  const heroImageEl = document.querySelector(".hero-v02-thumb");

  // Update content if data exists
  if (heroData.length >= 3) {
    // Update text content
    if (subheadingEl) subheadingEl.textContent = heroData[0] || "Agri-Tech";

    if (headingEl) {
      // Split heading if it contains a span
      const headingParts = heroData[1].split("<span>");
      if (headingParts.length > 1) {
        headingEl.innerHTML = `${headingParts[0]}<span>${headingParts[1]}`;
      } else {
        headingEl.textContent = heroData[1];
      }
    }

    if (descriptionEl) descriptionEl.textContent = heroData[2];
  }

  // Update image if URL is provided
  if (heroData[3] && heroImageEl) {
    heroImageEl.src = heroData[3];
  }
}

// About Section

document.addEventListener("DOMContentLoaded", () => {
  fetchAboutData();
});

async function fetchAboutData() {
  try {
    const response = await fetch(
      "https://hybricold-backend.onrender.com/api/sheets/about"
    );
    const result = await response.json();

    if (result.success) {
      populateAboutSection(result.data);
    } else {
      console.error("Failed to fetch about data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
  }
}

function populateAboutSection(data) {
  // Skip header row if it exists
  const aboutData = data.slice(1)[0]; // Assuming first data row

  // Assuming the sheet columns are:
  // 0: Subtitle
  // 1: Main Heading
  // 2: Description
  // 3: List Item 1
  // 4: List Item 2
  const [subtitle, mainHeading, description, listItem1, listItem2] = aboutData;

  // Update subtitle
  const subtitleEl = document.querySelector(
    ".about-contentv1 .section-title h5"
  );
  if (subtitleEl) subtitleEl.textContent = subtitle || "Why Chose Us";

  // Update main heading
  const mainHeadingEl = document.querySelector(
    ".about-contentv1 .section-title h2"
  );
  if (mainHeadingEl)
    mainHeadingEl.textContent =
      mainHeading ||
      "Smart Cooling: Transforming Agricultural Harvest Potential";

  // Update description
  const descriptionEl = document.querySelector(
    ".about-contentv1 .section-title p"
  );
  if (descriptionEl)
    descriptionEl.textContent =
      description || "Hybricold Limited is a pioneering agri-tech company...";

  // Update list items
  const listEl = document.querySelector(".about-list2");
  if (listEl) {
    listEl.innerHTML = `
        <li><i class="fa-solid fa-circle-check"></i> ${
          listItem1 || "By extending tomato shelf life from 5 to 21 days..."
        }</li>
        <li><i class="fa-solid fa-circle-check"></i> ${
          listItem2 || "Our renewable energy-powered cold storage systems..."
        }</li>
      `;
  }
}

// // Services Section

// document.addEventListener("DOMContentLoaded", () => {
//   fetchServicesData();
// });

// async function fetchServicesData() {
//   try {
//     const response = await fetch("http://localhost:3000/api/sheets/services");
//     const result = await response.json();

//     if (result.success) {
//       populateServicesSection(result.data);
//     } else {
//       console.error("Failed to fetch services data:", result.message);
//     }
//   } catch (error) {
//     console.error("Error fetching services data:", error);
//   }
// }

// function populateServicesSection(data) {
//   const servicesContainer = document.querySelector(
//     "#services-section .row.justify-content-center.g-xl-4.g-3"
//   );

//   // Clear existing services (optional)
//   const existingServices = servicesContainer.querySelectorAll(".col-xl-4");
//   existingServices.forEach((service) => service.remove());

//   // Skip header row if it exists
//   const servicesData = data.slice(1);

//   servicesData.forEach((service, index) => {
//     // Assuming the sheet columns are:
//     // 0: Image URL
//     // 1: Icon URL
//     // 2: Service Title
//     // 3: Service Description
//     const [imageUrl, iconUrl, serviceTitle, serviceDescription] = service;

//     const delayValues = [".3s", ".5s", ".7s"];
//     const serviceElement = document.createElement("div");
//     serviceElement.classList.add(
//       "col-xl-4",
//       "col-lg-4",
//       "col-md-6",
//       "col-sm-6",
//       "wow",
//       "fadeInUp"
//     );
//     serviceElement.setAttribute(
//       "data-wow-delay",
//       delayValues[index % delayValues.length]
//     );

//     serviceElement.innerHTML = `
//         <div class="service-itemsv02">
//           <div class="thumb w-100">
//             <img src="${imageUrl}" alt="img" class="w-100 mimg">
//           </div>
//           <div class="content">
//             <div class="iocns-box d-center"><img src="${iconUrl}" alt="svg"></div>
//             <a href="service-details.html" class="title">${serviceTitle}</a>
//             <p>${serviceDescription}</p>
//           </div>
//         </div>
//       `;

//     servicesContainer.appendChild(serviceElement);
//   });

//   // Reinitialize WOW.js if needed
//   new WOW().init();
// }

// // Testimonials Section
// document.addEventListener("DOMContentLoaded", () => {
//   fetchTestimonialData();
// });

// async function fetchTestimonialData() {
//   try {
//     const response = await fetch(
//       "http://localhost:3000/api/sheets/testimonials"
//     );
//     const result = await response.json();

//     if (result.success) {
//       populateTestimonialSlider(result.data);
//     } else {
//       console.error("Failed to fetch testimonial data:", result.message);
//     }
//   } catch (error) {
//     console.error("Error fetching testimonial data:", error);
//   }
// }

// function populateTestimonialSlider(data) {
//   const sliderWrapper = document.querySelector(
//     ".testimonial-slidewrap01 .swiper-wrapper"
//   );

//   // Clear existing slides
//   sliderWrapper.innerHTML = "";

//   // Skip header row if it exists
//   const testimonialData = data.slice(1);

//   testimonialData.forEach((testimonial) => {
//     // Assuming the sheet columns are:
//     // 0: Name
//     // 1: Role/Designation
//     // 2: Testimonial Text
//     // 3: Image URL
//     const [name, role, testimonialText, imageUrl] = testimonial;

//     const slideElement = document.createElement("div");
//     slideElement.classList.add("swiper-slide");

//     slideElement.innerHTML = `
//         <div class="testimonail-common-items">
//           <div class="d-flex justify-content-between">
//             <div class="review-man">
//               <img src="${imageUrl}" alt="img">
//               <div class="cont">
//                 <h3>${name}</h3>
//                 <span>${role}</span>
//               </div>
//             </div>
//             <img src="assets/img/icon/quote-leftp2.svg" alt="icon" class="qute">
//           </div>
//           <div class="stars">
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//           </div>
//           <p>${testimonialText}</p>
//         </div>
//       `;

//     sliderWrapper.appendChild(slideElement);
//   });

//   // Reinitialize Swiper if needed
//   // You might need to add code to reinitialize the Swiper slider
//   // This depends on how your Swiper is set up
// }

// Team Section
// document.addEventListener("DOMContentLoaded", () => {
//   fetchTeamData();
// });

// async function fetchTeamData() {
//   try {
//     const response = await fetch("http://localhost:3000/api/sheets/team");
//     const result = await response.json();

//     if (result.success) {
//       populateTeamSection(result.data);
//     } else {
//       console.error("Failed to fetch team data:", result.message);
//     }
//   } catch (error) {
//     console.error("Error fetching team data:", error);
//   }
// }

// function populateTeamSection(data) {
//   const teamContainer = document.querySelector(
//     ".row.g-xl-4.g-3.justify-content-center"
//   );

//   // Clear existing team members (optional)
//   teamContainer.innerHTML = "";

//   // Skip header row if it exists
//   const teamData = data.slice(1);

//   teamData.forEach((member, index) => {
//     // Assuming the sheet columns are:
//     // 0: Name
//     // 1: Position
//     // 2: Image URL
//     // 3: Facebook URL
//     // 4: Twitter URL
//     // 5: LinkedIn URL
//     // 6: Pinterest URL
//     const [
//       name,
//       position,
//       imageUrl,
//       facebookUrl,
//       twitterUrl,
//       linkedinUrl,
//       pinterestUrl,
//     ] = member;

//     const memberElement = document.createElement("div");
//     memberElement.classList.add(
//       "col-xl-4",
//       "col-lg-4",
//       "col-md-6",
//       "col-sm-6",
//       "wow",
//       "fadeInUp"
//     );
//     memberElement.setAttribute("data-wow-delay", `.${3 + index}s`);

//     memberElement.innerHTML = `
//         <div class="team-itemsv01">
//           <img src="${imageUrl}" alt="${name}" class="mimg">
//           <div class="contents">
//             <a href="#" class="title">${name}</a>
//             <span>${position}</span>
//             <div class="social-sahre">
//               <div class="share-icon">
//                 <div class="social-wrapper social-empact">
//                   <a href="${facebookUrl}" class="white-clr">
//                     <i class="white-clr fab fa-facebook-f"></i>
//                   </a>
//                   <a href="${twitterUrl}" class="white-clr">
//                     <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z" fill="white-clr"/>
//                     </svg>
//                   </a>
//                   <a href="${linkedinUrl}" class="white-clr">
//                     <i class="white-clr fa-brands fa-linkedin-in"></i>
//                   </a>
//                   <a href="${pinterestUrl}" class="white-clr">
//                     <i class="white-clr fa-brands fa-pinterest-p"></i>
//                   </a>
//                 </div>
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12.25 3.25C12.25 4.69922 11.0742 5.875 9.625 5.875C8.91406 5.875 8.25781 5.60156 7.79297 5.16406L5.22266 6.44922C5.22266 6.53125 5.22266 6.64062 5.22266 6.75C5.22266 6.85938 5.22266 6.96875 5.22266 7.07812L7.79297 8.36328C8.25781 7.92578 8.91406 7.625 9.625 7.625C11.0742 7.625 12.25 8.80078 12.25 10.25C12.25 11.6992 11.0742 12.875 9.625 12.875C8.14844 12.875 7 11.6992 7 10.25C7 10.1406 7 10.0312 7 9.94922L4.42969 8.66406C3.96484 9.10156 3.30859 9.375 2.625 9.375C1.14844 9.375 0 8.19922 0 6.75C0 5.30078 1.14844 4.125 2.625 4.125C3.30859 4.125 3.96484 4.42578 4.42969 4.86328L7 3.57812C7 3.46875 7 3.35938 7 3.25C7 1.80078 8.14844 0.625 9.625 0.625C11.0742 0.625 12.25 1.80078 12.25 3.25ZM2.59766 7.625C3.08984 7.625 3.47266 7.24219 3.47266 6.75C3.47266 6.28516 3.08984 5.875 2.59766 5.875C2.13281 5.875 1.72266 6.28516 1.72266 6.75C1.72266 7.24219 2.13281 7.625 2.59766 7.625ZM9.625 2.375C9.13281 2.375 8.75 2.78516 8.75 3.25C8.75 3.74219 9.13281 4.125 9.625 4.125C10.0898 4.125 10.5 3.74219 10.5 3.25C10.5 2.78516 10.0898 2.375 9.625 2.375ZM9.625 11.125C10.0898 11.125 10.5 10.7422 10.5 10.25C10.5 9.78516 10.0898 9.375 9.625 9.375C9.13281 9.375 8.75 9.78516 8.75 10.25C8.75 10.7422 9.13281 11.125 9.625 11.125Z" fill="white"/>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;

//     teamContainer.appendChild(memberElement);
//   });

//   // Reinitialize WOW.js if you're using it
//   new WOW().init();
// }

// Footer Section
// document.addEventListener("DOMContentLoaded", () => {
//   fetchFooterData();
// });

// async function fetchFooterData() {
//   try {
//     const response = await fetch("http://localhost:3000/api/sheets/footer");
//     const result = await response.json();

//     if (result.success) {
//       populateFooterSection(result.data);
//     } else {
//       console.error("Failed to fetch footer data:", result.message);
//     }
//   } catch (error) {
//     console.error("Error fetching footer data:", error);
//   }
// }

// function populateFooterSection(data) {
//   // Skip header row if it exists
//   const footerData = data.slice(1);

//   // Social Media Links Section
//   const socialMediaLinks = document.querySelector(
//     ".social-wrapper.social-empact"
//   );
//   if (socialMediaLinks) {
//     socialMediaLinks.innerHTML = footerData[0]
//       .slice(1, 5)
//       .map((link, index) => {
//         const socialIcons = [
//           '<i class="white-clr fab fa-facebook-f"></i>',
//           '<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z" fill="white-clr" /></svg>',
//           '<i class="white-clr fa-brands fa-linkedin-in"></i>',
//           '<i class="white-clr fa-brands fa-pinterest-p"></i>',
//         ];

//         return `<a href="${link}" class="white-clr">${socialIcons[index]}</a>`;
//       })
//       .join("");
//   }

//   // Contact Information Section
//   const contactSection = document.querySelector(".list-contact");
//   if (contactSection) {
//     const [email, location, phone] = footerData[1].slice(1);
//     contactSection.innerHTML = `
//         <li>
//           <a href="mailto:${email}">
//             <i class="fa-solid fa-envelope"></i>
//             ${email}
//           </a>
//         </li>
//         <li>
//           <a href="#" class="link">
//             <i class="fa-solid fa-location-dot"></i>
//             ${location}
//           </a>
//         </li>
//         <li>
//           <a href="tel:${phone}" class="link">
//             <i class="fa-solid fa-phone"></i>
//             ${phone}
//           </a>
//         </li>
//       `;
//   }
// }
