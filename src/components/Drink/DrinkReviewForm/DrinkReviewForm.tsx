import {
    Box,
    Button,
    chakra,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Text,
    VStack,
    Textarea,
} from "@chakra-ui/react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { BiExit } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import * as Yup from "yup";

// type Props = {
//     authType: string;
// };

interface Values {
    email: string;
    password: string;
}

// Give the components chakra props
const Form = chakra(FormikForm);
const ExitIcon = chakra(BiExit);
const VisibleEye = chakra(AiFillEye);
const InvisibleEye = chakra(AiFillEyeInvisible);

const AuthForm = () => {
    const [value, setValue] = useState("");

    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    // const handleOnClick = () => {};

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8, "Must be at least 8 characters").required("Required"),
    });

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
                setTimeout(() => {
                    console.log("submitted", values);
                    actions.setSubmitting(false);
                    actions.resetForm();
                }, 2000);
            }}
            validationSchema={validationSchema}
        >
            {(props) => (
                <VStack spacing={2}>
                    <Textarea
                        placeholder="첫 후기를 남겨주세요"
                        value={value}
                        onChange={handleInputChange}
                        bg="#F3F3F3"
                        fontSize={12}
                    />
                    <Button
                        type="submit"
                        isLoading={props.isSubmitting}
                        w="100%"
                        colorScheme="red"
                        fontWeight="700"
                        borderRadius="15"
                        bg="#FFE1E9"
                        _hover={{ backgroundColor: "#FFE1E9" }}
                    >
                        <Text flex={6} fontSize={12} color="#BD8593">
                            댓글 등록하기
                        </Text>
                    </Button>
                </VStack>
            )}
        </Formik>
    );
};

export default AuthForm;
