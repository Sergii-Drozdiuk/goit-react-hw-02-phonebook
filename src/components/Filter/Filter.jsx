import PropTypes from 'prop-types';

export const Filter = ({ onSearch, filterValue }) => {
    return <label>Find contacts by name
        <input value={filterValue} type="text" onChange={(e) => onSearch(e.target.value)}></input>
    </label>
}

Filter.propTypes = {
   onSearch: PropTypes.func.isRequired,
   filterValue: PropTypes.string.isRequired,
};