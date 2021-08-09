

function perfectFriend(friends)
{
	for(let i=0; i< friends.length ; i++ ){
		if(friends[i].length == 5 )
		{	
			friend= friends[i];
			break;
		}
		
}

	return friend;
}

var friends =["Farhan", "Pranto" , "Promi" ,"Rasel", "Keya", "Fatema"]

var friend= friends[0];

var myFriend= perfectFriend(friends);
console.log(friend);



