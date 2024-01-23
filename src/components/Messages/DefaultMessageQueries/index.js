// DefaultMessageQueries.js

import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { h } from "preact";
import styles from "./styles.scss";
import { createClassName } from "../../helpers";

class DefaultMessageQueries extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// If you need to manage state, you can initialize it here
		};
	}

	handleOptionClick = (question) => {
		// Handle the option click, e.g., update state or trigger further actions
		console.log(`Selected option: ${question}`);
		// Invoke the callback function passed from the parent with the selected query
		this.props.onQuerySelect(question);
	};

	render() {
		const queries = [
			{ id: 1, question: "How can I assist you?" },
			{ id: 2, question: "Do you need help with an order?" },
			{
				id: 3,
				question:
					"Facing technical issues?",
			},
			{ id: 4, question: "Any other assistance needed?" },
		];

		return (
			<div className={createClassName(styles, "queries-wrapper")}>
				<p>How can I help?</p>
				<ul>
					{queries.map((query) => (
						<li key={query.id}>
							<button onClick={() => this.handleOptionClick(query.question)}>
								{query.question}
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withTranslation()(DefaultMessageQueries);
