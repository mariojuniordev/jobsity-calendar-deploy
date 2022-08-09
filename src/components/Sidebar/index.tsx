import { SidebarProps } from "../../dtos/siderbar";
import { CreateEventButton } from "../CreateEventButton";
import { MiniCalendar } from "../MiniCalendar";
import { SidebarDayEvent } from "../SidebarDayEvent";
import { Today } from "../Today";
import { WeatherSearcher } from "../WeatherSearcher";
import { Container } from "./style";

export function Sidebar({ month }: SidebarProps) {
    return (
        <Container>
            <CreateEventButton/>
            <MiniCalendar/>
            <Today/>
            <WeatherSearcher/>     
            <SidebarDayEvent month={month}/>       
        </Container>
    )
}