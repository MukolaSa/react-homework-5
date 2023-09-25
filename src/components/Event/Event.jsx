import { StyledEvent, StyledText, StyledTitle, Type } from './Event.styled'
import { FaMapMarkerAlt, FaUserAlt, FaClock } from 'react-icons/fa'
import { MdEventNote } from 'react-icons/md'


export const Event = ({ list }) => {

const dateString = '2022-04-12T18:00:00'
const dateObject = new Date(dateString)

const end = '2022-04-12T19:00:00'
const endObject = new Date(end)

  // Розрахунок різниці у мілісекундах
  const diffMilliseconds = endObject - dateObject;

  // Розрахунок годин і хвилин
  const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

    return (
          <StyledEvent>
            <StyledTitle>{list.name}</StyledTitle>
            <StyledText><FaMapMarkerAlt color='red'/> {list.location}</StyledText>
            <StyledText><FaUserAlt color='blue'/> {list.speaker}</StyledText>
            <StyledText><MdEventNote color='green'/>{dateObject.toLocaleString()}</StyledText>
            <StyledText><FaClock color='orange'/> {diffHours} {diffMinutes}</StyledText>
            <Type>{list.type}</Type>
          </StyledEvent>
    );
  };

  