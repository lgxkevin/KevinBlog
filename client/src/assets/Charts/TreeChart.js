const data = {
  "name": "Web Dev",
  "children": [
    {
      "name": "Programming Languages",
      "children": [
        {
          "name": "Javascript",
          "children": [
            { "name": "TypeScript" },
            { "name": "ES6" }
          ]
        },
        { "name": "C#" },
        { "name": "Python" },
        { "name": "SQL" },
        { "name": "HTML5" },
        { "name": "CSS3" }
      ]
    },
    {
      "name": "Front-end Tech",
      "children": [
        {
          "name": "Angular",
        },
        {
          "name": "RxJs"
        },
        {
          "name": "React",
        },
        {
          "name": "jQuery"
        },
        {
          "name": "Testing",
          "children": [
            { "name": "Jasmine" },
            { "name": "Cypress" }
          ]
        }
      ]
    },
    {
      "name": "Back-end Tech",
      "children": [
        {
          "name": ".Net Framework"
        },
        {
          "name": ".Net Core"
        },
        {
          "name": "Node.js"
        },
        {
          "name": "REST API"
        },
        {
          "name": "Entity Framework"
        }
      ]
    },
    {
      "name": "Mobile Tech",
      "children": [
        { "name": "Ionic" }
      ]
    },
    {
      "name": "Cloud Tech",
      "children": [
        { "name": "AWS" },
        { "name": "Google Compute Platform" }
      ]
    },
    {
      "name": "Others",
      "children": [
        {
          "name": "Container Tech",
          "children": [
            { "name": "Docker" },
            { "name": "Kubernetes" },
          ]
        },
        { "name": "Ubuntu" },
        { "name": "Git" },
        { "name": "CI/CD" },
        {
          "name": "Dev Tools",
          "children": [
            { "name": "Android Studio" },
            { "name": "Postman" }
          ]
        }
      ]
    }
  ]
};

export const TreeChart = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },

  series: [
    {
      type: 'tree',

      data: [data],

      top: '1%',
      left: '7%',
      bottom: '1%',
      right: '50%',

      symbolSize: 10,

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: '14',
          fontWeight: 'bold'
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
            distance: 10
          }
        }
      },

      expandAndCollapse: false,

      animationDuration: 550,
      animationDurationUpdate: 750,

      lineStyle: {
        shadowColor: 'rgba(78, 78, 80, 0.5)',
        shadowBlur: 2,
        width: 3
      }
    }
  ]
};