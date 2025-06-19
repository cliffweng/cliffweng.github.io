import React from 'react';
import { HashRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Create a theme that matches a professional resume style
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#333333',
    },
  },
});

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h1" align="center">Cliff Weng</Typography>
      <Typography variant="h3" align="center" sx={{ mb: 2, color: '#666' }}>
        Software Engineer & Technology Leader
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: '#666' }}>
        Experienced in fintech, machine learning, and distributed systems. Passionate about education and technology innovation.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Box sx={{ flex: '1 1 600px', minWidth: 0 }}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid #e0e0e0' }}>
            <Typography variant="h2" gutterBottom>Professional Summary</Typography>
            <Typography variant="body1" paragraph>
              Senior software engineer with over 20 years of experience in financial technology, 
              machine learning, and distributed systems. Currently working at Polypaths, 
              specializing in quantitative finance and algorithmic trading systems.
            </Typography>
            <Typography variant="body1" paragraph>
              Strong background in computer science with expertise in Java performance optimization, 
              big data analytics, and machine learning algorithms. Passionate about education, 
              particularly in teaching computer science to students grades 6-12.
            </Typography>
            <Typography variant="body1">
              Proven track record of building high-performance, scalable systems and leading 
              engineering teams in fast-paced environments.
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{ flex: '0 0 300px', minWidth: 0 }}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid #e0e0e0', mb: 3 }}>
            <Typography variant="h3" gutterBottom>Contact</Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <Link href="https://linkedin.com" target="_blank" sx={{ textDecoration: 'none', color: '#333' }}>
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <Link href="https://github.com" target="_blank" sx={{ textDecoration: 'none', color: '#333' }}>
                  GitHub
                </Link>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <Link href="mailto:cliff@example.com" sx={{ textDecoration: 'none', color: '#333' }}>
                  Email
                </Link>
              </ListItem>
            </List>
          </Paper>
          
          <Paper elevation={0} sx={{ p: 3, border: '1px solid #e0e0e0' }}>
            <Typography variant="h3" gutterBottom>Key Skills</Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <ListItemText primary="Java Performance Optimization" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText primary="Machine Learning & AI" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText primary="Distributed Systems" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText primary="Financial Technology" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText primary="Big Data Analytics" />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>About Me</Typography>
      <Typography variant="body1" paragraph>
        I was born as 翁偉峯 in a Taiwan Sugar plantation (斗六糖廠) in Yunlin (雲林) Taiwan, to 翁哲雄 and 王麗君. I grew up in the 70s and 80s in Peitou (北投) Taiwan.
      </Typography>
      <Typography variant="body1" paragraph>
        I attended Chien Kuo High School (建中), where I played rugby for 2 years. After graduating, I studied Computer Science at National Taiwan University. After college, I served 2 years in the Taiwanese military on Kinmen island (金門) as an army lieutenant.
      </Typography>
      <Typography variant="body1" paragraph>
        In 1992, I came to New York City to study Computer Science at Courant Institute of NYU. I worked at Paloma Partners in Greenwich, CT, then Citadel in Chicago. In 1999, I co-founded a fintech company before joining Polypaths, where I currently work.
      </Typography>
      <Typography variant="body1" paragraph>
        I am raising 3 boys with my wife Elaine and they are my joy and pride, and my sunshine.
      </Typography>
    </Container>
  );
}

function Experience() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>Professional Experience</Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>Polypaths</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          1999 - Present
        </Typography>
        <Typography variant="body1" paragraph>
          Senior Software Engineer specializing in quantitative finance and algorithmic trading systems. 
          Lead development of high-performance, low-latency trading platforms and risk management systems.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>Citadel</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          1995 - 1999
        </Typography>
        <Typography variant="body1" paragraph>
          Software Engineer working on high-frequency trading systems and market data processing. 
          Developed low-latency trading algorithms and infrastructure.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>Paloma Partners</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          1993 - 1995
        </Typography>
        <Typography variant="body1" paragraph>
          Early career position at one of the first major hedge funds. Worked on quantitative 
          trading strategies and risk management systems.
        </Typography>
      </Box>
    </Container>
  );
}

