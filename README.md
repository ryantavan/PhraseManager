# Phrase Manager
## Setting Up
1. The folder ClientApp is a standard Angular application, it can be speratedly hosted.
1. At the moment the client package management is handled by visual studio. We may use gulp or webpack to deploy in more customised way
1. Please run visual studio with Admin privilege to avoid access to the local hard disk permission problems because it is saving data in sqlite phrase.db
1. Set the PhraseManager.Web as your start up project
1. Open the package manager console select the PhraseManager.DataAccess and run update-database
1. Open a command line prompt, go to ClientApp folder and then run npm install
1. Somtimes I do not trust visual studio to run the ng build for me, you may build the client app through comman line.

## Reviewing Consideration
* Technically there was no business logic in this application therefore, I found writing the unit test is unnecessary
* I would love to use generic way to handle things, adding repository and unitofwork was just to show my enthusiasm lol.
* I usually use a base class to save the attributes. for this case the property "Id" could be the only necessary one, however, I used a few more attributes to demonstrate any ultimate usage of the base class.
* Having view model/dto models is the way to include some custom validation at API/MVC level, I added these to present my strategy of seperation between database model and dto/view models
* I did not manage to add confirmation for delete and no client side test is added, cause I started coding very late on Sunday.


