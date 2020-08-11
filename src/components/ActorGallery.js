import React from 'react';
import ActorComp from './ActorComp';

class ActorGalley extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          {/* for(let i=0; i < actorsProp.length; i++){
            <ActorComp actorObject={actorsProp[i]}/>
          } */}
          {this.props.actorsProp.map((actor) => <ActorComp actorObject={actor}/>)}
      </div>
    );
  }
}

export default ActorGalley;