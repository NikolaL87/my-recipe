import React, { Component } from 'react';
import { Button, Item, Tab, Image, Form, TextArea, Divider, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class RecipeCategoryListItemDetail extends Component {
	UNSAFE_componentWillMount() {
		const recipeId = this.props.match.params.id;

		this.props.dispatch(actions.getMyRecipeById(recipeId));
	}

	firstTab() {
		const { myRecipeSelected } = this.props;
		return (
			<Tab.Pane attached={false}>
				{myRecipeSelected.recipeDetail &&
					myRecipeSelected.recipeDetail.map((detailItem, index) => {
						return (
							<React.Fragment key={index}>
								<h3>INGREDIENTS</h3>
								<div>
									{detailItem.recipeIngredients.map(({ ingredient }, index) => {
										return <p key={index}>{ingredient}</p>;
									})}
								</div>
								<h3>INSTRUCTIONS</h3>
								<p>{detailItem.recipeInstructions}</p>
								<h3>NOTES</h3>
								<p>{detailItem.recipeNotes}</p>
							</React.Fragment>
						);
					})}
			</Tab.Pane>
		);
	}
	secondTab() {
		const { myRecipeSelected } = this.props;
		return (
			<Image.Group size="small">
				{myRecipeSelected.recipeDetail &&
					myRecipeSelected.recipeDetail.map((detailItem, index) => {
						return (
							<div key={index}>
								{detailItem.recipeDetailImage.map(({ image }, index) => {
									return <Image key={index} src={image} />;
								})}
							</div>
						);
					})}
			</Image.Group>
		);
	}
	thirdTab() {
		return (
			<Tab.Pane attached={false}>
				<Form>
					<TextArea placeholder="Tell us more" />
					<Divider hidden />
					<Button secondary>Add your note</Button>
				</Form>
			</Tab.Pane>
		);
	}

	render() {
		const { myRecipeSelected } = this.props;
		const panes = [
			{
				menuItem: 'Recipe',
				render: () => this.firstTab()
			},
			{
				menuItem: 'Photos',
				render: () => this.secondTab()
			},
			{
				menuItem: 'Notes',
				render: () => this.thirdTab()
			}
		];

		return (
			<Container>
				<Item.Group relaxed>
					<Item>
						<Item.Image src={myRecipeSelected.recipeImage} />
						<Item.Content>
							<Item.Header>{myRecipeSelected.recipeTitle}</Item.Header>
							<Item.Description>
								{myRecipeSelected.recipeDetail &&
									myRecipeSelected.recipeDetail.map((detailItem, index) => {
										return <div key={index}>{detailItem.redipeDetailDescription}</div>;
									})}
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		myRecipeSelected: state.myRecipeSelected.data
	};
}

export default connect(mapStateToProps)(RecipeCategoryListItemDetail);
