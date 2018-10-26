import React, {Component} from 'react';
import {
  Button,
  Item,
  Tab,
  Image,
  Form,
  TextArea,
  Divider,
  Container
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as actions from '../../../../actions';

class RecipeCategoryListItemDetail extends Component {
  UNSAFE_componentWillMount() {
    const recipeId = this.props.match.params.id;

    this
      .props
      .dispatch(actions.getMyRecipeById(recipeId));
  }

  firstTab() {
    const {myRecipeSelected} = this.props;
    return (
      <Tab.Pane attached={false}>
        <React.Fragment>
          {myRecipeSelected &&
            <React.Fragment>
              <h3>MAIN INGREDIENT</h3>
              <div>
                <p>{myRecipeSelected.recipeMainIngredient}</p>
              </div>
            </React.Fragment>
          }
          {
            myRecipeSelected.ingredients && 
            <React.Fragment>
              <h3>INGREDIENTS</h3>
              <div>
                {myRecipeSelected.ingredients && 
                myRecipeSelected.ingredients.map((ingredient, index) => {
                    return (
                      ingredient ? (<div key={index}>
                        <p>{ingredient.quantity}</p>
                        <p>{ingredient.measure}</p>
                        <p>{ingredient.item}</p>
                        <p>{ingredient.prepNotes}</p>
                      </div>) : null
                    )
                  })}
              </div>
            </React.Fragment>
          }
          {myRecipeSelected.recipePreparation &&
            <React.Fragment>
              <h3>INSTRUCTIONS</h3>
              <p>{myRecipeSelected.recipePreparation}</p>
            </React.Fragment>
          }
          {
            myRecipeSelected.recipeNotes &&
            <React.Fragment>
              <h3>NOTES</h3>
              <p>{myRecipeSelected.recipeNotes}</p>
            </React.Fragment>
          }
        </React.Fragment>

      </Tab.Pane>
    );
  }
  secondTab() {
    const {myRecipeSelected} = this.props;
    return (
      <Image.Group size="small">
        <div>
          {myRecipeSelected.recipeDetailImage &&myRecipeSelected.recipeDetailImage.map(({
            image
          }, index) => {
            return <Image key={index} src={image}/>;
          })}
        </div>

      </Image.Group>
    );
  }
  thirdTab() {
    return (
      <Tab.Pane attached={false}>
        <Form>
          <TextArea placeholder="Tell us more"/>
          <Divider hidden/>
          <Button secondary>Add your note</Button>
        </Form>
      </Tab.Pane>
    );
  }

  render() {
    const {myRecipeSelected} = this.props;
    const panes = [
      {
        menuItem: 'Recipe',
        render: () => this.firstTab()
      }, {
        menuItem: 'Photos',
        render: () => this.secondTab()
      }, {
        menuItem: 'Notes',
        render: () => this.thirdTab()
      }
    ];

    return (
      <Container>
        <Item.Group relaxed>
          <Item.Header><h2>{myRecipeSelected.recipeTitle}</h2></Item.Header>
          <Item>
            <Item.Image src={myRecipeSelected.recipeImage}/>
            <Item.Content>
              <Item.Description>
                {myRecipeSelected.recipeDescription}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Tab
          menu={{
          secondary: true,
          pointing: true
        }}
          panes={panes}/>
        <Divider hidden />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {myRecipeSelected: state.myRecipeSelected.data};
}

export default connect(mapStateToProps)(RecipeCategoryListItemDetail);
