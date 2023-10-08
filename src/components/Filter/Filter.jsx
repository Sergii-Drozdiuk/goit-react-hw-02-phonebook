import PropTypes from 'prop-types';

export const Filter = ({ onSearch, filterValue }) => {
    return <label className="flex flex-col gap-2 items-center mb-2">Find contacts by name
        <input value={filterValue} type="text" onChange={(e) => onSearch(e.target.value)} className="text-black rounded-lg pl-2"></input>
    </label>
}

Filter.propTypes = {
   onSearch: PropTypes.func.isRequired,
   filterValue: PropTypes.string.isRequired,
};