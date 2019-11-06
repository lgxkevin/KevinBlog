import React from "react";
import Button from "@material-ui/core/Button"

const AdminComponent = (props) => {

  const SubmitClick =() => {
    console.log('Button clicked!')
  };

  return (
      <div>
        Admin works
        <Button
            variant="contained"
            color="primary"
            onClick={()=>SubmitClick()}
        >
          Submit
        </Button>
      </div>
  )
};

export default AdminComponent;
