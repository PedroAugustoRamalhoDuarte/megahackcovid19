import React, {Component} from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../../node_modules/@fullcalendar/core/main.css';
import '../../../node_modules/@fullcalendar/daygrid/main.css';


class Calendar extends Component {
    render() {
        return (
            <div className="pt-5 m-3">
                <FullCalendar defaultView="dayGridMonth"
                              plugins={[dayGridPlugin]}
                              eventColor='#38b6ff'
                              events={[
                                  {title: 'Consulta com Pedro', date: '2020-04-07'},
                                  {title: 'Visualização de exames do Igor', date: '2020-04-08'},
                                  {title: 'Consulta com Zannata', date: '2020-04-09'}
                              ]}
                />
            </div>
        )
    }
}

export default Calendar