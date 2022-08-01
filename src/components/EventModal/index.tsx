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
import MaskedInput from "react-text-mask";

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
    const [turn, setTurn] = useState('AM');
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent ? labelsColors.find((lbl) => lbl === selectedEvent.label) : labelsColors[0]
    );

    const [showInvalidTitleMessage, setShowInvalidTitleMessage] = useState(false);
    const [showInvalidDescriptionMessage, setShowInvalidDescriptionMessage] = useState(false);
    const [showInvalidCityMessage, setShowInvalidCityMessage] = useState(false);
    const [showInvalidTimeMessage, setShowInvalidTimeMessage] = useState(false);

    function formatTimeText(tm: string | undefined, trn: string | undefined) {
        if (!tm?.includes('AM') && !tm?.includes('PM')) {
            return `${tm} ${trn}`;
        }

        if (tm?.includes('AM') && trn === 'PM') {
            return tm?.replace('AM', trn);
        }
        
        if (tm?.includes('PM') && trn === 'AM') {
            return tm?.replace('PM', trn);
        }
        
        return tm;
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        if (title === '') {
            setShowInvalidTitleMessage(true);
            return;
        } else {
            setShowInvalidTitleMessage(false);
        }

        if (description === '') {
            setShowInvalidDescriptionMessage(true);
            return;
        } else {
            setShowInvalidDescriptionMessage(false);
        }

        if (city === '') {
            setShowInvalidCityMessage(true);
            return;
        } else {
            setShowInvalidCityMessage(false);
        }

        if (time === '') {
            setShowInvalidTimeMessage(true);
            return;
        } else {
            setShowInvalidTimeMessage(false);
        }

        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
            city,
            time: formatTimeText(time, turn)
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
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSubmit(e)
                                }
                            }}
                        />       
                        {showInvalidTitleMessage && 
                            <Text mt="2px" variant="h5" color="var(--red)">
                                Title is a required field        
                            </Text> 
                        }

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
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e)
                                    }
                                }}
                            />
                            
                        </Flex>
                        {showInvalidDescriptionMessage && 
                            <Text mt="2px" variant="h5" color="var(--red)">
                                Description is a required field        
                            </Text>                                 
                        }

                        <Flex alignItems="center">
                            <Img src={BuildingsIcon} mt="16px" mr="8px" alt="list" height="20px" width="20px"/>
                            
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="Add City" 
                                inputMode="text"
                                required
                                maxLength={20}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e)
                                    }
                                }}
                            />                            
                        </Flex>
                        {showInvalidCityMessage && 
                            <Text mt="2px" variant="h5" color="var(--red)">
                                City is a required field        
                            </Text>                                
                        }

                        <Flex alignItems="center">
                            <Img src={TimerIcon} mt="16px" mr="8px" alt="list" height="20px" width="20px"/>
                            
                            <MaskedInput
                                mask={[ /[0-1]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                                placeholder="00:00"
                                value={time}
                                name="time"
                                size={20}
                                onChange={(e) => setTime(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e)
                                    }
                                }}
                            />

                            <select onChange={(e) => setTurn(e.target.value)}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>                            
                        </Flex>
                        {showInvalidTimeMessage && 
                            <Text mt="2px" variant="h5" color="var(--red)">
                                Time is a required field        
                            </Text>                                 
                        }

                        <Flex justifyContent="space-between" width="100%" mt="16px" alignItems="center" gap="8px">
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