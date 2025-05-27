import React from "react";
import Card from "../Card";
import { TbDental } from "react-icons/tb";
import { ICON_SIZE, ICON_COLOR, CARD_COLOR } from "../constant";
import "./CalendarView.css";
import Customcalender from "../Customcalender";
const CalendarView = () => {
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
          docname="Dr. Kelvin Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={CARD_COLOR}
          textColor="black"
        />
      </div>
      <span style={{fontWeight:'bold'}}>The Upcomeing scheduled</span>
      <span style={{color:'grey'}}>On Thursday</span>
      <div className="cardalign">
        <Card
          doctype="Health checkup complete"
          time="11:00 AM"
          // docname="Dr. Cameron Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={CARD_COLOR}
        />
        <Card
          doctype="Opthalmologist"
          time="14 pm"
          // docname="Dr. Kelvin Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={CARD_COLOR}
        />
      </div>
      <span style={{color:'grey'}}>On Saturday</span>
      <div className="cardalign">
        <Card
          doctype="Cardiologist"
          time="12:00 AM"
          // docname="Dr. Cameron Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={CARD_COLOR}
        />
        <Card
          doctype="Neurologist"
          time="16:00 PM"
          // docname="Dr. Kelvin Williamson"
          icon={<TbDental size={ICON_SIZE} />}
          color={CARD_COLOR}
        />
      </div>
    </div>
  );
};

export default CalendarView;
