window.onload = function () {
    const selectedName = localStorage.getItem('selectedName');
    const scientificName = localStorage.getItem('scientificName');
    const description = localStorage.getItem('description');
    const origin = localStorage.getItem('origin');
    const lastSeen = localStorage.getItem('lastSeen');
    const speciesLeft = localStorage.getItem('speciesLeft');
    const cause = localStorage.getItem('cause');
    const selectedImage = localStorage.getItem('selectedImage');

    if (selectedName && scientificName && description && origin && lastSeen && speciesLeft && cause && selectedImage) {
        document.getElementById('selected-name').textContent = selectedName;
        document.getElementById('selected-image').src = selectedImage;
        document.getElementById('selected-image').alt = selectedName;

        const detailsHTML = `
        <strong>Scientific Name: </strong> ${scientificName}<br><br>
        <strong>Description: </strong> ${description}<br><br>
        <strong>Origin: </strong> ${origin}<br><br>
        <strong>Last Seen in Tarlac: </strong> ${lastSeen}<br><br>
        <strong>Species Left: </strong> ${speciesLeft}<br><br>
        <strong>Cause of Decline: </strong> ${cause}<br><br>`;

        document.getElementById('animal-details').innerHTML = detailsHTML;
    } else {
        document.querySelector('.description').innerHTML = `<h2>Error!!!</h2>
                <p>No data found. Please return to the <a href="Portfolio.html" style="color: #90ee90; text-decoration: underline;">Portfolio</a> page and select an animal.</p>`;
    }
}