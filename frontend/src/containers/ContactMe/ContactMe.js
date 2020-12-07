import React from "react";
import Form from "../../components/AllAboutForm/Form/Form";
import Input from "../../components/AllAboutForm/Input/Input";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { ContactMainContainer, FormWrapper, Plx } from "./ContactMe.css";
import { formData, parallaxData } from "./ContactMeData";
import axios from "axios";

const Contact = () => {
    const handleSubmit = (data) => {
        axios.post('http://localhost:8000/contacts', {
            title: data.title,
            email: data.email,
            message: data.message
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <ContactMainContainer>
            <SectionDescription
                title="Skontaktuj się ze mną"
                subTitle="Wypełnij formularz"
            />
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    {formData.map((item) =>
                        <Input
                            name={item.name}
                            label={item.label}
                            required={item.required}
                            placeholder={item.placeholder}
                            textarea={item.textarea}
                        />
                    )}
                </Form>
            </FormWrapper>
        </ContactMainContainer>
    )
}

export default Contact;