import { useEffect, useState } from "react";
import { UserForm, LabelForm, InputForm } from "./Form.styled"

export const Form = ({returnUser, user}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (user) {
            return;
        }
    resetUser()
    }, [user])

    const onChangeForm = (e) => {
        const { value } = e.target;
        switch (e.target.name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'tel':
                setTel(value);
                break;
            case 'address':
                setAddress(value);
                break;
            default:
                break;
        }
        returnUser({name, email, tel, address})
    };

    const resetUser = () => {
        setName('');
        setEmail('');
        setTel('');
        setAddress('');
    };

    return (
        <UserForm>
            <LabelForm>Name
                <InputForm
                    type="text"
                    name="name"
                    placeholder='Name'
                    required
                    value={name}
                    onChange={onChangeForm}
                />
            </LabelForm>
            <LabelForm>Email
                <InputForm
                    type="email"
                    name="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChangeForm}
                />
            </LabelForm>
            <LabelForm>Phone
                <InputForm
                    type="tel"
                    name="tel"
                    placeholder='Phone number'
                    required
                    value={tel}
                    onChange={onChangeForm}
                />
            </LabelForm>
            <LabelForm>Address
                <InputForm
                    type="address"
                    name="address"
                    placeholder='Address'
                    required
                    value={address}
                    onChange={onChangeForm}
                />
            </LabelForm>
        </UserForm>
    )
};