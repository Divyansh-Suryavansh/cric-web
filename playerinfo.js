

    let playerClicked =Number( window.location.href.split('=')[1]);
    let playersPresent = JSON.parse(localStorage.getItem('players'));
    
    let a = playersPresent[playerClicked-1];  
    if(a.isPlaying === true)
    playStatus = "Playing";
else
    playStatus = "Benched";     

 let playerCardWrapper = document.getElementById('player-info-wrapper');
 playerCardRender(a.pic,a.playerName,a.id, a.from,a.price, playStatus, a.description);
    
function playerCardRender(pic, pname,id, team, pprice,status, role) {

    var playerCard =  document.createElement('div');
    playerCard.className ="player-card";
    playerCardWrapper.appendChild(playerCard);
    
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

    let otherSec = document.createElement('div');
    otherSec.className ="other-sec";
    cardDetails.appendChild(otherSec);

    let  pteam = document.createElement('p');
    pteam.className = "from";
    pteam.innerHTML = "From : " + team;
    otherSec.appendChild(pteam);

    let  desc = document.createElement('p');
    desc.className = "desc";
    desc.innerHTML = "Role : " + role;
    otherSec.appendChild(desc);

    let  price = document.createElement('p');
    price.className = "price";
    price.innerHTML = "Price : " + pprice;
    otherSec.appendChild(price);

    let  playStatus = document.createElement('p');
    playStatus.className = "play-status";
    playStatus.innerHTML = "Player Status : " + status;
    otherSec.appendChild(playStatus);
   }


