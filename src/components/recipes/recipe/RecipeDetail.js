import React, { Component } from 'react';
import { Button, Item, Tab, Image, Form, TextArea, Divider, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const panes = [
  { menuItem: 'Recipe', render: () => 
    <Tab.Pane attached={false}>
      <h3>INGREDIENTS</h3>
      <div>
        <p>25 chicken wings</p>
      </div>
      <h4>BRINE:</h4>
      <div>
        <p>6 cups water ; (up to 8 cups)</p>
        <p>3 tablespoons kosher salt ; (up to 4 tablespoons)</p>
        <p>1 tablespoons onion powder</p>
      </div>
      <h4>MARINADE:</h4>
      <div>
        <p>1/2 cup cilantro ; loosely packed</p>
        <p>4 tablespoons oil</p>
        <p>3 cloves Garlic ; crushed</p>
      </div>
    </Tab.Pane> 
  },
  { menuItem: 'Photos', render: () => 
    <Tab.Pane attached={false}>
      <Image.Group size='small'>
        <Image src={'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/spicy-baked-chicken-wings-00e568.jpg'} />
        <Image src={'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/spicy-baked-chicken-wings-5.jpg'} />
        <Image src={'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/spicy-baked-chicken-wings-00e568.jpg'} />
      </Image.Group>
    </Tab.Pane> 
  },
  { menuItem: 'Notes', render: () => 
    <Tab.Pane attached={false}>
      <Form>
        <TextArea placeholder='Tell us more' />
        <Divider hidden />
        <Button secondary>Add your note</Button>
      </Form>
    </Tab.Pane> 
  },
]

class RecipeDetail extends Component {
	UNSAFE_componentWillMount() {
		const recipeId = this.props.match.params.id;

		this.props.dispatch(actions.getRecipeById(recipeId));
	}

	render() {
		const { recipe } = this.props;
		return (
      <Container>
        <Item.Group relaxed>
          <Item>
            <Item.Image size='middle' src={recipe.recipeImage} />
            <Item.Content verticalAlign='middle'>
              <Item.Header>{recipe.recipeTitle}</Item.Header>
              <Item.Description>
                {recipe.recipeDetail &&
                recipe.recipeDetail.map((detailItem, index) => {
                  return <div key={index}>{detailItem.detail}</div>
                })}
              </Item.Description>
              <Item.Extra>
                <Button>Add more</Button>
              </Item.Extra>
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
		recipe: state.recipe.data
	};
}

export default connect(mapStateToProps)(RecipeDetail);
