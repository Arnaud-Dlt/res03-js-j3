let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

///////////////   ETAPE 1    ///////////////////

function activeUsers(users) 
{
    let nbActiveUsers=0;
    
    for(user of users){
        
        if(user.isActive === true){
            
            nbActiveUsers++;
        }
    }
    
    return nbActiveUsers;
}

console.log(`Il y a ${activeUsers(users)} utilisateurs actifs.`);


///////////////   ETAPE 2    ///////////////////

function getActiveUsers(users) {
    
    let activeUsers = [];
    
    for(user of users){
        
        if(user.isActive === true){
            
            activeUsers.push(user);
        }
    }
    
    return activeUsers;
}

function hasBlueEyes(users) {
    
    let blueEyes = 0;
    
    for(user of users){
        
        if(user.isActive === true && user.eyeColor === "blue"){
            
            blueEyes ++
        }
    }
    
    return blueEyes;

}

console.log(`Sur les ${activeUsers(users)} utilisateurs actifs, ${hasBlueEyes(users)} ont les yeux bleu`)



///////////////   ETAPE 3    ///////////////////



function averageAgeActiveUsers(users)
{
    activeUsers=getActiveUsers(users);
    
    let activeUsersAverageAge=0;
    
    for(activeUser of activeUsers)
    
    {
        activeUsersAverageAge+=activeUser.age;
    }
    return activeUsersAverageAge/activeUsers.length;
    
}
console.log(`La moyenne d'âge des utilisateur actifs est de ${averageAgeActiveUsers(users)} ans`)



///////////////   ETAPE 4    ///////////////////


function setMultronToCenturia(users) 
{
    let companies=0;
    
    for(user of users)
    {
        if(user.company==="MULTRON")
        {
        user.company="CENTURIA";
        
        companies++;
        }
    }
    return companies;
    
}

console.log(`${setMultronToCenturia(users)} user companies have been changed from MULTRON to CENTURIA.`);


///////////////   ETAPE 5    ///////////////////

function excludeCenturiaWorkersBrownEyes(users) 
{
    let nbBrownEyesNotCenturia=0;
    
    for(user of users)
    {
        if(user.company !== "CENTURIA" && user.eyeColor==="brown")
        {
            nbBrownEyesNotCenturia++;
        }
    }
    return nbBrownEyesNotCenturia;
}

console.log(`${excludeCenturiaWorkersBrownEyes(users)} users with brown eyes do not work at CENTURIA`);


///////////////   ETAPE 6    ///////////////////


function brownEyesActive(users)
{
    let brownEyesActiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "brown" && user.isActive === true)
        {
            brownEyesActiveUser++;
        }
    }
    return brownEyesActiveUser;
}

function brownEyesInactive(users)
{
    let brownEyesInactiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "brown" && user.isActive === false)
        {
            brownEyesInactiveUser++;
        }
    }
    return brownEyesInactiveUser;
}

function blueEyesActive(users)
{
    let blueEyesActiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "blue" && user.isActive === true)
        {
            blueEyesActiveUser++;
        }
    }
    return blueEyesActiveUser;
}

function blueEyesInactive(users)
{
    let blueEyesInactiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "blue" && user.isActive === false)
        {
            blueEyesInactiveUser++;
        }
    }
    return blueEyesInactiveUser;
}

function greenEyesActive(users)
{
    let greenEyesActiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "green" && user.isActive === true)
        {
            greenEyesActiveUser++;
        }
    }
    return greenEyesActiveUser;
}

function greenEyesInactive(users)
{
    let greenEyesInactiveUser=0;
    
    for(user of users)
    {
        if(user.eyeColor === "green" && user.isActive === false)
        {
            greenEyesInactiveUser++;
        }
    }
    return greenEyesInactiveUser;
}

console.log(`Out of our brown eyed users ${brownEyesActive(users)} are active and ${brownEyesInactive(users)} are inactive`);
console.log(`Out of our blue eyed users ${blueEyesActive(users)} are active and ${blueEyesInactive(users)} are inactive`);
console.log(`Out of our green eyed users ${greenEyesActive(users)} are active and ${greenEyesInactive(users)} are inactive`);