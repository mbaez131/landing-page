import React from 'react';

function AppointmentForm() {
    return (
        <div className="form-container">
    <form className="form1" action="">
      <label for="firstName" className="first-name">First Name</label>
      <input id="firstName" type="text"/>

      <label for="lastName" className="last-name">Last Name</label>
      <input id="lastName" type="text"/>

      <label for="age">Age</label>
      <input id="age" type="text"/>

      <label for="job">Age of Spouse (If Applicable)</label>
      <input id="job" type="text"/>

      <button>Submit</button>
    </form>
    </div>
    )
    
}

export default AppointmentForm;