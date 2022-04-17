type StatusProps = {
	status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
	let messageStatus = '';

	if (props.status === 'loading') {
		messageStatus = 'Loading...';
	}

	if (props.status === 'success') {
		messageStatus = 'Data fetched successfully!';
	}

	if (props.status === 'error') {
		messageStatus = 'Error fetching data!';
	}

	return <div>status - {messageStatus}</div>;
};
