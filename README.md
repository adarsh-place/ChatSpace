<h1 align="center">ChatSpace</h1>
<p align="center">A real-time chat application with user authentication and profile management</p>

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.IO">
</div>

<h2>🚀 Features</h2>
  ✅ <strong>User Sign Up and Login</strong> with JWT authentication<br/>
  ⚡ <strong>Real-time messaging</strong> using Socket.IO<br/>
  🔒 <strong>Secure password hashing</strong> with bcrypt<br/>
  ☁️ <strong>AWS S3 integration</strong> for profile image storage<br/>
  🔄 <strong>Profile update:</strong><br/>
    <ul>
      <li>Change name</li>
      <li>Change password</li>
      <li>Update profile photo</li>
    </ul>
  🍪 <strong>Cookie-based JWT token storage</strong> for persistent login sessions<br/>
  📱 <strong>UI</strong> with React<br/>

<h2>🛠️ Tech Stack</h2>
<table>
  <tr>
    <th>Category</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>React, Context API, Tailwind CSS </td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>Node.js, Express.js</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>MongoDB</td>
  </tr>
  <tr>
    <td><strong>Real-time</strong></td>
    <td>Socket.IO</td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>
      <ul>
        <li>JWT for issuing and verifying tokens</li>
        <li>Cookies to store tokens securely</li>
        <li>bcrypt for hashing passwords</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Image Storage</strong></td>
    <td>AWS S3</td>
  </tr>
</table>

<h2>⚙️ How It Works</h2>
<div>
  <h3>User Authentication</h3>
  <ul>
    <li>Sign-up creates a hashed password with bcrypt.</li>
    <li>JWT token is issued on login and stored in a cookie.</li>
    <li>Protected routes validate the token.</li>
  </ul>

  <h3>Real-time Chat</h3>
  <ul>
    <li>Socket.IO enables real-time communication between users.</li>
    <li>Messages are sent and received instantly.</li>
  </ul>

  <h3>Profile Management</h3>
  <ul>
    <li>Users can update their display name.</li>
    <li>Users can change their password securely.</li>
    <li>Profile photos are uploaded to AWS S3 and updated in the user's profile.</li>
  </ul>

  <h3>Image Storage</h3>
  <ul>
    <li>Images are uploaded to AWS S3 buckets.</li>
  </ul>
</div>

<!-- <h2>📸 Screenshots</h2>
 <p>(Add your own screenshots here)</p> -->

 <h2>🌐 Live Demo</h2>
<p>The application is hosted on Render and can be accessed at:</p>
<div>
  <span>
    LIVE : 
  </span>
  <a href="https://chatspace-uynx.onrender.com/" target="_blank">
    https://chatspace-uynx.onrender.com/
  </a>
</div>
<p>Note: The backend services might take a few moments to spin up if they've been idle.</p>

<h2>🧑‍💻 Getting Started</h2>
<h3>Prerequisites</h3>
<ul>
  <li>Node.js</li>
  <li>MongoDB</li>
  <li>AWS account with S3 bucket</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>
    <strong>Clone the repo:</strong>
    <div>
      git clone https://github.com/your-username/chatspace.git<br>
      cd chatspace
    </div>
  </li>
  <li>
    <strong>Install server dependencies:</strong>
    <div >
      cd backend<br>
      npm install
    </div>
  </li>
  <li>
    <strong>Install client dependencies:</strong>
    <div>
      cd ../frontend<br>
      npm install
    </div>
  </li>
  <li>
    <strong>Set up your environment variables:</strong>
    <ul>
      <li>Port</li>
      <li>MongoDB URI</li>
      <li>JWT Secret</li>
      <li>AWS S3 credentials</li>
    </ul>
  </li>
  <li>
    <strong>Start the development servers:</strong><br>
    <strong>Backend:</strong>
    <div>
      npm run dev
    </div>
    <strong>Frontend:</strong>
    <div>
      npm run dev
    </div>
  </li>
</ol>

<h2>🔐 Environment Variables</h2>
<p><strong>Example .env (Backend):</strong></p>
<div>
  PORT<br/>
  MONGODB_URI<br/>
  JWT_TOKEN<br/>
  AWS_S3_BUCKET_NAME<br/>
  AWS_REGION<br/>
  AWS_S3_ACCESS_KEY_ID<br/>
  AWS_S3_SECRET_ACCESS_KEY
</div>

<h2>🙌 What I Learned</h2>
<ul>
  <li>Full-stack development with the MERN stack</li>
  <li>Implementing real-time features using Socket.IO</li>
  <li>Using JWT and cookies for authentication</li>
  <li>Secure password hashing with bcrypt</li>
  <li>AWS S3 integration for storing and serving user-uploaded images</li>
  <li>Managing user sessions with cookies and tokens</li>
</ul>

<!-- <h2>✨ Acknowledgments</h2>
<ul>
  <li>Socket.IO Docs</li>
  <li>AWS S3 Docs</li>
  <li>MERN Stack Guides</li>
</ul> -->
