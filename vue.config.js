module.exports = {
  devServer: {
    proxy: "https://thetetiresidence.com/articles/wp-json/wp/v2",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": null,
      "X-Requested-With": null,
      "Content-Type": "text/html",
    },
  },
};
