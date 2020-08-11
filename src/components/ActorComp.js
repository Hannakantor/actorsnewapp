import React from 'react';
import '../App.css';

class ActorComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <img src={this.props.actorObject.img}></img>
            <a className="actor-comp" href={this.props.actorObject.imdb}> {this.props.actorObject.fname + ' ' + this.props.actorObject.lname}</a>
      </div>
    );
  }
}

export default ActorComp;