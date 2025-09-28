const information = document.getElementById('info');

information.innerText = `В этом приложении исопльзуются \n
версия Хром: v. ${versions.chrome()}, \n
версия node js: v. ${versions.node()}, \n 
версия electron js: v. ${versions.electron()}.`;
