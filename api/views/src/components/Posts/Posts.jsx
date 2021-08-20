import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { Col, Container, Row } from 'reactstrap';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import gif from '../../Ulvi.gif';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
    margin: 10,
    overflowY: "scroll",
    height: 500,

  },
  content: {
    padding: 24,

  },
}));

export const Posts = React.memo((props) => {

  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  const posts = props.posts;

  return (
    <div style={{ margin: "15px" }} >
      <Container>
        <div className="divhomepage">
          <img width="100%" src={gif} />
          <h1 className="headingMain">Hello, World!</h1>
        </div>
      </Container>
      <h1 className="postsHeading" style={{ color: "white" }} >Recents Posts</h1>
      <Col>
        <Row>
          {
            posts.length ?

              posts.map(post => (
                <Card key={post.id} className={cx(cardStyles.root, shadowStyles.root)}>
                  <FullscreenIcon className="btnFullPost" />

                  <span className="spanDate">{"@" + post.author}</span>
                  <CardContent style={{ width: "100%" }} className={cardStyles.content}>

                    <TextInfoContent
                      classes={styles}
                      overline={post.createdAt.slice(0, 10)}
                      heading={post.title}
                      body={
                        post.des
                      }

                    />
                  </CardContent>
                </Card>


              ))
              :
              ''
          }
        </Row>
      </Col>
    </div>
  );
});
export default Posts