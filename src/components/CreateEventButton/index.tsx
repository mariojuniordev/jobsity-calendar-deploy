import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext/GlobalContext";
import { Button } from "../UI/Button";
import { Text } from "../UI/Text";
import PlusIcon from "./assets/plus.svg"

export function CreateEventButton() {

    const { setShowEventModal } = useContext(GlobalContext);

    return (
        <Button
            onClick={() => setShowEventModal(true)}
            p="2px"
            borderRadius="50px"
            backgroundColor="var(--background)"
            border="1px solid var(--cyan)"
        >
            <img height={20} width={20} src={PlusIcon} alt={"create_event_reminder"} title={"Add new event/reminder"} />
            <Text color="var(--cyan)" pl="3px" pr="7px">Create</Text>
        </Button>
    );
}