function Skills() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>Technical Skills</Typography>
      
      <Typography variant="h3" gutterBottom>Programming Languages</Typography>
      <List>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Java" secondary="Expert level - Performance optimization, JVM tuning, concurrent programming" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Python" secondary="Advanced - Machine learning, data analysis, scientific computing" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="C++" secondary="Intermediate - Systems programming, performance-critical applications" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="JavaScript/TypeScript" secondary="Intermediate - Web development, React, Node.js" />
        </ListItem>
      </List>
      
      <Typography variant="h3" gutterBottom sx={{ mt: 3 }}>Technologies & Frameworks</Typography>
      <List>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Machine Learning" secondary="TensorFlow, PyTorch, scikit-learn, H2O.ai" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Big Data" secondary="Apache Spark, Hadoop, distributed computing" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Databases" secondary="PostgreSQL, MongoDB, Redis, time-series databases" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Cloud & DevOps" secondary="AWS, Docker, Kubernetes, CI/CD" />
        </ListItem>
      </List>
      
      <Typography variant="h3" gutterBottom sx={{ mt: 3 }}>Domain Expertise</Typography>
      <List>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Financial Technology" secondary="Algorithmic trading, risk management, quantitative finance" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="High-Performance Computing" secondary="Low-latency systems, optimization, parallel processing" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Education Technology" secondary="CS education platforms, interactive learning tools" />
        </ListItem>
      </List>
    </Container>
  );
}

function Education() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>Education</Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>New York University</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Master of Science in Computer Science, 1992-1994
        </Typography>
        <Typography variant="body1" paragraph>
          Courant Institute of Mathematical Sciences. Focused on algorithms, 
          data structures, and theoretical computer science.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>National Taiwan University</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Bachelor of Science in Computer Science, 1988-1992
        </Typography>
        <Typography variant="body1" paragraph>
          Studied computer science during the early days of the field. 
          Focused on programming fundamentals and software engineering.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h3" gutterBottom>Additional Education</Typography>
      <Typography variant="body1" paragraph>
        I focus mostly on CS education for kids grade 6-12, creating educational platforms 
        and resources to teach programming and computer science concepts.
      </Typography>
      
      <Typography variant="h3" gutterBottom>Educational Projects</Typography>
      <List>
        <ListItem sx={{ px: 0 }}>
          <Link href="https://csdojo.cliffweng.com" target="_blank" sx={{ textDecoration: 'none', color: '#333' }}>
            Coding Dojo JS
          </Link>
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <Link href="https://csdojo.cliffweng.com" target="_blank" sx={{ textDecoration: 'none', color: '#333' }}>
            Coding Dojo Python
          </Link>
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <Link href="https://quantdojo.cliffweng.com" target="_blank" sx={{ textDecoration: 'none', color: '#333' }}>
            Quant Dojo
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}

function Projects() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>Projects & Contributions</Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>H2O.ai Platform</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Open Source Machine Learning Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Led engineering team in building H2O, an open-source machine learning platform 
          used by thousands of data scientists worldwide. Contributed to core algorithms, 
          distributed computing infrastructure, and performance optimization.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>Educational Platforms</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          CS Education for K-12 Students
        </Typography>
        <Typography variant="body1" paragraph>
          Developed multiple educational platforms for teaching computer science to students 
          grades 6-12. Created interactive learning environments for JavaScript, Python, 
          and quantitative finance concepts.
        </Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>Performance Optimization</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Java Virtual Machine & Compiler Optimization
        </Typography>
        <Typography variant="body1" paragraph>
          Expert in Java performance optimization, JVM tuning, and compiler optimization. 
          Contributed to various open-source projects and published technical articles 
          on performance engineering.
        </Typography>
      </Box>
    </Container>
  );
}

// Travel subpages
function Travel() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>Travel</Typography>
      <Typography variant="body1" paragraph>
        Welcome to my travel section! Here you can find links to my various travel resources and experiences.
      </Typography>
    </Container>
  );
}

function MyGrandTour() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2">My Grand Tour</Typography>
      <Typography paragraph>
        Welcome to my Grand Tour! Here I share my travel experiences, photos, and stories from around the world.
      </Typography>
      <Link href="https://grandtourofmine.blogspot.com/?view=mosaic" target="_blank" sx={{ fontWeight: 600 }}>
        Visit My Grand Tour Blog
      </Link>
    </Container>
  );
}

function NomadList() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2">Nomad List</Typography>
      <Typography paragraph>
        My digital nomad profile and experiences.
      </Typography>
      <Link href="https://nomadlist.com/@cliffweng" target="_blank" sx={{ fontWeight: 600 }}>
        View My Nomad List Profile
      </Link>
    </Container>
  );
}

function Pinterest() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2">Pinterest</Typography>
      <Typography paragraph>
        My travel inspiration boards and collections.
      </Typography>
      <Link href="https://pinterest.com/cliffweng" target="_blank" sx={{ fontWeight: 600 }}>
        Visit My Pinterest Boards
      </Link>
    </Container>
  );
}

function AllTrails() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2">AllTrails</Typography>
      <Typography paragraph>
        My hiking and trail logs and experiences.
      </Typography>
      <Link href="https://alltrails.com/members/cliffweng" target="_blank" sx={{ fontWeight: 600 }}>
        View My AllTrails Profile
      </Link>
    </Container>
  );
}

function HikingProject() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2">Hiking Project</Typography>
      <Typography paragraph>
        My hiking project profile and trail experiences.
      </Typography>
      <Link href="https://www.hikingproject.com/user/200123456/cliffweng" target="_blank" sx={{ fontWeight: 600 }}>
        View My Hiking Project Profile
      </Link>
    </Container>
  );
}

