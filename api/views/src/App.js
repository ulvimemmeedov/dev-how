import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Search from './components/Search';
import { Switch, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Navinew from './components/bar/Navinew';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import gif from './Ulvi.gif'
import AddPost from './components/Posts/AddPost';
function App() {

  const [user, setUser] = useState([]);
  const [message, setMessage] = useState('');
  const [posts,setPosts] = useState([]);


  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


  useEffect(async () => {

    const token = await localStorage.getItem('token');

    axios.defaults.params = {}
    axios.defaults.params['token'] = token;

    const getUser = async () => {

      await axios.get(`/api/users/me/`).then(async (res) => {

        if (res.data) {

          await setUser(res.data)

          localStorage.setItem('username', res.data.username)
        }
        if (res.data.error) {

          setMessage(res.data.error.message)

          localStorage.removeItem('username');

        }
      })
    }
    getUser()
      axios.get('/api/posts/all').then(res=>{
        setPosts(res.data.post);
      })

  }, [])
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )


  const res = encodeURI(gif)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        backgroundImage: "url(" + res + ")",
        backgroundSize: "cover",
        height: "100%",
      }}>
        <div>
          <Row>
            <Col>
              <Navinew />
            </Col>
          </Row>
          <Row>

          </Row>

          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Switch>
                <Container >
                  <Route exact path='/'  render={props => (
                    <Posts
                      {...props}
                      posts={posts}
                      user={user}
                    />)
                  } />
                  <Route exact path='/addpost' component={AddPost} />

                  <Route exact path='/search' component={Search} />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/login' render={props => (
                    <Login
                      {...props}
                      setUser={setUser}
                     
                    />)
                  } />
                  <Route exact path='/register' render={props => (
                    <Register
                      {...props}
                      setUser={setUser}
                    />)
                  } />
                </Container>
                <Route component={NotFound} />
              </Switch>
            </Col>
            <Col sm={2}>
            </Col>
          </Row>
          <Row>
          </Row>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
