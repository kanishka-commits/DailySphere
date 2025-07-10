import React from 'react'
import './Leftbar.css'

const Leftbar = () => {
  return (
    <div className="menu">
      <div className="newhabit menu-item">
          New Habit
          <input type="text" placeholder="Drink water"/>
          <button onClick={() => {
            const input = document.querySelector('.newhabit input');
            if (input && input.value.trim() !== '') {
              const event = new CustomEvent('newTaskAdded', { detail: input.value.trim() });
              window.dispatchEvent(event);
              input.value = '';
            }
          }}>Add</button>
      </div>
      <div className="journal menu-item">Daily Journal</div>
      <div className="r-n menu-item">
        <div className="reminders">Reminders</div> 
        <div className="noti">& Notifications</div>
      </div>
      <div className="theme menu-item">Change Themes</div>
      <div className="badges menu-item">Earned Badges</div>
      <div className="sotd menu-item">Your Sphere of <span className="td">The Day</span></div>
    </div>
  )
}

export default Leftbar
