import { PageTitle } from "components/PageTitle/PageTitle";
import { EventsBoard } from "components/EventsBoard/EventsBoard";
// import { Container } from "components/Container/Container";
import events from './board.json'
import { GlobalStyle } from "Global.styled";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <PageTitle title='24th Core Worlds Coalition Conference'/>
      <EventsBoard events={events}/>
    </>
  );
};
