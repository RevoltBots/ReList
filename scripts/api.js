// Relist API Wrapper

const api = {
  url: "https://revbots.kyra.tk",
  run: (p, cb) => {
    fetch(`${api.url}/${p}`)
      .then((res) => res.json())
      .then((data) => {
        cb(data);
      });
  },
};
