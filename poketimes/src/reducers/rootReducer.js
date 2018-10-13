const initState ={
    posts: [
        {id: 1, title: 'Squirtle Laid an Egg', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, cupiditate consequuntur expedita, provident sequi velit hic perferendis aut quas quasi consectetur facere earum. Unde blanditiis aliquam veniam voluptatem corrupti distinctio.'},
        {id: 2, title: 'Charmander Laid an Egg', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, cupiditate consequuntur expedita, provident sequi velit hic perferendis aut quas quasi consectetur facere earum. Unde blanditiis aliquam veniam voluptatem corrupti distinctio.'},
        {id: 3, title: 'a Heliz Fossil was found', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, cupiditate consequuntur expedita, provident sequi velit hic perferendis aut quas quasi consectetur facere earum. Unde blanditiis aliquam veniam voluptatem corrupti distinctio.'},
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return post.id != action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;