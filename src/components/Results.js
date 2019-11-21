import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import copy from "copy-to-clipboard";
import { withAlert } from "react-alert";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      copied: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  }

  handleOnClick(event, obj) {
    copy(obj.photo.share_url);
    this.setState({
      selected: obj.photo,
      copied: false
    });
    this.props.alert.show(`Link ${obj.photo.share_url} copied to clipboard`);
  }

  render() {
    return (
      <div className="container">
        <hr />
        {this.props.pending ? (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}

        {this.props.photos.length > 0 ? (
          <Gallery
            photos={this.props.photos}
            direction="column"
            columns={this.columns}
            onClick={this.handleOnClick}
          />
        ) : null}
      </div>
    );
  }
}

Results = withAlert()(Results);
export default Results;
