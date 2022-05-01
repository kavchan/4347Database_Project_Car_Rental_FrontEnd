import React, {useState} from "react";
import {Box, Grid, Button, Container, TextField} from "@mui/material";


const NewAccount: React.FC = () => {

    const [password, setPassword] = useState('');

    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [SSN, setSSN] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');


    function handleClick() {
        const query = new URLSearchParams({
            password: password,
            firstname: firstName,
            lastname: lastName,
            ssn: SSN,
            phone: phoneNumber,
            street: street,
            city: city,
            state: state,
            zip: zipCode
        });

        console.log(query.toString());

        fetch(`http://localhost/car_rental/createUser.php?${query}`)
            .then(response => {
                console.log(response.status);

                return response.text();
            })
            .then(text => {
                console.log(text);
            })
            alert('Account Created!');
    }

    return (
        <div>


            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} >

                    <Grid item xs={3}>
                        <TextField
                            required
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            label="Password"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={firstName}
                            onChange={e => setFName(e.target.value)}
                            label="First Name"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={lastName}
                            onChange={e => setLName(e.target.value)}
                            label="Last Name"
                        />
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>

                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={SSN}
                            onChange={e => setSSN(e.target.value)}
                            label="SSN"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="tel"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            label="Phone Number"
                        />
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>

                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                            label="Street"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            label="City"
                        />
                    </Grid>

                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            label="State"
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            required
                            type="text"
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                            label="Zip Code"
                        />
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={handleClick}>CREATE ACCOUNT</Button>
                    </Grid>

                </Grid>

            </Box>

        </div>
    );
};


export default NewAccount