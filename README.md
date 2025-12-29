EduKenya – High School Revision Platform
�
Project Overview
EduKenya is a web-based revision platform for high school students in Kenya. It provides Mathematics, Physics, English, Kiswahili, Biology, Chemistry, Geography, and History questions.
Students can:
Login and track their progress
Unlock subject content for 2, 12, or 24 hours using M-Pesa Daraja payments
Answer questions and have their performance saved
Access all subjects from a central dashboard
This project combines frontend HTML/CSS/JS with Node.js backend for Daraja payments.
Features
Tiered Access
2 Hours – KES 30
12 Hours – KES 50
24 Hours – KES 100
Real M-Pesa Payments via Daraja API
Performance Tracking
Students’ answers are saved in localStorage (upgradeable to database)
Full Dashboard
Shows all subjects and performance summary
Subjects Included
Mathematics, Physics, English, Kiswahili, Biology, Chemistry, Geography, History
Project Structure
Copy code

EduKenya/
├── index.html
├── login.html
├── dashboard.html
├── css/
│   └── style.css
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── access.js
│   └── performance.js
├── subjects/
│   ├── maths.html
│   ├── physics.html
│   ├── english.html
│   ├── kiswahili.html
│   ├── biology.html
│   ├── chemistry.html
│   ├── geography.html
│   └── history.html
├── backend/
│   ├── server.js
│   └── mpesa.js
└── .env.example
Installation & Setup
1. Clone the repository
Copy code
Bash
git clone https://github.com/yourusername/edukenya.git
cd edukenya
2. Backend Setup (Node.js + Daraja)
Install dependencies:
Copy code
Bash
cd backend
npm install express axios body-parser dotenv
Create .env file:
Copy code
Text
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
SHORTCODE=174379
PASSKEY=your_passkey
CALLBACK_URL=https://yourdomain.com/callback
Use Daraja sandbox credentials for testing first.
Start the backend server:
Copy code
Bash
node server.js
Server runs on http://localhost:3000
Handles STK push payments and callbacks
3. Frontend Setup
Go back to root folder:
Copy code
Bash
cd ..
Open login.html in browser to start
Use dashboard.html to select subjects and see performance
When unlocking a subject:
Enter your phone number
Receive M-Pesa payment prompt
After payment, the content is unlocked
Daraja Sandbox
Use Safaricom Daraja sandbox to get credentials
Test STK push payments without using real money
Check callbacks in backend console
Performance Tracking
Uses localStorage to store student answers per subject
Dashboard shows number of answers saved per subject
Upgradeable to MongoDB/MySQL for real-time tracking
License
This project is licensed under the MIT License – free to use and modify.
Contact
Developer: Daniel Kagotho
WhatsApp / M-Pesa: 0743731815
GitHub:
