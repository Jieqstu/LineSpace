<template>
    <ContentBase>
        <div class="row">
          <div class="col-3">
            <MomentsInfo @follow="follow" @unfollow="unfollow" :user="user" />
            <MomentsWrite @post_a_post="post_a_post" />
          </div>
          <div class="col-9">
            <MomentsPosts :posts="posts" />
          </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import MomentsInfo from '../components/MomentsInfo';
import MomentsPosts from '../components/MomentsPosts';
import MomentsWrite from '../components/MomentsWrite';
import { reactive } from 'vue';

export default {
  name: 'Moments',
  components: {
    ContentBase,
    MomentsInfo,
    MomentsPosts,
    MomentsWrite    
  },
  setup() {
    const user = reactive({
      id: 33,
      username: "jieqiu",
      lastname: "Jie",
      firstname: "Qiu",
      followerscount: 0,
      is_followed: false,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "It's Friday, yeah!",
        },
        {
          id: 2,
          userId: 1,
          content: "It's Saturday, yeah!",
        },
        {
          id: 3,
          userId: 1,
          content: "It's Sunday, yeah!",
        },
      ]
    })

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerscount ++;
    };

    const unfollow = () => {  
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerscount --;
    }

    const post_a_post = (content) => {
      posts.count ++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      })
    }

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    }
  }
}
</script>

<style scoped>
</style>
