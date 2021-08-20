import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { Container } from 'reactstrap';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

export const LeftBar = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
      <Container style={{margin:"15px"}} >
          <h1>Top global</h1>
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader
        image={
          'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
        }
        extra={'7 minutes'}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          overline={'FACEBOOK INC.'}
          heading={'React'}
          body={
            'A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.'
          }
        />
      </CardContent>
    </Card>
    </Container>
  );
});

export default LeftBar