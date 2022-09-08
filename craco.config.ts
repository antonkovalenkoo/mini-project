export default {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/_index.scss";          
        `,
      },
    },
  },
}
