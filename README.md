## Github Profile Search Application

This is a web application that allows users to search for GitHub profiles by username. It displays the user's profile information, such as avatar, bio, followers, and following, as well as a list of their public repositories. 

## Overview

GitHub Profile Finder is a sleek, responsive web application that allows users to search for GitHub profiles using the GitHub API. This application provides a clean interface to display user profiles, repositories, and other relevant GitHub information.

## Technologies Used

- HTML
- CSS
- JavaScript (No Other Dependencies)
- Github Search API.

## Features

- **Search By Username**: Input any github users by their username to retrive profile data at fast speed.

- **Profile Display**: Shows users profile picture, short title, number of follers, number of following, and number of public repositories.

- **Repository Lists**: Lists the user's public repositories with links to each on github.

## Installation

1. **Clone the Repository**
 
   ```bash
   git clone https://github.com/your-username/Github-Profile-Search-Application.git
   ```
2. **Navigate to the Folder**
  
   ```bash
   cd Github-Profile-Search-Application
   ```
3. **Open the Application**

   Open the folder and just double click the ```index.html``` file. Your browser will display the application.

## Usage

1. Enter a github username in the search bar.
2. Just press the 'Enter' button.
3. View the user's short profile (e.g picture, followers, following, repositories).
4. Click any of those repository link. It will automatically open a new tab on browser and you can see the user's github profile.

## Screenshots

[screenshot-1](screenshot-1.png)
[screenshot-2](screenshot-2.png)
[screenshot-3](screenshot-3.png)

## API Reference

This application uses the following GitHub API endpoints:

- ```GET /users/{username}```: To retrieve user profile information
- ```GET /users/{username}/repos```: To retrieve the list of public repositories
For more details, see the [GitHub API documentation](https://api.github.com/users)

## Contributing

1. Fork the repository.
2. Create your feature branch ```git checkout -b feature/AmazingFeature```.
3. Commit your changes ```git commit -m 'Add Some New Feature'```.
4. Push to the branch ```git push origin feature/AmazingFeature```.
5. Open a pull request.