function CodingDojo() { return <Container maxWidth="md" sx={{ mt: 4 }}><Typography variant="h2">Coding Dojo</Typography><Typography>Placeholder for Coding Dojo content.</Typography></Container>; }
function CodingDojoJS() { return <Container maxWidth="md" sx={{ mt: 4 }}><Typography variant="h2">Coding Dojo JS</Typography><Typography>Placeholder for Coding Dojo JS content.</Typography></Container>; }
function QuantDojo() { return <Container maxWidth="md" sx={{ mt: 4 }}><Typography variant="h2">Quant Dojo</Typography><Typography>Placeholder for Quant Dojo content.</Typography></Container>; }
function CodingDojoBlog() { return <Container maxWidth="md" sx={{ mt: 4 }}><Typography variant="h2">Coding Dojo Blog</Typography><Typography>Placeholder for Coding Dojo Blog content.</Typography></Container>; }

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Education', path: '/education' },
  { label: 'Projects', path: '/projects' },
  { label: 'Travel', path: '/travel', isMenu: true },
];

function SocialIcons() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, bgcolor: '#ededed', py: 1, borderBottom: '1px solid #e0e0e0' }}>
      <IconButton component="a" href="#" sx={{ bgcolor: '#789', color: '#fff', '&:hover': { bgcolor: '#567' } }}>
        <SearchIcon />
      </IconButton>
      <IconButton component="a" href="https://www.linkedin.com/in/cliffweng/" target="_blank" sx={{ bgcolor: '#0077b5', color: '#fff', '&:hover': { bgcolor: '#005983' } }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton component="a" href="https://github.com/cliffweng" target="_blank" sx={{ bgcolor: '#b94a2c', color: '#fff', '&:hover': { bgcolor: '#843015' } }}>
        <GitHubIcon />
      </IconButton>
      <IconButton component="a" href="https://facebook.com/cliffweng" target="_blank" sx={{ bgcolor: '#3b5998', color: '#fff', '&:hover': { bgcolor: '#2d4373' } }}>
        <FacebookIcon />
      </IconButton>
      <IconButton component="a" href="https://twitter.com/cliffweng" target="_blank" sx={{ bgcolor: '#1da1f2', color: '#fff', '&:hover': { bgcolor: '#0d8ddb' } }}>
        <TwitterIcon />
      </IconButton>
      <IconButton component="a" href="https://instagram.com/cliffweng" target="_blank" sx={{ bgcolor: '#833ab4', color: '#fff', '&:hover': { bgcolor: '#5e2670' } }}>
        <InstagramIcon />
      </IconButton>
    </Box>
  );
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
  const handleMenuClose = () => { setAnchorEl(null); };
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: '#2c3e50' }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Cliff Weng
              </Typography>
              {navLinks.map((link) =>
                link.isMenu ? (
                  <React.Fragment key={link.label}>
                    <Button
                      color="inherit"
                      onClick={handleMenuOpen}
                      endIcon={<ArrowDropDownIcon />}
                      sx={{ ml: 1, fontSize: '0.9rem' }}
                    >
                      {link.label}
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                      <MenuItem component={RouterLink} to="/travel" onClick={handleMenuClose}>Overview</MenuItem>
                      <MenuItem component="a" href="https://grandtourofmine.blogspot.com/?view=mosaic" target="_blank" onClick={handleMenuClose}>My Grand Tour</MenuItem>
                      <MenuItem component="a" href="https://nomadlist.com/@cliffweng" target="_blank" onClick={handleMenuClose}>Nomad List</MenuItem>
                      <MenuItem component="a" href="https://pinterest.com/cliffweng" target="_blank" onClick={handleMenuClose}>Pinterest</MenuItem>
                      <MenuItem component="a" href="https://alltrails.com/members/cliffweng" target="_blank" onClick={handleMenuClose}>AllTrails</MenuItem>
                      <MenuItem component="a" href="https://www.hikingproject.com/user/200123456/cliffweng" target="_blank" onClick={handleMenuClose}>Hiking Project</MenuItem>
                    </Menu>
                  </React.Fragment>
                ) : (
                  <Button
                    key={link.path}
                    color="inherit"
                    component={RouterLink}
                    to={link.path}
                    sx={{ ml: 1, fontSize: '0.9rem' }}
                  >
                    {link.label}
                  </Button>
                )
              )}
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
          <SocialIcons />
          <Box sx={{ bgcolor: '#f5f5f5', py: 3, mt: 4, borderTop: '1px solid #e0e0e0' }}>
            <Container maxWidth="lg">
              <Typography variant="body2" align="center" color="text.secondary">
                © 2024 Cliff Weng. All Rights Reserved.
              </Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;




