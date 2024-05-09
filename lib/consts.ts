export const getURL = (query: string, results: number = 20) => {
  return {
    brave: `https://search.brave.com/api/suggest?q=${query}`,
  };
};

// [
//   "forex",
//   [
//     "forex",
//     "forex factory",
//     "forex trading",
//     "forex news",
//     "forex factory calendar",
//     "forex calendar",
//     "forex exchange",
//     "forex trading app",
//   ],
// ];
