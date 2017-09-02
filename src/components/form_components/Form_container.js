import React, {Component} from 'react';  
import CheckboxGroup from './CheckboxGroup';  
import SingleInput from './SingleInput';  
import TextArea from './TextArea';  
import Select from './Select';

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      organisationName: '',
      postcode: '',
      process: '',
      daysOption: ["Monday",'Tuesday','Wednesday','Thursday','Friday'],
      daysSelected: '',
      areaOption: [],
      areaSelected: '',
      boroughOption: [],
      boroughSelected: '',      
      website: '',
      telephone: '',
      email: '',
      service: '',
      categoryOption: ['Health1','Educatoin2','Health','Educatoin','Dept','Houseing','Woman and Children'],
      categorySelected: []     
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleOrganisationNameChange = this.handleOrganisationNameChange.bind(this);
    this.handlePostcode = this.handlePostcode.bind(this);
    this.handleProcess =  this.handleProcess.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleAreaSelect =  this.handleAreaSelect.bind(this);
    this.handleBoroughSelect = this.handleBoroughSelect.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleTelephone =  this.handleTelephone.bind(this);
    this.handleEmail =  this.handleEmail.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
  }

  componentDidMount() {
    // fetch list of Area, Borough from the database
    // fillhandleCategorySelection=

    // get category list data 
  
  }

  handleOrganisationNameChange(e) {
    this.setState({ organisationName: e.target.value });
  }

  handlePostcode(e) {
    this.setState({ postcode: e.target.value });
  }

  handleProcess(e) {
    this.setState({ process: e.target.value });
  }

  handleDaySelect(e) {
    this.setState({ daysSelected: e.target.value });
  }

  handleAreaSelect(e) {
    this.seBoughrotState({ areaSelected: e.target.value });
  }

  handleBoroughSelect(e) {
    this.setState({ boroughSelected: e.target.value });
  }

  handleWebsite(e) {
    this.setState({ website: e.target.value });
  }

  handleTelephone(e) {
    this.setState({ telephone: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleCategorySelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if(this.state.categorySelected.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.categorySelected.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.categorySelected, newSelection];
    }
    this.setState({ categorySelected: newSelectionArray });
  }

  handleServiceChange(e) {
    this.setState({ service: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      organisationName: '',
      postcode: '',
      process: '',
      categorySelected: [],
      daysSelected: '',
      areaSelected: '',
      boroughSelected:'',
      website: '',
      telephone: '',
      email: '',
      service: ''
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      organisationName: this.state.organisationName,
      postcode: this.state.postcode,
      process: this.state.process,
      daysSelected: this.state.daysSelected,
      areaSelected: this.state.areaSelected,
      boroughSelected: this.state.boroughSelected,
      website: this.state.website,
      telephone: this.state.telephone,
      email: this.state.email,
      service: this.state.service,
      categorySelected: this.state.categorySelected
    };

    console.log('Send this in a POST request:', formPayload)
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className='wrapper' onSubmit={this.handleFormSubmit}>
        <SingleInput
          inputType={'text'}
          title={'Organisation Name'}
          name={'name'}
          controlFunc={this.handleOrganisationNameChange}
          content={this.state.organisationName}
          placeholder={'Type organisation name here'}/>
        <SingleInput
          inputType={'text'}
          title={'Postcode'}
          name={'postcode'}
          controlFunc={this.handlePostcode}
          content={this.state.postcode}
          placeholder={'Type postcode here'} />
        <SingleInput
          inputType={'text'}
          title={'Process'}
          name={'process'}
          controlFunc={this.handleProcess}
          content={this.state.process}
          placeholder={'Type process here (eg. Drop in)'} />
        <Select
          name={'days'}
          title={'Opening Day'}
          placeholder={'Select opening days'}
          controlFunc={this.handleDaySelect}
          options={this.state.daysOption}
          selectedOption={this.state.daysSelected} />
        <Select
          name={'area'}
          title={'Area'}
          placeholder={'Select area'}
          controlFunc={this.handleAreaSelect}
          options={this.state.areaOption}
          selectedOption={this.state.areaSelected} />
        <Select
          name={'borough'}
          title={'Borough'}
          placeholder={'Select borough'}
          controlFunc={this.handleBoroughSelect}
          options={this.state.boroughOption}
          selectedOption={this.state.boroughSelected} />
        <SingleInput
          inputType={'text'}
          title={'Website'}
          name={'website'}
          controlFunc={this.handleWebsite}
          content={this.state.website}
          placeholder={'Type organisation website '} />
        <SingleInput
          inputType={'text'}
          title={'Telephone'}
          name={'telephone'}
          controlFunc={this.handleTelephone}
          content={this.state.telephone}
          placeholder={'Type organisation telephone '} />
        <SingleInput
          inputType={'text'}
          title={'Email'}
          name={'email'}
          controlFunc={this.handleEmail}
          content={this.state.email}
          placeholder={'Type organisation email '} />
          <CheckboxGroup
          title={'Categories'}
          setName={'category'}
          type={'checkbox'}
          controlFunc={this.handleCategorySelection}
          options={this.state.categoryOption}
          selectedOptions={this.state.categorySelected} />
        <TextArea
          title={'Services'}
          rows={5}
          resize={false}
          content={this.state.service}
          name={'services'}
          controlFunc={this.handleServiceChange}
          placeholder={'Please list services (eg. -Health)'} />
        
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
    );
  }
}

export default FormContainer;