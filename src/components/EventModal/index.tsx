import { Button } from "../UI/Button";
import { Container, Footer, Form, InfoContainer } from "./style";
import CloseIcon from "./assets/close.svg";
import DragIcon from "./assets/list.svg";
import CalendarIcon from "./assets/calendar.svg";
import BookmarkIcon from "./assets/bookmark.svg";
import ListDasshesIcon from "./assets/list-dashes.svg";
import CheckIcon from "./assets/check.svg";
import TrashIcon from "./assets/trash.svg";
import BuildingsIcon from "./assets/buildings.svg";
import TimerIcon from "./assets/clock-clockwise.svg";
import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext/GlobalContext";
import { Flex } from "../UI/Flex";
import { Img } from "../UI/Img";
import { Text } from "../UI/Text";
import { labelsColors } from "../../data/data";

export function EventModal() {
    const {
        setShowEventModal, 
        daySelected, 
        dispatchCalEvent, 
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(selectedEvent?.title ?? '');
    const [description, setDescription] = useState(selectedEvent?.description ?? '');
    const [city, setCity] = useState(selectedEvent?.city ?? '');
    const [time, setTime] = useState(selectedEvent?.time ?? '');
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent ? labelsColors.find((lbl) => lbl === selectedEvent.label) : labelsColors[0]
    );

    function handleSubmit(e: any) {
        e.preventDefault();

        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
            city,
            time
        }

        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: 'push', payload: calendarEvent });
        }

        setShowEventModal(false);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Flex 
                    backgroundColor="var(--background)" 
                    justifyContent="space-between" 
                    p="16px"
                    alignItems="center"
                    borderRadius="8px 8px 0px 0px"
                >
                    <Flex>

                        <Img height="24px" width="24px" src={DragIcon} alt="drag" />
                        
                        {selectedEvent && (
                            <Button 
                                onClick={() => {
                                    dispatchCalEvent({type: 'delete', payload: selectedEvent});
                                    setShowEventModal(false);
                                }} 
                                backgroundColor="var(--background)"
                            >
                                <Img height="24px" width="24px" src={TrashIcon} alt="Close"/>
                            </Button>
                        )}

                    </Flex>

                    <Button 
                        onClick={() => setShowEventModal(false)} 
                        backgroundColor="var(--background)"
                    >
                        <Img height="24px" width="24px" src={CloseIcon} alt="Close"/>
                    </Button>
                </Flex>

                <Flex p="3px" pr="16px" pl="16px">
                    <InfoContainer>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Add Title" 
                            required
                            maxLength={15}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <Flex mt="16px" alignItems="center">
                            <Img src={CalendarIcon} mr="8px" alt="clock" height="20px" width="20px"/>

                            <Text textAlign="center" variant="h4" color="var(--white)">
                                { daySelected?.format("dddd, MMMM DD, YYYY") }
                            </Text>
                        </Flex>

                        <Flex alignItems="center">
                            <Img src={ListDasshesIcon} mt="16px" mr="8px" alt="list" height="20px" width="20px"/>
                            
                            <input 
                                type="text" 
                                name="description" 
                                placeholder="Add Description" 
                                inputMode="text"
                                required
                                maxLength={30}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Flex>

                        <Flex alignItems="center">
                            <Img src={BuildingsIcon} mt="16px" mr="8px" alt="list" height="20px" width="20px"/>
                            
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="Add City" 
                                inputMode="text"
                                required
                                maxLength={15}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Flex>

                        <Flex alignItems="center">
                            <Img src={TimerIcon} mt="16px" mr="8px" alt="list" height="20px" width="20px"/>
                            
                            <input 
                                type="text" 
                                name="time" 
                                placeholder="Add Time" 
                                inputMode="numeric"
                                required
                                maxLength={15}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </Flex>

                        <Flex mt="16px" alignItems="center" gap="8px">
                            <Img src={BookmarkIcon} alt="bookmark" height="20px" width="20px" />
                            {labelsColors.map((label, index) =>
                                <Button 
                                    onClick={() => setSelectedLabel(label)}
                                    key={index} 
                                    backgroundColor={label} 
                                    borderRadius="50px"
                                    p="2px"
                                    height="20px"
                                    width="20px"
                                >
                                    {selectedLabel === label &&
                                    <Img src={CheckIcon} alt="clock" height="16px" width="16px"/>}
                                </Button>
                            )}
                        </Flex>
                            
                    </InfoContainer>
                </Flex>

                <Footer>
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        backgroundColor="var(--cyan)"
                        p="6px 16px 6px 16px"
                        borderRadius="5px"
                    >
                        <Text variant="h4" color="var(--background)">Save</Text>
                    </Button>
                </Footer>
            </Form>
        </Container>
    )
}