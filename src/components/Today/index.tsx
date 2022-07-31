import dayjs from "dayjs";
import { Text } from "../UI/Text";

export function Today() {
    return (
    <Text 
        borderRadius="5px" 
        p="8px" 
        backgroundColor="var(--current-line)" 
        mt="16px" 
        color="var(--white)"
        fontWeight="bold"
        variant="h5"
        textAlign="center"
    >
        { `Today: ${dayjs().format('ddd, MMMM DD YYYY')}` }
    </Text>
    )
}