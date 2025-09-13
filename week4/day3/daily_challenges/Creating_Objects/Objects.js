// 1

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader; 
    this.time = time; 
  }

// 2

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`
    );
  }
}


// 3

const video1 = new Video("Learn JavaScript Basics", "Fatima", 300);
video1.watch();

// 4

const video2 = new Video("Cooking Tutorial", "Sara", 600);
video2.watch();

// ⭐ Bonus: Array

const videosData = [
  { title: "HTML Crash Course", uploader: "Ali", time: 200 },
  { title: "CSS Flexbox Guide", uploader: "Aya", time: 400 },
  { title: "React Intro", uploader: "Youssef", time: 900 },
  { title: "Node.js Basics", uploader: "Omar", time: 700 },
  { title: "MongoDB Tutorial", uploader: "Nadia", time: 500 },
];

// Bonus: Loop;

const videoInstances = [];

videosData.forEach((data) => {
  const vid = new Video(data.title, data.uploader, data.time);
  videoInstances.push(vid);
  vid.watch();
});
