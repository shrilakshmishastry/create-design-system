module.exports = (plop) =>{
  plop.setHelper('patterenGenerator',
    str=> new RegExp('{/*theme*/}').replace('theme',str));

  plop.setGenerator('theme',{
    description:'Steps to add new theme',
    prompts:[{
      type:'list',
      name:'foldername',
      choices:['theme','bubbles','builders','fonts','layouts'],
      message:'What type it is?'
    },
    {
      type:'input',
      name:'name',
      message:'Give the theme which your setting'
    },
    ],
    actions:[{
      type:'add',
      path: 'src/pages/{{foldername}}/{{pascalCase name}}.js',
      templateFile: 'plopTemplate/generalContent.hbs'
    },
    {
      type: 'modify',
      path: 'src/routers/index.js',
      pattern: /\{\/\* theme router here {2}\*\/\}/gi,
      templateFile: 'plopTemplate/addToRouter.hbs'
    },
    {
      type: 'modify',
      path: 'src/routers/index.js',
      pattern: /\/\/import theme here /gi,
      templateFile: 'plopTemplate/importFile.hbs',
    },{
      type: 'modify',
      path: 'src/components/NavigationBar/{{foldername}}.js',
      pattern: /\{\/\* theme \*\/\}/gi,
      templateFile: 'plopTemplate/addToSideNavBar.hbs',
    },
    {
      type: 'modify',
      path: 'src/components/NavigationBar/{{foldername}}.js',
      pattern: /\{\/\* bubbles \*\/\}/gi,
      templateFile: 'plopTemplate/addToSideNavBar.hbs',
    },
    {
      type: 'modify',
      path: 'src/components/NavigationBar/{{foldername}}.js',
      pattern: /\{\/\* builders \*\/\}/gi,
      templateFile: 'plopTemplate/addToSideNavBar.hbs',
    },
    {
      type: 'modify',
      path: 'src/components/NavigationBar/{{foldername}}.js',
      pattern: /\{\/\* fonts \*\/\}/gi,
      templateFile: 'plopTemplate/addToSideNavBar.hbs',
    },
    {
      type: 'modify',
      path: 'src/components/NavigationBar/{{foldername}}.js',
      pattern: /\{\/\* layout \*\/\}/gi,
      templateFile: 'plopTemplate/addToSideNavBar.hbs',
    },
    ]
  });
};
