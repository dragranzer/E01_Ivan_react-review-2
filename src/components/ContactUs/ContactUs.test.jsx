import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"

import ContactUs from "./ContactUs";

describe ('ContactUs', () => {
    test('renders ContactUs component', () => {
        render(<ContactUs />)
        
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByText(/Full Name/)).toBeInTheDocument();
        expect(screen.getByText(/Email Address/)).toBeInTheDocument();
        expect(screen.getByText(/Phone Number/)).toBeInTheDocument();
        expect(screen.getByText(/Nationality/)).toBeInTheDocument();
    });

    test('input text for judul pengarang', () => {
        render(<FormPage/>)

        fireEvent.input(
            screen.getByRole('textbox', {name: /nama/i}),
            {target: {value: "Ivan Nizar"}})
        
        fireEvent.input(
            screen.getByRole('textbox', {name: /email/i}),
            {target: {value: "ivannizar@gmail.com"}})
        
        expect(screen.getByLabelText(/Full Name/)).toHaveValue("Ivan Nizar");
        expect(screen.getByLabelText(/Email Address/)).toHaveValue("ivannizar@gmail.com");
    });
})