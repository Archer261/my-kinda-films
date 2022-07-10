# MyKinda Movies

## Project 1: Movie Recommendations
[MyKinda Movie](https://archer261.github.io/my-kinda-films/) Application Link

## Table of Contents 
- [Project Concept](#project-concept)
- [Project Description](#project-description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Task Breakdown](#task-breakdown)
- [Wireframe](#wireframe)
- [Deployed Application](#deployed-application)

## Project Concept

This application was developed to help people who are either overwhelmed by recommendations from their streaming services, or whose recommendation algorithms aren’t particularly helpful. 

Except sometimes, the best part of watching a movie is not watching a movie at all- after all that work to research a movie worth watching, you just want to do anything else. MyKinda Movie recognizes this search fatigue, and along with the user’s three recommended movies will also generate an activity for the user to try instead.

## Project Description

The user will answer a few questions to determine what sort of genre they’d like to view, along with their preferred runtime. The application will pull three movies using the TMDB API to satisfy these parameters. The three movies will be chosen out of the sorted most popular films in the particular genre so the user is not presented with three unknown or low-rated films, unlike the way streaming services will present choices to their users. 

The user can save these films to their saved film list, which is stored in their browser’s local storage so they can safely exit the page and return knowing they will not lose their data. After viewing these movies or simply changing their mind, the user can also delete movies from their lists. 

If the user has decided they’d rather try something else instead, they can view their randomly generated activity pulled using the Bored API. Since there are absolutely no parameters chosen for this function, the user can be sure they’re getting something new each time they try MyKinda Movies. 

## User Story

```
**AS A** bored film lover who wants to try something new

**I WANT** to be entertained with movies chosen from my preferences or be given a new activity to experience

**SO THAT** I can watch a movie that I would likely be interested in and not be bombarded with fluff on streaming services and keep myself intellectually occupied
```

## Acceptance Criteria

```
**GIVEN** a user is interested in either finding a movie to view or an activity to try

**WHEN** the user has selected their film preferences 

**THEN** the user is presented with three movies fitting their preferences and along with an activity to try out 
```

## Technologies Used

-[Google Fonts](https://fonts.google.com/)

-[Materialize CSS](https://materializecss.com/)

-[jQuery](https://jquery.com/)

## APIs Used

-[The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)

-[Bored API](http://www.boredapi.com/)

## Task Breakdown

[Joseph Archer](https://github.com/Archer261): Javascript 

[Taha Chaudry](https://github.com/tahachaudhry): 

[April Herriotte](https://github.com/aherriotte): User Experience

[Erin Voelker](https://github.com/ekellv): Styling & Wireframe

## Wireframe
 
Home Page:
![MyKinda Movie Wireframe 1](https://user-images.githubusercontent.com/103372188/178149248-dfb418f9-8bc4-481a-a97f-339a4b084f30.png)


Saved MyKinda Movies:
![MyKinda Movie Wireframe 2](https://user-images.githubusercontent.com/103372188/178149258-6fccb4ec-43a8-467b-bc53-ecf5478a107a.png)


## Deployed Application 
(gif of application)

Home Page:
![mykinda movie screenshot 1](https://user-images.githubusercontent.com/103372188/178149266-d2fef1c9-9d08-4c78-8949-7ed450574036.png)

Saved MyKinda Movies:
![mykinda movie screenshot 2](https://user-images.githubusercontent.com/103372188/178149273-2b85e77a-a537-43a9-80cc-f16066273cea.png)

