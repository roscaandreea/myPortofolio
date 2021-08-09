import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_MICROSOFT_NET from "../../assets/img/skills/microsoft_.NET.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_MATPLOTLIB from "../../assets/img/skills/matplotlib.svg";
import L_SCIKIT_LEARN from "../../assets/img/skills/scikit_learn.svg";
import L_PANDAS from "../../assets/img/skills/pandas.svg";
import L_PLOTLY from "../../assets/img/skills/plotly.svg";
import L_GRAPHQL from "../../assets/img/skills/GraphQL.svg";
import L_D3 from "../../assets/img/skills/d3.svg";
import L_MATERIALUI from '../../assets/img/skills/material-ui.svg';


export const skills = {
    frontend: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS3",
            imgSrc: L_CSS3,
            skillName: "CSS3",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            
            link: "https://sass-lang.com/",
            imgAltText: "Sass",
            imgSrc: L_SASS,
            skillName: "Sass",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },
        {
            link: "https://redux.js.org/",
            imgAltText: "Redux",
            imgSrc: L_REDUX,
            skillName: "Redux",
        },
        {
            link: "https://reacttraining.com/react-router/",
            imgAltText: "React Router",
            imgSrc: L_REACT_ROUTER,
            skillName: "React Router",
        },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
        { 
          link: "https://material-ui.com/",
          imgAltText: "Materia-UI",
          imgSrc: L_MATERIALUI,
          skillName: "Material-UI"
       },
        {
            link: "https://styled-components.com/",
            imgAltText: "styled-components",
            imgSrc: L_STYLED_COMPONENTS,
            skillName: "styled-components",
        },
        {
          link: "https://d3js.org/",
          imgAltText: "D3.js",
          imgSrc: L_D3,
          skillName: "D3.js",
      },
    ],
    backend: [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: L_NODE_JS,
            skillName: "Node.js",
          },
          {
            link: "https://expressjs.com/",
            imgAltText: "Express",
            imgSrc: L_EXPRESS,
            skillName: "Express.js",
          },
          {
            link: "https://graphql.org/",
            imgAltText: "GraphQL",
            imgSrc: L_GRAPHQL,
            skillName: "GraphQL",
          },
          {
            link: "https://www.djangoproject.com/",
            imgAltText: "Django",
            imgSrc: L_DJANGO,
            skillName: "Django",
          },
          {
            link: "https://flask.palletsprojects.com/",
            imgAltText: "Flask",
            imgSrc: L_FLASK,
            skillName: "Flask",
          },
        ],
        hostingPlatforms: [
            {
              link: "https://pages.github.com/",
              imgAltText: "GitHub Pages",
              imgSrc: L_GITHUB_PAGES,
              skillName: "GitHub Pages",
            },
          ],
        programmingLanguages: [
            {
              link: "https://www.javascript.com/",
              imgAltText: "JavaScript",
              imgSrc: L_JAVASCRIPT,
              skillName: "JavaScript",
            },
            {
              link: "https://www.typescriptlang.org/",
              imgAltText: "TypeScript",
              imgSrc: L_TYPESCRIPT,
              skillName: "TypeScript",
            },
            {
              link: "https://www.python.org/",
              imgAltText: "Python",
              imgSrc: L_PYTHON,
              skillName: "Python",
            },
            {
              link: "https://en.wikipedia.org/wiki/Java_%28programming_language%29",
              imgAltText: "Java",
              imgSrc: L_JAVA,
              skillName: "Java",
            },
            {
                link: "https://en.wikipedia.org/wiki/.NET_Framework",
                imgAltText: "Microsoft_.NET",
                imgSrc: L_MICROSOFT_NET,
                skillName: "Microsoft_.NET",
              },
          ],
          databases: [
            {
              link: "https://www.postgresql.org/",
              imgAltText: "PostgreSQL",
              imgSrc: L_POSTGRESQL,
              skillName: "PostgreSQL",
            },
            {
              link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
              imgAltText: "MS-SQL",
              imgSrc: L_MSSQL,
              skillName: "MS-SQL",
            },
            {
              link: "https://www.mongodb.com/",
              imgAltText: "MongoDB",
              imgSrc: L_MONGODB,
              skillName: "MongoDB",
            },
          ],
        machineLearning: [
            {
                link: "https://matplotlib.org/",
                imgAltText: "Matplotlib",
                imgSrc: L_MATPLOTLIB,
                skillName: "Matplotlib",
              },
              {
                link: "https://scikit-learn.org/stable/index.html",
                imgAltText: "Scikit_learn",
                imgSrc: L_SCIKIT_LEARN,
                skillName: "Scikit_learn",
              },
              {
                link: "https://pandas.pydata.org/",
                imgAltText: "Pandas",
                imgSrc: L_PANDAS,
                skillName: "Pandas",
              },
              {
                link: "https://plotly.com/",
                imgAltText: "Plotly",
                imgSrc: L_PLOTLY,
                skillName: "Plotly",
              },
            ],
            versionControl: [
                {
                  link: "https://git-scm.com/",
                  imgAltText: "GIT",
                  imgSrc: L_GIT,
                  skillName: "GIT",
                },
              ],

};