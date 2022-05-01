import React, {useState} from "react";
import {Box, Grid, Button, Container, TextField} from "@mui/material";


const CheckOut: React.FC = () => {

    const [transactionId, setTransactionId] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [amount, setAmount] = useState('');

    function handleClick() {
        const query = new URLSearchParams({
            // transactionId: transactionId,
            cardNumber: cardNumber,
            expDate: expDate,
            cardHolder: cardHolder,
            amount: amount
        });

        console.log(query.toString());

        fetch(`http://localhost/car_rental/payment.php?${query}`)
            .then(response => {
                console.log(response.status);
                return response.text();
            })
            .then(text => {
                console.log(text);
            })
            alert('Payment Added!');
    }

    return (
        <div>


            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} >
                    <Grid item xs={3}>

                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            required
                            type="text"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                            label="Card Number"
                        />
                    </Grid>


                    <Grid item xs={6}>
                        <TextField
                            required
                            type="text"
                            value={expDate}
                            onChange={e => setExpDate(e.target.value)}
                            label="Expiration Date"
                        />
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            required
                            type="text"
                            value={cardHolder}
                            onChange={e => setCardHolder(e.target.value)}
                            label="Card Holder SSN"
                        />
                    </Grid>

                    <Grid item xs={3}>

                    </Grid>

                    <Grid item xs={9}>
                        <TextField
                            required
                            type="text"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            label="Total Amount"
                        />
                    </Grid>
                    <Grid item xs={9}>

                    </Grid>

                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={handleClick}>Check Out</Button>
                    </Grid>

                </Grid>

            </Box>
        </div>
    );
};


export default CheckOut