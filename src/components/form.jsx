import React from 'react';

function AppointmentForm() {
    return (
        <div class="container">
  <form className="form-back">
    <img className="logo-img" src="./BIG LOGO.jpg"/>
    <ul class="flex-outer">
      <li>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="Enter your first name here"/>
      </li>
      <li>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Enter your last name here"/>
      </li>
      <li>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email here"/>
      </li>
      <li>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" placeholder="Enter your phone here"/>
      </li>
      <li>
        <label for="phone">ZipCode</label>
        <input type="tel" id="phone" placeholder="Enter your phone here"/>
      </li>
      <li>
        <label for="phone">Child Age (If Applicable)</label>
        <input type="tel" id="phone" placeholder="Enter your phone here"/>
      </li>
      <li>
      <label for="message">Message</label>
        <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
      </li>
      <li>
        <button type="submit">Submit</button>
      </li>
    </ul>
  </form>
</div>
    )
    
}

export default AppointmentForm;