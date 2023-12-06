// store.ts
import { create } from 'zustand';
import axios from 'axios';

interface ListData {
  // Define the shape of your data here
  id: number;
  name: string;
  // ... other properties
}

interface FullList {
  data: ListData[];
  fetchData: (token: string) => Promise<void>;
}

const useGetFullList = create<FullList>((set) => ({
  data: [],
  fetchData: async (token: string) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.get<ListData[]>(
        'https://app.greenavi.com/api/p2p/full-list',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Add other headers as needed
          },
        },
      );

      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useGetFullList;
