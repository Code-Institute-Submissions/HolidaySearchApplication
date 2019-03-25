
## PROJECT NAME : Holiday Search Application

This is single page application for searching holiday destinations
1. Search and show on map destination city typed by user.
2. Get the information about choosen place
3. Find nearly attractions, bars and restaurants and also accomodation
4. Show list of results in the table beside the map


## UX

LINK TO PROJECT MOCKUP https://app.moqups.com/XsbTuRDlbH/view/page/ad64222d5?ui=0

USER STORIES:

As a tourist, I want to serach for my next holiday destination, so that I can get more information about that place.

As a local, I want to search for nearby bars, accomodation, restaurants and attractions in my city, so I can get to know more good places to spend time with my friends in my city.


# FEATURES

# Existing Features

Feature 1 - Searchbox - It allows users to search holiday destination by typing it into searchbox.

Feature 2 - Places autocomplete - It allows users to see places predictions by starting typing name of the destination.

Feature 3 - Map - It allows users to see where destination and nearby places are located by input destination name into searchbox.

Feature 4 - Droping markers on the map - It allows users to see where nearly places are marked by input destination name into searchbox.

Feature 5 - Nearby places results table - It allows users to see list of searched destination nearby places by input destination name into searchbox.

Feature 6 - Places Info Window - It allows users to see details such as name, adress, phone nr, website, and ranking by clicking on marker on the map.



# Features Left to Implement:

These are features that I pln to implement in the future:

Feature 7 - Checkboxes for each categories( Attractions, bars, accomodation, restaurants) - Allow users to see results list and markers on the map only for particular category by ticking checkbox.

Feature 8 - nearby places image - Allows users to see images of found nearby places by clicking the name of the place.


# Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

HTML - To create basic structure of the project LINK ( https://www.w3schools.com/html/ ) 

CSS - To add styles to the project. Also some part of responsiveness was done by css styles by adding media queries.

Bootstrap - Used to create layout and add responsiveness to project by using classes - LINK -> ( https://getbootstrap.com/ )

Google maps Javascript API - Used to add google maps to the application. To create autocomplete feature. It allows users to search for holiday destination and nearly places.  LINK - ( https://cloud.google.com/maps-platform/ )

Javascript - To create dynymic functionalities such as google maps, droping markers, adding results tables, displaying places info window - LINK - ( https://www.javascript.com/ )


## Testing

Application was tested manually by pretending to be a user and search holiday destination and nearby places:

Searchbox:
Go to the "main" page
Try to type destination in the searchbox and verify that the places predictions appear.
Try to type destination in the searchbox and choose predicted place name and verify that the place is located on the map, nearby places markers are dropped on the map and nearby results list appear in the table beside the map.

Places markers:
Try to select destination in search box and verify if places location markers are dropped on the map

Info window:
Try to select destination and when nearby places markers will drop on the map, click on the marker and verify if the Info window appear

Map : 
 Try to open the application and verify if the map is shown properly. Also Try to select destination to verify if the map is setting to find locaion.


Project was based on Graceful degradation approach which means that desktop version was created as first then responsiveness was added for mobile and tablets. Media query and bootstrap responsive classes were used to achieve that. Projects responsiveness was tested by google developer tools where it was resising to particular device size(for example iphones,samsung ) It was tested also by changing size of browser window.



# DEPLOYMENT

 The project was deployed on Github platform under link : https://mariuszbrozda.github.io/HolidaySearchApplication/
 COMMANDS USED TO DEPLOY PROJECT TO GITHUB:
- git init (create empty repository)
- git remote add origin https://mariuszbrozda.github.io/HolidaySearchApplication/ (to add remote repository)
- git status (to check status)
- git add --all( to add files)
- git commit -m'message' (to commit changes and add message)
- git push origin master ( to push local repository to master branch of remote repository)
Next opened my repository on github and create github page(settings-->choose and save master branch)


# CREDITS
Content

Media
Background photo used in this project was obtained from https://www.pexels.com/

Acknowledgements
I received inspiration for this project from my mentor Theo Despoudis 





