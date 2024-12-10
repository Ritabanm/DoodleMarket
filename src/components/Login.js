import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        style={{ marginTop: '20px' }}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Login;
