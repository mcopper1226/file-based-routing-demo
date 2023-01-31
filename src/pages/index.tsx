import { Box, Button, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useModal } from '../context/ModalContext';

const Test = () => {
  const { setModal, clearModal } = useModal();
  return (
    <div>
      <Button
        onClick={() => {
          setModal({
            closeAriaLabel: 'Close modal',
            footer: (
              <Box float="right">
                <SpaceBetween direction="horizontal" size="xs">
                  <Button onClick={() => clearModal()} variant="link">
                    Cancel
                  </Button>
                  <Button variant="primary">Ok</Button>
                </SpaceBetween>
              </Box>
            ),
            header: 'Modal title'
          });
        }}
      >
        Open a Modal
      </Button>
    </div>
  );
};

export default Test;
