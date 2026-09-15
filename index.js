"use strict";
const devName = "Igihozo Charlene";
const devRole = "Frontend Web Developer";
const devEmail = "igihozocharlene9@gmail.com";
const devLocation = "Kigali, Rwanda";
const devStartYear = 2024;
const devEndYear = 2026;
const devTotalTechnicalSkills = 7;
let isAvailableForHire = true;
const mySkillsList = [
    "HTML5/Semantics Markup",
    "CSS3/Flexbox & Grid",
    "Javascript",
    "Responsive Web Design",
    "Git& Github",
    "vs Code",
    "Web Accessibility"
];
//greetings
const updateGreetings = () => {
    const heroDescription = document.querySelector(".description");
    if (!heroDescription)
        return;
    const currentHour = new Date().getHours();
    let greetingText = "Welcome!";
    if (currentHour < 12) {
        greetingText = "Good Morning! ";
    }
    else if (currentHour < 18) {
        greetingText = "Good Afternoon! ";
    }
    else {
        greetingText = "Good evening ";
    }
    heroDescription.innerHTML = `<strong>${greetingText}</strong>` + heroDescription.innerHTML;
};
document.addEventListener('DOMContentLoaded', () => {
    console.log("Typescript file successfully connected and loaded");
    updateGreetings();
});
