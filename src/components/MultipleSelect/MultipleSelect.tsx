import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { FilterType } from '../../types/FilterType';

interface Props {
  onSelect: (value: string[]) => void;
}

export const MultipleSelect: React.FC<Props> = ({ onSelect }) => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
    const {
      target: { value },
    } = event;

    const settedValue = typeof value === 'string' ? value.split(',') : value;

    onSelect(settedValue);

    setSelectedCategories(
      settedValue,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: '1', width: '300px' }}>
        <Select
          label="sadasd"
          style={{ background: '#F5F5F5' }}
          placeholder="Select item"
          multiple
          value={selectedCategories}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {Object.values(FilterType).map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedCategories.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
