import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

var MyCheckbox = React.createClass({

  render(){
    return(
      <div style={styles.block}>
        <Checkbox
          label="test"
          style={styles.checkbox}
        />
        <Checkbox
          label="Checked by default"
          defaultChecked={true}
          style={styles.checkbox}
        />
        <Checkbox
          label="test"
          style={styles.checkbox}
        />
      </div>
    );
  }
});

export default MyCheckbox;