# Getting Started with Pokemon App

1. Clone the project. 
2. Run **npm install** to install node modules
3. run: **npm run start** to run the app in the development mode.
4. Open **http://localhost:3000** to view it in the browser. 
5. Run **npm run test**  to run unit tests


# Pokemon App
On the Home page of the APP it loads 20 pokemon cards:
<img width="1087" alt="Screenshot 2024-04-26 at 4 17 04 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/e64dd2bc-bac9-47f6-be68-3580e6f84b25">

User can Load more 20 by clicking **Load More** Button
<img width="1129" alt="Screenshot 2024-04-26 at 4 17 17 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/0023bc1c-3842-4109-a2a1-bde599bf2169">

Clicking on any Pokemon Card will navigate to the Pokemon Match Details page.
It loads 3 favorable and 3 unfavorable matches based on Pokemon type.
User can click **Load More** to load 3 more favorable and 3 more unfavorable matches 
<img width="845" alt="Screenshot 2024-04-26 at 4 18 09 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/2cb8a65a-12fd-406a-80aa-5d9abfb1bd7d">


# Login/Logout Functionality

On the page a user can Login/Logout
<img width="1129" alt="Screenshot 2024-04-26 at 5 09 57 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/b6e7eaab-69ef-4f65-ae85-cc77dab65c23">

Clicking Login link leads to Auth form. Login with email.
<img width="1147" alt="Screenshot 2024-04-26 at 5 10 23 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/3b8c21aa-93b9-4a0e-b5b4-18217bf9bb17">

Now user can see his email and is able to Logout
<img width="1125" alt="Screenshot 2024-04-26 at 5 10 40 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/294fca2b-4830-491f-947b-5bd868f1466e">

Note: Auth does not preven user from visiting the page the protection is not implemented for simplicyty.

The only page protected by Auth is **http://localhost:3000/secret**. To be able to see the secret page user should be logged in.

<img width="1122" alt="Screenshot 2024-04-26 at 5 49 01 PM" src="https://github.com/pterenin/pokemon-app/assets/17990616/ec7b8c25-a41f-41f8-9296-3c4064a550ff">

