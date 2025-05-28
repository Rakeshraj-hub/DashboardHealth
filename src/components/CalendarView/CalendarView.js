import React from "react";
import Card from "../Card";
import { TbDental } from "react-icons/tb";
import { ICON_SIZE, ICON_COLOR, CARD_COLOR } from "../calenderData"; /*importing color data and icons from calenderData */
import "./CalendarView.css";
import muscle from "../assets/muscle2.jpg";
import injection from "../assets/injection.png";
import heart from "../assets/heart2.png";
import eye from "../assets/eye3.jpg";
import doc from "../assets/doc2.jpg";
import Customcalender from "../Dates";
const CalendarView = () => {
  const MuscleIcon = () => (
    <img src={muscle} alt="muscle" className='icon' />
    
  );

  const InjectionIcon = () => (
    <img src={injection} alt="injection" className='icon' />
    
  );

  const EyeIcon = () => (
    <img src={eye} alt="eye" className='icon' />
    
  );

  const HeartIcon = () => (
    <img src={heart} alt="heart" className='icon' />
    
  );
  const DocIcon = () => (
    <img src={doc} alt="doctor" className='icon' />
    
  );
  return (
    <div className="calenderconatiner">
      <Customcalender/>  
      <div className="cardalign">
        <Card
          doctype="Dentist"
          time="09:00 - 11:00"
          docname="Dr. Cameron Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={ICON_COLOR}
          textColor="white"
        />
        <Card
          doctype="Physiotherapy Appointment"
          time="11:00 - 12:00"
          docname="Dr. Kevin Djones"
          icon=<MuscleIcon/>
          color={CARD_COLOR}
          textColor="black"
        />
      </div>
      <span style={{fontWeight:'bold'}}>The Upcomeing Schedules</span>
      <span style={{color:'grey'}}>On Thursday</span>
      <div className="cardalign">
        <Card
          doctype="Health Checkup Complete"
          time="11:00 AM"
          
          icon={<InjectionIcon />}
          color={CARD_COLOR}
        />
        <Card
          doctype="Opthalmologist"
          time="14 pm"
          
          icon={<EyeIcon />}
          color={CARD_COLOR}
        />
      </div>
      <span style={{color:'grey'}}>On Saturday</span>
      <div className="cardalign">
        <Card
          doctype="Cardiologist"
          time="12:00 AM"
          
          icon={<HeartIcon />}
          color={CARD_COLOR}
        />
        <Card
          doctype="Neurologist"
          time="16:00 PM"
          
          icon={<DocIcon />}
          color={CARD_COLOR}
        />
      </div>
    </div>
  );
};

export default CalendarView;
