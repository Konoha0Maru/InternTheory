function navbar(){
    return `
    <div id="header">
    <div id="headerDiv">
      <img src="Images/menu.png" id="menu" />
      <img
        src="https://assets.interntheory.com/creative/logo.png"
        id="logo"
      />
    </div>
    <!-- sidebar -->
    <div id="sideBar">
      <div id="sidebarNav">
        <img src="Images/menu.png" id="menu" class="sidebarNav_img" />
        <img
          src="https://assets.interntheory.com/creative/logo.png"
          id="logo"
          class="sidebarNav_img2"
        />
      </div>
      <div id="sidebarCategories">
        <ul id="sidebarCatagoriesUL">
          <li>
            <img src="Images/home.png" class="sidebarIcons">
            <span class="categoriesHeading">Home</span>
          </li>
          <li>
            <img src="Images/Internship.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Internships</span>
          </li>
          <li>
            <img src="Images/Jobs.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Jobs</span>
          </li>
          <li>
            <img src="Images/postinternship.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Post Internship</span>
          </li>
          <li>
            <img src="Images/courses.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Courses</span>
          </li>
          <li>
            <img src="Images/Contact us.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Contact Us</span>
          </li>
          <hr id="sidebarCategoriesHR">
          <li>
            <img src="Images/register.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Register</span>
          </li>
          <li>
            <img src="Images/login.PNG" class="sidebarIcons">
            <span class="categoriesHeading">Login</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- sidebarend -->
    <div id="navEnd">
      <img src="Images/shopping_cart.svg" id="cart"></img>
      <button>SIGN IN</button>
    </div>
  </div>
     
    `
}

export default navbar