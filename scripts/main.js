fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.image;
    // add your code to use the imageUrl here
    const foxImgElement = document.querySelector("#fox")
    foxImgElement.src = imageUrl
  })
  .catch(error => console.error(error));

  const getCat = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json()
    const catImgElement = document.querySelector("#cat")
    catImgElement.src = await convertedData[0]
  }

  getCat()