module.exports = (plop) =>{
  plop.setGenerator('theme',{
    description:'Steps to add new theme',
    prompts:[{
      type:'input',
      name:'name',
      message:'Give the theme which your setting'
    }],
    actions:[{
      type:'add',
      path: 'src/pages/{{name}}.js'
    }]
  });
};
