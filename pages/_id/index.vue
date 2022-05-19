<template>
  <div class="page-component">
    <pageHeading
    v-for="(pageheading, id) in pages"
    :key="id"
    :pageheading="pageheading.pageheading"
     />
    <Body
    v-for="(page, name) in pages"
    :key="name"
    :body="page.body"
    />
  </div>
</template>

<script>
import pageHeading from '~/components/Sections/pageHeadingSection'
import Body from '~/components/Body'
import {createClient} from '../../plugins/contentful';
const contentfulClient = createClient();

export default {
  components:{
    pageHeading,
    Body
  },
  name: 'index',
  id: '1',
  asyncData ({ env, params, $md }) {
    return contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug': params.id,
      include: 3
    }).then(page => {
      console.log('page', {page})
      return {
        pages: page.items[0],
      }
    }).catch(console.error)
  },
  }
</script>

<style scoped lang="scss">
  hr {
    margin:20px 0;
  }
  .page-component {
    margin: 0 auto;
    img {
      margin: 50px 0;
      border: 2px solid red;
      width: 100px;
      height: 100px;
    }

  }
</style>
