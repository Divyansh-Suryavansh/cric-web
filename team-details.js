let teamsData = [

    {
        id : 1,
        fullName : "Mumbai Indians",
        key : "MI",
        championshipsWon : 5,
        teamIcon : 'https://www.indiasports.com/wp-content/uploads/2020/06/will-mumbai-indians-become-the-cricket-team.png' 
    },
    {
        id : 2,
        fullName : "Chennai Super Kings",
        key : "CSK",
        championshipsWon : 3,
        teamIcon : ' https://www.cricadium.com/wp-content/uploads/2019/03/Untitled-design-28.jpg'
    },
    {
        id : 3,
        fullName : "Kolkata Knight Riders",
        key : "KKR",
        championshipsWon : 2,
        teamIcon : ' https://i.pinimg.com/originals/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg'
    },
    {
        id : 4,
        fullName : "Sunrisers Hyderabad",
        key : "SRH",
        championshipsWon : 1,
        teamIcon : 'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/23/file74lsw52kwv5reffziop-1553350043.jpg'
    },
    {
        id : 5,
        fullName : "Rajasthan Royals",
        key : "RR",
        championshipsWon : 1,
        teamIcon : ' https://caughtatpoint.com/wp-content/uploads/2018/04/logo-of-Rajasthan-Royals.jpg'
    },
    {
        id : 6,
        fullName : "Royal Challengers Bangalore",
        key : "RCB",
        championshipsWon : 0,
        teamIcon : ' https://sportstar.thehindu.com/cricket/article30817560.ece/ALTERNATES/LANDSCAPE_1200/rcb-new-logojpg'
    },
    {
        id : 7,
        fullName : "Delhi Capitals",
        key : "DC",
        championshipsWon : 0,
        teamIcon : ' https://cdn5.newsnationtv.com/images/2021/03/28/delhi-capital-logo-94.jpg'
    },
    {
        id : 8,
        fullName : "Punjab Kings",
        key : "KSPB",
        championshipsWon : 0,
        teamIcon : 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/155051-spohyduplh-1613582385.jpeg'
    }
]

localStorage.setItem('teams',JSON.stringify(teamsData));

