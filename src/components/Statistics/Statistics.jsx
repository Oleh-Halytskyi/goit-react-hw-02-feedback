import { Box } from '../Box';
import { StatisticsItem } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <Box as="ul">
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {countTotalFeedback}</StatisticsItem>
      <StatisticsItem>
        Positive feedback {countPositiveFeedbackPercentage}%
      </StatisticsItem>
    </Box>
  );
};

export default Statistics;
