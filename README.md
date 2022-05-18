<h1 align="center">
  <img alt="Plant Manager" title="Plant Manager" src="logo.png" />
</h1>
<p align="center">
  Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha..
</p>
<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=32B768&labelColor=000000" />
 <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=32B768&labelColor=000000" alt="NLW 05" />
</p>


![cover](capa.png?style=flat)
<br><br>

<h1 align="center">👥 User Stories</h1>
<p align="center">
O João ganhou um vaso de flor e não sabe qual é o melhor lugar da casa para colocar/decorar.
João se questinou: será que essa platinha prefere ambiente externo? Sombra? Qual será a frequência ideal para regá-la?
</p>
<p align="center">
Além do mais, essa pessoa tem uma rotina bem agitada, então que tal ajudá-la a lembrar de regar a plantinha na frequência correta?
Ou seja, o App ajuda o João a cuidar com carinho das platinhas que ele tem na sua casa. :heart:
</p>

<br><br>

<h1 align="center">Features</h1>
<p align="center">
Abaixo estão os passo a passo utilizado durante o desenvolvimento do app.
</p>

-   [ ] Salva a identificação do usuário no próprio dispositivo o usuário;
-   [ ] Consome de API os dados e características de cada planta;
-   [ ] Salva localmente a planta que o usuário possue;
-   [ ] Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;

<br><br>

<h1 align="center">:pushpin: Algumas das tecnologias utilizadas</h1>
<p align="center">
  Abaixo estão algumas das tecnologias utilizadas durante o desenvolvimento do app.
</p>
<br>
<p align="center">
  <img  src="https://img.shields.io/badge/-Yarn-1C1E24?&style=for-the-badge&logoColor=fff&logo=yarn&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-TypeScript-1C1E24?&style=for-the-badge&logoColor=fff&logo=TypeScript&logoWidth=25"/>
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" />
</p>

<br><br>

<h1 align="center">🔖 Layout</h1>
<p align="center">
Você pode visualizar o layout do projeto através <a href="https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate">desse link</a>. É necessário ter conta no <a href="http://figma.com/">Figma</a> para acessá-lo.
</p>


<br><br>

<h1 align="center">🚀 Instalação</h1>
<p align="center">
  Documentação para iniciar a instalação deste projeto.
</p>

Utilize o **yarn** ou o **npm install** para instalar as depedências do projeto.
Em seguida, inicie o projeto e a API fake com o Json Server.

```cl
expo start
json-server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

 Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.


 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3333',
});

export default api;
```


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) para mais detalhes.

---

Feito com 💜 by <a href="https://www.linkedin.com/in/danielgorgonha/">Daniel R Gorgonha</a> :wave:

