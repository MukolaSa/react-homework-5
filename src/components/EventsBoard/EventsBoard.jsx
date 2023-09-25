import { Event } from 'components/Event/Event';
import { List } from './EventsBoard.styled'

export const EventsBoard = ({events}) => {
  return (
    <>
      <List>
        {events && events.map(event =>(
            <Event key={event.name} list={event}/>
        ))}
      </List>
    </>
  );
};

