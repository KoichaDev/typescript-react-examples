type ListProps<T> = {
	items: T[];
	onAddOnClickItem: (value: T) => void;
};

const List = <T extends { id: number; firstName: string; lastName: string }>({
	items,
	onAddOnClickItem,
}: ListProps<T>) => {
	return (
		<>
			<h2>List of Items</h2>
			{items.map((item) => {
				return (
					<div key={item.id} onClick={() => onAddOnClickItem(item)}>
						<p>
							{item.firstName} {item.lastName}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default List;
