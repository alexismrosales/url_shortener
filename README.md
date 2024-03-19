# 🖥️🏄‍♀️ Alxmr : Free URL shortener. 
Web url shortener service

## ✍️ Design 
<details> 

<summary><b>Click to expand</b></summary>

### 🏹 Objectives

#### General objectives
Implement web app to short URLs.

#### Specific objectives

- <p align="justify"> Set a system that given an URLs by an HTTP request, transform and return a shorter URL  using the domain alxmr.tech. </p>
  
- <p align="justify"> To short the URL incluiding differentt extra parameters like title, custom back-half or generate a QR Code option. </p>

- <p align="justify"> Build a small tracker to shortened URLs.</p>
  
- <p align="justify"> Develop a web frontend app and command line interface (CLI) app. </p>
  

### 🛠️ Technologies

  #### 🌐 For back-end development.
  
  To develop the web service, I used the next tools:
  - **Spring Boot (Java)** to develop app.
   **PostgreSQL** to save data.
  - **Heroku** to host the web service.
  - **.TECH domains** for domain and DNS config.
  
  #### 🎨 For front-end web-page app
  
  The web-page for input and output the data I used:
  - **React/Typescript (Node.js)** as the main framework.
  - **Tailwind** for UI design.
  - **GH Pages** to deploy the  app.
  
  #### 👓 For front-end CLI app
  
  To create the CLI app I used:
  - **Python** to develop the app.
  - **Click** python library to manipulate the console.


### 📆 Planning

  #### 🎯 **Requirements**

  Functional requirements
  
  
  - <p align="justify"> Admin management: The admin will be able to log in the system and manage the different URLs config.</p>
    
  - <p align="justify"> Create new URL: The users will be able to create a new URL if it doesn't exist, before that there will be extra options to short the URL like title, custom back-half URL or generate a QR Code of the shorten URL or set a expiration date.  </p>
  

  - <p align="justify"> Track shortened URL: The users can track any URL shortened before, it will show statistics information like unique clicks (clicks for different users), geolocalization and devices used.</p>

  - <p align="justify"> Friendly interface: The users will be able to acces to the service by a webpage or installing a CLI app which allows the user to all funcionalities. </p>
 
  Non-functional requirements
  
  - <p align="justify"> Data security: The system will guarantee user security by using an HTTPS Protocol, protecting sensitive information of users. </p>
    
  - <p align="justify"> Usabilty: The interface has to be intuitive and easy to use for end users. </p>
    
  - <p align="justify"> Escalabilty: The system will be designed to make easier escalabilty for fututure implementations and updates. </p>

  #### 💼 Business rules
  
  - <p align="justify"> Short link generation: Users can input any type of URL and recieve a generated short link.</p>
  
  - <p align="justify"> Link redirection: When someone accesses the short link, they will be redirected to original URL.</p>
  
  - <p align="justify"> Statistics and tracking: Track total of clicks, show geolocalization of people which access to the url and devices used. </p>

  - <p align="justify"> Link expiration: The link will expire if user set expiration or will be avalible for a maximum of 60 days. </p>
  
  - <p align="justify"> Usage limit: The number of links will be for now set to a maximum of 100 URLs. </p>

  - <p align="justify"> Custom links: Using the domain the user will be able to modify the url if it is avalible. </p>


### 🖥️ Software Architecture

The software architecture choosen is **Three-Tier-Architecture**, using the three tiers as:

- <p align="justify"> <b> Client-tier: </b> This component, refering to the front-end, there are two GUI options the CLI app and the web app. </p>

- <p align="jusitfy"> <b> Server-tier: </b> On this tier the back-end service is allowed in Heroku, processing the clients requests to retrieve data and manipulate it. </p>

- <p align="jusitfy"> <b> Data tier: </b> On this layer, using PostgreSQL the data will be stored in Heroku database service. </p>


### 🤖 Software Design Pattern

<p align="jusitfy"> The pattern used for the backend development is **Controller-Service-Repository**, for easy development administration and separation of concerns. </p>
</details>
