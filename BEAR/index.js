const mainDiv = document.getElementById("main")
function fetchData() {
	fetch('https://api.sampleapis.com/coffee/hot')
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data);displayData(data)
        })
    .catch(function(err){console.log(err)})
}
fetchData()
function displayData (arr)
{
    console.log(arr);
    arr.forEach(function (p)
    {
        const div = document.createElement("div")
				div.classList.add("myProduct")
				const image = document.createElement("img")
        image.src = p.image
        image.alt = p.title;
        const ttile = document.createElement('h2')
        ttile.textContent = p.title;
        const description = document.createElement('p')
        description.textContent= p.description

				div.append(image,ttile,description)
				mainDiv.appendChild(div)
   })

}