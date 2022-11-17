<template>
  <div class="content-responsive">
    TESTE ID

    <font-awesome-icon :icon="['fas', 'envelope']"/>

    <div v-if="content.type == 'document'">
      <iframe :src="content.url" type="application/pdf" class="" width='640' height='390'/>
    </div>

    <div v-if="content.type == 'video'">
      <!-- <video width="320" height="240" controls>
        <source :src="content.url" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->

      <iframe :src="content.url" type="text/html" class="" width="640" height="390" frameborder="0" allowFullScreen/>
    </div>

    <div v-if="content.type == 'link'">

    </div>

    <div v-if="content.type == 'text'">
      <h1 class="content-title">{{content.title}}</h1>
      <p class="content-paragraph" :v-html="content.description"></p>
    </div>

    <div v-else>
      <img :src="content.url" class=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentId',
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },
  created() {

  }
}
</script>
