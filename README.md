# Frontend

A Fontend Single Page Application is created using Angular, where a person can able search github profile by the entering the name.\

**Functionalities**\

In this application many components are used to make application user friendly\

=> SearchBar Component\

=> LoaderComponent (Used to show loading is in progress during api calls),\ 

=> ProfileComponent (Used to get the profile of the user),\

=> reposComponent (Used to get all the repos of teh user),\

There are many services are also used like\

=> ButtonCickService (To know that button is clicked)\

=> getRepoService (USed to get the repos from teh github api)\

**Modules**\

=>  In every angular app the flow starts from the appComponent and each componet has (.html,.css,.ts,.specs.ts) file\

=>  In appComponet.module.ts all the modules which are required are loaded\

=>  NgModule, BrowserModule, NgxPaginationModule (For the pagination), NgxSpinnerModule(For the Loader), HttpClientModule (For HTTP), FormsModule(For forms) \

**How app Works**\

=>  In the appcomponent.html all the body of website is designed, how the website should look like is designed, for some components I have used Input and Output decorators for the transmission of data in between\

=>  At first appcomponent.ts is executed then control goes to appcomponent.html and then search-bar-component gets executed with the output Emitter from the search-bar.component.ts, the output emitter will have all the profile details data which is fetched using the HTTPClient (GET) request\

=>  For api GET requests I have made an express server which is mentioned in the Backend repository, Here I have directly made a call to the GET api for profile\

=>  And when the user types name and click on button then only form inside a search bar component will have name to search and then it sends request to the (GET) api\

=>  Before sending an request to the GET api the loader component is loaded and the api request will made only if the name entered by the user is valid, else an alert will encounter to reenter the correct username\

=>  After this flow will go to the appcomponent and in app.component.ts file we have GET request to get the repositories of the user for which the profile is extracted\

=>  Now we have profile and repositories of the user we can simply make them show in the DOM, So I have passed the profile to the appProfile Component and repos to the repos component\

=>  Now control for appComponent to appProfile componet occurs where a card is designed to show the profile of the use\

=>  Now again control comes back to appcomponent and from here control will go to the repos component where all the repos will be displayed using the *ngFor directive and pagination is implemented 10 perpage repositories\

=>  In repositories I have made assumprion of 100 repositories\

=>  Also I have used the *ngIf drective for the appprofile component and apprepos compnent on he buttonclickService so they will be displayed only when button is clicked
