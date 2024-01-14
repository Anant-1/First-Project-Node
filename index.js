require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
    "login": "Anant-1",
    "id": 54532485,
    "node_id": "MDQ6VXNlcjU0NTMyNDg1",
    "avatar_url": "https://avatars.githubusercontent.com/u/54532485?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Anant-1",
    "html_url": "https://github.com/Anant-1",
    "followers_url": "https://api.github.com/users/Anant-1/followers",
    "following_url": "https://api.github.com/users/Anant-1/following{/other_user}",
    "gists_url": "https://api.github.com/users/Anant-1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Anant-1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Anant-1/subscriptions",
    "organizations_url": "https://api.github.com/users/Anant-1/orgs",
    "repos_url": "https://api.github.com/users/Anant-1/repos",
    "events_url": "https://api.github.com/users/Anant-1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Anant-1/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Anant Pawar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 50,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2019-08-26T09:37:13Z",
    "updated_at": "2024-01-05T20:31:06Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myname', (req, res)=>{
    res.send("<h1>Anant Pawar</h1>")
})

app.get('/mygithub', (req, res)=>{
    res.json(githubData)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})