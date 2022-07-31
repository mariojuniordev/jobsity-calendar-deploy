import * as yup from "yup";

export const schema = yup.object().shape({
    title: yup.string().max(15).required(),
    description: yup.string().max(30).required(),
    city: yup.string().max(15).required(),
    time: yup.string().required()
});

