const DOMStrings = {
    userInput: document.getElementById('city'),
};

function getCity() {
    DOMStrings.userInput.addEventListener("submit", async function(e){
      e.preventDefault();
      console.log('something happens');
      });
    }

getCity();