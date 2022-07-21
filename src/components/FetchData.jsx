import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Axios from './axios/Axios';

function FetchData() {

    const [ data, setData ] = useState([]);

    const handleDataFetch = async () => {
        try {
            const options = {
                method : 'get',
                url : '/tenants',
                data,
            }

            const response = await Axios('GET', options.url, false, options.data);

            setData(response.data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log('API call completed');
        }
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    return (
        <Box>
            <Typography variant='h4' component='div'>
                School Names
            </Typography>

            {
                data.map((school) => {
                    return (
                        <Typography variant='h6' component='div' color='primary' key={school.db_name}>
                            {school.db_name}
                        </Typography>
                    )
                })
            }
        </Box>
    )
}

export default FetchData;