import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const STRAPI_URL = process.env.STRAPI_HOST_URL;

interface StrapiArticle {
  id: number;
  attributes: {
    title: string;
    content: string;
    author: string;
    createdAt: string;
    slug: string;
  };
}

async function fetchArticles(): Promise<StrapiArticle[]> {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching articles from Strapi:', error);
    return [];
  }
}

// Fetch articles and export the data
const articles = await fetchArticles();
export default articles;