let playersData = [

    {
        id : 1,
        "playerName" : "Virat Kohli",
        "from" : "RCB",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://pbs.twimg.com/media/EyWrWiyVEAYZIx6.jpg" 
       },
       {
        id : 2,
        "playerName" : "Mahendra Singh Dhoni",
        "from" : "CSK",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://pbs.twimg.com/media/EiGnUEEUwAAgnEk.jpg" 
       },
       {
        id : 3,
        "playerName" : "Rohit Sharma",
        "from" : "MI",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasJctgNX_6oy5Dp2l5j7MnPhgYSYqgs8gzw&usqp=CAU" 
       },
       {
        id : 4,
        "playerName" : "A B de Villiers",
        "from" : "RCB",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/AB-de-Villiers1.jpg" 
       },
       {
        id : 5,
        "playerName" : "Shikhar Dhawan",
        "from" : "DC",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "http://moneyball.insidesport.co/img/singleplayer/Shikhar-Dhawan1.jpg" 
       },
       {
        id : 6,
        "playerName" : "David Warner",
        "from" : "SRH",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://ss.thgim.com/cricket/ipl/article26611593.ece/alternates/FREE_380/WARNERAFP" 
       },
       {
        id : 7,
        "playerName" : "Andre Russell",
        "from" : "KKR",
        "price" : "12.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/AndreRussell1.jpg" 
       },
       {
        id : 8,
        "playerName" : "Yuzvendra Chahal",
        "from" : "RCB",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "data:image/jpeg;base64,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" 
       },
       {
        id : 9,
        "playerName" : "Faf Duplesis",
        "from" : "CSK",
        "price" : "10.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/FrancoisDuPlessis1.jpg" 
       },
       {
        id : 10,
        "playerName" : "Suresh Raina",
        "from" : "CSK",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/19/926082-917625-820013-suresh-raina.jpg" 
       },
       {
        id : 11,
        "playerName" : "Dwayne Bravo",
        "from" : "CSK",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/DwayneBravo1.jpg" 
       },
       {
        id : 12,
        "playerName" : "Ravindra Jadeja",
        "from" : "CSK",
        "price" : "6.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/RavindraJadeja1.jpg" 
       },
       {
        id : 13,
        "playerName" : "Imran Tahir",
        "from" : "CSK",
        "price" : "5.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ImranTahir1.jpg" 
       },
       {
        id : 14,
        "playerName" : "Ajinkya Rahane",
        "from" : "DC",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/AjinkyaRahane1.jpg" 
       },
       {
        id : 15,
        "playerName" : "Steven Smith",
        "from" : "DC",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/StevenSmith1.jpg" 
       },
       {
        id : 16,
        "playerName" : "Rishabh Pant",
        "from" : "DC",
        "price" : "10.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/RishabhPant1.jpg" 
       },
       {
        id : 17,
        "playerName" : "Kagiso Rabada",
        "from" : "DC",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/KagisoRabada1.jpg" 
       },
       {
        id : 18,
        "playerName" : "Ishant Sharma",
        "from" : "DC",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/IshantSharma1.jpg" 
       },
       {
        id : 19,
        "playerName" : "Eoin Morgan",
        "from" : "KKR",
        "price" : "5.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/EoinMorgan1.jpg" 
       },
       {
        id : 20,
        "playerName" : "Sunil Narine",
        "from" : "KKR",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/SunilNarine1.jpg" 
       },
       {
        id : 21,
        "playerName" : "Shakib Al Hasan",
        "from" : "KKR",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ShakibAlHasan1.jpg" 
       },
       {
        id : 22,
        "playerName" : "Dinesh Karthik",
        "from" : "KKR",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/15DK1.jpg" 
       },
       {
        id : 23,
        "playerName" : "Pat Cummins",
        "from" : "KKR",
        "price" : "5.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/PatCummins1.jpg" 
       },
       {
        id : 24,
        "playerName" : "Kuldeep Yadav",
        "from" : "KKR",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/KuldeepYadav1.jpg" 
       },
       {
        id : 25,
        "playerName" : "Shivam Mavi",
        "from" : "KKR",
        "price" : "4.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ShivamMavi1.jpg" 
       },
       {
        id : 26,
        "playerName" : "Chris Gayle",
        "from" : "KSPB",
        "price" : "5.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ChrisGayle1.jpg" 
       },
       {
        id : 27,
        "playerName" : "K L Rahul",
        "from" : "KSPB",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/LokeshRahul1.jpg" 
       },
       {
        id : 28,
        "playerName" : "Mohammed Shami",
        "from" : "KSPB",
        "price" : "4.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/MohammedShami1.jpg" 
       },
       {
        id : 29,
        "playerName" : "Chris Lynn",
        "from" : "MI",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ChrisLynn1.jpg" 
       },
       {
        id : 30,
        "playerName" : "Surya Kumar Yadav",
        "from" : "MI",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/SuryaKumarYadav1.jpg" 
       },
       {
        id : 31,
        "playerName" : "Hardik Pandya",
        "from" : "MI",
        "price" : "10.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/HardikPandya1.jpg" 
       },
       {
        id : 32,
        "playerName" : "Kieron Pollard",
        "from" : "MI",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/KieronPollard1.jpg" 
       },
       {
        id : 33,
        "playerName" : "Jasprit Bumrah",
        "from" : "MI",
        "price" : "11.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/JaspritBumrah1.jpg" 
       },
       {
        id : 34,
        "playerName" : "Trent Boult",
        "from" : "MI",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/TrentBoult1.jpg" 
       },
       {
        id : 35,
        "playerName" : "Kane Williamson",
        "from" : "SRH",
        "price" : "11.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/KaneWilliamson1.jpg" 
       },
       {
        id : 36,
        "playerName" : "Jason Holder",
        "from" : "SRH",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/JasonHolder1.jpg" 
       },
       {
        id : 37,
        "playerName" : "Bhuvneshwar Kumar",
        "from" : "SRH",
        "price" : "6.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/Bhuvneshwarkumar1.jpg" 
       },
       {
        id : 38,
        "playerName" : "Rashid Khan",
        "from" : "SRH",
        "price" : "8.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/RashidKhan1.jpg" 
       },
       {
        id : 39,
        "playerName" : "David Miller",
        "from" : "RR",
        "price" : "6.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/DavidMiller1.jpg" 
       },
       {
        id : 40,
        "playerName" : "Chris Morris",
        "from" : "RR",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "All-Rounder",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/ChrisMorris1.jpg" 
       },
       {
        id : 41,
        "playerName" : "Jos Buttler",
        "from" : "RR",
        "price" : "7.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/JosButtler1.jpg" 
       },
       {
        id : 42,
        "playerName" : "Sanju Samson",
        "from" : "RR",
        "price" : "9.00 Cr",
        "isPlaying" :  true,
        "description" : "Batsman",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/SanjuSamson1.jpg" 
       },
       {
        id : 43,
        "playerName" : "Mustafizur Rahman",
        "from" : "RR",
        "price" : "6.00 Cr",
        "isPlaying" :  true,
        "description" : "Bowler",
        "pic" : "https://moneyball.insidesport.co/img/singleplayer/MustafizurRahman1.jpg" 
       }
]

localStorage.setItem('players',JSON.stringify(playersData));