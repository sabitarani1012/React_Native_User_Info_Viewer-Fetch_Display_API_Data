# React Native User Information Viewer - Fetch & Display API Data

## Overview  
This is a **React Native** application that fetches and displays user information from a public API and display in Expo Go Mobile Application. The app allows users to navigate through multiple user profiles using **Next** and **Previous** buttons.  

## Features  
- Fetch and display user details including:  
  - **Avatar** (User Image)  
  - **Basic Details** – ID, UID, Username, First Name, Last Name, Email  
  - **Employment** – Job Title, Key Skill  
  - **Address** – Street, City, State, Country, ZIP Code  
  - **Credit Card Details** – Card Number  
  - **Subscription Details** – Plan, Status, Payment Method, Term  

- **Navigation Buttons**:  
  - **Previous Button**: Navigates to the previous user's details.  
  - **Next Button**: Navigates to the next user's details.  
- Displays data for **100 users**, one user at a time.  

## Output Screenshots  
Here are some example screenshots of the app in action:  

<table>
  <tr>
    <td><img src="assets/OutputDisplay1.PNG" alt="Output Display 1" width="300"/></td>
    <td><img src="assets/OutputDisplay2.PNG" alt="Output Display 2" width="300"/></td>
  </tr>
  <tr>
    <td><img src="assets/OutputDisplay3.PNG" alt="Output Display 3" width="300"/></td>
    <td><img src="assets/OutputDisplay4.PNG" alt="Output Display 4" width="300"/></td>
  </tr>
</table>

## Output Video  

Click the link below to watch the output video:  
[📹 Watch Output Video](https://github.com/sabitarani1012/React_Native_User_Info_Viewer-Fetch_Display_API_Data/raw/main/assets/OutputVideo1.MP4)  


## API Usage
The app fetches data from [Random Data API](https://random-data-api.com/). The `size` parameter in the URL defines the number of users to fetch:
- Fetch **100 users**:  
  `https://random-data-api.com/api/users/random_user?size=100`

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **Expo CLI** (`npm install -g expo-cli`)
- **A mobile device or emulator** (Android Studio/iOS Simulator or Expo Go app on your device)

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/sabitarani1012/React_Native_User_Info_Viewer-Fetch_Display_API_Data.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React_Native_User_Info_Viewer-Fetch_Display_API_Data
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   expo start
   ```
5. Scan the QR code using **Expo Go** (Android/iOS) or run on an emulator.

## Folder Structure
```
React_Native_User_Info_Viewer/
├── components/
│   ├── NavigationButtons.js
│   ├── UserAvatar.js
│   ├── UserDetails.js
├── screens/
│   ├── HomeScreen.js
├── assets/
│   ├── images/
├── App.js
├── package.json
├── README.md
```

### Steps to Run the App
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/React_Native_User_Info_Viewer.git
   cd React_Native_User_Info_Viewer
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Application:**
   ```bash
   expo start
   ```
4. **Run on Emulator or Device:**
   - Press `i` to open in iOS Simulator (Mac only)
   - Press `a` to open in Android Emulator
   - Scan the QR code with **Expo Go** on your mobile device


## Additional Notes
- The app uses **React Native hooks** for state management.
- Handles API errors and edge cases efficiently.
- The UI is responsive and user-friendly.

---
### 📌 **If you have any questions, feel free to contact:**
---
- **Email**: [sabitarani1012@gmail.com](mailto:sabitarani1012@gmail.com)  
- **LinkedIn**: [Sabita Rani Marndi](https://www.linkedin.com/in/sabita-rani-marndi/)  
- **Instagram**: [sabita.rani_](https://www.instagram.com/sabita.rani_/?hl=en)  
