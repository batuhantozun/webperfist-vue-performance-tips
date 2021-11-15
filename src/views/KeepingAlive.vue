<template>
  <div class="keeping-alive">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>
  <keep-alive>
    <component :is="currentTabComponent" class="tab"></component>
  </keep-alive>
</template>

<script>
import Home from "../components/tabs/Home.vue";
import Archive from "../components/tabs/Archive.vue";
import Post from "../components/tabs/Post.vue";

export default {
  components: { Home, Archive, Post },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Post", "Archive"],
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase();
    },
  },
};
</script>

<style scoped>
.keeping-alive {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
