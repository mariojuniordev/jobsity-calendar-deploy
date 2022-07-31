import { CreateEventButton } from "../CreateEventButton";
import { MiniCalendar } from "../MiniCalendar";
import { Today } from "../Today";
import { WeatherSearcher } from "../WeatherSearcher";
import { Container } from "./style";

export function Sidebar() {
    return (
        <Container>
            <CreateEventButton/>
            <MiniCalendar/>
            <Today/>
            <WeatherSearcher/>            
        </Container>
    )
}