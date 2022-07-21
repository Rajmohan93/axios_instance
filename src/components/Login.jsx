import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import Axios from './axios/Axios';

function Login() {

    const [ inputData, setInputData ] = useState({
        db_username : 'malar_school',
        portal_password : 'Malar@2022',
    });

    const handleSubmit = async () => {
        try {
            const options = {
                method : 'post',
                url : '/admin/loginadmin',
                data : inputData,
            }

            const response = await Axios(options.method, options.url, false, options.data);

            if(response.status === 200) {
                alert('Login Successful');
            }
        }
        catch (error) {
            alert('Invalid Credentials');
        }
        finally {
            console.log('Login API call completed');
        }
    }

    return (
        <Box>
            <Button
                type='submit'
                variant='contained'
                color='primary'
                onClick={handleSubmit}>
                Login
            </Button>
        </Box>
    )
}

export default Login;