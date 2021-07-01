import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const TitleSection: React.FC = () => {
  const styles = useStyles();

  return (
    <section className={styles.titleSection}>
      <div>
        <Typography variant="h1" component="h1" className={styles.title}>
          Well Home
        </Typography>
      </div>
    </section>
  );
};
export default TitleSection;
