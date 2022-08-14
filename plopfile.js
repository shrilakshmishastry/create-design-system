module.exports = (plop) => {
  plop.setHelper("patterenGenerator",
    str => new RegExp("{/*theme*/}").replace("theme", str));

  plop.setGenerator("theme", {
    description: "Steps to add new theme",
    prompts: [{
      type: "list",
      name: "foldername",
      choices: ["theme", "bubbles", "builders", "fonts", "layouts"],
      message: "What type it is?"
    },
    {
      type: "input",
      name: "name",
      message: "Give the theme which your setting"
    },
    ],
    actions: [{
      type: "add",
      path: "src/pages/{{foldername}}/{{pascalCase name}}.tsx",
      templateFile: "plopTemplate/generalContent.hbs"
    },
    {
      type: "modify",
      path: "src/routers/index.tsx",
      pattern: /\{\/\* theme router here {2}\*\/\}/gi,
      templateFile: "plopTemplate/addToRouter.hbs"
    },
    {
      type: "modify",
      path: "src/routers/index.tsx",
      pattern: /\/\/import theme here/gi,
      templateFile: "plopTemplate/importFile.hbs",
    }, {
      type: "modify",
      path: "src/components/NavigationBar/{{foldername}}.tsx",
      pattern: /\{\/\* theme \*\/\}/gi,
      templateFile: "plopTemplate/addToSideNavBar.hbs",
    },
    {
      type: "modify",
      path: "src/components/NavigationBar/{{foldername}}.tsx",
      pattern: /\{\/\* bubbles \*\/\}/gi,
      templateFile: "plopTemplate/addToSideNavBar.hbs",
    },
    {
      type: "modify",
      path: "src/components/NavigationBar/{{foldername}}.tsx",
      pattern: /\{\/\* builders \*\/\}/gi,
      templateFile: "plopTemplate/addToSideNavBar.hbs",
    },
    {
      type: "modify",
      path: "src/components/NavigationBar/{{foldername}}.tsx",
      pattern: /\{\/\* fonts \*\/\}/gi,
      templateFile: "plopTemplate/addToSideNavBar.hbs",
    },
    {
      type: "modify",
      path: "src/components/NavigationBar/{{foldername}}.tsx",
      pattern: /\{\/\* layout \*\/\}/gi,
      templateFile: "plopTemplate/addToSideNavBar.hbs",
    },
    ]
  });
};
