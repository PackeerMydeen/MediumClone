export default {
    createBlog(state,payload){
        let posts=[...state.posts]
        posts.push(payload)
        state.posts=posts
    },
    updateBlog(state,payload){
        let posts=[...state.posts]
        let index=posts.findIndex(i=>i.id===Number(payload.id))
        console.log(index)
        posts[index]=payload;
        state.posts=posts
    },
    deletePost(state,id){
        state.posts=state.posts.filter(el=>el.id!==Number(id))
    }
}