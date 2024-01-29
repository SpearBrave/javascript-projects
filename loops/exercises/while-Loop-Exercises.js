const input = require('readline-sync');


//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


  
let fuel = input.question("Fuel Level ?");
fuel = Number(fuel);
  while (5000.1>fuel  || fuel >30000){
  fuel = input.question("Invalid Fuel Level !");
    fuel= Number(fuel);
  }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
let crew = input.question("Number of crew ?");
crew= Number(crew);
  
while (0>crew || crew>7){
    crew = input.question("Invalid crew total");
      crew= Number(crew);
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let alt =0 ;


while (fuel > 0  ){

  fuel= fuel - (crew * 100 );
  alt = alt + 50 ;


  
}
while (alt >= 2000){
  console.log("The shuttle gained an altitude of", alt,"km.\n orbit acheived !" );
break
}
while (alt<2000){
  console.log("The shuttle gained an altitude of" ,alt,"Failed to reach orbit." ) ;
break
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
