# Carpooling Ride-Sharing Solution

## 🚀 Introduction
The **Carpooling Ride-Sharing Solution** is a web-based platform that connects drivers and riders for secure and efficient ride-sharing. The system helps reduce travel costs, traffic congestion, and carbon emissions while ensuring a smooth and user-friendly experience.
![PHOTO-2025-03-23-11-33-31](https://github.com/user-attachments/assets/24684fef-b471-4665-a805-ba390ed76e1e)
## 🎯 Features



### **1. Ride Pool Creation & Joining**
- **For Drivers:**
  - Create ride pools by providing pickup & drop locations, time, seats, vehicle details, and preferences.
  - Approve or reject rider requests.
- **For Riders:**
  - Search and filter available ride pools.
  - Send a request to join a ride and receive trip details upon approval.
![image](https://github.com/user-attachments/assets/9aafcb7d-7fa1-49c5-bbf1-369e205bfd37)
![image](https://github.com/user-attachments/assets/8e9d70d6-6587-4776-a902-7da120b5cafb)
![image](https://github.com/user-attachments/assets/84a8e351-80b3-4006-8fab-4b70d33f1d90)
<img width="242" alt="Screenshot 2025-03-23 at 11 14 09 AM" src="https://github.com/user-attachments/assets/62f7ee89-7338-4436-bb63-1cd04840ee6b" />

<img width="234" alt="Screenshot 2025-03-23 at 11 14 28 AM" src="https://github.com/user-attachments/assets/1d1a1d60-8671-4172-a3c7-946ce72ebdd4" />

### **2. Intelligent Ride Matching**
- Matches users based on proximity, route similarity, timing, and preferences.
- Displays rides ranked by match percentage.

### **3. Route Matching Percentage**
- Calculates how closely a ride aligns with a rider's route.
- Rides are prioritized based on a percentage score.

## 🛠️ Technology Stack
### **Frontend:**
- React.js + Vite
- Tailwind CSS

### **Backend:**
- Node.js
- Express.js

### **Database:**
- MongoDB (NoSQL database)

### **APIs Used:**
- **Google Maps API** for route matching and fare calculation.
- **Socket.io** for real-time ride request notifications.
- **Postman** for API testing.

## 🧪 API Testing & Validation
- **Postman:** Used for testing ride creation, authentication, and route matching endpoints.
- **Socket.io:** Implemented for real-time ride request notifications.
- **Google Maps API:** Verified route matching and fare calculation accuracy.

## 💡 Challenges & Solutions
| **Challenge** | **Solution** |
|--------------|-------------|
| Route matching inaccuracy | Used Google Maps API for precise distance calculations |
| Riders not receiving real-time updates | Implemented WebSockets with Socket.io |
| Slow API response | Optimized database queries and implemented caching |

## 🔥 Future Enhancements
- **AI-based Ride Matching:** Use machine learning for better route predictions.
- **Dynamic Pricing:** Implement surge pricing based on demand.
- **Ride History & Ratings:** Allow users to rate trips and maintain trip history.
- **Multilingual Support:** Add language options for broader accessibility.

## 📜 Installation & Setup
### **1. Clone the Repository:**
```sh
 git clone https://github.com/your-username/carpooling-ride-sharing.git
```

### **2. Navigate to the Project Directory:**
```sh
 cd carpooling-ride-sharing
```

### **3. Install Dependencies:**
```sh
 npm install
```

### **4. Setup Environment Variables:**
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### **5. Start the Backend Server:**
```sh
 npm run server
```

### **6. Start the Frontend Application:**
```sh
 npm run dev
```

## 📌 Contributing
Contributions are welcome! If you'd like to improve the project, please fork the repository and submit a pull request.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
### 🚀 Enjoy safe, secure, and efficient ride-sharing with Carpooling Ride-Sharing Solution!
