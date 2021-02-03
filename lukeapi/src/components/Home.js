import React, {useState } from 'react';
import { Button , NativeSelect , InputLabel ,TextField } from '@material-ui/core';


const Home = (props) => {
    const [selected, setSelected] = useState();
    const handleSelect = (event) => {
        setSelected(event.target.value.toLowerCase())
    }

    const [number, setNumber] = useState();
    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    return(
        <div>
            <center>
            <InputLabel htmlFor="select"> Search For : </InputLabel>
            <NativeSelect labelId="label" id="select" name="select" onChange={handleSelect}>
                <option>Planets</option>
                <option>People</option> 
                </NativeSelect>
            <label>ID: </label>
            <TextField id="outlined-basic" label="Search" variant="outlined" type="number" value={number} onChange={handleNumber}></TextField>

            <Button variant="contained" color="secondary" onClick={() => props.handleClick(selected, number)}>Search</Button>
            </center>
        </div>
        
    );
};

export default Home;