import { Fragment } from "react";
import { SidebarDayEventProps } from "../../dtos/sidebarDayEvent";
import { Flex } from "../UI/Flex";
import { SidebarDay } from "./SidebarDay";
import { Container } from "./style";

export function SidebarDayEvent({ month }: SidebarDayEventProps) {
    return (
        <Container>
            {month.map((row, index) => 
                <Fragment key={index}>
                    {row.map((day, i) =>
                        <SidebarDay day={day} key={i} />
                    )}
                </Fragment>
            )}
        </Container>
    )
}