import axios from 'axios';
import { config } from 'dotenv';

interface Product {
  id: number;
  heading: string;
  content: string;
  updatedAt: string | null;
  createdAt: string | null;
  globalType: string;
}

export async function getProducts(): Promise<Product> {
  config();
  try {
    const port = process.env.NEXT_PUBLIC_SERVER_URL;
    const url = `${port}/api/globals/loginContent`;
    const response = await axios.get<Product>(url);
    console.log("data123456", response.data); // Log the fetched data to the server-side console
    return response.data; // Return the single product data
  } catch (error) {
    console.error(error); // Log any errors to the server-side console
    throw error; // Throw an error to ensure the caller handles it appropriately
  }
}
