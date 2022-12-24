import PropTypes from 'prop-types';
import {
  StatisticsSection,
  TitleName,
  StatsList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../function/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title ? <TitleName>{title}</TitleName> : null}
      <StatsList>
        {stats.map(data => (
          <Item key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{data.label}</Label>
            <Percentage>{data.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
