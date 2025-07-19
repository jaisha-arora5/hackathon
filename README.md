Mischief Managed: The Campus Marauder’s Map

A magical, real-time map inspired by the **Marauder's Map from Harry Potter**, built for our college.  
Users can join rooms (like Library, Cafeteria, etc.) and see their friends’ live footsteps across campus.  
Activated by voice ("I solemnly swear I am up to no good...").

## 📁 Project Structure
hackathon/
├── assets/ # Parchment-style college map and icons
├── index.html # Main frontend entry point
├── style.css # Magical UI styling
├── app.js # Real-time logic, voice commands
├── firebase-config.js # Firebase keys and setup
├── README.md # You’re here!

Tech Stack

| Layer        | Tools Used                        |
|-------------|-----------------------------------|
| Frontend     | HTML, CSS, JavaScript             |
| Real-Time DB | Firebase Realtime Database        |
| Voice Input  | Web Speech API                    |
| Design Tools | Adobe Photoshop/XD (map creation) |
| Optional     | Python + Streamlit (for admin UI) |


How to Clone the Repository
```bash
git clone https://github.com/jaisha-arora5/hackathon.git
cd hackathon
```

Frontend Setup
1)Open index.html in your browser directly (for simple usage).
Or use VS Code Live Server extension for local development.

Make sure you have your college_map.png in place.


Backend Setup
Go to Firebase Console
Create a new project
Enable Realtime Database (start in test mode)
Click on </> Add Firebase to your web app to get config keys

Copy and paste into firebase-config.js like this:
(js)

// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);


Environment Variables
Instead of hardcoding your Firebase config into app.js, move it to a separate file:
(arduino)
firebase-config.js
and then 
Import it before app.js in your HTML:

(html)

<script src="firebase-config.js"></script>
<script src="app.js"></script>




