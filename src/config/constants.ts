/**
 * Constants object containing backend-related configurations.
 * We can add UI assets here as a centralized place
 */
export const constants = {
  backend: {
    // Base URL for backend API, 
    // TODO: We can get this URL from .env file
    baseUrl: 'https://api.escuelajs.co/api/v1',

    // Endpoints for different API routes
    endpoints: {
      getProducts: '/products', // Endpoint for fetching products
    },

    // Query strings for API requests
    queryStrings: {
      title: '?title=', // Query string for filtering products by title
    }
  }
}