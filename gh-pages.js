const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/anotherempty/svelte-observer-action.git",
    user: {
      name: "anotherempty",
      email: "anotherempty@outlook.com",
    },
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Deploy Complete!");
  }
);
