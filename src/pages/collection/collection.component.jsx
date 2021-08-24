import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // selectCollection is a function that takes a function and returns a funciton do we added state
});

export default connect(mapStateToProps)(CollectionPage);
