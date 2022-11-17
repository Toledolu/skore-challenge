<template>
  
  <div class="wrapper">
    <div class="items card flex">
      <NuxtLink v-for="item in contents" :key="item.id" :to="{ name: 'content', params: { id: item.id } }" :title="item.title" class="col-5">
        <div class="item justify-center">
          <div class="item-head">
            <!-- <img v-if="item.type == 'video'" :src="$getThumbnailFromYouTube($transformStringIntoURL(item.url))"/> -->
            <div v-if="item.type == 'video'" 
              class="thumbnail"
              :style="'background-image: url(' + $getThumbnailFromYouTube($transformStringIntoURL(item.url)) + ')'"
            ></div>

            <div v-if="item.type == 'link'"
              class="fallback-img"
              :style="'background-image: url(/images/nuxtjs_logo.png)'"
            >
            </div>

            <div v-if="item.type == 'document'" class="fallback-img" 
              :style="'background-image: url(/images/docs_logo.png)'">
            </div>

            <div v-else class="fallback-img" :style="'background-image: url(' + item.url + ')'">

            </div>

            <!-- <i class="fa-solid fa-circle-play"></i> -->
            <!-- <font-awesome-icon :icon="['fas', 'circle-play']"/> -->

          </div>
          <div class="item-body">
            <h2 class="item-title">{{ item.title.length > 50 ? truncateString(item.title, 50) : item.title }}</h2>
            <!-- <p class="item-author">{{ item.author }}</p> -->
            <p>{{ $dateToHuman($timestampToDate(item.created_at)) }}</p>
            <div class="item-actions">
              <!-- <font-awesome-icon :icon="['fab', 'heart']"/>
              <font-awesome-icon :icon="['fab', 'eye']"/>
              <font-awesome-icon :icon="['fab', 'bookmark']"/> -->
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import contentGQL from "~/apollo/queries/fetchContent.gql";

export default {
  name: 'ContentId',
  data() {
    return {
      contents: null
    }
  },
  mounted() {
  },
  apollo: {
    contents: {
      prefetch: true,
      query: contentGQL
    }
  },
  methods: {
    truncateString(string, length = 30) {
      return string.substring(0, length) + '...';
    },

  }
}
</script>
