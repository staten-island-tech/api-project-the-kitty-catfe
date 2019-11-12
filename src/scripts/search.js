

const insertHTML = {
    document.getElementById("searchBtn").addEventListener("click", () => {
    let searchTerm = document.getElementById("searchInput").value;
    if (searchTerm) searchWeather(searchTerm);
  });

}

  
export