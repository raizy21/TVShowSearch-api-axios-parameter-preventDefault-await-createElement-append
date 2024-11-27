//https://www.tvmaze.com/api
//console.dir(from) to see the output
const form = document.querySelector("#searchForm"); //select the form

//listener for form submit
form.addEventListener("submit", async function (e) {
  e.preventDefault(); //prevent for submit

  const searchTerm = form.elements.query.value; //extract input value
  const config = { params: { q: searchTerm } }; //for para q= for axios promises
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config); //fetch url with axios with parameter q
  makeImages(res.data); //extract the img
  form.elements.query.value = ""; //clear the input after submit
});

//loop through shows for extracting the img
const makeImages = (shows) => {
  for (let result of shows) {
    //loop through array of shows
    if (result.show.image) {
      //if have a img
      const img = document.createElement("IMG"); //create a new img element
      img.src = result.show.image.medium; //image from api
      document.body.append(img); //append img to body
    }
  }
};
