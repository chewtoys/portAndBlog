<template>
  <section class="blog-header" :class="which">
    <div class="blog-header__written-by">
      <img
        src="~/assets/images/me/me_headshot.png"
        class="headshot"
        :class="{'mobile': $vuetify.breakpoint.smAndDown && isMounted}"
        alt="professional headshot of Joey Gauthier"
      >
      <small>Joey Gauthier</small>
      <small>{{post.created_at}}</small>
    </div>
    <div class="blog-header__title-nav">
      <div class="blog-header__title-social">
        <h1 v-if="$vuetify.breakpoint.mdAndUp && isMounted">{{post.title}}</h1>
        <h2 v-if="$vuetify.breakpoint.smAndDown && isMounted">{{post.title}}</h2>
        <p
          class="blog-header__title-social--tag hidden-sm-and-down"
          v-if="post.tag_line"
        >{{post.tag_line}}</p>
      </div>
      <div class="blog-header__title-nav--nav">
        <nuxt-link class="nav-button" :to="`/blog/${which}`">
          <div>&#60;- {{which.toUpperCase()}} BLOG LIST</div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogHeader',
  props: ['post', 'which'],
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
@import '~/assets/style/animations.scss';
.blog-header {
  // padding: 2rem 1rem;
  border-bottom: 2px solid $pacman-purple;
  display: flex;
  justify-content: space-around;
  &.gaming {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog.gaming/early_2019_collection.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/gaming/early_2019_collection.jpg') repeat;
    background-position: center;
  }
  &.coding {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/coding/programming.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/coding/programming.jpg') repeat;
    background-position: center;
  }
  .blog-header__written-by {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    font-style: italic;
    color: $light;
    margin: 2rem 1rem;
    opacity: 0;
    animation: 1s ease 1s normal forwards 1 hideShow;
    img.headshot {
      max-width: 10rem;
      width: auto;
      height: auto;
      &.mobile {
        max-width: 7rem;
      }
    }
  }
  .blog-header__title-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .blog-header__title-social {
      opacity: 0;
      animation: 1s ease 1s normal forwards 1 hideShow;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      h1,
      h2 {
        text-align: center;
      }
      h1 {
        font-size: 3rem;
      }
      .blog-header__title-social--tag {
        opacity: 0;
        animation: 1s ease 1.5s normal forwards 1 hideShow;
        color: $light;
        font-style: italic;
        text-align: center;
      }
    }
    .blog-header__title-nav--nav {
      opacity: 0;
      animation: 1s ease 2s normal forwards 1 hideShow;
      display: flex;
      justify-content: center;
      .nav-button {
        background-color: $pacman-purple;
        padding: 0.5rem;
        color: $light;
        text-decoration: none;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        transition: all 0.4s ease-in-out;
        div {
          font-family: $game-font;
          font-size: 0.75rem;
        }
        &:hover {
          background-color: $light;
          div {
            color: $pacman-purple;
          }
        }
      }
    }
  }
}
</style>
