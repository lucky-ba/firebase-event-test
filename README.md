
# 🔄 Firebase to MongoDB Sync

This project listens to events from Firebase Realtime Database and syncs new user data to a MongoDB database.

## 🚀 Features

Whenever a new user is added under the `/accounts` path in Firebase Realtime Database, the data (`name` and `email`) is automatically inserted as a document into a MongoDB collection.

---

## 📁 Project Structure
Diagram Link: https://drive.google.com/file/d/17_A3pY66cSNSYY7NtDTethvh7mt-L06n/view?usp=sharing
```
📦 firebase-mongodb-sync
├── data
├── infra
├── domain
├── main
```

---

## ⚙️ Prerequisites

- Node.js installed
- Firebase project with Realtime Database enabled
- Firebase Admin SDK key (JSON file)
- MongoDB (Atlas or local)

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/firebase-mongodb-sync.git
   cd firebase-event-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following environment variables:

   ```
   FIREBASE_DB_URL=https://your-project.firebaseio.com
   MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/databaseName?retryWrites=true&w=majority
   ```

4. Add the `firebaseServiceAccountKey.json` file downloaded from the Firebase Console.

---

## ▶️ Running the Project

```bash
npm run build
npm run start
```

You should see:

```
Listening for new user events from Firebase...
```

---

## ➕ Triggering the Event

Add a new user manually under the `/accounts` path in Realtime Database, via Firebase Console or code:

```json
/users
  |- u12345
      |- name: "John Smith"
      |- email: "john@example.com"
```

Or via `curl`:

```bash
curl -X POST -d '{"name": "Anna Costa", "email": "anna@example.com"}' "https://YOUR-PROJECT.firebaseio.com/users.json"
```

---

## 🛠 Technologies Used

- Firebase Admin SDK
- MongoDB
- Node

---

## 📄 License

This project is licensed under the MIT License.
