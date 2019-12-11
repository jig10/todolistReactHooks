import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [todo, setTodo] = useState([
		{
			text: "shower",
			isComplete: false
		},
		{
			text: "eat",
			isComplete: false
		},
		{
			text: "play",
			isComplete: false
		}
	]);
	const [temp, setTemp] = useState();

	const completeTodo = index => {
		console.log("Hello");
	};

	return (
		<div className="text-center mt-5">
			<input
				onChange={event => setTemp(event.target.value)}
				onKeyPress={e => {
					if (e.key === "Enter") {
						setTodo([...todo, { text: temp, isComplete: false }]);
						e.target.value = "";
					}
				}}
			/>
			{todo.map((item, index) => {
				return (
					<div key={index}>
						{item.text}
						<button onClick={() => completeTodo(index)}>x</button>
					</div>
				);
			})}
		</div>
	);
}
