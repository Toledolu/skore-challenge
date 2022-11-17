export default (context, inject) => {
  inject('generateRandomString', () => {
    return Math.random().toString(36).slice(2, 7);
  });

  inject('timestampToDate', (timestamp) => {
    return new Date(timestamp);
  });

  inject('dateToHuman', (date) => {
    return `
      ${date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()}/${date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)}/${date.getFullYear()}
    `;
  });

  // inject('addLeadingZero', (int) => {
  //   return int >= 10 ? int : '0' + int;
  // });

  inject('transformStringIntoURL', (string) => {
    console.log('URL', string);
    return new URL(string).searchParams.get('v');
  });

  inject('getThumbnailFromYouTube', (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  });
}