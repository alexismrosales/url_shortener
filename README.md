# 🖥️🏄‍♀️ Alxmr : Free URL shortener. 
Web url shortener service

<hr>


## ✍️ Design 

### 🏹 Objectives

#### General objectives
Implement web app to short URLs.

#### Specific objectives

- Set a system that given an URLs by an HTTP request, transform and return a shorter URL  using the domain alxmr.tech.
  
- To short the URL incluiding differentt extra parameters like title, custom back-half or generate a QR Code option.

- Build a small tracker to shortened URLs.
  
- Develop a web frontend app and command line interface (CLI) app,
  
# 

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

#

### 📆 Planning

  #### **Requirements**

  Functional requirements
  
  - Admin management: The admin will be able to log in the system and manage the different URLs config.
    
  - Create new URL: The users will be able to create a new URL if it doesn't exist, before that there will be extra options to short the URL like tile, custom back-half URL or generate a QR Code of the shorten URL. 

  - Track shortened URL: The users can track any URL shortened before, it will show statistics information like unique clicks (clicks for different users), geolocalization and devices used.

  Non-functional requirements
  
  - Data security: The system will guarantee user security by using an HTTTPS Protocol, protecting sensitive information of users.
    
  - Usabilty: The interface has to be intuitive and easy to use for end users.
    
  - Escalabilty: The system will be designed to make easier escalabilty for fututure implementations and updates.
