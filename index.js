const state = {
  posts: []
}

const getPosts = async() => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const allPosts = await response.json();
  state.posts = allPosts;

  renderPosts();
}

const renderPosts = () => {
  // create an ol
  const ol = document.createElement(`ol`);
  
  // go through each posts
  state.posts.forEach((singlePost) => {
    // create a li for each post
    const li = document.createElement(`li`);
    // put the title of the post in the li
    li.innerText = singlePost.title;

    // add event listener for click to the li
    li.addEventListener(`click`, () => {
      console.log(singlePost);
      // get the details for the post that was clicked
      const detailsHTML = `
        <h2>${singlePost.title}</h2>

        <p>${singlePost.body}</p>
      `;
      // replace the main element with the details
      main.innerHTML = detailsHTML;
    });

    // append the li to the ol
    ol.append(li);
  });
  // grab the main
  const main = document.querySelector(`main`);
  // put the ol in the main
  main.append(ol);
}

getPosts();

  
