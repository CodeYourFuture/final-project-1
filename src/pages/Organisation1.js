import React, { Component } from 'react';


export default class Organisation1 extends Component {
  render() {
    const website=this.props.website;
    // const [email\r]=this.props.["email\r"];
    const tel=this.props.tel;
    const area=this.props.area;
    const process=this.props.process;
    const name=this.props.name;
    const clients=this.props.clients;
    const services=this.props.services;
    const borough=this.props.borough;
    const type=this.props.type;
    const day=this.props.day;
    return (
      <div className='test'>
      
    {/*  website:{website}<br/>*/}
      tel: {tel}<br />
      area:  {area}<br />
      process:  {process}<br />
      name:  {name}<br />
      clients: {clients}<br />
      services: {services}<br />
      borough: {borough}<br />
      type:  {type}<br />
      day:  {day}<br />
      </div>

    );
  }
}