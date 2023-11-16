# fullstack-portfolio-back


# Full-stack Portfolio Project

This project is designed to test all of the skills you've learned so far. By the end of this project, you should have a portfolio-ready project you can share on your resume as well as with potential employers.

## Project scoring

This project has three different parts on which you will be graded. Each part is weighted differently.

- 70% of the project is scored on **completion**.
- 20% of the project is scored through the **mastery rubric**.
- 10% of the project is scored through **stretch goals**.

In total, you must receive at least 70% to complete this project. For example, you could attain 55% of points through the completion requirements, 10% of points through the mastery rubric, and 5% of points through the stretch goals.

### Completion

To complete this project, you will need to build a full-stack application that meets the following feature and technical requirements.

#### Overall requirements

1. Create a GitHub repository for both the front-end and back-end applications and upload your code to it.
1. Both the front-end and back-end applications should be successfully deployed to the web.
1. Your front-end repository should have a `readme.md` file with setup instructions for your application.
   - Your readme should also include links to your back-end GitHub repository, both of your deployed URLs, and a link to the Trello board you used to manage your work.
1. Your project should have a coherent theme and narrative.

#### Back-end feature requirements

To complete the back-end application, you will need to build a RESTful server that performs CRUD actions on a single resource.

5. Your server should incorporate at least one table that includes:
   - A primary key
   - At least 7 total fields
   - At least 4 different data types are used among those fields
1. Your table should have at least two constraints, which can include `DEFAULT` values.
1. A route exists to create new resources.
1. A route exists to read all resources.
1. A route exists to read a single resource.
1. A route exists to update a single resource.
1. A route exists to delete a single resource.
1. An appropriate "Not Found" response is given when a route is requested that does not match the created routes.

#### Front-end feature requirements

To complete the front-end application, you will need to build a React application that allows for CRUD operations to be performed on a single resource. You will also need to display the data thoughtfully and clearly.

13. All pages should include the same navigation bar, which includes the name of the application and a button to create a new resource.
1. You should have an Index page that presents all of the resources in your database table.
1. After clicking on a single resource, you should be brought to a Show page which includes more detailed information about the specific resource.
1. When the button in the navigation bar to create a new resource is clicked, you should be brought to a new page that includes a form to create a new resource.
1. Forms should be properly labeled and the type of inputs should be properly set. For example, an input that requires a number should have type number, not text.
1. When a new resource form is submitted, the resource should be created in the database and the user should be brought to that new resource's Show page.
1. On the resource's Show page, there should be a button to edit the current resource. When clicked, the user is brought to a form page with data already filled in that can be edited.
1. When an edited resource form is submitted, the resource should be edited in the database and the user should be brought to that existing resource's Show page.
1. On the resource's Show page, there should be a button to delete the current show page. When clicked, a message is displayed that asks the user if they are sure they want to delete the resource. If the user confirms, the resource is deleted and the user is brought to the Index page.
1. Using the resource's data, perform a calculation or create a useful feature (e.g., sort, filter, infinite-scroll) that can be performed on the front-end application and displayed to the user that has not been demonstrated in class.
   - For example, if your app has a list of products, load the first 10 and when the user scrolls to the bottom the next ten are loaded. Your sort or filter feature may take more than one argument and/or include being able to sort in ascending or descending order.

### Mastery rubric

This section of the project is designed to measure your increasing skill at writing good code and following best practices.

To view components of the mastery rubric, view the appropriate assignment on Canvas.

### Stretch goals

This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

- Display errors to your user when they incorrectly fill out a form attempting to create or update a resource.
- Add a one-to-many table relationship to your database.
- Create middleware as part of your back-end application that validates for particular values when a resource is being created or updated.
- Use query parameters to filter your resource by different fields or qualities.
- When viewing all resources, break up your resources visually onto multiple pages.
- Visually allow for interacting with a second resource from the front-end.
- Allow for a list of "favorite" resources that are stored locally through [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
- Make your application responsive to different kinds of devices.

Points will be allocated in this section at the discretion of the instructor.

## Getting started

_Do not_ fork this repository. Instead, create your repositories on GitHub and submit the URL directly to Canvas.

Then, follow the specifications above to create your application. Work with your instructors to approve your features before you begin working on them.




# Full Stack Store App

This application should adhere to the guidelines and rubric presented in the [Full Stack Personal Portfolio Project](https://github.com/pursuit-curriculum/project-full-stack-portfolio)

This readme is an example of how one could implement all the features required for the project when the theme is an online store.

The store will filled with products. Choose any theme you want:

- Soup
- Collectable rubber bands
- $1000 Store (no items worth less than $1000)

Or anything else you want.

## User Stories

The user stories encompass both back-end and front-end implementation:

1. A user can see a list of products to buy.
1. A user can click on a product and see a detailed view.
1. A user can click on the new button that takes me to a new form that lets the user create a new product.
1. After clicking the submit button on the new form, it takes the user to a view that confirms the product has been created.
1. A user can click on a button to see a pre-filled edit form and edit a product.
1. After editing the product, a user is taken to a view that confirms the product has been updated.
1. A user can delete a product.
1. A user can visit this app from a provided URL on the internet that uses data from the express API.
1. A user can [choose a new feature you have not built or that has not been demonstrated in class - ask your instructor for more guidance, if needed].

## Example RESTful Routes

|  #  | Action  |      URL      | HTTP Verb |    CRUD    |                Description                |
| :-: | :-----: | :-----------: | :-------: | :--------: | :---------------------------------------: |
|  1  |  Index  |   /products   |    GET    |  **R**ead  |   Get a list (or index) of all products   |
|  2  |  Show   | /products/:id |    GET    |  **R**ead  | Get an individual view (show one product) |
|  3  | Create  |   /products   |   POST    | **C**reate |           Create a new product            |
|  4  | Destroy | /products/:id |  DELETE   | **D**elete |             Delete a product              |
|  5  | Update  | /products/:id |    PUT    | **U**pdate |             Update a product              |

<br />

The model will have, at minimum, these following attributes:

- `id` - serial primary key
- `name` - a string, required
- `description` - a string
- `price` - a number
- `rating` - a number between 0 and 5
- `featured` - a boolean

Consider:

- adding a url for an image
- color
- dimensions/size

Or anything else that makes sense for your store.

## Example Stores

<details><summary>Inspiration 1</summary>

![](./assets/flow-hack.png)

</details>

<details><summary>Inspiration 2</summary>

![](./assets/neoboutique.png)

</details>