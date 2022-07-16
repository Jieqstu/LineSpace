<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class = "img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/108045_lg_48c59e066d.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullname }}</div>
                    <div class="follower">Follower: {{ user.followerscount }}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-primary btn-sm">Follow</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-primary btn-sm">Unfollow</button>
                </div>
            </div>            
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';

export default {
    name: "MomentsInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        let fullname = computed(() => props.user.lastname + ' ' + props.user.firstname);

        const follow = () => {
            context.emit("follow");
        };

        const unfollow = () => {
            context.emit("unfollow");
        };

        return {
            fullname,
            follow,
            unfollow,
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.follower {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>