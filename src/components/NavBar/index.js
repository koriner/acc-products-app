import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles.module.scss';

const NavBar = props => {
  const { productTypes, filter, onChangeFilter } = props;

  /**
   * Change handler for filter select dropdown
   *
   * @param {Event} event
   */
  const handleChangeFilter = event => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.navBar}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h5" className={styles.title}>
            Products!
          </Typography>
          <div className={styles.rhs}>
            <Typography className={styles.rhsLabel} variant="h5">Filter by:</Typography>
            <FormControl className={styles.formControl}>
              <Select
                displayEmpty
                className={styles.select}
                labelId="select-filter-label"
                id="select-filter-label"
                value={filter}
                onChange={handleChangeFilter}
              >
                <MenuItem value="all">All</MenuItem>
                {productTypes.map((type, idx) => (
                  <MenuItem key={idx} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  productTypes: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired
};

NavBar.defaultProps = {
  filter: 'all'
};

export default NavBar;
