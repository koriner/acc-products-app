import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles.module.scss';

export default function NavBar(props) {
  const handleChangeFilter = () => {};
  const value = 'default';

  return (
    <div className={styles.navBar}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h3" className={styles.title}>
            Products!
          </Typography>
          <FormControl variant="filled" className={styles.formControl}>
            <InputLabel id="select-filter-label">Filter:</InputLabel>
            <Select
              labelId="select-filter-label"
              id="select-filter-label"
              value={''}
              onChange={handleChangeFilter}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
