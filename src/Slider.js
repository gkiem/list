import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Slider() {

  const [pinned,setPinned] = React.useState()
    
  const valueChange = (e) => {
      setPinned(e.target.value)
  }
    const FilterButtons = () => {
        
    
        return(
            
                <RadioGroup row onChange={valueChange} value={pinned} name='radio-button-filter'>
                    <FormControlLabel value='' control={<Radio />} label='All'/>
                    <FormControlLabel value='THN' control={<Radio />} label='THN'/>
                    <FormControlLabel value='KGB' control={<Radio />} label='KGB'/>
                    <FormControlLabel value='NEW' control={<Radio />} label='NEW'/>
                    <FormControlLabel value='MAN' control={<Radio />} label='MAN'/>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
        )
    }
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <FormControl>
      <RadioGroup
        
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <FormControl>
        <FilterButtons/>
        </FormControl>
    </FormControl></>
  );
}