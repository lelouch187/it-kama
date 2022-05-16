const state = {
    profilePage:{
        posts:[{id: 1,message:'Hello guys', likesCount: 2}, {id: 2,message:"it\'s my first Post", likesCount: 15}],

    },
    dialogsPage:{
        messages:[{id: 1, message:'Hi'},{id: 2, message:'How is you it-kamasutra?'}, {id: 3, message:'Yo'}, {id: 4, message:'Yo'}, {id: 5, message:'Yo'},],
        dialogs:[{id: 1, name:'Dimych'},{id: 2, name:'Andrey'}, {id: 3, name:'Sasha'}, {id: 4, name:'Viktor'}, {id: 5, name:'Valera'},],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 2,
        message:postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
}

export default state;