function saveItem(name, scientificName, description, origin, lastSeen, speciesLeft, cause, image) {
    localStorage.setItem('selectedName', name);
    localStorage.setItem('scientificName', scientificName);
    localStorage.setItem('description', description);
    localStorage.setItem('origin', origin);
    localStorage.setItem('lastSeen', lastSeen);
    localStorage.setItem('speciesLeft', speciesLeft);
    localStorage.setItem('cause', cause);
    localStorage.setItem('selectedImage', image);
}