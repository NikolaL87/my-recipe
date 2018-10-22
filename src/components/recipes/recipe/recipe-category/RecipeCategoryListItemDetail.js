import React, { Component } from 'react';
import { Button, Item, Tab, Image, Form, TextArea, Divider, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class RecipeCategoryListItemDetail extends Component {

	UNSAFE_componentWillMount() {
		const recipeId = this.props.match.params.id;

		this.props.dispatch(actions.getRecipeById(recipeId));
	}

  firstTab() {
    const {recipeSelected} = this.props;
    return (  
    <Tab.Pane attached={false}>
    {recipeSelected.recipeDetail &&
    recipeSelected.recipeDetail.map((detailItem, index) => {
      return (
        <React.Fragment key={index}>
          <h3>INGREDIENTS</h3>
          <div>
            {detailItem.recipeIngredients.map(({ingredient}, index) =>{
              return <p key={index}>{ingredient}</p>
            })
            } 
          </div>
        </React.Fragment>
      )
    })
    } 
    </Tab.Pane>
    )
  }
  secondTab() {
    const {recipeSelected} = this.props;
    return (
      <Image.Group size="small">
        {recipeSelected.recipeDetail &&
          recipeSelected.recipeDetail.map((detailItem, index) => {
            return (
              <div key={index}>
                {detailItem.recipeDetailImage.map(({image}, index) =>{
                  return <Image key={index} src={image} />
                })}
              </div>
            )
          })
        }
      </Image.Group>
    )
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
    )
  }

	render() {
    const { recipeSelected } = this.props;
    const panes = [
      {
        menuItem: 'Recipe',
        render: () => (
          this.firstTab()
        )
      },
      {
        menuItem: 'Photos',
        render: () => (
          this.secondTab()
        )
      },
      {
        menuItem: 'Notes',
        render: () => (
          this.thirdTab()
        )
      }
    ];

		return (
			<Container>
				<Item.Group relaxed>
					<Item>
						<Item.Image src={recipeSelected.recipeImage} />
						<Item.Content>
							<Item.Header>{recipeSelected.recipeTitle}</Item.Header>
							<Item.Description>
								
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
		recipeSelected: state.recipeSelected.data
	};
}

export default connect(mapStateToProps)(RecipeCategoryListItemDetail);
