const addTitleButton = document.querySelector('.button-primary');
const formContainer = document.getElementById('form-container');

addTitleButton.addEventListener('click', function () {
  formContainer.classList.toggle('active');
});
//Get all the star elements
const stars = document.querySelectorAll('.star');

// Add a click event listener to each star
stars.forEach(star => {
  star.addEventListener('click', () => {
    // Toggle the active class on the clicked star
    star.classList.toggle('active');
  });
});
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
// Function to reset the form and go back to the first step

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});
/*function addPodcast(podcastName, episodeTitle, episodeNumber, platform, host, tag,selectedGenre, rating) {
  const genre = localStorage.getItem('selectedGenre');
  console.log('Podcast Name:', podcastName);
  console.log('Episode Title:', episodeTitle);
  console.log('Episode Number:', episodeNumber);
  console.log('Platform:', platform);
  console.log('Host:', host);
  console.log('Tag:', tag);
  console.log('Genre:', selectedGenre);
  console.log('Rating:', rating);
  let podcast = {
    podcastName, 
    episodeTitle,
    platform,
    host,
    tag,
    genre,
    rating
  }
}*/
form.addEventListener("submit", function(event){
  event.preventDefault();//block default submission behaviour 
  console.log(form.elements.podcastName.value)
  addPodcast(
    form.elements.podcastName.value,
    form.elements.episodeTitle.value, 
    form.elements.episodeNumber.value,
    form.elements.platform.value,
    form.elements.host.value,
    form.elements.tag.value,
    form.elements.genre.value,
    form.elements.rating.value
  );
  form.reset(); 
})
var podcastList =[];
function addPodcast(podcastName, episodeTitle, episodeNumber, platform, host, tag,selectedGenre, rating) {
let podcast = {
  podcastName, 
  episodeTitle,
  episodeNumber,
  platform,
  host,
  tag,
  selectedGenre,
  rating,
  id: Date.now(),
  date: new Date().toISOString(),
};
podcastList.push(podcast);
localStorage.setItem('podcasts', JSON.stringify(podcastList));
updatePodcastList();
}
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
}
function updatePodcastList() {
  let list = document.querySelector(".layout-grid");
  list.innerHTML = "";

  let podcastList = JSON.parse(localStorage.getItem('podcasts'));
  console.log(podcastList);

  if (podcastList !== null) {
    podcastList.forEach((podcast) => {
      let gridItem = document.createElement('div');
      gridItem.className = 'grid-item';

      let image = document.createElement('img');
      image.src = getGenreImageSource(podcast.selectedGenre);
      image.alt = 'podcast-image(' + podcast.selectedGenre + ')';

      let podcastName = document.createElement('h3');
      podcastName.textContent = podcast.podcastName;

      let episodeTitle = document.createElement('h4');
      episodeTitle.textContent = podcast.episodeTitle;

      let starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container';

      for (let i = 0; i < podcast.rating; i++) {
        let starIcon = document.createElement('img');
        starIcon.src = 'images/star-icon.png';
        starIcon.alt = 'filled-star-icon';
        starIcon.height = '50px';
        starsContainer.appendChild(starIcon);
      }

      gridItem.appendChild(image);
      gridItem.appendChild(podcastName);
      gridItem.appendChild(episodeTitle);
      gridItem.appendChild(starsContainer);

      list.appendChild(gridItem);
    });
  }
}

// Move the initial loading of podcasts to the beginning of the script
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
  updatePodcastList();
}
function getGenreImageSource(genre) {
  switch (genre) {
    case 'philosophy':
      return 'images/podcast (philosophy).png';
    case 'film & TV':
      return 'images/podcast (film & TV).png';
    case 'news':
      return 'images/podcast (news).png';
    case 'self-care':
      return 'images/podcast (self-care).png';
    case 'finance':
      return 'images/podcast (finance).png';
    case 'crime':
      return 'images/podcast (crime).png';
    case 'comedy':
      return 'images/podcast (comedy).png';
    default:
      return ''; // Provide a default image source or handle the case where genre is not recognized
  }
}
 /*console.log(podcastList); 
 const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs)
  form.reset();
;
  data.forEach((country) => {
        console.log(country)
        
        // Container for card (Div, with a class=".")
        
        
        // Title: Heading == Country Name
        
        
        // Description: Paragrph == Country Information
        
        
        // Image: Image == Country Flag
        
        
        // Appending all content to the card
        
        
        // Append the content to the page
        
    })
})
*/

function changeStep(btn) {
  const activeStep = document.querySelector(".step.active");
  const activeIndex = steps.indexOf(activeStep);

  activeStep.classList.remove("active");

  let index;
  if (btn === "next") {
    index = activeIndex + 1;
  } else if (btn === "prev") {
    index = activeIndex - 1;
  }

  if (index >= 0 && index < steps.length) {
    steps[index].classList.add("active");
  }
}
const genreItems = document.querySelectorAll('.genre-item');

genreItems.forEach((item) => {
  const image = item.querySelector('img');

  image.addEventListener('click', () => {
    // Remove 'active' class from all genre items
    genreItems.forEach((item) => {
      item.querySelector('img').classList.remove('active');
    });

    // Add 'active' class to the clicked genre item
    image.classList.add('active');
  });
});
// Orginal code from the week 3 tutorial
/*const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

var taskList = [];

function addTask(name, type, rate, time, client) {
  let task = {
    name,
    type,
    id: Date.now(),
    date: new Date().toISOString(),
    rate,
    time,
    client,
    billable: false
  }
  taskList.push(task);
  displayTask(task);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask(
    form.elements.taskName.value,
    form.elements.taskType.value,
    form.elements.taskRate.value,
    form.elements.taskTime.value,
    form.elements.taskClient.value,
  )
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = 
    `<p><strong>${task.name}</strong><br>${task.type}</p>
     <span><em>${task.time} hours</em><br>$${task.rate}/hr</span>
    `;

  tasklist.appendChild(item);

  form.reset();

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {

    taskList.forEach(function(taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    console.log(taskList)
    item.remove();
  })

  // SECTION 1 CODE BELOW

  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  const firstItem = item.firstElementChild;
  firstItem.appendChild(inputElement);
  inputElement.addEventListener('change', function(event){
    const isChecked = event.target.checked;
    taskList.forEach(function(task) {
     if (task.id == item.getAttribute('data-id')){
       if (isChecked){
     inputElement.style.backgroundColor = (220, 255, 220);
         task.billable = true;
      } else{
       inputElement.style.backgroundColor = "#FFFFFF" 
         task.billable = false;
      }
     }
    });
  });
  // Leave the bracket below to close the displayTask function

}
      



// SECTION 2 CODE BELOW
const button = document.getElementById("generateInvoice");
  const table = document.getElementById("invoiceTable");
  const clientParagraph = document.getElementById("client");
  const totalParagraph = document.getElementById("total")
  button.addEventListener("click", function(){
    var total = 0 ;
    taskList.forEach(function(task){
      if (task.billable = true){
        clientParagraph.textContent = task.client;
        const price = task.rate * task.time;
        total += price;
        totalParagraph.innerHTML = "Total: $"+ total;
      }
    })
  })*/
