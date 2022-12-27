import { Title } from './Section.styled';
import { Box } from '../Box';

const Section = ({ titleFeedback, titleStatistics, children }) => {
  return (
    <Box as="section">
      <Title>
        {titleFeedback}
        {titleStatistics}
      </Title>{' '}
      {children}
    </Box>
  );
};

export default Section;
