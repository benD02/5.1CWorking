import React from "react";
import "./home.css"; // Import the external CSS file

function Home() {
  return (
   <div className="headerContainer"> 
    <div className="header-image">
      <img src="images/devlink header.jpg" alt="Header Image" />
      <div className="welcome-message">
        <h2>Welcome to Devlink!</h2>
        <p>
          Welcome to DevLink Marketplace, the ultimate web application for
          developers. Whether you are looking for a new project, a new job, or a
          new network, DevLink Marketplace can help you achieve your goals.
          DevLink Marketplace is more than just a job board. It is a community
          of passionate developers who want to share their knowledge, skills,
          and experience with others.
        </p>
        <p>
          You can create your own profile, showcase your portfolio, join
          discussions, and browse through hundreds of opportunities posted by
          clients and employers from all over the world. DevLink Marketplace is
          the place where developers connect, collaborate, and grow. Join us
          today and discover the power of DevLink Marketplace...
        </p>
      </div>
    </div>  

      <div class="featured-freelancers">
        <h2>Featured Freelancers</h2>
        <div class="line-divider"></div>

        <div class="freelancer">
          <div class="freelancer-card">
            <img
              src="./images/profile 1.jpg"
              alt="Freelancer 1"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">John Doe</h4>
            <p class="freelancer-description">
              Full Stack Developer. John has more than 5 years experience and
              over 10 awards.
            </p>
            <div class="freelancer-rating">
              <span>Rating:</span>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </div>

          <div class="freelancer-card">
            <img
              src="./images/profile 2.jpg"
              alt="Freelancer 2"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">Jane Smith</h4>
            <p class="freelancer-description">
              Front End developer. Jane has more than 5 years experience and
              over 10 awards.
            </p>
            <div class="freelancer-rating">
              <span>Rating:</span>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </div>

          <div class="freelancer-card">
            <img
              src="./images/profile 3.jpg"
              alt="Freelancer 2"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">Richard Stevenson</h4>
            <p class="freelancer-description">
              Aenean convallis nisi in magna tristique, id interdum ligula
              viverra.
            </p>
            <div class="freelancer-rating">
              <span>Rating:</span>
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
        </div>
        <br />
        <a href="./freeelancers.html" class="see-more-button">
          See More
        </a>
      </div>
      <div class="featured-customer">
        <h2>Featured Customers</h2>
        <div class="line-divider"></div>

        <div class="freelancer">
          <div class="freelancer-card">
            <img
              src="./images/company 1.jpg"
              alt="Freelancer 1"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">General Software</h4>
            <p class="freelancer-description">
              Software Engineering consultancy firm. Has been a Devlink customer
              for 3 years.
            </p>
            <div class="freelancer-rating"></div>
          </div>

          <div class="freelancer-card">
            <img
              src="./images/company 2.jpg"
              alt="Freelancer 2"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">Elysium Technologies Pty Ltd</h4>
            <p class="freelancer-description">
              Pioneering robotics company. Has been hiring Devlink freelancers
              for 1 year.
            </p>
            <div class="freelancer-rating"></div>
          </div>

          <div class="freelancer-card">
            <img
              src="./images/company 3.jpg"
              alt="Freelancer 2"
              class="freelancer-photo"
            />
            <h4 class="freelancer-name">Interlock inc.</h4>
            <p class="freelancer-description">
              {" "}
              Networking and Cyber Security Company. Been a customer with
              Devlink for 5 years.
            </p>
            <div class="freelancer-rating"></div>
          </div>
        </div>
        <br />
        <a href="./customer.html" class="see-more-button">
          See More
        </a>
        <br />
        <br />
        <br />

        <div class="newsletter-section" >
         <div class="newsletter-container"> 
          <h2>Sign up for the Devlink daily newsletter</h2>
          <form class="newsletter-form">
            <input
              class="newsletter-input"
              type="email"
              placeholder="Enter your email address"
              required
            />
            <br/>
            <button class="newsletter-button" type="submit">Subscribe</button>
          </form>
         </div> 
          <p>Stay updated with the latest news at Devlink.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
