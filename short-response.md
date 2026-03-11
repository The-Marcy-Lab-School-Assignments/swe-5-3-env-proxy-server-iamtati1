# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:
It is considered unsafe to make requests to a third party API like Giphy from front end Javascript code, becuase the Javascript code is outwardly visible. Hence the purpose of an `API KEY`. The API Key holds the access to an API which is only meant for the creator. If this API Key is not hidden to the outside, it could cause risky behavior of ***unauthorised individuals*** to steal. It is best to provide an interaction that mimicks this:

`Front End => Back End => Giphy API
            Express App`

This provides security when cycling through a request and other responsibilites when processing a request from a server to a client.

That is why we created the `.env` file and we saved the .env to a variable, to cover and protect ourselves from any malicious behavior from third party API's like Giphy. We introduce seperating what the client can see vs. what 3rd party apps can see.

Attackers continuously monitor for any public repositories and forked code to get any cloud access keys and is public to frontend Javascript.
---

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:
Proxy servers are valuable because they serve as a barrier between my ***device*** and the ***internet***. The proxy strategy is: we would in most cases connect directly but instead we route our requests through the proxy, which forwards them and provides benefits including: privacy, security, and access control. 

It helps avoid exposing API Keys in client-side code while still providing access to API's that require keys. We do this by creating a variable to save the API key into to ensure the key isn't shown publicy. We use the `Render` site to deploy and provide a layer of security for my computer.

---

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

Environment variables work with the variables in our code to protect our keys. We saved the key in our `gitignore` and `.env` file. We displayed the variable saved as the key and to be our `environment variable`. If the .env file was accidentally committed to GitHub, it would **expose** our key leaving room for malicous users to steal content to or API.

---
