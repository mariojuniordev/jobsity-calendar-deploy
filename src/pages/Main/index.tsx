import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { BackgroundImg, Container, TextContainer } from "./style";
import BgImage from "./assets/bg.jpg";
import CalendarIcon from './assets/calendar.svg';
import { Img } from "../../components/UI/Img";

export default function Main() {

    const navigate = useNavigate();

    return (
        <>
            <BackgroundImg src={BgImage} alt="bg"/>

            <Container>
                
                <Img src={CalendarIcon} alt="calendar_icon" height="150px" width="150px"/>
                <Heading color="var(--purple)">Calendar</Heading>

                <TextContainer>
                    <Text fontWeight="bold" variant="h2" color="var(--green)">An interactive calendar</Text> 
                    with amazing features for your daily
                    <Text fontWeight="bold" variant="h2" color="var(--cyan)">events and reminders</Text> 
                    <Text fontWeight="bold" variant="h2" color="var(--pink)"> with weather forecast integration</Text> 
                </TextContainer>

                <Button 
                    onClick={() => navigate('/calendar')}
                    backgroundColor="var(--gray-blue)" 
                    p="16px"
                    borderRadius="50px"
                >
                    <Text variant="h2" color="var(--white)" fontWeight="bold"> 
                        GET STARTED
                    </Text>
                </Button>
            </Container>
        </>
    )
}