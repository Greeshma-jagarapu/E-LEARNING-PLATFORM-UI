const courses = [
    {
        id: 1,
        title: "HTML Basics",
        videoUrl: "https://www.youtube.com/embed/HcOc7P5BMi4",
        descriptionList: ["HTML Tags","Forms","Semantic Tags"],
        progress: 60
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        videoUrl: "https:/www.youtube.com/embed/yfoY53QXEnI",
        descriptionList: ["Selectors","Box Model","Flexbox"],
        progress: 40
    },
    {
        id: 3,
        title: "JavaScript Essentials",
        videoUrl: "https:/www.youtube.com/embed/W6NZfCO5SIk",
        descriptionList: ["Variables","Functions","DOM Manipulation"],
        progress: 20
    },
    {
        id: 4,
        title: "Web Development",
        videoUrl: "https:/www.youtube.com/embed/GxmfcnU3feo",
        descriptionList: ["HTML","CSS","JS","Frameworks","Backend","Database"],
        progress: 30
    },
    {
        id: 5,
        title: "Python for Beginners",
        videoUrl: "https:/www.youtube.com/embed/kqtD5dpn9C8",
        descriptionList: ["Conditionals","Loops","Lists","Dictionaries","File handling"],
        progress: 50
    },
    {
        id: 6,
        title: "Data Structures",
        videoUrl: "https:/www.youtube.com/embed/8hly31xKli0",
        descriptionList: ["Arrays","Strings","Collections","Trees","Graphs"],
        progress: 60
    }
]


const params = new URLSearchParams(window.location.search);
const courseId = parseInt(params.get("courseId"));
console.log(courseId);

const selectedCourse = courses.find(course => course.id == courseId);

if(!selectedCourse){
    document.body.innerHTML = "<h2>Course not found</h2>";
    throw new Error("Invalid course ID");
}

document.getElementById("course-title").innerText = `${selectedCourse.title}`;
document.getElementById("video-section").innerHTML = `<iframe src="${selectedCourse.videoUrl}" frameborder="0" allowfullscreen></iframe>`;

document.getElementById("description").innerHTML = `<h2>What You'll Learn</h2><ul>${selectedCourse.descriptionList.map(item => `<li>${item}</li>`).join("")}</ul>`;

const progressFill = document.getElementById("progress-fill");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            progressFill.style.width = `${selectedCourse.progress}%`;
            progressFill.innerText = `${selectedCourse.progress}%`;

            observer.unobserve(entry.target);
        }
    });
},{threshold: 0.5});

observer.observe(progressFill);