# **Doodle Jump**
[Game at Appstore](https://apps.apple.com/us/app/doodle-jump/id307727765)
![Doodle jump header](https://yandex.ru/images/search?from=tabbar&text=doodle%20jump&pos=8&img_url=https%3A%2F%2Ftitel-kulturmagazin.net%2Fwp-content%2Fuploads%2FDoodlejump.jpg&rpt=simage)
### **Summary**
Doodle Jump is a platforming video game developed and published by Croatian studio Lima Sky, for Windows Phone, iPhone OS, BlackBerry, Android, Java Mobile (J2ME), Nokia Symbian, and Xbox 360 for the Kinect platform. It was released worldwide for iPhone OS on March 15, 2009, and was later released for Android and Blackberry on March 2, 2010, Symbian on May 1, 2010, Windows Phone 7 on June 1, 2011, and August 21, 2013, on Windows Phone 8. It was released for the iPad on September 1, 2011. Since its release, the game has been generally well received. The game is currently available on nine platforms.

Doodle Jump was renowned for its selling rate by App Store standards, which counted 25,000 copies sold daily for 4 consecutive months (later overtaken by Angry Birds). As of December, 2011, the game sold 10 million copies over iTunes and Google Play and reached 15 million downloads across all platforms. The game has been developed into a video redemption game for play at video arcades. Croatians Igor and Marko Pušenjak are authors of Doodle Jump, where Igor works from a New York-based address and Marko resides in Croatia. In July 2016, Lima Sky announced partnership with Skillz to develop a tournament-playable version of the game.

# **This project is an attempt to recreate an original game in studying purpose only!!!**

## **Game Entities**

### *Doodler*
![Doodler](https://yandex.ru/images/search?from=tabbar&text=doodle%20jump&pos=0&img_url=https%3A%2F%2Fwww.gamingnexus.com%2FImages%2FNews%2Fwmuzon30080%2F7.jpg&rpt=simage)
Main character of this game, which player takes control. It's always jumping, and can shoot balls.

### *Platforms*
![Platforms](https://yandex.ru/images/search?text=doodle%20jump%20platform&from=tabbar&pos=1&img_url=https%3A%2F%2Fde-academic.com%2Fpictures%2Fdewiki%2F68%2FDoodle_Platforms.png&rpt=simage)
It's a only solid sufrace in game, which doodler can use to climb higher. This game will be contains at least 3 platform types from the original game:
* [ ] **_Default_** (green) platform - Doodler can jump on it endlessly.
* [ ] **_Moving_** (blue) platform - This type of platforms moves horrizontally.
* [ ] **_Fragile_** (white) platfrom - It's crushes as doodler is stepping on it.

### *Monsters*
![Monsters](https://yandex.ru/images/search?text=doodle%20jump%20monsters&from=tabbar&pos=0&img_url=https%3A%2F%2F149353146.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2013%2F03%2F12335-2.jpg&rpt=simage)
It's a doodler enemies, upon contact with them doodler falls and game over then, so you need to beware of them. Some of monsters are static and just stay at the one point, some of them are dynamic and can move through game field. Also, some of monsters can try to attack doodler, they also can shoot as doodler, as for example.
* [ ] **_Static_** monsters. :guardsman:
* [ ] **_Moving_** monsters. :runner:

### *Obstacles*
![Obstacles](https://yandex.ru/images/search?text=doodle%20jump%20ufo&from=tabbar&pos=1&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDUyN3olWAAEJjLt.jpg&rpt=simage)
It's a type of game objects, which also like monsters is hostile to Doodler, but unlike monsters, obstacles can't be shoot by doodler, which means player must avoid of them at any costs. The game is also will over when doodler is contact with any of obstacles. This game will be contains at least 2 obstacles from the original game:
* [ ] **_UFO_** :o:
* [ ] **_Black hole_** :black_circle:

### *Bonuses*
![Bonuses](https://yandex.ru/images/search?text=doodle%20jump%20bonuses&from=tabbar&pos=4&img_url=https%3A%2F%2Ftablet-news.net%2Fwp-content%2Fuploads%2F2011%2F10%2Fnyall97802_doodlejump.jpg&rpt=simage)
It's a type of game objects, which gives temporary advantages to Doodler. This game will be contains at least 3 obstacles from the original game:
* [ ] **_Bubble_** :large_blue_circle: - Makes Doodler invincible for a short time
* [ ] **_Helicopter hat_** :helicopter: - It gives Doodler to fly up to 100 points
* [ ] **_Jetpack_** :rocket: - It gives Doodler to fly up to 200 points

## **Game rules**
Player takes control over Doodler. The Doodler is always jumping, so player need to jump on platforms, collect bonuses, and avoid of obstacles and monsters. The main goal of game is climb to platforms as high as you can. Game has no time limit, so player can try his best as much, as he can. 
[ ] (Optional feature) Game field contains coins spreaded over it, so player can collect them, to spend at the game store and buy new skins for Doodler.

## **Victory criteria**
Assuming that fact, that the game doesn't have a finish, the game goes on endlessly, while player don't fall lower than lowest platform at the game field, or if player touch obstacle or monster.

## **Game controls**
The game control is processing by keyboard arrows to move and mouse left button to shoot
* **_Move left_**  ←
* **_Move right_**  →
* **_Shoot_** - Left mouse button
 
## **Used technologies**
* **[Webpack 5 Boilerplate Template by WeAreAthlon](https://github.com/WeAreAthlon/frontend-webpack-boilerplate#webpack-5-boilerplate-template)**
* *webpack 5.68.0*
* *ECMAScript ES6 / ECMAScript 2016(ES7)*
* *SASS/PostCSS*
* *Babel 7*

## **Project structure**
* *ASS/PostCSS files are located under src/scss/*
* *JavaScript files with support of latest ECMAScript ES6 / ECMAScript 2016(ES7)/ etc files are located under src/js/*
* *Image files are located under src/images/*
* *Font files are located under src/fonts/*
* *HTML files are located under src/*

## **Run and assembly**
To run at the developer mode local server go to "../frontend-webpack-boilerplate" and type into console "npm run dev".
