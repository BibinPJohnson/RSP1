import axios from 'axios';
import { config } from 'dotenv';

interface UserData {
  // ... Define user data structure
}

export async function getUserData(): Promise<UserData | null> {
  config();
  try {
    const port = process.env.NEXT_PUBLIC_SERVER_URL;
    const url = `http://localhost:8000/api/users/me`;

    // Include any necessary authorization headers
    const headers = {
      // ... Add headers if required (e.g., Authorization: `Bearer ${token}`)
    };

    const response = await axios.get<UserData>(url, { headers });

    console.log("User datarrr:", response.data); // Log fetched user data

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);

    // Implement additional error handling logic here (e.g., show a user-friendly error message)
    return null;
  }
}

