
let teamClicked =Number( window.location.href.split('=')[1]);
let teamsPresent = JSON.parse(localStorage.getItem('teams'));

let teamInfo = teamsPresent[teamClicked-1];
let teamName = teamsPresent[teamClicked-1].key;

let playersPresent = JSON.parse(localStorage.getItem('players'));

let cardWrapper = document.getElementById('card-wrapper');

let teamInfoCard = document.getElementById('team-info');

let count =0;
let highBat = 0;
let highBowl =0;
var bats;
let bowl ;
let playStatus;
for(i=0;i<playersPresent.length;i++)
{
   
    let a = playersPresent[i];
   if(a.from === teamName)
   {
       if(a.isPlaying === true)
            playStatus = "Playing";
        else
            playStatus = "Benched";    
          
       playerCardRender(a.pic,a.playerName,a.id, a.from,a.price, playStatus, a.description);
       count++;
       if(a.description === "Batsman")  
       {
          if(parseInt(a.price)>parseInt(highBat))
            {
                bats = a.playerName;
                highBat = a.price;
            }
       }
      else if(a.description === "Bowler")
        {
             if(parseInt(a.price)>parseInt(highBowl))
              {bowl = a.playerName;
              highBowl = a.price;}
        }
   }
  
}
console.log(count + " " + bats + " " + " " + bowl );

function teamInfoRender(tname, ticon, vict, tblr, tbts, count) {

    let teamImageWrapper = document.createElement('div');
    teamImageWrapper.className = "team-image-wrap";
    teamInfoCard.appendChild(teamImageWrapper);

    let teamDetailWrapper = document.createElement('div');
    teamDetailWrapper.className = "team-detail-wrap";
    teamInfoCard.appendChild(teamDetailWrapper);

    let teamImage = document.createElement('img');
    teamImage.className = "team-image";
    teamImage.src = ticon;
    teamImageWrapper.appendChild(teamImage);

    let teamName = document.createElement('h5');
    teamName.className = "team-name";
    teamName.innerHTML = tname;
    teamDetailWrapper.appendChild(teamName);

    let otherDetails = document.createElement('div');
    otherDetails.className = "other-details";
    teamDetailWrapper.appendChild(otherDetails);

    let  playerCount = document.createElement('p');
    playerCount.className = "players-count";
    playerCount.innerHTML = "Players : " + count;
    otherDetails.appendChild(playerCount);
 
    let topBatsman = document.createElement('p');
    topBatsman.className = "top-bat";
    topBatsman.innerHTML = "Top Batsman : " + tbts;
    otherDetails.appendChild(topBatsman);

    let  topBowler = document.createElement('p');
    topBowler.className = "top-bowler";
    topBowler.innerHTML = "Top Bowler : " + tblr;
    otherDetails.appendChild(topBowler);

    let  wins = document.createElement('p');
     wins.className = "season-vics";
    wins.innerHTML = "Seasons Won : " + vict;
    otherDetails.appendChild(wins);
   
}

teamInfoRender( teamInfo.fullName, teamInfo.teamIcon, teamInfo.championshipsWon,bowl,bats,count);

function playerCardRender(pic, pname,id, team, pprice,status, role) {

    var playerCard =  document.createElement('div');
    playerCard.className ="card";
    cardWrapper.appendChild(playerCard);
    
    let cardImageWrapper = document.createElement('div');
    cardImageWrapper.className = "card-image";
    playerCard.appendChild(cardImageWrapper);
    
    let cardImageRedirect = document.createElement('a');
    cardImageRedirect.href = "./playerInfo.html?=" + id;
    cardImageWrapper.appendChild(cardImageRedirect);

    let cardLogo = document.createElement('img');
    cardLogo.src = pic;
    cardLogo.alt = "player-image";
    cardLogo.className = "logo";
    cardImageRedirect.appendChild(cardLogo);

    let cardDetails = document.createElement('div');
    cardDetails.className = "card-details";
    playerCard.appendChild(cardDetails);

    let  playerName = document.createElement('h5');
    playerName.className = "player-name";
    playerName.innerHTML =  pname;
    cardDetails.appendChild(playerName);

    let  pteam = document.createElement('p');
    pteam.className = "from";
    pteam.innerHTML = "From : " + team;
    cardDetails.appendChild(pteam);

    let  desc = document.createElement('p');
    desc.className = "desc";
    desc.innerHTML = "Role : " + role;
    cardDetails.appendChild(desc);

    let  price = document.createElement('p');
    price.className = "price";
    price.innerHTML = "Price : " + pprice;
    cardDetails.appendChild(price);

    let  playStatus = document.createElement('p');
    playStatus.className = "play-status";
    playStatus.innerHTML = "Player Status : " + status;
    cardDetails.appendChild(playStatus);
   }


