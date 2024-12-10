import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container maxWidth="md">
            <Box textAlign="center" mt={5}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Doodle Market
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Buy and sell your drawings with ease, powered by creativity and fun!
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/register"
                    style={{ marginTop: '20px' }}
                >
                    Get Started
                </Button>
            </Box>
        </Container>
    );
}

export default Home;
