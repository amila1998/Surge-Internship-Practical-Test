<div id="top"></div>
<br />
<div align="center">
  <img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836648/read%20me/21762799_520265311653840_2634197738760669648_o_n16egl.png" width="50" height="50" alt="login">
  <h1 align="center">Surge Internship Practical Test</h1>

  <p align="center">
    Full Stack MERN Authentication Web Application
    <br />
    <br />
    <br />
     
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
This is an internship Assignment at [Surge Global](https://surge.global/). <br/>
This web application includes User registration, User Login, User Logout, Forgot Password, Reset Password, user Profile Update, and Logout functions.<br/>

User must be a registered user to login into the system.<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/login_xgm6bv.png" width="600" height="300" alt="login">

If is an unregistered user, he or she should create an account click on the register button. <br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/Register_page_oqwyfe.png" width="600" height="300" alt="register">

After the registration, the system sends a link via email to activate the account. <br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/Account_Activation_email_g8lcae.png" width="600" height="300" alt="Account_Activation_email">

After the activation process user can log in to the system.<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/login_xgm6bv.png" width="600" height="300" alt="login">

Unfortunately, user forgot the password he or she can click on the forgot password button then the system requires the user's email.<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/forget_password_nluu7f.png" width="600" height="300" alt="forget password">

after being given the email by the user, the system sends an email for the reset password option, and then he or she can reset the password without login into the system. 
<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/reset_password_email_s7y7uh.png" width="600" height="300" alt="reset password email">
<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836162/read%20me/reset_password_jdpwh9.png" width="600" height="300" alt="reset password">

When the user login to the system, he or she can update Avatar, name, and password. Also, users can log out from the system.
<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836162/read%20me/user_profile_x6j30m.png" width="600" height="300" alt="user profile">
<br />

Also there is a error alerts and successfull alerts<br/>
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642836161/read%20me/Validation_Notification_Alerts_co9bwl.png" width="600" height="300" alt="Validation_Notification_Alerts">

<br /><br />
<p align="right">(<a href="#top">back to top</a>)</p>

### Folder Structure
<div align="center">
<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642838760/read%20me/Untitled_omhry6.png" alt="FolderStructure">
</div>

### Built With

* [MongoDB](https://www.mongodb.com/)
* [express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)

### Architecture

<img src="https://res.cloudinary.com/amiladevin1998/image/upload/v1642835279/read%20me/0_ts5ZiPwkjmOJ4x8q_wc8oha.png" alt="Architecture,">

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<p>The two main folders are named "Server" for the backend and "client" for the frontend.<br/>
 </p>
1. install nodejs LTS version to your computer <br/>
2. Create React application using CLI
   
* cd
    ```sh
    cd client
    ```
* npx
    ```sh
    npx create-react-app project_name
    ```
3. Install the Dependencies to the Frontend

 * npm
    ```sh
    npm install react-router-dom@5.2.0 react-icons react-toastify axios
    ```

4. create a  .env file inside the server folder
      <br/> [cloudinary.com](https://cloudinary.com/)
      <br/> [oauthplayground](https://developers.google.com/oauthplayground/)
      <br/> [console.cloud.google.com](https://console.cloud.google.com/)
      <br/> [cloud.mongodb.com](https://cloud.mongodb.com/)
  

  * .env
    ```sh
    MONGODB_URL = [your mongodb url]
    G_CLIENT_ID= [your OAuth Client ID]
    G_CLIENT_SECRET = [your OAuth Client secret]
    G_REFRESH_TOKEN= [your refresh token]
    ADMIN_EMAIL= [admin email]
    ACTIVATION_TOKEN=1245$fvwhjj
    REFRESH_TOKEN=1245$fvwhjjasdfse
    ACCESS_TOKEN=asdasjdaiiiiaw$ggyuguguy
    CLOUD_NAME= [your cloudinary Cloud Name]
    CLOUD_API_KEY= [your cloudinary API Key]
    CLOUD_SECRET_KEY= [your cloudinary API Secret]
    ```

6. Install the Dependencies to the Backend

* cd
    ```sh
    cd server
    ```
* npm
    ```sh
    npm i express nodemon concurrently mongoose dotenv bcryptjs jsonwebtoken nodemailer googleapis cookie-parser multer cloudinary
    ```
6. To run the Backend

* npm
    ```sh
    npm run dev
    ```
    
7. To run the Fronend

* npm
    ```sh
    npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Amila Devin Senarathne - [Amila Devin](https://www.linkedin.com/in/amila-devin-37811b83/) - amiladevin@gmail.com

Project Link: [https://github.com/amila1998/Surge-Internship-Practical-Test](https://github.com/amila1998/Surge-Internship-Practical-Test.git)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you Surge Global !
<p align="right">(<a href="#top">back to top</a>)</p>
