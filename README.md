# :man: WeStudy :woman:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## About this project
WeStudy is a matching system which allows admins to add students to the database and or delete them. This system is build with html css and javascript and node.js.

### Concept and Feature
My concept is about users that want to like a students based on their preferences. 
* My main focus is liking. The user can like persons who have (for now) not been liked before these persons will be shown at the match page.
* The user is also able to remove the like from the match/liked list.
* The user can also add a student to the database. 
* And delete a student from the database. 

## Installation

### 💻 Clone my project? 
If you are interested in cloning my project, go to a file with the terminal and do the following: 

1. Clone my repository:
```
git clone git@github.com:Michelwas97/Block-Tech-Michel.git
```
2. To run this application you need to install some packages. By running the next command in the terminal you will install all dependencies located inside the package.json file. These dependencies are required for working on this project.
```
npm install
```
3. Install Nodemon This dependency will refresh each time you make changes to the project so that you dont have to restart te server each time u change something.
```
nodemon index.js
```
4. env file
```
Use the cloned .env.example file, fill in the information as specified. Please take note that DB_NAME is case sensitive
```
5. Localhost
```
Go to localhost:(port you specified) in your browser
```

### 🖱️ Install Node
1.  Copy and past the following line in your terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
2.  Restart terminal and copy and paste the following in your terminal:
```
nvm install stable
```
3.  Check the versions with the following command:
```
node -v # 
npm -v # 
```
## ⚙️ I used the following building blocks
* HTML (EJS)
* CSS
* Javascript
* Node.js
* Express.js
* MongoDB
* Multer 
* dotenv
* esLint

### ✅ Start
Congratulations! The last step to run this application is to run the following line in your terminal:
```
npm run dev
```

## ❗ License
This repository is licensed with [MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). According to GitHub it's: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
