import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => {
	return <ul>
		{contacts.map(({ id, name, number }) => (
			<li key={id}>
				<p>{name}: {number}</p>
				<button type="button" onClick={() => onRemoveContact(id)}>Delete</button>
			</li>
		))}
	</ul>
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	onRemoveContact: PropTypes.func.isRequired,
};