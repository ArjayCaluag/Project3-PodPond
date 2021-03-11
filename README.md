PodPond

## Description
This [web application](https://podpond10.herokuapp.com/) deployed on Heroku is a full-stack application built with the MERN stack (Mongo, Express, React, Node). The app allows users to save specific podcasts (hosted on Spotify) to their own account, **MyPond**, where the user can also read and post public comments on each podcast.

![README example](https://user-images.githubusercontent.com/62715863/110835796-1ff5d380-8254-11eb-83a5-bdfd489c0574.gif)

## Table of Contents
* [Technologies Used](#technologies-used)
* [How to Access](#how-to-access)
* [What We Did](#what-we-did)
* [Code Snippets](#code-snippets)
* [Screenshots](#screenshots)
* [Authors](#authors)

---

## Technologies Used
* [React](https://reactjs.org/) for building a dynamic, component-based UI for this webpage using JavaScript and JSX.
* [Node.js](https://nodejs.org/en/docs/) to run this Javascript program in the terminal/Git Bash console during development.
* [Express](https://www.npmjs.com/package/express) for the use of shorthand methods for developing server code with Javascript.
* [MongoDB](https://www.mongodb.com/what-is-mongodb) as a document database for storing and querying data in the app.
* [Mongoose](https://mongoosejs.com/) as an ORM to manipulate the MongoDB database.
* [Spotify Developer API](https://developer.spotify.com/documentation/web-api/) for queries to the Spotify database and authentication necessary to do so.
* [Bootstrap](https://getbootstrap.com/) for its library of HTML element classes and corresponding CSS styles.
* [Git](https://git-scm.com/) for distributed version control, tracking changes over time and making them visible to collaborators.
* [Github](https://github.com/) for version control in the cloud, saving my changes and presenting them clearly to myself and others.

## How to Access
This webpage is accessible on most browsers and is hosted on Heroku. The site can be [accessed here](https://podpond10.herokuapp.com/), and here: <https://podpond10.herokuapp.com/>

---

## What We Did
We utilized the Spotify Developer API to power our search functionality, performing a query to their database for podcast titles based on the user's input. `User` accounts, saved `Podcasts`, and `Comments` posted on podcasts were all saved to our backend database with the Mongoose ORM. We filled data fields on the Podcast model with relevant information to be loaded to the page, such as each podcast's title, cover image, and a link to view the podcast's episodes on Spotify. Each User in the database has their own `saved` array listing the IDs of their saved podcasts, and those IDs point to each Podcast to retrieve its stored info. We employed the same structure to define Comments on specific Podcasts. We store a comment ID in the target Podcast's `commentIDs` array, and those IDs point to specific Comment data.

The frontend visual elements of the website are entirely constructed in React, which we used to dynamically populate the page contents with the data passed from our database. In our React app we execute Axios calls to our backend Express routes, where we query the database and return the requested data back to React. We use that data to dynamically render podcasts and comments on the webpage, and immediately reflecting changes made to the database by the user proceeding through the site flow.

## Code Snippets 

This snippet shows two examples of our backend data queries in our `pondController.js` file. When a user posts a comment, the function `newComment` creates a new Comment in the database using specific info passed from the frontend contained in `req.body`. Immediately after the comment is stored, its _id (the Mongoose ObjectID) is pushed into the commentIDs array for the particular podcast that the comment was posted on.

The function `showComments` queries to the Podcast model and populates its array of commentIDs with the full data stored for each of those comments. This populated data is returned to the frontend where we use it to dynamically render React components.
```javascript
// post a comment on a Podcast card
newComment: function (req, res) {
    db.Comment.create(req.body)
      .then(({ _id }) =>
        db.Podcast.findOneAndUpdate({ spotifyID: req.body.spotifyID }, 
        { $push: { commentIDs: _id } }, { new: true }))
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.json(err);
      });
},

  // show all comments on each Podcast
showComments: function (req, res) {
    db.Podcast.findOne({ spotifyID: req.params.id })
      .populate("commentIDs")
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.json(err);
      });
}
```

This next snippet showcases the function used to save a podcast of the users choice to the database and the implementation of multiple dynamic `PodCastCard` creations. The Wrapper component assists in the styling and spacing for each card that is created.
```javascript
const [podcasts, setPodcasts] = useState([]);

function saveToPond(podcast) {
    API.savePodcast({
      title: podcast.name,
      spotifyID: podcast.id,
      image: podcast.images[1].url,
      publisher: podcast.publisher,
      link: podcast.external_urls.spotify
    });
  }

return (
    <Wrapper>
        {podcasts.map((podcast, index) => {
          return <PodCastCard
            podcast={podcast}
            key={index}
            onClick={saveToPond}
            image={podcast.images[1].url}
            title={podcast.name}
            publisher={podcast.publisher}
            link={podcast.external_urls.spotify}
          />
        })}
      </Wrapper>
);
```

This final snippet represents storing our Spotify authorization token in a stateful variable, `userObject`, which we modified with `setUserObject` using the useState() React hook. We receive a token for spotify's API, access it through window.location.hash, then set it in our state and local storage.
```javascript
useEffect(() => {
    // Set token
    console.log("access: ", window.location.hash)
    let _token = hash.access_token;
    console.log("token: ", _token)
    if (_token) {
      // Set token
      props.setUserObject({
        ...props.userObject,
        token: _token
      });
    }
}, [])
```
## Screenshots
Example of the *Search* page:

![search example](https://user-images.githubusercontent.com/62715863/110845655-bd0a3980-825f-11eb-9b56-c96dd0912c19.PNG)

Example of the *MyPond* page:

![saved example](https://user-images.githubusercontent.com/62715863/110845687-c72c3800-825f-11eb-95e7-1b2aea86850a.PNG)
---

## Authors
Our team was comprised of Ron-Arjay Caluag, Sammy Kroner, and Rand Hale.

**Ron-Arjay Caluag**
* [LinkedIn](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
* [GitHub](https://github.com/ArjayCaluag)
* [Portfolio](https://arjaycaluag.github.io/React-Portfolio/)

**Sammy Kroner**
* [LinkedIn](www.linkedin.com/in/samuel-kroner-44aa11169)
* [GitHub](https://github.com/sammyk118)
* [Portfolio](https://github.com/sammyk118/Portfolio)

**Rand Hale**
* [LinkedIn](https://www.linkedin.com/in/rand-hale-83ba389b/)
* [GitHub](https://github.com/prophetrand)
* [Porfolio](https://prophetrand.github.io/portefeuille-reactif/)
