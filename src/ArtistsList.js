import React, { Component } from 'react';
import {
  ListView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';

import { Actions } from 'react-native-router-flux';

export default class ArtistsList extends Component<Props> {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }

  handlePress(artist) {
    Actions.artistDetail({ artist: artist });
  }

  render() {
    const artists = this.props.artists;

    return(
      <FlatList
        data={artists}
        renderItem={ ({item}) => {
          return (
            <TouchableOpacity onPress={() => this.handlePress(item)}>
              <ArtistBox artist={item} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}