import React, { Fragment, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';

function ListItems() {

    const [ checked, setChecked ] = useState([]);

    const persons = [{
        id : 1,
        name : 'Parvathi'
    }, {
        id : 2,
        name : 'Srinivas'
    }, {
        id : 3,
        name : 'Raman'
    }, {
        id : 4,
        name : 'Lakshmi'
    }];

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    console.log(checked);

    return (
        <Fragment>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {persons.map((value) => {
                    const labelId = `checkbox-list-label-${value.id}`;

                    return (
                        <ListItem key={value.id} disablePadding>
                            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            "aria-labelledby": labelId
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value.name}/>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Fragment>
    );
}

export default ListItems;