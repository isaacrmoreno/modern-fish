class FishControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedFish: null
    };
  }

  handleClick = (id) => {
    if (this.state.selectedFish != null) {
      this.setState({
        selectedTicket: id,
      }); 
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action)
    }
  }


}