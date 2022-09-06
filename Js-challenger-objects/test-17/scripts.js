const arrayObject = (arr, str) => {
    arr.forEach((item) => item.continent = str)
    return arr
 };

console.log(
  arrayObject(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
