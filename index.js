let addIcon = document.getElementsByClassName('add-icon');
let addTitle = document.getElementById('add-title');
addIcon[0].onclick =  () => {
 
    if (addTitle.style.display === "none") {
        addTitle.style.display = "block";
        addTitle.style.transition = "all 2s";
      } else {
        addTitle.style.display = "none";
        addTitle.style.transition = "all 2s";
      }
     
     if( addIcon[0].style.transform === "rotate(0deg)")
      {
        addIcon[0].style.transform = "rotate(45deg)";
      } 
      else
      addIcon[0].style.transform = "rotate(0deg)";
    }   


    let playerAdd = document.getElementById('player-add');
    playerAdd.onclick = ()=> {
         playerAdd.href = './add-form.html';

    }

    let allTeamsDetails = localStorage.getItem('teams');
    let teamDetails = JSON.parse(allTeamsDetails);

    let Wrapper = document.getElementById('teams-card-wrapper');
  
    function teamCardRender(logo, tname, alias, wins, id) {

     var teamCard =  document.createElement('div');
     teamCard.className ="card";
     Wrapper.appendChild(teamCard);
     
     let cardImageWrapper = document.createElement('div');
     cardImageWrapper.className = "card-image";
     cardImageWrapper.onclick = showTeamDetails;
     teamCard.appendChild(cardImageWrapper);
     
     let cardImageRedirect = document.createElement('a');
     cardImageRedirect.href = "./teamInfo.html?=" + id;
     cardImageWrapper.appendChild(cardImageRedirect);

     let cardLogo = document.createElement('img');
     cardLogo.src = logo;
     cardLogo.alt = "team-icon";
     cardLogo.className = "logo";
     cardImageRedirect.appendChild(cardLogo);

     let cardDetails = document.createElement('div');
     cardDetails.className = "card-details";
     teamCard.appendChild(cardDetails);

     let  teamName = document.createElement('h5');
     teamName.className = "name";
     teamName.innerHTML =  tname;
     cardDetails.appendChild(teamName);

     let  teamAlias = document.createElement('p');
     teamAlias.className = "team-alias";
     teamAlias.innerHTML = "Alias : " + alias;
     cardDetails.appendChild(teamAlias);

     let  Victories = document.createElement('p');
     Victories.className = "season-wins";
     Victories.innerHTML = "Seasons Won : " + wins;
     cardDetails.appendChild(Victories);
    }

    for(i=0;i<teamDetails.length;i++)
    {
      teamCardRender(teamDetails[i].teamIcon , teamDetails[i].fullName , teamDetails[i].key , teamDetails[i].championshipsWon , teamDetails[i].id );
    }

    
    let webContent = document.getElementById('web-content');
    let cardImageSec = document.getElementsByClassName('card-image');
    console.log(window.location.href+cardImageSec[0].id);
    function showTeamDetails() {  
        window.location.assign('./teamInfo.html');
  }

let playerDetail = JSON.parse(localStorage.getItem('players'));
let keyval;

searchBox = document.getElementById('search-input');
    
            
           searchBox.onkeyup = function() {
            
                searchVal = searchBox.value.toUpperCase();
                console.log(searchVal); 
         
for(i=0;i<teamDetails.length;i++)
{
  let ab = teamDetails[i]; 
   if(ab.fullName.toUpperCase().indexOf(searchVal)>-1 || ab.key.toUpperCase().indexOf(searchVal) )
        keyval = ab.key;
}
  
for(i=0;i<playerDetail.length;i++)
{
  if(keyval === playerDetail[i].from)
  console.log(keyval);
    playerCardRender(playerDetail[i].pic, playerDetail[i].playerName, playerDetail[i].id, playerDetail[i].from, playerDetail[i].price, playerDetail[i].description);
}
           }
