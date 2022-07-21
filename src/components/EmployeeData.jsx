import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Axios from './axios/Axios';

function EmployeeData() {

    const [ employeeData, setEmployeeData ] = useState([]);

    const fetchEmployeeData = async () => {
        try {
            const options = {
                method : 'get',
                url : '/employees/view?tenantId=b3cfd3f6-98fe-4f04-b85d-44edae31ac22',
                auth : true,
                employeeData,
                role : true,
            }

            const response = await Axios(options.method, options.url, options.auth, options.employeeData, options.role);

            setEmployeeData(response.data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log('Teachers API call completed');
        }
    }

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    return (
        <Box>
            <Typography variant='h4' component='div'>
                Employee Data
            </Typography>

            {
                employeeData.map((employee) => {
                    return (
                        <Typography variant='h6' component='div' color='primary' key={employee.emp_id}>
                            {employee.emp_name}
                        </Typography>
                    )
                })
            }
        </Box>
    )
}

export default EmployeeData;