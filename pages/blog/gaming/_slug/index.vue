<template>
  <div class="post-wrapper">
    <blogPostSlug :post="post" which="gaming" :postContent="postContent"></blogPostSlug>
  </div>
</template>

<script>
export default {
  layout: 'slug',
  head() {
    let post = this.post;
    return {
      title: post.title,
      link: [{ rel: 'canonical', href: `https://joeyg.me/blog/gaming/${post.slug}` }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: post.meta.description
        },
        {
          hid: `keywords`,
          name: 'keywords',
          content: post.meta.keywords
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: post.intro
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: post.image
            ? post.image
            : 'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552515487/gaming/march_2019_collection.jpg'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: post.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: post.intro
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: post.image
            ? post.image
            : 'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552515487/gaming/march_2019_collection.jpg'
        }
      ]
    };
  },
  fetch({ store, params }) {
    store.dispatch('getPosts');
    store.dispatch('getPostWithSlug', { slug: params.slug, which: 'gaming' });
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`~/content/posts/gaming/${post.id}.md`);
    }
  }
};
</script>
