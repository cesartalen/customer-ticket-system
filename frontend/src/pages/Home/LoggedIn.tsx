import { Link } from 'react-router-dom';
import { TicketList } from '../../components/TicketList';

export default function LoggedIn() {
  return(
    <>
      <div className='home-contents'>
        <div className='home-labels'>
          <a className='home-title'>Manage tickets</a>
          <a className='home-subtitle'>Create a new ticket, or view your active tickets</a>
        </div>
        <div className='home-options-logged-in'>
        <div><Link to='createTicket'><button>Create a new Ticket</button></Link></div>
        <TicketList/>
        </div>
      </div>
    </>
  )
}