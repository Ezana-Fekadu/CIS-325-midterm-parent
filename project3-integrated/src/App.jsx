import { useState } from 'react'
import './App.css'

function BestDogPage({ onViewResume }) {
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
      <a href="https://www.youtube.com/watch?v=V4LnorVVxfw" target="_blank">Best Dog Video</a><br></br>
      <button onClick={onViewResume}>View Resume</button>

    </div>
  );
}

function ResumePage() {
  return (
    <div className="App">
      <header>
        <h1>Ezana Fekadu</h1>
        <p>Email: efekadu@murraystate.edu</p>
        <p>Phone: (703) 861-8851</p>
        <p>LinkedIn: linkedin.com/in/ezana-fekadu</p>
      </header>

      <section class="summary">
        <h2>Summary</h2>
        <p>Highly motivated and aspiring software developer with a strong background in computer science. Experienced in developing web applications using modern technologies such as React, Node.js, and Express. Passionate about learning new technologies and improving my skills to create innovative solutions.</p>
      </section>

      <section>
        <h2>Objective</h2>
        <p>Seeking a software development position where I can utilize my skills and experience to contribute to the success of the company while continuing to grow and develop as a professional in the field.</p>
      </section>

      <section>
        <h2>Interests</h2>
        <p>Passionate about web & webapp development, Cybersecurity, open source projects, and contributing to the tech community. Enjoys learning new programming languages and frameworks.</p>
      </section>

      <section>
        <h2>Dream Job</h2>
        <p>My dream job is to work as a software developer at a leading tech company where I can collaborate with talented individuals on innovative projects that have a positive impact on users. I am particularly interested in roles that allow me to work on cutting-edge technologies and contribute to the development of products that solve real-world problems.</p>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Murray State University</h3>
        <p>Bachelor of Science in Computer Science, May 2026</p>
        <ul>
          <li>GPA: 3.54/4.0</li>
          <li>Relevant Coursework: Data Structures, Algorithms, Advanced Database Management, Gen AI, Intro to AI, Intro to ML</li>
          <li>Dean's List for 5 semesters</li>
        </ul>
      </section>

      {/* <section>
        <h2>Experience</h2>
        <h3>Software Developer Intern at Tech Company</h3>
        <p>June 2020 - August 2020</p>
        <ul>
          <li>Developed a web application using React and Node.js to manage customer data, resulting in a 20% increase in efficiency for the customer support team.</li>
          <li>Collaborated with a team of developers to implement new features and fix bugs, improving the overall user experience of the application.</li>
          <li>Participated in code reviews and contributed to the development of best practices for the team.</li>
        </ul>
      </section> */}

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
        <h3>Personal Portfolio Website (In progress)</h3>
        <p>Created a personal portfolio website using HTML, CSS, and JavaScript to showcase my projects and skills. The website features a responsive design and includes sections for my resume, project descriptions, and contact information.</p>
        <h3>Task Management App</h3>
        <p>Built a task management application using React and Express. The app allows users to create, edit, and delete tasks, as well as mark them as complete. It also includes a backend API for storing tasks in a SQLite3 Database.</p>

        <h3>Gen AI Project</h3>
        <p>As part of my coursework in Gen AI, I developed a project that utilizes generative AI techniques to analyze/ detect suicidal tendencies in text data. The project involved training a machine learning model on a dataset of text samples labeled for suicidal tendencies, and then using the model to predict the likelihood of suicidal tendencies in new text inputs. This project allowed me to gain hands-on experience with generative AI techniques and their applications in real-world scenarios.</p>
        <p>Note: The Gen AI project is a work in progress, and I am currently refining the model and exploring additional features to enhance its accuracy and usability.</p>

        <h3>Intro to AI Project</h3>
        <p>In my Intro to AI course, I worked on a project that involved developing a model that does sentiment analysis on text data. The project involved preprocessing the text data, training a machine learning model on a labeled dataset, and then using the model to predict the sentiment of new text inputs. This project provided me with valuable experience in natural language processing and machine learning techniques.</p>
        <p>Note: The Intro to AI project is also a work in progress, and I am currently working on improving the model's performance and exploring additional features to enhance its capabilities, potentially expanding to include more advanced NLP techniques.</p>

        <h3>Computer Security Project</h3>
        <p>In my Computer Security course, I did a research project on network security and cryptography. The project involved analyzing encrypted network traffic and seeing if we can identify the malicious ones without decrypting them. This project helped me understand the principles of network security and cryptography, and how to apply them in real-world scenarios.</p>

        <h3>Advanced Wireless Communication Project</h3>
        <p>In my Advanced Wireless Communication course, I lead a software team for a researh project we did that was funded by NASA-KY to analyse networks and create a 3d heat map and eventually develop into a mesh network using drones and various network devices. This project involved extensive research and development of software tools for network analysis and visualization.</p>

        <p>Note: The projects mentioned above are just a few examples of the work I have done. I have also worked on several other projects, both independently and as part of coursework, that demonstrate my skills and experience in software development and related areas.</p>
        <h3>If you want to see/ hear about more of my projects you can contact me</h3>
      </section>

      <section>
        <h2>Clubs, Organizations and Activities</h2>
        <ul>
          <li>President of the Computer Science Club at Murray State University</li>
          <li>Volunteered as Computer Science Tutor</li>
          <li>Participant in CTFs, Hackathons and Coding Competitions</li>
        </ul>
        <h3>Computer Science Club</h3>
        <p>As a member of the Computer Science Club, I participated in weekly meetings where we discussed various topics in computer science, shared knowledge, and worked on group projects. I also helped organize events such as coding workshops and guest speaker sessions, which provided valuable learning opportunities for club members.</p>
        <h3>Volunteered as Computer Science Tutor</h3>
        <p>As a volunteer at the Local Coding Bootcamp, I assisted in teaching programming concepts to beginners. I helped students with their coding exercises, provided feedback on their projects, and shared my own experiences in the tech industry to inspire and motivate them. This experience allowed me to develop my communication and mentorship skills while giving back to the community.</p>
        <h3>CTFs, Hackathons and Coding Competitions</h3>
        <p>I have participated in several hackathons and coding competitions, where I collaborated with other developers to create innovative solutions to various challenges. These events have helped me improve my problem-solving skills, learn new technologies, and work effectively under pressure. I have also had the opportunity to network with other professionals in the industry and gain valuable insights into the latest trends and best practices in software development.</p>

      </section>

      <section class="contact-info">
        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/ezana-fekadu'}>LinkedIn</button>
        {/* TODO: Update the email address to the correct one in the future */}
        <button onClick={() => window.location.href = 'mailto:jowen22@murraystate.edu'}>Email</button>
      </section>

    </div>
  );
}

function App() {
  const [view, setView] = useState('best-dog');

  return (
    <div>
      <nav>
        <button onClick={() => setView('best-dog')}>Best Dog</button>
        <button onClick={() => setView('resume')}>Resume</button>
      </nav>
      <main>
        {view === 'best-dog' && <BestDogPage onViewResume={() => setView('resume')} />}
        {view === 'resume' && <ResumePage />}
      </main>
    </div>
  );
}

export default App
