const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';

    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
};

//!then catch
// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(err => console.log(err));

//! async / await
// const init = async () => {
//   await createPost({ title: 'Post Three', body: 'This is post three' });

//   getPosts();
// };

// init();

//! async / await with fetch
// const fetchUsers = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await res.json();

//     users.map(user => console.log(user.name));
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchUsers();

//! Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = fetch(
//   'https://jsonplaceholder.typicode.com/todos/1'
// ).then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );

////
////
////
////
////

//! fetch with then / catch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => users.map(user => console.log(user.name)));

//! fetch with async / await
const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  users.map(user => console.log(user.name));
};

getUsers();
