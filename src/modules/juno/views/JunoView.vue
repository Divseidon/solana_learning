
<template>
  <NewPost />
  <ListPost />
</template>

<script>
import NewPost from "../components/NewPost.vue";
import ListPost from "@/modules/juno/components/ListPost.vue";

import { onBeforeUpdate } from "vue";
import { useStore } from "vuex";

export default {
  components: { ListPost, NewPost },
  setup() {
    const store = useStore();

    const loadPost = async () => {
      await store.dispatch("juno/loadPost", {});
    };

    loadPost();

    onBeforeUpdate(() => {
      store.dispatch("juno/loadPost", {});
    });
  },
};
</script>
