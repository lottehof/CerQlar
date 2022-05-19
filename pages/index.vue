<template>
  <div class="container">
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
import {createClient} from '../plugins/contentful';
const contentfulClient = createClient();

export default {
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
   components: {
     pageHeading,
     Body,
   },
}
</script>

<style>

</style>
