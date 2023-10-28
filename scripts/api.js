// Relist API Wrapper

const api = {
  url: "https://revoltbots.org/api/v2",
  run: (p, cb) => {
    fetch(`${api.url}/${p}`)
      .then((res) => res.json())
      .then((data) => {
        cb(data);
      });
  },
};
