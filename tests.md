# Starting off Initial thoughts

This is a classic react application, involving convoluted passdown functions, state management, passing downstate (dynamic allocations) and async, await for json api calls. I would have made an emphasis on TDD.

tdd advantages:
Better understanding of the program design, expected input and sample outputs
Flexible and modular code.
Easy refactoring.

I love using Cypress for end to end test, Jest for integration and unit tests, Headless browser to recreate scenarios in browser, Jasmine for unit test and Puppeteer
I would create custom test labels for the buttons or div elements that i want to test out so i can quickly use them or reuse them.

import react testing library first, jest dom for expect, renderer for snapshot testing
import renderer from "react-test-renderer"

React testing library:
Just find the elements We want to interact with callthemusing methods like .getByPlaceHolder or getbytext or getbytestid etc, we could easily use fireevent like click submit form button, get current users button etc, to mock user like interaction with the pace and await some dom changes, and expect some dom changest

before each test we could use to reset db or start afresh
provide jest the location of our link which runs in localhost and port 3000

# tests for components/functions/api calls involving posts

it("button in add posts mounts and dismounts",()=>{
const div = document.createElement("div");
ReactDOM.render(<Button></Button>,div);
}

it("button renders correctly",()=>{
const {getByTestId} = render(<Button label = "Save Post"></Button>);
expect(getByTestId('button')).toHaveTextContent("Save Post")
}

it("matches snapshot",() =>{
const tree = renderer.create(<Button label = "Save Post"></Button>).toJSON();
expect(tree).toMatchSnapshot();
})

in timeago.js -- expect date,timeago and time period to match regex
in addpost.js -- expect onclickingbuttonsubmit number of posts to increase
in addpost.js -- firing up onclickingbuttonsubmit expect post content to not be NaN
in addpost.js -- when the component renders first expect the id postAuthur and postCntent to be empty

# tests for components/functions/api calls involving users

perform integration test on userpage, to ensure the getuserbyid and getuserpostsperid is working in the user page, maybe perform a mock call (write a testcase to Check against a static result)
on start expect post title, author, content to be null
on clicking new post expect the number of likes to be 0
when clicked on view post/users expect the "/link" to work

when any fetchusers or posts or notifications or any api calls, expect that to return a json or stringify object

simulate an end to end test in cypress on edit post, get posttitleid type "something', get postcontent type "something", fire click a button to submit and expect a change in posts.children.length(), have length , length()+1

testing api, mock the api calls in jest, using assigining global fetch some static value to prevent frequent calling to api or if api is changing dynamically,

also when ever there is a api call add a test .expecttohavebeencalled(1) or tohavebeencalledwith(userID) or tohavebeencalledwith(/api) so we know that the api is called for

when api is called expect some regex expression

now assign the global fetch a static api call, convert it into json and write a test case to match with that static json object.
