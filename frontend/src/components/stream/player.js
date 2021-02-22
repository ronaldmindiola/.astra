import React from 'react'
import Button from "@material-ui/core/Button";

function Player() {

  return (
    <>
      <audio
        src="http://stream2.emisorasvirtuales.com:8652/;"
        autoplay
        controls
      />
      <Button color="primary" onClick={""}>
        Play
      </Button>
    </>
  );
}

export default Player;










