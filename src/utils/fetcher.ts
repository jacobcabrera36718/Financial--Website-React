export const fetcher = async (url: string) => {
    try {
      const response = await fetch(url);
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
  
      // Parse JSON data
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  