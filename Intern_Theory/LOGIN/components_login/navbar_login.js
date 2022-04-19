function navbar() {
  return `<div id="header">
    <div id="headerDiv">
      <img src="../../Images/menu.png" id="menu" />
      
      <a href="../../Intern_Theory/Home.html"><img
        src="https://assets.interntheory.com/creative/logo.png"
        id="logo"
      /></a>
      
    </div>
  
    <!-- sidebar -->
    
    <div id="sideBar" style="padding-left: 0px;">
      <div id="sidebarNav">
        <img src="../../Images/menu.png" id="menu" class="sidebarNav_img" />
        <img
          src="https://assets.interntheory.com/creative/logo.png"
          id="logo"
          class="sidebarNav_img2"
        />
      </div>
      <div id="sidebarCategories">
        <ul id="sidebarCatagoriesUL">
          <a href="../../Intern_Theory/Home.html"><li class="sidebarTitles">
            <img src="../../Images/home.png" class="sidebarIcons">
            <span class="categoriesHeading">Home</span>
          </li></a>
          <a href="../../Internship/internship.html"><li class="sidebarTitles">
            <img src="../../Images/Internship.PNG" class="sidebarIcons sidebar_list1">
            <span class="categoriesHeading">Internships</span>
          </li></a>
          <a href="../../OnlineCourses/onlineCourse.html"><li class="sidebarTitles">
            <img src="../../Images/Jobs.PNG" class="sidebarIcons sidebar_list2">
            <span class="categoriesHeading">Jobs</span>
          </li></a>
          <a href="../../Internship/internship.html"> <li class="sidebarTitles">
            <img src="../../Images/postinternship.PNG" class="sidebarIcons sidebar_list3">
            <span class="categoriesHeading">Post Internship</span>
          </li></a>
         
          <li class="sidebarTitles" id="expandableCourse">
            <div class="expandableCourse">
              <img src="../../Images/courses.PNG" class="sidebarIcons sidebar_list4">
            <span class="categoriesHeading">Courses</span>
            <i class="fas fa-chevron-down"></i>
            </div>
            <div id="coursesHidden">
              <a href="../../OnlineCourses/onlineCourse.html"><div >Online Courses</div></a> 
              <a href=""><div class="boxHidden">Classroom Training</div></a>
            </div>
          </li>
          <a href="../../contact/contact.html"> <li class="sidebarTitles">
            <img src="../../Images/Contact us.PNG" class="sidebarIcons sidebar_list5">
            <span class="categoriesHeading">Contact Us</span>
          </li></a>
         
          <hr id="sidebarCategoriesHR">
        
          <li class="sidebarTitles" id="expandableRegister">
            <div class="expandableRegister">
              <img src="../../Images/register.PNG" class="sidebarIcons sidebar_list6">
            <span class="categoriesHeading">Register</span>
            <i class="fas fa-chevron-down"></i>
            </div>
            <div id="registerHidden">
              <a href="../../SIGNUP/SignUp-Company/CompanyRegistration.html"><div>Company</div></a>
              <a href="../../SIGNUP/SignUp-Student/StudentRegistration.html"><div>Student</div></a>
            </div>            
          </li>
          <li class="sidebarTitles" id="expandableLogin">
            <div class="expandableLogin">
              <img src="../../Images/login.PNG" class="sidebarIcons sidebar_list7">
            <span class="categoriesHeading">Login</span>
            <i class="fas fa-chevron-down"></i>
            </div>  
            <div id="loginHidden">
              <a href="../../LOGIN/Login-Company/extralogin.html"><div>Company</div></a>
              <a href="../../LOGIN/Login-Student/LoginIn.html"><div>Student</div></a>
            </div>           
          </li>
        </ul>
      </div>
    </div>
    
    <!-- sidebarend -->
    <div id="navEnd">
      <a href=""><img src="../../Images/notification.png" id="cart"></img></a>
      <a href="../Cart/cart.html"><img src="../../Images/shopping_cart.svg" id="cart"></img></a>
      <a href="../../LOGIN/Login-Student/LoginIn.html">  <button>SIGN IN</button></a>
    </div>
  </div>`;
}

function footer() {
  return ` <div id="footerDiv">
      <div>
        <div id="iconDiv">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter-square"></i>
          <div class="fab fa-instagram"></div>
        </div>
        <div id="footerUL">
          <div class="footerList">
            <ul>
              <li class="listHeading">BY PLACE</li>
              <hr class="greyHR" />
              <li>Internships In Mumbai</li>
              <li>Internships In Delhi</li>
              <li>Internships In Bangalore</li>
              <li>Internships In Pune</li>
              <li>Internships In Hyderabad</li>
            </ul>
          </div>
          <div class="footerList">
            <ul>
              <li class="listHeading">BY PROFILE</li>
              <hr class="greyHR" />
              <li>Marketing Internships</li>
              <li>Business Development Internships</li>
              <li>Content Writing Internships</li>
              <li>Graphic Designing Internships</li>
              <li>HR Internships</li>
              <li>Engineering Internships</li>
            </ul>
          </div>
          <div class="footerList">
            <ul>
              <li class="listHeading">BY TYPE</li>
              <hr class="greyHR" />
              <li>Full Time Internships</li>
              <li>Part Time Internships</li>
              <li>Work From Home Internships</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="lastDiv">
        <div id="aboutUsDiv">
          <a href="../../Internship/internship.html"> <div>FIND INTERNSHIP</div></a>
          <a href="../../Internship/internship.html"><div>POST INTERNSHIP</div></a>
          <a href="../../OnlineCourses/onlineCourse.html"> <div>COURSES</div> </a>
          <a href="../../FooterPages/termsconditions.html"> <div>TERMS AND CONDITIONS</div><a>
          <a href="../../FooterPages/privacypolicy.html"> <div>PRIVACY POLICY</div></a>
          <div>CONTACT US</div>
          <a href="../../FooterPages/aboutus.html"><div>ABOUT US</div></a>
          <div>SITEMAP</div>
        </div>
        <hr class="greyHR" />
        <div id="since">© 2015 - 2021 INTERNTHEORY. ALL RIGHTS RESERVED.</div>
      </div>
    </div>`;
}

export { navbar, footer };
