import { useStore } from "vuex";

export const useEditPost = (post, emit) => {

    const store = useStore();

    const onEditPost = async () => {
        await store.dispatch("juno/editPost", post.value);
        emit("closeEditing");
    };

    return { onEditPost }
}
