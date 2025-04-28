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

interface StrapiInfographic {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: string;
    author: string;
    category: string;
    tags: string[];
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

async function fetchInfographics(): Promise<StrapiInfographic[]> {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/infographics?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching infographics from Strapi:', error);
    return [];
  }
}

// Fetch content and export the data
const articles = await fetchArticles();
const infographics = await fetchInfographics();

export { articles, infographics };
