module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/assets/sccs/styles.scss";
            `,
      },
    },
  },

  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    port: 8081,
  },
  pluginOptions: {
    i18n: {
      // locale: 'en',
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
