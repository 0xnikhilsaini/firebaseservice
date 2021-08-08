import  TutorialDataService from './service.js'


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


  // this.unsubscribe = TutorialDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);



  // onDataChange(items) {
  //   let tutorials = [];

  //   items.forEach((item) => {
  //     let id = item.id;
  //     let data = item.data();
  //     tutorials.push({
  //       id: id,
  //       title: data.title,
  //       description: data.description,
  //       published: data.published,
  //     });
  //   });

  //   this.setState({
  //     tutorials: tutorials,
  //   });
  // }