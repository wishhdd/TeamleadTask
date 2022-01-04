# Тестовое задание Teamlead JS-разработчик

Для выполнения задания вам потребуется ознакомиться с базовыми возможностями [Atlassian Connect Express](https://bitbucket.org/atlassian/atlassian-connect-express) и компонентов [Atlaskit](https://atlaskit.atlassian.com/packages). 

Atlassian Connect Express - это фреймворк на базе Express, который был предконфигурирован для разработчиков Atlassian Cloud.
Atlaskit - набор компонентов интерфейса, созданные для React и удовлетворяющие требованиям Atlassian Design Guideline. 
(Использование любых сторонних компонентов для построения интерфейса запрещено)

## Задание

### Задача 1

Задача заключается в разработке и демонстрации рабочего базового компонента в среде Jira Cloud. Вам необходимо создать приложение с двумя страницами (модули типа "pages"). Первая должна называться "Teamlead Task" и располагаться на главной странице Jira Cloud, вторая должна называться "Settings" и располагаться в блоке настроек приложений Jira. Для того, чтобы пользователи смогли определить к чему относится страница "Settings", включите ее в специальную секцию, которая будет называться "Teamlead Task" (одноименно с названием главной страницы).

Каждая из страниц должна включать заголовок со своим названием: "Teamlead Task" и "Settings" соответственно.

В результате работы у вас должно получиться две страницы:
- Teamlead Task -> с заголовком "Teamlead Task";
- Settings (в секции Teamlead Task, в меню настроек приложений Jira) -> с заголовком "Settings".

Теперь нам необходимо наполнить жизнью наши страницы. Разместите на странице "Teamlead Task" любой элемент из Atlaskit (одним из самых простых считается Spinner).

### Задача 2

Задача заключается в ознакомлении с модульной структурой Jira.
Вам необходимо добавить панель на [страницу просмотра задачи Jira](https://developer.atlassian.com/cloud/jira/platform/modules/web-panel/).
Наполнить панель можно любым контентом на ваше усмотрение.


## Заключение

В конце выполнения тестового задания от вас ожидается ссылка на ваше работающее приложение в сети (вы можете бесплатно разместить его при помощи Heroku). Рассмотрение работы приложения происходит на нашем экземпляре Jira Cloud. Ожидается его работа согласно описанным требованиям.

## Ссылки
#### [Teamlead Task на heroku](https://tlt-h-wishhdd.herokuapp.com)
#### [Видео с демонстрацией работы Teamlead Task](https://youtu.be/YHcJwnn0-CI)
