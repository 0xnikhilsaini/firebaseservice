// Import stylesheets
import './style.css';
import TutorialDataService from './service.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// TutorialDataService.create(data)
// .then(() => {
//   console.log("Created new item successfully!");
//   this.setState({
//     submitted: true,
//   });
// })
// .catch((e) => {
//   console.log(e);
// });

// TutorialDataService.update(this.state.currentTutorial.id, {
//   published: status,
// })
//   .then(() => {
//     this.setState((prevState) => ({
//       currentTutorial: {
//         ...prevState.currentTutorial,
//         published: status,
//       },
//       message: "The status was updated successfully!",
//     }));
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   TutorialDataService.update(this.state.currentTutorial.id, data)
//   .then(() => {
//     this.setState({
//       message: "The tutorial was updated successfully!",
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   TutorialDataService.delete(this.state.currentTutorial.id)
//   .then(() => {
//     this.props.refreshList();
//   })
//   .catch((e) => {
//     console.log(e);
//   });
TutorialDataService.getAll()
  .orderBy('title', 'asc')
  .onSnapshot(onDataChange);

function onDataChange(items) {
  let tutorials = [];

  items.forEach(item => {
    let id = item.id;
    let data = item.data();
    tutorials.push({
      id: id,
      title: data.title,
      description: data.description,
      published: data.published
    });
  });

  console.log(tutorials);
}
