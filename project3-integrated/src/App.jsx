import { useState } from 'react'
import './App.css'

function BestDogPage() {
  return (
    <div className="App">
      <h1>Best Dog</h1>
      <p>Welcome to the Best Dog app! Here you can find information about different dog breeds and their characteristics.</p>

      <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&w=1000&q=80" alt="Best Dog" className="dog-image" />

      <h2>About Best Dog</h2>
      <p>Best Dog is a comprehensive resource for dog lovers. We provide detailed information about various dog breeds, including their history, temperament, and care requirements. Whether you're looking for a new furry friend or just want to learn more about dogs, Best Dog has you covered!</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or suggestions, feel free to reach out to us. We would love to hear from you!</p>
      <a href="mailto:bestdog@example.com">Email Us</a>
      <p>Or watch this youtube video: </p>
      <a href="https://www.youtube.com/watch?v=V4LnorVVxfw" target="_blank">Best Dog Video</a>
    
    </div>
  );
}

function ResumePage() {
  return (
    <div className="App">
        <header>
            <h1>John Doe</h1>
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: linkedin.com/in/johndoe</p>
        </header>

        <section class="summary">
            <h2>Summary</h2>
            <p>Highly motivated and skilled software developer with a strong background in computer science. Experienced in developing web applications using modern technologies such as React, Node.js, and Express. Passionate about learning new technologies and improving my skills to create innovative solutions.</p>
        </section>

        <section>
            <h2>Objective</h2>
            <p>Seeking a software development position where I can utilize my skills and experience to contribute to the success of the company while continuing to grow and develop as a professional in the field.</p>
        </section>
        
        <section>
            <h2>Interests</h2>
            <p>Passionate about web development, open source projects, and contributing to the tech community. Enjoys learning new programming languages and frameworks.</p>
        </section>

        <section>
            <h2>Dream Job</h2>
            <p>My dream job is to work as a software developer at a leading tech company where I can collaborate with talented individuals on innovative projects that have a positive impact on users. I am particularly interested in roles that allow me to work on cutting-edge technologies and contribute to the development of products that solve real-world problems.</p>
        </section>
        
        <section>
            <h2>Education</h2>
            <h3>University of Example</h3>
            <p>Bachelor of Science in Computer Science, May 2021</p>
            <ul>
                <li>GPA: 3.8/4.0</li>
                <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems</li>
                <li>Dean's List for 6 semesters</li>
            </ul>
        </section>
        
       <section>
            <h2>Experience</h2>
            <h3>Software Developer Intern at Tech Company</h3>
            <p>June 2020 - August 2020</p>
            <ul>
                <li>Developed a web application using React and Node.js to manage customer data, resulting in a 20% increase in efficiency for the customer support team.</li>
                <li>Collaborated with a team of developers to implement new features and fix bugs, improving the overall user experience of the application.</li>
                <li>Participated in code reviews and contributed to the development of best practices for the team.</li>
            </ul>
        </section>
        
        <section>
            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: JavaScript, Python, Java</li>
                <li>Frameworks and Libraries: React, Node.js, Express</li>
                <li>Tools: Git, Docker, Visual Studio Code</li>
            </ul>
        </section>
        
        <section>
            <h2>Projects</h2>
            <h3>Personal Portfolio Website</h3>
            <p>Created a personal portfolio website using HTML, CSS, and JavaScript to showcase my projects and skills. The website features a responsive design and includes sections for my resume, project descriptions, and contact information.</p>
            <h3>Chat Application</h3>
            <p>Developed a real-time chat application using Node.js and Socket.io. The application allows users to create chat rooms, send messages, and see who is online. It also includes features such as message history and user authentication.</p>
        </section>
        
        <section>
             <h2>Clubs, Organizations and Activities</h2>
        <ul>
            <li>Member of the Computer Science Club at University of Example</li>
            <li>Volunteer at Local Coding Bootcamp</li>
            <li>Participant in Hackathons and Coding Competitions</li>
        </ul>
        <h3>Computer Science Club</h3>
        <p>As a member of the Computer Science Club, I participated in weekly meetings where we discussed various topics in computer science, shared knowledge, and worked on group projects. I also helped organize events such as coding workshops and guest speaker sessions, which provided valuable learning opportunities for club members.</p>
        <h3>Volunteer at Local Coding Bootcamp</h3>
        <p>As a volunteer at the Local Coding Bootcamp, I assisted in teaching programming concepts to beginners. I helped students with their coding exercises, provided feedback on their projects, and shared my own experiences in the tech industry to inspire and motivate them. This experience allowed me to develop my communication and mentorship skills while giving back to the community.</p>
        <h3>Hackathons and Coding Competitions</h3>
        <p>I have participated in several hackathons and coding competitions, where I collaborated with other developers to create innovative solutions to various challenges. These events have helped me improve my problem-solving skills, learn new technologies, and work effectively under pressure. I have also had the opportunity to network with other professionals in the industry and gain valuable insights into the latest trends and best practices in software development.</p>

        </section>
       
        <section class="contact-info">
            <a class="button" href="https://www.linkedin.com/in/johndoe" target="_blank">LinkedIn</a>
            <a class="button" href="mailto:jowen22@murraystate.edu">Email</a>
        </section>

    </div>
  );
}

function App() {
/*   const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) */

  const [view, setView] = useState('best-dog');

  return (
    <div>
      <nav>
        <button onClick={() => setView('best-dog')}>Best Dog</button>
        <button onClick={() => setView('resume')}>Resume</button>
      </nav>
      <main>
        {view === 'best-dog' && <BestDogPage />}
        {view === 'resume' && <ResumePage />}
      </main>
    </div>
  );
}

export default App
