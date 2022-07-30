import { CreateEventButton } from "../CreateEventButton";
import { MiniCalendar } from "../MiniCalendar";
import { Container } from "./style";

export function Sidebar() {
    return (
        <Container>
            <CreateEventButton/>
            <MiniCalendar/>
        </Container>
    )
}