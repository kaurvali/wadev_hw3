import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [{
                "id": 1,
                "date": "Oct 14, 2021 15:16",
                "text": "I think it is going to rain",
                "img": require("@/assets/posts/portal.jpg"),
                "likes": 0
            },
            {
                "id": 2,
                "date": "Oct 14, 2020 14:40",
                "text": "Which weighs more, a pound of feathers or a pound of bricks?",
                "img": require("@/assets/posts/batman.jpg"),
                "likes": 0
            },
            {
                "id": 3,
                "date": "Sep 25, 2021 17:18",
                "text": "Which weighs more, a pound of feathers or a pound of bricks?",
                "likes": 0
            },
            {
                "id": 4,
                "date": "Sep 25, 2021 17:17",
                "text": "Which weighs more, a pound of feathers or a pound of bricks?",
                "likes": 0
            },
            {
                "id": 5,
                "date": "Sep 20, 2021 03:40",
                "text": "Maybe I should go to sleep?",
                "likes": 0
            },
            {
                "id": 6,
                "date": "Sep 18, 2021 18:28",
                "text": "Omg, it is so funny?",
                "img": require("@/assets/posts/pikachu.jpg"),
                "likes": 0
            },
            {
                "id": 7,
                "date": "Sep 5, 2021 09:27",
                "text": "What is this?",
                "img": require("@/assets/posts/patrick.jpg"),
                "likes": 0
            },
            {
                "id": 8,
                "date": "Sep 1, 2021 06:59",
                "text": "Oh no! School :((((",
                "img": require("@/assets/posts/school.jpg"),
                "likes": 0
            },
            {
                "id": 9,
                "date": "Aug 25, 2021 16:45",
                "text": "I love this game",
                "img": require("@/assets/posts/game.jpg"),
                "likes": 0
            },
            {
                "id": 10,
                "date": "Aug 25, 2021 00:55",
                "text": "I'm not fat, I'm easy to see!",
                "img": require("@/assets/posts/fat.jpg"),
                "likes": 0
            }
        ]
    },
    mutations: {
        IncreaseLikes: (state) => {
            state.posts.forEach((post) => {
                post.likes += 1;
            });
        },
        ResetLikes: state => {
            state.posts.forEach(post => {
                post.likes = 0;
            })
        }
    },
    modules: {},
});