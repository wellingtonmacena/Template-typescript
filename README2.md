<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/wellingtonmacena/moments-app">
    <img src="assets/images/sample-image.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Moments </h3>

  <p align="center">
    An application where you can share your moments!
    <br />
    <a href="https://github.com/wellingtonmacena/moments-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/wellingtonmacena/moments-app">View Demo</a>
    ·
    <a href="https://github.com/wellingtonmacena/moments-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/wellingtonmacena/moments-app/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

Here you have a simple but robust application where you can create, edit and delete moments as you want.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project.

* ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
* [![Angular][Angular.io]][Angular-url]

* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

You need <b><i>Docker</i></b>, <b><i>Node.Js</i></b>, and <b><i>.NET 6.0 </i></b>installed in your machine first of all. You can download them in the following links:

  ```sh
  https://docs.docker.com/get-docker/
  ```

  ```sh
  https://nodejs.org/en/download
  ```

  ```sh
  https://dotnet.microsoft.com/en-us/download
  ```

## Running
### Backend

1. Clone Git repository:
   ```sh
   git clone --recurse-submodules https://github.com/wellingtonmacena/moments-app
   ```
    This whill clone Git repository with all its submodules

2. Compose Docker containers: 
    ```sh
    * cd moments-backend
    * docker-compose up -d
    ```
    This will execute all necessary containers to run this aplication.

3. Execute database migrations(tables): 
    ```sh
    * cd Moments-Backend
    * dotnet ef database update --context LocalPostgresContext
    ```
    This will execute migrations that will create tables in database.

4. Run backend project: 
    ```sh
    * dotnet run
    ```

### Frontend

1. Install Angular CLI, if you dont have installed in your machine: 
    ```sh
     * moments-frontend-web
     * npm install -g @angular/cli
    ```
    This will install angular cli globally in your machine.

2. Install NPM modules: 
    ```sh
    npm install
    ```
    This will install all necessary modules to run this aplication.

3. Run frontend project: 
    ```sh
    npm start
    ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Now you have everything to start using the app

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Any problem or question installing the project, you can message me though my personal email: wellington.macena.23@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/wellington-macena-dev
[product-screenshot]: assets/images/sample-image.jpg
[ASP.NET]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[ASP.NET-url]: https://dotnet.microsoft.com/pt-br/apps/aspnet
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/