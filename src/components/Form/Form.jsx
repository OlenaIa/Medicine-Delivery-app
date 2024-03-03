import { useState } from "react";
import { UserForm, LabelForm, InputForm } from "./Form.styled"

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');

    return (
        <UserForm>
            <LabelForm>Name
                <InputForm
                    type="name"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </LabelForm>
            <LabelForm>Email
                <InputForm
                    type="email"
                    placeholder='Email'
                    value={email}
                                        onChange={(e) => setEmail(e.target.value)}

/>
            </LabelForm>
            <LabelForm>Phone
                <InputForm
                    type="tel"
                    placeholder='Phone number'
                    value={tel}
                                        onChange={(e) => setTel(e.target.value)}

                />
            </LabelForm>
            <LabelForm>Address
                <InputForm
                    type="address"
                    placeholder='Address'
                    value={address}
                                        onChange={(e) => setAddress(e.target.value)}

                />
            </LabelForm>

        </UserForm>
    )
}