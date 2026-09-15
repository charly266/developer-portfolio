const devName: string = "Igihozo Charlene";
const devRole: string = "Frontend Web Developer";
const devEmail: string = "igihozocharlene9@gmail.com";
const devLocation: string = "Kigali, Rwanda";
const devStartYear: number = 2024;
const devEndYear: number = 2026;
const devTotalTechnicalSkills: number = 7;

let isAvailableForHire: boolean = true;
const mySkillsList: string[] = [
    "HTML5/Semantics Markup",
    "CSS3/Flexbox & Grid",
    "Javascript",
    "Responsive Web Design",
    "Git& Github",
    "vs Code",
    "Web Accessibility"
];

//greetings
const updateGreetings = (): void => {
    const heroDescription = document.querySelector(".description");
    if (!heroDescription) return;
    
    const currentHour: number = new Date().getHours();
    let greetingText: string = "Welcome!";

    if (currentHour < 12) {
        greetingText = "Good Morning! ";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon! ";
    } else {
        greetingText = "Good evening ";
    }

    heroDescription.innerHTML = `<strong>${greetingText}</strong>` + heroDescription.innerHTML;
}; 




document.addEventListener('DOMContentLoaded', (): void => {
    console.log("Typescript file successfully connected and loaded");
    updateGreetings();
};