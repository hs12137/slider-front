<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "GetItemTest",
  data() {
    return {
      loading: true,
      items: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/items');
        this.items = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>
