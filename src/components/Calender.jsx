import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NavLink } from 'react-router-dom';

const Calender = (props) => {

    const { location: { state: { activities } } } = props;
    const months = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    }

    let events;

    if (activities.length > 0) {
        events = activities.map((i, index) => {
            let arr = i.start_time.split(' ');
            return {
                title: `event ${index + 1}`, date: `${arr[2]}-${months[arr[0]]}-${arr[1].length > 1 ? arr[1] : '0' + arr[1]}`, textColor: 'yellow'
            }
        })
    }

    console.log(events);

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    )
};

export default Calender;