import { Button } from './FeedbackOptions.styled';
import { Box } from '../Box';

const FeedbackOptions = ({ incrementGood, incrementNeutral, incrementBad }) => {
  return (
    <Box display="flex" mb="30px" style={{ gap: '15px' }}>
      <Button type="button" onClick={incrementGood}>
        Gold
      </Button>
      <Button type="button" onClick={incrementNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={incrementBad}>
        Bad
      </Button>
    </Box>
  );
};

export default FeedbackOptions;
