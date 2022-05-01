import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";


interface LoginProps {
    onLogin(): void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {

    const navigate = useNavigate();
    //currently, username is SSN in backend.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        const query = new URLSearchParams({
            username: email,
            password: password
        });

        fetch(`http://localhost/car_rental/login.php?${query}`)
            .then(r => r.text())
            .then(txt => {
                if(txt.includes("Logged in as")){
                    alert("Logged In!");
                    onLogin();
                    navigate('/inventory');
                }
                else {
                    alert("Failed to login")
                }
            });
    }

    return (
        <div>
            <TextField
                required
                type={'email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                label={'SSN'} >
            </TextField>
            <TextField
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
            />
            <Grid item xs={12}>
                <Button variant="outlined" onClick={handleClick}>
                    LOGIN
                </Button>
            </Grid>
        </div>
    );

};

export default Login