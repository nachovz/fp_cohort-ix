const getState = ({ getStore, setStore }) => {
	return {
		store: {
			product: [
				{
					name: "toy1",
					price: "$11",
					image: "https://picsum.photos/id/1070/430/180",
					description: "white",
					age_group: "1-2",
					weight: "123lbs",
					category: ""
				},
				{
					name: "toy2",
					price: "$13",
					image: "https://picsum.photos/id/905/430/180",
					description: "yellow",
					age_group: "10-12",
					weight: "80lbs",
					category: ""
				},
				{
					name: "toy3",
					price: "$15",
					image: "https://picsum.photos/id/295/430/180",
					description: "blue",
					age_group: "13+",
					weight: "2lbs",
					category: ""
				},
				{
					name: "toy4",
					price: "$200",
					image: "https://picsum.photos/id/1060/430/180",
					description: "red",
					age_group: "5-7",
					weight: "24lbs",
					category: ""
				}
			],
			user: [
				{
					full_name: "ff",
					address: "",
					phone_number: "",
					e_mail: "",
					password: "",
					city: "",
					state: "",
					zip: ""
				}
			],
			cartItem: [
				{
					name: "mm",
					price: "aa",
					image: "https://picsum.photos/id/931/120/80",
					description: "ss",
					quantity: "33"
				}
			]
		},
		actions: {
			addToCart: koala => {
				debugger;
				var tempStore = getStore();
				console.log(tempStore);
				tempStore.cartItem.push(koala);
				setStore({ tempStore });
			},
			deleteElement: index => {
				let tempState = this.state;
				tempState.list.splice(index, 1);
				this.setState(tempState);
			}
		}
	};
};

export default getState;
